/*
@Default Styles
Table of Content:
01/ predefine
02/ hero
03/ button
04/ header
05/ overview
06/ screenshot
07/ features
08/ team
09/ price
10/ blog
11/ breadcrumb
12/ partner-logo
13/ footer
 */

/*====================================================*/
/*====================================================*/
/*========== predefine ===========*/
.p0 {
    padding: 0
}

a {
    text-decoration: none
}

a:hover,
a:focus {
    text-decoration: none
}

.row.m0 {
    margin: 0
}

body,
p,
h1,
h2,
h3,
h4,
h5,
h6 {
    padding: 0
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-family: "Quicksand", sans-serif;
    color: #404040
}

body {
    font: 400 16px/28px "Quicksand", sans-serif;
    letter-spacing: 0;
    color: #747474;
    padding: 0px!important;
    overflow-x: hidden!important;
    z-index: 0
}

a,
.btn,
button {
    text-decoration: none;
    outline: none
}

a:hover,
a:focus,
.btn:hover,
.btn:focus,
button:hover,
button:focus {
    text-decoration: none;
    outline: none
}

.btn:focus,
.btn:active:focus,
.btn.active:focus,
.btn.focus,
.btn:active.focus,
.btn.active.focus {
    outline: none;
    -webkit-box-shadow: none;
    box-shadow: none
}

section.row,
header.row,
footer.row {
    margin: 0
}

.title {
    font-size: 18px;
    line-height: 30px;
    font-weight: 500
}

.sec-pad {
    padding: 120px 0
}

.section_title {
    text-align: center;
    max-width: 630px;
    margin: 0 auto 75px
}

.section_title h2 {
    font-size: 36px;
    line-height: 45px;
    font-family: "Quicksand", sans-serif;
    font-weight: 700;
    color: #404040;
    padding-bottom: 10px
}

.section_title p {
    font: 400 16px/28px "Quicksand", sans-serif;
    color: #747474
}

.sec_title_two {
    margin-bottom: 0;
    margin-top: 100px;
    text-align: left;
    padding-right: 100px
}

.title_three {
    font: 400 36px/45px "Quicksand", sans-serif;
    color: #1a264a;
    text-transform: capitalize;
    position: relative;
    padding-bottom: 30px
}

.title_three:before {
    content: "";
    width: 100px;
    height: 2px;
    bottom: 0;
    position: absolute;
    left: 0;
    background: #ef494d
}

.section_title_three {
    text-align: center;
    margin-bottom: 75px
}

.section_title_three .title_three:before {
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%)
}

.section_title_three p {
    max-width: 570px;
    margin: 45px auto 0
}

.color-b {
    color: #324865;
    font-weight: 500
}

.color-b:before {
    background: #4c83ff
}

.color_w h2,
.color_w p {
    color: #fff
}

.bg-color {
    background: #f8f8f8
}

.voilat-bg {
    background: #8675ff!important;
    z-index: 1
}

.voilat-bg-two {
    background: #4776e6;
    background-image: -moz-linear-gradient(0deg, #4776e6 0%, #8e54e9 100%)!important;
    background-image: -webkit-linear-gradient(0deg, #4776e6 0%, #8e54e9 100%)!important;
    background-image: -ms-linear-gradient(0deg, #4776e6 0%, #8e54e9 100%)!important;
    z-index: 1
}

.border {
    background: #ededed;
    margin: 120px 0 0
}

.sec_title_five {
    margin-bottom: 70px
}

.sec_title_five h2 {
    font: 400 36px/45px "Quicksand", sans-serif;
    color: #1a264a;
    padding-bottom: 15px
}

.sec_title_five .br {
    width: 103px;
    height: 2px;
    position: relative;
    margin: 0 auto
}

.sec_title_five .br:before {
    content: "";
    width: 49%;
    background-image: -moz-linear-gradient(0deg, #fdb220 0%, #fc7c22 100%);
    background-image: -webkit-linear-gradient(0deg, #fdb220 0%, #fc7c22 100%);
    background-image: -ms-linear-gradient(0deg, #fdb220 0%, #fc7c22 100%);
    position: absolute;
    bottom: 0;
    left: 0;
    height: 100%
}

.sec_title_five .br:after {
    content: "";
    width: 49%;
    background-image: -moz-linear-gradient(0deg, #fc7c22 0%, #fdb220 100%);
    background-image: -webkit-linear-gradient(0deg, #fc7c22 0%, #fdb220 100%);
    background-image: -ms-linear-gradient(0deg, #fc7c22 0%, #fdb220 100%);
    position: absolute;
    bottom: 0;
    right: 0;
    height: 100%
}

.sec_title_five p {
    padding-top: 45px
}

.header-home {
    background-image: -moz-linear-gradient(145deg, #faa61f 0%, #ed1847 100%);
    background-image: -webkit-linear-gradient(145deg, #faa61f 0%, #ed1847 100%);
    background-image: -ms-linear-gradient(145deg, #faa61f 0%, #ed1847 100%);
    position: relative;
    padding-top: 325px;
    padding-bottom: 336px;
    overflow: hidden;
    z-index: 1
}

.header-home:before {
    content: "";
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    background: url(../image/banner.png) no-repeat scroll 10%;
    height: 100%;
    z-index: -1
}

.header-home:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background: url(../image/shape.png) no-repeat scroll center bottom;
    background-size: cover;
    top: 0;
    z-index: -1
}

.col-header-text {
    color: #fff
}

.col-header-text h1 {
    font-size: 60px;
    line-height: 70px;
    letter-spacing: .05px;
    font-weight: 300;
    color: #fff
}

.col-header-text h1 span {
    font-weight: 600
}

.col-header-text p {
    font-size: 18px;
    line-height: 30px;
    margin: 25px 0 54px !important;
}

.col-header-img {
    position: relative
}

.col-header-img img {
    position: absolute
}

.col-header-img img.img-header-lg {
    right: -56px;
    top: -73px;
    z-index: 20
}

.col-header-img img.img-header-sm {
    right: 62px;
    top: 118px;
    z-index: 20
}

.header-home-two {
    background: #b166ff
}

.header-home-two:after {
    z-index: -1;
    position: absolute;
    right: 0;
    bottom: 0;
    top: auto;
    content: '';
    display: block;
    background-color: white;
    min-height: 167px;
    height: auto;
    width: 2000px;
    -webkit-transform: rotate(-4.5deg);
    -ms-transform: rotate(-4.5deg);
    transform: rotate(-4.5deg);
    -webkit-transform-origin: 100% 0 0;
    -ms-transform-origin: 100% 0 0;
    transform-origin: 100% 0 0
}

.home-three {
    background: #8675ff
}

.home-three:before {
    display: none
}

.home-three:after {
    background: url(../image/home-3/shap.png) no-repeat scroll center bottom;
    background-size: contain
}

.home-four {
    position: relative;
    background-image: -moz-linear-gradient(0deg, #4776e6 0%, #8e54e9 100%);
    background-image: -webkit-linear-gradient(0deg, #4776e6 0%, #8e54e9 100%);
    background-image: -ms-linear-gradient(0deg, #4776e6 0%, #8e54e9 100%);
    z-index: 0
}

.home-four:before {
    display: none
}

.home-four:after {
    background: url(../image/home-4-shape.png) no-repeat scroll center bottom;
    background-size: contain
}

.home-four .col-header-img img.img-header-lg {
    top: -140px
}

.wave {
    position: absolute;
    left: 0;
    right: 0;
    top: 600px;
    bottom: 0;
    z-index: 0;
    height: 400px
}

.wave + .wave {
    z-index: -1
}

.hero-banner-area {
    height: 1000px!important;
    position: relative;
    overflow: hidden
}

.hero-banner-area:after {
    content: '';
    display: block;
    position: absolute;
    z-index: -2;
    top: calc(100%);
    background-color: white;
    min-height: 455px;
    width: 4000px;
    -webkit-transform: rotate(-6.7deg);
    -ms-transform: rotate(-6.7deg);
    transform: rotate(-6.7deg);
    -webkit-transform-origin: 0 0 0;
    -ms-transform-origin: 0 0 0;
    transform-origin: 0 0 0
}

.hero-banner-area .col-header-img img {
    top: auto;
    right: auto
}

.hero-banner-area .col-header-img .img-header-lg {
    bottom: 190px;
    left: 0
}

.hero-banner-area .col-header-img .img-header-sm {
    bottom: 70px;
    z-index: 20;
    left: -15px
}

.hero-banner-area .shape {
    width: 100%;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1
}

.hero-banner-area .shape:before {
    content: "";
    width: 150%;
    height: 116px;
    background: #616dfe;
    position: absolute;
    z-index: -5;
    opacity: .23;
    -webkit-transform: rotate(-3.9deg);
    -ms-transform: rotate(-3.9deg);
    transform: rotate(-3.9deg);
    bottom: 44px;
    right: -171px
}

.hero-banner-area .shape:after {
    content: "";
    width: 80%;
    height: 95%;
    background-image: -moz-linear-gradient(0deg, rgba(76, 132, 255, .1) 0%, rgba(120, 61, 255, .1) 100%);
    background-image: -webkit-linear-gradient(0deg, rgba(76, 132, 255, .1) 0%, rgba(120, 61, 255, .1) 100%);
    background-image: -ms-linear-gradient(0deg, rgba(76, 132, 255, .1) 0%, rgba(120, 61, 255, .1) 100%);
    top: 0;
    right: -171px;
    z-index: -1;
    position: absolute;
    -webkit-transform: rotate(4deg);
    -ms-transform: rotate(4deg);
    transform: rotate(4deg)
}

.display-flex {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 100%
}

.display-flex .flex {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    -ms-flex-item-align: center;
    align-self: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
}

.hero-two {
    background-image: -moz-linear-gradient(0deg, #4c84ff 0%, #783dff 100%);
    background-image: -webkit-linear-gradient(0deg, #4c84ff 0%, #783dff 100%);
    background-image: -ms-linear-gradient(0deg, #4c84ff 0%, #783dff 100%);
    height: 100vh;
    position: relative;
    z-index: 1;
    padding-top: 260px
}

.hero-two:after {
    content: "";
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    position: absolute;
    background: no-repeat scroll center 100%;
    background-size: cover;
    z-index: -1
}

.hero-content {
    max-width: 850px;
    margin: 0 auto;
    text-align: center
}

.hero-content h1 {
    font-size: 60px;
    line-height: 75px
}

.hero-content p {
    font-size: 22px;
    line-height: 40px;
    font-family: "Quicksand", sans-serif;
    font-weight: 400;
    margin: 15px 0 60px
}

.hero-content .banner_btn {
    font-weight: 500;
    font-size: 15px
}

.hero-content .banner_btn.btn-white {
    color: #4c83ff
}

.hero-content .banner_btn.btn-white:hover {
    color: #fff
}

.hero-content .banner_btn.btn-transparent:hover {
    color: #4c83ff
}

.mockup-flow {
    position: absolute;
    left: 50%;
    width: 100%;
    text-align: center
}

.mockup-flow img {
    max-width: 100%
}

.header-overlay {
    background: url(../image/home-5/home-bg.jpg) no-repeat scroll center 0/cover!important;
    position: relative;
    z-index: 1
}

.header-overlay:before {
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: .75;
    z-index: -1;
    position: absolute
}

.header-home-five {
    padding: 320px 0 325px
}

.header-home-five .col-header-text h1 {
    font-size: 45px;
    line-height: 55px;
    font-weight: 500
}

.header-home-five .col-header-text p {
    font-size: 24px;
    font-family: "Quicksand", sans-serif;
    line-height: 40px;
    margin-bottom: 35px
}

.header-home-five .col-header-text .banner_btn.btn-white {
    color: #ef494d
}

.header-home-five .col-header-text .banner_btn.btn-white:hover {
    color: #fff
}

.header-home-five .col-header-text .banner_btn:hover {
    color: #ef494d
}

.header-home-five .col-header-img img.img-header-lg {
    top: -135px
}

.header-home-five .col-header-img img.img-header-lg.white-img {
    top: -160px
}

.app-icon {
    font-size: 30px;
    line-height: 60px;
    color: #fff;
    padding-left: 25px
}

.app-icon:hover {
    color: #fff
}

.header-home-seven {
    position: relative;
    padding: 280px 0 195px;
    color: #fff
}

.header-home-seven.header-overlay:before {
    opacity: .85
}

.video-background {
    position: absolute;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    top: 0;
    left: 0;
    z-index: -99;
    overflow: hidden
}

.video-background video {
    position: absolute;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: -5
}

.hero-contents {
    padding: 0 70px
}

.hero-contents h4 {
    font: 400 24px/28px "Quicksand", sans-serif;
    padding-bottom: 5px;
    color: #fff
}

.hero-contents h2 {
    font: 500 45px/55px "Quicksand", sans-serif;
    letter-spacing: 2.25px;
    color: #fff;
    padding: 35px 0 50px
}

.hero-contents .hero-app-icon {
    margin-top: 70px
}

.hero-contents .media .media-left {
    padding-right: 30px
}

.hero-contents .media .media-left i {
    font-size: 48px
}

.hero-contents .media .media-body h3 {
    font: 400 18px/28px "Quicksand", sans-serif;
    padding-bottom: 15px;
    color: #fff
}

.hero-contents .media .media-body p {
    font: 400 15px/28px "Quicksand", sans-serif
}

.hero-contents .media + .media {
    margin-top: 55px
}

.hero-right {
    padding: 0 70px
}

.home-six {
    padding: 0px!important
}

.slider_content {
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 100%;
    left: 0
}

.bs-slider {
    overflow: hidden;
    position: relative;
    background: #000
}

.bs-slider:hover {
    cursor: -moz-grab;
    cursor: -webkit-grab
}

.bs-slider:active {
    cursor: -moz-grabbing;
    cursor: -webkit-grabbing
}

.bs-slider .bs-slider-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #ef494d;
    opacity: .8
}

.bs-slider>.carousel-inner>.item {
    height: 100vh
}

.bs-slider>.carousel-inner>.item>img,
.bs-slider>.carousel-inner>.item>a>img {
    margin: auto;
    width: 100%!important;
    height: 100%
}

.fade {
    opacity: 1
}

.fade .item {
    top: 0;
    z-index: 0;
    opacity: 0;
    width: 100%;
    position: absolute;
    left: 0!important;
    display: block!important;
    -webkit-transition: opacity ease-in-out 1s;
    -moz-transition: opacity ease-in-out 1s;
    -ms-transition: opacity ease-in-out 1s;
    -o-transition: opacity ease-in-out 1s;
    transition: opacity ease-in-out 1s
}

.fade .item:first-child {
    top: auto;
    position: relative
}

.fade .item.active {
    opacity: 1;
    z-index: 0;
    -webkit-transition: opacity ease-in-out 1s;
    -moz-transition: opacity ease-in-out 1s;
    -ms-transition: opacity ease-in-out 1s;
    -o-transition: opacity ease-in-out 1s;
    transition: opacity ease-in-out 1s
}

.banner_btn {
    font-size: 14px;
    line-height: 58px;
    text-align: center!important;
    letter-spacing: 1.4px;
    font-family: "Quicksand", sans-serif;
    font-weight: 700;
    width: 220px;
    height: 60px;
    display: inline-block;
    text-transform: capitalize;
    border-radius: 50px;
    border: 2px solid transparent;
    -webkit-transition: all 0.5s linear;
    -o-transition: all 0.5s linear;
    transition: all 0.5s linear;
    color: #fff
}

.banner_btn + .banner_btn {
    margin-left: 30px
}

.btn-white {
    background: #fff;
    color: #414141
}

.btn-white:hover {
    background: transparent;
    color: #fff;
    border-color: #fff
}

.btn-transparent {
    border-color: #fff;
    color: #fff
}

.btn-transparent:hover {
    background: #fff;
    color: #414141
}

.learn_btn {
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 1.4px;
    font-family: "Quicksand", sans-serif;
    font-weight: 700;
    background-image: -moz-linear-gradient(145deg, #faa61f 0%, #ed1847 100%);
    background-image: -webkit-linear-gradient(145deg, #faa61f 0%, #ed1847 100%);
    background-image: -ms-linear-gradient(145deg, #faa61f 0%, #ed1847 100%);
    position: relative;
    color: #ec6d47;
    z-index: 0;
    border-radius: 50px;
    text-transform: capitalize;
    border: 0;
    padding: 15px 40px 13px;
    -webkit-transition: all 0.5s linear;
    -o-transition: all 0.5s linear;
    transition: all 0.5s linear
}

.learn_btn:before {
    content: "";
    position: absolute;
    top: 1px;
    left: 1px;
    height: calc(100% - 2px);
    width: calc(100% - 2px);
    background: #fff;
    border-radius: 50px;
    z-index: -1;
    -webkit-transition: all 0.25s ease;
    -o-transition: all 0.25s ease;
    transition: all 0.25s ease
}

.learn_btn:hover {
    color: #fff;
    background-image: -moz-linear-gradient(145deg, #faa61f 0%, #ed1847 100%);
    background-image: -webkit-linear-gradient(145deg, #faa61f 0%, #ed1847 100%);
    background-image: -ms-linear-gradient(145deg, #faa61f 0%, #ed1847 100%)
}

.learn_btn:hover:before {
    background: transparent
}

.app-btn {
    display: inline-block;
    width: 200px;
    height: 60px;
    border: 1px solid #fff;
    border-radius: 5px;
    text-align: center;
    line-height: 57px;
    -webkit-transition: all 0.3s linear;
    -o-transition: all 0.3s linear;
    transition: all 0.3s linear;
    background: #fff
}

.app-btn img + img {
    display: none;
    text-align: center
}

.app-btn + .app-btn {
    margin-left: 8px
}

.app-btn:hover {
    background: transparent
}

.app-btn:hover img {
    display: none
}

.app-btn:hover img + img {
    display: inline-block
}

.c_p {
    background: #b166ff;
    color: #b166ff
}

.c_p:hover {
    background: #b166ff
}

.color_v {
    color: #8675ff;
    background: #8675ff
}

.color_v:hover {
    background: #8675ff
}

.color_v_two {
    background-image: -moz-linear-gradient(0deg, #4776e6 0%, #8e54e9 100%);
    background-image: -webkit-linear-gradient(0deg, #4776e6 0%, #8e54e9 100%);
    background-image: -ms-linear-gradient(0deg, #4776e6 0%, #8e54e9 100%);
    position: relative;
    z-index: 0;
    color: #8675ff;
    -webkit-transition: all 0.25s ease;
    -o-transition: all 0.25s ease;
    transition: all 0.25s ease
}

.color_v_two:hover {
    color: #fff;
    background-image: -moz-linear-gradient(0deg, #4776e6 0%, #8e54e9 100%);
    background-image: -webkit-linear-gradient(0deg, #4776e6 0%, #8e54e9 100%);
    background-image: -ms-linear-gradient(0deg, #4776e6 0%, #8e54e9 100%)
}

.color_v_two:hover:before {
    background: transparent
}

.learn-btn-two {
    font-size: 14px;
    line-height: 50px;
    padding: 0 52px;
    font-family: "Quicksand", sans-serif;
    color: #fff;
    background: #4c83ff;
    text-transform: capitalize;
    display: inline-block;
    border: 0;
    border-radius: 40px
}

.navbar {
    margin-bottom: 0;
    padding: 0;
    -webkit-transition: all 0.4s linear;
    -o-transition: all 0.4s linear;
    transition: all 0.4s linear;
    border: 0
}

.navbar .navbar-brand img + img {
    display: none
}

.navbar-header .navbar-brand {
    display: inline-block;
    height: auto;
    padding: 24px 15px
}

.btn-getnow {
    float: right;
    border: 2px solid white;
    margin-top: 15px;
    padding: 9px 37px;
    width: auto;
    height: auto;
    line-height: 21px
}

.btn-getnow:hover {
    background: #fff;
    color: #414141
}

.menu {
    padding-top: 20px
}

.menu li {
    margin-right: 48px
}

.menu li a {
    font-size: 14px;
    line-height: 30px;
    color: #fff;
    font-family: "Quicksand", sans-serif;
    border-bottom: 2px solid transparent;
    padding: 0;
    -webkit-transition: all 0.4s linear;
    -o-transition: all 0.4s linear;
    transition: all 0.4s linear;
    display: inline-block
}

.navbar .menu li a:hover {
    background: transparent;
    border-color: #fff
    /*line-height: 30px;*/
}

.menu li a:focus {
    background: transparent;
    border-color: transparent
}

.menu li.active a {
    border-color: #fff
}

.affix {
    background: #fff;
    -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2);
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2)
}

.affix .btn-getnow {
    border-color: #8675ff;
    color: #8675ff
}

.affix .btn-getnow:hover {
    background: #8675ff;
    color: #fff
}

.affix .menu {
    padding-top: 20px
}

.affix .menu > li > a {
    font-size: 14px;
    line-height: 30px;
    color: #404040;
    font-family: "Quicksand", sans-serif;
    border-bottom: 2px solid transparent;
    padding: 0;
    -webkit-transition: all 0.4s linear;
    -o-transition: all 0.4s linear;
    transition: all 0.4s linear
}

.affix .menu li a:hover {
    background: transparent;
    color: #8675ff;
    border-color: #8675ff
}

.affix .menu > li.active > a {
    color: #8675ff;
    border-color: #8675ff
}

.affix .navbar-brand img {
    display: none
}

.affix .navbar-brand img + img {
    display: inline-block
}

.affix .navbar-toggle {
    border-color: #404040
}

.affix .navbar-toggle i {
    color: #404040
}

.header_two.affix .btn-getnow {
    border-color: #b166ff;
    color: #b166ff
}

.header_two.affix .btn-getnow:hover {
    background: #b166ff;
    color: #fff
}

.header_two.affix .menu li a:hover {
    background: transparent;
    color: #b166ff;
    border-color: #b166ff
}

.header_two.affix .menu li.active a {
    color: #b166ff;
    border-color: #b166ff
}

.header_four.affix .btn-getnow {
    border-color: #f66332;
    color: #f66332
}

.header_four.affix .btn-getnow:hover {
    background: #f66332;
    color: #fff
}

.header_four.affix .menu li a:hover {
    background: transparent;
    color: #f66332;
    border-color: #f66332
}

.header_four.affix .menu li.active a {
    color: #f66332;
    border-color: #f66332
}

.header_five.affix .btn-getnow {
    border-color: #ef494d;
    color: #ef494d
}

.header_five.affix .btn-getnow:hover {
    background: #ef494d;
    color: #fff
}

.header_five.affix .menu li a:hover {
    background: transparent;
    color: #ef494d;
    border-color: #ef494d
}

.header_five.affix .menu li.active a {
    color: #ef494d;
    border-color: #ef494d
}

.navbar-toggle {
    border: 0;
    margin-top: 15px;
    margin-left: 15px;
    border-radius: 50%;
    padding: 0;
    color: #fff;
    text-align: center;
    -webkit-transition: all 0.3s linear;
    -o-transition: all 0.3s linear;
    transition: all 0.3s linear
}

.navbar-toggle i {
    font-size: 34px;
    line-height: 43px;
    display: none
}

.navbar-toggle i + i {
    display: block
}

.navbar-toggle.collapsed i {
    display: block
}

.navbar-toggle.collapsed i + i {
    display: none
}

.header_error .menu li a {
    color: #333
}

.header_error .menu li a:hover {
    border-color: #333
}

.header_error .btn-getnow {
    border-color: #e46a6f;
    color: #e46a6f
}

.header_error .btn-getnow:hover {
    background: #e46a6f;
    color: #fff
}

.header_error.affix .navbar-brand img {
    display: block
}

.header_error.affix .menu li a:hover {
    color: #e46a6f;
    border-color: #e46a6f
}

.header_error.affix .btn-getnow {
    background-color: #e46a6f;
    color: #fff
}

.header_error.affix .btn-getnow:hover {
    background: transparent;
    color: #e46a6f
}

.overview_area {
    padding: 164px 0 0
}

.overview_item {
    text-align: center;
    padding: 43px 15px 35px;
    -webkit-transition: all 0.4s linear;
    -o-transition: all 0.4s linear;
    transition: all 0.4s linear;
    cursor: pointer
}

.overview_item i {
    font-size: 60px;
    margin-bottom: 38px;
    display: inline-block
}

.overview_item p {
    padding-top: 15px
}

.overview_item:hover {
    -webkit-box-shadow: 0 5px 25px 0 rgba(5, 5, 5, .2);
    box-shadow: 0 5px 25px 0 rgba(5, 5, 5, .2)
}

.overview_area_two {
    padding: 120px 0 0
}

.overview_area_two .overview_item i {
    -webkit-background-clip: text;
    -webkit-text-fill-color: initial;
    color: #ef494d
}

.overview_area_two .overview_item .title {
    font-weight: 400;
    text-transform: capitalize
}

.overview-area-three {
    overflow: hidden;
    padding: 150px 0 120px
}

.whychoose-img {
    height: 610px
}

.whychoose-img .single-img {
    position: absolute;
    top: 0;
    right: 0
}

.whychoose-img .single-img img {
    border-radius: 5px;
    -webkit-box-shadow: 5px 11px 19px 0 rgba(71, 63, 123, .2);
    box-shadow: 5px 11px 19px 0 rgba(71, 63, 123, .2)
}

.whychoose-img .single-img.whychoose-img-mediem {
    margin-right: 247px;
    top: -36px
}

.whychoose-img .single-img.whychoose-img-small {
    margin-right: 520px;
    z-index: -1;
    top: 85px
}

.overview-details {
    max-width: 570px;
    margin-right: auto;
    margin-left: 0;
    padding-left: 70px;
    padding-top: 60px
}

.overview-details .title-three {
    margin-bottom: 35px
}

.overview-details p {
    font-family: "Quicksand", sans-serif;
    color: #585e68;
    font-size: 18px;
    line-height: 32px;
    padding-bottom: 42px
}

.video_area {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.video-left {
    width: calc(50% - 225px);
    float: left;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    vertical-align: middle;
    -ms-flex-item-align: center;
    align-self: center
}

.video-inner {
    max-width: 560px;
    margin: 0 -200px 0 auto;
    z-index: 2;
    position: relative;
    background: #fff;
    padding: 95px 50px 120px 0
}

.video-inner .section_title {
    text-align: left;
    margin-bottom: 0
}

.video-inner .section_title p {
    font-size: 16px
}

.video-inner p {
    font: 400 18px/32px "Quicksand", sans-serif;
    color: #585e68
}

.video-inner .play-btn {
    font: 500 14px/14px "Quicksand", sans-serif;
    color: #4c83ff;
    letter-spacing: 0;
    background: none;
    border: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    text-shadow: none;
    text-transform: capitalize;
    border-bottom: 1px solid #4c83ff;
    padding: 40px 0 0
}

.video-right {
    width: calc(50% + 225px)
}

.videoWrapper {
    position: relative;
    width: 100%;
    height: 700px;
    background-color: #000
}

.videoWrapper .videoIframe {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: 0
}

.videoWrapper .videoPoster {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    cursor: pointer;
    border: 0;
    outline: none;
    background-position: 0 50%;
    background-size: cover;
    overflow: hidden;
    opacity: 1;
    -webkit-transition: opacity 800ms, height 0s;
    -moz-transition: opacity 800ms, height 0s;
    -o-transition: opacity 800ms, height 0s;
    transition: opacity 800ms, height 0s;
    -webkit-transition-delay: 0s, 0s;
    -moz-transition-delay: 0s, 0s;
    -o-transition-delay: 0s, 0s;
    transition-delay: 0s, 0s;
    z-index: 1
}

.videoWrapper .videoPoster:before {
    content: "\e6ad";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 120px;
    height: 120px;
    margin: -60px 0 0 -60px;
    border: 5px solid #fff;
    border-radius: 50%;
    font-size: 50px;
    font-family: 'themify';
    speak: none;
    line-height: 110px;
    color: #fff;
    -webkit-font-smoothing: antialiased;
    z-index: 0
}

.videoWrapper .videoPoster:after {
    position: absolute;
    top: 0;
    content: '';
    width: 100%;
    height: 100%;
    left: 0;
    background-image: -moz-linear-gradient(0deg, #4c84ff 0%, #783dff 100%);
    background-image: -webkit-linear-gradient(0deg, #4c84ff 0%, #783dff 100%);
    background-image: -ms-linear-gradient(0deg, #4c84ff 0%, #783dff 100%);
    opacity: .8;
    z-index: -1
}

.videoWrapper.videoWrapperActive .videoPoster {
    opacity: 0;
    -webkit-transition-delay: 0s, 800ms;
    -o-transition-delay: 0s, 800ms;
    transition-delay: 0s, 800ms;
    height: 0
}

.video_area_three {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.video_area_three .video-left {
    width: calc(50% + 225px);
    -webkit-box-flex: initial;
    -ms-flex: initial;
    flex: initial
}

.video_area_three .video-right {
    width: calc(50% - 225px);
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    vertical-align: middle;
    -ms-flex-item-align: center;
    align-self: center
}

.video_area_three .video-right .video-inner {
    margin-right: auto;
    margin-left: -200px;
    padding: 95px 0 120px 80px
}

.video_area_three .video-right .video-inner .play-btn {
    color: #1a264a;
    border-color: #1a264a;
    font-weight: 700
}

.video_area_three .videoWrapper .videoPoster:after {
    background: #ef494d;
    opacity: .9
}

.video_area_two .video-left .video-inner .play-btn {
    color: #f35e3f;
    border-color: #f35e3f
}

.video_area_two .videoWrapper .videoPoster {
    background: url(../image/poster-bg.png) no-repeat scroll center 0/cover
}

.video_area_two .videoWrapper .videoPoster:after {
    background-image: -moz-linear-gradient(145deg, #faa61f 0%, #ed1847 100%);
    background-image: -webkit-linear-gradient(145deg, #faa61f 0%, #ed1847 100%);
    background-image: -ms-linear-gradient(145deg, #faa61f 0%, #ed1847 100%);
    opacity: .9
}

.screenshot_area {
    position: relative;
    padding: 100px 0 170px
}

.screenshot {
    position: relative
}

.carousel-decoration {
    position: absolute;
    top: 0;
    left: 50%;
    width: 335px;
    height: 678px;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    z-index: 2
}

.carousel-decoration-two {
    top: 14px;
    left: 50%;
    width: 335px;
    height: 652px
}

.screenshot_carousel {
    padding: 25px 70px;
    position: relative
}

.screenshot_carousel .item img {
    -webkit-transform: scale(.8);
    -ms-transform: scale(.8);
    transform: scale(.8);
    -webkit-box-shadow: 0 5px 25px 0 rgba(5, 5, 5, .2);
    box-shadow: 0 5px 25px 0 rgba(5, 5, 5, .2)
}

.owl-prev,
.owl-next {
    border: 0;
    text-align: center;
    font-size: 36px;
    color: #999;
    line-height: 78px;
    position: absolute;
    top: 58%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    cursor: pointer;
    -webkit-transition: all 0.5s linear;
    -o-transition: all 0.5s linear;
    transition: all 0.5s linear;
    z-index: 2
}

.owl-prev:hover,
.owl-next:hover {
    color: #f25b44;
    background: transparent!important
}

.owl-prev {
    left: 190px
}

.owl-next {
    right: 190px
}

.screenshot-area-two {
    padding: 150px 0 130px
}

.s-carousel-two {
    padding-top: 0;
    padding-bottom: 0
}

.s-carousel-two:before {
    display: none
}

.s-carousel-two .item {
    padding: 5px 15px 20px;
    text-align: center
}

.s-carousel-two .item img {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
    width: auto;
    display: inline-block
}

.s-carousel-two .owl-prev:hover,
.s-carousel-two .owl-next:hover {
    background: #8675ff;
    border-color: #8675ff;
    -webkit-border-image: none;
    -o-border-image: none;
    border-image: none
}

.screenshots-area-three {
    padding: 115px 0 120px;
    background: #f8fafc
}

.screenshots-slider .screenshot {
    display: block;
    position: relative;
    -webkit-box-shadow: 0 7px 17px 0 rgba(0, 0, 0, .25);
    box-shadow: 0 7px 17px 0 rgba(0, 0, 0, .25);
    margin-bottom: 75px
}

.screenshots-slider .screenshot:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: #ef494d;
    opacity: 0;
    z-index: 1;
    -webkit-transition: all 0.5s linear;
    -o-transition: all 0.5s linear;
    transition: all 0.5s linear;
    text-align: center
}

.screenshots-slider .screenshot:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    background: url(../image/home-5/icon-p.png) no-repeat scroll center 0;
    opacity: 0;
    z-index: 1;
    width: 100%;
    height: 30px
}

.screenshots-slider .screenshot:hover:before {
    opacity: .949
}

.screenshots-slider .screenshot:hover:after {
    opacity: 1
}

.screenshots-slider .owl-dots {
    margin-top: 0
}

.screenshots-slider .owl-dots .owl-dot {
    border: 1px solid #ef494d;
    background: transparent;
    margin: 0 4px
}

.screenshots-slider .owl-dots .owl-dot.active,
.screenshots-slider .owl-dots .owl-dot:hover {
    background: #ef494d
}

.mfp-title {
    display: none
}

.fun_fact_area {
    padding: 312px 0 300px;
    position: relative;
    z-index: 0
}

.fun_fact_area .video-bg {
    background-size: cover
}

.angle-bg {
    position: relative;
    background-image: -moz-linear-gradient(145deg, #faa61f 0%, #ed1847 100%);
    background-image: -webkit-linear-gradient(145deg, #faa61f 0%, #ed1847 100%);
    background-image: -ms-linear-gradient(145deg, #faa61f 0%, #ed1847 100%);
    z-index: 0;
    overflow: hidden
}

.angle-bg:before {
    z-index: -1;
    position: absolute;
    right: 0;
    bottom: 100%;
    content: '';
    display: block;
    background-color: white;
    min-height: 167px;
    width: 2000px;
    -webkit-transform: rotate(-4.5deg);
    -ms-transform: rotate(-4.5deg);
    transform: rotate(-4.5deg);
    -webkit-transform-origin: 100% 0 0;
    -ms-transform-origin: 100% 0 0;
    transform-origin: 100% 0 0
}

@media (min-width:1921px) {
    .angle-bg:before {
        min-height: 320px;
        width: 4100px
    }
}

.angle-bg:after {
    z-index: -1;
    position: absolute;
    right: 0;
    bottom: 0;
    content: '';
    display: block;
    background-color: white;
    min-height: 167px;
    width: 2000px;
    -webkit-transform: rotate(-4.5deg);
    -ms-transform: rotate(-4.5deg);
    transform: rotate(-4.5deg);
    -webkit-transform-origin: 100% 0 0;
    -ms-transform-origin: 100% 0 0;
    transform-origin: 100% 0 0
}

@media (min-width:1921px) {
    .angle-bg:after {
        min-height: 320px;
        width: 4100px
    }
}

.angle-bg.angle_color:before {
    background: #f8f8f8
}

.angle-bg-two {
    background: #b166ff
}

.angel_not:before,
.angel_not:after {
    display: none
}

.fact_item {
    text-align: center;
    color: #fff
}

.fact_item i {
    font-size: 60px;
    border-radius: 50%;
    display: inline-block;
    line-height: 60px
}

.fact_item h2 {
    font: 700 55px/70px "Quicksand", sans-serif;
    color: #fff;
    padding: 30px 0 8px
}

.fact_item p {
    font-size: 24px;
    line-height: 35px;
    font-family: "Quicksand", sans-serif;
    font-weight: 400
}

.fun_fact_two {
    padding: 320px 0;
    position: relative
}

.fun_fact_two .video-bg {
    background-size: cover
}

.fun_fact_two .fact_item i {
    width: auto;
    height: auto;
    border: 0;
    font-size: 40px;
    line-height: 60px
}

.fun_fact_four {
    padding: 200px 0 190px
}

.fun_fact_five {
    position: relative;
    background-color: #ef494d;
    padding: 180px 0;
    z-index: 1
}

.fun_fact_five .video-bg {
    background-size: cover
}

.fun_fact_five .fact_item i {
    font-size: 80px;
    line-height: 80px
}

.fun_fact_five .fact_item h2 {
    font-size: 50px;
    line-height: 60px;
    font-weight: 400;
    position: relative;
    padding-bottom: 20px;
    margin-bottom: 25px
}

.fun_fact_five .fact_item h2:before {
    content: "";
    width: 50px;
    height: 2px;
    background: #fff;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    bottom: 0;
    position: absolute
}

.fun_fact_five .fact_item p {
    text-transform: capitalize
}

.screenshot_area_two {
    padding: 150px 0 135px
}

.screenshot_area_four {
    padding: 150px 0 135px
}

.screenshot-btn {
    font: 700 14px/21px "Quicksand", sans-serif;
    letter-spacing: .42px;
    color: #fff;
    background: #a661ef;
    padding: 15px 55px;
    border-radius: 3px;
    display: inline-block;
    text-transform: capitalize;
    margin-top: 10px;
    -webkit-transition: all 0.3s linear;
    -o-transition: all 0.3s linear;
    transition: all 0.3s linear
}

.screenshot-btn:hover {
    background: #9f50f3;
    color: #fff
}

.swiper-container {
    width: 100%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    padding: 7px 100px 100px
}

.swiper-container .swiper-wrapper .swiper-slide img {
    -webkit-box-shadow: 0 5px 25px 0 rgba(0, 0, 0, .2);
    box-shadow: 0 5px 25px 0 rgba(0, 0, 0, .2);
    border-radius: 10px;
    width: 100%
}

.swiper-container .swiper-pagination-bullets .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    border: 1px solid #a661ef;
    background: transparent
}

.swiper-container .swiper-pagination-bullets .swiper-pagination-bullet.swiper-pagination-bullet-active {
    background: #a661ef
}

.swiper-container .color-p .swiper-pagination-bullet {
    background: #adadad;
    border: 0;
    opacity: 1
}

.swiper-container .color-p .swiper-pagination-bullet.swiper-pagination-bullet-active {
    background: #8766e5
}

.swiper-button-prev,
.swiper-button-next {
    height: 20px;
    color: #999;
    background: none;
    font-size: 36px;
    text-align: center
}

.swiper-button-prev {
    left: -150px
}

.swiper-button-next {
    right: -150px
}

.screenshot_area_three {
    padding: 95px 0
}

.screenshot_area_three .display_table {
    display: table
}

.screenshot_area_three .display_table .table_cell {
    display: table-cell;
    vertical-align: middle;
    float: none
}

.screenshot_left .content {
    max-width: 556px;
    margin-left: auto;
    margin-right: 0;
    padding-right: 115px
}

.screenshot_left .content .sec_title_five {
    margin-bottom: 25px
}

.screenshot_left .content p {
    padding-top: 20px
}

.screenshot_right .sc_item {
    display: inline-block;
    -webkit-box-shadow: 0 7px 17px 0 rgba(0, 0, 0, .25);
    box-shadow: 0 7px 17px 0 rgba(0, 0, 0, .25);
    margin-left: 5%;
    margin-top: 25px;
    margin-bottom: 25px;
    width: calc(74% / 3)
}

.screenshot_right .sc_item img {
    max-width: 100%;
    width: 100%
}

.analysis_area {
    text-align: center;
    padding-top: 125px;
    padding-bottom: 120px;
    position: relative;
    z-index: 1
}

.analysis_area:before {
    content: "";
    background: url(../image/home-6/wave.png) no-repeat scroll center bottom;
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 0;
    z-index: -1;
    left: 0
}

.analysis_area img {
    max-width: 100%
}

.analysis_area h2 {
    font: 400 35px/45px "Quicksand", sans-serif;
    color: #1a264a;
    margin-bottom: 62px
}

.analysis_area .apps_button {
    margin-top: 40px
}

.analysis_area .apps_button a {
    width: 200px;
    height: 50px;
    border: 1px solid #ef494d;
    color: #ef494d;
    font: 500 14px/50px "Quicksand", sans-serif;
    text-align: center;
    display: inline-block;
    border-radius: 40px;
    text-transform: capitalize;
    margin: 10px;
    -webkit-transition: all 0.3s linear;
    -o-transition: all 0.3s linear;
    transition: all 0.3s linear
}

.analysis_area .apps_button a i {
    padding-right: 10px
}

.analysis_area .apps_button a:hover {
    background: #ef494d;
    color: #fff
}

.analysis-area-two .apps_button a {
    border-color: #4c83ff;
    color: #4c83ff
}

.analysis-area-two .apps_button a:hover {
    background: #4c83ff
}

.analysis_area_three {
    padding-top: 0
}

.sec_title_five.sec_five {
    margin-bottom: 40px
}

.sec_title_five.sec_five .br {
    margin: 0
}

.analysis-area-three {
    text-align: left;
    padding-top: 110px
}

.analysis-area-three .mockup-img {
    margin-top: 90px;
    max-width: 100%;
    width: 100%
}

.features_content_three {
    max-width: 570px;
    padding-top: 0
}

.features_content_three p {
    font-family: "Quicksand", sans-serif
}

.features_content_three .media .media-body {
    font-family: "Quicksand", sans-serif;
    font-weight: 600
}

.features_content_three .learn_btn {
    background: #ef494d;
    color: #fff;
    font-family: "Quicksand", sans-serif;
    font-weight: 400;
    margin-top: 30px
}

.features_content_three .learn_btn:before {
    opacity: 0;
    -webkit-transition: all 0.2s linear;
    -o-transition: all 0.2s linear;
    transition: all 0.2s linear
}

.features_content_three .learn_btn:hover {
    color: #ef494d
}

.features_content_three .learn_btn:hover:before {
    opacity: 1;
    background: #fff
}

.app-promo {
    background-image: -moz-linear-gradient(0deg, #7464fd 0%, #5851ea 40%);
    background-image: -webkit-linear-gradient(0deg, #7464fd 0%, #5851ea 40%);
    background-image: -ms-linear-gradient(0deg, #7464fd 0%, #5851ea 40%);
    padding: 120px 0
}

.app-promo-content {
    padding-top: 105px
}

.app-promo-content h2 {
    font: 500 40px/54px "Quicksand", sans-serif;
    color: #fff;
    margin-bottom: 50px
}

.app-promo-content .promo-item {
    position: relative;
    font: 400 16px/28px "Quicksand", sans-serif;
    color: #fff;
    padding-left: 65px;
    padding-bottom: 28px
}

.app-promo-content .promo-item span {
    font-weight: 600
}

.app-promo-content .promo-item i {
    width: 46px;
    height: 46px;
    border: 3px solid #fff;
    font-size: 19px;
    line-height: 42px;
    text-align: center;
    color: #fff;
    border-radius: 50%;
    position: absolute;
    left: 0
}

.promo-button {
    margin-top: 30px;
    overflow: hidden
}

.promo-button .banner_btn {
    font-size: 15px;
    font-weight: 500;
    font-family: "Quicksand", sans-serif;
    color: #4c83ff;
    letter-spacing: 0;
    width: 180px;
    height: 50px;
    line-height: 49px
}

.promo-button .banner_btn:hover {
    color: #fff
}

.promo-button .learn-btn {
    font-family: "Quicksand", sans-serif;
    color: #fff;
    text-decoration: underline;
    text-transform: capitalize;
    font-size: 15px;
    font-weight: 700;
    margin-left: 25px
}

.app-promo-img {
    position: relative;
    max-width: 540px;
    margin-right: 0;
    margin-left: auto
}

.app-promo-img .img1 {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1
}

.app-promo-img .promo-img {
    border-radius: 5px;
    background-color: #daa932;
    -webkit-box-shadow: 0 5px 25px 0 rgba(5, 5, 5, .2);
    box-shadow: 0 5px 25px 0 rgba(5, 5, 5, .2)
}

.app-promo-img .img2 {
    position: absolute;
    right: 0;
    top: 40px
}

.app-promo-img .img3 {
    z-index: 1;
    position: relative;
    margin-left: 95px;
    margin-top: 80px
}

.features_one_area {
    padding: 130px 0 150px;
    position: relative
}

.features_one_area:before {
    content: "";
    width: 100%;
    height: 100%;
    top: -87px;
    right: -64px;
    position: absolute;
    z-index: 0;
    -webkit-transform: rotate(-5deg);
    -ms-transform: rotate(-5deg);
    transform: rotate(-5deg);
    display: none
}

@media (max-width:1450px) {
    .features_one_area:before {
        display: none
    }
}

.features_content {
    padding-top: 175px
}

.features_content h2 {
    font: 700 36px/48px "Quicksand", sans-serif;
    color: #404040
}

.features_content p {
    margin: 33px 0 44px
}

.features_area_two {
    padding: 90px 0 60px
}

.features_content_two {
    padding-right: 100px;
    padding-top: 140px
}

.features_content_two p {
    font-size: 18px;
    line-height: 32px;
    color: #585e68;
    margin: 30px 0 45px;
    font-family: "Quicksand", sans-serif
}

.features_content_two .learn_btn {
    background: #ef494d;
    color: #fff;
    font-family: "Quicksand", sans-serif;
    font-weight: 400
}

.features_content_two .learn_btn:before {
    opacity: 0;
    -webkit-transition: all 0.3s linear;
    -o-transition: all 0.3s linear;
    transition: all 0.3s linear
}

.features_content_two .learn_btn:hover {
    color: #ef494d
}

.features_content_two .learn_btn:hover:before {
    opacity: 1;
    background: #fff
}

.features_area_six {
    padding: 95px 0
}

.mockup-area {
    padding: 150px 0
}

.video-area {
    padding: 350px 0 345px
}

.video-bg {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    height: 100%;
    z-index: -2;
    opacity: .1;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover
}

.wrapper-video {
    text-align: center
}

.wrapper-video h3 {
    font: 500 36px/58px "Quicksand", sans-serif;
    color: #fff;
    padding: 40px 0 5px
}

.wrapper-video p {
    font-size: 18px;
    line-height: 30px;
    color: rgba(255, 255, 255, .8)
}

.wrapper-video .youtube-popup {
    width: 100px;
    height: 100px;
    border: 1px solid #fff;
    border-radius: 50%;
    font-size: 36px;
    color: #fff;
    text-align: center;
    line-height: 100px;
    display: inline-block;
    transition: transform .3s ease, -webkit-transform .3s ease
}

.wrapper-video .youtube-popup:hover {
    -webkit-transform: scale(1.05);
    -ms-transform: scale(1.05);
    transform: scale(1.05)
}

.video-area_two {
    padding: 410px 0 420px
}

.video-area_two .wrapper-video {
    max-width: 570px;
    margin: 0 auto;
    position: relative;
    text-align: center
}

.video-area_two .wrapper-video h3 {
    padding-top: 0
}

.video-area_two .wrapper-video .youtube-popup {
    margin: 0 auto;
    text-align: center;
    vertical-align: middle;
    display: block;
    margin-bottom: 40px
}

.testimonial-area {
    padding: 125px 0 140px
}

.testimonial-area .section_title {
    margin-bottom: 35px
}

.testimonial_carousel {
    padding: 0 200px;
    position: relative
}

.testimonial_carousel .owl-prev,
.testimonial_carousel .owl-next {
    font-size: 36px;
    color: #a9a9a9;
    position: absolute;
    top: 58%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    cursor: pointer;
    -webkit-transition: all 0.4s linear;
    -o-transition: all 0.4s linear;
    transition: all 0.4s linear;
    border: 0;
    width: auto;
    height: auto;
    z-index: 2
}

.testimonial_carousel .owl-prev:hover,
.testimonial_carousel .owl-next:hover {
    color: #ec6d47;
    background: transparent
}

.testimonial_carousel .owl-prev {
    left: 80px
}

.testimonial_carousel .owl-next {
    right: 80px
}

.testimonial_carousel .item {
    padding: 50px 10px 10px
}

.testimonial_item {
    text-align: center;
    background: #fff;
    -webkit-box-shadow: 0 0 10px 0 rgba(0, 0, 0, .1);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, .1);
    padding: 0 64px 90px
}

.testimonial_item p {
    font-size: 16px;
    line-height: 28px;
    color: #878787;
    padding: 0 0;
    font-style: normal;
    font-weight: 300
}

.testimonial_item .author {
    margin-top: -45px;
    display: inline-block;
    margin-bottom: 20px
}

.testimonial_item .author img {
    width: auto;
    display: inline-block
}

.testimonial_item .author h2 {
    font: 500 18px/22px "Quicksand", sans-serif;
    color: #191919;
    padding-top: 20px
}

.testimonial_item .author h6 {
    font-size: 14px;
    color: #404040;
    font-weight: 400;
    line-height: 36px;
    margin: 0;
    font-family: "Quicksand", sans-serif
}

.testimonial_item .media {
    max-width: 300px;
    margin: 0 auto
}

.testimonial_item .media .media-left {
    width: 80px;
    height: 80px;
    padding-right: 30px
}

.testimonial_item .media .media-left img {
    width: auto
}

.testimonial_item .media .media-body {
    vertical-align: middle
}

.testimonial_item .media .media-body h2 {
    font: 500 18px/32px "Quicksand", sans-serif;
    color: #404040
}

.testimonial_item .media .media-body h6 {
    font-size: 16px;
    color: #666;
    font-family: "Quicksand", sans-serif;
    font-weight: 400
}

.testimonial_carousel_two .owl-prev:hover,
.testimonial_carousel_two .owl-next:hover {
    color: #ba77ff
}

.more_feature_area {
    padding: 150px 0 70px
}

.more_features .media {
    margin-bottom: 75px
}

.more_features .media .media-left {
    padding: 0 30px 0 20px
}

.more_features .media .media-left i {
    font-size: 60px;
    background-image: -moz-linear-gradient(145deg, #faa61f 0%, #ed1847 100%);
    background-image: -webkit-linear-gradient(145deg, #faa61f 0%, #ed1847 100%);
    background-image: -ms-linear-gradient(145deg, #faa61f 0%, #ed1847 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent
}

.more_features .media .media-body h2 {
    font-weight: 500;
    text-transform: capitalize;
    font-size: 18px;
    padding-bottom: 20px;
    -webkit-transition: all 0.4s linear;
    -o-transition: all 0.4s linear;
    transition: all 0.4s linear
}

.more_features .media:hover h2 {
    background-image: -moz-linear-gradient(145deg, #faa61f 0%, #ed1847 100%);
    background-image: -webkit-linear-gradient(145deg, #faa61f 0%, #ed1847 100%);
    background-image: -ms-linear-gradient(145deg, #faa61f 0%, #ed1847 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent
}

.exclusive_features .media .media-left i {
    color: #b166ff;
    -webkit-text-fill-color: initial
}

.exclusive_features .media:hover h2 {
    color: #b166ff;
    -webkit-text-fill-color: initial
}

.exclusive_features-two .media .media-left i {
    color: #8675ff;
    -webkit-text-fill-color: initial
}

.exclusive_features-two .media:hover h2 {
    color: #8675ff;
    -webkit-text-fill-color: initial
}

.ex-features-area {
    padding: 200px 0
}

.ex_features_item i {
    font-size: 42px;
    color: #4c83ff;
    margin-bottom: 15px;
    display: inline-block
}

.ex_features_item .title {
    font-family: "Quicksand", sans-serif;
    font-size: 20px;
    line-height: 60px;
    color: #4b678b;
    text-transform: capitalize
}

.ex_features_item p {
    color: #6f7982;
    font-family: "Quicksand", sans-serif;
    letter-spacing: 0;
    font-size: 15px;
    line-height: 28px;
    color: #6f7982
}

.call-action-area {
    padding: 158px 0 175px;
    background-image: -moz-linear-gradient(145deg, #faa61f 0%, #ed1847 100%);
    background-image: -webkit-linear-gradient(145deg, #faa61f 0%, #ed1847 100%);
    background-image: -ms-linear-gradient(145deg, #faa61f 0%, #ed1847 100%);
    overflow: hidden;
    position: relative;
    z-index: 1
}

.call-action-area-two {
    padding: 278px 0 175px
}

.call-action-area-two .app-btn {
    background: #6f55d4;
    border-color: #6f55d4
}

.call-action-area-two .app-btn:hover {
    background: #fff;
    border-color: #fff
}

.call-action3 .call-text {
    color: #fff
}

.call-action3 .call-text h2 {
    font: 700 35px/60px "Quicksand", sans-serif;
    padding-bottom: 17px;
    color: #fff
}

.call-action3 .call-text p {
    font: 400 16px/28px "Quicksand", sans-serif;
    padding-bottom: 42px;
    padding-right: 110px
}

.call-action3 .call-mobile-img {
    position: relative;
    z-index: 1
}

.call-action3 .call-mobile-img img {
    position: absolute;
    bottom: -410px;
    z-index: -1
}

.call-action3 .call-mobile-img img + img {
    right: 0;
    z-index: -1
}

.call_action_two {
    background: #b166ff
}

.features_two_area .overview {
    margin-top: 150px
}

.features_two_area .overview .overview_item i {
    color: #b166ff;
    -webkit-text-fill-color: initial
}

.call_action_three {
    background: #ef494d;
    position: relative;
    z-index: 1
}

.sec-features {
    padding: 150px 0
}

.sec-features .container-acting {
    position: relative
}

@media (min-width:992px) {
    .sec-features .container-acting {
        margin-left: 0;
        margin-bottom: 30px
    }
}

.sec-features .container-acting .sec_features_item {
    text-align: left
}

@media (min-width:992px) {
    .sec-features .container-acting .sec_features_item {
        position: absolute;
        float: none
    }
}

@media (min-width:992px) {
    .sec-features .container-acting .sec_features_item:nth-child(1) {
        top: 95px;
        left: -1px
    }
}

@media (min-width:992px) {
    .sec-features .container-acting .sec_features_item:nth-child(2) {
        top: -2px;
        right: 6px
    }
}

@media (min-width:992px) {
    .sec-features .container-acting .sec_features_item:nth-child(3) {
        bottom: -35px;
        left: 42px
    }
}

@media (min-width:992px) {
    .sec-features .container-acting .sec_features_item:nth-child(4) {
        bottom: 70px;
        right: 33px
    }
}

.sec-features .container-acting img {
    margin: 0 auto;
    height: auto;
    padding: 80px 0
}

.sec_features_item {
    text-align: left
}

.sec_features_item .icon {
    display: inline-block;
    position: relative;
    font-size: 26px;
    color: #8675ff;
    vertical-align: middle;
    line-height: 64px;
    height: 64px;
    width: 64px;
    border-radius: 10px;
    border: 2px solid #8675ff;
    z-index: 0;
    -webkit-transition: all 0.3s linear;
    -o-transition: all 0.3s linear;
    transition: all 0.3s linear;
    text-align: center
}

.sec_features_item .icon:after {
    content: '';
    display: inline-block;
    position: absolute;
    z-index: 0;
    top: 2px;
    left: 2px;
    height: 60px;
    width: 60px;
    z-index: -1;
    -webkit-transition: all 0.3s linear;
    -o-transition: all 0.3s linear;
    transition: all 0.3s linear
}

.sec_features_item .title {
    font-size: 24px;
    margin: 20px 0 13px;
    -webkit-transition: all 0.2s linear;
    -o-transition: all 0.2s linear;
    transition: all 0.2s linear
}

.sec_features_item p {
    font-size: 14px
}

.sec_features_item:hover .icon {
    color: #fff;
    background: #8675ff
}

.sec_features_item:hover .icon:after {
    -webkit-transform: scale(.8);
    -ms-transform: scale(.8);
    transform: scale(.8);
    opacity: 0
}

.sec_features_item:hover .title {
    color: #8675ff
}

.f_images_area {
    padding: 150px 0
}

.f_images_area .sec_features_item {
    margin-top: 70px
}

.screen-feature-3 .sec_features_item:first-child {
    margin-top: 0
}

.screen-feature-3 .sec_features_item:nth-child(2) {
    margin-top: 0
}

.ex_features_one_area {
    padding: 150px 0
}

.ex_features_one_area .features_content {
    padding-top: 30px;
    padding-right: 35px
}

.ex_features_one_area .features_content h2 {
    font-weight: 600;
    font-size: 36px
}

.ex_features_one_area .f_img {
    padding-left: 0
}

.testimonial_area_three {
    position: relative;
    background: #8675ff;
    z-index: 0
}

.test-carousel-three {
    text-align: center;
    max-width: 800px;
    margin: 0 auto
}

.test-carousel-three .icon {
    width: 100px;
    height: 100px;
    border: 1px solid #fff;
    text-align: center;
    font-size: 35px;
    line-height: 100px;
    color: #fff;
    border-radius: 50%;
    display: inline-block
}

.test-carousel-three p {
    font-size: 22px;
    color: #fff;
    padding: 80px 0 20px 0;
    line-height: 36px;
    font-weight: 300;
    font-family: "Quicksand", sans-serif;
    letter-spacing: 0
}

.test-carousel-three a {
    color: #fff;
    opacity: .8;
    font-size: 16px;
    line-height: 30px
}

.test-carousel-three .owl-dots {
    text-align: center;
    margin-top: 75px
}

.test-carousel-three .owl-dots .owl-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #b2a4f9;
    display: inline-block;
    margin: 0 5px;
    -webkit-transition: all 0.6s linear;
    -o-transition: all 0.6s linear;
    transition: all 0.6s linear
}

.testimonial_area_three .test-carousel-three .owl-dots .owl-dot:hover {
    background: #fff!important
}

.testimonial_area_three .test-carousel-three .owl-dots .owl-dot.active {
    background: #fff!important
}

.more_features_four .exclusive_features-two .media .media-body h2 {
    font-size: 20px
}

.testimonial_area_four .test-carousel-three {
    max-width: 900px
}

.testimonial_area_four .test-carousel-three .item {
    background: #fff;
    position: relative;
    margin-top: 50px;
    padding-bottom: 40px
}

.testimonial_area_four .test-carousel-three .item .icon {
    position: absolute;
    margin-top: -50px;
    background: #fff;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%)
}

.testimonial_area_four .test-carousel-three .item .icon i {
    background-image: -moz-linear-gradient(0deg, #4776e6 0%, #8e54e9 100%);
    background-image: -webkit-linear-gradient(0deg, #4776e6 0%, #8e54e9 100%);
    background-image: -ms-linear-gradient(0deg, #4776e6 0%, #8e54e9 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent
}

.testimonial_area_four .test-carousel-three .item p {
    line-height: 36px;
    padding: 75px 80px 25px;
    font-weight: 300
}

.testimonial_area_four .test-carousel-three .item p,
.testimonial_area_four .test-carousel-three .item a {
    color: #666
}

.testimonial_area_four .test-carousel-three .owl-dots .owl-dot {
    background: transparent;
}

.testimonial_area_four .test-carousel-three .owl-dots .owl-dot.active {
    background: #8766e5
}

/*============= testimonial_area_four css =============*/
/*video_features css
===========================================================*/
.video_features {
    background: #f8fafc;
    padding: 115px 0 120px
}

.video_features .video {
    position: relative
}

.video_features .video:before {
    content: '';
    position: absolute;
    background: #0a0f17;
    opacity: .45;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0
}

.video_features .video img {
    max-width: 100%;
    width: 100%
}

.video_features .video .video_icon {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: #fff;
    color: #ef494d;
    font-size: 30px;
    line-height: 80px;
    position: absolute;
    text-align: center;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    -webkit-transition: all 0.4s linear;
    -o-transition: all 0.4s linear;
    transition: all 0.4s linear
}

.video_features .video .video_icon:hover {
    background: #ef494d;
    color: #fff
}

.testimonial_area_two {
    padding: 112px 0 140px;
    position: relative
}

.testimonial_area_two .testimonial_carousel_two {
    max-width: 100%
}

.testimonial_area_two .testimonial_carousel_two .testimonial_item .icon {
    background-color: #f8fafc;
    -webkit-box-shadow: 0 3px 7px 0 rgba(26, 38, 74, .15);
    box-shadow: 0 3px 7px 0 rgba(26, 38, 74, .15);
    width: 70px;
    height: 70px;
    line-height: 70px;
    top: -35px;
    border-radius: 50%;
    position: relative;
    display: inline-block
}

.testimonial_area_two .testimonial_carousel_two .testimonial_item .icon img {
    width: auto;
    display: inline-block
}

.testimonial_area_two .testimonial_carousel_two .owl-dots {
    text-align: center
}

.testimonial_area_two .testimonial_carousel_two .owl-dots .owl-dot {
    width: 10px;
    height: 10px;
    border: 1px solid #af68ee;
    border-radius: 50%;
    background: transparent;
    display: inline-block
}

.testimonial_area_two .testimonial_carousel_two .owl-dots .owl-dot.active {
    background: #af68ee;
    opacity: 1
}

.testimonial_area_two .owl-prev,
.testimonial_area_two .owl-next {
    top: 63%
}

.testimonial_item {
    margin: 35px 15px 10px;
    padding: 0 50px 30px
}

.testimonial_item .icon img {
    width: auto;
    display: inline-block
}

.testimonial_item p {
    color: #585e68;
    font-size: 17px;
    font-weight: 400;
    padding-bottom: 30px
}

.testimonial_area_five {
    padding: 110px 0
}

.testimonial_area_five .testimonial_item {
    background: #f8fafc;
    margin-top: 5px;
    padding: 30px 50px
}

.testimonial_area_five .testimonial_item p {
    font-style: italic;
    font-family: "Quicksand", sans-serif;
    padding-top: 28px
}

.testimonial_area_five .owl-dots .owl-dot {
    border: 1px solid #ef494d;
    background: transparent
}

.testimonial_area_five .owl-dots .owl-dot:hover,
.testimonial_area_five .owl-dots .owl-dot.active {
    background: #ef494d
}

.testimonial_area_five .owl-nav {
    display: none
}

/*features_content_three
===================================================*/
.features_content_three {
    padding-top: 80px
}

.features_content_three .title_three {
    margin-bottom: 45px
}

.features_content_three p {
    font-size: 18px
}

.features_content_three p + p {
    margin: 35px 0 40px
}

.features_content_three .media {
    margin-top: 0;
    margin-bottom: 20px
}

.features_content_three .media .media-left {
    padding-right: 20px
}

.features_content_three .media .media-left .icon {
    width: 50px;
    height: 50px;
    border: 1px solid #e7e7e7;
    text-align: center;
    border-radius: 50%;
    padding: 0;
    line-height: 45px
}

.features_content_three .media .media-body {
    color: #585e68;
    font-size: 18px;
    line-height: 32px;
    vertical-align: middle
}

.more_feature_area_five {
    padding: 115px 0 40px
}

.more_feature_area_five .exclusive_features .media .media-left i {
    color: #ef494d;
    font-size: 48px
}

.more_feature_area_five .exclusive_features .media:hover .media-body h2 {
    color: #ef494d
}

.more_feature_area_six {
    background: #f8fafc;
    padding: 110px 0 40px
}

.more_feature_area_six .exclusive_features .media .media-left i {
    color: #ef494d
}

.more_feature_area_six .exclusive_features .media:hover .media-body h2 {
    color: #ef494d
}

.feature-bg {
    background: #f1f5ff;
    position: relative
}

.feature-bg:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: -144px;
    right: 0;
    -webkit-transform: rotate(2.9deg);
    -ms-transform: rotate(2.9deg);
    transform: rotate(2.9deg)
}

.features_area_four {
    padding: 15px 0 120px
}

.features_area_four .features_content_three {
    padding-top: 230px
}

.features_area_four .features_content_three .media .icon {
    font-size: 20px;
    color: #4c84ff;
    line-height: 50px;
    background: #fff
}

.features-area3 {
    padding-top: 110px;
    padding-bottom: 120px
}

.features-area3 .section-title {
    margin-bottom: 74px
}

.features-area3 .features-tab {
    border: 1px solid #e0e0e0;
    border-radius: 3px
}

.features-area3 .features-tab li {
    margin: 0;
    width: 25%
}

.features-area3 .features-tab li a {
    font: 400 15px/28px "Quicksand", sans-serif;
    color: #1a264a;
    margin: 0;
    border-radius: 0;
    border: 0;
    padding: 20px 0;
    text-align: center;
    -webkit-transition: all 0.2s linear;
    -o-transition: all 0.2s linear;
    transition: all 0.2s linear
}

.features-area3 .features-tab li a:hover,
.features-area3 .features-tab li a:focus {
    background: #4c83ff;
    color: #fff;
    border-color: #4c83ff
}

.features-area3 .features-tab li + li a {
    border-left: 1px solid #e0e0e0
}

.features-area3 .features-tab li.active a {
    border-top: 0;
    border-bottom: 0;
    border-right: 0;
    background: #4c83ff;
    border-left: 1px solid #4c83ff;
    color: #fff
}

.features-area3 .tab-content {
    padding-top: 80px
}

.features-area3 .tab-content .tab-pane .overview-details {
    padding-right: 0;
    padding-top: 40px;
    max-width: 100%;
    padding-left: 0
}

.features-area3 .tab-content .tab-pane .overview-details p {
    font: 400 18px/32px "Quicksand", sans-serif;
    color: #585e68
}

.features-area3 .tab-content .tab-pane .feat-img {
    -webkit-box-shadow: 0 30px 70px 0 rgba(26, 38, 74, .25);
    box-shadow: 0 30px 70px 0 rgba(26, 38, 74, .25)
}

.features-area3 .tab-content .tab2 .overview-details {
    padding-right: 0;
    padding-left: 100px
}

.call_action_four {
    background-image: -webkit-linear-gradient(bottom, #4c84ff 0%, #783dff 100%);
    background-image: -o-linear-gradient(bottom, #4c84ff 0%, #783dff 100%);
    background-image: -webkit-gradient(linear, left bottom, left top, from(#4c84ff), to(#783dff));
    background-image: linear-gradient(to top, #4c84ff 0%, #783dff 100%)
}

.call_action_five {
    background: #ef494d;
    padding-bottom: 138px
}

.call_action_five .sec_title_five h2 {
    text-transform: capitalize;
    font-weight: 400;
    padding-bottom: 0
}

.call_action_five .sec_title_five .br:before,
.call_action_five .sec_title_five .br:after {
    background: #fff
}

.testimonial_area_seven .testimonial_carousel_two .owl-dots .owl-dot {
    border-color: #4c83ff
}

.testimonial_area_seven .testimonial_carousel_two .owl-dots .owl-dot.active {
    background: #4c83ff
}

.ex-featured {
    padding: 0;
    background: #f5f9fc
}

.ex-featured .f_img {
    position: absolute;
    top: -42px
}

.ex-featured .f_img img {
    border-radius: 49px;
    background-image: -moz-linear-gradient(-90deg, white 0%, #fafbfc 100%);
    background-image: -webkit-linear-gradient(-90deg, white 0%, #fafbfc 100%);
    background-image: -ms-linear-gradient(-90deg, white 0%, #fafbfc 100%);
    -webkit-box-shadow: 10.751px 28.007px 35px 0 rgba(173, 186, 204, .25), 0 7px 14px 0 rgba(0, 21, 64, .05), 0 1px 4px 0 rgba(0, 21, 64, .14), inset 0 -16px 32px 0 rgba(0, 0, 0, .08), inset 0 3px 5px 0 rgba(255, 255, 255, .004);
    box-shadow: 10.751px 28.007px 35px 0 rgba(173, 186, 204, .25), 0 7px 14px 0 rgba(0, 21, 64, .05), 0 1px 4px 0 rgba(0, 21, 64, .14), inset 0 -16px 32px 0 rgba(0, 0, 0, .08), inset 0 3px 5px 0 rgba(255, 255, 255, .004)
}

.ex-featured .features_content {
    padding-top: 150px;
    padding-bottom: 155px
}

.ex-featured .features_content .color-b {
    font-weight: 500;
    text-transform: capitalize;
    color: #324865
}

.ex-featured .features_content p {
    color: #6f7982
}

.ex-featured .features_content .learn_btn {
    background: #4c83ff;
    color: #4c83ff
}

.ex-featured .features_content .learn_btn:before {
    background: #f5f9fc
}

.ex-featured .features_content .learn_btn:hover {
    color: #fff
}

.ex-featured .features_content .learn_btn:hover:before {
    opacity: 0
}

.promo-featured-area {
    padding: 160px 0
}

.promo-inner-left {
    width: calc(50% - 120px);
    float: left
}

.promo-inner-left img {
    max-width: 100%;
    border-radius: 10px;
    -webkit-box-shadow: 0 5px 25px 0 rgba(5, 5, 5, .2);
    box-shadow: 0 5px 25px 0 rgba(5, 5, 5, .2)
}

.promo-inner-right {
    width: calc(50% + 120px);
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    -ms-flex-item-align: center;
    align-self: center
}

.promo-inner-right .overview-details {
    padding-top: 0;
    padding-left: 120px;
    max-width: 705px
}

.promo-inner-right .overview-details h2 {
    font: 500 40px/55px "Quicksand", sans-serif;
    color: #324865;
    padding-bottom: 40px
}

.promo-inner-right .overview-details p {
    font: 400 16px/28px "Quicksand", sans-serif;
    color: #6f7982;
    padding-bottom: 58px
}

.promo-inner-right .overview-details .learn-btn-two {
    font: 500 15px/50px "Quicksand", sans-serif;
    color: #4c83ff;
    background: #fff;
    -webkit-box-shadow: 0 2px 20px 0 rgba(76, 132, 255, .2);
    box-shadow: 0 2px 20px 0 rgba(76, 132, 255, .2)
}

.promo-inner-right .overview-details .learn-btn-two:hover {
    background: #4c83ff;
    color: #fff
}

.power_features_area_two {
    padding: 190px 0 120px
}

.power_features_item {
    margin-top: 45px
}

@media (min-width:992px) {
    .power_features_item {
        min-height: 210px
    }
}

.power_features_item i {
    font-size: 48px;
    color: #ef494d
}

.power_features_item .title {
    text-transform: capitalize;
    font-weight: 400;
    color: #1a264a;
    padding: 20px 0 14px;
    -webkit-transition: all 0.4s linear;
    -o-transition: all 0.4s linear;
    transition: all 0.4s linear
}

.power_features_item p {
    font: 400 15px/28px "Quicksand", sans-serif;
    color: #585e68
}

.power_features_item:hover .title {
    color: #ef494d
}

.app-features-item {
    position: relative;
    height: 347px
}

.app-features-item .app-bg {
    max-width: 100%;
    opacity: .08;
    z-index: -1;
    height: 100%;
    background-size: cover;
    width: 100%
}

.app-features-item .content {
    position: absolute;
    color: #fff;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    padding: 0 80px
}

.app-features-item .content h3 {
    font: 400 18px/60px "Quicksand", sans-serif;
    color: #fff
}

.app-features-item.app_f_one {
    background: #fc575b
}

.app-features-item.app_f_two {
    background: #ef494d
}

.app-features-item.app_f_three {
    background: #e33d41
}

.features_analytics_area {
    padding: 120px 0 100px
}

.features_area_seven {
    padding: 120px 0 100px
}

.features_area_seven .f_img {
    position: relative;
    padding-right: 0
}

.features_area_seven .f_img .features_img_first {
    margin-right: 0
}

.features_area_seven .f_img .features_img {
    position: absolute;
    left: 0;
    top: 49%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    z-index: -1
}

.features_area_seven .features_content_two {
    padding-right: 0;
    padding-left: 0
}

.testimonial_area_six {
    padding-bottom: 110px
}

.testimonial_area_six .testimonial_carousel_two .owl-nav {
    display: none
}

.testimonial_area_six .testimonial_carousel_two .owl-dots .owl-dot {
    border-color: #ef494d
}

.testimonial_area_six .testimonial_carousel_two .owl-dots .owl-dot:hover,
.testimonial_area_six .testimonial_carousel_two .owl-dots .owl-dot.active {
    background: #ef494d
}

.team_area:before {
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    opacity: .06;
    z-index: -1;
    background-size: cover
}

.owl-dots {
    text-align: center;
    margin-top: 75px
}

.owl-dots .owl-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #fad5c2;
    display: inline-block;
    margin: 5px 5px 0
}

.owl-dots .owl-dot.active,
.owl-dots .owl-dot:hover {
    background: #fff
}

.team_member {
    background: #fff;
    border-radius: 5px
}

.team_member img {
    max-width: 100%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px
}

.team_member .content {
    text-align: center;
    padding: 36px 56px 30px
}

.team_member .content h2 {
    font: 700 18px/28px "Quicksand", sans-serif;
    color: #666;
    text-transform: capitalize
}

.team_member .content p {
    color: #999
}

.team_member .content h6 {
    color: #999;
    font-family: "Quicksand", sans-serif;
    font-size: 16px;
    line-height: 28px;
    font-weight: 400;
    padding-bottom: 16px
}

.team_member .content .social {
    padding-top: 20px
}

.team_member .content .social a {
    display: inline-block;
    width: 34px;
    height: 34px;
    text-align: center;
    line-height: 34px;
    font-size: 16px;
    border-radius: 50%;
    color: #111;
    margin: 0 3px;
    -webkit-transition: all 0.4s linear;
    -o-transition: all 0.4s linear;
    transition: all 0.4s linear
}

.team-area-two {
    background: #b166ff
}

.team-area-two .team_member img {
    max-width: 100%
}

.team-area-two .team_member .content .social a:hover {
    background: #b166ff
}

.team-area-two .team_member:hover h2 {
    color: #b166ff;
    -webkit-text-fill-color: initial
}

.team_area_three .team_member:hover h2 {
    color: #8675ff;
    -webkit-text-fill-color: initial
}

.team_area_three .content .social a:hover {
    background: #8675ff
}

.team_area_four .team_member {
    transition: all 0.3s linear
}

.team_area_four .team_member:hover {
    -webkit-box-shadow: 0 10px 20px 2px rgba(106, 106, 106, .15);
    box-shadow: 0 10px 20px 2px rgba(106, 106, 106, .15);
    border-color: #8675ff;
    border-radius: 5px
}

.team_area_four .team_member .content .social a {
    -webkit-transition: all 0s linear;
    -o-transition: all 0s linear;
    transition: all 0s linear;
    background: transparent
}

.team_area_four .team_member:hover h2 {
    color: #404040
}

.team_area_four .team_member:hover p {
    color: #666
}

.team_area_four .team_member .social a:hover {
    color: #fff;
    border-radius: 50%
}

.team_area_five {
    background: #f8fafc
}

.team_area_five .team_member .content .social a {
    -webkit-transition: all 0s linear;
    -o-transition: all 0s linear;
    transition: all 0s linear
}

.team_area_five .team_member .content .social a:hover {
    background: #ef494d
}

.team_area_five .team_member:hover h2 {
    background: #ef494d;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent
}

.more_text_area {
    padding-top: 115px
}

.more_content {
    max-width: 610px;
    display: inline-block
}

.more_content h3 {
    font: 400 35px/45px "Quicksand", sans-serif;
    color: #1a264a
}

.more_btn {
    font: 400 18px/20px "Quicksand", sans-serif;
    color: #fff;
    border-radius: 40px;
    background: #ef494d;
    padding: 25px 96px;
    display: inline-block;
    text-transform: capitalize;
    float: right;
    margin-top: 28px;
    border: 1px solid transparent;
    -webkit-transition: all 0.4s linear;
    -o-transition: all 0.4s linear;
    transition: all 0.4s linear
}

.more_btn:hover {
    border-color: #ef494d;
    background: #fff
}

.faq-area-2 {
    background: #f8fafc;
    padding: 102px 0 118px
}

.faq-area-2 .faq-img {
    text-align: center
}

@media (max-width:991px) {
    .faq-area-2 .faq-img {
        padding-top: 50px
    }
}

.faq-area-2 .faq-img img {
    max-width: 100%
}

.faq-area-2 .faq_accordian_two {
    padding-top: 50px
}

@media (max-width:991px) {
    .faq-area-2 .faq_accordian_two {
        padding-top: 0
    }
}

.faq-inner-accordion {
    margin-bottom: 0
}

.faq-inner-accordion .panel {
    border-radius: 0;
    border: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
    position: relative
}

.faq-inner-accordion .panel:before {
    content: '';
    width: 1px;
    height: 92%;
    position: absolute;
    top: 5px;
    left: 60px;
    background: #f1f1f1
}

.faq-inner-accordion .panel .panel-heading {
    padding: 0;
    background: transparent
}

.faq-inner-accordion .panel .panel-heading .panel-title a {
    display: block;
    font: 400 18px/30px "Quicksand", sans-serif;
    color: #1a264a;
    position: relative;
    padding-left: 88px;
    padding-bottom: 15px;
    padding-top: 15px
}

.faq-inner-accordion .panel .panel-heading .panel-title a i {
    font-size: 19px;
    color: #ef494d;
    width: 60px;
    text-align: center;
    display: inline-block;
    line-height: 60px;
    -webkit-transition: all 0.6s linear;
    -o-transition: all 0.6s linear;
    transition: all 0.6s linear;
    position: absolute;
    left: 0;
    top: 0
}

.faq-inner-accordion .panel .panel-heading .panel-title a i.minus {
    display: inline-block
}

.faq-inner-accordion .panel .panel-heading .panel-title a i.plus {
    display: none
}

.faq-inner-accordion .panel .panel-heading .panel-title a.collapsed .plus {
    display: inline-block
}

.faq-inner-accordion .panel .panel-heading .panel-title a.collapsed .minus {
    display: none
}

.faq-inner-accordion .panel .panel-collapse .panel-body {
    border-top: 0;
    font: 400 15px/28px "Quicksand", sans-serif;
    color: #585e68;
    padding: 0 40px 26px 88px
}

.faq-inner-accordion .panel + .panel {
    margin-top: 20px
}

.team_area_solid {
    padding: 120px 0
}

.team_area_solid .team_member .content h2 {
    font-family: "Quicksand", sans-serif;
    color: #1a264a
}

.team_area_solid .team_member .content .social a:hover {
    background: #4c83ff
}

.team_area_solid .team_member:hover h2 {
    color: #4c83ff;
    background-image: none;
    -webkit-text-fill-color: inherit
}

.sec-pricing {
    padding: 150px 0
}

.price_table {
    padding-top: 20px
}

.price_table .price_box {
    text-align: center;
    border: 1px solid #e1e1e1;
    font-family: "Quicksand", sans-serif;
    padding-bottom: 40px
}

.price_table .price_box .best-label {
    position: absolute;
    font-size: 12px;
    font-weight: 700;
    font-family: "Quicksand", sans-serif;
    width: 200px;
    background-image: -moz-linear-gradient(145deg, #faa61f 0%, #ed1847 100%);
    background-image: -webkit-linear-gradient(145deg, #faa61f 0%, #ed1847 100%);
    background-image: -ms-linear-gradient(145deg, #faa61f 0%, #ed1847 100%);
    color: #fff;
    line-height: 40px;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    right: -62px;
    top: 16px
}

.price_table .price_box .price_head {
    background: #f8fafc;
    padding: 37px 0;
    overflow: hidden;
    position: relative
}

.price_table .price_box .price_head i {
    font-size: 72px;
    padding-bottom: 30px;
    display: inline-block;
}

.price_table .price_box .price_head h3 {
    font: 700 24px/30px "Quicksand", sans-serif;
    letter-spacing: 2px;
    text-transform: capitalize;
}

.price_table .price_box .plan-lists {
    padding: 30px 0;
    margin: 0
}

.price_table .price_box .plan-lists li {
    font: 400 16px/35px "Quicksand", sans-serif;
    color: #606060;
    opacity: .6
}

.sec-pricing .price_table .price_box h2 {
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent
}

.price_table .price_box h2 {
    font-size: 72px;
    font-weight: 700;
    color: #ec6d47;
    font-family: "Quicksand", sans-serif;
    margin: 0 0 5px
}

.price_table .price_box h2 span {
    font-size: 18px;
    vertical-align: middle
}

.price_table .price_box hr {
    margin-bottom: 0
}

.price_table .price_box .learn_btn {
    font-size: 16px;
    line-height: 33px;
    padding: 7px 38px;
    margin-top: 40px;
    font-weight: 400
}

.price_table .highlighted {
    margin-top: -20px
}

.price_table .highlighted .price_box {
    background-color: white;
    border: 1px solid #f6772c
}

.price_table .highlighted .price_box .price_head i {
    font-size: 100px
}

.price_table .highlighted .price_box .learn_btn {
    margin-top: 40px;
    margin-bottom: 14px
}

.pricing_area_two .price_table .price_box {
    border: 0
}

.pricing_area_two .price_table .price_box .price_head i,
.pricing_area_two .price_table .price_box h3,
.pricing_area_two .price_table .price_box h2 {
    color: #b166ff
}

.pricing_area_three .price_table .price_box {
    -webkit-box-shadow: 0 1px 5px 0 rgba(0, 0, 0, .1);
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, .1);
    border: 0;
    padding-bottom: 60px
}

.pricing_area_three .price_table .price_box .price_head {
    background: transparent;
    padding: 52px 0 0
}

.pricing_area_three .price_table .price_box .price_head i {
    color: #a19ea6;
    -webkit-transition: all 0.2s linear;
    -o-transition: all 0.2s linear;
    transition: all 0.2s linear
}

.pricing_area_three .price_table .price_box h2,
.pricing_area_three .price_table .price_box h3 {
    color: #4f4e50;
    -webkit-transition: all 0.2s linear;
    -o-transition: all 0.2s linear;
    transition: all 0.2s linear
}

.pricing_area_three .price_table .price_box .best-label {
    background: #8974ed
}

.pricing_area_three .price_table .price_box .screenshot-btn {
    font-size: 16px;
    font-weight: 500;
    color: #8974ed;
    background: transparent;
    border: 1px solid #8974ed;
    padding: 15px 44px;
    line-height: 23px;
    margin-top: 40px;
    -webkit-border-radius: 50px;
    -moz-border-radius: 50px;
    border-radius: 50px
}

.pricing_area_three .price_table .price_box:hover .price_head i,
.pricing_area_three .price_table .price_box:hover .price_head h3 {
    color: #8974ed
}

.pricing_area_three .price_table .price_box:hover h2 {
    color: #8974ed
}

.pricing_area_three .price_table .price_box:hover .screenshot-btn {
    background: #8974ed;
    color: #fff
}

.pricing_area_three .price_table .highlighted {
    margin-top: 0
}

.pricing_area_three .price_table .highlighted .price_box .price_head i {
    font-size: 72px;
    color: #8974ed
}

.pricing_area_three .price_table .highlighted .price_box h2,
.pricing_area_three .price_table .highlighted .price_box h3 {
    color: #8974ed
}

.pricing_area_three .price_table .highlighted .price_box .learn_btn {
    margin-bottom: 0
}

.pricing_area_three .price_table .highlighted .price_box .screenshot-btn {
    background: #8974ed;
    color: #fff
}

.pricing_area_four .price_table .price_box .price_head i,
.pricing_area_four .price_table .price_box h3,
.pricing_area_four .price_table .price_box h2 {
    background-image: -moz-linear-gradient(0deg, #8675ff 0%, #8e54e9 100%);
    background-image: -webkit-linear-gradient(0deg, #4776e6 0%, #8e54e9 100%);
    background-image: -ms-linear-gradient(0deg, #8675ff 0%, #8e54e9 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent
}

.pricing_area_four .price_table .price_box .best-label {
    background-image: -moz-linear-gradient(0deg, #4776e6 0%, #8e54e9 100%);
    background-image: -webkit-linear-gradient(0deg, #4776e6 0%, #8e54e9 100%);
    background-image: -ms-linear-gradient(0deg, #4776e6 0%, #8e54e9 100%)
}

.pricing_area_four .price_table .highlighted .color_v_two {
    color: #fff
}

.pricing_area_four .price_table .highlighted .color_v_two:before {
    display: none
}

.subcribe_area {
    padding: 300px 0 318px;
    position: relative;
    z-index: 0
}

.subcribe_area.sec-pad {
    padding: 150px 0
}

.subcribes.input-group {
    max-width: 630px;
    margin: 0 auto;
    display: block;
    position: relative;
    overflow: hidden
}

.subcribes.input-group .form-control {
    color: #fff;
    background: transparent;
    -webkit-box-shadow: none;
    box-shadow: none;
    border-color: #fff;
    height: 60px;
    border-radius: 50px;
    width: 100%;
    display: block;
    padding-left: 30px;
    z-index: 0
}

.subcribes.input-group .form-control.placeholder {
    color: #fff
}

.subcribes.input-group .form-control:-moz-placeholder {
    color: #fff
}

.subcribes.input-group .form-control::-moz-placeholder {
    color: #fff
}

.subcribes.input-group .form-control::-webkit-input-placeholder {
    color: #fff
}

.subcribes .input-group-btn {
    padding: 0
}

.subcribes .input-group-btn .btn-submit {
    font: 700 16px/32px "Quicksand", sans-serif;
    text-transform: capitalize;
    padding: 12px 55px;
    border: 50px;
    position: absolute;
    color: #ec6d47;
    top: 2px;
    right: 2px;
    border-radius: 50px;
    background: #fff;
    -webkit-transition: all 0.4s linear;
    -o-transition: all 0.4s linear;
    transition: all 0.4s linear;
    z-index: 1
}

.subcribes .input-group-btn .btn-submit.c_p {
    color: #b166ff
}

.subcribes .input-group-btn .btn-submit.color_v {
    color: #8675ff
}

.mailchimp {
    position: relative
}

.mchimp-errmessage,
.mchimp-sucmessage {
    position: absolute;
    color: #fff;
    bottom: -60px;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    width: 500px;
    margin: 0 auto;
    text-align: center
}

.subcribe_area_three {
    background: #ef494d;
    position: relative;
    z-index: 1
}

.subcribe_area_three .subcribes .input-group-btn .btn-submit {
    color: #ef494d
}

.subcribe_area_three .sec_title_five h2 {
    color: #fff
}

.subcribe_area_three .sec_title_five .br:before,
.subcribe_area_three .sec_title_five .br:after {
    background: #fff
}

.get_area {
    position: relative;
    background-color: #ef494d;
    z-index: 1;
    text-align: center;
    color: #fff;
    padding: 120px 0
}

.get_area h2 {
    font: 700 60px/60px "Quicksand", sans-serif;
    color: #fff
}
.get_area p {
    font-size: 24px;
    line-height: 35px;
    padding: 37px 0 20px
}
.get_area .more_btn {
    background: #fff;
    border-color: #fff;
    float: none;
    color: #ef494d;
    padding: 25px 115px
}
.get_area .more_btn:hover {
    border-color: #fff;
    background: transparent;
    color: #fff
}
.priceing_table_six {
    padding: 115px 0 120px
}
.priceing_table_six .price_item {
    text-align: center;
    border-radius: 3px;
    background-color: white;
    -webkit-box-shadow: 0 7px 17px 0 rgba(26, 38, 74, .05);
    box-shadow: 0 7px 17px 0 rgba(26, 38, 74, .05)
}
.priceing_table_six .price_item .p-header {
    font: 700 18px/60px "Quicksand", sans-serif;
    color: #1a264a;
    background: #f8fafc;
    text-transform: capitalize;
    padding: 18px 0;
    -webkit-transition: all 0.4s linear;
    -o-transition: all 0.4s linear;
    transition: all 0.4s linear
}
.priceing_table_six .price_item .price {
    font: 500 72px/72px "Quicksand", sans-serif;
    color: #ef494d;
    margin-bottom: 40px
}
.priceing_table_six .price_item .price sub,
.priceing_table_six .price_item .price sup {
    font-size: 16px;
    line-height: 40px
}
.priceing_table_six .price_item .price sup {
    vertical-align: top;
    top: 0
}
.priceing_table_six .price_item .price sub {
    padding-left: 5px
}
.priceing_table_six .price_item .price-box {
    padding: 28px 20px 65px
}
.priceing_table_six .price_item .list-style li {
    border-bottom: 1px solid #e0e0e0
}
.priceing_table_six .price_item .list-style li h3 {
    font: 400 18px "Quicksand", sans-serif;
    color: #1a264a;
    padding-bottom: 5px
}
.priceing_table_six .price_item .list-style li p {
    font: 400 15px/28px "Quicksand", sans-serif;
    color: #585e68;
    margin-bottom: 25px
}
.priceing_table_six .price_item .list-style li + li {
    margin-top: 25px
}
.priceing_table_six .price_item .try {
    display: block;
    font: 400 12px/50px "Quicksand", sans-serif;
    color: #b8b8b8;
    text-transform: capitalize;
    -webkit-transition: all 400ms linear 0s;
    -o-transition: all 400ms linear 0s;
    transition: all 400ms linear 0s;
    margin-top: 10px
}
.priceing_table_six .price_item .try:hover {
    color: #ef494d
}
.priceing_table_six .price_item .purchase-btn {
    font-size: 14px;
    color: #ef494d;
    font-weight: 700;
    letter-spacing: 1.4px;
    border: 1px solid #ef494d;
    display: inline-block;
    padding: 4px 70px;
    border-radius: 3px;
    -webkit-transition: all 0.4s linear;
    -o-transition: all 0.4s linear;
    transition: all 0.4s linear;
    line-height: 50px
}
.priceing_table_six .price_item .purchase-btn:hover {
    background: #ef494d;
    color: #fff
}
.priceing_table_six .price_item.active .p-header,
.priceing_table_six .price_item:hover .p-header {
    background: #ef494d;
    color: #fff
}
.priceing_tab h3 {
    font: 400 30px/60px "Quicksand", sans-serif;
    color: #1a264a;
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 15px;
    margin-bottom: 120px
}
.priceing_tab .item {
    border-bottom: 1px solid #e0e0e0;
    margin-bottom: 20px
}
.priceing_tab .item h4 {
    font: 400 18px/40px "Quicksand", sans-serif;
    color: #1a264a;
    margin-bottom: 5px
}
.priceing_tab .item p {
    font: 400 15px/28px "Quicksand", sans-serif;
    color: #585e68;
    padding-bottom: 25px
}
.pricing-area {
    padding: 104px 0 120px
}
.price-tab {
    max-width: 570px;
    margin: 40px auto 0;
    border: 0
}
.price-tab li {
    padding: 0;
    margin: 0;
    width: 50%
}
.price-tab li a {
    padding: 0 50px;
    font: 700 16px/60px "Quicksand", sans-serif;
    color: #1a264a;
    text-transform: capitalize;
    margin: 0;
    letter-spacing: 1.6px;
    border: 1px solid #e2e5e7;
    border-radius: 40px 0 0 40px;
    text-align: center
}
.price-tab li a:hover,
.price-tab li a:focus {
    background: #f8fafc
}
.price-tab li.active a {
    background: #f8fafc;
    border: 1px solid #e2e5e7;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0
}
.price-tab li.active a:hover,
.price-tab li.active a:focus {
    background: #f8fafc;
    border-color: #e2e5e7
}
.price-tab li:last-child a {
    border-radius: 0 40px 40px 0
}
.priceing-tab {
    padding: 80px 0 0
}
.price .pricing-box {
    border-radius: 3px;
    background-color: white;
    -webkit-box-shadow: 0 2px 17px 0 rgba(26, 38, 74, .09);
    box-shadow: 0 2px 17px 0 rgba(26, 38, 74, .09);
    text-align: center;
    padding: 18px 0 60px;
    -webkit-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    cursor: pointer
}
.price .pricing-box .pricing-header {
    position: relative
}
.price .pricing-box .pricing-header h2 {
    font: 500 18px/60px "Quicksand", sans-serif;
    color: #1a264a;
    text-transform: capitalize;
    padding-bottom: 15px
}
.price .pricing-box .pricing-header .packeg_typ {
    font: 500 72px/60px "Quicksand", sans-serif;
    color: #a963f2;
    background: #f8fafc;
    padding: 30px 0
}
.price .pricing-box .pricing-header .packeg_typ span {
    font: 400 24px/35px "Quicksand", sans-serif;
    letter-spacing: 1px;
    vertical-align: top
}
.price .pricing-box .pricing-header .packeg_typ small {
    font-family: "Quicksand", sans-serif;
    font-size: 16px;
    line-height: 30px;
    vertical-align: bottom;
    color: #a963f2
}
.price .pricing-box .plan-lists {
    padding: 47px 0 30px
}
.price .pricing-box .plan-lists li {
    font: 400 18px/40px "Quicksand", sans-serif;
    color: #585e68
}
.price .pricing-box:hover {
    -webkit-box-shadow: 0 17px 37px 0 rgba(26, 38, 74, .25);
    box-shadow: 0 17px 37px 0 rgba(26, 38, 74, .25)
}
.price .pricing-box:hover .purchase-btn {
    background: #a963f2;
    color: #fff
}
.price .pricing-box.active {
    -webkit-box-shadow: 0 17px 37px 0 rgba(26, 38, 74, .25);
    box-shadow: 0 17px 37px 0 rgba(26, 38, 74, .25)
}
.price .pricing-box.active:hover .purchase-btn {
    background: #a963f2;
    color: #fff
}
.try {
    display: block;
    font: 400 12px/50px "Quicksand", sans-serif;
    color: #b8b8b8;
    text-transform: capitalize;
    -webkit-transition: all 400ms linear 0s;
    -o-transition: all 400ms linear 0s;
    transition: all 400ms linear 0s
}
.try:hover {
    color: #a963f2
}
.purchase-btn {
    font-size: 14px;
    color: #a963f2;
    font-weight: 700;
    letter-spacing: 1.4px;
    border: 1px solid #a963f2;
    display: inline-block;
    padding: 4px 67px;
    border-radius: 3px;
    -webkit-transition: all 0.4s linear;
    -o-transition: all 0.4s linear;
    transition: all 0.4s linear;
    line-height: 50px
}
.pricing_area_five {
    padding: 120px 0
}
.pricing_area_five .price .pricing-box .pricing-header .packeg_typ,
.pricing_area_five .price .pricing-box .pricing-header small {
    color: #ef494d
}
.pricing_area_five .price .pricing-box .try:hover {
    color: #ef494d
}
.pricing_area_five .price .pricing-box .purchase-btn {
    border-color: #ef494d;
    color: #1a264a
}
.pricing_area_five .price .pricing-box:hover .purchase-btn {
    background: #ef494d;
    color: #fff
}
.price_info {
    padding-top: 0
}
.gradient-bg {
    background-image: -moz-linear-gradient(0deg, #4c84ff 0%, #783dff 100%);
    background-image: -webkit-linear-gradient(0deg, #4c84ff 0%, #783dff 100%);
    background-image: -ms-linear-gradient(0deg, #4c84ff 0%, #783dff 100%)
}
.gradient-bg .section_title h2 {
    font-family: "Quicksand", sans-serif
}
.gradient-bg .subcribes .input-group-btn .btn-submit {
    font-family: "Quicksand", sans-serif;
    font-weight: 500;
    color: #4c83ff
}
.blog_area {
    padding: 150px 0
}
.blog-slider .owl-dots {
    margin-top: 55px
}
.blog-slider .owl-dots .owl-dot {
    background: transparent;
}
.blog-slider .owl-dots .owl-dot.active,
.blog-slider .owl-dots .owl-dot:hover {
    background: #f47078
}
.thumbnail-blog {
    -webkit-transition: all 0.3s linear;
    -o-transition: all 0.3s linear;
    transition: all 0.3s linear;
    cursor: pointer;
    margin: 0 0 20px;
    border: 1px solid #ebebeb;
    border-radius: 5px
}
.thumbnail-blog .content {
    padding: 30px
}
.thumbnail-blog h5 {
    font-size: 20px;
    line-height: 30px;
    letter-spacing: 0;
    font-weight: 500;
    color: #444;
    text-transform: capitalize;
    -webkit-transition: all 0.3s linear;
    -o-transition: all 0.3s linear;
    transition: all 0.3s linear;
    -webkit-text-fill-color: initial;
    margin-bottom: 20px
}
.thumbnail-blog h6 {
    font: 400 15px/26px "Quicksand", sans-serif;
    color: #999;
    padding: 5px 0
}
.thumbnail-blog p {
    color: #666;
    padding-bottom: 16px
}
.thumbnail-blog a {
    font-size: 15px;
    line-height: 30px;
    font-family: "Quicksand", sans-serif;
    font-weight: 500;
    color: #666
}
.thumbnail-blog a i {
    padding-left: 10px;
    color: #666
}
.thumbnail-blog:hover {
    border-color: transparent
}
.thumbnail-blog:hover a {
    background-image: -moz-linear-gradient(145deg, #e46a6f 0%, #c36dac 100%);
    background-image: -webkit-linear-gradient(145deg, #e46a6f 0%, #c36dac 100%);
    background-image: -ms-linear-gradient(145deg, #e46a6f 0%, #c36dac 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent
}
.thumbnail-blog:hover a i {
    background-image: -moz-linear-gradient(145deg, #e46a6f 0%, #c36dac 100%);
    background-image: -webkit-linear-gradient(145deg, #e46a6f 0%, #c36dac 100%);
    background-image: -ms-linear-gradient(145deg, #e46a6f 0%, #c36dac 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent
}
.blog_area_two {
    padding: 150px 0 100px
}
.post_box {
    margin-bottom: 50px
}
.post_box .blog-text {
    padding: 30px 40px 0 20px
}
.post_box .blog-text .date {
    margin-bottom: 18px
}
.post_box .blog-text .date li {
    font: 400 14px/14px "Quicksand", sans-serif;
    color: #bebebe;
    text-transform: capitalize;
    display: inline-block;
    padding: 0 12px
}
.post_box .blog-text .date li a {
    color: #bebebe;
    -webkit-transition: all 0.3s linear;
    -o-transition: all 0.3s linear;
    transition: all 0.3s linear
}
.post_box .blog-text .date li a:hover {
    color: #b166ff
}
.post_box .blog-text .date li:first-child {
    padding-left: 0
}
.post_box .blog-text .date li + li {
    border-left: 2px solid #bebebe
}
.post_box .blog-text .title {
    font-size: 24px;
    line-height: 36px;
    padding-bottom: 22px;
    text-transform: initial;
    -webkit-transition: all 0.3s linear;
    -o-transition: all 0.3s linear;
    transition: all 0.3s linear
}
.post_box .blog-text .read_btn {
    font: 400 14px/30px "Quicksand", sans-serif;
    text-transform: capitalize;
    color: #b166ff;
    display: inline-block;
    padding-top: 26px
}
.post_box .blog-text .read_btn span {
    padding-left: 10px;
    -webkit-transition: all 0.3s linear;
    -o-transition: all 0.3s linear;
    transition: all 0.3s linear;
    font-weight: 500
}
.post_box .blog-text .read_btn:hover span {
    padding-left: 2px
}
.post_box .blog-text a.read_btn:hover{
    color: #;
    font-weight: 500
}
.post_box_two .blog-text .date li a:hover {
    color: #8675ff
}
.post_box_two .blog-text:hover .title {
    color: #8675ff
}
.post_box_two .blog-text .read_btn {
    color: #8675ff
}
.blog_area_three {
    padding: 110px 0 100px
}
.blog_area_three .thumbnail-blog {
    background: transparent
}
.blog_area_three .thumbnail-blog .content {
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 0
}
.blog_area_three .thumbnail-blog:hover {
    -webkit-box-shadow: none;
    box-shadow: none
}
.blog_area_three .thumbnail-blog:hover h5,
.blog_area_three .thumbnail-blog:hover a,
.blog_area_three .thumbnail-blog:hover i {
    color: #ef494d;
    -webkit-background-clip: text;
    -webkit-text-fill-color: initial;
    background-image: initial
}
.post_box_four .blog-text .date li a:hover {
    color: #e46a6f;
}
.post_box_four .blog-text .read_btn {
    color: #666;
    font-weight: 500;
    font-size: 15px
}
.blog-section {
    padding-right: 20px
}
.blog-section .blog-items {
    -webkit-transition: all 0.4s linear;
    -o-transition: all 0.4s linear;
    transition: all 0.4s linear;
    margin-bottom: 70px;
    background-color: white;
    -webkit-box-shadow: 0 3px 7px 0 rgba(0, 0, 0, .07);
    box-shadow: 0 3px 7px 0 rgba(0, 0, 0, .07)
}
.blog-section .blog-items .blog-content {
    padding: 30px 40px 26px;
}
.blog-section .blog-items .blog-content h2 {
    font: 500 24px/30px "Quicksand", sans-serif;
    color: #333;
    padding-bottom: 25px
}
.blog-section .blog-items h4 {
    font: 600 18px/30px "Quicksand", sans-serif;
    color: #404040;
    text-transform: capitalize;
    -webkit-transition: all 0.3s linear;
    -o-transition: all 0.3s linear;
    transition: all 0.3s linear
}
.blog-section .blog-items p {
    padding-bottom: 22px;
    color: #555
}
.blog-section .blog-items .post-info {
    padding-top: 5px;
    border-top: 1px solid #f0f0f0
}
.blog-section .blog-items .post-info li {
    font: 400 14px/20px "Quicksand", sans-serif;
    color: #999;
    display: inline-block;
    padding: 20px 0 0
}
.blog-section .blog-items .post-info li a {
    color: #999
}
.blog-section .blog-items .post-info li a:hover {
    color: #4776e6
}
.blog-section .blog-items .post-info li + li {
    margin-left: 10px
}
.blog-section .blog-items .post-info li + li:before {
    content: '';
    width: 1px;
    height: 15px;
    display: inline-block;
    background: #999;
    vertical-align: middle;
    margin-right: 10px
}
.blog-section .blog-items .blog-video iframe {
    border: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
    width: 100%;
    min-height: 400px
}
.blog-section .blog-items:hover h2 {
    color: #4776e6
}
.blog-section .blog-items:last-child {
    margin-bottom: 0
}
.read-more-btn {
    font: 700 14px/36px "Quicksand", sans-serif;
    color: #4776e6;
    text-transform: capitalize
}
.read-more-btn i {
    padding-left: 3px;
    -webkit-transition: all 0.3s linear;
    -o-transition: all 0.3s linear;
    transition: all 0.3s linear
}
.post_box_four .blog-text .read_btn:hover{
    color: 5d5857;
}
.read-more-btn:hover {
    color: #4776e6;
}
.read-more-btn:hover i {
    -webkit-transform: translateX(10px);
    -ms-transform: translateX(10px);
    transform: translateX(10px)
}
.pagination {
    margin-top: 70px;
    margin-bottom: 0;
    text-align: center;
    display: block
}
.pagination span.page-numbers.current,
.pagination a {
    display: inline-block;
    text-align: center;
    width: 34px;
    height: 34px;
    line-height: 34px;
    border: 1px solid transparent;
    font-size: 15px;
    color: #000;
    -webkit-transition: all 0.25s ease;
    -o-transition: all 0.25s ease;
    transition: all 0.25s ease
}
.pagination span.page-numbers.current {
    color: #fff
}
.pagination a:hover,
.pagination a.active {
    background: #e46a6f;
    border-color: #e46a6f;
    color: white
}
.pagination a:last-child {
    border-color: #999;
    color: #999;
    font-size: 19px;
    line-height: 32px
}
.pagination a:last-child:hover {
    border-color: #e46a6f;
    color: white
}
.pagination a + a {
    margin-left: 5px
}
.blog_single_area {
    padding: 120px 0 60px
}
.blog_single_area .blog-sidebar {
    padding-right: 0px!important
}
.blog_single_area .blog-sidebar .post-widget .media .media-left {
    vertical-align: middle
}
.blog_single_area .blog-sidebar .post-widget .media .media-body ul li a {
    color: #666
}
.search_result_area {
    padding: 120px 0
}
.search_result_area .blog-sidebar {
    padding-left: 70px!important;
    padding-right: 0px!important
}
.search_result_area .search_info {
    padding-left: 0px!important
}
.search_result_area .search_info .blog-masonry-item {
    margin-bottom: 10px
}
.search_result_area .search_info .blog-masonry-item .blog-post-related-content .post-info {
    text-transform: capitalize;
    padding-bottom: 10px
}
.search_result_area .search_info .blog-masonry-item .blog-post-related-content .post-info a {
    color: #999;
    font-weight: 400
}
.search_result_area .search_info .blog-masonry-item .blog-post-related-content h2 {
    padding-bottom: 10px
}
.blog_single {
    padding-right: 0
}
.blog_single .blog-items {
    -webkit-box-shadow: none;
    box-shadow: none;
    margin-bottom: 15px
}
.blog_single .blog-items .blog-content {
    padding: 0
}

.blog_single .blog-items .blog-content h2.post_title {
    font-weight: 700;
    line-height: 1.3;
    padding-bottom: 25px;
}

.blog_single .blog-items .blog-content h2 {
    font-size: 32px;
    color: #333;
    padding-bottom: 25px;
}
.blog_single .blog-items .blog-content h3 {
    font: 700 28px "Quicksand", sans-serif;
    margin-top: 0;
}
.blog_single .blog-items .blog-content h4 {
    font: 700 24px "Quicksand", sans-serif;
}
.blog_single .blog-items .blog-content h5 {
    font: 700 20px "Quicksand", sans-serif;
}
.blog_single .blog-items .blog-content h6 {
    font: 700 16px "Quicksand", sans-serif;
}
.blog_single .blog-items .blog-content .post_meta {
    padding-bottom: 25px
}
.blog_single .blog-items .blog-content .post_meta span {
    font: 400 15px/15px "Quicksand", sans-serif;
    color: #999;
    position: relative;
    margin-left: 20px;
    display: inline-block
}
.blog_single .blog-items .blog-content .post_meta span a {
    color: #999
}
.blog_single .blog-items .blog-content .post_meta span:first-child {
    margin-left: 0
}
.blog_single .blog-items .blog-content .post_meta span:first-child:before {
    display: none
}
.blog_single .blog-items .blog-content .post_meta span .post_name {
    color: #333;
    font-weight: 600
}
.blog_single .blog-items .blog-content .post_meta span .post_comments {
    color: #999
}
.blog_single .blog-items .blog-content .post_meta span:before {
    content: "";
    width: 1px;
    height: 100%;
    top: 0;
    left: -10px;
    position: absolute;
    background: #999
}
.blog_single .blog-items .blog-content p {
    font-size: 16px;
    line-height: 26px;
    color: #797988
}
.blog-content blockquote {
    font-family: 'Quicksand', cursive;
    font-size: 25px;
    color: #e46a6f;
    line-height: 30px;
    letter-spacing: 0;
    padding-left: 100px;
    position: relative;
    border: 0;
    margin-top: 20px;
    margin-bottom: 20px;
    z-index: 1
}
.single-post .blog-section .blog-content blockquote p {
    font-family: 'Quicksand', cursive;
    font-size: 25px;
    color: #999;
    line-height: 1.5;
    letter-spacing: 0
}
.blog-content blockquote .quote {
    font-size: 60px;
    font-weight: 400;
    color: #eae9e9;
    position: absolute;
    left: 8px;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    z-index: -1
}
.post_author p {
    font: 400 15px/26px "Quicksand", sans-serif;
    color: #666;
    letter-spacing: .25px;
    padding-top: 30px
}
.post_author .media .media-body p {
    font: 400 14px/26px "Quicksand", sans-serif;
    padding-top: 0
}
.post_author .media .media-body p + p {
    padding-top: 30px
}
.post_tag_info {
    font: 400 14px "Quicksand", sans-serif;
    color: #666;
    overflow: hidden;
    border-bottom: 1px solid #ebebeb;
    padding: 40px 0 20px
}
.post_tag_info .post_tag i {
    color: #999;
    padding-right: 10px
}
.post_tag_info .post_tag a {
    color: #999
}
.post_tag_info .post_tag a:hover {
    color: #e46a6f
}
.post_tag_info .social_icon {
    font-weight: 500;
    color: #999;
    text-transform: capitalize
}
.post_tag_info .social_icon .icon {
    display: inline-block;
    padding-left: 10px
}
.post_tag_info .social_icon a {
    color: #999;
    margin: 0 5px
}
.post_tag_info .social_icon a:hover {
    color: #e46a6f
}
.blog-sidebar {
    padding-left: 20px
}
.blog-sidebar .widget .widget_title {
    font: 700 18px/18px "Quicksand", sans-serif;
    color: #333;
    margin-bottom: 25px
}
.blog-sidebar .widget.categories-widget .widget_title {
    margin-bottom: 30px
}
.blog-sidebar .widget + .widget {
    margin-top: 65px
}
.widget_search .search-form {
    background: #f6f6f6
}
.widget_search .search-form .form-control {
    border: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
    background: transparent;
    height: 48px;
    font-family: "Quicksand", sans-serif;
    font-size: 14px;
    color: #999;
    padding: 0 10px 0 25px
}
.widget_search .search-form .form-control.placeholder {
    color: #9c9c9c
}
.widget_search .search-form .form-control:-moz-placeholder {
    color: #9c9c9c
}
.widget_search .search-form .form-control::-moz-placeholder {
    color: #9c9c9c
}
.widget_search .search-form .form-control::-webkit-input-placeholder {
    color: #9c9c9c
}
.widget_search .search-form .input-group-addon {
    padding: 0;
    background: none;
    border-radius: 0;
    border: 0
}
.widget_search .search-form .input-group-addon button {
    font-size: 15px;
    color: #999;
    border: 0;
    background: transparent;
    padding: 0 25px 0 0
}
.widget_search .search-form:focus {
    border-color: blue
}
.post-widget .media {
    margin-top: 21px;
    border-bottom: 1px solid #e5e5e5;
    padding-bottom: 20px
}
.post-widget .media .media-left {
    padding-right: 20px
}
.post-widget .media .media-body .tn_tittle {
    font: 600 15px/24px "Quicksand", sans-serif;
    color: #333;
    -webkit-transition: all 400ms linear 0s;
    -o-transition: all 400ms linear 0s;
    transition: all 400ms linear 0s;
    display: inline-block
}
.post-widget .media .media-body .tn_tittle:hover {
    color: #4776e6
}
.post-widget .media .media-body ul li {
    display: inline-block
}
.post-widget .media .media-body ul li a {
    font: 700 12px/26px "Quicksand", sans-serif;
    color: #666;
    -webkit-transition: all 400ms linear 0s;
    -o-transition: all 400ms linear 0s;
    transition: all 400ms linear 0s
}
.post-widget .media .media-body ul li a i {
    color: #9c9c9c;
    padding-right: 2px
}
.post-widget .media .media-body ul li a:hover {
    color: #4776e6
}
.post-widget .media .media-body ul li a:hover i {
    color: #4776e6
}
.post-widget .media .media-body ul li:first-child {
    margin-right: 10px
}
.post-widget .media:nth-child(2) {
    margin-top: 0
}
.tag-widget .tag {
    margin-left: 0
}
.tag-widget .tag li {
    display: inline-block;
    margin: 0 0 10px
}
.tag-widget .tag li a {
    font: 400 14px/34px "Quicksand", sans-serif;
    color: #404040;
    border: 1px solid #e0e0e0;
    padding: 0 20px;
    display: block;
    -webkit-transition: all 0.1s linear;
    -o-transition: all 0.1s linear;
    transition: all 0.1s linear
}
.tag-widget .tag li a:hover {
    background: #404040;
    color: #fff
}
.categories-widget .c-list li a {
    font: 400 15px/49px "Quicksand", sans-serif;
    color: #666;
    display: block;
    border-bottom: 1px dashed #ccc
}
.categories-widget .c-list li a i {
    font-size: 15px;
    vertical-align: middle;
    padding-right: 14px
}
.categories-widget .c-list li a:hover {
    color: #4776e6
}
.categories-widget .c-list li:last-child a {
    border-bottom: 0
}
.tweets-widget .tweets li {
    font: 400 16px/28px "Quicksand", sans-serif;
    color: #666
}
.tweets-widget .tweets li a {
    color: #303030
}
.tweets-widget .tweets li a:hover {
    color: #4776e6
}
.tweets-widget .tweets li span {
    color: #404040;
    display: block;
    padding-top: 5px
}
.tweets-widget .tweets li span i {
    color: #9c9c9c;
    padding-right: 10px
}
.tweets-widget .tweets li + li {
    padding-top: 14px
}
.flicker-widget .ri-grid {
    width: 55%
}
.flicker-widget .ri-grid ul {
    width: 356px
}
.flicker-widget .ri-grid ul li {
    height: 112px!important;
    width: 112px!important;
    margin-right: 6px;
    margin-bottom: 6px
}
.blog-grid-area .blog-sidebar {
    padding-left: 0;
    padding-right: 20px
}
.blog-grid-area .blog-section {
    padding-left: 50px;
    padding-right: 0
}
.blog-grid-area .blog-masonry-item {
    margin-bottom: 30px
}
.blog-grid-area .blog-masonry-item .blog-post-related-content h2 {
    text-transform: capitalize
}
.blog-grid-area .pagination {
    margin-top: 10px
}
.blog-masonry-item a {
    display: block
}
.blog-masonry-item a img {
    max-width: 100%;
    width: 100%
}
.blog-masonry-item .blog-post-related-content {
    padding: 25px 0;
    font-family: "Quicksand", sans-serif
}
.blog-masonry-item .blog-post-related-content h2 {
    font: 700 18px/26px "Quicksand", sans-serif;
    letter-spacing: .25px;
    color: #333;
    -webkit-transition: all 0.4s linear;
    -o-transition: all 0.4s linear;
    transition: all 0.4s linear
}
.blog-masonry-item .blog-post-related-content .post-info {
    font-size: 13px;
    line-height: 15px;
    color: #999;
    padding: 8px 0 20px
}
.blog-masonry-item .blog-post-related-content .post-info .post-info-date {
    display: inline-block
}
.blog-masonry-item .blog-post-related-content .post-info .post-author {
    display: inline-block;
    border-left: 1px solid #999;
    padding-left: 7px
}
.blog-masonry-item .blog-post-related-content .post-info .post-author a {
    display: inline-block;
    font-weight: 700;
    color: #565252;
    padding-left: 4px
}
.blog-masonry-item .blog-post-related-content .post-info .post-author a:hover {
    color: #e46a6f
}
.blog-masonry-item .blog-post-related-content p {
    font-size: 15px;
    color: #666;
    letter-spacing: .25px;
    padding-bottom: 18px
}
.blog-masonry-item .blog-post-related-content .read-more-btn {
    color: #e46a6f
}
.blog-masonry-item:hover h2 {
    color: #e46a6f
}
.comment_area {
    padding: 100px 0
}
.comments {
    padding-bottom: 80px
}
.comments .comment {
    margin-top: 50px
}
.comments .comment:first-child {
    margin-top: 0
}
.comments .comment .media-left {
    padding-right: 20px
}
.comments .comment .media-left img {
    border: 1px solid #e46a6f
}
.comments .comment .media-body .commenter-name {
    display: inline-block;
    font: 700 15px/26px "Quicksand", sans-serif;
    color: #333;
    text-transform: capitalize
}
.comments .comment .media-body .commenter-name:after {
    content: "/";
    display: inline-block;
    margin-left: 8px;
    margin-right: 8px
}
.comments .comment .media-body p {
    font: 400 15px/26px "Quicksand", sans-serif;
    color: #666
}
.comments .comment .media-body .reply-btn {
    font: 700 13px/32px "Quicksand", sans-serif;
    color: #333;
    text-transform: capitalize;
    border-bottom: 1px solid transparent
}
.comments .comment .media-body .reply-btn i {
    padding-right: 7px
}
.comments .comment .media-body .reply-btn:hover {
    border-color: #e46a6f;
    color: #e46a6f
}
.comment_text {
    padding-bottom: 5px
}
.comment_text .comment-title {
    font: 700 20px/26px "Quicksand", sans-serif;
    color: #333;
    text-transform: capitalize;
    margin-bottom: 10px
}
.comment_text p {
    font: 400 15px/24px "Quicksand", sans-serif;
    color: #666;
    font-style: italic
}
.contact-form .form-control {
    border-radius: 4px;
    background-color: white;
    -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .08);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .08);
    height: 60px;
    font: 400 12px/26px "Quicksand", sans-serif;
    color: #a6a6a6;
    border-color: transparent;
    padding-left: 30px;
    margin-bottom: 20px
}
.contact-form .form-control.placeholder {
    color: #a6a6a6;
    text-transform: capitalize
}
.contact-form .form-control:-moz-placeholder {
    color: #a6a6a6;
    text-transform: capitalize
}
.contact-form .form-control::-moz-placeholder {
    color: #a6a6a6;
    text-transform: capitalize
}
.contact-form .form-control::-webkit-input-placeholder {
    color: #a6a6a6;
    text-transform: capitalize
}
.contact-form .form-control:focus {
    border-color: #d9e5ff;
    -webkit-box-shadow: 0 10px 20px 0 rgba(0, 0, 0, .08);
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, .08)
}
.contact-form textarea.form-control {
    height: 160px;
    padding-top: 13px
}
.sub_btn {
    font: 700 14px/45px "Quicksand", sans-serif!important;
    color: #e46a6f!important;
    border: 2px solid #e46a6f!important;
    border-radius: 45px!important;
    padding: 0 35px!important;
    background: transparent!important;
    text-transform: capitalize;
    -webkit-transition: all 0.2s linear;
    -o-transition: all 0.2s linear;
    transition: all 0.2s linear;
    margin-top: 10px
}
.sub_btn:hover {
    background: #e46a6f!important;
    color: #fff!important
}
.banner-area {
    padding: 240px 0 187px;
    text-align: center;
    position: relative;
    z-index: 1;
    color: #fff
}
.banner-area:before {
    
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    z-index: -1;
}
.banner-area p {
    font: 400 18px "Quicksand", sans-serif
}
.page-cover-tittle {
    font: 400 55px/65px "Quicksand", sans-serif;
    letter-spacing: 0;
    color: #fff;
    text-transform: capitalize;
    padding-bottom: 15px
}
.clients-logo-area {
    padding: 150px 0
}
.clients-lg-slider .item a {
    display: block
}
.clients-lg-slider .item img {
    margin: 0 auto;
    max-width: 100%;
    width: auto
}
.clients-lg-slider .owl-dots .owl-dot {
    background: transparent;
}
.clients-lg-slider .owl-dots .owl-dot.active,
.clients-lg-slider .owl-dots .owl-dot:hover {
    background: #f47078
}
.swiper-container .color-p .swiper-pagination-bullet,
.owl-dots .owl-dot {
    border: 1px solid #8766e5;
    background: transparent;
}
.clients-logo-one .owl-dots .owl-dot.active,
.clients-logo-one .owl-dots .owl-dot:hover {
    background: #8766e5
}
.partner_logo_area {
    background: #f8fafc;
    text-align: center;
    padding: 25px 0
}
.partner_logo_area img {
    max-width: 100%
}
.clients-logo-two .clients-lg-slider .owl-dots .owl-dot {
    background: transparent;
    border: 1px solid #b166ff
}
.clients-logo-two .clients-lg-slider .owl-dots .owl-dot.active,
.clients-logo-two .clients-lg-slider .owl-dots .owl-dot:hover {
    background: #b166ff
}
.clients-logo-three .clients-lg-slider .owl-dots .owl-dot {
    background: transparent;
    border: 1px solid #8675ff
}
.clients-logo-three .clients-lg-slider .owl-dots .owl-dot.active,
.clients-logo-three .clients-lg-slider .owl-dots .owl-dot:hover {
    background: #8675ff
}
.clients-logo-five {
    padding-bottom: 90px
}
.clients-logo-five .clients-lg-slider .owl-dots .owl-dot {
    display: none
}
.error_page_area {
    background: url(../image/404-bg.jpg) no-repeat scroll center 0/cover;
    position: relative;
    z-index: 1;
    height: 100vh
}
.error_page_area:before {
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: url(../image/dot.png) repeat scroll center 0;
    position: absolute;
    z-index: -1;
    opacity: .9
}
.error_page_area .container {
    height: 100%;
    display: table
}
.error_content {
    display: table-cell;
    vertical-align: middle;
    -ms-flex-item-align: center;
    align-self: center;
    width: 100%;
    text-align: center
}
.error_content h1 {
    font: 700 300px/300px "Quicksand", sans-serif;
    text-shadow: 32.139px 38.302px 10px rgba(5, 5, 5, .1);
    background-image: -webkit-linear-gradient(0deg, #4776e6 0%, #8e54e9 100%);
    background-image: -ms-linear-gradient(0deg, #4776e6 0%, #8e54e9 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    padding-bottom: 50px
}
.error_content h2 {
    font: 700 32px/40px "Quicksand", sans-serif;
    color: #333
}
.error_content p {
    font: 400 17px/24px "Quicksand", sans-serif;
    color: #8b8e94
}
.appland-search {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding-top: 55px
}
.appland-search .form-wrapper {
    width: 568px;
    position: relative
}
.appland-search .form-wrapper input {
    font: 300 16px "Quicksand", sans-serif;
    color: #aaa;
    border-width: 2px;
    border-color: #d3e0fe;
    border-style: solid;
    background-color: rgba(255, 255, 255, .502);
    width: 100%;
    height: 68px;
    border-radius: 45px;
    padding-left: 35px
}
.appland-search .form-wrapper input.placeholder {
    color: #aaa
}
.appland-search .form-wrapper input:-moz-placeholder {
    color: #aaa
}
.appland-search .form-wrapper input::-moz-placeholder {
    color: #aaa
}
.appland-search .form-wrapper input::-webkit-input-placeholder {
    color: #aaa
}
.appland-search .form-wrapper input:focus {
    outline: none
}
.appland-search .form-wrapper .btn {
    position: absolute;
    right: 0;
    top: 0;
    font-size: 20px;
    line-height: 66px;
    padding: 0 40px;
    background: #e46a6f;
    color: #fff;
    border-radius: 45px
}
.appland-search .home_btn {
    font: 700 14px/66px "Quicksand", sans-serif;
    color: #e46a6f;
    text-transform: capitalize;
    border: 2px solid #6b97f8;
    border-radius: 45px;
    padding: 0 38px;
    -webkit-transition: all 0.4s linear;
    -o-transition: all 0.4s linear;
    transition: all 0.4s linear;
    margin-left: 20px;
    display: inline-block
}
.appland-search .home_btn:hover {
    background: #e46a6f;
    color: #fff
}
/*====================================================*/
/*====================================================*/
/*============= Start support area css =================*/
.footer-top {
    background: #2a2a2a;
    padding: 118px 0
}
.footer-top .footer_sidebar .widget {
    font: 400 16px/28px "Quicksand", sans-serif;
    color: rgba(255, 255, 255, .5)
}
.footer-top .footer_sidebar .widget .logo {
    padding-bottom: 15px;
    display: block
}
.footer-top .footer_sidebar .widget .widget_title {
    font: 700 16px/21px "Quicksand", sans-serif;
    color: #fff;
    letter-spacing: .8px;
    padding-bottom: 33px
}
.footer-top .footer_sidebar .widget.about_us_widget .social_icon {
    padding-top: 14px
}
.footer-top .footer_sidebar .widget.about_us_widget .social_icon li {
    display: inline-block
}
.footer-top .footer_sidebar .widget.about_us_widget .social_icon li a {
    font-size: 14px;
    padding: 0 0 0 18px;
    -webkit-transition: all 0.1s linear;
    -o-transition: all 0.1s linear;
    transition: all 0.1s linear;
    background: transparent
}
.footer-top .footer_sidebar .widget.about_us_widget .social_icon li a i {
    color: rgba(255, 255, 255, .5)
}
.footer-top .footer_sidebar .widget.about_us_widget .social_icon li:first-child a {
    padding-left: 0
}
.footer-top .footer_sidebar .widget.widget_contact ul li {
    display: table;
    width: 100%
}
.footer-top .footer_sidebar .widget.widget_contact ul li i {
    float: left;
    font-size: 14px;
    color: rgba(255, 255, 255, .3);
    line-height: 30px;
    width: 30px
}
.footer-top .footer_sidebar .widget.widget_contact ul li .fleft {
    float: left;
    width: calc(100% - 30px)
}
.footer-top .footer_sidebar .widget.widget_contact ul li + li {
    padding-top: 18px
}
.footer-top .footer_sidebar .widget.widget_twitter {
    padding-right: 50px
}
.footer-top .footer_sidebar .widget.widget_twitter .tweets li {
    width: 100%;
    display: table
}
.footer-top .footer_sidebar .widget.widget_twitter .tweets li i {
    float: left;
    width: 35px;
    font-size: 16px;
    line-height: 30px;
    color: rgba(255, 255, 255, .2)
}
.footer-top .footer_sidebar .widget.widget_twitter .tweets li .tweets-text {
    float: left;
    width: calc(100% - 35px)
}
.footer-top .footer_sidebar .widget.widget_twitter .tweets li .tweets-text a {
    opacity: 1;
    color: #fff;
    -webkit-transition: all 0.1s linear;
    -o-transition: all 0.1s linear;
    transition: all 0.1s linear
}
.footer-top .footer_sidebar .widget.widget_twitter .tweets li + li {
    padding-top: 25px
}
.footer-top .footer_sidebar .widget.widget_instagram .instagram-feed {
    margin-left: -3px;
    margin-right: -3px
}
.footer-top .footer_sidebar .widget.widget_instagram .instagram-feed li {
    display: inline-block;
    padding: 5px 3px 5px 3px
}
.footer-top .footer_sidebar .widget.widget_instagram span {
    font-size: 14px;
    letter-spacing: .2px;
    padding-top: 17px;
    display: block
}
.footer-top .footer_sidebar .widget.widget_instagram span a {
    color: #fff
}
.footer_bottom {
    background: #242424;
    font: 400 16px/20px "Quicksand", sans-serif;
    color: rgba(255, 255, 255, .3);
    padding: 30px 0
}
.footer_bottom a {
    color: rgba(255, 255, 255, .3)
}
.footer_four .footer-top .footer_sidebar .widget.widget_contact ul li .fleft a:hover {
    color: #fff
}
.footer_bottom .footer-menu {
    width: 100%;
    text-align: right
}
.footer_bottom .footer-menu li {
    display: inline-block
}
.footer_bottom .footer-menu li + li {
    padding-left: 38px
}
.footer_two .footer-top .footer_sidebar .widget.about_us_widget .social_icon li:hover i {
    color: #b166ff;
    -webkit-text-fill-color: initial
}
.footer_two .footer-top .footer_sidebar .widget.widget_contact ul li .fleft a:hover,
.footer_two .footer-top .footer_sidebar .widget.widget_twitter .tweets li .tweets-text a:hover,
.footer_two .footer-top .footer_sidebar .widget.widget_instagram span a:hover {
    color: #b166ff;
    -webkit-text-fill-color: initial
}
.footer_two .footer_bottom a:hover {
    color: #b166ff;
    -webkit-text-fill-color: initial
}
.footer_three .footer-top .footer_sidebar .widget.about_us_widget .social_icon li:hover i {
    color: #8675ff;
    -webkit-text-fill-color: initial
}
.footer_three .footer-top .footer_sidebar .widget.widget_contact ul li .fleft a:hover,
.footer_three .footer-top .footer_sidebar .widget.widget_twitter .tweets li .tweets-text a:hover,
.footer_three .footer-top .footer_sidebar .widget.widget_instagram span a:hover {
    color: #8675ff;
    -webkit-text-fill-color: initial
}
.footer_three .footer_bottom a:hover {
    color: #8675ff;
    -webkit-text-fill-color: initial
}
.footer_five .footer-top .footer_sidebar .widget.about_us_widget .social_icon li:hover i {
    color: #ef494d;
    -webkit-text-fill-color: initial
}
.footer_five .footer-top .footer_sidebar .widget.widget_contact ul li .fleft a:hover,
.footer_five .footer-top .footer_sidebar .widget.widget_twitter .tweets li .tweets-text a:hover,
.footer_five .footer-top .footer_sidebar .widget.widget_instagram span a:hover {
    color: #ef494d;
    -webkit-text-fill-color: initial
}
.footer_five .footer_bottom a:hover {
    color: #ef494d;
    -webkit-text-fill-color: initial
}
.footer-six .footer-top .footer_sidebar .widget.widget_contact ul li .fleft a:hover,
.footer-six .footer-top .footer_sidebar .widget.widget_twitter .tweets li .tweets-text a:hover,
.footer-six .footer-top .footer_sidebar .widget.widget_instagram span a:hover,
.footer-six .footer-top .footer_sidebar .widget.about_us_widget .social_icon li:hover i,
.footer-six .footer_bottom a:hover {
    color: #4c83ff;
    -webkit-text-fill-color: inherit
}
.footer_area_seven {
    background: #292c34;
    font: 300 14px "Quicksand", sans-serif;
    color: #b4b8c2;
    text-transform: capitalize;
    padding: 71px 0
}
.footer_area_seven a {
    color: #b4b8c2;
    -webkit-transition: all 0.2s linear;
    -o-transition: all 0.2s linear;
    transition: all 0.2s linear
}
.footer_area_seven a:hover {
    color: #e46a6f
}
.footer_area_seven .copy_right a {
    color: #e46a6f
}
.footer_area_seven .support_menu li {
    display: inline-block;
    float: none
}
.footer_area_seven .support_menu li:first-child a {
    border: 0
}
.footer_area_seven .support_menu li a {
    padding: 0 20px;
    border-left: 1px solid #6a7183
}
.footer_area_seven .support_menu li a:hover {
    background: transparent;
    color: #e46a6f
}
.footer_area_seven .footer_icon {
    text-align: right
}
.footer_area_seven .footer_icon a + a {
    padding-left: 10px
}
.app_banner_area {
    min-height: 100vh;
    position: relative;
    z-index: 1
}
.app_banner_area .d_flex {
    height: 100%
}
.app_banner_area .bg_overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: -12px;
    left: 0;
    z-index: -1
}
.app_banner_area .bg_overlay img {
    position: absolute;
    left: 0;
    width: 100%
}
.app_banner_texts {
    margin-left: -130px
}
.app_banner_texts h2,
.app_banner_texts p {
    font-family: 'Quicksand', sans-serif
}
.app_banner_texts h2 {
    margin: 0;
    font-size: 60px;
    font-weight: 500;
    line-height: 70px;
    color: #282835;
    letter-spacing: -.12px
}
.app_banner_texts p {
    font-size: 18px;
    font-weight: 400;
    line-height: 30px;
    color: #797988;
    margin: 0;
    padding: 29px 0 35px
}
.app_banner_btn {
    font-size: 16px;
    line-height: 17px;
    font-weight: 700;
    font-family: 'Quicksand', sans-serif;
    padding: 20px 46px;
    background-color: rgb(228, 106, 111);
    box-shadow: 0 10px 37.2px 2.8px rgba(56, 2, 144, .2);
    border-radius: 45px;
    border: 1px solid transparent;
    color: #fff;
    display: inline-block;
    transition: all 0.2s linear
}
.app_banner_btn:hover {
    color: #e46a6f;
    border-color: #e46a6f;
    background: transparent
}
.app_banner_btn_two {
    font-size: 15px;
    line-height: 17px;
    letter-spacing: .7px;
    padding: 0 5px 2px;
    font-weight: 700;
    font-family: 'Quicksand', sans-serif;
    color: #49515a;
    border-bottom: 1px solid #49515a;
    margin-left: 50px;
    transition: all 0.2s linear
}
.app_banner_btn_two:hover {
    color: #e46a6f;
    border-color: #e46a6f;
}
.app_screen {
    position: absolute
}
.app_screen:nth-child(1) {
    top: 100px
}
.app_screen:nth-child(2) {
    right: -135px;
    top: 145px
}
.app_screen:nth-child(3) {
    top: 462px;
    left: -20px
}
.app_screen:nth-child(4) {
    right: -220px;
    top: 392px
}
.d_flex {
    display: flex;
}
.flex {
    flex: 1;
    align-self: center;
}
.row-reverse {
    flex-direction: row-reverse
}
.new_exclusive_features_area {
    padding: 160px 0 170px;
    position: relative;
}
.features_container {
    border-radius: 7px;
    background-color: rgb(255, 255, 255);
    box-shadow: 0 20px 51px 9px rgba(0, 0, 0, .08);
    max-width: 1435px;
    margin: 0 auto;
    padding: 118px 0 100px;
    position: relative;
}
.features_container:before {
    content: "";
    position: absolute;
    background: url(../image/pattern.png) no-repeat scroll bottom right;
    width: 100%;
    height: 100%;
    right: -110px;
    z-index: -1;
}
.new_ex_features_item {
    padding: 0 40px 20px
}
.new_features_icon {
    position: relative;
    margin-bottom: 40px;
}
.new_features_icon i {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 56px;
    color: #e46a6f;
}
.title_h3 {
    font-size: 20px;
    font-weight: 700;
    color: #282835;
    font-family: 'Quicksand', sans-serif;
    margin-top: 0;
}
.p_font {
    font-size: 16px;
    line-height: 28px;
    font-weight: 400;
    color: #797988;
    font-family: 'Quicksand', sans-serif
}
.new_ex_features_item h3 {
    margin-bottom: 16px;
}
.new_section_heading {
    padding-bottom: 80px;
}
.new_section_heading h2 {
    font-size: 36px;
    line-height: 35px;
    color: #282835;
    font-family: 'Quicksand', sans-serif;
    font-weight: 700;
    margin-top: 0;
}
.triangle_shape {
    position: absolute;
    left: 0;
    width: 1135px;
    height: 950px;
    z-index: -1;
    top: 100px;
}
.major_function_area {
    padding: 100px 0
}
.new_app_mockup {
    position: relative;
    z-index: 1;
}
.pt_100 {
    padding-top: 100px;
}
.new_app_mockup.small_shap:before {
    content: "";
    background: url(../image/pattern.png) no-repeat scroll bottom right;
    width: 100%;
    height: 100%;
    right: -50px;
    bottom: 0;
    position: absolute;
    z-index: -1;
}
.back_img {
    position: absolute;
    top: 0;
    right: -70px;
    z-index: -1;
}
.app_mockup {
    padding: 20px 0 50px;
}
.app_mockpu_box_shadow img {
    border-radius: 20px;
    box-shadow: 0 20px 51px 9px rgba(0, 0, 0, .08);
}
.new_app_mockup_left {
    padding-top: 70px;
}
.new_app_mockup_left.small_shap:before {
    right: auto;
    left: 0;
    background-position: bottom center;
}
.new_app_mockup_left .back_img {
    right: auto;
    left: -60px;
}
.new_app_mockup_right {
    padding-top: 30px;
}
.new_app_mockup_right .back_img {
    left: 0;
}
.mojar_function_content.pd_right {
    padding-right: 100px;
}
.mojar_function_content.pd_left {
    padding-left: 100px;
}
.mojar_function_content .title_h3 {
    font-size: 22px;
    line-height: 34px;
    color: #49515a;
    padding-top: 35px;
    padding-bottom: 15px;
}
.mojar_function_content .app_banner_btn_two {
    margin-left: 0;
    margin-top: 26px;
    display: inline-block;
}
.new_awesome_features_area {
    background: #f8f8ff;
    padding: 112px 0 15px;
    position: relative;
    z-index: 1;
}
.new_awesome_features_area .round_shape {
    position: absolute;
    width: auto;
    height: auto;
    bottom: 0;
    right: 80px;
    z-index: -1;
}
.features_item_info {
    padding-top: 50px;
}
.n_features_item {
    margin-bottom: 90px;
}
.n_features_item .f_icon {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    display: inline-block;
    text-align: center;
    font-size: 26px;
    line-height: 70px;
    color: #fff;
    margin-bottom: 35px;
}
.n_features_item .title_h3 {
    color: #71777f;
}
.new_features_app .f_app {
    position: absolute;
}
.f_app_one {
    bottom: 120px;
    right: 10px;
}
.f_app_one img {
    animation: pulse 1s linear infinite
}
.f_app_two {
    right: -150px;
}
/*=============== contact_area css =============*/
.contact_area{
}
.contact_info{
    padding-bottom: 100px;
}
.contact_info_item{
    text-align: center;
}
.contact_info_item h5{
    font-size: 20px;
    line-height: 24px;
    color: #282835;
    font-weight: 500;
    font-family: "Quicksand", sans-serif;
    margin-bottom: 0px;
}
.contact_info_item p,.contact_info_item a{
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    color: #797988;
    font-family: "Quicksand", sans-serif;
    margin-bottom: 0px;
    transition: color 0.2s linear;
}
.contact_info_item a:hover{
    color: #e46a6f;
}
.contact_info_item .contact-icon{
    width: 60px;
    height: 60px;
    border-radius: 50%;
    text-align: center;
    line-height: 60px;
    font-size: 16px;
    background: #e46a6f;
    color: #fff;
    box-shadow: 0px 0px 0px 5px rgba(93, 88, 247, 0.12);
    display: block;
    margin: 0 auto 28px;
}
/*========== contact_form_section css =======*/
.contact_form_section{}
.contact_form{
    
}
.contact_form .form-group .form-control{
    background: #f8f8fc;
    border: 1px solid #e9eef3;
    border-radius: 3px;
    box-shadow: none;
    font-size: 14px;
    line-height: 30px;
    color: #a2aab3;
    height: 64px;
    padding: 6px 30px;
}
.contact_form .form-group .form-control:focus{
    border-color: rgb(223, 223, 249);
    background-color: rgb(255, 255, 255);
    box-shadow: 0px 10px 20px 0px rgba(0, 28, 59, 0.08);
}
.contact_form .form-group{
    margin-bottom: 30px;
}
.contact_form .form-group .form-control.placeholder {
    color: #a2aab3;
}

.contact_form .form-group .form-control:-moz-placeholder {
    color: #a2aab3;
}

.contact_form .form-group .form-control::-moz-placeholder {
    color: #a2aab3;
}

.contact_form .form-group .form-control::-webkit-input-placeholder {
    color: #a2aab3;
}
.contact_form .form-group:last-child{
    margin-bottom: 0px;
}
.contact_form .form-group textarea.form-control{
    height: 200px;
    padding-top: 15px;
}
.contact_form .form-group .thm-btn{
    width: 100%;
    font-size: 14px;
    line-height: 30px;
    font-weight: 500;
    letter-spacing: 5px;
    color: #e46a6f;
    background: #FFF;
    border-radius: 45px;
    padding: 8px 0px;
    border: 2px solid #e46a6f;
    box-shadow: none;
    text-transform: capitalize;
    transition: background 0.3s linear, color 0.3s linear;
}
.contact_form .form-group .thm-btn:hover{
    background: #e46a6f;
    color: #FFF;
}

.google-maps{
    height: 500px;
}