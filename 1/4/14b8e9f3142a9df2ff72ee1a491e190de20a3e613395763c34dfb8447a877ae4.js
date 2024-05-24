@charset "UTF-8";
.group:after {
  content: "";
  display: table;
  clear: both;
}

* {
  -webkit-font-smoothing: antialiased;
}

a {
  transition: all 0.2s ease-in-out;
}
a:hover {
  color: rgb(255, 139, 0);
  text-decoration: none;
}
a:focus, a:active {
  color: rgb(255, 139, 0);
}

@font-face {
  font-family: "Glyphter";
  src: url("fonts/custom-icon-fonts.eot");
  src: url("fonts/custom-icon-fonts.eot?#iefix") format("embedded-opentype"), url("fonts/custom-icon-fonts.woff") format("woff"), url("fonts/custom-icon-fonts.ttf") format("truetype"), url("fonts/custom-icon-fonts.svg#Glyphter") format("svg");
  font-weight: normal;
  font-style: normal;
}
[class*=icon-]:before {
  display: inline-block;
  font-family: "Glyphter";
  font-style: normal;
  font-weight: normal;
  line-height: 1;
  position: relative;
  top: 4px;
  margin-right: 2px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-podcast:before {
  content: "A";
}

.icon-video:before {
  content: "B";
}

.icon-event:before {
  content: "C";
}

.icon-webinar:before {
  content: "D";
}

.logo {
  display: inline-block;
  width: 160px;
  height: 52px;
  background-image: url("../img/logo.svg");
  background-size: auto auto;
  background-repeat: no-repeat;
  margin-left: 12px;
  float: left;
  transition: all 0.5s ease-in-out;
}
.logo--sister {
  width: 163px;
  max-height: 55px;
  margin-top: 12px;
}
.logo--footer {
  width: 200px;
}
@media (min-width: 38.75em) {
  .logo--footer {
    float: right;
  }
}
@media (max-width: 81.25em) {
  .logo--footer {
    height: 28px;
    margin: 0 0 24px 0;
  }
}

.nav__shrink .logo {
  background-image: url("../img/logo__m.svg");
}

.js-blocked {
  width: 100%;
  background-color: red;
  height: 50px;
  display: block;
}

.dropdown-backdrop {
  position: static;
}
.dropdown--icon .dropdown-toggle {
  height: 48px;
  width: 48px;
  border-radius: 50%;
  padding: 0;
  margin: 0;
  box-shadow: 0 0 10px 0 rgba(255, 139, 0, 0.1);
  border: 0;
  transition: all 0.4s ease-in-out;
}
.dropdown--icon .dropdown-toggle .material-icons {
  vertical-align: middle;
  color: rgb(255, 139, 0);
}
.dropdown--icon .dropdown-toggle:hover {
  box-shadow: 0 0 10px 0 rgba(255, 139, 0, 0.2);
  background-color: rgb(255, 255, 255);
}
.dropdown--icon .dropdown-toggle:focus, .dropdown--icon .dropdown-toggle:active {
  outline: 0;
  background-color: rgb(255, 255, 255);
}
.dropdown--icon.open .dropdown-toggle:hover, .dropdown--icon.open .dropdown-toggle:focus, .dropdown--icon.open .dropdown-toggle:active {
  background-color: rgb(255, 255, 255);
}

.dropdown-menu {
  z-index: 10;
  background-color: rgb(255, 139, 0);
  box-shadow: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  border-radius: 0;
  padding: 12px 0;
  margin: 10px 0 0 0;
  right: auto;
  left: 50%;
  transform: translate(-50%, 0);
}
.dropdown-menu:after {
  content: "";
  background-image: url("../img/nav-pointer.png");
  width: 19px;
  height: 10px;
  position: absolute;
  left: 0;
  top: -10px;
  right: 0;
  margin: auto;
}
.dropdown-menu li a {
  display: block;
  color: rgb(255, 255, 255);
  padding: 10px 24px;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: normal;
}
.dropdown-menu li a:hover {
  color: rgb(38, 38, 38);
  background-color: transparent;
}

.embed-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  max-width: 100%;
}
.embed-container iframe, .embed-container object, .embed-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.page table {
  width: 100%;
}
.page table tr td {
  border: 1px solid #dedede;
  padding: 10px;
}

/* Single posts popular posts block */
.popular-posts-block h2 {
  margin-bottom: 24px;
  margin-top: 0;
  font-size: 18px;
}
.popular-posts-block .block-post-items {
  border-top: 4px solid #ff8b00;
  padding: 16px 24px;
  box-shadow: 0 0 10px 3px rgba(68, 80, 85, 0.15);
}
.popular-posts-block .block-post-items .postitem {
  padding: 24px 0;
  border-bottom: 1px solid rgba(68, 80, 85, 0.2);
}
.popular-posts-block .block-post-items .postitem .posttitle {
  font-size: 18px;
}
.popular-posts-block .block-post-items .postitem .postexcerpt {
  font-size: 0.9em;
}
.popular-posts-block .block-post-items .postitem:nth-last-child(2) {
  border-bottom: 0;
}
.popular-posts-block .postthumb img {
  width: 100%;
  height: auto;
}

:root {
  --animate-duration: 1.5s;
  --animate-delay: 1s;
  --animate-repeat: 1;
}

.animate__animated {
  -webkit-animation-duration: 1.5s;
  animation-duration: 1.5s;
  -webkit-animation-duration: var(--animate-duration);
  animation-duration: var(--animate-duration);
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.animate__animated.animate__infinite {
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}

.animate__animated.animate__repeat-1 {
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: var(--animate-repeat);
  animation-iteration-count: var(--animate-repeat);
}

.animate__animated.animate__repeat-2 {
  -webkit-animation-iteration-count: 2;
  animation-iteration-count: 2;
  -webkit-animation-iteration-count: calc(var(--animate-repeat) * 2);
  animation-iteration-count: calc(var(--animate-repeat) * 2);
}

.animate__animated.animate__repeat-3 {
  -webkit-animation-iteration-count: 3;
  animation-iteration-count: 3;
  -webkit-animation-iteration-count: calc(var(--animate-repeat) * 3);
  animation-iteration-count: calc(var(--animate-repeat) * 3);
}

.animate__animated.animate__delay-1s {
  -webkit-animation-delay: 1s;
  animation-delay: 1s;
  -webkit-animation-delay: var(--animate-delay);
  animation-delay: var(--animate-delay);
}

.animate__animated.animate__delay-2s {
  -webkit-animation-delay: 2s;
  animation-delay: 2s;
  -webkit-animation-delay: calc(var(--animate-delay) * 2);
  animation-delay: calc(var(--animate-delay) * 2);
}

.animate__animated.animate__delay-3s {
  -webkit-animation-delay: 3s;
  animation-delay: 3s;
  -webkit-animation-delay: calc(var(--animate-delay) * 3);
  animation-delay: calc(var(--animate-delay) * 3);
}

.animate__animated.animate__delay-4s {
  -webkit-animation-delay: 4s;
  animation-delay: 4s;
  -webkit-animation-delay: calc(var(--animate-delay) * 4);
  animation-delay: calc(var(--animate-delay) * 4);
}

.animate__animated.animate__delay-5s {
  -webkit-animation-delay: 5s;
  animation-delay: 5s;
  -webkit-animation-delay: calc(var(--animate-delay) * 5);
  animation-delay: calc(var(--animate-delay) * 5);
}

.animate__animated.animate__faster {
  -webkit-animation-duration: 0.5s;
  animation-duration: 0.5s;
  -webkit-animation-duration: calc(var(--animate-duration) / 2);
  animation-duration: calc(var(--animate-duration) / 2);
}

.animate__animated.animate__fast {
  -webkit-animation-duration: 0.8s;
  animation-duration: 0.8s;
  -webkit-animation-duration: calc(var(--animate-duration) * 0.8);
  animation-duration: calc(var(--animate-duration) * 0.8);
}

.animate__animated.animate__slow {
  -webkit-animation-duration: 2s;
  animation-duration: 2s;
  -webkit-animation-duration: calc(var(--animate-duration) * 2);
  animation-duration: calc(var(--animate-duration) * 2);
}

.animate__animated.animate__slower {
  -webkit-animation-duration: 3s;
  animation-duration: 3s;
  -webkit-animation-duration: calc(var(--animate-duration) * 3);
  animation-duration: calc(var(--animate-duration) * 3);
}

@media print, (prefers-reduced-motion: reduce) {
  .animate__animated {
    -webkit-animation-duration: 1ms !important;
    animation-duration: 1ms !important;
    transition-duration: 1ms !important;
    -webkit-animation-iteration-count: 1 !important;
    animation-iteration-count: 1 !important;
  }
  .animate__animated[class*=Out] {
    opacity: 0;
  }
}
@-webkit-keyframes pulse {
  from {
    transform: scale3d(1, 1, 1);
  }
  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }
  to {
    transform: scale3d(1, 1, 1);
  }
}
@keyframes pulse {
  from {
    transform: scale3d(1, 1, 1);
  }
  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }
  to {
    transform: scale3d(1, 1, 1);
  }
}
.animate__pulse {
  -webkit-animation-name: pulse;
  animation-name: pulse;
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
}

body {
  font-family: "Roboto", sans-serif;
  padding-top: 80px;
  font-size: 16px;
  color: rgb(68, 80, 85);
}
@media (max-width: 58.75em) {
  body {
    padding-top: 50px;
  }
}

a {
  color: rgb(255, 139, 0);
}
a:hover {
  color: rgb(255, 180, 102);
}

.admin-bar .nav, .admin-bar .menu__overlay {
  top: 32px;
}
.admin-bar .ad__canvas--scroll .ad__canvas {
  top: 82px;
}

h1, h2, h3, h4, h5 {
  font-family: "PT Sans", sans-serif;
  font-weight: 600;
}

.container {
  position: relative;
}
.container__header {
  display: block;
  position: absolute;
  top: 0;
  left: -65px;
  width: 50px;
  height: 100%;
}
@media (max-width: 57.5em) {
  .container__header {
    position: relative;
    top: 0;
    left: 0;
    display: inline-block;
    width: 100%;
    margin-bottom: 15px;
  }
}
@media (min-width: 61.9375em) and (max-width: 69.875em) {
  .container__header {
    position: relative;
    top: 0;
    left: 0;
    display: inline-block;
    width: 100%;
    margin-bottom: 15px;
  }
}
@media (min-width: 75em) and (max-width: 84.875em) {
  .container__header {
    position: relative;
    top: 0;
    left: 0;
    display: inline-block;
    width: 100%;
    margin-bottom: 15px;
  }
}
.container__header--inner {
  background-color: rgb(255, 139, 0);
  display: block;
  height: 100%;
}
@media (max-width: 57.5em) {
  .container__header--inner {
    padding: 10px;
  }
}
@media (min-width: 61.9375em) and (max-width: 69.875em) {
  .container__header--inner {
    padding: 10px;
  }
}
@media (min-width: 75em) and (max-width: 84.875em) {
  .container__header--inner {
    padding: 10px;
  }
}
.container__header--adslot {
  text-align: center;
  margin-bottom: 30px;
}
.container__heading {
  display: inline-block;
  white-space: nowrap;
  transform: translate(5px, 10px) rotate(-90deg);
  font-family: "PT Sans", sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: #fff;
  position: relative;
  top: 10px;
  left: 5px;
}
.container__heading:before {
  content: "";
  float: right;
  margin-top: 100%;
}
@media (max-width: 57.5em) {
  .container__heading {
    transform: translate(0) rotate(0);
    top: 0;
  }
  .container__heading:before {
    content: "";
    float: none;
    margin-top: 0;
  }
}
@media (min-width: 61.9375em) and (max-width: 69.875em) {
  .container__heading {
    transform: translate(0) rotate(0);
    top: 0;
  }
  .container__heading:before {
    content: "";
    float: none;
    margin-top: 0;
  }
}
@media (min-width: 75em) and (max-width: 84.875em) {
  .container__heading {
    transform: translate(0) rotate(0);
    top: 0;
  }
  .container__heading:before {
    content: "";
    float: none;
    margin-top: 0;
  }
}
.container__highlightlinktext {
  text-align: center;
  color: #ffffff;
  font-size: 1.2em;
}
.container__highlightlinktext a {
  color: inherit;
  margin-top: 40px;
}

/* =WordPress Core
-------------------------------------------------------------- */
.alignnone {
  margin: 5px 20px 20px 0;
}

.aligncenter,
div.aligncenter {
  display: block;
  margin: 5px auto 5px auto;
}

.alignright {
  float: right;
  margin: 5px 0 20px 20px;
}

.alignleft {
  float: left;
  margin: 5px 20px 20px 0;
}

a img.alignright {
  float: right;
  margin: 5px 0 20px 20px;
}

a img.alignnone {
  margin: 5px 20px 20px 0;
}

a img.alignleft {
  float: left;
  margin: 5px 20px 20px 0;
}

a img.aligncenter {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.wp-caption.alignnone {
  margin: 5px 20px 20px 0;
}

.wp-caption.alignleft {
  margin: 5px 20px 20px 0;
}

.wp-caption.alignright {
  margin: 5px 0 20px 20px;
}

.wp-caption img {
  border: 0 none;
  height: auto;
  margin: 0;
  max-width: 98.5%;
  padding: 0;
  width: auto;
}

.wp-caption p.wp-caption-text {
  font-size: 11px;
  line-height: 17px;
  margin: 0;
  padding: 0 4px 5px;
}

/* Text meant only for screen readers. */
.screen-reader-text {
  clip: rect(1px, 1px, 1px, 1px);
  position: absolute !important;
  white-space: nowrap;
  height: 1px;
  width: 1px;
  overflow: hidden;
}

.screen-reader-text:focus {
  background-color: #f1f1f1;
  border-radius: 3px;
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.6);
  clip: auto !important;
  color: #21759b;
  display: block;
  font-size: 14px;
  font-size: 0.875rem;
  font-weight: bold;
  height: auto;
  left: 5px;
  line-height: normal;
  padding: 15px 23px 14px;
  text-decoration: none;
  top: 5px;
  width: auto;
  z-index: 100000; /* Above WP toolbar. */
}

.slick-slider {
  visibility: hidden;
  opacity: 0;
  transition: all 0.2s ease-in-out;
}

.slick-slider.slick-initialized {
  visibility: visible;
  opacity: 1;
}

.collapse {
  display: block;
  height: 0;
  overflow: hidden;
}

.collapse.in {
  height: auto;
  width: 100%;
}

.stretched-link::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  pointer-events: auto;
  content: "";
  background-color: rgba(0, 0, 0, 0);
}

.navicon-button {
  display: inline-block;
  position: relative;
  transition: 0.25s;
  cursor: pointer;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  top: -4px;
}
.navicon-button .navicon:before, .navicon-button .navicon:after {
  transition: 0.25s;
}
.navicon-button:hover {
  transition: 0.5s;
  opacity: 1;
}
.navicon-button:hover .navicon:before, .navicon-button:hover .navicon:after {
  transition: 0.25s;
}

.navicon {
  position: relative;
  width: 30px;
  height: 3px;
  background: #FFF;
  transition: 0.5s;
}
.navicon:before, .navicon:after {
  display: block;
  content: "";
  height: 3px;
  width: 30px;
  background: #FFF;
  position: absolute;
  transition: 0.5s 0.25s;
}
.navicon:before {
  top: 10px;
}
.navicon:after {
  top: -10px;
}
.navicon__button {
  background: transparent;
  position: relative;
  float: right;
  border: 0;
  margin: 0;
  height: 70px;
  padding: 0 10px;
  outline: 0;
}
@media (min-width: 57.5em) {
  .navicon__button {
    display: none;
  }
}
.navicon__button.open {
  color: #fefefe !important;
  background-color: rgba(255, 180, 102, 0.6) !important;
}

.open:not(.steps) .navicon:before,
.open:not(.steps) .navicon:after {
  top: 0 !important;
}

.open .navicon:before,
.open .navicon:after {
  transition: 0.5s;
}

/* × and + */
.open.x .navicon {
  background: transparent;
  transform: scale(0.85);
}
.open.x .navicon:before {
  transform: rotate(-45deg);
}
.open.x .navicon:after {
  transform: rotate(45deg);
}

.open.plus {
  transform: rotate(45deg);
}

.hits__results {
  display: none;
}
.hits__results h2 {
  margin-bottom: 20px;
  margin-top: 0;
}

.ais-hits__empty {
  margin: 12px;
}

#search-input {
  height: 46px;
  border-radius: 6px 0 0 6px;
}

.footer {
  border-top: 1px solid rgba(68, 80, 85, 0.2);
  margin: 60px 0 0 0;
}
.footer h4 {
  margin: 0;
}
@media all {
  .footer__col_1 .footer__site-links > li > a {
    border-top: 0;
  }
}
.footer__info {
  padding: 0;
  margin: 0;
}
@media (max-width: 39.3125em) {
  .footer__info {
    margin-bottom: 24px;
  }
}
@media (max-width: 38.6875em) {
  .footer__info-contain h4 {
    padding-top: 24px;
    border-top: 1px solid rgba(68, 80, 85, 0.2);
  }
}
.footer__info-container {
  padding: 60px 0;
}
@media (max-width: 38.6875em) {
  .footer__info-container {
    padding-top: 0;
  }
}
@media (min-width: 58.125em) and (max-width: 81.25em) {
  .footer__info-container .col-md-2 {
    width: 25%;
  }
}
.footer__info li {
  list-style-type: none;
  margin: 10px 0;
}
.footer__info li a {
  font-size: 16px;
  color: rgb(68, 80, 85);
}
.footer__info li a:hover {
  color: rgb(255, 139, 0);
}
.footer__site-links {
  padding: 0;
  margin: 0;
}
.footer__site-links > li {
  margin-bottom: 24px;
}
@media (max-width: 38.6875em) {
  .footer__site-links > li {
    margin-bottom: 0;
  }
}
.footer__site-links > li > a {
  font-family: "PT Sans", sans-serif;
  font-weight: 600;
  font-size: 18px !important;
}
.footer__site-links > li > a .material-icons {
  display: inline-block;
  vertical-align: middle;
  float: right;
  position: relative;
  z-index: 99;
}
@media (min-width: 38.6875em) {
  .footer__site-links > li > a .material-icons {
    display: none;
  }
}
@media (max-width: 38.6875em) {
  .footer__site-links > li > a {
    padding: 24px 0;
    border-top: 1px solid rgba(68, 80, 85, 0.2);
    display: block;
  }
}
.footer__site-links li {
  list-style-type: none;
}
.footer__site-links li a {
  font-size: 16px;
  color: rgb(68, 80, 85);
}
.footer__site-links li a:hover {
  color: rgb(255, 139, 0);
}
@media (min-width: 38.6875em) {
  .footer__site-links li .collapse.sub-menu {
    display: block !important;
    height: auto !important;
  }
}
.footer__site-links li .collapse.sub-menu.in {
  padding-bottom: 24px;
}
.footer__site-links li .sub-menu {
  padding: 0;
  margin: 0;
}
.footer__site-links li .sub-menu li a {
  margin: 10px 0;
  display: block;
}
.footer__sister {
  margin-top: 24px !important;
}
.footer .mo__social-nav {
  margin-top: 10px;
}
.footer__copyright {
  margin-bottom: 24px;
  font-size: 16px;
}

.footer.pre-footer {
  background-color: #fbfbfb;
}
.footer.pre-footer .footer__info-container {
  padding: 60px 0 0px 0;
}
.footer.pre-footer p {
  margin: 0 0 13px;
  font-size: 14px;
  line-height: 24px;
}
.footer.pre-footer h2 {
  margin-top: 0px;
  margin-bottom: 20px;
}

.at-share-btn {
  box-shadow: 0 0 10px 3px rgba(68, 80, 85, 0.15);
  margin: 0 5px !important;
}
.at-share-btn:hover {
  transform: translateY(0) !important;
}
.at-share-btn g path {
  fill: rgb(255, 139, 0) !important;
}

.addthis_inline_share_toolbox {
  margin: 0 12px 0 0;
}

.nav {
  height: 80px;
  padding: 0 12px;
  display: table;
  width: 100%;
  box-shadow: 0 10px 40px 0 rgba(255, 139, 0, 0.05);
  background-color: rgb(255, 255, 255);
  position: fixed;
  z-index: 999;
  transition: all 0.5s ease-in-out;
  top: 0;
}
@media (max-width: 58.75em) {
  .nav {
    height: 50px;
  }
  .nav__logo {
    width: 160px;
  }
  .nav__logo .logo {
    width: 160px;
    height: 23px;
  }
}
.nav__back-resource {
  float: right;
  margin-top: 25px;
}
@media (max-width: 58.75em) {
  .nav__back-resource {
    margin-top: 12px;
  }
}
.nav__back-resource a {
  color: rgb(68, 80, 85);
  font-size: 14px;
}
.nav__logo {
  display: table-cell;
  vertical-align: middle;
  float: none;
  width: 185px;
}
.nav__logo p {
  display: inline;
}
@media (max-width: 58.75em) {
  .nav__logo {
    width: auto;
  }
}
.nav__share {
  display: table-cell;
  vertical-align: middle;
  text-align: right;
  width: 172px;
  transform: translateY(-120px);
  transition: all 0.4s ease-in-out;
}
@media (max-width: 36.25em) {
  .nav__share {
    display: none;
  }
}
@media (min-width: 36.25em) and (max-width: 58.6875em) {
  .nav__share {
    position: absolute;
    right: 60px;
    top: 0;
    margin-top: 10px;
  }
}
.nav__menu {
  font-family: "PT Sans", sans-serif;
  font-weight: 600;
  font-size: 18px;
  display: table-cell;
  vertical-align: middle;
  transition: all 0.5s ease-in-out;
}
.nav__menu--primary, .nav__menu--secondary {
  float: left;
  display: inline-block;
  padding: 0 12px;
  margin: 0;
  transition: all 0.5s ease-in-out;
}
.nav__menu--primary li, .nav__menu--secondary li {
  position: relative;
  list-style: none;
  display: inline-block;
  float: left;
}
.nav__menu--primary li:hover ul, .nav__menu--secondary li:hover ul {
  position: absolute;
  left: 50%;
  margin-left: -105px;
}
.nav__menu--primary li a, .nav__menu--secondary li a {
  padding: 27.5px 12px;
  display: block;
  color: rgb(68, 80, 85);
}
.nav__menu--primary li a:hover, .nav__menu--secondary li a:hover {
  color: rgb(255, 139, 0);
}
.nav__menu--secondary > li.current-menu-item > a {
  color: rgb(255, 139, 0) !important;
  text-decoration: none !important;
  box-shadow: none !important;
}
.nav__menu--dropdown, .nav__menu .sub-menu {
  background-color: rgb(255, 139, 0);
  width: 210px;
  padding: 12px 0;
  margin: 0;
  list-style: none;
  float: left;
  position: absolute;
  left: -9999px;
  max-height: 500px;
  overflow-y: scroll;
}
.nav__menu--dropdown:after, .nav__menu .sub-menu:after {
  content: "";
  background-image: url("../img/nav-pointer.png");
  width: 19px;
  height: 10px;
  position: absolute;
  left: 0;
  top: -10px;
  right: 0;
  margin: auto;
}
.nav__menu--dropdown li, .nav__menu .sub-menu li {
  display: block;
  width: 100% !important;
}
.nav__menu--dropdown li a, .nav__menu .sub-menu li a {
  display: block;
  color: rgb(255, 255, 255);
  padding: 10px 24px !important;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: normal;
}
.nav__menu--dropdown li a:hover, .nav__menu .sub-menu li a:hover {
  color: rgb(38, 38, 38);
}
.nav__menu--dropdown li > .nav__menu--dropdown, .nav__menu .sub-menu li > .nav__menu--dropdown {
  display: none;
}
.nav__menu .sub-menu .current-menu-item a {
  color: rgb(255, 255, 255) !important;
}
.nav__menu .sub-menu .current-menu-item a:hover {
  color: rgb(38, 38, 38) !important;
}
.nav__menu--secondary {
  position: relative;
  opacity: 0;
  transition: all 0.3s ease-in-out;
  height: 0;
}
.nav__menu--secondary--loaded {
  height: auto;
  opacity: 1;
}
.nav__menu--secondary:after {
  content: "";
  position: absolute;
  height: 35px;
  width: 1px;
  border-left: 1px solid rgba(68, 80, 85, 0.1);
  margin: auto 0;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
@media (max-width: 58.75em) {
  .nav__menu {
    position: absolute;
    top: -9999999px;
    width: auto;
    height: 0;
    z-index: 0;
  }
}
.nav__partners {
  display: table-cell;
  vertical-align: middle;
  float: none;
  text-align: right;
  width: 240px;
}
@media (max-width: 104.9375em) {
  .nav__partners {
    display: none !important;
  }
}
.nav__partners p {
  margin: 0;
  padding: 0;
  display: table;
  float: right;
}
.nav__partners span {
  color: rgb(68, 80, 85);
  display: table-cell;
  vertical-align: middle;
  font-size: 12px;
  position: relative;
}
.nav__partners img {
  display: table-cell;
  vertical-align: middle;
  padding: 0 24px 0 12px;
  height: 32px;
}
.nav__icons {
  display: table-cell;
  vertical-align: middle;
  float: none;
  width: 122px;
}
@media (max-width: 58.75em) {
  .nav__icons {
    width: auto;
  }
}
.nav__icons-menu {
  display: inline-block;
  margin: 0;
  padding: 0 0 0 12px;
  float: right;
}
.nav__icons-menu-border {
  border-left: 1px solid rgba(68, 80, 85, 0.2);
}
.nav__icons-menu li {
  display: inline-block;
  float: left;
}
.nav__icons-menu li a {
  display: inline-block;
  padding: 0 12px;
}
.nav__icons-menu li a i {
  font-size: 30px;
  color: rgb(68, 80, 85);
}
.nav__icons-menu li a:last-child {
  padding-right: 12px;
}
.nav__icons-menu-search {
  position: relative;
}
@media (max-width: 58.75em) {
  .nav__icons-menu-search {
    display: none !important;
  }
}
@media (max-width: 58.75em) {
  .nav__icons-menu {
    border-left: none;
  }
}
.nav__shrink {
  height: 50px;
}
.nav__shrink .nav__back-resource {
  margin-top: 12px;
}
.nav__shrink .nav__logo {
  width: 85px;
}
.nav__shrink .nav__logo .logo {
  width: 85px;
  height: 23px;
}
.nav__shrink .nav__share {
  transform: translateY(0);
}
.nav__shrink .nav__menu--primary a, .nav__shrink .nav__menu--secondary a {
  padding: 12.5px 12px;
}
.nav__shrink .nav__menu-responsive {
  margin-right: 80px;
}
.nav__shrink .nav__partners img {
  height: 20px;
}
.nav__shrink .nav__search {
  top: 43px;
}
.nav__shrunk .mo__header {
  height: 50px;
}
.nav__shrunk .logo__container {
  width: 160px !important;
}
.nav__shrunk .logo__container .logo {
  width: 160px;
  height: 23px;
}
.nav__search {
  display: none;
  position: absolute;
  background-color: rgb(255, 139, 0);
  padding: 24px;
  top: 58px;
  right: -40px;
  transition: all 0.4s ease-in-out;
}
.nav__search:after {
  content: "";
  background-image: url("../img/nav-pointer.png");
  width: 19px;
  height: 10px;
  position: absolute;
  left: inherit;
  top: -10px;
  right: 57px;
  margin: auto;
  display: block;
}
.nav__search input {
  width: 450px;
  padding: 15px;
  border: 0;
  border-radius: 3px;
}
.nav__search-btn {
  position: absolute;
  right: 0;
  top: 0;
  height: 52px;
  border: 0;
  padding: 0 15px;
  background-color: transparent;
  transition: all 0.4s ease-in-out;
}
.nav__search-btn:hover {
  background-color: #eee;
}
.nav__search-container {
  position: relative;
}

.menu__overlay {
  background-color: rgb(255, 255, 255);
  position: fixed;
  visibility: hidden;
  top: 0;
  left: 0;
  z-index: 99999;
  width: 100%;
  height: 100%;
  transition: all 0.2s ease-in-out;
  opacity: 0;
}
.menu__overlay--open {
  visibility: visible;
  opacity: 1;
}
.menu__overlay--body {
  overflow: hidden;
}

.mo__header {
  display: table;
  width: 100%;
  padding: 0 15px;
  margin-bottom: 80px;
  height: 80px;
}
@media (max-width: 80em) {
  .mo__header {
    margin-bottom: 80px;
  }
}
@media (max-width: 63.9275em) {
  .mo__header {
    margin-bottom: 24px;
  }
}
@media (max-width: 58.75em) {
  .mo__header {
    height: 50px;
  }
}
.mo__logo {
  display: table-cell;
  vertical-align: middle;
  width: 50%;
}
.mo__logo .logo__container {
  width: 257px;
  margin: 0 0 0 -3px;
}
@media (max-width: 25em) {
  .mo__logo .logo__container {
    width: 100%;
  }
}
@media (max-width: 58.75em) {
  .mo__logo {
    width: 160px;
  }
  .mo__logo .logo {
    width: 160px;
    height: 23px;
  }
}
.mo__close {
  display: table-cell;
  vertical-align: middle;
  width: 50%;
}
.mo__close-btn {
  float: right;
  padding: 0 12px;
  cursor: pointer;
}
.mo__close-btn .material-icons {
  font-size: 30px;
}
.mo__container {
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}
.mo__container .container {
  max-width: 1150px;
}
.mo__container .container .mo__row {
  margin-bottom: 50px;
}
.mo__nav {
  margin: 0;
  padding: 0;
}
.mo__nav li {
  list-style-type: none;
  margin: 10px 0;
}
.mo__nav li a {
  font-family: "PT Sans", sans-serif;
  font-size: 16px;
  font-weight: bold;
  color: rgb(68, 80, 85);
}
.mo__nav li a:hover {
  text-decoration: none;
  color: rgb(255, 139, 0);
}
.mo__nav li a:after {
  font-family: "Material Icons";
  content: "chevron_right";
  -webkit-font-feature-settings: "liga";
  vertical-align: middle;
  font-size: 22px;
  margin: 0 0 0 3px;
}
@media (max-width: 63.9275em) {
  .mo__nav li a:after {
    display: none;
  }
}
.mo__nav--has-children li a {
  font-family: "Roboto", sans-serif;
  font-weight: normal;
}
.mo__nav--has-children li a:after {
  display: none;
}
@media (max-width: 63.9275em) {
  .mo__nav--has-children {
    padding-bottom: 24px;
  }
}
.mo__nav-container {
  min-height: 300px;
  margin-bottom: 20px;
}
.mo__nav-container h4 {
  font-size: 16px;
  font-weight: bold;
}
.mo__nav-container h4 a {
  color: rgb(68, 80, 85);
}
.mo__nav-container h4 a:hover {
  color: rgb(255, 139, 0);
  text-decoration: none;
}
.mo__nav-container h4 .material-icons {
  vertical-align: middle;
  float: right;
}
@media (min-width: 63.9375em) {
  .mo__nav-container h4 .material-icons {
    display: none;
  }
}
@media (max-width: 63.9275em) {
  .mo__nav-container--mobile .mo__nav-container {
    min-height: 0;
  }
  .mo__nav-container--mobile:after {
    content: "";
    display: table;
    clear: both;
  }
}
@media (max-width: 63.9275em) {
  .mo__nav-container {
    width: 50%;
    float: left;
    min-height: 0;
    margin-bottom: 0;
  }
}
@media (max-width: 63.9275em) {
  .mo__nav--single {
    width: 100%;
    margin: 0;
  }
}
@media (max-width: 63.9275em) {
  .mo__nav-spacer {
    float: left;
    width: 100%;
    padding: 0 12px;
    margin-bottom: 24px;
  }
  .mo__nav-spacer li {
    border-top: 1px solid rgba(68, 80, 85, 0.2);
    margin: 0 !important;
    padding: 24px 0;
  }
}
@media (max-width: 63.9275em) {
  .mo__nav_media {
    display: none;
  }
}
@media (max-width: 63.9275em) {
  .mo__nav__events {
    border-bottom: 1px solid rgba(68, 80, 85, 0.2);
  }
}
@media (max-width: 63.9275em) {
  .mo__nav-link--media {
    border-top: 1px solid rgba(68, 80, 85, 0.2);
    margin: 0 !important;
    padding: 24px 0;
  }
}
@media (max-width: 63.9275em) {
  .mo__nav-link--jobs {
    display: none;
  }
}
.mo__social {
  text-align: center;
}
.mo__social h4 {
  font-size: 16px;
  font-weight: bold;
  margin: 10px 0;
}
.mo__social-nav {
  margin: 0;
  padding: 0;
}
@media (max-width: 63.9275em) {
  .mo__social-nav li {
    font-size: 16px;
    display: block;
    margin: 10px 0;
  }
}
@media (min-width: 63.9375em) {
  .mo__social-nav li {
    display: inline-block;
  }
}
.mo__social-nav li a {
  color: rgb(68, 80, 85);
}
.mo__social-nav li a:hover {
  text-decoration: none;
  color: rgb(255, 139, 0);
}
@media (min-width: 63.9375em) {
  .mo__social-nav li a {
    position: relative;
    display: inline-block;
    text-align: center;
    width: 48px;
    height: 48px;
    background-color: rgb(255, 255, 255);
    box-shadow: 0 0 10px 0 rgba(255, 139, 0, 0.1);
    border-radius: 50%;
    margin: 0 10px 10px 0;
  }
  .mo__social-nav li a:hover {
    box-shadow: 0 0 10px 0 rgba(255, 139, 0, 0.2);
  }
}
.mo__social-nav li a i {
  font-size: 23px;
  color: rgb(255, 139, 0);
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (max-width: 63.9275em) {
  .mo__social-nav li a i {
    display: none;
  }
}
.mo__social-title {
  display: block;
}
@media (min-width: 63.9375em) {
  .mo__social-title {
    display: none;
  }
}
.mo__search-input {
  width: 100%;
  padding: 12px;
  margin: 0 0 24px 0;
  border: 1px solid rgba(255, 139, 0, 0.15);
  box-shadow: 0 0 6px 0 rgba(255, 139, 0, 0.15);
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
.mo__search-input:focus, .mo__search-input:active {
  border-color: rgb(255, 139, 0);
  outline: 0;
}
@media (min-width: 63.9375em) {
  .mo__search {
    display: none;
  }
}

@media (min-width: 63.9375em) {
  .mo__nav_jobs-menu, .mo__nav_media {
    display: block !important;
  }
}

[data-target].material-icons {
  vertical-align: middle;
  float: right;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
@media (min-width: 63.9375em) {
  [data-target].material-icons {
    display: none;
  }
}
[data-target].material-icons.open {
  transform: rotate(180deg);
}

.breadcrumbs a, .breadcrumbs span[property=name] {
  font-size: 18px;
  font-weight: 600;
  font-family: "PT Sans", sans-serif;
  color: rgb(255, 139, 0);
}
.breadcrumbs i {
  vertical-align: middle;
  font-size: 18px;
  display: inline-block;
  font-weight: bold;
  margin: 0 5px 3px 5px;
}

.nav__menu--primary .current-menu-item > a {
  color: rgb(255, 139, 0) !important;
  box-shadow: inset 0 -4px 0 0 rgb(255, 139, 0);
}

.nav__menu-responsive {
  display: none;
}

.archive.category .news-menu a,
.archive.post-type-archive-resources .news-menu a,
.archive.post-type-archive-rankings .news-menu a,
.single-post .news-menu a,
.single .news-menu a {
  color: rgb(255, 139, 0) !important;
  box-shadow: inset 0 -4px 0 0 rgb(255, 139, 0);
}

.ab {
  width: 100%;
  position: relative;
}
.ab__post-icon {
  display: block;
  width: 40px;
  height: 40px;
  background-size: cover;
  background-repeat: no-repeat;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.ab__post-icon--video {
  background-image: url("../img/post-icon--video.png");
}
.ab__post-icon--audio {
  background-image: url("../img/post-icon--podcast.png");
}
.ab__single {
  height: 288px;
  background-color: rgb(255, 255, 255);
  height: 288px;
  margin-bottom: 24px;
  position: relative;
  box-shadow: 0 0 10px 3px rgba(68, 80, 85, 0.15);
  transition: all 0.3s ease-in-out;
}
.ab__single:hover {
  box-shadow: 0 0 10px 5px rgba(68, 80, 85, 0.2);
}
.ab__single .ab__thumbnail {
  height: 116px;
}
.ab__link {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  font-size: 0;
  z-index: 1;
}
.ab__double {
  background-color: rgb(255, 255, 255);
  height: 600px;
  margin-bottom: 24px;
  position: relative;
  box-shadow: 0 0 10px 3px rgba(68, 80, 85, 0.15);
  transition: all 0.3s ease-in-out;
}
.ab__double:hover {
  box-shadow: 0 0 10px 5px rgba(68, 80, 85, 0.2);
}
.ab__double .ab__thumbnail {
  height: 468px;
}
.ab__double--full .pill {
  top: 25px !important;
  left: 24px !important;
}
.ab__double--full .ab__thumbnail {
  height: 600px;
}
.ab__double--full .ab__logo {
  margin-bottom: 15px;
}
.ab__double--full .ab__content {
  background-color: transparent;
}
.ab__double--full .ab__content p {
  color: rgb(255, 255, 255);
  font-size: 16px;
  margin: 0;
}
.ab__thumbnail {
  background-size: cover;
  background-position: center;
  background-color: grey;
  position: relative;
}
.ab .pill {
  position: absolute;
  display: inline-block;
  background-color: #ec008c;
  color: rgb(255, 255, 255);
  text-transform: uppercase;
  font-size: 12px;
  padding: 5px 8px;
  top: -13.5px;
}
.ab__content {
  padding: 24px;
  background-color: rgb(255, 255, 255);
  position: absolute;
  min-height: 172px;
  width: 100%;
  bottom: 0;
}
.ab__content h4 {
  margin: 0;
  min-height: 50px;
  margin-bottom: 30px;
}
.ab__content_morecard {
  top: 0;
  background-color: rgb(255, 139, 0);
  color: white;
}
.ab__content_morecard .btn-primary {
  background-color: transparent;
  border: 2px solid white !important;
}
.ab__category {
  color: rgb(255, 139, 0);
  position: relative;
  z-index: 1;
}
.ab__category:hover {
  color: rgb(255, 180, 102);
}
.ab__info {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  padding-right: 24px;
  padding-left: 24px;
  padding-bottom: 24px;
  color: rgba(68, 80, 85, 0.4);
}
.ab__info_time {
  display: inline-block;
  position: relative;
  min-width: 40px;
  margin-right: 5px;
  padding-right: 5px;
  font-size: 14px;
}
.ab__info_author {
  font-size: 14px;
  display: inline-block;
  position: relative;
}
.ab__info_author:before {
  position: absolute;
  content: "|";
  left: -10px;
}
@media (min-width: 38.75em) and (max-width: 40.625em) {
  .ab__info_author {
    display: none;
  }
}
.ab__info-job--salary, .ab__info-job--location {
  font-size: 14px;
  line-height: 16px;
  display: block;
}
.ab--resource__seperator {
  color: rgb(255, 139, 0);
  font-weight: bold;
}
.ab--resource__block {
  display: block;
}
.ab--resource .ab__content {
  border-top: 1px solid rgba(68, 80, 85, 0.2);
}
.ab--twitter .ab__single {
  padding: 24px;
}
.ab--twitter__author-info {
  float: left;
  width: 100%;
  margin-top: 24px;
}
.ab--twitter__author-info .ai__profile-picture, .ab--twitter__author-info .ai__info {
  display: table-cell;
  vertical-align: top;
}
.ab--twitter__author-info .ai__info {
  padding-left: 24px;
}
.ab--twitter__author-info .ai__time-ago .fa {
  color: rgb(255, 139, 0);
}
.ab--twitter__author-info .ai__time-ago, .ab--twitter__author-info .ai__account-name, .ab--twitter__author-info .ai__username {
  display: block;
}
.ab--twitter__author-info .ai__account-name {
  font-family: "PT Sans", sans-serif;
  font-size: 18px;
  font-weight: 700;
}
.ab--twitter__author-info .ai__username a {
  color: rgb(68, 80, 85);
}
.ab--twitter__profile-picture {
  width: 70px;
  height: 70px;
}
.ab--twitter-tweet {
  min-height: 145px;
}
.ab--twitter-tweet p {
  font-size: 16px;
  display: block;
  float: left;
}
.ab--twitter-tweet a {
  color: rgb(255, 139, 0);
}
.ab--twitter-tweet a:hover {
  color: rgb(255, 180, 102);
}
.ab--subscribe {
  padding: 0 !important;
  display: table;
}
.ab--subscribe__signup {
  color: rgb(255, 139, 0);
  font-family: "PT Sans", sans-serif;
  font-weight: bold;
  font-size: 18px;
}
.ab--subscribe .ab__single {
  background-image: url("../img/graphic--box.png");
  background-size: cover;
  background-position: 0;
  background-repeat: no-repeat;
  padding: 0 0 0 20px;
  display: table;
  width: 100%;
}
.ab--subscribe .ab__single h3 a {
  color: #333333;
}
.ab--subscribe .ab__single-container {
  display: table-cell;
  vertical-align: middle;
  padding-right: 28%;
  width: 100%;
}
.ab__ranking-post {
  cursor: pointer;
}
.ab__ranking-about .ab__content {
  border-top: 1px solid rgba(68, 80, 85, 0.2);
}
.ab--job .ab__thumbnail {
  background-size: 85%;
  background-repeat: no-repeat;
  background-position: center;
  background-color: rgb(255, 255, 255);
}
.ab--job .ab__content {
  border-top: 1px solid rgba(68, 80, 85, 0.2);
}
.ab__person {
  display: table;
  width: 100%;
}
.ab__person-row {
  display: table-cell;
  vertical-align: middle;
}
.ab__person-row img {
  margin: 0 auto;
  width: 160px;
  height: 160px;
  border-radius: 50%;
}
.ab__person-row h4 {
  text-align: center;
  margin: 25px 0 0 0;
}

.category-list {
  margin: 0;
  padding: 0;
}
.category-list__box {
  position: relative;
  width: 100%;
  height: 80px;
  margin-bottom: 24px;
  box-shadow: 0 0 10px 3px rgba(68, 80, 85, 0.15);
  transition: all 0.2s ease-in-out;
}
.category-list__box:hover {
  box-shadow: 0 0 10px 5px rgba(68, 80, 85, 0.2);
}
.category-list__box a {
  display: table;
  width: 100%;
  height: 100%;
  padding: 0 24px;
  color: rgb(68, 80, 85);
}
.category-list__box a:active, .category-list__box a:focus {
  text-decoration: none;
}
.category-list__box h4 {
  display: table-cell;
  vertical-align: middle;
}
.category-list__box img {
  height: 80px;
}
.category-list__count {
  display: table-cell;
  vertical-align: middle;
  text-align: right;
  font-family: "PT Sans", sans-serif;
  font-size: 18px;
  font-weight: 600;
  width: 50px;
}
.category-list__progress {
  height: 4px;
  background-color: rgba(255, 139, 0, 0.2);
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
}
.category-list__progress-bar {
  height: 100%;
  background-color: rgb(255, 139, 0);
  position: absolute;
  bottom: 0;
  left: 0;
}

.logo-list {
  display: block;
  padding: 0;
  list-style: none;
}
.logo-list li {
  display: block;
  padding: 0 12px;
  float: left;
  width: 50%;
}
.logo-list li a:hover .logo-list__logo {
  box-shadow: 0 0 10px 5px rgba(68, 80, 85, 0.2);
}
.logo-list__logo {
  width: 100%;
  height: 132px;
  margin-bottom: 24px;
  background-color: rgb(255, 255, 255);
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: 0 0 10px 3px rgba(68, 80, 85, 0.15);
  transition: all 0.2s ease-in-out;
}

.related-content {
  margin: 0;
  list-style: none;
  border-top: 4px solid rgb(255, 139, 0);
  padding: 16px 24px;
  width: 100%;
  box-shadow: 0 0 10px 3px rgba(68, 80, 85, 0.15);
}
@media (min-width: 77.5em) and (max-width: 83.0625em) {
  .related-content__container {
    width: 170px;
    padding: 0;
    margin-left: -200px;
  }
}
@media (min-width: 58.125em) and (max-width: 77.4375em) {
  .related-content__container {
    width: 170px;
    padding: 0;
    margin-right: 20px;
  }
}
@media (min-width: 83.0625em) {
  .related-content__container {
    padding: 0;
    width: 0;
  }
}
@media (min-width: 83.0625em) {
  .related-content__content-container {
    width: 200px;
    position: relative;
    right: 235px;
  }
}
.related-content__content-container h4 {
  margin-bottom: 24px;
  margin-top: 0;
}
.related-content__list {
  padding: 24px 0;
  border-bottom: 1px solid rgba(68, 80, 85, 0.2);
  float: right;
  width: 100%;
}
.related-content__list:last-child {
  border-bottom: none;
}
.related-content__list h4 {
  margin: 0 !important;
  padding: 0;
}
.related-content__list a:active, .related-content__list a:focus {
  text-decoration: none;
}
.related-content__list-tag {
  color: rgb(255, 139, 0);
  font-family: "PT Sans", sans-serif;
  font-weight: 600;
  display: inline;
}
.related-content__list-title {
  color: rgb(68, 80, 85);
}

.whitepaper-sidebar {
  margin: 0;
  margin-bottom: 40px;
  list-style: none;
  border-top: 4px solid rgb(255, 139, 0);
  padding: 16px 24px;
  width: 100%;
  box-shadow: 0 0 10px 3px rgba(68, 80, 85, 0.15);
}
.whitepaper-sidebar__container {
  padding: 24px 0 24px 0;
}
@media (min-width: 58.125em) and (max-width: 83.0625em) {
  .whitepaper-sidebar__container {
    width: 354px;
    padding-right: 24px;
  }
}
@media (min-width: 83.0625em) {
  .whitepaper-sidebar__container {
    padding: 0 24px 12px 0;
    width: 118px;
  }
}
@media (max-width: 77.4375em) {
  .whitepaper-sidebar__container {
    display: none;
  }
}
@media (min-width: 83.0625em) {
  .whitepaper-sidebar__content-container {
    width: 330px;
    right: 235px;
  }
}
.whitepaper-sidebar__content-container h4 {
  margin-bottom: 24px;
  margin-top: 0;
}
.whitepaper-sidebar__list {
  padding: 24px 0;
  border-bottom: 1px solid rgba(68, 80, 85, 0.2);
  float: right;
  width: 100%;
}
.whitepaper-sidebar__list:last-child {
  border-bottom: none;
}
.whitepaper-sidebar__list h4 {
  margin: 0 !important;
  padding: 0;
}
.whitepaper-sidebar__list a:active, .whitepaper-sidebar__list a:focus {
  text-decoration: none;
}
.whitepaper-sidebar__list p {
  margin-top: 5px;
  font-size: 0.9em;
}
.whitepaper-sidebar__list-title {
  color: rgb(255, 139, 0);
  font-family: "PT Sans", sans-serif;
  font-weight: 600;
}
.whitepaper-sidebar__list-thumb {
  margin-bottom: 20px;
}
.whitepaper-sidebar__list-thumb img {
  width: 100%;
  height: auto;
}
@media (max-width: 77.4375em) {
  .whitepaper-sidebar {
    display: none;
  }
}

.inline-whitepaper-promo-content {
  margin: 0;
  margin-bottom: 40px;
  list-style: none;
  border-top: 4px solid rgb(255, 139, 0);
  padding: 5px 20px;
  width: 100%;
  box-shadow: 0 0 10px 3px rgba(68, 80, 85, 0.15);
}
.inline-whitepaper-promo-content__itemblock {
  padding-top: 15px;
  padding-bottom: 15px;
}
@media (max-width: 58.0625em) {
  .inline-whitepaper-promo-content__itemblock {
    padding-top: 0;
    padding-bottom: 0;
  }
}
.inline-whitepaper-promo-content__itemblock-tag {
  color: rgb(255, 139, 0);
  font-family: "PT Sans", sans-serif;
  font-weight: 600;
  display: inline;
}
.inline-whitepaper-promo-content__itemblock-title {
  color: rgb(68, 80, 85);
}
.inline-whitepaper-promo-content__itemblock-preview-content {
  font-size: 1em !important;
  line-height: 1.5em !important;
  margin-top: 0 !important;
}
@media (max-width: 48em) {
  .inline-whitepaper-promo-content__itemblock {
    width: 96%;
    min-height: 2em;
    margin-top: 5px;
  }
}

.staff {
  padding: 40px;
  text-align: center;
  margin: 120px 0 0 0;
  min-height: 250px;
  max-width: 350px;
  box-shadow: 0 0 10px 3px rgba(68, 80, 85, 0.15);
}
@media (max-width: 38.75em) {
  .staff {
    margin: 120px auto 0 auto;
  }
}
.staff h3 {
  color: rgb(255, 139, 0);
  margin: 0 0 6px 0;
}
.staff__photo {
  border-radius: 50%;
  margin: -120px 0 30px 0;
  width: 120px;
  height: 120px;
}
.staff__title {
  font-size: 16px;
  display: block;
  margin: 0 0 20px 0;
}
.staff__email, .staff__telephone {
  font-size: 16px;
  color: rgb(68, 80, 85);
  display: block;
  word-wrap: break-word;
}
.staff__email:hover, .staff__telephone:hover {
  color: rgb(255, 139, 0);
}
.staff__container {
  margin: 40px 0;
}

.flip-card {
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
}

.flip-card-inner {
  transition: transform 0.8s;
  transform-style: preserve-3d;
  background-color: transparent !important;
}
.flip-card-inner * {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  -webkit-transform: translate3d(0, 0, 0);
}

.flip-card-back {
  background-color: rgb(255, 139, 0);
  color: white;
  transform: rotateY(180deg);
  z-index: 999;
  top: 0;
  padding: 15px;
}
.flip-card-back h3, .flip-card-back h4, .flip-card-back h5 {
  margin-top: 0;
}
.flip-card-back .btn-primary {
  background-color: transparent !important;
  border: 2px solid white !important;
}

.clikz-mpu-ad {
  padding: 10px 0px;
}

.modal .close {
  position: absolute;
  display: inline-block;
  text-align: center;
  width: 48px;
  height: 48px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 0 10px 0 rgba(255, 139, 0, 0.1);
  border-radius: 50%;
  top: -24px;
  right: -24px;
  margin: 0;
  opacity: 1;
  border: 0;
  z-index: 9999;
  transition: all 0.2s ease-in-out;
}
.modal .close:hover {
  box-shadow: 0 0 10px 0 rgba(255, 139, 0, 0.2);
  background-color: rgb(255, 139, 0);
}
.modal .close:hover i {
  color: rgb(255, 255, 255);
}
.modal .close:hover, .modal .close:focus, .modal .close:active {
  outline: none;
}
.modal .close i {
  font-size: 23px;
  color: rgb(255, 139, 0);
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  font-weight: bold;
}
@media (max-width: 38.75em) {
  .modal .close {
    top: 24px;
    right: 24px;
  }
}
.modal-content {
  border-radius: 0;
  border: none;
}
.modal-featured {
  width: 100%;
  height: 350px;
  background-size: cover;
  background-position: center;
  background-color: grey;
  border-bottom: 1px solid rgba(68, 80, 85, 0.2);
}
@media (min-width: 38.75em) {
  .modal-dialog {
    width: 600px;
    margin: 80px auto;
  }
}
@media (min-width: 56.125em) {
  .modal-dialog {
    width: 850px;
  }
}
.modal__posts-excerpt {
  font-size: 18px;
  line-height: 30px;
  margin-bottom: 16px;
}
.modal__posts .modal-body {
  padding: 30px;
}
@media (min-width: 56.125em) {
  .modal__posts .modal-body {
    padding: 80px;
  }
}
@media (max-height: 1024px) {
  .modal__posts .modal-body {
    padding: 40px;
  }
}
.modal__posts .modal-body h1 {
  margin: 0 0 30px 0;
  font-size: 30px;
}
.modal__posts .modal-body p {
  font-size: 18px;
  line-height: 30px;
  margin-bottom: 16px;
}
@media (max-height: 1024px) and (min-width: 889px) {
  .modal__posts .modal-dialog {
    width: 700px;
  }
}
@media (max-height: 1024px) {
  .modal__posts .modal-featured {
    height: 280px;
  }
}
.modal__posts-readmore {
  font-weight: bold;
  color: rgb(68, 80, 85);
  font-size: 18px;
  margin-top: 12px;
  display: block;
}
.modal__posts-readmore:hover {
  color: rgb(255, 139, 0);
  text-transform: none;
}
.modal__posts-readmore:after {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  content: "\f105";
  font-weight: bold;
  margin: 0 0 0 5px;
}
.modal__company .modal-featured {
  background-color: rgb(255, 255, 255);
  background-repeat: no-repeat;
  background-size: unset;
  height: 180px;
}
@media (min-width: 56.125em) {
  .modal__welcome .modal-dialog {
    width: 680px;
  }
}
.modal__welcome .modal-content {
  background-image: url("../img/graphic--popup.png");
  background-position: 125% 0;
  background-size: 300px;
  background-repeat: no-repeat;
}
@media (max-width: 38.75em) {
  .modal__welcome .modal-content {
    background-image: none;
  }
}
.modal__welcome .modal-body {
  padding: 80px 230px 80px 80px;
}
@media (max-width: 38.75em) {
  .modal__welcome .modal-body {
    padding: 24px;
  }
}
.modal__welcome .modal-body h3 {
  color: rgb(255, 139, 0);
  margin: 0 0 40px 0;
}
@media (max-width: 38.75em) {
  .modal__welcome .modal-body h3 {
    padding: 0 70px 0 0;
  }
}
.modal__welcome .modal-body .popup-logo {
  height: 35px;
  margin-top: 24px;
}
@media (max-width: 38.75em) {
  .modal__welcome .modal-body .popup-logo {
    height: 18px;
  }
}
.modal__newsletter .modal-body {
  padding: 60px;
}
@media (max-width: 30em) {
  .modal__newsletter .modal-body {
    padding: 20px;
  }
}
.modal__newsletter .modal-body h2 {
  margin: 0 0 24px 0;
  font-size: 38px;
}
@media (max-width: 30em) {
  .modal__newsletter .modal-body h2 {
    margin-right: 60px;
    margin-top: 24px;
    font-size: 24px;
  }
}
@media (max-width: 61.9375em) {
  .modal__newsletter .modal-body h2 {
    font-size: 24px;
  }
}
.modal__newsletter .modal-body .row {
  min-height: 600px;
}
@media (min-width: 58.125em) {
  .modal__newsletter .modal-content {
    background-image: url("../img/graphic.png");
    background-repeat: no-repeat;
    background-position: 0 100%;
    background-size: 300px;
  }
}
@media (min-width: 38.75em) {
  .modal__newsletter .modal-dialog {
    width: 590px;
    margin: 80px auto;
  }
}
@media (min-width: 56.125em) {
  .modal__newsletter .modal-dialog {
    width: 90%;
  }
}
@media (min-width: 90em) {
  .modal__newsletter .modal-dialog {
    width: 1200px;
  }
}
.modal__person .modal-content {
  padding: 80px;
}
@media (max-width: 29.99em) {
  .modal__person .modal-content {
    padding: 40px;
  }
}
.modal__person-pc {
  text-align: center;
}
.modal__person-cc h2 {
  margin: 0 0 8px 0;
}
.modal__person-cc h4 {
  font-family: "Roboto", sans-serif;
  margin-bottom: 20px;
}
.modal__person-photo {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  margin-bottom: 40px;
}

.speaker__socials {
  padding: 0;
  margin: 15px auto;
  width: 100%;
  list-style: none;
  text-align: center;
}
.speaker__socials li {
  display: inline;
  font-size: 24px;
  margin: 5px 4px;
}
.speaker__socials li a i.fa-facebook-square {
  color: #3b5998;
}
.speaker__socials li a i.fa-linkedin {
  color: #0077b5;
}
.speaker__socials li a i.fa-twitter {
  color: #1da1f2;
}
.speaker__socials li a i.fa-spotify {
  color: #1db954;
}
.speaker__socials li a i.fa-podcast {
  color: #B150E2;
}
.speaker__socials li a i.fa-instagram {
  color: #000;
}
.speaker__container {
  display: table;
  padding: 30px 0;
  border-bottom: 1px solid #dedede;
  width: 100%;
}
@media (max-width: 30em) {
  .speaker__container {
    padding-bottom: 20px;
  }
}
.speaker__info, .speaker__image {
  display: table-cell;
}
@media (max-width: 30em) {
  .speaker__info, .speaker__image {
    display: block;
    width: 100%;
  }
}
.speaker__image {
  padding: 0 20px;
  width: 150px;
}
.speaker__image img {
  width: 100px;
  height: 100px;
}
@media (max-width: 30em) {
  .speaker__image {
    display: block;
    width: 100%;
    text-align: center;
  }
}
.speaker__image img {
  border-radius: 50%;
}
.speaker__info {
  text-align: left;
  vertical-align: middle;
}
.speaker__info h3 {
  margin-top: 0 !important;
}
@media (max-width: 30em) {
  .speaker__info {
    text-align: center;
    padding: 0 20px;
    margin-top: 20px;
  }
}
.speaker__bio {
  padding: 30px;
  text-align: left;
}
@media (max-width: 30em) {
  .speaker__bio {
    padding: 20px;
  }
}
.speaker__bio p {
  margin: 0 0 15px 0 !important;
}

.modal-open .container {
  filter: blur(9px);
}

.modal-backdrop {
  background-color: transparent !important;
}

#resourceModal .modal-content {
  width: 450px;
  margin: auto;
}

.btns {
  font-family: "PT Sans", sans-serif;
  font-size: 14px;
  font-weight: 600;
  padding: 15px 30px;
  border-radius: 35px;
  background-color: rgb(255, 139, 0);
  color: rgb(255, 255, 255);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px #ffa233;
  border: none;
  transition: all 0.2s ease-in-out;
}
.btns:hover, .btns:focus, .btns:active, .btns:active {
  background-color: rgb(255, 255, 255) !important;
  color: rgb(255, 139, 0);
  outline: none !important;
}
.btns .fa {
  font-size: 18px;
  vertical-align: middle;
  margin: 0 0 0 5px;
  position: relative;
  bottom: 2px;
}
.btns-grey {
  background-color: #d4d4d4;
  color: rgb(255, 255, 255);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px #eeeeee;
}
.btns-grey:hover, .btns-grey:focus, .btns-grey:active {
  background-color: #c7c7c7 !important;
  color: white;
  outline: none !important;
}

.btn-round {
  height: 48px;
  width: 48px;
  border-radius: 50%;
  padding: 0;
  margin: 0;
  box-shadow: 0 0 10px 0 rgba(255, 139, 0, 0.1);
  border: 0;
  transition: all 0.4s ease-in-out;
}
.btn-round .material-icons {
  line-height: 48px;
  color: rgb(255, 139, 0);
}
.btn-round:hover {
  box-shadow: 0 0 10px 0 rgba(255, 139, 0, 0.2);
  background-color: rgb(255, 255, 255);
}
.btn-round:focus, .btn-round:active {
  outline: 0 !important;
  background-color: rgb(255, 255, 255);
}
.btn-round.popup-trigger:hover {
  background-color: rgb(255, 139, 0);
}
.btn-round.popup-trigger:hover i {
  color: rgb(255, 255, 255);
}

.btn-default-block {
  background-color: rgb(255, 139, 0);
  color: rgb(255, 255, 255);
  border: none;
  margin: 12px 0;
}
.btn-default-block:hover, .btn-default-block:focus, .btn-default-block:active {
  background-color: rgb(255, 180, 102);
  color: rgb(255, 255, 255);
}
.btn-default-block:hover:hover, .btn-default-block:focus:hover, .btn-default-block:active:hover {
  background-color: rgb(255, 180, 102);
  color: rgb(255, 255, 255);
}

.mktoOffset {
  width: 0 !important;
}

.page .mktoOffset {
  width: 10px !important;
}

.mktoField {
  padding: 8px !important;
  border-color: #e1e1e1 !important;
  box-shadow: none !important;
}
.mktoField:focus {
  background-color: #f9f9f9 !important;
}

.mktoInvalid {
  border-color: #8C0005 !important;
}

.mktoLabel {
  line-height: 30px !important;
}

.mktoForm h1, .mktoForm h2, .mktoForm h3, .mktoForm h4, .mktoForm h5 {
  font-family: "PT Sans", sans-serif !important;
  font-weight: 600 !important;
}
.mktoForm h1 strong, .mktoForm h2 strong, .mktoForm h3 strong, .mktoForm h4 strong, .mktoForm h5 strong {
  font-weight: 600 !important;
}

.mktoForm .mktoButtonWrap.mktoRound,
.mktoForm .mktoButtonWrap.mktoLight {
  display: inline-block;
  padding: 0 !important;
  background: transparent !important;
  box-shadow: none !important;
  border-radius: 0 !important;
}

.mktoForm .mktoButtonWrap.mktoRound .mktoButton,
.mktoForm .mktoButtonWrap.mktoLight .mktoButton,
.mktoForm .mktoButtonWrap.mktoMinimal .mktoButton {
  border: none;
  display: block;
  width: auto !important;
  height: auto !important;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  text-decoration: none;
  -webkit-border-radius: 0 !important;
  -moz-border-radius: 0 !important;
  font-weight: normal !important;
  background: rgb(255, 139, 0) !important;
  background-color: rgb(255, 139, 0) !important;
  filter: none !important;
  color: rgb(255, 255, 255) !important;
  text-shadow: none !important;
  box-shadow: unset !important;
  padding: 10px 16px !important;
  font-size: 18px !important;
  line-height: 1.33333 !important;
  border-radius: 6px !important;
  border: 0 !important;
}
.mktoForm .mktoButtonWrap.mktoRound .mktoButton:hover,
.mktoForm .mktoButtonWrap.mktoLight .mktoButton:hover,
.mktoForm .mktoButtonWrap.mktoMinimal .mktoButton:hover {
  background: rgb(255, 180, 102) !important;
}

.resources-template-default.single-resources .cnt-marketo-form-container,
.single-resources .cnt-marketo-form-container {
  margin: 0;
}
@media (max-width: 48em) {
  .resources-template-default.single-resources .cnt-marketo-form-container,
.single-resources .cnt-marketo-form-container {
    overflow: hidden !important;
  }
  .resources-template-default.single-resources .cnt-marketo-form-container form, .resources-template-default.single-resources .cnt-marketo-form-container .mktoHtmlText,
.single-resources .cnt-marketo-form-container form,
.single-resources .cnt-marketo-form-container .mktoHtmlText {
    width: 100% !important;
  }
}
.resources-template-default.single-resources .cnt-marketo-form-container .mktoLabel,
.resources-template-default.single-resources .cnt-marketo-form-container .mktoField,
.single-resources .cnt-marketo-form-container .mktoLabel,
.single-resources .cnt-marketo-form-container .mktoField {
  width: 50% !important;
}
@media (max-width: 36.25em) {
  .resources-template-default.single-resources .cnt-marketo-form-container .mktoLabel,
.resources-template-default.single-resources .cnt-marketo-form-container .mktoField,
.single-resources .cnt-marketo-form-container .mktoLabel,
.single-resources .cnt-marketo-form-container .mktoField {
    width: 100% !important;
  }
}
.resources-template-default.single-resources .cnt-marketo-form-container .mktoFormRow[class*=gDPROptin].has-checkbox .mktoCheckboxList,
.resources-template-default.single-resources .cnt-marketo-form-container .mktoFormRow.has-checkbox .mktoCheckboxList,
.single-resources .cnt-marketo-form-container .mktoFormRow[class*=gDPROptin].has-checkbox .mktoCheckboxList,
.single-resources .cnt-marketo-form-container .mktoFormRow.has-checkbox .mktoCheckboxList {
  position: absolute;
  left: 0;
}
@media (max-width: 36.25em) {
  .resources-template-default.single-resources .cnt-marketo-form-container .mktoFormRow[class*=gDPROptin].has-checkbox .mktoCheckboxList,
.resources-template-default.single-resources .cnt-marketo-form-container .mktoFormRow.has-checkbox .mktoCheckboxList,
.single-resources .cnt-marketo-form-container .mktoFormRow[class*=gDPROptin].has-checkbox .mktoCheckboxList,
.single-resources .cnt-marketo-form-container .mktoFormRow.has-checkbox .mktoCheckboxList {
    position: absolute !important;
  }
  .resources-template-default.single-resources .cnt-marketo-form-container .mktoFormRow[class*=gDPROptin].has-checkbox .mktoCheckboxList label:before,
.resources-template-default.single-resources .cnt-marketo-form-container .mktoFormRow.has-checkbox .mktoCheckboxList label:before,
.single-resources .cnt-marketo-form-container .mktoFormRow[class*=gDPROptin].has-checkbox .mktoCheckboxList label:before,
.single-resources .cnt-marketo-form-container .mktoFormRow.has-checkbox .mktoCheckboxList label:before {
    right: 0;
    left: auto;
  }
}
.resources-template-default.single-resources .cnt-marketo-form-container .mktoFormRow[class*=gDPROptin].has-checkbox .mktoHtmlText,
.resources-template-default.single-resources .cnt-marketo-form-container .mktoFormRow.has-checkbox .mktoHtmlText,
.single-resources .cnt-marketo-form-container .mktoFormRow[class*=gDPROptin].has-checkbox .mktoHtmlText,
.single-resources .cnt-marketo-form-container .mktoFormRow.has-checkbox .mktoHtmlText {
  padding-left: 35px;
}
.resources-template-default.single-resources .cnt-marketo-form-container fieldset.mktoFormCol .mktoCheckboxList,
.single-resources .cnt-marketo-form-container fieldset.mktoFormCol .mktoCheckboxList {
  position: relative !important;
  float: right;
}
@media (max-width: 36.25em) {
  .resources-template-default.single-resources .cnt-marketo-form-container fieldset.mktoFormCol .mktoCheckboxList,
.single-resources .cnt-marketo-form-container fieldset.mktoFormCol .mktoCheckboxList {
    left: auto !important;
    right: 0;
  }
}

.mktoForm div.mktoButtonRow {
  margin-left: 0 !important;
  margin-right: 0 !important;
  margin-top: 0 !important;
  margin-bottom: 0 !important;
}

.single-resources .mktoForm:not(.newsletter-modal-mkto) {
  max-width: 400px;
}

.mktoForm {
  width: 100% !important;
}
@media (max-width: 30em) {
  .mktoForm {
    padding: 0 !important;
  }
}

.mktoForm .mktoFormCol {
  width: 100%;
}
@media (max-width: 30em) {
  .mktoForm .mktoFormCol {
    float: left !important;
  }
}

.newsletter-modal-mkto .mktoFormCol,
.page-template-template-about-us .cnt-marketo-form .mktoFormCol {
  width: 50%;
  padding: 0 10px;
}
@media (max-width: 36.25em) {
  .newsletter-modal-mkto .mktoFormCol,
.page-template-template-about-us .cnt-marketo-form .mktoFormCol {
    width: 100% !important;
  }
}

.mktoField {
  border-radius: 3px !important;
}

.mktoLabel,
.mktoField,
.mktoForm .mktoFieldWrap {
  width: 100% !important;
}
@media (max-width: 36.25em) {
  .mktoLabel,
.mktoField,
.mktoForm .mktoFieldWrap {
    width: 100% !important;
  }
}

.mktoFieldWrap .mktoGutter,
.mktoAsterix,
.mktoForm .mktoOffset {
  display: none !important;
}

fieldset.mktoFormCol {
  width: 100% !important;
}

.newsletter-modal-mkto .mktoFormRow,
.page-template-template-about-us .cnt-marketo-form .mktoFormRow {
  margin: 0 -10px !important;
}

.newsletter-modal-mkto label[for=acceptedTCs].mktoLabel {
  display: none !important;
}
.newsletter-modal-mkto fieldset .mktoCheckboxList {
  float: right;
}
@media (max-width: 36.25em) {
  .newsletter-modal-mkto fieldset .mktoCheckboxList {
    float: left;
  }
}

fieldset {
  border: none !important;
  margin-bottom: 0 !important;
}
fieldset legend {
  padding: 0 !important;
  margin: 24px 0 !important;
  font-size: 18px;
  float: left;
}
fieldset .mktoFormRow {
  margin-left: -10px;
  margin-right: -10px;
}
fieldset .mktoLabel {
  width: 150px !important;
  line-height: normal !important;
}
@media (max-width: 36.25em) {
  fieldset .mktoLabel {
    width: 95% !important;
  }
}
fieldset .mktoFieldDescriptor.mktoFormCol {
  width: 50% !important;
}
@media (max-width: 36.25em) {
  fieldset .mktoFieldDescriptor.mktoFormCol {
    width: 100% !important;
  }
}
fieldset .mktoFormCol {
  width: 60% !important;
}
@media (max-width: 36.25em) {
  fieldset .mktoFormCol {
    width: 100% !important;
  }
}
fieldset .mktoCheckboxList label {
  margin: 0 !important;
}
@media (max-width: 36.25em) {
  fieldset strong {
    padding: 0 !important;
  }
}
@media (max-width: 36.25em) {
  fieldset .mktoCheckboxList {
    width: auto !important;
  }
}

.mktoHtmlText {
  width: auto !important;
}

.mktoFormRow {
  position: relative;
}
.mktoFormRow:nth-last-child {
  display: none !important;
}

.mktoFormRow.acceptedTCs .mktoFormCol,
.mktoFormRow.righttoberemoved .mktoFormCol,
.mktoFormRow.subscribedtoCZSEWMasterMarketing .mktoFormCol {
  width: 100% !important;
}
@media (max-width: 30em) {
  .mktoFormRow.acceptedTCs .mktoFormCol,
.mktoFormRow.righttoberemoved .mktoFormCol,
.mktoFormRow.subscribedtoCZSEWMasterMarketing .mktoFormCol {
    float: left !important;
    clear: unset !important;
  }
}
.mktoFormRow.acceptedTCs fieldset.mktoFormCol,
.mktoFormRow.righttoberemoved fieldset.mktoFormCol,
.mktoFormRow.subscribedtoCZSEWMasterMarketing fieldset.mktoFormCol {
  padding-left: 0;
}
.mktoFormRow.acceptedTCs .mktoHtmlText,
.mktoFormRow.righttoberemoved .mktoHtmlText,
.mktoFormRow.subscribedtoCZSEWMasterMarketing .mktoHtmlText {
  padding-left: 35px;
}
.mktoFormRow.acceptedTCs .mktoHtmlText span,
.mktoFormRow.righttoberemoved .mktoHtmlText span,
.mktoFormRow.subscribedtoCZSEWMasterMarketing .mktoHtmlText span {
  display: inline-block;
}
@media (max-width: 30em) {
  .mktoFormRow.acceptedTCs .mktoHtmlText *,
.mktoFormRow.righttoberemoved .mktoHtmlText *,
.mktoFormRow.subscribedtoCZSEWMasterMarketing .mktoHtmlText * {
    padding: 0 !important;
  }
}

form > .mktoFormRow.has-checkbox > .mktoFormCol.mktoFieldDescriptor,
.gdrpr__form .righttoberemoved .has-checkbox > .mktoFieldDescriptor.mktoFormCol,
.gdrpr__form .acceptedTCs .has-checkbox > .mktoFieldDescriptor.mktoFormCol {
  width: 40px !important;
  position: absolute;
  left: 0;
  z-index: 10;
}
@media (max-width: 30em) {
  form > .mktoFormRow.has-checkbox > .mktoFormCol.mktoFieldDescriptor,
.gdrpr__form .righttoberemoved .has-checkbox > .mktoFieldDescriptor.mktoFormCol,
.gdrpr__form .acceptedTCs .has-checkbox > .mktoFieldDescriptor.mktoFormCol {
    float: left !important;
    clear: unset !important;
  }
}
form > .mktoFormRow.has-checkbox > .mktoFormCol.mktoFieldDescriptor .mktoLabel,
.gdrpr__form .righttoberemoved .has-checkbox > .mktoFieldDescriptor.mktoFormCol .mktoLabel,
.gdrpr__form .acceptedTCs .has-checkbox > .mktoFieldDescriptor.mktoFormCol .mktoLabel {
  display: none;
}

.mktoForm input[type=checkbox] + label:before, .mktoForm input[type=radio] + label:before {
  margin-left: 0 !important;
}

.mktoFormRow[class*=gDPROptin] .mktoLabel,
.mktoFormRow.has-checkbox .mktoLabel {
  width: 60% !important;
}
.mktoFormRow[class*=gDPROptin] .mktoCheckboxList,
.mktoFormRow.has-checkbox .mktoCheckboxList {
  width: 40% !important;
}

.gdrpr__form .mktoFormRow [class*=gDPROptin] {
  display: none;
}

.mktoLabel *, .mktoForm .mktoRadioList, .mktoForm .mktoCheckboxList {
  padding: 0 !important;
}

.mktoFieldWrap .mktoCheckboxList {
  position: relative;
}
.mktoFieldWrap .mktoCheckboxList label:before {
  left: 0;
}

.mktoForm .mktoRadioList > label, .mktoForm .mktoCheckboxList > label {
  margin-left: 0 !important;
}

.has-checkbox {
  margin: 5px 0 !important;
}

#cookie-bar {
  background: rgb(255, 255, 255);
  height: auto;
  color: rgb(255, 139, 0);
  text-align: center;
  z-index: 999;
  font-size: 14px;
}
#cookie-bar.fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
#cookie-bar.fixed.bottom {
  bottom: 0;
  top: auto;
  z-index: 9999999;
}
#cookie-bar p {
  margin: 0;
  padding: 5px 0;
}
#cookie-bar a {
  color: rgb(255, 139, 0);
  text-decoration: underline;
}
#cookie-bar a:hover {
  color: rgb(255, 139, 0);
}
#cookie-bar .cb-enable {
  color: rgb(255, 139, 0);
  display: inline-block;
  border-radius: 6px;
  text-decoration: none;
  margin-left: 20px;
  padding: 2px 15px;
  background: transparent;
  border: 2px solid rgb(255, 139, 0);
}
#cookie-bar .cb-enable:hover {
  background: rgb(255, 180, 102);
  color: rgb(255, 255, 255);
}
@media (max-width: 64em) {
  #cookie-bar .cb-enable {
    margin-top: 5px;
  }
}
#cookie-bar .cb-disable {
  background: rgb(68, 80, 85);
}
#cookie-bar .cb-disable:hover {
  background: rgb(68, 80, 85);
}
#cookie-bar .cb-policy {
  background: rgb(68, 80, 85);
}
#cookie-bar .cb-policy:hover {
  background: rgb(68, 80, 85);
}

#signup-bar {
  background: rgb(255, 139, 0);
  height: auto;
  line-height: 24px;
  color: rgb(255, 255, 255);
  text-align: center;
  z-index: 999;
}
#signup-bar.fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
#signup-bar.fixed.bottom {
  bottom: 0;
  top: auto;
  z-index: 9999999;
}
#signup-bar p {
  margin: 0;
  padding: 10px 0;
}
#signup-bar a {
  color: rgb(255, 255, 255);
  text-decoration: underline;
}
#signup-bar a:hover {
  color: #ccc;
}
#signup-bar .sb-enable {
  color: rgb(255, 255, 255);
  display: inline-block;
  text-decoration: none;
  padding: 20px 15px;
  background: transparent;
  width: 100%;
  font-size: 1.5em;
}
#signup-bar .sb-enable:hover {
  background: rgb(255, 180, 102);
  color: rgb(255, 255, 255);
}
#signup-bar .sb-disable {
  color: rgb(255, 255, 255);
  display: inline-block;
  border-radius: 6px;
  text-decoration: none;
  margin-left: 20px;
  padding: 2px 15px;
  background: transparent;
  border: 2px solid rgb(255, 255, 255);
}
#signup-bar .sb-disable:hover {
  background: rgb(255, 180, 102);
  color: rgb(255, 255, 255);
}
@media (max-width: 64em) {
  #signup-bar .sb-disable {
    margin-top: 5px;
  }
}
#signup-bar .sb-policy {
  background: rgb(68, 80, 85);
}
#signup-bar .sb-policy:hover {
  background: rgb(68, 80, 85);
}

.company__column {
  width: 100%;
  padding: 40px;
  margin-bottom: 24px;
  box-shadow: 0 0 10px 3px rgba(68, 80, 85, 0.15);
}
.company__column img {
  margin: 0 auto;
}
.company__column h3 {
  margin: 0 0 24px 0;
  color: rgb(255, 139, 0);
}
.company__column p {
  margin: 0 0 30px 0;
  font-size: 16px;
}
.company__more {
  display: block;
  color: rgb(68, 80, 85);
  font-family: "PT Sans", sans-serif;
  font-size: 18px;
  font-weight: 600;
}
.company__more:after {
  font-family: "Material Icons";
  content: "keyboard_arrow_right";
  -webkit-font-feature-settings: "liga";
  vertical-align: middle;
  margin: 0 0 0 5px;
}

.homepagesection__title {
  width: 60%;
  text-align: left;
  float: left;
}
.homepagesection__link {
  width: 40%;
  text-align: right;
  float: right;
}
.homepagesection__link h4 {
  line-height: 26px;
  margin-top: 20px;
  margin-bottom: 10px;
}
.homepagesection__link h4 a {
  color: #333333;
}

.section__heading {
  position: relative;
}
@media (max-width: 36.25em) {
  .section__heading {
    display: table;
    width: 100%;
  }
}
.section__heading h2 {
  margin: 50px 0 40px 0;
}
@media (max-width: 36.25em) {
  .section__heading h2 {
    display: table-cell;
    vertical-align: middle;
    padding: 40px 0;
    float: none;
  }
}
.section__view-more {
  font-size: 18px;
  font-family: "PT Sans", sans-serif;
  font-weight: 600;
  color: rgb(68, 80, 85);
  position: absolute;
  right: 0;
  bottom: 0;
  text-align: right;
  padding-left: 5px;
}
@media (max-width: 36.25em) {
  .section__view-more {
    position: relative;
    display: table-cell;
    vertical-align: middle;
    min-width: 135px;
    float: none;
  }
}
.section__view-more:after {
  font-family: "Material Icons";
  content: "chevron_right";
  font-size: 18px;
  position: relative;
  top: 3px;
  margin: 0 0 0 6px;
}
.section__view-more:hover, .section__view-more:active, .section__view-more:focus {
  text-decoration: none;
}
.section__ab--ad {
  padding: 0 !important;
}
.section__ab__card--3 {
  width: 33.3333%;
  float: left;
}
.section__ab-col__9 {
  width: 75%;
  float: left;
}
@media (max-width: 77.5em) {
  .section__ab-col__9 {
    width: 100%;
    padding: 0;
  }
}
.section__ab-col__3 {
  width: 25%;
  float: right;
}
@media (max-width: 77.5em) {
  .section__ab-col__3 {
    width: 100%;
    padding: 0;
  }
}
.section__ab-container {
  display: block;
  float: left;
  width: 100%;
  margin: 0 0 -24px 0;
}
.section__ab-jobs {
  padding: 0;
}
.section__contrast {
  background-color: rgb(255, 139, 0);
  color: rgb(255, 255, 255);
  padding: 0 0 60px 0;
}
.section__contrast .section__view-more {
  color: rgb(255, 255, 255);
}

@media (min-width: 58.125em) and (max-width: 77.5em) {
  .resources-category-container {
    width: 100%;
    padding: 0;
  }
  .resources-category-container .category-list__container {
    width: 33.3333%;
    padding: 0 12px;
    float: left;
  }
}

@media (min-width: 58.125em) and (max-width: 77.5em) {
  .featured-jobs-container {
    width: 100%;
    padding: 0 12px;
  }
  .featured-jobs-container .logo-list li {
    width: 25%;
  }
}

.ad {
  padding: 0;
  /*** TEMP CLASSES ***/
}
@media (min-width: 58.125em) {
  .ad__2 {
    float: right;
  }
}
@media (min-width: 38.75em) and (max-width: 58.115em) {
  .ad__2 {
    padding: 0;
  }
}
.ad__2 img {
  margin-right: -12px;
  margin-left: -12px;
}
@media (min-width: 38.75em) and (max-width: 58.115em) {
  .ad__2 .ab {
    padding: 0 12px;
  }
}
.ad__flex {
  min-height: 312px;
}
.ad__leaderboard {
  text-align: center;
  margin: 16px 0 40px 0;
}
.ad__container {
  width: 100%;
  margin-bottom: 24px;
  text-align: center;
}
.ad__container--1 {
  height: 288px;
}
.ad__container--2 {
  height: 600px;
}
.ad__canvas {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: table;
  height: 300px;
  width: 100%;
}
.ad__canvas--hidden {
  display: none;
}
.ad__canvas-payload {
  position: relative;
}
@media (max-width: 33.125em) {
  .ad__canvas-payload {
    display: none;
  }
}
.ad__canvas-payload-script {
  display: none;
}
.ad__canvas-payload #ca_block-link {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.ad__canvas--scroll .ad__canvas {
  height: 80px;
  display: table;
  position: fixed;
  top: 50px;
  z-index: 99;
  background-image: none !important;
}
.ad__canvas--scroll .ad__canvas .ad__canvas-container {
  vertical-align: middle;
}
.ad__canvas--scroll .ad__canvas .ad__canvas-content {
  display: table-cell;
  vertical-align: middle;
  width: 100%;
  padding: 0;
}
.ad__canvas--scroll .ad__canvas .ad__canvas-content h2 {
  font-size: 24px;
  display: inline-block;
  margin: 0;
}
.ad__canvas--scroll .ad__canvas .ad__canvas-content .btn {
  padding: 0;
  background-color: transparent !important;
  display: inline-block;
}
.ad__canvas--scroll .ad__canvas .ad__canvas-logo {
  position: relative;
  display: table-cell;
  vertical-align: middle;
  bottom: 0;
  right: 0;
}
.ad__canvas--scroll .ad__canvas .ad__canvas-logo img {
  height: 32px;
}
.ad__canvas--scroll .ad__canvas--block {
  height: 280px;
}
.ad__canvas--scroll #ca_cta {
  margin-left: 30px;
}
@media (max-width: 64em) {
  .ad__canvas--scroll #ca_cta {
    display: block;
    margin: 0;
    text-align: left;
  }
}
.ad__canvas-container {
  display: table-cell;
  vertical-align: middle;
}
.ad__canvas .container {
  position: relative;
}
.ad__canvas-content {
  width: 60%;
  padding: 40px 0;
}
@media (max-width: 87.5em) {
  .ad__canvas-content {
    width: 80%;
  }
}
@media (max-width: 48em) {
  .ad__canvas-content {
    width: 100%;
  }
}
.ad__canvas h2 {
  margin: 0 0 40px 0;
  font-size: 48px;
  color: rgb(255, 255, 255);
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
}
.ad__canvas .btn {
  font-size: 16px;
  padding: 12px 35px;
  background-color: rgb(255, 255, 255);
  color: rgb(68, 80, 85);
  border-radius: 6px;
}
.ad__canvas-logo {
  position: absolute;
  bottom: 40px;
  right: 24px;
}
.ad__canvas-logo img {
  height: 55px;
}
.ad__canvas-active.single .post-motif {
  display: none;
}
.ad__canvas-active.single .single-post__breadcrumb {
  margin-top: 33px;
}
.ad__canvas-active.single .ranking-panel__header-container--fixed {
  display: none;
}
.ad__slot--leaderboard.ad__is-empty {
  padding: 30px 0;
}
.ad__slot--leaderboard.ad__is-empty .container--leaderboard-ad {
  padding: 0;
}
@media (max-width: 77.4375em) {
  .ad__sidebar-skyscraper {
    display: none;
  }
}
.ad__inconversation .incon_widgets {
  max-width: 550px;
  margin: 0 auto;
  padding: 25px 0;
}

.ad > div[id^=div-gpt-ad-] iframe, .ad__container > div[id^=div-gpt-ad-] iframe, .container--leaderboard-ad > div[id^=div-gpt-ad-] iframe {
  border: 1px solid rgba(38, 38, 38, 0.2) !important;
}

.container .container.container--leaderboard-ad {
  width: auto;
  padding: 0;
}
.container--leaderboard-ad {
  text-align: center;
  z-index: 99;
}

@media (min-width: 33.1875em) {
  .hide-on-takeover-ad {
    display: none;
  }
}

@media (min-width: 48em) {
  .nav__shrunk .ad__fixed-viewability {
    transition: all 0.5s ease;
    z-index: 998;
    position: relative;
  }
  .nav__shrunk .ad__fixed-viewability .container--leaderboard-ad {
    background-color: rgb(255, 255, 255);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1) !important;
    position: fixed;
    width: 100%;
    z-index: 9999;
    top: 50px;
    padding: 30px 0;
  }
}

.adblock--yes .ad__slot--leaderboard {
  margin-top: 60px;
}
.adblock--yes.post-type-archive-events .ad__slot--leaderboard, .adblock--yes.page .ad__slot--leaderboard {
  margin-top: 0;
}
.adblock--yes .container--leaderboard-ad {
  display: none;
}

.page .container--leaderboard-ad,
.search .container--leaderboard-ad,
.archive.post-type-archive-events .container--leaderboard-ad {
  padding: 40px 0;
  margin-bottom: -50px !important;
}

.single .container--leaderboard-ad,
.archive .container--leaderboard-ad,
.page-template-template-roi-calculator .container--leaderboard-ad,
.page-template-template-cpm-calculator .container--leaderboard-ad {
  padding: 40px 0;
  margin: 0 !important;
}

.tools-container .section.tools-section {
  margin: 20px 0;
  float: left;
  width: 100%;
}
.tools-container .section__tools_viewmore {
  float: right;
  margin-bottom: 20px;
  margin-top: 20px;
  text-align: right;
}
.tools-container .section__tool_sub_description {
  padding-left: 0px;
  line-height: 27px;
}
.tools-container .my-button-css {
  width: 100%;
  float: left;
  margin: 10px 0px 20px 0;
  cursor: pointer;
  font-size: 18px;
  font-family: "PT Sans", sans-serif;
  font-weight: 600;
  color: #445055;
}
.tools-container .section__view-more {
  font-size: 18px;
  font-family: "PT Sans", sans-serif;
  font-weight: 600;
  color: #445055;
  position: unset;
  right: 0;
  bottom: 0;
  text-align: right;
  padding-left: 5px;
}
.tools-container .tools-page-title .single-post__breadcrumb {
  margin: 20px 0 0 0;
}
.tools-container .tools-page-title h1 {
  margin: 20px 0;
}

.archive.tax-tools_types {
  line-height: 27px;
}
.archive.tax-tools_types .my-button-css {
  width: 100%;
  float: left;
  margin: 10px 0px 20px 0;
  cursor: pointer;
  font-size: 18px;
  font-family: "PT Sans", sans-serif;
  font-weight: 600;
  color: #445055;
  padding-left: 5px;
}
.archive.tax-tools_types .more-texts {
  overflow: hidden;
  margin-bottom: 21px;
}

hr.text-description {
  float: left;
  width: 98%;
  border: 1px solid #d4d4d4;
  margin: 60px 0 60px 12px;
}

.tools-container .section__heading {
  position: relative;
}
@media (max-width: 36.25em) {
  .tools-container .section__heading {
    display: table;
    width: 100%;
  }
}
.tools-container .section__heading .section__view-more {
  display: unset;
  float: right;
  margin-bottom: 20px;
  margin-top: 0;
  text-align: right;
}
.tools-container .section__heading h2 {
  margin: 20px 0 20px 0;
  width: 75%;
  float: left;
}
@media (max-width: 36.25em) {
  .tools-container .section__heading h2 {
    display: table-cell;
    vertical-align: middle;
    padding: 10px 0;
    float: left;
    margin: 20px 0 0px 0;
    width: 100%;
  }
}
.tools-container .section__tools_viewmore {
  float: right;
  margin-bottom: 20px;
  margin-top: 20px;
  text-align: right;
}
@media (max-width: 36.25em) {
  .tools-container .section__tools_viewmore {
    margin-top: 0px;
  }
}

.section.row.spacer {
  margin-bottom: 37px;
}

.my-button-css i {
  font-size: 21px;
  font-weight: 700;
  line-height: 1;
  position: relative;
  top: 2px;
}

.footer__site-links li .sub-menu.pre-footer-sub-menu {
  margin-top: 20px;
}

footer.footer.footer-m-0 {
  margin-top: 0px;
}

.footer.pre-footer .footer__col_1 {
  margin-right: 30px;
}

.page-template-templates-marketing {
  /**** Common CSS ****/
  /** Banner Section End **/
  /** Slick **/
  /** Slick End **/
  /** Blog **/
  /** Blog End **/
  /** How We Help **/
  /** How We Help End **/
  /** Case Studies **/
  /** Case Studies End **/
  /** Brand Overview **/
  /** Brand Overview End **/
  /** Careers **/
  /** Careers End **/
  /** footer **/
  /** **/
  /** **/
  /** modal **/
  /** Modal **/
  /* Video **/
  /** Video **/
  /** Custom CSS **/
}
.page-template-templates-marketing .our-approach-types.round-figure {
  margin-bottom: 55px;
}
.page-template-templates-marketing .our-approach .approach-row {
  float: left;
  width: 100%;
}
.page-template-templates-marketing ul {
  margin: 0;
  padding: 0;
}
.page-template-templates-marketing li {
  margin: 0;
  padding: 0;
  list-style: none;
}
.page-template-templates-marketing a {
  text-decoration: none;
  border: 0;
  outline: none;
  color: #0b2b5a;
  transition: all 1s ease;
}
.page-template-templates-marketing p {
  font-size: 18px;
  color: #3b3b3a;
  font-weight: 400;
}
.page-template-templates-marketing li:hover a {
  text-decoration: none;
}
.page-template-templates-marketing a {
  border: 0;
  outline: none;
}
.page-template-templates-marketing a:hover, .page-template-templates-marketing a:focus {
  text-decoration: none;
  color: #E2BF6E;
  outline: none;
}
.page-template-templates-marketing img {
  border: 0;
  outline: none;
}
.page-template-templates-marketing .fl {
  float: left;
}
.page-template-templates-marketing .fr {
  float: right;
}
.page-template-templates-marketing img {
  vertical-align: middle;
}
.page-template-templates-marketing .img-responsive {
  display: block;
  width: 100% \9 ;
  max-width: 100%;
  width: 100%;
}
.page-template-templates-marketing .btn {
  display: inline-block;
  font-size: 14px;
  text-decoration: none;
  padding: 0 40px;
  border-radius: 4px;
  outline: none;
  font-weight: 400;
}
.page-template-templates-marketing .btn-default {
  outline: none;
  color: #fff;
  background-color: rgb(41, 145, 226);
  border-color: rgb(41, 145, 226);
  height: 45px;
  line-height: 44px;
  transition: all 1s ease;
}
.page-template-templates-marketing .btn-default:focus {
  outline: none;
  color: #fff;
  background-color: rgb(41, 145, 226);
  border-color: rgb(41, 145, 226);
  height: 45px;
  line-height: 44px;
  transition: all 1s ease;
}
.page-template-templates-marketing .btn-primary {
  background-color: #E2BF6E;
  border-color: #E2BF6E;
  color: #323232;
  height: 44px;
  line-height: 40px;
  transition: all 500ms ease;
}
.page-template-templates-marketing .btn-primary:focus {
  background-color: #E2BF6E;
  border-color: #E2BF6E;
  color: #323232;
  height: 44px;
  line-height: 40px;
  transition: all 500ms ease;
}
.page-template-templates-marketing .btn-default:hover {
  outline: none;
  color: #fff;
  background-color: rgb(19, 34, 57);
  border-color: rgb(19, 34, 57);
}
.page-template-templates-marketing .btn-primary:hover {
  outline: none;
  color: #E2BF6E;
  background-color: transparent;
  border-color: #E2BF6E;
}
.page-template-templates-marketing .container {
  margin-right: auto;
  margin-left: auto;
}
.page-template-templates-marketing .white-bg {
  background-color: #ffffff;
}
.page-template-templates-marketing .grey-bg {
  background-color: #fbfbfb;
}
.page-template-templates-marketing .white-bg p, .page-template-templates-marketing .grey-bg p {
  text-align: center;
}
.page-template-templates-marketing .blog {
  padding: 98px 0 111px 0;
}
.page-template-templates-marketing .text-center {
  text-align: center;
}
.page-template-templates-marketing .container {
  max-width: 100%;
}
.page-template-templates-marketing h1.title {
  font-size: 48px;
  line-height: 73px;
  padding-bottom: 16px;
  font-family: "PT Sans", sans-serif;
  color: #262626;
  width: 75%;
  text-align: center;
  margin: auto;
}
@media (max-width: 36.25em) {
  .page-template-templates-marketing h1.title {
    font-size: 30px;
    line-height: 36px;
    width: 100%;
  }
}
@media (max-width: 47.9375em) {
  .page-template-templates-marketing h1.title {
    font-size: 30px;
    line-height: 36px;
    width: 100%;
  }
}
.page-template-templates-marketing .title-medium {
  font-size: 36px;
}
@media (max-width: 36.25em) {
  .page-template-templates-marketing .title-medium {
    font-size: 26px;
  }
}
@media (max-width: 47.9375em) {
  .page-template-templates-marketing .title-medium {
    font-size: 26px;
  }
}
.page-template-templates-marketing .inner-container {
  margin: 0 auto;
  max-width: 1150px;
}
.page-template-templates-marketing .description-details {
  width: 92%;
  margin: auto;
  padding-bottom: 66px;
}
.page-template-templates-marketing .description-details p {
  font-size: 24px;
}
.page-template-templates-marketing .description-makers-progress p {
  text-align: left;
  padding-top: 28px;
}
.page-template-templates-marketing .description-makers-progress p:nth-of-type(1) {
  padding-top: 0px;
}
.page-template-templates-marketing .description-makers-progress h3 {
  /*color: #3b3b3a; */
  padding-bottom: 28px;
  /*font-size: 36px; font-weight: 700;*/
}
.page-template-templates-marketing .main-btn {
  margin: auto;
  padding: 13px 36px;
  background-color: #ea5b0b;
  color: #ffffff;
  transition: all 1s;
  font-size: 18px;
  border: 2px solid #ea5b0b;
  border-radius: 50px;
}
.page-template-templates-marketing .main-btn:hover, .page-template-templates-marketing .main-btn:active {
  background-color: #ffffff;
  color: #ea5b0b !important;
  transition: all 1s;
  border: 2px solid #ea5b0b;
}
.page-template-templates-marketing a.brand-btn {
  margin-top: 35px;
}
.page-template-templates-marketing .description-makers-left {
  padding-right: 80px;
}
.page-template-templates-marketing .description-makers-right img {
  width: 100%;
}
.page-template-templates-marketing .economy-list-description {
  width: 380px;
  display: inline-block;
  margin-left: 35px;
}
.page-template-templates-marketing .economy-list-item {
  float: left;
  width: 100%;
  padding-bottom: 53px;
}
.page-template-templates-marketing .economy-list-item figure {
  width: 30%;
  display: inline-block;
  vertical-align: top;
  text-align: center;
  line-height: 110px;
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background: #ffffff;
  position: relative;
}
.page-template-templates-marketing .economy-list-item h4 {
  transition: all 1s ease;
}
.page-template-templates-marketing .economy-list-item:hover h4 {
  color: #ea5b0b;
}
.page-template-templates-marketing .economy-list-item .hover-icon {
  opacity: 0;
}
.page-template-templates-marketing .economy-list-item .icon {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
.page-template-templates-marketing .economy-list-description h4 {
  padding-bottom: 30px;
}
.page-template-templates-marketing .economy-list-description p {
  text-align: left;
}
.page-template-templates-marketing .help-btn {
  margin: auto;
  text-align: center;
}
.page-template-templates-marketing .help-btn a {
  margin-top: 5px;
}
.page-template-templates-marketing .team-members {
  float: left;
  width: 100%;
  text-align: left;
  margin: auto;
  position: relative;
}
.page-template-templates-marketing .team-members p {
  text-align: left;
}
.page-template-templates-marketing .team-member-item figure {
  display: inline-block;
  float: left;
}
.page-template-templates-marketing .team-member-details {
  width: 475px;
  float: left;
  margin-left: 40px;
  margin-top: 30px;
}
.page-template-templates-marketing .team-member-details h4 {
  padding-bottom: 5px;
  font-size: 24px;
  color: #3b3b3a;
  font-weight: bold;
}
.page-template-templates-marketing .team-member-description {
  padding-top: 21px;
}
.page-template-templates-marketing .team-panel {
  width: 760px;
  margin: auto;
}
.page-template-templates-marketing .how-help-banner {
  background-color: #ea5b0b;
}
.page-template-templates-marketing .slick-prev {
  color: #3b3b3a;
  border: 2px solid #ebebeb;
  color: #3b3b3a;
  border-radius: 50%;
  width: 56px;
  height: 56px;
}
.page-template-templates-marketing .slick-next {
  color: #3b3b3a;
  border: 2px solid #ebebeb;
  color: #3b3b3a;
  border-radius: 50%;
  width: 56px;
  height: 56px;
}
.page-template-templates-marketing .slick-next:before {
  color: #3b3b3a;
  font-size: 36px;
  font-family: FontAwesome;
  font-style: normal;
  font-weight: normal;
}
.page-template-templates-marketing .slick-prev:before {
  color: #3b3b3a;
  font-size: 36px;
  font-family: FontAwesome;
  font-style: normal;
  font-weight: normal;
}
.page-template-templates-marketing .slick-next:before {
  content: "\f105";
}
.page-template-templates-marketing .slick-prev:before {
  content: "\f104";
}
.page-template-templates-marketing .main-banner .container {
  position: relative;
  /* top: 0; right: 0 */
}
.page-template-templates-marketing .blog-articles {
  float: left;
  width: 100%;
  text-align: center;
}
.page-template-templates-marketing .filter-articles {
  padding: 12px 0;
  border-bottom: 2px solid #ebebeb;
}
.page-template-templates-marketing .filter-articles ul li {
  text-align: center;
}
.page-template-templates-marketing .filter-articles p {
  color: #3b3b3a;
  padding-right: 25px;
  vertical-align: middle;
  display: inline-block;
}
.page-template-templates-marketing .filter-btn i {
  padding-left: 13px;
}
.page-template-templates-marketing .dropdown-list-item li {
  display: block;
}
.page-template-templates-marketing .filter-content {
  display: inline-block;
  position: relative;
}
.page-template-templates-marketing .dropdown-list-item .filter-menu .btn:hover, .page-template-templates-marketing .dropdown-list-item .filter-menu .btn.active {
  border-bottom: 3px solid transparent;
  color: #ea5b0b;
}
.page-template-templates-marketing .blog-articles .filter-menu .btn {
  padding-bottom: 10px;
}
.page-template-templates-marketing .blog-articles .filter-menu .btn:hover, .page-template-templates-marketing .blog-articles .filter-menu .btn.active, .page-template-templates-marketing .blog-articles .filter-menu .btn:active {
  border-bottom: 3px solid transparent;
  color: #ea5b0b;
}
.page-template-templates-marketing .dropdown-list-item {
  top: 70px;
  display: none;
  left: -100px;
  padding: 25px 30px;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  color: #3b3b3a;
  z-index: 10;
  text-align: left;
  position: absolute;
}
.page-template-templates-marketing .dropdown-list-item .filter-menu .btn {
  padding-bottom: 7px;
}
.page-template-templates-marketing .dropdown-list-item:before {
  content: "";
  display: inline-block;
  width: 0;
  height: 0;
  position: absolute;
  top: -16px;
  left: 0;
  right: 0;
  margin: auto;
  border-style: solid;
  border-width: 0 15px 15px 15px;
  border-color: transparent transparent #e0e0e0 transparent;
}
.page-template-templates-marketing .dropdown-list-item ul {
  width: 260px;
  text-align: center;
}
.page-template-templates-marketing .filter-content:hover .dropdown-list-item {
  display: block;
}
.page-template-templates-marketing .article-lists {
  float: left;
  width: 100%;
  padding: 86px 0 110px 0;
  position: relative;
}
.page-template-templates-marketing .article-item {
  margin-top: 25px;
}
.page-template-templates-marketing .article-item figure {
  height: 240px;
  overflow: hidden;
}
.page-template-templates-marketing .article-item figure img {
  height: 100%;
  width: auto;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  display: block;
  transition: all 0.5s linear;
  transform: scale3d(1, 1, 1);
}
.page-template-templates-marketing .article-item:hover figure img {
  transform: scale3d(1.1, 1.1, 1);
}
.page-template-templates-marketing .article-details {
  padding: 55px 60px;
  text-align: left;
  border: 1px solid #ebebeb;
}
.page-template-templates-marketing .article-details p {
  color: #3b3b3a;
  font-family: "avenirregular";
}
.page-template-templates-marketing .article-type p {
  font-family: "Avenir-Black";
  color: #9c9c9c;
  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;
}
.page-template-templates-marketing .article-details h4 {
  line-height: 36px;
  font-size: 24px;
  font-weight: bold;
  padding-bottom: 30px;
}
.page-template-templates-marketing .read-article {
  color: #ea5b0b;
  font-weight: bold;
  font-size: 18px;
}
.page-template-templates-marketing .article-type {
  padding-bottom: 20px;
}
.page-template-templates-marketing .read-more {
  padding-top: 27px;
}
.page-template-templates-marketing .also-like .article-details {
  background-color: #ffffff;
}
.page-template-templates-marketing .also-like .article-type p {
  text-align: left;
}
.page-template-templates-marketing .blog-details {
  float: left;
  width: 100%;
}
.page-template-templates-marketing .also-like .article-item figure {
  height: 160px;
}
.page-template-templates-marketing .also-like .article-item figure img {
  width: 100%;
}
.page-template-templates-marketing .also-like .read-more {
  padding-top: 0;
}
.page-template-templates-marketing .help-panel, .page-template-templates-marketing .unique-skillset {
  width: 100%;
  float: left;
  position: relative;
}
.page-template-templates-marketing .inner-menu {
  background-color: #ffffff;
  text-align: center;
  float: left;
  width: 100%;
  padding: 27px 0;
  border-bottom: 2px solid #ebebeb;
}
.page-template-templates-marketing .inner-menu li {
  display: inline-block;
}
.page-template-templates-marketing .inner-menu li a {
  color: #3b3b3a;
  font-size: 18px;
  margin-right: 16px;
  padding-bottom: 28px;
  border-bottom: 3px solid transparent;
}
.page-template-templates-marketing .inner-menu li a:hover {
  border-bottom: 3px solid #ea5b0b;
}
.page-template-templates-marketing .inner-menu li.nav-active a {
  border-bottom: 3px solid #ea5b0b;
}
.page-template-templates-marketing .content-panel-banner {
  padding: 120px 0 140px 0;
  float: left;
  width: 100%;
}
@media (max-width: 36.25em) {
  .page-template-templates-marketing .content-panel-banner {
    padding: 50px 0 45px 0;
  }
}
@media (max-width: 47.9375em) {
  .page-template-templates-marketing .content-panel-banner {
    padding: 50px 0 45px 0;
  }
}
.page-template-templates-marketing .content-panel {
  padding: 60px 0 70px 0;
  float: left;
  width: 100%;
}
@media (max-width: 36.25em) {
  .page-template-templates-marketing .content-panel {
    padding: 45px 0;
  }
}
@media (max-width: 47.9375em) {
  .page-template-templates-marketing .content-panel {
    padding: 45px 0;
  }
}
.page-template-templates-marketing .content-details {
  text-align: center;
  width: 80%;
  margin: auto;
  padding-bottom: 66px;
}
.page-template-templates-marketing .content-details p {
  font-size: 24px;
}
.page-template-templates-marketing .tools-description {
  padding-right: 90px;
}
.page-template-templates-marketing .tools-description p {
  padding-top: 40px;
}
.page-template-templates-marketing .our-process {
  float: left;
  width: 100%;
  text-align: center;
  padding-top: 105px;
}
.page-template-templates-marketing .round-figure figure {
  text-align: center;
  line-height: 110px;
  width: 110px;
  height: 110px;
  margin: 0 auto;
  background: #ffffff;
  border-radius: 50%;
  position: relative;
}
.page-template-templates-marketing .round-figure h4 {
  transition: all 1s ease;
}
.page-template-templates-marketing .round-figure:hover h4 {
  color: #ea5b0b;
}
.page-template-templates-marketing .round-figure .hover-icon {
  opacity: 0;
}
.page-template-templates-marketing .round-figure .icon {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
.page-template-templates-marketing .title-small {
  font-size: 24px;
  color: #262626;
  font-weight: bold;
}
.page-template-templates-marketing .our-process-lists {
  float: left;
  width: 100%;
  padding-top: 72px;
}
.page-template-templates-marketing .our-process-description {
  text-align: left;
}
.page-template-templates-marketing .our-process-description h4 {
  padding: 38px 0 30px 0;
}
.page-template-templates-marketing .our-unique-skill h4 {
  padding: 38px 0 30px 0;
}
.page-template-templates-marketing .technology-stack, .page-template-templates-marketing .campaign-objectives, .page-template-templates-marketing .get-in-touch, .page-template-templates-marketing .the-results {
  float: left;
  width: 100%;
}
.page-template-templates-marketing .short-description {
  font-family: "PT Sans", sans-serif;
  text-align: center;
  width: 75%;
  margin: auto;
  padding-bottom: 38px;
  font-size: 24px;
}
.page-template-templates-marketing .technology-content-description {
  font-family: "PT Sans", sans-serif;
  text-align: center;
  width: 75%;
  margin: auto;
  padding-bottom: 38px;
  font-size: 24px;
  width: 100%;
}
.page-template-templates-marketing .short-description p, .page-template-templates-marketing .technology-content-description p {
  font-size: 21px;
  color: #262626;
}
@media (max-width: 36.25em) {
  .page-template-templates-marketing .short-description p, .page-template-templates-marketing .technology-content-description p {
    font-size: 17px;
  }
}
@media (max-width: 47.9375em) {
  .page-template-templates-marketing .short-description p, .page-template-templates-marketing .technology-content-description p {
    font-size: 17px;
  }
}
.page-template-templates-marketing .technology-stack-details p {
  text-align: left;
  padding-top: 20px;
}
.page-template-templates-marketing .technology-stack-description h4 {
  line-height: 53px;
}
.page-template-templates-marketing .technology-stack-details {
  /*border-bottom: 1px solid #e0e0e0; */
  float: left;
  width: 100%;
}
.page-template-templates-marketing .technology-stack-description {
  padding-left: 100px;
}
.page-template-templates-marketing .our-unique-skill p, .page-template-templates-marketing .cause-deail p {
  text-align: left;
}
.page-template-templates-marketing .unique-skillset {
  border-bottom: 2px solid #ebebeb;
}
.page-template-templates-marketing .download-options {
  text-align: center;
}
.page-template-templates-marketing .download-options li {
  display: inline-block;
  margin-right: 20px;
}
.page-template-templates-marketing .objective-lists-description {
  float: left;
}
.page-template-templates-marketing .objective-lists-description figure {
  float: left;
  text-align: center;
  background-color: #ffffff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.page-template-templates-marketing .objective-lists-description figure img {
  padding-top: 12px;
  vertical-align: middle;
}
.page-template-templates-marketing .objective-lists-description p {
  padding-left: 25px;
  width: 80%;
  display: inline-block;
  text-align: left;
}
.page-template-templates-marketing .about-campaign, .page-template-templates-marketing .campaign-description, .page-template-templates-marketing .our-customers {
  float: left;
  width: 100%;
}
.page-template-templates-marketing .campaign-description {
  padding-top: 43px;
}
.page-template-templates-marketing .campaign-description p {
  text-align: left;
  padding-top: 30px;
}
.page-template-templates-marketing .result-description {
  padding-right: 90px;
}
.page-template-templates-marketing .the-results .technology-stack-details {
  padding-bottom: 74px;
  border-bottom: 1px solid #e0e0e0;
}
.page-template-templates-marketing .total-result {
  padding-top: 80px;
  float: left;
}
.page-template-templates-marketing .the-results .technology-stack-details p {
  padding-top: 28px;
}
.page-template-templates-marketing .team-member-lists h4 {
  text-align: center;
  color: #262626;
  font-size: 24px;
  font-weight: bold;
}
@media (max-width: 36.25em) {
  .page-template-templates-marketing .team-member-lists {
    padding: 10px 0;
    display: grid;
  }
}
@media (max-width: 47.9375em) {
  .page-template-templates-marketing .team-member-lists {
    padding: 10px 0;
    display: grid;
  }
}
.page-template-templates-marketing .team-member-lists figure img {
  max-height: 200px;
  width: 100%;
  display: block;
  transition: all 0.5s linear;
  transform: scale3d(1, 1, 1);
}
.page-template-templates-marketing .team-member-lists:hover figure img {
  transform: scale3d(1.1, 1.1, 1);
}
.page-template-templates-marketing .team-member-contact a {
  text-decoration: underline;
  padding-top: 14px;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  text-align: center;
  color: #262626;
}
.page-template-templates-marketing .our-team-members {
  float: left;
  width: 100%;
}
.page-template-templates-marketing .more-cases {
  padding-top: 20px;
  text-align: center;
}
.page-template-templates-marketing .our-approach-types h4 {
  line-height: 30px;
  padding: 18px 0 12px 0;
  font-family: "PT Sans", sans-serif;
  width: 65%;
  margin: 0 auto;
}
.page-template-templates-marketing .cause-deail h4 {
  padding-bottom: 30px;
}
.page-template-templates-marketing .team-member-lists figure {
  padding-bottom: 10px;
}
.page-template-templates-marketing .team-member-lists figure img {
  margin: 0 auto;
  overflow: hidden;
  height: 110px;
  -o-object-fit: cover;
     object-fit: cover;
  border-radius: 50%;
  width: 110px;
}
.page-template-templates-marketing .team-member-contact {
  float: left;
  width: 100%;
  text-align: center;
}
.page-template-templates-marketing .brand-clickz h4 {
  color: #ffffff;
  text-align: center;
  font-weight: normal;
}
.page-template-templates-marketing span.customRadio, .page-template-templates-marketing span.customCheckbox {
  display: none;
}
.page-template-templates-marketing input[type=radio] {
  width: 30px;
  height: 30px;
  margin: 0;
  cursor: default;
  opacity: 0;
  margin-right: -16px;
}
.page-template-templates-marketing input[type=radio] + span.customRadio {
  display: inline-block;
  width: 30px;
  height: 30px;
  background-color: white;
  /* margin: 0 0 0 -16px;*/
  margin: 0px 8px -8px -16px;
  border-radius: 50%;
  box-shadow: 0 0 3px -1px rgba(0, 0, 0, 0.8);
  pointer-events: none;
}
.page-template-templates-marketing input[type=radio] + span.customRadio::after {
  content: ".";
  color: transparent;
  position: absolute;
  display: block;
  width: 2px;
  height: 2px;
  margin: 7px 0 0 7px;
  opacity: 0.6;
  border-radius: 50%;
  transition: 0.2s;
}
.page-template-templates-marketing input[type=radio]:checked + span.customRadio::after {
  width: 15px;
  height: 15px;
  opacity: 1;
  background-color: #ea5b0b;
  box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.2);
}
.page-template-templates-marketing .metrices-lists h1 {
  font-weight: 700;
  color: #ff8200;
  font-size: 72px;
  font-family: "PT Sans", sans-serif;
  margin-top: 0;
  margin-bottom: 3px;
}
@media (max-width: 36.25em) {
  .page-template-templates-marketing .metrices-lists h1 {
    font-size: 36px;
  }
}
@media (max-width: 47.9375em) {
  .page-template-templates-marketing .metrices-lists h1 {
    font-size: 36px;
  }
}
.page-template-templates-marketing .engagement-type p {
  font-family: "PT Sans", sans-serif;
  font-weight: 700;
  font-size: 24px;
  min-height: 30px;
}
.page-template-templates-marketing .our-approach, .page-template-templates-marketing .engagement-metrics, .page-template-templates-marketing .cause-details, .page-template-templates-marketing .case-study {
  width: 100%;
  float: left;
}
.page-template-templates-marketing .cause-details p {
  padding-bottom: 0px;
}
.page-template-templates-marketing .cause-details-description {
  padding-right: 90px;
}
@media (max-width: 36.25em) {
  .page-template-templates-marketing .cause-details-description {
    padding-right: 0;
  }
}
.page-template-templates-marketing .cause-details-description h4 {
  text-align: center;
  padding-bottom: 5px;
  margin-top: 0;
  font-size: 24px;
  color: #262626;
  font-weight: bold;
}
.page-template-templates-marketing .cause-details-description p {
  text-align: center;
}
.page-template-templates-marketing .tools-description.causes-description p {
  padding-top: 0;
  padding-bottom: 28px;
}
.page-template-templates-marketing .partner-lists {
  padding-top: 26px;
  display: inline-block;
}
.page-template-templates-marketing .partner-lists img {
  width: 160px;
  text-align: center;
  margin: auto;
}
.page-template-templates-marketing .partner-lists figure {
  width: 100%;
  text-align: center;
  padding-bottom: 55px;
}
.page-template-templates-marketing .partner-description h4 {
  font-size: 24px;
  text-align: center;
}
.page-template-templates-marketing .our-customers .short-description {
  padding-bottom: 0px;
}
.page-template-templates-marketing .download-options li a {
  width: 285px;
}
.page-template-templates-marketing .cause-details-right img {
  vertical-align: middle;
}
.page-template-templates-marketing .category-select {
  text-align: center;
  padding-top: 60px;
}
.page-template-templates-marketing .category-select ul li {
  display: inline-block;
  margin-right: 30px;
}
.page-template-templates-marketing .cause-details-right img {
  width: 100%;
}
.page-template-templates-marketing .category-select label {
  font-family: "avenirregular";
  font-size: 18px;
  font-weight: normal;
  padding-left: 7px;
}
.page-template-templates-marketing .cause-details {
  /*padding: 0 50px;*/
  max-height: 391px;
}
@media (max-width: 36.25em) {
  .page-template-templates-marketing .cause-details {
    max-height: unset;
  }
}
.page-template-templates-marketing .banner-info {
  padding: 100px 0;
  width: 100%;
  float: left;
}
.page-template-templates-marketing .banner-info .short-description {
  padding-bottom: 0;
  line-height: 1.3;
}
.page-template-templates-marketing .banner-info h1 {
  margin-bottom: 50px;
}
.page-template-templates-marketing .banner-info .title.title-nopspace {
  margin-bottom: 0;
}
.page-template-templates-marketing header {
  position: fixed;
  width: 100%;
  top: 0;
  background-color: #ffffff;
  left: 0;
  z-index: 9999;
}
.page-template-templates-marketing .main-banner {
  margin-top: 80px;
}
.page-template-templates-marketing .home-banner {
  margin-top: 75px;
}
.page-template-templates-marketing .sticky {
  position: fixed;
  z-index: 999;
  width: 100%;
  top: 81px;
  transition: all 0s;
}
.page-template-templates-marketing header {
  box-shadow: 0 0 8px 0px rgba(224, 224, 224, 0.8);
}
.page-template-templates-marketing table th:first-child {
  text-align: left;
}
.page-template-templates-marketing tbody tr td:first-child {
  text-align: left;
}
.page-template-templates-marketing tbody tr td:last-child {
  text-align: right;
}
.page-template-templates-marketing thead th {
  padding-bottom: 23px;
}
.page-template-templates-marketing table {
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;
}
.page-template-templates-marketing table tr {
  border-bottom: 1px solid #ddd;
  padding: 0.35em;
}
.page-template-templates-marketing table th, .page-template-templates-marketing table td {
  padding: 30px 0;
  text-align: center;
  font-family: "avenirregular";
  font-size: 18px;
  font-weight: normal;
}
.page-template-templates-marketing table th {
  font-family: "Avenir-Black";
  font-size: 14px;
  text-transform: uppercase;
}
.page-template-templates-marketing .footer-logo {
  padding-bottom: 57px;
}
.page-template-templates-marketing .footer-social-links li:hover i {
  border: 2px solid #ea5b0b;
}
.page-template-templates-marketing .footer-links {
  width: 100%;
  float: left;
  padding-bottom: 65px;
}
.page-template-templates-marketing .footer-links li {
  padding-bottom: 12px;
}
.page-template-templates-marketing .footer-links li a {
  font-size: 17px;
}
.page-template-templates-marketing li.footer-title {
  padding-bottom: 21px;
  text-transform: uppercase;
}
.page-template-templates-marketing li.footer-title a {
  font-size: 14px;
  font-weight: 700;
}
.page-template-templates-marketing .footer-social-links {
  margin-top: 6px;
}
.page-template-templates-marketing .footer-social-links li {
  transition: all 1s ease;
  display: inline-block;
}
.page-template-templates-marketing .footer-social-links li i {
  line-height: 35px;
  font-size: 22px;
  border-radius: 50%;
  border: 2px solid #ffffff;
  padding: 6px 8px;
  height: 50px;
  text-align: center;
  width: 50px;
}
.page-template-templates-marketing .footer-social-links li a {
  margin-right: 13px;
}
.page-template-templates-marketing .footer-links li a:hover {
  color: #ea5b0b;
}
.page-template-templates-marketing .footer-copyright {
  padding: 26px 0;
  background-color: #333333;
}
.page-template-templates-marketing .footer-copyright li {
  display: inline-block;
  padding-right: 13px;
}
.page-template-templates-marketing .footer-copyright li a {
  font-size: 17px;
}
.page-template-templates-marketing .article-item:hover .article-item figure img {
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}
.page-template-templates-marketing .our-process-description p {
  min-height: auto;
}
.page-template-templates-marketing #campaign img {
  padding-top: 80px;
}
.page-template-templates-marketing .brand-details-description p, .page-template-templates-marketing .brand-details-description .read-more {
  text-align: center !important;
}
.page-template-templates-marketing .filter-menu li label {
  font-size: 18px;
  font-family: "avenirregular";
  color: #3b3b3a;
  font-weight: 400;
}
.page-template-templates-marketing .filter-menu input[type=radio] {
  width: 0;
  height: 0;
  margin: 0;
}
.page-template-templates-marketing .filter-menu .btn {
  padding: 0;
  padding-bottom: 22px;
}
.page-template-templates-marketing .filter-menu li {
  margin-right: 12px;
}
.page-template-templates-marketing .filter-menu .btn {
  border-bottom: 3px solid transparent;
}
.page-template-templates-marketing .filter-menu .btn:hover, .page-template-templates-marketing .filter-menu .btn.active, .page-template-templates-marketing .filter-menu .btn:active {
  box-shadow: none;
  outline: none;
  border-radius: 0;
  border-bottom: 3px solid #ea5b0b;
}
.page-template-templates-marketing .brand-partner .inner-menu {
  padding: 0;
}
.page-template-templates-marketing .inner-menu .filter-articles {
  border-bottom: 2px solid transparent;
}
.page-template-templates-marketing .filter-menu .article-item figure img {
  width: 100%;
  -o-object-fit: cover;
     object-fit: cover;
}
.page-template-templates-marketing .blog-articles-details .article-item {
  margin-top: 0;
  margin-bottom: 25px;
}
.page-template-templates-marketing .blog-articles-details h1.title {
  width: 100%;
}
.page-template-templates-marketing .article-date {
  float: left;
}
.page-template-templates-marketing .article-date p {
  line-height: 50px;
  font-size: 14px;
  font-family: "Avenir-Black";
}
.page-template-templates-marketing .article-link {
  float: right;
}
.page-template-templates-marketing .article-link ul li {
  display: inline-block;
}
.page-template-templates-marketing .article-link ul li i {
  line-height: 35px;
  font-size: 22px;
  border-radius: 50%;
  border: 2px solid #ffffff;
  background-color: #ea5b0b;
  padding: 6px 8px;
  color: #ffffff;
  height: 50px;
  text-align: center;
  width: 50px;
}
.page-template-templates-marketing .article-banner {
  float: left;
  width: 100%;
}
.page-template-templates-marketing .article-banner img {
  width: 100%;
  height: 460px;
  -o-object-fit: cover;
     object-fit: cover;
}
.page-template-templates-marketing .article-publish, .page-template-templates-marketing .blog-articles-details, .page-template-templates-marketing .also-like, .page-template-templates-marketing .article-brief-description {
  float: left;
  width: 100%;
}
.page-template-templates-marketing .article-publish {
  padding-bottom: 28px;
  padding-top: 50px;
}
.page-template-templates-marketing .article-brief-description {
  padding-top: 54px;
}
.page-template-templates-marketing .article-brief-description p {
  text-align: left;
  padding-bottom: 30px;
}
.page-template-templates-marketing .blog-articles-details h4 {
  text-align: center;
  width: 75%;
  margin: auto;
}
.page-template-templates-marketing #masonry img {
  height: auto;
  vertical-align: middle;
  margin: auto;
}
.page-template-templates-marketing #masonry figure {
  border: 1px solid #ebebeb;
  border-bottom: 0;
}
.page-template-templates-marketing #masonry .article-item figure {
  display: flex;
}
.page-template-templates-marketing #masonry img {
  height: 100%;
  width: 100%;
}
.page-template-templates-marketing .brand-articles #masonry img {
  height: auto;
  width: auto;
}
.page-template-templates-marketing section.blog-articles-details.white-bg {
  padding-top: 90px;
}
.page-template-templates-marketing .contactus-container {
  width: 100%;
  float: left;
}
.page-template-templates-marketing .address-panel {
  width: 100%;
  float: left;
}
.page-template-templates-marketing .address-panel.top {
  margin-bottom: 55px;
}
.page-template-templates-marketing .address-panel h3 {
  font-family: "Avenir-Black";
  color: #262626;
  font-size: 24px;
  margin-bottom: 35px;
}
.page-template-templates-marketing .address-info {
  margin-bottom: 40px;
  display: block;
}
.page-template-templates-marketing .address-info p {
  font-size: 18px;
  color: #262626;
  margin-bottom: 10px;
  line-height: initial;
}
.page-template-templates-marketing .address-info p:last-child {
  margin-bottom: 0;
}
.page-template-templates-marketing .address-panel a {
  font-family: "Avenir-Black";
  color: #262626;
  font-size: 18px;
}
.page-template-templates-marketing .form-right .form-control {
  height: 54px;
  box-shadow: none;
  -webkit-box-shadow: none;
  color: #262626;
  font-size: 18px;
  padding: 6px 20px;
  margin-bottom: 25px;
}
.page-template-templates-marketing .form-right .form-control::-webkit-input-placeholder, .page-template-templates-marketing .form-right .form-control::-moz-input-placeholder, .page-template-templates-marketing .form-right .form-control::-ms-input-input-placeholder, .page-template-templates-marketing .form-right .form-control:-moz-input-placeholder {
  color: #262626;
  font-size: 18px;
}
.page-template-templates-marketing .form-right textarea.form-control {
  resize: none;
  height: 400px;
  margin-bottom: 40px;
}
.page-template-templates-marketing .form-right .form-control:focus {
  border-color: #ea5b0b;
}
.page-template-templates-marketing .form-right .main-btn {
  width: 160px;
}
.page-template-templates-marketing .ourexperts-container .tools-description p {
  padding-top: 0;
  margin-bottom: 30px;
}
.page-template-templates-marketing .ourexperts-container .tools-description p:last-child {
  margin-bottom: 0;
}
.page-template-templates-marketing .ourexperts-container .content-details {
  width: 87%;
}
.page-template-templates-marketing .ourexperts-container .tools-banner img {
  width: 100%;
}
.page-template-templates-marketing .ourexperts-container .tools-description.right {
  padding-right: 0;
  padding-left: 40px;
}
.page-template-templates-marketing .ourexperts-container .tools-description.right p {
  text-align: left;
}
.page-template-templates-marketing .ourteam-container {
  width: 100%;
  float: left;
}
.page-template-templates-marketing .teampanel-box {
  width: 100%;
  float: left;
  margin-bottom: 75px;
}
.page-template-templates-marketing .teampanel-box figure {
  overflow: hidden;
  width: 100%;
  height: 200px;
  margin-bottom: 25px;
  position: relative;
  transition: all 0.5s linear;
}
.page-template-templates-marketing .teampanel-box:hover figure::before {
  transition: all 0.5s linear;
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1;
}
.page-template-templates-marketing .teampanel-box figure img {
  width: 100%;
  transition: all 0.5s linear;
  transform: scale3d(1, 1, 1);
}
.page-template-templates-marketing .teampanel-box:hover figure img {
  transform: scale3d(1.1, 1.1, 1);
}
.page-template-templates-marketing .teampanel-box .teampanel-description {
  text-align: left;
}
.page-template-templates-marketing .teampanel-box .teampanel-description h3 {
  font-family: "Avenir-Black";
  color: #262626;
  font-size: 24px;
  transition: all 0.5s linear;
}
.page-template-templates-marketing .teampanel-box .teampanel-description p {
  color: #262626;
  font-size: 18px;
  text-align: left;
}
.page-template-templates-marketing .teampanel-box:hover .teampanel-description h3 {
  color: #ea5b0b;
}
.page-template-templates-marketing .ourteam-list .filters {
  width: 100%;
  float: left;
  margin-bottom: 40px;
  padding-left: 15px;
}
.page-template-templates-marketing .ourteam-list .filters label.btn {
  font-size: 18px;
  color: #999999;
  box-shadow: none;
  -webkit-box-shadow: none;
  padding: 0;
  margin-right: 20px;
}
.page-template-templates-marketing .ourteam-list .filters label.btn:last-child {
  margin-right: 0;
}
.page-template-templates-marketing .ourteam-list .filters label.active, .page-template-templates-marketing .ourteam-list .filters label:focus {
  color: #262626;
  outline: 0;
  outline-offset: 0;
}
.page-template-templates-marketing .ourteam-description {
  width: 100%;
  float: left;
}
.page-template-templates-marketing label.btns {
  position: relative;
  top: -7px;
}
.page-template-templates-marketing .blog-articles-details #masonry img {
  width: 100%;
  height: 100%;
}
.page-template-templates-marketing .brand-articles .article-item {
  margin-top: 0;
  margin-bottom: 24px;
}
.page-template-templates-marketing .filter-articles ul li {
  width: 100%;
}
.page-template-templates-marketing .case-studie-menu .inner-menu {
  padding: 27px 0 0 0;
}
.page-template-templates-marketing .bs-example-tabs .nav-tabs {
  margin-bottom: 15px;
  display: -webkit-flex;
  display: flex;
  flex-direction: row;
}
.page-template-templates-marketing .bs-example-tabs .nav-tabs li {
  text-align: center;
  flex-grow: 1;
}
.page-template-templates-marketing .graph-tabs li i {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #ebebeb;
  display: inline-block;
  position: relative;
}
.page-template-templates-marketing .graph-tabs li i::before {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: transparent;
  display: inline-block;
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
.page-template-templates-marketing .graph-tabs li.active i::before {
  background: #ea5b0b;
}
.page-template-templates-marketing .graph-tabs li span {
  display: inline-block;
}
.page-template-templates-marketing .graph-tabs li span i {
  display: table-cell;
  vertical-align: middle;
}
.page-template-templates-marketing .graph-tabs li small {
  display: table-cell;
  vertical-align: middle;
  padding-left: 10px;
  font-size: 18px;
  color: #3b3b3a;
}
.page-template-templates-marketing .nav-tabs.graph-tabs > li.active > a {
  border: none;
}
.page-template-templates-marketing .nav-tabs.graph-tabs > li.active > a small {
  color: #000;
}
@media (max-width: 36.25em) {
  .page-template-templates-marketing .nav-tabs.graph-tabs > li.active > a small {
    font-size: 14px;
  }
}
@media (max-width: 47.9375em) {
  .page-template-templates-marketing .nav-tabs.graph-tabs > li.active > a small {
    font-size: 18px;
  }
}
.page-template-templates-marketing .nav-tabs.graph-tabs > li.active > a:focus, .page-template-templates-marketing .nav-tabs.graph-tabs > li.active > a:hover {
  border: none;
}
.page-template-templates-marketing .nav-tabs.graph-tabs > li > a:hover {
  border-color: transparent;
}
@media (max-width: 36.25em) {
  .page-template-templates-marketing .nav-tabs.graph-tabs > li a small {
    font-size: 14px;
  }
}
@media (max-width: 47.9375em) {
  .page-template-templates-marketing .nav-tabs.graph-tabs > li a small {
    font-size: 18px;
  }
}
.page-template-templates-marketing .nav.graph-tabs > li > a:focus, .page-template-templates-marketing .nav.graph-tabs > li > a:hover {
  background-color: transparent;
}
.page-template-templates-marketing .nav-tabs.graph-tabs {
  border: none;
}
.page-template-templates-marketing .nav-tabs.graph-tabs > li > a {
  border: none;
  padding: 0;
}
.page-template-templates-marketing .tab-content.graph-tab-content {
  margin-bottom: 16px;
}
.page-template-templates-marketing #chartdiv1, .page-template-templates-marketing #chartdiv2, .page-template-templates-marketing #chartdiv3, .page-template-templates-marketing #chart_2, .page-template-templates-marketing #chartdiv4 {
  width: 100%;
  /*height: 400px;*/
  height: 300px;
}
@media (max-width: 36.25em) {
  .page-template-templates-marketing .chartjs-render-monitor {
    position: relative;
    top: 46px;
  }
}
.page-template-templates-marketing .canvas-chart {
  width: 100%;
  height: 300px;
}
.page-template-templates-marketing .canvas-chart canvas {
  margin-top: 50px;
}
.page-template-templates-marketing .amcharts-chart-div a {
  display: none !important;
}
.page-template-templates-marketing .description-makers-right, .page-template-templates-marketing .description-makers-progress {
  width: 100%;
  float: left;
}
.page-template-templates-marketing .close, .page-template-templates-marketing button.close {
  transition: all 0.6s;
}
.page-template-templates-marketing .produts-lists figure {
  line-height: 90px;
  display: block;
  margin: auto;
  width: auto;
  min-height: 140px;
  height: auto;
  overflow: hidden;
  text-align: center;
  border-bottom: 1px solid #ebebeb;
}
.page-template-templates-marketing .produts-lists figure img {
  transition: all 0.5s linear;
  transform: scale3d(1, 1, 1);
  width: auto;
  height: auto;
  margin: auto;
}
.page-template-templates-marketing .product-details {
  padding: 20px 0px 0px 0;
}
.page-template-templates-marketing .produts-lists:hover figure img {
  transform: scale3d(1.1, 1.1, 1);
}
.page-template-templates-marketing .sample-window {
  width: 350px;
  padding: 5px;
  border: 2px solid #186db4;
  background-color: #fff;
  display: none;
}
.page-template-templates-marketing .plainmodal-close {
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 0;
}
.page-template-templates-marketing #demo {
  width: 75%;
  padding: 20px 40px;
  color: #fff;
  background-color: #ffffff;
  border-radius: 10px;
  display: none;
  font-family: "Georgia", serif;
}
.page-template-templates-marketing #demo:after {
  /* clearfix */
  content: "";
  clear: both;
  display: block;
}
.page-template-templates-marketing #demo p {
  font-size: 18px;
}
.page-template-templates-marketing #demo .sample-head {
  margin: 0 0 15px;
  font-size: 36px;
  font-family: "avenirregular";
}
.page-template-templates-marketing #demo img {
  float: left;
  margin-right: 10px;
  box-shadow: none;
}
.page-template-templates-marketing #demo .plainmodal-close i {
  font-size: 36px;
  text-align: center;
  position: absolute;
  top: -20px;
  right: -14px;
  background-color: #ea5b0b;
  width: 50px;
  height: 50px;
  vertical-align: middle;
  padding-top: 5px;
  border-radius: 50%;
}
.page-template-templates-marketing #demo .plainmodal-close:hover {
  transform: rotate(360deg);
}
.page-template-templates-marketing .sample-head h1.title {
  width: 100%;
}
.page-template-templates-marketing .btn.focus, .page-template-templates-marketing .btn:focus, .page-template-templates-marketing .btn:hover {
  outline: none;
  color: #ffffff;
}
.page-template-templates-marketing video {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  z-index: -100;
  transform: translateX(-50%) translateY(-50%);
  background: url("image/home-banner.png") no-repeat;
  background-position: right;
  transition: 1s opacity;
}
.page-template-templates-marketing .stopfade {
  opacity: 0.5;
}
.page-template-templates-marketing .our-products, .page-template-templates-marketing footer, .page-template-templates-marketing .our-audience {
  float: left;
  width: 100%;
}
.page-template-templates-marketing .banner-description {
  width: 920px;
  margin: 0 auto;
}
@media (max-width: 36.25em) {
  .page-template-templates-marketing .banner-description {
    width: 100%;
    float: left;
  }
}
@media (max-width: 47.9375em) {
  .page-template-templates-marketing .banner-description {
    width: 100%;
    float: left;
  }
}
.page-template-templates-marketing .breadcrumbs {
  width: 280px;
  margin: 0 auto;
}
.page-template-templates-marketing .banner-description h3 {
  color: #262626;
  font-family: "PT Sans", sans-serif;
  font-size: 36px;
}
@media (max-width: 36.25em) {
  .page-template-templates-marketing .banner-description h3 {
    font-size: 26px;
  }
}
@media (max-width: 47.9375em) {
  .page-template-templates-marketing .banner-description h3 {
    width: 100%;
    font-size: 26px;
  }
}
.page-template-templates-marketing .breadcrumbs ul li a {
  color: #ff8200;
  position: relative;
  float: left;
  margin-right: 33px;
  font-size: 18px;
}
.page-template-templates-marketing .breadcrumbs ul li a:after {
  color: #262626;
  font-size: 18px;
  right: -18px;
  position: absolute;
  content: "\f105";
  font-family: FontAwesome;
}
.page-template-templates-marketing .breadcrumbs ul li:last-child a {
  margin-right: 0;
}
.page-template-templates-marketing .breadcrumbs ul li:last-child a:after {
  content: none;
  left: 0;
  right: 0px;
}
.page-template-templates-marketing .menu__overlay, .page-template-templates-marketing .our-approach {
  float: left;
  width: 100%;
}
.page-template-templates-marketing .description-makers-left p, .page-template-templates-marketing .engagement-details p, .page-template-templates-marketing p {
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  color: #262626;
}
.page-template-templates-marketing .produts-lists, .page-template-templates-marketing .our-products, .page-template-templates-marketing .banner {
  float: left;
  width: 100%;
}
@media (max-width: 36.25em) {
  .page-template-templates-marketing .produts-lists, .page-template-templates-marketing .our-products, .page-template-templates-marketing .banner {
    padding: 5px 0;
  }
}
@media (max-width: 47.9375em) {
  .page-template-templates-marketing .produts-lists, .page-template-templates-marketing .our-products, .page-template-templates-marketing .banner {
    padding: 5px 0;
  }
}
.page-template-templates-marketing .slick-dots {
  position: inherit;
}
.page-template-templates-marketing .slick-dots li {
  margin: 0;
}
.page-template-templates-marketing .slick-dots li.slick-active button:before {
  color: #ff8200;
  font-size: 15px;
}
.page-template-templates-marketing .slick-dots li button:before {
  font-size: 15px;
}
.page-template-templates-marketing .description-makers-left p {
  text-align: left;
}
.page-template-templates-marketing .audience-description p {
  text-align: left;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  color: #262626;
}
.page-template-templates-marketing .title-small {
  text-align: center;
}
.page-template-templates-marketing .nav-tabs > li.active > a {
  color: red !important;
}
.page-template-templates-marketing .nav-tabs > li.active > a:focus, .page-template-templates-marketing .nav-tabs > li.active > a:hover {
  color: red !important;
}
.page-template-templates-marketing .graph-tabs li small {
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  color: #999999;
}
.page-template-templates-marketing .nav-tabs > li.active > a {
  background-color: transparent;
  color: red;
}
.page-template-templates-marketing .nav-tabs > li.active > a:focus, .page-template-templates-marketing .nav-tabs > li.active > a:hover {
  background-color: transparent;
  color: red;
}
.page-template-templates-marketing .footer__info li {
  list-style-type: none;
  margin: 10px 0;
}
.page-template-templates-marketing .footer__copyright p {
  text-align: left;
}

div#disqus_recommendations {
  display: none;
}

.header-ad-slot-clickz, .clikz-mpu-ad {
  display: inline-flex;
}

.jobs__block {
  margin: -24px -12px 0 -12px;
}
.jobs__block ul {
  padding: 0;
  margin: 0;
}
.jobs__block ul li {
  list-style: none;
  height: 132px;
  display: table;
  width: 16.666666%;
  float: left;
  padding: 0 12px;
  margin-top: 24px;
  box-shadow: 0 0 10px 3px rgba(68, 80, 85, 0.15);
}
@media (max-width: 77.5em) {
  .jobs__block ul li {
    width: 25%;
  }
}
@media (max-width: 50em) {
  .jobs__block ul li {
    width: 33%;
  }
}
@media (max-width: 37.5em) {
  .jobs__block ul li {
    width: 50%;
  }
}
.jobs__block ul li a {
  background-color: rgb(255, 255, 255);
  font-family: "PT Sans", sans-serif;
  font-weight: 600;
  font-size: 18px;
  color: rgb(68, 80, 85);
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  padding: 12px;
}

.page-template-page-latest .section__contrast {
  margin-top: 60px;
}

.post-motif {
  background-image: url("../img/graphic--post.png");
  background-size: cover;
  background-repeat: no-repeat;
  width: 467px;
  height: 803px;
  position: absolute;
  right: 0;
  top: 50px;
  z-index: -1;
}
@media (max-width: 87.4375em) {
  .post-motif {
    display: none;
  }
}

.single-post__next-article-divider {
  text-align: center;
  border: 1px solid #ffddb3;
  background: #fffaf4;
  color: #fd8100;
  border-radius: 5px;
}
@media (max-width: 30em) {
  .single-post__next-article-divider {
    margin-top: 10px;
    margin-bottom: 10px;
  }
}
.single-post__next-article-divider .fa {
  position: relative;
  top: -3px;
  margin: 0 5px;
}
@media (min-width: 31.25em) and (max-width: 77.5em) {
  .single-post .container {
    padding-right: 80px;
    padding-left: 80px;
  }
}
.single-post .embed-container {
  margin-bottom: 24px;
}
.single-post .lb-caption {
  font-size: 14px !important;
  line-height: 18px !important;
  font-weight: normal !important;
}
@media (min-width: 58.125em) {
  .single-post__header h1 {
    font-size: 60px;
    margin: 30px 0;
  }
}
.single-post__header p {
  font-size: 21px;
  font-family: "PT Sans", sans-serif;
  margin: 0 0 70px 0;
  font-weight: 400;
}
@media (max-width: 77.5em) {
  .single-post__header p {
    margin-bottom: 40px;
  }
}
.single-post__header .material-icons {
  position: relative;
  top: -2px;
  vertical-align: middle;
}
.single-post__thumbnail {
  margin-bottom: 24px;
}
.single-post__related-content {
  margin: 0 0 0 -200px;
  padding: 24px 24px 24px 0;
}
.single-post__related-content__heading {
  margin: 0 30px 24px 0;
}
.single-post__breadcrumb a, .single-post__breadcrumb span[property=name] {
  font-size: 18px;
  font-weight: 600;
  font-family: "PT Sans", sans-serif;
  color: rgb(255, 139, 0);
}
.single-post__breadcrumb i {
  vertical-align: middle;
  font-size: 18px;
  display: inline-block;
  font-weight: bold;
  margin: 0 5px 3px 5px;
}
.single-post__author {
  font-size: 14px;
}
@media (max-width: 77.5em) {
  .single-post__author {
    margin-bottom: 40px;
  }
  .single-post__author-link, .single-post__author span {
    display: inline;
  }
}
.single-post__author-link {
  display: block;
  float: left;
  width: 100%;
  font-weight: bold;
  color: rgb(255, 139, 0);
}
.single-post__author-link--no-title {
  margin-top: 12px;
  float: left;
  width: 100%;
}
.single-post__author strong, .single-post__author span {
  display: block;
}
.single-post__author .events__members, .single-post__author span {
  margin-bottom: 12px;
}
.single-post__author .addthis_inline_share_toolbox {
  margin-top: 24px;
}
.single-post__author .addthis_inline_share_toolbox span {
  margin: 0 !important;
}
.single-post__author .addthis_inline_share_toolbox .at-share-btn {
  margin: 0 12px 0 0 !important;
  background-color: rgb(255, 139, 0) !important;
}
.single-post__author .addthis_inline_share_toolbox .at-share-btn path {
  fill: rgb(255, 255, 255) !important;
}
.single-post__author-info {
  margin: -12px 0 12px 0;
}
.single-post__author .company-logo {
  margin: 0 auto 40px auto;
}
.single-post__author .company-logo img {
  max-width: 100px;
}
.single-post__author .post-categories {
  padding: 0;
}
.single-post__author .post-categories li {
  list-style-type: none;
}
.single-post__author .post-categories li a {
  color: rgb(255, 139, 0);
  font-weight: bold;
}
.single-post__author .post-categories li a:hover {
  color: rgb(255, 180, 102);
}
.single-post__content a img, .single-post__content a img.aligncenter {
  max-width: 100%;
  height: auto;
  display: inline-block !important;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 77.4375em) {
  .single-post__content .static {
    position: fixed;
    top: 70px;
    left: 500px;
    width: 330px;
    height: 186px;
    z-index: 1;
  }
}
.single-post__content #video-container {
  background-color: rgb(68, 80, 85);
}
.single-post__content h4, .single-post__content h5, .single-post__content h6 {
  margin-top: 10px;
  margin-bottom: 20px;
}
.single-post__content iframe {
  margin-bottom: 24px;
}
.single-post__content ul, .single-post__content ol, .single-post__content p {
  font-size: 18px;
  line-height: 30px;
  margin: 0 0 25px 0;
}
@media (max-width: 38.74em) {
  .single-post__content ul, .single-post__content ol, .single-post__content p {
    font-size: 16px;
    line-height: 24px;
  }
}
.single-post__content ul, .single-post__content ol {
  display: block;
}
.single-post__content ul li, .single-post__content ol li {
  margin-bottom: 5px;
}
.single-post__content .attachment-container {
  text-align: center;
}
.single-post__content figure {
  position: relative;
  margin: 24px auto;
  max-width: 100%;
}
.single-post__content figure .btn-round {
  position: absolute;
  top: 24px;
  right: 24px;
}
.single-post__content figure img {
  display: inline-block;
  max-width: 100%;
  height: auto;
  margin: 0 auto;
}
.single-post__content figure figcaption {
  text-align: left;
  font-size: 14px;
  line-height: 18px;
  margin: 24px 0 0 0;
}
.single-post__content .cnt-marketo-form-container p {
  font-size: 13px;
  line-height: normal;
}
@media (min-width: 58.125em) {
  .single-post__content--form {
    border-left: 1px solid #999999;
    padding-left: 40px;
  }
  .single-post__content--form-content {
    padding-right: 40px;
  }
}
.single-post__content--form .cnt-marketo-form-container {
  margin-top: 0 !important;
}
.single-post__tags {
  margin: 45px 0 60px 0;
}
.single-post__tags p {
  display: inline;
}
.single-post__tags-list {
  display: inline !important;
  margin: 0;
  padding: 0;
}
.single-post__tags-list li {
  display: inline;
  list-style-type: none;
  position: relative;
}
.single-post__tags-list li:first-child:before {
  display: none;
}
.single-post__tags-list li:before {
  position: absolute;
  content: "|";
  font-size: 18px;
  left: -5px;
  top: -3px;
}
.single-post__tags-list li a {
  font-size: 18px;
  color: rgb(255, 139, 0);
  margin: 0 15px;
}
.single-post__tags-list li a:hover {
  color: rgb(68, 80, 85);
}
@media (min-width: 53.75em) and (max-width: 77.4375em) {
  .single-post__sidebar-promo, .single-post__sidebar .ad {
    width: 50%;
    float: left;
  }
}
@media (max-width: 53.6875em) {
  .single-post__sidebar-promo, .single-post__sidebar .ad {
    width: 100%;
  }
}
.single-post__sidebar .ab {
  max-width: 330px;
  margin: 0 auto;
}
.single-post__sidebar .ad {
  text-align: center;
  margin-bottom: 40px;
}
.single-post__related-articles {
  margin-top: 60px;
  margin-bottom: 60px;
}
.single-post__related-articles h2 {
  margin: 0 0 40px 0;
}
@media (min-width: 38.6875em) and (max-width: 48em) {
  .single-post__related-articles .col-md-4, .single-post__related-articles .col-md-__odd {
    width: 100%;
  }
}
@media (min-width: 58.125em) and (max-width: 72.5em) {
  .single-post__related-articles .col-md-__odd .ab {
    width: 100%;
  }
  .single-post__related-articles .col-md-__odd .ab:last-child {
    display: none;
  }
}

@media (max-width: 58.0625em) {
  .popular-posts-block {
    display: none;
  }
}

.partnerlogoblock {
  width: 100%;
  margin-bottom: 20px;
}
.partnerlogoblock__headingtext {
  font-weight: bold;
}
.partnerlogoblock__logoimage {
  width: 100%;
  max-width: 300px;
  border: 0;
}

.archive .ad__canvas-payload {
  margin-bottom: 40px;
}
.archive .breadcrumbs a, .archive .breadcrumbs span[property=name], .archive .breadcrumbs .current-item {
  font-size: 30px;
  color: rgb(68, 80, 85);
  font-family: "PT Sans", sans-serif;
  font-weight: 600;
}
.archive .breadcrumbs i {
  font-size: 30px;
  margin: 0 8px;
  position: relative;
  bottom: 6px;
}
.archive-title {
  margin-bottom: 40px;
  display: table;
  width: 100%;
}
@media (max-width: 40em) {
  .archive-title {
    margin-bottom: 24px;
  }
}
.archive-title__breadcrumb, .archive-title__filter {
  display: table-cell;
  vertical-align: middle;
  float: none;
  width: 50%;
}
@media (max-width: 40em) {
  .archive-title__breadcrumb, .archive-title__filter {
    width: 100%;
    display: block;
  }
}
.archive-title__filter {
  text-align: right;
}
@media (max-width: 40em) {
  .archive-title__filter {
    margin: 14px 0 0 0;
  }
}
.archive-title__filter .btn-group {
  margin-left: 24px;
}
.archive-title__filter .btn-group > a {
  font-size: 18px;
  font-family: "PT Sans", sans-serif;
  font-weight: 600;
  color: rgb(68, 80, 85);
}
.archive-title__filter .btn-group > a i {
  vertical-align: middle;
}
.archive-title__filter .btn-group > a:hover, .archive-title__filter .btn-group > a:active, .archive-title__filter .btn-group > a:focus {
  text-decoration: none;
}
.archive-title__filter .btn-group .dropdown-toggle {
  text-decoration: none;
  box-shadow: none;
  padding: 7px 24px;
  margin: 10px 0;
  display: inline-block;
  -webkit-border-radius: 50px;
  -moz-border-radius: 50px;
  box-shadow: 0 0 10px 3px rgba(68, 80, 85, 0.15);
}
.archive-title__filter .btn-group.open .dropdown-toggle:after {
  content: "";
  background-image: url("../img/nav-pointer.png");
  width: 19px;
  height: 10px;
  position: absolute;
  left: 0;
  bottom: -10px;
  right: 0;
  margin: auto;
}
.archive-title__filter .btn-group .dropdown-menu {
  height: auto;
  max-height: 235px;
  overflow-x: hidden;
  border: 0;
}
.archive-title__filter .btn-group .dropdown-menu__clip {
  right: 0;
  left: auto;
  transform: none;
}
.archive__pagination {
  text-align: center;
  margin: 40px 0 0 0;
}
.archive__sidebar .ab {
  max-width: 330px;
  margin: 0 auto;
}
.archive__sidebar .ad {
  text-align: center;
  margin-bottom: 40px;
}
.archive__filter-sort {
  font-family: "PT Sans", sans-serif;
  font-size: 18px;
  font-weight: 600;
  display: inline-block;
  vertical-align: middle;
  position: relative;
  top: -1px;
}

.page-numbers {
  display: inline-block;
  padding: 10px 15px;
  margin: 0 3px;
  background-color: rgb(255, 255, 255);
  color: rgb(255, 139, 0);
  box-shadow: 0 0 10px 3px rgba(68, 80, 85, 0.15);
}
.page-numbers:hover, .page-numbers.current {
  background-color: rgb(255, 139, 0);
  color: rgb(255, 255, 255);
  text-decoration: none;
}

.pinned-tech-talk .embed-container:before {
  display: block;
  position: absolute;
  /* background: white; */
  z-index: 9999;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  content: "";
}

.redirect-spinner {
  width: 40px;
  height: 40px;
  background-image: url("../img/loading.gif");
  background-repeat: no-repeat;
  background-size: cover;
  display: block;
  margin: 0 auto 20px auto;
}
.redirect-previous-page {
  display: block;
  width: 200px;
  margin: 0 auto;
  text-align: center;
  font-family: "PT Sans", sans-serif;
  font-weight: 600;
  font-size: 18px;
}

.post-type-archive-resources .breadcrumbs a, .post-type-archive-resources .breadcrumbs span[property=name] {
  font-size: 30px;
}

@media (max-width: 58.125em) {
  .resources-template-templates-resources-minimal .single-post__content--form {
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 2px solid #ddd;
  }
}

.single-resources .company-logo {
  margin: 0 auto 40px auto;
  max-width: 150px;
}

.resources-template-templates-resources-bundle__form {
  margin-bottom: 50px;
}
.resources-template-templates-resources-bundle__form .mktoForm:not(.newsletter-modal-mkto) {
  margin: 0 auto;
}
.resources-template-templates-resources-bundle__bundled {
  border-top: 1px solid #ccc;
  padding-top: 30px;
  padding-bottom: 30px;
}
.resources-template-templates-resources-bundle__bundled .company-logo {
  margin: 20px 0;
  max-width: 150px;
}
@media (min-width: 38.75em) {
  .resources-template-templates-resources-bundle .ab__single {
    margin-bottom: 0;
  }
}
.resources-template-templates-resources-bundle .row:last-child .resources-template-templates-resources-bundle__bundled {
  border-bottom: none;
}

.post-type-archive-techtalks .reports__cover-container p {
  text-align: center;
  color: rgb(255, 255, 255);
  margin-top: 15px;
}
.post-type-archive-techtalks .pinned-tech-talk {
  background-color: rgb(255, 255, 255);
  height: auto;
  margin-bottom: 24px;
  position: relative;
  box-shadow: 0 0 10px 3px rgba(68, 80, 85, 0.15);
  transition: all 0.3s ease-in-out;
}
.post-type-archive-techtalks .pinned-tech-talk:hover {
  box-shadow: 0 0 10px 5px rgba(68, 80, 85, 0.2);
}
.post-type-archive-techtalks .pinned-tech-talk .col-md-8 {
  padding-left: 0;
}
@media (max-width: 58.125em) {
  .post-type-archive-techtalks .pinned-tech-talk .col-md-8 {
    padding-right: 0;
  }
}
.post-type-archive-techtalks .pinned-tech-talk-about {
  margin-bottom: 24px;
}

.resources_v2__search {
  margin: 15px 0;
}
.resources_v2__cover-container {
  display: table-cell;
  vertical-align: middle;
  float: none;
}
.resources_v2__cover-container .btn-primary {
  background-color: rgb(255, 139, 0);
  margin-right: 5px;
}
.resources_v2__cover-container p {
  color: rgb(255, 255, 255);
  margin-top: 10px;
}
.resources_v2__cover__btn-container {
  margin-top: 30px;
}
.resources_v2__cover__btn-container .btn-secondary {
  background-color: #a5a5a5;
  color: white !important;
}
.resources_v2__cover-image {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  background-color: grey;
  min-height: 270px;
  margin-bottom: 50px;
  position: relative;
  display: table;
}
@media (max-width: 38.74em) {
  .resources_v2__cover-image {
    min-height: 220px;
  }
}
.resources_v2__cover-image:before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
}
.resources_v2__cover-image h1 {
  margin: 0;
  font-size: 36px;
  color: rgb(255, 255, 255);
}
@media (max-width: 38.74em) {
  .resources_v2__cover-image h1 {
    font-size: 24px;
  }
}
.resources_v2 .breadcrumbs {
  margin: 20px 0;
}
.resources_v2 .breadcrumbs a, .resources_v2 .breadcrumbs span[property=name] {
  font-size: 18px;
  font-weight: 600;
  font-family: "PT Sans", sans-serif;
  color: rgb(255, 139, 0);
}
.resources_v2 .breadcrumbs i {
  vertical-align: middle;
  font-size: 18px;
  display: inline-block;
  font-weight: bold;
  margin: 0 5px 3px 5px;
}
.resources_v2__end-align-left {
  text-align: left;
}
.resources_v2__end .col-md-8 img {
  max-width: 155px;
}
.resources_v2__end .col-md-4 {
  text-align: right;
}
.resources_v2__end .btn-primary {
  background-color: rgb(255, 139, 0);
}

.page h1 {
  margin: 40px 0;
}
.page__content p {
  font-size: 16px;
  line-height: 24px;
}
@media (min-width: 75em) {
  .page__container {
    width: 1038px;
    padding: 0;
  }
}

.search .archive-title {
  margin-top: 50px;
}
.search.ad__canvas-active .archive-title {
  margin-top: 40px;
}
.search .breadcrumbs span[property=name] {
  font-family: "Titillium Web", sans-serif;
  font-weight: 600;
  font-size: 30px;
  color: rgb(68, 80, 85);
}

.reports__cover-container {
  display: table-cell;
  vertical-align: middle;
  float: none;
}
.reports__cover-image {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  background-color: grey;
  min-height: 270px;
  margin-bottom: 50px;
  position: relative;
  display: table;
}
@media (max-width: 38.74em) {
  .reports__cover-image {
    min-height: 220px;
  }
}
.reports__cover-image:before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
}
.reports__cover-image h1 {
  margin: 0;
  text-align: center;
  font-size: 36px;
  color: rgb(255, 255, 255);
}
@media (max-width: 38.74em) {
  .reports__cover-image h1 {
    font-size: 24px;
  }
}
.reports__cover-image-hide-title {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  background-color: grey;
  min-height: 270px;
  margin-bottom: 50px;
  position: relative;
  display: table;
}
@media (max-width: 38.74em) {
  .reports__cover-image-hide-title {
    min-height: 220px;
  }
}
.reports__cover-image-hide-title:before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.reports__cover-image-hide-title h1 {
  margin: 0;
  text-align: center;
  font-size: 36px;
  color: rgb(255, 255, 255);
  visibility: hidden;
}
@media (max-width: 38.74em) {
  .reports__cover-image-hide-title h1 {
    font-size: 24px;
  }
}
.reports__breadcrumb {
  text-align: center;
  margin-bottom: 15px;
}
.reports__breadcrumb-hide-title {
  visibility: hidden;
}
.reports__breadcrumb a, .reports__breadcrumb span[property=name], .reports__breadcrumb .current-item {
  font-size: 18px;
  font-weight: 600;
  font-family: "PT Sans", sans-serif;
  color: rgb(255, 255, 255);
}
.reports__breadcrumb i {
  vertical-align: middle;
  font-size: 18px;
  display: inline-block;
  margin: 0 5px;
  color: rgb(255, 255, 255);
}
.reports__breadcrumb span[typeof=ListItem], .reports__breadcrumb .current-item {
  vertical-align: middle;
  display: inline-block;
}
.reports__breadcrumb span[typeof=ListItem]:last-child, .reports__breadcrumb .current-item:last-child {
  max-width: 300px;
  overflow: hidden;
  display: inline-block;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 18px;
  font-weight: 600;
  font-family: "PT Sans", sans-serif;
  color: rgb(255, 255, 255);
  text-align: left;
}
@media (max-width: 21.875em) {
  .reports__breadcrumb span[typeof=ListItem]:last-child, .reports__breadcrumb .current-item:last-child {
    max-width: 250px;
  }
}
.reports__image {
  position: relative;
}
.reports__image .popup-trigger {
  position: absolute;
  top: 24px;
  right: 24px;
}
.reports__image--wide {
  margin: 24px 0;
}
.reports__image--full-width {
  width: 100%;
  height: 600px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
@media (max-width: 38.74em) {
  .reports__image--full-width {
    height: 350px;
  }
}
.reports__image--full-width__container {
  margin: 24px 0;
}
.reports__caption {
  font-size: 14px !important;
  margin: 0;
}
.reports__caption--wide {
  margin: 24px 24px 0 0;
}
.reports__caption--full-width {
  margin: 24px 24px 0 24px;
}
.reports figure {
  position: relative;
}
.reports figure .btn-round {
  position: absolute;
  top: 24px;
  right: 24px;
}
.reports__charts .chartjs-render-monitor {
  margin: 40px auto;
}
.reports__charts p {
  font-size: 14px;
  margin-bottom: 24px;
  text-align: center;
  width: 100%;
}
.reports__download-btn {
  text-decoration: none;
  box-shadow: none;
  padding: 7px 24px;
  margin: 24px 0;
  display: inline-block;
  background-color: rgb(255, 139, 0);
  color: rgb(255, 255, 255);
  -webkit-border-radius: 50px;
  -moz-border-radius: 50px;
  box-shadow: 0 0 10px 3px rgba(68, 80, 85, 0.15);
}
.reports__download-btn:hover, .reports__download-btn:active, .reports__download-btn:focus {
  background-color: rgb(255, 180, 102);
  color: rgb(255, 255, 255);
}
.reports-template-default .single-post__content h1, .reports-template-default .single-post__content h2, .reports-template-default .single-post__content h3, .reports-template-default .single-post__content h4 {
  display: inline-block;
  width: 100%;
  float: left;
  margin: 0 0 15px 0;
}
.reports-template-default .single-post__content blockquote {
  padding: 20px;
  margin: 10px 0 20px 0;
}
.reports-template-default .single-post__content blockquote p {
  font-size: 24px;
  font-weight: bold;
  font-family: "PT Sans", sans-serif;
}
@media (max-width: 30em) {
  .reports__content {
    width: 100%;
    max-width: none;
  }
}
.reports__content .dropdown-menu {
  border: none;
  min-width: 200px;
}
.reports__content .dropdown-menu li.active a {
  background-color: rgb(255, 180, 102) !important;
  color: rgb(255, 255, 255);
}
.reports__content .dropdown-menu li a:hover, .reports__content .dropdown-menu li a:focus {
  background-color: rgb(255, 180, 102);
  color: rgb(255, 255, 255);
}
.reports__content .dropdown-menu li a:focus, .reports__content .dropdown-menu li a:active {
  background-color: rgb(255, 139, 0);
  color: rgb(255, 255, 255);
}
.reports__content.sticky {
  position: fixed;
  z-index: 999;
  top: 50px;
}
@media (max-width: 30em) {
  .reports__content.sticky {
    left: 0;
    padding: 0;
  }
  .reports__content.sticky .reports__content-btn {
    margin-top: 0;
    background-color: rgb(255, 139, 0);
    color: rgb(255, 255, 255);
    border: none;
    border-radius: 0px;
  }
}
.reports__content-btn {
  margin-top: 24px;
  border: 3px solid rgb(255, 139, 0);
  font-family: "PT Sans", sans-serif;
  font-weight: 600;
  border-radius: 30px;
  padding: 14px 24px;
  min-width: 200px;
  text-align: left;
  transition: 2s all ease-in-out;
}
@media (max-width: 30em) {
  .reports__content-btn {
    width: 100%;
    max-width: none;
  }
}
.reports__content-btn .fa {
  float: right;
  font-weight: bold;
  margin: 3px 0 0 0;
}
.reports__sidebar--new {
  margin-bottom: 15px;
}
.reports__sidebar--new .addthis_inline_share_toolbox {
  margin-top: 10px;
}

.calculator__author h3, .calculator__author h4 {
  margin-top: 0;
}
.calculator__related-tools {
  padding: 0;
  margin: 0;
}
.calculator__related-tools li {
  list-style: none;
  margin-bottom: 10px;
}
.calculator__cpm h3 {
  margin: 0;
  padding: 0 0 12px 0;
}
.calculator__cpm-form {
  border-top: 1px solid #d4d4d4;
  padding: 40px 0;
}
.calculator__cpm-form .form-control {
  padding: 12px;
  height: auto;
  font-size: 18px;
}
.calculator__cpm-form .form-control:focus {
  border-color: rgb(255, 139, 0);
  outline: 0;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(255, 139, 0, 0.6);
}
.calculator__cpm-form .control-label {
  text-align: left;
  padding-top: 0;
  padding-bottom: 0;
}
.calculator__cpm-form .control-label p {
  margin: 0 0 12px 0;
}
.calculator__cpm-row {
  margin-top: 40px;
}
.calculator__cpm-row hr {
  border-top: 1px solid #d4d4d4;
  margin: 0 12px 24px 12px;
}
.calculator__cpm-error {
  color: red;
  padding: 0 0 20px 0;
  font-weight: bold;
}
.calculator__roi-heading {
  border-bottom: 1px solid #d4d4d4;
  margin-bottom: 40px;
  padding-bottom: 40px;
}
.calculator__roi hr {
  border-color: #d4d4d4;
}
.calculator__roi-row {
  margin-bottom: 40px;
}
.calculator__roi-form .form-control {
  padding: 12px;
  height: auto;
  font-size: 18px;
}
.calculator__roi-form .form-control:focus {
  border-color: rgb(255, 139, 0);
  outline: 0;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(255, 139, 0, 0.6);
}
.calculator__roi-form .control-label {
  text-align: left;
  padding-top: 0;
}
.calculator__roi-form .control-label h4 {
  margin: 0 0 12px 0;
}
.calculator__cpa-table {
  margin: 40px auto;
  width: 100%;
}
@media (min-width: 48em) {
  .calculator__cpa-table {
    width: 70%;
  }
}
.calculator__cpa-table legend, .calculator__cpa-table td, .calculator__cpa-table th {
  padding: 8px 10px;
}
.calculator__cpa-table legend span, .calculator__cpa-table td span, .calculator__cpa-table th span {
  font-size: 16px !important;
}

.page-template-template-newsletter-landing .subscribe-bar {
  display: none;
}
@media (max-width: 58.125em) {
  .page-template-template-newsletter-landing .subscribe-bar {
    width: 100%;
    background: rgb(255, 139, 0);
    height: auto;
    line-height: 24px;
    color: rgb(255, 255, 255);
    text-align: center;
    padding: 8px 0;
  }
  .page-template-template-newsletter-landing .subscribe-bar__container {
    padding-top: 43px;
  }
  .page-template-template-newsletter-landing .subscribe-bar__container.fixed .subscribe-bar {
    display: block;
    position: fixed;
    top: 50px;
    z-index: 99;
  }
  .page-template-template-newsletter-landing .subscribe-bar .btn {
    color: rgb(255, 255, 255);
    display: inline-block;
    border-radius: 6px;
    text-decoration: none;
    padding: 2px 15px;
    background: transparent;
    border: 2px solid rgb(255, 255, 255);
  }
}
.page-template-template-newsletter-landing .post-motif {
  width: 350px;
  height: 602px;
}
@media (min-width: 58.125em) {
  .page-template-template-newsletter-landing .n-lp__form {
    padding: 0 5%;
  }
}
.page-template-template-newsletter-landing .managing-editor {
  display: flex;
  align-items: center;
  -webkit-align-items: center;
  margin-bottom: 24px;
}
.page-template-template-newsletter-landing .managing-editor__photo {
  width: 80px;
}
.page-template-template-newsletter-landing .managing-editor__photo img {
  width: 100%;
  height: auto;
  border-radius: 50%;
  box-shadow: 0 0 10px 0 rgba(255, 139, 0, 0.15);
}
.page-template-template-newsletter-landing .managing-editor__bio {
  padding-left: 14px;
}
.page-template-template-newsletter-landing .managing-editor__bio h3 {
  margin-top: 0;
}
.page-template-template-newsletter-landing .managing-editor__bio h4 {
  margin-bottom: 0;
}

#gated-modal .modal-header {
  background-color: rgb(255, 139, 0);
  padding: 25px 15px;
}
#gated-modal .modal-header h3 {
  color: rgb(255, 255, 255);
}
@media (min-width: 48em) {
  #gated-modal .modal-dialog {
    margin-top: 140px;
  }
}
#gated-modal .modal-body p {
  font-size: 18px;
}
#gated-modal .modal-body ul li {
  font-size: 18px;
}
#gated-modal .modal-body .cnt-cg-btn {
  background-color: rgb(255, 139, 0);
}
#gated-modal .modal-body .modal-btn-container {
  margin-top: 15px;
}
#gated-modal .modal-body .modal-form-container {
  padding-top: 15px;
}

.tt__row {
  margin-top: 30px;
  margin-bottom: 30px;
}
.tt__search {
  background-color: #2f2f2f;
  padding: 55px;
  margin-bottom: 30px;
}
@media (max-width: 47.9375em) {
  .tt__search {
    padding: 55px 0;
  }
}
.tt__search-header {
  color: rgb(255, 255, 255);
  margin: 0 0 15px 0;
  text-align: center;
}
.tt__company-row {
  margin-top: 30px;
  margin-bottom: 20px;
}
@media (max-width: 47.9375em) {
  .tt__company-row .company-logo {
    max-width: 300px;
  }
}
.tt__all-customers {
  margin-top: 20px;
}
.tt__customers img {
  margin: 0 auto;
}
.tt__content {
  margin-top: 30px;
  margin-bottom: 20px;
}
@media (max-width: 58.0625em) {
  .tt__content-related {
    margin-top: 30px;
  }
}
.tt__content-related-heading {
  margin-top: 0;
}
.tt__content-related__row {
  margin-top: 20px;
  margin-bottom: 20px;
  position: relative;
}
.tt__content-related__row a {
  color: #445055;
}
.tt__content-related__row a:hover {
  color: rgb(255, 139, 0) !important;
}
@media (max-width: 58.0625em) {
  .tt__content-related__row .media-heading {
    margin-top: 20px;
  }
}
.tt__content--description p {
  font-size: 20px;
}
.tt__content .btn-rmi {
  font-size: 20px;
  white-space: pre-wrap;
}
@media (max-width: 58.0625em) {
  .tt__content .btn-rmi {
    margin-top: 30px;
  }
}
.tt__speaker {
  margin-top: 30px;
}
.tt__speaker .media-object {
  border-radius: 50%;
  max-width: 100px;
}
.tt__companies {
  margin-top: 30px;
}
.tt__companies-row img {
  margin-top: 10px;
  margin-bottom: 10px;
}
.tt-archive .list-group, .tt-archive .panel {
  margin-bottom: 0;
}
.tt-archive .panel-heading {
  padding: 15.5px 15px;
  font-family: "PT Sans", sans-serif;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: rgb(255, 255, 255);
  background-color: rgb(255, 139, 0);
  border: 0;
  margin-bottom: 10px;
}
.tt-archive .panel-heading a {
  display: block;
  color: rgb(255, 255, 255);
}
.tt-archive .list-group-item {
  padding: 15.5px 15px;
  font-family: "PT Sans", sans-serif;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: rgb(255, 255, 255);
  background-color: rgb(255, 139, 0);
  border: 0;
  margin-bottom: 10px;
}
.tt-archive .list-group-item:first-child, .tt-archive .list-group-item:last-child {
  border-radius: 0;
}
.tt-archive .list-group-item:last-child {
  margin-bottom: 0;
}
.tt-archive .list-group-item:hover, .tt-archive .list-group-item:active, .tt-archive .list-group-item:focus {
  background-color: rgb(255, 180, 102);
  color: rgb(255, 255, 255);
}
.tt-archive .list-group__category .panel-body ul {
  margin: 0;
  padding: 0;
}
.tt-archive .list-group__category .panel-body ul li {
  padding: 0;
  list-style: none;
  margin: 10px 0;
  font-size: 18px;
  text-align: center;
}
.tt-archive .list-group__category .panel-body ul li:first-child {
  margin-top: 0;
  font-weight: bold;
}
.tt-archive .list-group__category .panel-body ul li:last-child {
  margin-bottom: 0;
}
.tt-block {
  margin-bottom: 24px;
}
@media (max-width: 47.9375em) {
  .tt-block .company-logo {
    margin: 20px auto;
    max-width: 300px;
  }
}
.tt-block__cat-name {
  margin-bottom: 10px;
  font-weight: bold;
  color: rgb(255, 139, 0);
}
.tt-block .embed-container {
  margin-bottom: 10px;
}
.tt-block .embed-container__play-btn {
  background-image: url("../img/youtube-play-button.png");
  background-size: cover;
  position: absolute;
  top: 0;
  margin: auto;
  width: 90px;
  height: 90px;
  right: 0;
  left: 0;
  bottom: 0;
  opacity: 0.8;
}
.tt-block__content-row {
  min-height: 140px;
}
.tt-block__content img {
  width: 150px;
}
.tt-show-more {
  font-size: 20px;
}
.tt-show-more .collapse {
  display: block;
  height: 60px !important;
  overflow: hidden;
}
.tt-show-more .collapse.in {
  height: auto !important;
}
.tt-show-more a.collapsed::after {
  content: "+ Show More";
}
.tt-show-more a:not(.collapsed)::after {
  content: "- Show Less";
}

.modal--tt .close {
  background-color: rgb(255, 139, 0);
}
.modal--tt .close:hover {
  background-color: rgb(255, 180, 102);
}
.modal--tt .close span {
  color: rgb(255, 255, 255);
}
@media (min-width: 38.75em) {
  .modal--tt .modal-dialog {
    width: 600px;
    margin: 140px auto;
  }
}

.post-type-archive-techtalks #signup-bar, .single-techtalks #signup-bar {
  display: none !important;
}

#modal-bar {
  background: rgb(255, 139, 0);
  height: auto;
  line-height: 24px;
  color: rgb(255, 255, 255);
  text-align: center;
  z-index: 999;
}
#modal-bar.fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
#modal-bar.fixed.bottom {
  bottom: 0;
  top: auto;
  z-index: 9999999;
}
#modal-bar p {
  margin: 0;
  padding: 10px 0;
}
#modal-bar a {
  color: rgb(255, 255, 255);
  text-decoration: underline;
}
#modal-bar a:hover {
  color: #ccc;
}
#modal-bar .modal-enable {
  color: rgb(255, 255, 255);
  display: inline-block;
  text-decoration: none;
  padding: 20px 15px;
  background: transparent;
  width: 100%;
  font-size: 1.5em;
}
#modal-bar .modal-enable:hover {
  background: rgb(255, 180, 102);
  color: rgb(255, 255, 255);
}
#modal-bar .modal-disable {
  color: rgb(255, 255, 255);
  display: inline-block;
  border-radius: 6px;
  text-decoration: none;
  margin-left: 20px;
  padding: 2px 15px;
  background: transparent;
  border: 2px solid rgb(255, 255, 255);
}
#modal-bar .modal-disable:hover {
  background: rgb(255, 180, 102);
  color: rgb(255, 255, 255);
}
@media (max-width: 64em) {
  #modal-bar .modal-disable {
    margin-top: 5px;
  }
}
#modal-bar .modal-policy {
  background: rgb(68, 80, 85);
}
#modal-bar .modal-policy:hover {
  background: rgb(68, 80, 85);
}

#modal-tt .modal-header {
  background-color: #ff8b00;
  padding: 25px 15px;
}
#modal-tt .modal-header h4 {
  color: rgb(255, 255, 255);
}

.vp__pinned-content-author {
  display: block;
  margin-bottom: 10px;
}
.vp__pinned-content-slide {
  height: 450px !important;
  color: rgb(255, 255, 255);
  padding: 25px;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.vp__pinned-content-slide * {
  position: relative;
  z-index: 5 !important;
}
.vp__pinned-content-slide--video {
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  width: 100%;
  height: auto;
  z-index: 2 !important;
}
.vp__pinned-content-slide.slick-active:after {
  content: "";
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 4 !important;
}
.vp__pinned-content-slide h1, .vp__pinned-content-slide h2, .vp__pinned-content-slide h3, .vp__pinned-content-slide h4, .vp__pinned-content-slide h5 {
  color: rgb(255, 255, 255);
}
.vp__pinned-content-slide__content p {
  max-width: 500px;
  font-size: 18px;
  margin-bottom: 15px;
}
.vp__pinned-content .slick-dots {
  z-index: 1;
}
.vp__pinned-content .slick-dots li {
  margin: 0;
  padding: 0;
}
.vp__pinned-content .slick-dots li button:before {
  font-size: 10px;
}
.vp__listing-slider .slick-active button {
  z-index: 1;
}
.vp__listing-slider .slick-active button:before {
  background-color: rgb(255, 139, 0) !important;
}
.vp__listing-slider .slick-disabled {
  display: none !important;
}
.vp__listing-slider .slick-next:before, .vp__listing-slider .slick-prev:before {
  opacity: 0.75;
  color: black;
}
.vp__listing-slider .slick-next:before {
  opacity: 0.75;
  color: black;
  content: "";
  background-image: url("../img/icon-right.png");
  width: 50px;
  height: 50px;
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
}
@media (max-width: 68.75em) {
  .vp__listing-slider .slick-next:before {
    background-position: center;
    margin: 0 auto;
    width: 20px;
    height: 20px;
  }
}
.vp__listing-slider .slick-next {
  right: -50px;
}
@media (max-width: 68.75em) {
  .vp__listing-slider .slick-next {
    right: -10px;
  }
}
.vp__listing-slider .slick-prev {
  left: -50px;
}
@media (max-width: 68.75em) {
  .vp__listing-slider .slick-prev {
    left: -10px;
    z-index: 9;
  }
}
.vp__listing-slider .slick-next, .vp__listing-slider .slick-prev {
  width: 50px;
  height: 50px;
}
@media (max-width: 68.75em) {
  .vp__listing-slider .slick-next, .vp__listing-slider .slick-prev {
    background-color: rgb(255, 255, 255);
    box-shadow: 0 0 10px 3px rgba(255, 0, 0, 0.1);
    border-radius: 50%;
    width: 35px;
    height: 35px;
  }
}
.vp__listing-slider .slick-prev:before {
  opacity: 0.75;
  color: black;
  content: "";
  background-image: url("../img/icon-right.png");
  width: 50px;
  height: 50px;
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  transform: scaleX(-1);
}
@media (max-width: 68.75em) {
  .vp__listing-slider .slick-prev:before {
    background-position: center;
    margin: 0 auto;
    width: 20px;
    height: 20px;
  }
}
.vp__listing-slider .slick-dots li button {
  height: 4px;
  padding: 20px;
}
.vp__listing-slider .slick-dots li button:before {
  content: "";
  background-color: rgba(0, 0, 0, 0.5);
  height: 4px;
  width: 22px;
}
.vp__hr {
  border-top: 5px solid rgb(255, 139, 0);
}
.vp__breadcrumbs__row {
  margin-top: 20px;
}
.vp__breadcrumbs__row .breadcrumbs a, .vp__breadcrumbs__row .breadcrumbs span[property=name] {
  font-size: 18px;
  font-weight: 600;
  font-family: "PT Sans", sans-serif;
  color: rgb(255, 139, 0);
}
.vp__breadcrumbs__row .breadcrumbs i {
  vertical-align: middle;
  font-size: 18px;
  display: inline-block;
  font-weight: bold;
  margin: 0 5px 3px 5px;
}
.vp__content {
  margin-top: 30px;
  margin-bottom: 20px;
}
@media (max-width: 58.0625em) {
  .vp__content-related {
    margin-top: 30px;
  }
}
.vp__content-related-heading {
  margin-top: 0;
}
.vp__content-related__row {
  margin-top: 20px;
  margin-bottom: 20px;
  position: relative;
}
.vp__content-related__row a {
  color: #445055;
}
.vp__content-related__row a:hover {
  color: rgb(255, 139, 0) !important;
}
@media (max-width: 58.0625em) {
  .vp__content-related__row .media-heading {
    margin-top: 20px;
  }
}
.vp__content--description p {
  font-size: 20px;
}
.vp__content .btn-rmi {
  font-size: 20px;
  white-space: pre-wrap;
}
@media (max-width: 58.0625em) {
  .vp__content .btn-rmi {
    margin-top: 30px;
  }
}
.vp-show-more {
  font-size: 20px;
}
.vp-show-more .collapse {
  display: block;
  height: 60px !important;
  overflow: hidden;
}
.vp-show-more .collapse.in {
  height: auto !important;
}
.vp-show-more a.collapsed::after {
  content: "+ Show More";
}
.vp-show-more a:not(.collapsed)::after {
  content: "- Show Less";
}
.vp__speaker {
  margin-top: 30px;
}
.vp__speaker .media-object {
  border-radius: 50%;
  max-width: 80px;
}

.page-template-template-roadshow,
.page-template-template-roadshowheroimageonly,
.events-template-template-roadshowheroimageonly,
.events-template-template-roadshow {
  padding-top: 0;
}
.page-template-template-roadshow #signup-bar,
.page-template-template-roadshowheroimageonly #signup-bar,
.events-template-template-roadshowheroimageonly #signup-bar,
.events-template-template-roadshow #signup-bar {
  display: none !important;
}
.page-template-template-roadshow .roadshow-header img,
.page-template-template-roadshowheroimageonly .roadshow-header img,
.events-template-template-roadshowheroimageonly .roadshow-header img,
.events-template-template-roadshow .roadshow-header img {
  display: block;
  margin: 15px auto;
  max-height: 160px;
}
@media (max-width: 48em) {
  .page-template-template-roadshow .roadshow-header img,
.page-template-template-roadshowheroimageonly .roadshow-header img,
.events-template-template-roadshowheroimageonly .roadshow-header img,
.events-template-template-roadshow .roadshow-header img {
    max-height: 100px;
  }
}
.page-template-template-roadshow .roadshow-hero,
.page-template-template-roadshowheroimageonly .roadshow-hero,
.events-template-template-roadshowheroimageonly .roadshow-hero,
.events-template-template-roadshow .roadshow-hero {
  height: 440px;
  background-size: cover;
  background-position: bottom;
  position: relative;
}
@media (max-width: 37.5em) {
  .page-template-template-roadshow .roadshow-hero,
.page-template-template-roadshowheroimageonly .roadshow-hero,
.events-template-template-roadshowheroimageonly .roadshow-hero,
.events-template-template-roadshow .roadshow-hero {
    height: 520px;
  }
}
.page-template-template-roadshow .roadshow-hero__container,
.page-template-template-roadshowheroimageonly .roadshow-hero__container,
.events-template-template-roadshowheroimageonly .roadshow-hero__container,
.events-template-template-roadshow .roadshow-hero__container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.page-template-template-roadshow .roadshow-hero__container .btn-roadshow,
.page-template-template-roadshowheroimageonly .roadshow-hero__container .btn-roadshow,
.events-template-template-roadshowheroimageonly .roadshow-hero__container .btn-roadshow,
.events-template-template-roadshow .roadshow-hero__container .btn-roadshow {
  margin: 10px;
}
.page-template-template-roadshow .roadshow-hero ul,
.page-template-template-roadshowheroimageonly .roadshow-hero ul,
.events-template-template-roadshowheroimageonly .roadshow-hero ul,
.events-template-template-roadshow .roadshow-hero ul {
  display: block;
  margin: 0 auto;
  padding: 30px 0;
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-image: linear-gradient(0deg, transparent 0%, rgba(45, 76, 111, 0.8) 95%);
}
.page-template-template-roadshow .roadshow-hero ul li,
.page-template-template-roadshowheroimageonly .roadshow-hero ul li,
.events-template-template-roadshowheroimageonly .roadshow-hero ul li,
.events-template-template-roadshow .roadshow-hero ul li {
  display: inline-block;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin: 0 20px;
}
.page-template-template-roadshow .roadshow-hero ul li a,
.page-template-template-roadshowheroimageonly .roadshow-hero ul li a,
.events-template-template-roadshowheroimageonly .roadshow-hero ul li a,
.events-template-template-roadshow .roadshow-hero ul li a {
  color: rgb(255, 255, 255);
}
.page-template-template-roadshow .roadshow-hero ul li a:hover,
.page-template-template-roadshowheroimageonly .roadshow-hero ul li a:hover,
.events-template-template-roadshowheroimageonly .roadshow-hero ul li a:hover,
.events-template-template-roadshow .roadshow-hero ul li a:hover {
  color: #ffc9c9;
}
.page-template-template-roadshow .roadshow-hero__content,
.page-template-template-roadshowheroimageonly .roadshow-hero__content,
.events-template-template-roadshowheroimageonly .roadshow-hero__content,
.events-template-template-roadshow .roadshow-hero__content {
  color: rgb(255, 255, 255);
  text-align: center;
  max-width: 600px;
}
.page-template-template-roadshow .roadshow-hero__content .content-container,
.page-template-template-roadshowheroimageonly .roadshow-hero__content .content-container,
.events-template-template-roadshowheroimageonly .roadshow-hero__content .content-container,
.events-template-template-roadshow .roadshow-hero__content .content-container {
  margin-bottom: 30px;
}
.page-template-template-roadshow .btn-roadshow,
.page-template-template-roadshowheroimageonly .btn-roadshow,
.events-template-template-roadshowheroimageonly .btn-roadshow,
.events-template-template-roadshow .btn-roadshow {
  padding: 40px;
  background-color: transparent;
  border: 2px solid;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  padding: 10px;
  display: inline-block;
  position: relative;
  text-align: center;
}
.page-template-template-roadshow .btn-roadshow.btn-block,
.page-template-template-roadshowheroimageonly .btn-roadshow.btn-block,
.events-template-template-roadshowheroimageonly .btn-roadshow.btn-block,
.events-template-template-roadshow .btn-roadshow.btn-block {
  text-align: center;
}
.page-template-template-roadshow .btn-roadshow--large,
.page-template-template-roadshowheroimageonly .btn-roadshow--large,
.events-template-template-roadshowheroimageonly .btn-roadshow--large,
.events-template-template-roadshow .btn-roadshow--large {
  font-size: 26px;
}
.page-template-template-roadshow .btn-roadshow--primary,
.page-template-template-roadshowheroimageonly .btn-roadshow--primary,
.events-template-template-roadshowheroimageonly .btn-roadshow--primary,
.events-template-template-roadshow .btn-roadshow--primary {
  color: rgb(255, 139, 0);
  border-color: rgb(255, 139, 0);
}
.page-template-template-roadshow .btn-roadshow--primary:hover,
.page-template-template-roadshowheroimageonly .btn-roadshow--primary:hover,
.events-template-template-roadshowheroimageonly .btn-roadshow--primary:hover,
.events-template-template-roadshow .btn-roadshow--primary:hover {
  color: #ffa233;
  border-color: #ffa233;
}
.page-template-template-roadshow .btn-roadshow--primary--alt,
.page-template-template-roadshowheroimageonly .btn-roadshow--primary--alt,
.events-template-template-roadshowheroimageonly .btn-roadshow--primary--alt,
.events-template-template-roadshow .btn-roadshow--primary--alt {
  color: rgb(255, 255, 255);
}
.page-template-template-roadshow .btn-roadshow--secondary,
.page-template-template-roadshowheroimageonly .btn-roadshow--secondary,
.events-template-template-roadshowheroimageonly .btn-roadshow--secondary,
.events-template-template-roadshow .btn-roadshow--secondary {
  color: rgb(255, 255, 255);
  border-color: rgb(255, 255, 255);
}
.page-template-template-roadshow .btn-roadshow--secondary:hover,
.page-template-template-roadshowheroimageonly .btn-roadshow--secondary:hover,
.events-template-template-roadshowheroimageonly .btn-roadshow--secondary:hover,
.events-template-template-roadshow .btn-roadshow--secondary:hover {
  color: rgba(255, 255, 255, 0.6) !important;
  border-color: rgba(255, 255, 255, 0.6) !important;
}
.page-template-template-roadshow .btn-roadshow--secondary--alt,
.page-template-template-roadshowheroimageonly .btn-roadshow--secondary--alt,
.events-template-template-roadshowheroimageonly .btn-roadshow--secondary--alt,
.events-template-template-roadshow .btn-roadshow--secondary--alt {
  color: rgb(255, 255, 255);
  border-color: rgb(255, 139, 0);
}
.page-template-template-roadshow .btn-roadshow--secondary--alt:disabled,
.page-template-template-roadshowheroimageonly .btn-roadshow--secondary--alt:disabled,
.events-template-template-roadshowheroimageonly .btn-roadshow--secondary--alt:disabled,
.events-template-template-roadshow .btn-roadshow--secondary--alt:disabled {
  border-color: rgba(255, 255, 255, 0.6) !important;
}
.page-template-template-roadshow .content-section,
.page-template-template-roadshowheroimageonly .content-section,
.events-template-template-roadshowheroimageonly .content-section,
.events-template-template-roadshow .content-section {
  padding: 50px 0;
}
.page-template-template-roadshow .content-section h1, .page-template-template-roadshow .content-section h2, .page-template-template-roadshow .content-section h3, .page-template-template-roadshow .content-section h4,
.page-template-template-roadshowheroimageonly .content-section h1,
.page-template-template-roadshowheroimageonly .content-section h2,
.page-template-template-roadshowheroimageonly .content-section h3,
.page-template-template-roadshowheroimageonly .content-section h4,
.events-template-template-roadshowheroimageonly .content-section h1,
.events-template-template-roadshowheroimageonly .content-section h2,
.events-template-template-roadshowheroimageonly .content-section h3,
.events-template-template-roadshowheroimageonly .content-section h4,
.events-template-template-roadshow .content-section h1,
.events-template-template-roadshow .content-section h2,
.events-template-template-roadshow .content-section h3,
.events-template-template-roadshow .content-section h4 {
  color: rgb(255, 139, 0);
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  text-align: center;
}
.page-template-template-roadshow .content-section--dark-mode,
.page-template-template-roadshowheroimageonly .content-section--dark-mode,
.events-template-template-roadshowheroimageonly .content-section--dark-mode,
.events-template-template-roadshow .content-section--dark-mode {
  background-color: #444;
  color: rgb(255, 255, 255);
}
.page-template-template-roadshow .content-section--dark-mode p,
.page-template-template-roadshowheroimageonly .content-section--dark-mode p,
.events-template-template-roadshowheroimageonly .content-section--dark-mode p,
.events-template-template-roadshow .content-section--dark-mode p {
  color: rgb(255, 255, 255);
}
.page-template-template-roadshow .content-section--dark-mode .btn-roadshow,
.page-template-template-roadshowheroimageonly .content-section--dark-mode .btn-roadshow,
.events-template-template-roadshowheroimageonly .content-section--dark-mode .btn-roadshow,
.events-template-template-roadshow .content-section--dark-mode .btn-roadshow {
  color: white;
  border-color: rgb(255, 139, 0);
}
.page-template-template-roadshow .content-section--dark-mode .btn-roadshow:hover,
.page-template-template-roadshowheroimageonly .content-section--dark-mode .btn-roadshow:hover,
.events-template-template-roadshowheroimageonly .content-section--dark-mode .btn-roadshow:hover,
.events-template-template-roadshow .content-section--dark-mode .btn-roadshow:hover {
  color: rgba(255, 255, 255, 0.6) !important;
  border-color: rgba(255, 255, 255, 0.6) !important;
}
.page-template-template-roadshow .content-section--light-mode,
.page-template-template-roadshowheroimageonly .content-section--light-mode,
.events-template-template-roadshowheroimageonly .content-section--light-mode,
.events-template-template-roadshow .content-section--light-mode {
  background-color: rgb(255, 255, 255);
  border-bottom: 1px solid #d6d6d6;
}
.page-template-template-roadshow .content-section--light-mode p,
.page-template-template-roadshowheroimageonly .content-section--light-mode p,
.events-template-template-roadshowheroimageonly .content-section--light-mode p,
.events-template-template-roadshow .content-section--light-mode p {
  color: rgb(68, 80, 85);
  margin-bottom: 25px;
  margin-top: 15px;
}
.page-template-template-roadshow .agenda,
.page-template-template-roadshowheroimageonly .agenda,
.events-template-template-roadshowheroimageonly .agenda,
.events-template-template-roadshow .agenda {
  background-color: rgb(255, 139, 0);
  color: rgb(255, 255, 255);
  padding: 20px;
}
.page-template-template-roadshow .agenda h1, .page-template-template-roadshow .agenda h2, .page-template-template-roadshow .agenda h3, .page-template-template-roadshow .agenda h4,
.page-template-template-roadshowheroimageonly .agenda h1,
.page-template-template-roadshowheroimageonly .agenda h2,
.page-template-template-roadshowheroimageonly .agenda h3,
.page-template-template-roadshowheroimageonly .agenda h4,
.events-template-template-roadshowheroimageonly .agenda h1,
.events-template-template-roadshowheroimageonly .agenda h2,
.events-template-template-roadshowheroimageonly .agenda h3,
.events-template-template-roadshowheroimageonly .agenda h4,
.events-template-template-roadshow .agenda h1,
.events-template-template-roadshow .agenda h2,
.events-template-template-roadshow .agenda h3,
.events-template-template-roadshow .agenda h4 {
  color: rgb(255, 255, 255);
}
.page-template-template-roadshow .agenda p,
.page-template-template-roadshowheroimageonly .agenda p,
.events-template-template-roadshowheroimageonly .agenda p,
.events-template-template-roadshow .agenda p {
  color: rgb(255, 255, 255);
  text-align: left;
}
.page-template-template-roadshow .speakers h3,
.page-template-template-roadshowheroimageonly .speakers h3,
.events-template-template-roadshowheroimageonly .speakers h3,
.events-template-template-roadshow .speakers h3 {
  margin-top: 0;
}
.page-template-template-roadshow .speakers h3, .page-template-template-roadshow .speakers h4,
.page-template-template-roadshowheroimageonly .speakers h3,
.page-template-template-roadshowheroimageonly .speakers h4,
.events-template-template-roadshowheroimageonly .speakers h3,
.events-template-template-roadshowheroimageonly .speakers h4,
.events-template-template-roadshow .speakers h3,
.events-template-template-roadshow .speakers h4 {
  text-align: left;
}
.page-template-template-roadshow .speakers .row,
.page-template-template-roadshowheroimageonly .speakers .row,
.events-template-template-roadshowheroimageonly .speakers .row,
.events-template-template-roadshow .speakers .row {
  margin-bottom: 30px;
}
.page-template-template-roadshow .speakers__photo,
.page-template-template-roadshowheroimageonly .speakers__photo,
.events-template-template-roadshowheroimageonly .speakers__photo,
.events-template-template-roadshow .speakers__photo {
  text-align: center;
}
.page-template-template-roadshow .speakers__photo img,
.page-template-template-roadshowheroimageonly .speakers__photo img,
.events-template-template-roadshowheroimageonly .speakers__photo img,
.events-template-template-roadshow .speakers__photo img {
  margin: 0 auto 20px auto;
}
@media (min-width: 64em) {
  .page-template-template-roadshow .venue .row,
.page-template-template-roadshowheroimageonly .venue .row,
.events-template-template-roadshowheroimageonly .venue .row,
.events-template-template-roadshow .venue .row {
    display: flex;
    align-items: center;
  }
}
.page-template-template-roadshow .venue__copy,
.page-template-template-roadshowheroimageonly .venue__copy,
.events-template-template-roadshowheroimageonly .venue__copy,
.events-template-template-roadshow .venue__copy {
  margin-top: 40px;
  margin-bottom: 40px;
}
.page-template-template-roadshow .venue__copy-container,
.page-template-template-roadshowheroimageonly .venue__copy-container,
.events-template-template-roadshowheroimageonly .venue__copy-container,
.events-template-template-roadshow .venue__copy-container {
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
}
.page-template-template-roadshow .upcoming-events__row,
.page-template-template-roadshowheroimageonly .upcoming-events__row,
.events-template-template-roadshowheroimageonly .upcoming-events__row,
.events-template-template-roadshow .upcoming-events__row {
  margin-top: 40px;
  margin-bottom: 40px;
}
.page-template-template-roadshow .upcoming-events__col,
.page-template-template-roadshowheroimageonly .upcoming-events__col,
.events-template-template-roadshowheroimageonly .upcoming-events__col,
.events-template-template-roadshow .upcoming-events__col {
  padding: 0 40px;
  cursor: pointer;
}
.page-template-template-roadshow .upcoming-events__col h2, .page-template-template-roadshow .upcoming-events__col h3, .page-template-template-roadshow .upcoming-events__col h4,
.page-template-template-roadshowheroimageonly .upcoming-events__col h2,
.page-template-template-roadshowheroimageonly .upcoming-events__col h3,
.page-template-template-roadshowheroimageonly .upcoming-events__col h4,
.events-template-template-roadshowheroimageonly .upcoming-events__col h2,
.events-template-template-roadshowheroimageonly .upcoming-events__col h3,
.events-template-template-roadshowheroimageonly .upcoming-events__col h4,
.events-template-template-roadshow .upcoming-events__col h2,
.events-template-template-roadshow .upcoming-events__col h3,
.events-template-template-roadshow .upcoming-events__col h4 {
  text-align: left;
}
.page-template-template-roadshow .upcoming-events__col p,
.page-template-template-roadshowheroimageonly .upcoming-events__col p,
.events-template-template-roadshowheroimageonly .upcoming-events__col p,
.events-template-template-roadshow .upcoming-events__col p {
  padding: 12px 0;
}
.page-template-template-roadshow .upcoming-events__col a,
.page-template-template-roadshowheroimageonly .upcoming-events__col a,
.events-template-template-roadshowheroimageonly .upcoming-events__col a,
.events-template-template-roadshow .upcoming-events__col a {
  outline: 0;
}
.page-template-template-roadshow .upcoming-events__col img,
.page-template-template-roadshowheroimageonly .upcoming-events__col img,
.events-template-template-roadshowheroimageonly .upcoming-events__col img,
.events-template-template-roadshow .upcoming-events__col img {
  border-radius: 50%;
  display: block;
  margin: 0 auto;
  max-width: 200px;
  max-height: 200px;
}
.page-template-template-roadshow .upcoming-events .slick-slide,
.page-template-template-roadshowheroimageonly .upcoming-events .slick-slide,
.events-template-template-roadshowheroimageonly .upcoming-events .slick-slide,
.events-template-template-roadshow .upcoming-events .slick-slide {
  outline: 0;
}
.page-template-template-roadshow .upcoming-events .slick-next,
.page-template-template-roadshowheroimageonly .upcoming-events .slick-next,
.events-template-template-roadshowheroimageonly .upcoming-events .slick-next,
.events-template-template-roadshow .upcoming-events .slick-next {
  right: -5px;
}
.page-template-template-roadshow .upcoming-events .slick-prev,
.page-template-template-roadshowheroimageonly .upcoming-events .slick-prev,
.events-template-template-roadshowheroimageonly .upcoming-events .slick-prev,
.events-template-template-roadshow .upcoming-events .slick-prev {
  left: -5px;
}
.page-template-template-roadshow .sponsors,
.page-template-template-roadshowheroimageonly .sponsors,
.events-template-template-roadshowheroimageonly .sponsors,
.events-template-template-roadshow .sponsors {
  text-align: center;
}
.page-template-template-roadshow .sponsors__slider,
.page-template-template-roadshowheroimageonly .sponsors__slider,
.events-template-template-roadshowheroimageonly .sponsors__slider,
.events-template-template-roadshow .sponsors__slider {
  margin: 40px 0;
  padding: 0;
}
.page-template-template-roadshow .sponsors__slider li,
.page-template-template-roadshowheroimageonly .sponsors__slider li,
.events-template-template-roadshowheroimageonly .sponsors__slider li,
.events-template-template-roadshow .sponsors__slider li {
  padding: 25px;
}
.page-template-template-roadshow .sponsors__slider li img,
.page-template-template-roadshowheroimageonly .sponsors__slider li img,
.events-template-template-roadshowheroimageonly .sponsors__slider li img,
.events-template-template-roadshow .sponsors__slider li img {
  max-width: 100%;
}
.page-template-template-roadshow .sponsors__slider .slick-slide,
.page-template-template-roadshowheroimageonly .sponsors__slider .slick-slide,
.events-template-template-roadshowheroimageonly .sponsors__slider .slick-slide,
.events-template-template-roadshow .sponsors__slider .slick-slide {
  outline: 0;
}
.page-template-template-roadshow .content-block,
.page-template-template-roadshowheroimageonly .content-block,
.events-template-template-roadshowheroimageonly .content-block,
.events-template-template-roadshow .content-block {
  text-align: center;
}
.page-template-template-roadshow .content-block p,
.page-template-template-roadshowheroimageonly .content-block p,
.events-template-template-roadshowheroimageonly .content-block p,
.events-template-template-roadshow .content-block p {
  max-width: 850px;
  margin-right: auto;
  margin-left: auto;
}
.page-template-template-roadshow footer .btn-row,
.page-template-template-roadshowheroimageonly footer .btn-row,
.events-template-template-roadshowheroimageonly footer .btn-row,
.events-template-template-roadshow footer .btn-row {
  text-align: center;
  padding: 30px 0;
}
.page-template-template-roadshow .share-icon,
.page-template-template-roadshowheroimageonly .share-icon,
.events-template-template-roadshowheroimageonly .share-icon,
.events-template-template-roadshow .share-icon {
  margin: 0;
  padding: 0;
}
.page-template-template-roadshow .share-icon li,
.page-template-template-roadshowheroimageonly .share-icon li,
.events-template-template-roadshowheroimageonly .share-icon li,
.events-template-template-roadshow .share-icon li {
  display: inline-block;
}
@media (max-width: 63.9275em) {
  .page-template-template-roadshow .share-icon li,
.page-template-template-roadshowheroimageonly .share-icon li,
.events-template-template-roadshowheroimageonly .share-icon li,
.events-template-template-roadshow .share-icon li {
    font-size: 16px;
  }
}
.page-template-template-roadshow .share-icon li a,
.page-template-template-roadshowheroimageonly .share-icon li a,
.events-template-template-roadshowheroimageonly .share-icon li a,
.events-template-template-roadshow .share-icon li a {
  position: relative;
  display: inline-block;
  text-align: center;
  width: 48px;
  height: 48px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 0 10px 0 rgba(255, 139, 0, 0.1);
  border-radius: 50%;
  margin: 0 10px 0 0;
}
.page-template-template-roadshow .share-icon li a:hover,
.page-template-template-roadshowheroimageonly .share-icon li a:hover,
.events-template-template-roadshowheroimageonly .share-icon li a:hover,
.events-template-template-roadshow .share-icon li a:hover {
  box-shadow: 0 0 10px 0 rgba(255, 139, 0, 0.2);
  text-decoration: none;
  color: rgb(255, 139, 0);
}
.page-template-template-roadshow .share-icon li a i,
.page-template-template-roadshowheroimageonly .share-icon li a i,
.events-template-template-roadshowheroimageonly .share-icon li a i,
.events-template-template-roadshow .share-icon li a i {
  font-size: 23px;
  color: rgb(255, 139, 0);
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.page-template-template-roadshow .roadshow__footer__lower,
.page-template-template-roadshowheroimageonly .roadshow__footer__lower,
.events-template-template-roadshowheroimageonly .roadshow__footer__lower,
.events-template-template-roadshow .roadshow__footer__lower {
  margin-bottom: 30px;
}
@media (min-width: 48em) {
  .page-template-template-roadshow .roadshow__footer__lower,
.page-template-template-roadshowheroimageonly .roadshow__footer__lower,
.events-template-template-roadshowheroimageonly .roadshow__footer__lower,
.events-template-template-roadshow .roadshow__footer__lower {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.page-template-template-roadshow .modal__roadshow-venue .modal-content, .page-template-template-roadshow .modal__roadshow-venue .modal-body,
.page-template-template-roadshowheroimageonly .modal__roadshow-venue .modal-content,
.page-template-template-roadshowheroimageonly .modal__roadshow-venue .modal-body,
.events-template-template-roadshowheroimageonly .modal__roadshow-venue .modal-content,
.events-template-template-roadshowheroimageonly .modal__roadshow-venue .modal-body,
.events-template-template-roadshow .modal__roadshow-venue .modal-content,
.events-template-template-roadshow .modal__roadshow-venue .modal-body {
  padding: 0;
}
.page-template-template-roadshow .modal__roadshow-venue .modal-header,
.page-template-template-roadshowheroimageonly .modal__roadshow-venue .modal-header,
.events-template-template-roadshowheroimageonly .modal__roadshow-venue .modal-header,
.events-template-template-roadshow .modal__roadshow-venue .modal-header {
  padding: 20px 36px;
}
.page-template-template-roadshow .modal__roadshow-venue .modal-header img,
.page-template-template-roadshowheroimageonly .modal__roadshow-venue .modal-header img,
.events-template-template-roadshowheroimageonly .modal__roadshow-venue .modal-header img,
.events-template-template-roadshow .modal__roadshow-venue .modal-header img {
  max-width: 300px;
}
@media (max-width: 26.875em) {
  .page-template-template-roadshow .modal__roadshow-venue .modal-header img,
.page-template-template-roadshowheroimageonly .modal__roadshow-venue .modal-header img,
.events-template-template-roadshowheroimageonly .modal__roadshow-venue .modal-header img,
.events-template-template-roadshow .modal__roadshow-venue .modal-header img {
    max-width: 85%;
  }
}
.page-template-template-roadshow .modal__roadshow-venue .modal-body h2,
.page-template-template-roadshowheroimageonly .modal__roadshow-venue .modal-body h2,
.events-template-template-roadshowheroimageonly .modal__roadshow-venue .modal-body h2,
.events-template-template-roadshow .modal__roadshow-venue .modal-body h2 {
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: rgb(255, 139, 0);
  margin-top: 0;
}
.page-template-template-roadshow .modal__roadshow-venue .modal-body h4,
.page-template-template-roadshowheroimageonly .modal__roadshow-venue .modal-body h4,
.events-template-template-roadshowheroimageonly .modal__roadshow-venue .modal-body h4,
.events-template-template-roadshow .modal__roadshow-venue .modal-body h4 {
  margin-bottom: 24px;
}
.page-template-template-roadshow .modal__roadshow-venue .modal-body .row,
.page-template-template-roadshowheroimageonly .modal__roadshow-venue .modal-body .row,
.events-template-template-roadshowheroimageonly .modal__roadshow-venue .modal-body .row,
.events-template-template-roadshow .modal__roadshow-venue .modal-body .row {
  background-color: #333;
  color: rgb(255, 255, 255);
  margin: 0;
  padding-left: 24px;
  padding-right: 24px;
}
.page-template-template-roadshow .modal__roadshow-venue .modal-body .btn-roadshow,
.page-template-template-roadshowheroimageonly .modal__roadshow-venue .modal-body .btn-roadshow,
.events-template-template-roadshowheroimageonly .modal__roadshow-venue .modal-body .btn-roadshow,
.events-template-template-roadshow .modal__roadshow-venue .modal-body .btn-roadshow {
  margin-bottom: 10px;
}
.page-template-template-roadshow .modal__roadshow-venue .modal-footer,
.page-template-template-roadshowheroimageonly .modal__roadshow-venue .modal-footer,
.events-template-template-roadshowheroimageonly .modal__roadshow-venue .modal-footer,
.events-template-template-roadshow .modal__roadshow-venue .modal-footer {
  text-align: left;
}
.page-template-template-roadshow .modal__roadshow-venue .modal-footer .share-link,
.page-template-template-roadshowheroimageonly .modal__roadshow-venue .modal-footer .share-link,
.events-template-template-roadshowheroimageonly .modal__roadshow-venue .modal-footer .share-link,
.events-template-template-roadshow .modal__roadshow-venue .modal-footer .share-link {
  font-size: 14px;
  float: left;
}
.page-template-template-roadshow .modal__roadshow-venue .modal-footer .mo__social-nav li a,
.page-template-template-roadshowheroimageonly .modal__roadshow-venue .modal-footer .mo__social-nav li a,
.events-template-template-roadshowheroimageonly .modal__roadshow-venue .modal-footer .mo__social-nav li a,
.events-template-template-roadshow .modal__roadshow-venue .modal-footer .mo__social-nav li a {
  margin-bottom: 0;
}
@media (min-width: 48em) {
  .page-template-template-roadshow .modal__roadshow-venue .modal-footer .row,
.page-template-template-roadshowheroimageonly .modal__roadshow-venue .modal-footer .row,
.events-template-template-roadshowheroimageonly .modal__roadshow-venue .modal-footer .row,
.events-template-template-roadshow .modal__roadshow-venue .modal-footer .row {
    display: flex;
    align-items: center;
  }
}
.page-template-template-roadshow .modal__roadshow-venue__row,
.page-template-template-roadshowheroimageonly .modal__roadshow-venue__row,
.events-template-template-roadshowheroimageonly .modal__roadshow-venue__row,
.events-template-template-roadshow .modal__roadshow-venue__row {
  padding-top: 30px;
  padding-bottom: 30px;
}
.page-template-template-roadshow .share-link,
.page-template-template-roadshowheroimageonly .share-link,
.events-template-template-roadshowheroimageonly .share-link,
.events-template-template-roadshow .share-link {
  width: auto !important;
  height: auto !important;
  border-radius: 0 !important;
  font-size: 14px;
  float: left;
}
.page-template-template-roadshow .logo--roadshow,
.page-template-template-roadshowheroimageonly .logo--roadshow,
.events-template-template-roadshowheroimageonly .logo--roadshow,
.events-template-template-roadshow .logo--roadshow {
  height: 28px;
  float: right;
  margin: 10px 0;
}
.page-template-template-roadshow table tr td,
.page-template-template-roadshowheroimageonly table tr td,
.events-template-template-roadshowheroimageonly table tr td,
.events-template-template-roadshow table tr td {
  border: none;
  vertical-align: middle;
}
.page-template-template-roadshow #register-modal .modal-header,
.page-template-template-roadshowheroimageonly #register-modal .modal-header,
.events-template-template-roadshowheroimageonly #register-modal .modal-header,
.events-template-template-roadshow #register-modal .modal-header {
  border-bottom: 0;
}
.page-template-template-roadshow .modal__sponsorship-modal .mktoForm input,
.page-template-template-roadshowheroimageonly .modal__sponsorship-modal .mktoForm input,
.events-template-template-roadshowheroimageonly .modal__sponsorship-modal .mktoForm input,
.events-template-template-roadshow .modal__sponsorship-modal .mktoForm input {
  border: 1px solid #ccc;
}
.page-template-template-roadshow .modal__sponsorship-modal .mktoButtonWrap.mktoSimple,
.page-template-template-roadshowheroimageonly .modal__sponsorship-modal .mktoButtonWrap.mktoSimple,
.events-template-template-roadshowheroimageonly .modal__sponsorship-modal .mktoButtonWrap.mktoSimple,
.events-template-template-roadshow .modal__sponsorship-modal .mktoButtonWrap.mktoSimple {
  margin: 0 !important;
}
.page-template-template-roadshow .slick-track,
.page-template-template-roadshowheroimageonly .slick-track,
.events-template-template-roadshowheroimageonly .slick-track,
.events-template-template-roadshow .slick-track {
  margin: auto !important;
}
.page-template-template-roadshow .slick-arrow,
.page-template-template-roadshowheroimageonly .slick-arrow,
.events-template-template-roadshowheroimageonly .slick-arrow,
.events-template-template-roadshow .slick-arrow {
  z-index: 999;
}

.modal-dialog--xs {
  max-width: 450px;
}

.engage-hub-page-template .archive-title__title {
  color: rgb(68, 80, 85);
}
.engage-hub-page-template .archive-title__title h1 {
  font-size: 30px;
  margin-bottom: 0;
}
.engage-hub-page-template .archive-content .section__heading h2 {
  margin-top: 0;
}
.engage-hub-page-template .vp {
  margin-bottom: 30px;
}
.engage-hub-page-template .section {
  margin-bottom: 50px;
}
div#disqus_thread iframe[sandbox] {
  display: none;
}
.postid-268271 .reports__cover-image:before {
  background-color: rgba(0, 0, 0, 0.1)!important;
}