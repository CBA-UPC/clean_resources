/* version: 8 */
@charset "UTF-8";
@-moz-keyframes spin {
    100% {
        -moz-transform: rotate(360deg); } }
@-webkit-keyframes spin {
    100% {
        -webkit-transform: rotate(360deg); } }
@keyframes spin {
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg); } }
@keyframes fadeout {
    0% {
        opacity: 1; }
    66% {
        opacity: 0.5; }
    100% {
        opacity: 0; } }
@-webkit-keyframes fadeout {
    0% {
        opacity: 1; }
    66% {
        opacity: 0.5; }
    100% {
        opacity: 0; } }
@keyframes fadein {
    0% {
        opacity: 0; }
    66% {
        opacity: 0.5; }
    100% {
        opacity: 1; } }
@-webkit-keyframes fadein {
    0% {
        opacity: 0; }
    66% {
        opacity: 0.5; }
    100% {
        opacity: 1; } }

@font-face {
    font-family: iranyekan;
    font-style: normal;
    font-weight: 300;
    src: url('../fonts/iranyekanwebregular.eot');
    src: url('../fonts/iranyekanwebregular.eot?#iefix') format('embedded-opentype'),  /* IE6-8 */
        url('../fonts/iranyekanwebregular.woff') format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
        url('../fonts/iranyekanwebregular.ttf') format('truetype');
    font-display: swap;
}

li {
    list-style: none; }

a, a:hover {
    text-decoration: none; }

ul {
    padding: 0; }

.row {
    margin: 0; }

body {
    margin: 0;
    padding: 0;
    display: block;
    margin: 0 auto;
    /* font-family: dana, tahoma;*/
    font-family: iranyekan !important;
    padding-top: 25px;
    padding: 0;
    overflow-x: hidden;
    background-color: #ffffff;/* #f1f3f4;*/
    /*  font-variation-settings: "wght" 400, "wdth" 130, "slnt" 0, "DOTR" 0, "KASH" 0, "DOTS" 0*/
}
/*@supports (font-variation-settings: normal) {
    body {
    font-family: 'dana VF', tahoma;
}
}*/
body.index header {
    background: #fff;
    padding: 0 10px;
    border-bottom: none; }
body.index header .right-hedaer {
    padding: 10px;
    float: right;
    background: #e3e4e8; }
body.index header .social-icons {
    float: left; }
body.index header .bottom-left-side {
    float: left;
    margin-left: 0; }
body.index header .left-side {
    padding: 10px 0 0 0; }
body.index header .left-side:before {
    display: none; }
body.index header .search-btn {

}
.live-stream {
    color: #000;
    font-size: 12px;
    padding: 6px;
    position: relative;
    top: -5px;
    float: left;
    margin: 0 15px; }
.live-stream:before {
    content: '';
    position: absolute;
    background: url("../images/sprite.png") no-repeat -120px -25px;
    width: 16px;
    height: 12px;
    right: -15px;
    top: 8px; }
body.index .main-slider {
    margin: 0; }
body.index .hash-tags {
    margin: 5px 8px 5px 0px;
}
body.index .main-menu .menu li {
    width: 24.6%; }
body.index .main-menu .menu li a {
    padding: 7px 11px; } /** menu li height */
body.index .main-menu .menu li a:hover {
    background: #e3e4e8;
    color: #000; }

body.index .main-menu .sub-menu  {margin-top: -5px;}
body.index .main-menu .sub-menu li {margin: 0px;
                                    width: 49%; }
body.index .main-menu .sub-menu li:first-child a:before {
    display: none; }
body.index .main-menu .sub-menu li a {
    padding: 6px 2px;}


body.index .main-menu .sub-menu li a:hover {
    background: #e3e4e8;
    color: #000; }
.libi {
    padding: 0;
    width: 120px;
}
.sublibi {
    margin-top: -5px;
    margin-bottom: -5px;}

.clearfix:after {
    content: '';
    display: block;
    height: 0;
    ;
    clear: both; }
/*animation div--------------------*/
/* baraye section akhbar zende az in class animation estefade shavad */
.animation {
    display:inline-block;
    overflow:hidden;
    white-space: nowrap;
}

.animation:last-of-type {
    width:0px;
    animation: reveal 1s infinite;
}

.animation:last-of-type span {
    margin-left:-355px;
    animation: slidein 1s infinite;
}

@keyframes showup {
    0% {opacity:0;}
    20% {opacity:1;}
    80% {opacity:1;}
    100% {opacity:0;}
}

@keyframes slidein {
    0% { margin-left:-800px; }
    20% { margin-left:-800px; }
    35% { margin-left:0px; }
    100% { margin-left:0px; }
}

@keyframes reveal {
    0% {opacity:0;width:0px;}
    20% {opacity:1;width:0px;}
    30% {width:355px;}
    80% {opacity:1;}
    100% {opacity:0;width:355px;}
}



/* end of live news application */
/*animation div--------------------*/
header {
    background: #e3e4e8;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #aaaeb4; }
header .padding-left {
    padding-left: 15px; margin-top: 5px; }/** margin top header */
header .header-option {
    float: right;
    padding: 5px;
    margin: 0;
}
header .header-option .tools-btn, header .header-option .menu-btn {
    margin-top: 5px; margin-bottom: 5px;  }
header .header-option .tools-btn svg, header .header-option .menu-btn svg {
    width: 17px;
    height: 17px; }
header .header-option .tools-btn svg path, header .header-option .menu-btn svg path {
    fill: #a4aeb9; } /** color of option botton */
header .left-side {
    float: left;
    position: relative;
}
header .left-side:before {
    content: '';
    position: absolute;
    width: 1px;
    height: 100%;
    background: #cdd1d7;
    right: -12px;
    top: 0;
}

.flex-style {
    display: flex; }

.logo {
    float: right;
    margin: 5px 10px;

}
.logo img {
    width: 155px;
    height: auto;
}

.date-text {
    font-size: 12px; }

.search-btn {
}
.search-btn svg {
    width: 20px;
    height: 20px; }

.search-button {
    padding: 9px 12px 3px 12px; }

.grey-bg {
    background: #eaf7ff; /*f7f8f9  eaf7ff*/

}

.white-bg {
    background: #fff; }

.padding-sides {
    padding: 0 31px; }
.font11 {
    font-size: 11px; }
.main-menu {
    background: #fff;
    position: relative; }
.main-menu .menu > li {
    float: right;  text-align: center;
    width: calc(100% / 15); }
.main-menu .menu > li:hover > a span {
    top: -3px; }
.main-menu .menu > li:hover > a:before {
    height: 100%;
    top: 0;
    transition: all ease 0.3s; }
.main-menu .menu > li > a {
    color: #000;
    font-size: 12px;
    padding: 10px 15px;
    display: block;
    transition: all ease 0.3s;
    position: relative; }
.main-menu .menu > li > a span {
    position: relative;
    top: 0px;
    transition: all ease 0.3s; }
.main-menu .menu > li > a:before {
    content: '';
    position: absolute;
    width: 0px;
    height: 90%;
    right: 0;
    top: -2px;
    background: #fafafb;
    transition: all ease 0.8s; }

.main-menu .sub-menu {
    position: static;
    width: 100%;
    height: auto;
    background: #fff;
    padding: 0;
    border-top: 1px solid #fafafb;
}
.main-menu .sub-menu li {
    width: 25%;
    display: inline-block;
    text-align: center;
    float: right;
    padding: 0;
    margin-top: -5px;
    margin-bottom: -5px;
}
.main-menu .sub-menu li:first-child {
    position: relative; }
.main-menu .sub-menu li:first-child a:before {
    content: '';
    position: absolute;
    background: url("../images/sprite.png") no-repeat -190px -17px;
    width: 16px;
    height: 12px;
    right: -15px;
    top: 8px; }
.main-menu .sub-menu li:last-child {
    border-left: none; }
.main-menu .sub-menu li a {
    display: inline-block;
    color: #000;
    font-size: 11px;
    padding: 10px;
    margin: 0;
    position: relative; }
.main-menu .sub-menu li a span {
    position: relative;
    top: 0px;
    transition: all ease 0.3s; }

.main-menu .sub-menu li a:hover:after {
    bottom: 0; }
.main-menu .sub-menu li a:hover span {
    top: -3px; }

.menu, .sub-menu {
    border-top: none; }
.menu > li, .sub-menu > li {
    display: block;
    float: none;
    width: 100%;
    display: block; }
.menu > li > a, .sub-menu > li > a {
    overflow: hidden; }
.menu > li > a:after, .sub-menu > li > a:after {
    content: '';
    position: absolute;
    height: 2px;
    width: 100%;
    background: #46caf7; /** logo color fcb712*/
    bottom: -10px;
    right: 0px;
    transition: all ease 0.3s; }/** line under menu hoever*/
.menu > li > a:hover:after, .sub-menu > li > a:hover:after {
    bottom: 0; }

.main-slider {
    margin: 15px 0; }
.main-slider .item img {
    min-height: 185px;
    background: url("../images/loading.gif") center center no-repeat, #fff;
    background-size: 15%;
    max-height: 250px;
    overflow: hidden; }

.wrapper-news-part {
    padding: 0 0 0 10px;
}
.news-part {
    padding: 25px 8px 10px 8px;
    box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.05);
    border-radius: 0px;
    float: right;
    margin: 0 0 20px 0;
    white-space: nowrap;
    text-align: right;
    text-overflow: ellipsis;
}

.box-title {
    margin: 0px;
    padding: 5px 0;
    border-top: 1px solid #b6b6b7; }
.box-title .title-txt a{
    position: relative;
    top: -15px;
    font-size: 14px;
    color: #006aa9;
    padding: 10px 9px 10px 13px;
    background: #fff;
}
.box-titleh1 {
    position: relative;
    top: -15px;
    font-size: 14px;
    color: #006aa9;
    padding: 10px 9px 10px 13px;
    background: #fff;
}
.box-title .title-txt .orange-txt {
    color: #fcb813;
    margin-left: 2px; }

.margin-bottom-15 {
    margin-bottom: 15px; }

.more-news-box {
    float: left;
    background: #fff;
    position: relative;
    top: -25px;
    font-size: 10px;
    padding: 10px 20px; }
.more-news-box a {
    color: #a4aeb9;
    background: #f0f2f5;
    border-radius: 15px;
    border: 2px solid #a6b0bb;
    width: 105px;
    display: block;
    padding: 5px 0;
    text-align: center;
    transition: all ease 0.4s; }
.more-news-box a:hover {
    background: #a4aeb9;
    color: #f0f2f5;
    border-color: #f0f2f5; }

.right-padding25 {
    padding-right: 25px; }

.right-left25 {
    padding-left: 25px; }

.ad-banners {
    width: 100%;
    height: auto;
    min-height: 100vh;
    background: #ccc;
    position: relative; }

.news-list-itemsn {
    border: 1px solid #f6f7f8;
    border-right: none;
    background: #ccc;
    margin-bottom: 0px;
    padding-left: 0;
    padding-right: 0;
    -webkit-box-shadow: 5px 1px 4px -3px #333;
    -moz-box-shadow: 5px 1px 4px -3px #333;
    box-shadow: -1px 0px 2px -3px #333; }
.news-list-itemsn li {
    overflow:hidden;
    width:100%;
    float:right;
    height:17px;
    padding: 0 5px 0 5px;
    background: #f9f9f9;
    border-right: 2px solid #00a0ff;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.news-list-itemsn li:nth-child(2n) {
    background: #fff;
    border-right-color: #e3e4e8; }
.news-list-itemsn li > a {
    display: block;
    height: 17px;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #000;/*#00131f*/
    font-size: 12px;
    padding:0; }


.news-list-items {
    border: 1px solid #f6f7f8;
    border-right: none;
    background: #ccc;
    margin-bottom: 4px;
    -webkit-box-shadow: 5px 1px 4px -3px #333;
    -moz-box-shadow: 5px 1px 4px -3px #333;
    box-shadow: -1px 0px 2px -3px #333; }
.news-list-items li {
    overflow:hidden;width:100%;float:right;height:30px;
    padding-right: 10px;
    padding: 4px 7px 4px 3px;
    background: #f9f9f9;
    border-right: 2px solid #00a0ff; }
.news-list-items li:nth-child(2n) {
    background: #fff;
    border-right-color: #e3e4e8; }
.news-list-items li .refrence {
    font-size: 11px;
    left: 25px;
    top: 4px;
    color: #777;
    min-width: 88px;
    overflow: hidden;
    text-align: center; }
.news-list-items li .refrence2 {
    font-size: 11px;
    left: 25px;
    top: 4px;
    color: #777;
    padding-left: 5px;
    overflow: hidden;
    text-align: right; }
.news-list-items li > a {
    display: block;
    height: 22px;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #142a37;/* color: #00131f; */
    font-size: 12px;
    padding: 4px 0 4px 10px; }
.news-list-items li > a:hover {
    color: #017dc6; }
.news-list-items li .rating-pan {
    font-size: 11px;
    margin-right: 5px;
    margin-left: 5px;
    margin-top: 4px;
    color:#666;
}
.news-list-items li .rating-pan .refrence {
    font-size: 11px;
}
.news-list-items li .rating-pan .refrence2 {
    font-size: 11px;
}
.news-list-items li .like-btn-selected {
    color: #ff6060;
    font-size: 14px;
    position: relative;
    top: 0px;
    left: 0px;
    margin-right: 10px;
    transition: all ease 0.3s; }
.news-list-items li .like-btn {
    color: #b2b2b2;
    font-size: 14px;
    position: relative;
    top: 0px;
    left: 0px;
    margin-right: 10px;
    transition: all ease 0.3s; }
.news-list-items li .rating-pan .like-btn.active, .news-list-items li .rating-pan .like-btn:hover {
    color: #ff6060; /** old color of like-btn #fcb813*/
}
.news-list-items li .rating-pan.active .refrence {
    left: 105px; }
.news-list-items li .rating-pan.active .refrence2 {
    left: 105px; }
.news-list-items li .rating-pan.active .rate-btn {
    left: 70px;
    z-index: -1;
    -webkit-animation: 0.6s ease 0s normal forwards 0.6 fadeout;
    animation: 0.6s ease 0s normal forwards 0.6 fadeout; }
.news-list-items li .rating-pan.active .rate {
    width: auto;
    opacity: 1; }
.news-list-items li .rating-pan.active .like-btn {
    -webkit-animation: 0.8s ease 0s normal forwards 0.8 fadein;
    animation: 0.8s ease 0s normal forwards 0.8 fadein;
    display: inline-block;
    margin-left: 0px; }

.rate-btn {
    width: 15px;
    height: 15px;
    position: absolute;
    cursor: pointer;
    top: 2px;
    left: 6px;
    z-index: 10;
    transition: all  ease 0.6s; }
.rate-btn:before {
    content: '★';
    position: absolute;
    top: -2px;
    right: 0px;
    font-size: 18px;
    font-weight: bold;
    color: #a4aeb9;
    width: 15px;
    height: 20px; }

.rate {
    float: left;
    height: 20px;
    padding: 0 10px;
    direction: ltr;
    width: 0;
    opacity: 0;
    transition: all  ease 0.6s; }

.rate:not(:checked) > input {
    position: absolute;
    top: -9999px; }

.rate:not(:checked) > label {
    float: right;
    width: 15px;
    overflow: hidden;
    white-space: nowrap;
    cursor: pointer;
    font-size: 18px;
    color: #a4aeb9; }

.rate:not(:checked) > label:before {
    content: '★'; }

.rate > input:checked ~ label {
    color: #ffc700; }

.rate:not(:checked) > label:hover,
.rate:not(:checked) > label:hover ~ label {
    color: #ffc700; }

.rate > input:checked + label:hover,
.rate > input:checked + label:hover ~ label,
.rate > input:checked ~ label:hover,
.rate > input:checked ~ label:hover ~ label,
.rate > label:hover ~ input:checked ~ label {
    color: #ffc700; }

.container {
    padding-left: 10px;
}
.middle-news-container {
    background: #eee;
    padding: 35px 0px 10px; }
.middle-news-container .title-txt, .middle-news-container .more-news-box {
    background: #eee;
    font-size: 14px; }
.middle-news-container .title-txt a, .middle-news-container .more-news-box a {
    width: 175px; }

.middle-news {
    padding: 0 15px 10px;
    border-top: 0;
    margin-bottom: 10px;
    cursor: grab; }
.middle-news .owl-stage-outer {
    margin: 0 auto; }
.middle-news .owl-dots {
    padding: 7px; }
.middle-news .owl-dots .owl-dot span {
    margin: 5px 2px !important;
    background: #bcc0cc !important; }
.middle-news .owl-dots .owl-dot.active span {
    background: #606873 !important; }
.middle-news .owl-nav .owl-next {
    top: auto;
    bottom: 0;
    left: 7px;
    background: url("../images/sprite.png") no-repeat -11px -13px !important;
    width: 22px;
    height: 22px; }
.middle-news .owl-nav .owl-prev {
    top: auto;
    bottom: 0;
    right: 12px;
    background: url("../images/sprite.png") no-repeat -11px -13px !important;
    width: 22px;
    height: 22px;
    transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -ms-transform: rotate(180deg); }
.middle-news .item figure {
    background: #fff;
    border-radius: 7px;
    overflow: hidden; }
.middle-news .item figure > a {
    background: #000;
    overflow: hidden; }
.middle-news .item figure > a img {
    width: 100%;
    height: 198px;
    object-fit: cover;
    filter: grayscale(100);
    -webkit-filter: grayscale(100);
    -moz-filter: grayscale(100);
    -ms-filter: grayscale(100);
    transition: all ease 0.3s; }
.middle-news .item figure figcaption {
    text-align: center;
    padding: 10px;
    background: #fff; }
.middle-news .item figure figcaption a {
    color: #000;
    font-size: 17px;
    line-height: 30px;
    margin-bottom: 10px; }
.middle-news .item figure figcaption .middle-extra-info li {
    width: 50%;
    float: right; }
.middle-news .item figure figcaption .middle-extra-info li img {
    width: 30px;
    height: 30px;
    overflow: hidden;
    border-radius: 50%;
    display: inline-block;
    margin-left: 3px; }
.middle-news .item figure figcaption .middle-extra-info li span {
    font-size: 11px; }
.middle-news .item figure figcaption .middle-extra-info li .news-time {
    position: relative;
    display: block;
    text-align: center;
    margin-top: 9px; }
.middle-news .item figure figcaption .middle-extra-info li .news-time:before {
    content: '';
    position: absolute;
    background: url("../images/sprite.png") no-repeat -231px -18px;
    width: 12px;
    height: 12px;
    right: 3px;
    top: 0; }
.middle-news .item:hover figure > a img {
    filter: grayscale(0);
    -webkit-filter: grayscale(0);
    -moz-filter: grayscale(0);
    -ms-filter: grayscale(0); }

.seprator {
    width: 100%;
    height: 1px;
    background: #e3e4e8;
    margin: 0;
    border: none; }

.no-padding {
    padding: 0; }

.no-left-padding {
    padding-left: 0; }

.bottom-images-list {
    margin-top: 100px; }
.bottom-images-list li {
    width: 33.33%;
    float: right;
    text-align: center;
    padding: 15px 0px 15px 15px; }
.bottom-images-list li:nth-child(3n) {
    padding-left: 0; }
.bottom-images-list li a img {
    width: 100%;
    height: 228px;
    object-fit: cover; }

.bottom-news-items {
    padding: 0;
    padding-bottom: 10px;
    border: none;
    border-radius: 0 0 5px 5px;
    border-bottom: 1px solid #e3e4e8; }
.bottom-news-items .caption h3 {
    color: #434a54;
    font-size: 13px;
    font-size: 14px;
    font-weight: bold;
    line-height: 23px;
    margin: 10px 0; }
.bottom-news-items .caption .card-txt {
    font-weight: 500;
    color: #99a3b1;
    font-size: 12px;
    text-align: justify; }
.bottom-news-items .caption .more-card {
    color: #606873;
    font-weight: 400;
    font-size: 12px; }
.bottom-news-items .caption .more-card:hover {
    color: #000; }
.bottom-news-items .caption .extra-options {
    float: left; }
.bottom-news-items .caption .extra-options li {
    margin-right: 10px;
    float: right;
    colo: #99a3b1;
    font-size: 11px; }
.bottom-news-items .caption .extra-options li span {
    margin-left: 4px;
    color: #99a3b1; }
.bottom-news-items .caption .extra-options li i {
    color: #99a3b1; }

.banner {
    margin-top: 40px; }
.banner img {
    width: 100%; }

footer {
    background: #434a54; }
footer .seprator {
    background: #32353b !important;
    height: 1px !important; }
footer .bottom-logo img {
    width: 150px;
    height: auto; }
footer .footer-links {
    margin-top: 20px; }
footer .footer-links li {
    float: right;
    overflow: hidden; }
footer .footer-links li a {
    position: relative;
    color: #ffffff;
    font-size: 12px;
    padding: 10px 15px;
    overflow: hidden;
    transition: all ease 0.6s;
    right: 0; }
footer .footer-links li a:hover {
    color: #fcb712; }
footer .footer-notes {
    text-align: center; }
footer .footer-notes li h1{
    color: #fff;
    font-size: 12px; }
footer .footer-notes li h2 {
    color: #fff;
    font-size: 12px; }

.social-icons {
    text-align: center;
    margin-bottom: 10px; }
.social-icons li {
    display: inline-block;
    margin: 0 3px;
    position: relative; }
.social-icons li a svg {
    width: 18px;
    height: 18px; }
.social-icons li a svg path {
    transition: all ease 0.2s; }
.social-icons li.rss-icon a:hover svg path {
    fill: #ffc107; }
.social-icons li.android-icon a:hover svg path {
    fill: #33b30d !important; }
.social-icons li.apple-icon a:hover svg path {
    fill: #f7f7f7; }
.social-icons li.twitter-icon a:hover svg path {
    fill: #09bcdc; }
.social-icons li.insta-icon a:hover svg path {
    fill: #dc287d; }

.video-player {
    width: 100%;
    overflow: hidden;
    height: 250px;
    object-fit: cover;
    margin-top: 50px;
    border-radius: 7px 7px 0 0; }

.video-caption {
    background: #fff;
    padding: 10px;
    border-top: 1px solid #f0f2f5;
    color: #000;
    font-size: 14px;
    text-align: justify;
    font-weight: 500;
    line-height: 20px;
    border-bottom: 1px solid #e3e4e8;
    border-radius: 0 0 7px 7px; }
.video-caption .title {
    color: #a4aeb9;
    margin: 0 0 15px;
    font-size: 17px;
    font-weight: bold; }

.hash-tags {
    
    border-radius: 0px;
    margin-bottom: 5px;
    margin-left: 10px;
    text-align: center;
    font-size: 13px;
    overflow: hidden; }
.hash-tags > span {
    margin-right: 5px;
    color: #142a37;
    /* color: 4a4a4a;*/
}
.hash-tags a {
    /* color: #2ea4e6;*/
    color: #006aa9;
    display: inline-block;
    font-weight: normal;
    font-size: 13px;
}
.hash-tags a:hover {
    /* color: #2ea4e6;*/
    color: #2ea4e6;
    text-decoration: underline;
}
.toplinksd {
    padding: 0 5px 0 5px;
    background-color: #fff;
    border-radius: 0px;
    float: right;
    margin: 0 0 10px 0;
    white-space: nowrap;
    text-align: right;
    text-overflow: ellipsis;

}
.toplinksd2 {
    padding: 0 5px 0 5px;
    background-color: #fff;
    border-radius: 0px;
    float: right;
    margin: 0 0 5px 0;
    white-space: nowrap;
    text-align: right;
    text-overflow: ellipsis;

}
.toplinks {
    padding: 5px 0 0 0;
    margin-right: 8px;

}
.toplinkli {
    background-color: #fff;
    border-right-color: #e3e4e8;
}
.news-list-toplink {
    border-right: none;
    background: #ccc;
    margin-bottom: 4px;
    -webkit-box-shadow: 5px 1px 4px -3px #333;
    -moz-box-shadow: 5px 1px 4px -3px #333;
    box-shadow: -1px 0px 2px -3px #333; }
.news-list-toplink li {
    overflow:hidden;width:100%;float:right;height:30px;
    padding-right: 10px;
    padding: 4px 7px 4px 3px;
    background: #fff;
    border-right: 2px solid #00a0ff; }
.news-list-toplink li .refrence {
    font-size: 11px;
    left: 25px;
    top: 4px;
    color: #777;
    min-width: 88px;
    overflow: hidden;
    text-align: center; }
.minw70{
    width: 70px;
}
.minw80{
    width: 80px;
}
.minw88{
    width: 88px;
}
.minw98{
    width: 98px;
}
.marle80{
    margin-left: 80px;
    font-size: 12px;
    margin-top: -30px;
}
.marle30{
    margin-left: 30px;
    margin-top: -30px;
}
.padding-top-45{
    padding-top: 45px;
}
.news-list-toplink li .refrence2 {
    font-size: 11px;
    left: 25px;
    top: 4px;
    color: #777;
    overflow: hidden;
    text-align: right; }
.news-list-toplink li > a {
    display: block;
    height: 22px;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #142a37;/*#00131f*/
    font-size: 12px;
    padding: 4px 0; }
.news-list-toplink li > a:hover {
    color: #017dc6; }
.news-list-toplink li .rating-pan {
    font-size: 11px;
    margin-right: 5px;
    margin-left: 5px;
    margin-top: 4px;
    color:#666;
}
.news-list-toplink li .rating-pan .refrence {
    font-size: 11px;
}
.news-list-toplink li .rating-pan .refrence2 {
    font-size: 11px;
}
.news-list-toplink li .like-btn {
    color: #b2b2b2;
    font-size: 14px;
    position: relative;
    top: 0px;
    left: 0px;
    margin-right: 5px;
    transition: all ease 0.3s; }
.news-list-toplink li .rating-pan .like-btn.active, .news-list-toplink li .rating-pan .like-btn:hover {
    color: #ff6060; /** old color of like-btn #fcb813*/
}
.news-list-toplink li .rating-pan.active .refrence {
    left: 105px; }
.news-list-toplink li .rating-pan.active .refrence2 {
    left: 105px; }
.news-list-toplink li .rating-pan.active .rate-btn {
    left: 70px;
    z-index: -1;
    -webkit-animation: 0.6s ease 0s normal forwards 0.6 fadeout;
    animation: 0.6s ease 0s normal forwards 0.6 fadeout; }
.news-listtoplink li .rating-pan.active .rate {
    width: auto;
    opacity: 1; }
.news-list-toplink li .rating-pan.active .like-btn {
    -webkit-animation: 0.8s ease 0s normal forwards 0.8 fadein;
    animation: 0.8s ease 0s normal forwards 0.8 fadein;
    display: inline-block;
    margin-left: 0px; }

.bottom-slider {
    margin-top: 0; }

.close-menu {
    position: absolute;
    left: 5px;
    top: 5px;
    width: 35px;
    height: 30px;
    z-index: 9999; }
.close-menu:after, .close-menu:before {
    content: "";
    position: absolute;
    width: 25px;
    height: 2px;
    background: #000;
    top: 15px;
    right: 5px;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg); }
.close-menu:after {
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg); }

.top-footer-cont {
    background: #6b7074;
    padding: 15px 0; }

.bottom-footer-cont {
    background: #5a5f64;
    padding: 15px 0;

}


@media only screen and (max-width: 479px) {
    .main-slider .item img {
        object-fit: cover; }

    .padding-sides {
        padding: 0; }

    .more-news-box {
        padding: 10px; }

    .bottom-images-list li {
        width: 100%;
        float: none;
        padding: 0 10px;
        margin-bottom: 10px; }

    .video-player, .bottom-images-list {
        margin-top: 10px; }

    .banner {
        margin: 10px 0; }

    footer .footer-links li a {
        padding: 10px; }

    .container {
        width: 100%; }

    .right-padding25 {
        padding: 0; }

    .news-part {
        margin-bottom: 20px; }

    .main-menu {
        position: fixed;
        width: 80%;
        top: 0;
        right: -100%;
        height: 100%;
        z-index: 10000;
        overflow-y: auto;
        transition: all ease 0.5s; }
    .main-menu.active {
        right: 0; }
    .main-menu .menu {
        border-top: none; }
    .main-menu .sub-menu {
        border-top: none; }

    .main-menu .menu > li {
        display: block;
        float: none;
        width: 100% ;
        display: block;
        text-align: right;
        margin: 0;
        padding-right: 10px;
    }
    .main-menu .sub-menu > li {
        display: block;
        float: none;
        width: 100% ;
        display: block;
        text-align: right;
        padding-right: 20px;
    }

    .ap-tooltip {
        display: none !important; }
    .refrence {
        display: none !important; }
    .refrence2 {
        display: none !important; }

    footer .footer-links {
        width: 80%;
        margin-left: 0; }

    footer .bottom-logo img {
        width: 100%;
        height: auto; }

    footer .footer-links li {
        width: 100%;
        margin-bottom: 10px;
        display: block;
        float: none;
        margin-left: 0; }

    .bottom-images-list li:nth-child(3n) {
        padding-left: 10px; }

    .logo {
        margin-right: 10px;
        width: 80%; }
    /* .logo a img {
         width: 130px;
     }*/

    footer .footer-links li a {
        font-size: 11px; }

    header {
        padding: 10px 0; }

    header .padding-left {
        padding: 0; }

    .news-list-items li > a {
        /*  width: 63%;*/
    }

    header .header-option .tools-btn img, header .header-option .menu-btn img {
        width: 20px;
        height: 20px; }

    .no-left-padding, .no-padding {
        padding: 15px; }

    .bottom-images-list li, .bottom-images-list li:nth-child(3n) {
        padding: 0; }

    .right-padding25 {
        padding-right: 0; }

    .main-slider {
        margin: 0; }
    .top-left-side{

    }
    .wrapper-news-part {
        padding: 0 0 0 0;
    }
    .marle80{
        margin-top: -40px;
    }
    .marle30{
        margin-top: -40px;
    }
    .advdiv-native{
        border-left: 0px;
    }
}
@media only screen and (min-width: 480px) and (max-width: 764px) {
    .padding-sides {
        padding: 0; }

    .main-slider .item img {
        object-fit: cover; }

    .video-player, .bottom-images-list {
        margin-top: 10px; }

    .banner {
        margin: 10px 0; }

    footer .footer-links li a {
        padding: 10px; }

    .container {
        width: 100%; }

    .right-padding25 {
        padding: 0; }

    .news-part {
        margin-bottom: 20px; }

    .main-menu {
        position: fixed;
        width: 70%;
        top: 0;
        right: -100%;
        height: 100%;
        z-index: 10000;
        overflow-y: auto;
        transition: all ease 0.5s; }
    .main-menu.active {
        right: 0; }
    .main-menu .menu, .main-menu .sub-menu {
        border-top: none; }
    .main-menu .menu > li {
        display: block;
        float: none;
        width: 100% ;
        display: block;
        text-align: right;
        margin: 0;
        padding-right: 10px;
    }
    .main-menu .sub-menu > li {
        display: block;
        float: none;
        width: 100% ;
        display: block;
        text-align: right;
        padding-right: 20px;
    }

    .no-left-padding, .no-padding {
        padding: 15px; }

    .bottom-images-list li, .bottom-images-list li:nth-child(3n) {
        padding: 0; }

    .ap-tooltip {
        display: none !important; }

    footer .footer-links li {
        width: 33.33%;
        margin-bottom: 5px; }

    .right-padding25 {
        padding-right: 0; }
    .wrapper-news-part {
        padding: 0 0 0 0;
    }
    .advdiv-native{
        border-left: 0px;
    }

}
@media only screen and (min-width: 765px) and (max-width: 1000px) {
    .padding-sides {
        padding: 0 10px; }

    .banner {
        margin: 10px 0; }

    footer .footer-links li a {
        padding: 10px; }

    .container {
        width: 100%;
    }

    .news-part {
        margin-bottom: 20px; }

    .main-menu {
        position: fixed;
        width: 40%;
        top: 0;
        right: -100%;
        height: 100%;
        z-index: 10000;
        overflow-y: auto;
        transition: all ease 0.5s; }
    .main-menu.active {
        right: 0; }
    .main-menu .menu, .main-menu .sub-menu {
        border-top: none; }
    .main-menu .menu > li {
        display: block;
        float: none;
        width: 100% ;
        display: block;
        text-align: right;
        margin: 0;
        padding-right: 10px;
    }
    .main-menu .sub-menu > li {
        display: block;
        float: none;
        width: 100% ;
        display: block;
        text-align: right;
        padding-right: 20px;
    }

    footer .footer-links {
        text-align: center; }

    footer .footer-links li {
        float: none;
        display: inline-block; }

    .ap-tooltip {
        display: none !important; }

    .right-padding25 {
        padding-right: 0; }
    .wrapper-news-part {
        padding: 0 0 0 0;
    }
    .advdiv-native{
        border-left: 0px;
    }

}
@media only screen and (min-width: 1001px) and (max-width: 1249px) {
    .padding-sides {
        padding: 0 10px; }

    .banner {
        margin-top: 5px; }

    footer .footer-links li a {
        padding: 10px; }

    .menu-btn, .close-menu {
        display: none; }
    .menu-sm{
        font-size: 11.5px;
    }
}
@media only screen and (min-width: 1250px) and (max-width: 1400px) {
    .menu-btn, .close-menu {
        display: none; } }
@media only screen and (min-width: 1401px) and (max-width: 1750px) {
    .menu-btn, .close-menu {
        display: none; } }
@media only screen and (min-width: 1750px) {
    .menu-btn, .close-menu {
        display: none; } }
.ap-tooltip {

    position: absolute;
    width: 450px;
    height: auto;
    background: rgba(72, 79, 88, 0.9);
    display: none;
    z-index: 900; }
.ap-tooltip:before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 10px 10px 10px;
    border-color: transparent transparent rgba(72, 79, 88, 0.8) transparent;
    right: 20px;
    top: -10px; }
.ap-tooltip .ap-tooltiptitle {
    color: #fff;
    font-size: 12px;
    border-bottom: 1px solid #424952;
    padding: 10px;
    max-width: 100%;
    height: 35px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap; }
.ap-tooltip .ap-tooltip-body {
    padding: 10px; }
.ap-tooltip .ap-tooltip-body figure {
    width: 100px;
    float: right;
    position: relative;
    background: #fff;
    z-index: 1; }
.ap-tooltip .ap-tooltip-body figure:before {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    border: 4px solid #00a0ff;
    border-right: 0;
    border-left: 0;
    border-radius: 50px;
    right: 40%;
    top: 40%;
    z-index: -1;
    -webkit-animation: spin 2s linear infinite;
    -moz-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite; }
.ap-tooltip .ap-tooltip-body figure img {
    width: 100px;
    height: auto;
    background-size: 10%;
    z-index: 1; }
.ap-tooltip .ap-tooltip-body > p {
    width: 75%;
    float: left;
    text-align: justify;
    padding-left: 10px;
    color: #fff;
    font-size: 12px; }

/**
 * Owl Carousel v2.2.1
 * Copyright 2013-2017 David Deutsch
 * Licensed under  ()
*/
.owl-carousel, .owl-carousel .owl-item {
    -webkit-tap-highlight-color: transparent;
    position: relative; }

.owl-carousel {
    display: none;
    width: 100%;
    z-index: 1; }

.owl-carousel .owl-stage {
    position: relative;
    -ms-touch-action: pan-Y;
    -moz-backface-visibility: hidden; }

.owl-carousel .owl-stage:after {
    content: ".";
    display: block;
    clear: both;
    visibility: hidden;
    line-height: 0;
    height: 0; }

.owl-carousel .owl-stage-outer {
    position: relative;
    overflow: hidden;
    -webkit-transform: translate3d(0, 0, 0); }

.owl-carousel .owl-item, .owl-carousel .owl-wrapper {
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -ms-backface-visibility: hidden;
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0); }

.owl-carousel .owl-item {
    min-height: 1px;
    float: left;
    -webkit-backface-visibility: hidden;
    -webkit-touch-callout: none; }

.owl-carousel .owl-item img {
    display: block;
    width: 100%; }

.owl-carousel .owl-dots.disabled, .owl-carousel .owl-nav.disabled {
    display: none; }

.no-js .owl-carousel, .owl-carousel.owl-loaded {
    display: block; }

.owl-carousel .owl-dot, .owl-carousel .owl-nav .owl-next, .owl-carousel .owl-nav .owl-prev {
    cursor: pointer;
    cursor: hand;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none; }

.owl-carousel.owl-loading {
    opacity: 0;
    display: block; }

.owl-carousel.owl-hidden {
    opacity: 0; }

.owl-carousel.owl-refresh .owl-item {
    visibility: hidden; }

.owl-carousel.owl-drag .owl-item {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none; }

.owl-carousel.owl-grab {
    cursor: move;
    cursor: grab; }

.owl-carousel.owl-rtl {
    direction: rtl; }

.owl-carousel.owl-rtl .owl-item {
    float: right; }

.owl-carousel .animated {
    animation-duration: 1s;
    animation-fill-mode: both; }

.owl-carousel .owl-animated-in {
    z-index: 0; }

.owl-carousel .owl-animated-out {
    z-index: 1; }

.owl-carousel .fadeOut {
    animation-name: fadeOut; }

@keyframes fadeOut {
    0% {
        opacity: 1; }
    100% {
        opacity: 0; } }
.owl-height {
    transition: height .5s ease-in-out; }

.owl-carousel .owl-item .owl-lazy {
    opacity: 0;
    transition: opacity .4s ease; }

.owl-carousel .owl-item img.owl-lazy {
    transform-style: preserve-3d; }

.owl-carousel .owl-video-wrapper {
    position: relative;
    height: 100%;
    background: #000; }

.owl-carousel .owl-video-play-icon {
    position: absolute;
    height: 80px;
    width: 80px;
    left: 50%;
    top: 50%;
    margin-left: -40px;
    margin-top: -40px;
    cursor: pointer;
    z-index: 1;
    -webkit-backface-visibility: hidden;
    transition: transform .1s ease; }

.owl-carousel .owl-video-play-icon:hover {
    -ms-transform: scale(1, 1);
    transform: scale(1, 1); }

.owl-carousel .owl-video-playing .owl-video-play-icon, .owl-carousel .owl-video-playing .owl-video-tn {
    display: none; }

.owl-carousel .owl-video-tn {
    opacity: 0;
    height: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    transition: opacity .4s ease; }

.owl-carousel .owl-video-frame {
    position: relative;
    z-index: 1;
    height: 100%;
    width: 100%; }

.owl-nav .owl-prev {
    position: absolute;
    top: 40%;
    right: 10px; }

.owl-nav .owl-next {
    position: absolute;
    top: 40%;
    left: 10px; }

.owl-carousel .owl-item img {
    width: 100%; }

.owl-carousel .owl-item .item > a {
    display: block; }

/**
 * Owl Carousel v2.2.1
 * Copyright 2013-2017 David Deutsch
 * Licensed under  ()
*/
.owl-theme .owl-dots, .owl-theme .owl-nav {
    text-align: center;
    -webkit-tap-highlight-color: transparent; }

.owl-theme .owl-nav {
    margin-top: 10px; }

.owl-theme .owl-nav [class*=owl-] {
    color: #FFF;
    font-size: 14px;
    margin: 5px;
    padding: 4px 7px;
    background: #D6D6D6;
    display: inline-block;
    cursor: pointer;
    border-radius: 3px; }

.owl-theme .owl-nav [class*=owl-]:hover {
    background: #4DC7A0;
    color: #FFF;
    text-decoration: none; }

.owl-theme .owl-nav .disabled {
    opacity: .5;
    cursor: default; }

.owl-theme .owl-nav.disabled + .owl-dots {
    margin-top: 10px; }

.owl-theme .owl-dots .owl-dot {
    display: inline-block;
    zoom: 1; }

.owl-theme .owl-dots .owl-dot span {
    width: 10px;
    height: 10px;
    margin: 5px 7px;
    background: #D6D6D6;
    display: block;
    -webkit-backface-visibility: visible;
    transition: opacity .2s ease;
    border-radius: 30px; }

.owl-theme .owl-dots .owl-dot.active span, .owl-theme .owl-dots .owl-dot:hover span {
    background: #4DC7A0; }

.item a, .item a img, .item img {
    display: block;
    width: 100%; }

.owl-carousel .item {
    width: 100%;
    position: relative; }

.audioWrapper {
    background: #ffffff;
    position: relative;
    min-height: 45px;
    border-radius: 0px;
    direction: ltr;
    padding-top: 6px; }

.functionControl, .volumeControl, .main-content .functionControl, .main-content .volumeControl {
    color: #fff;
    text-decoration: none;
    text-indent: -1000px;
    display: block;
    overflow: hidden;
    float: left;
    width: 20px;
    height: 20px;
    margin-top: 5px;
    margin-left: 10px; }

.volumeControl {
    float: right;
    margin: 5px 10px 0 0; }

.pauseState {
    background: url("../images/sprite.png") no-repeat -81px -11px;
    width: 27px;
    height: 26px; }

.playState {
    background: url("../images/sprite.png") no-repeat -50px -11px;
    width: 26px;
    height: 26px; }

.muteState {
    background: url("../images/sprite.png") no-repeat -140px -11px;
    width: 26px;
    height: 26px; }

.loudState {
    background: url("../images/sprite.png") no-repeat -111px -11px;
    width: 26px;
    height: 26px; }

.volumeWrapper {
    float: right;
    min-height: 7px;
    min-width: 100px;
    background: rgba(0, 0, 0, 0.3);
    position: relative;
    margin-top: 1px;
    margin-right: 1px; }

.currentTime, .durationTime {
    float: left;
    margin-top: 10px;
    font-size: 11px;
    margin-left: 10px;
    color: #a6aaae; }

.durationTime {
    display: none; }

.progressWrapper {
    position: relative;
    float: left;
    margin-left: 10px;
    min-height: 5px;
    top: 14px;
    background: #e3e4e8;
    z-index: 10;
    border-radius: 10px;
    height: 7px; }

.progressBar {
    position: absolute;
    min-height: 5px;
    width: 0%;
    background: #44c7f4;
    border-radius: 10px;
    height: 7px; }

body.night {
    background: #0d0f14; }
body.night header {
    background: #0d0f14; }
body.night .middle-news-container {
    background: #0d0f14; }
body.night .social-icons svg path {
    fill: #fff !important; }
body.night .date-text {
    color: #fff; }
body.night .date-text2 {
    color: #fff; }
body.night .grey-bg {
    background: #151820; }
body.night .main-menu, body.night .sub-menu {
    background: #0d0f14 !important; }
body.night .main-menu li a, body.night .sub-menu li a {
    color: #fff !important; }
body.night .white-bg, body.night .more-news-box, body.night .box-title, body.night .title-txt {
    background-color: #0d0f14; }
body.night .thumbnail {
    background: #0d0f14; }
body.night .thumbnail .caption .card-txt, body.night .thumbnail .caption .more-card, body.night .thumbnail .caption h3, body.night .thumbnail .caption .extra-options li span, body.night .thumbnail .caption .extra-options li i {
    color: #fff; }
body.night .middle-news .item figure figcaption a {
    color: #fff; }
body.night .box-title .title-txt {
    color: #fff; }
body.night .middle-news .item figure figcaption {
    background: #151820; }
body.night .middle-news .item figure figcaption .middle-extra-info li .news-time, body.night .middle-news .item figure figcaption .middle-extra-info li span {
    color: #fff; }
body.night .more-news-box a {
    background: #151820;
    color: #fff; }
body.night .middle-news .owl-dots {
    background: #0d0f14; }
body.night .news-list-items li {
    background: #151820; }
body.night .news-list-items li:nth-child(2n) {
    background: #40485f; }
body.night .news-list-items li a {
    color: #fff; }
body.night .news-list-toplink li {
    background: #151820; }
body.night .news-list-toplink li a {
    color: #fff; }
body.night .social-icons {
    text-align: center;
    margin-bottom: 10px; }
body.night .social-icons li {
    display: inline-block;
    margin: 0 3px;
    position: relative; }
body.night .social-icons li a svg {
    width: 18px;
    height: 18px; }
body.night .social-icons li a svg path {
    transition: all ease 0.2s; }
body.night .social-icons li.rss-icon a:hover svg path {
    fill: #ffc107 !important; }
body.night .social-icons li.android-icon a:hover svg path {
    fill: #33b30d !important; }
body.night .social-icons li.apple-icon a:hover svg path {
    fill: #f7f7f7 !important; }
body.night .social-icons li.twitter-icon a:hover svg path {
    fill: #09bcdc !important; }
body.night .social-icons li.insta-icon a:hover svg path {
    fill: #dc287d !important; }
body.night .tools-btn svg path, body.night .menu-btn svg path, body.night .search-btn svg path {
    fill: #eee; }
body.night .close-menu:after, body.night .close-menu:before {
    background: #fff; }
body.night .top-footer-cont {
    background: #151820; }
body.night .bottom-footer-cont {
    background: #0d0f14; }
body.night .video-caption {
    background: #0d0f14;
    color: #fff; }
body.night .video-caption .title {
    color: #fff; }
.margin0{
    margin: 0;
}
.width100{width: 100%}
.height200{height:200px;overflow: hidden}
.height130{height:130px;overflow: hidden;}
.prelative{position: relative;}
.vpart{
    font-size: 12px;padding: 0 5px;
}
.overflow_hidden{
    overflow: hidden;
}
.margin-top-5{
    margin-top: 5px;
}
.vlink{
    font-size: 12px;
    color: #142a37;/*#00131f*/
}
.vresource{
    font-size: 11px;
    color: #777;
}
.vresource .like-btn{
    color: #b2b2b2;
}
.padding5rl{padding: 0 5px 0 5px}
.pic_box{padding:10px;background:#FFF;border-radius:10px;-moz-border-radius:10px;box-shadow:1px 2px 3px rgba(0,0,0,0.12);border:1px solid #fff;padding-bottom: 10px;overflow:hidden;}
.pic_box ul{width:100%;}
.pic_box ul li{display:block;width:100%;float:right;padding:0 5px 0 0;margin:0;font-size:11px;overflow:hidden;height:20px;}
.vimage{background:url(../images/play4.png) no-repeat center center;}
.vbox1{height:100%;width:100%;overflow: hidden;position: absolute;top: 0;left: 0}
.video-image{opacity: 0;  z-index: 1000}
.video-image:hover{opacity: 0.8;  z-index: 1000}
.paddingheader{
    padding:5px ;
}
.logodiv{
    background-color: #eaf7ff;
}
body.night .toplinksd{
    background-color: #151820;
}
body.night .toplinksd2{
    background-color: #151820;
}
body.night .logodiv{
    background-color: #151820;
}
body.night .title-txt a{
    background-color: #0d0f14;
}
body.night .top-footer-cont{
    background-color: #212632;
}
body.night .hash-tags,body.night .hash-tags span,body.night .hash-tags a{
    background-color: #40485f;
    color: #fff;
}
body.night .boxbettag,body.night .boxbettag span,body.night .boxbettag a{
    background-color: #40485f;
    color: #fff;
}
body.night .advdiv-native{
    background-color: #40485f;
    border-left: 10px solid #14171f;
    color: #fff;
}
body.night .rlinks a{
    color: #fff;
    font-size: 13px;
}
body.night .rlinks a:hover {
    color: #fff;
    text-decoration: underline;
}

.topbaner{
    margin: 5px 5px 5px 2px;
}
.topbaner_right{
    float: right;
    margin: 5px 5px 0 0;
}
.topbaner_left{
    float: left;
    margin: 5px 0 0 0;
}
.padding0{
    padding: 0;
}
.padding-top-10{
    padding-top: 10px
}
.paddingbanner{
    padding: 0 5px 0 0;
}
.hash-tags-padding{
    padding: 0 0 0 5px;
}
.marginleft-hash-tags{
    margin-left: 10px;
}
.right{float:right}
.left{float:left}

.topbutton {
    height:50px;
    padding-right: 10px;
    position:fixed;
    right:5px;
    bottom:5px;
    z-index:1;
    background-repeat:no-repeat;
    display:none;
    color: #00a0ff;
    /*color: #fcb712;*/
    font-size: 36px;
    opacity: 0.5;
}
.topbutton:hover {
    color: #00a0ff;
    opacity: 0.9;
}
.width50 {
    width: 49%
}
.advdiv-native {
    background:#fff;
    margin: -15px 0 5px 0;
    padding: 5px 0 0 0 ;
    border-left: 10px solid #eaf7ff;
}

.adv-part {
    box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.05);
    border-radius: 0px;
    padding: 10px 30px 5px 30px;
    margin: 0;
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.width120 {
    width: 120px;
}

.aselected{
    font-weight: bold;
    color: #006aa9;
}
.aselected{
    font-weight: bold;
    color: #006aa9;
}
.page_box {
    margin-top: -5px;
}
.page_box a{
    color: #000;
    font-size: 12px;
}
.page_box a:hover {
    color: #017dc6;
    text-decoration: underline;
}
.rlinks a{
    color: #000;
    font-size: 13px;
}
.rlinks a:hover {
    color: #017dc6;
    text-decoration: underline;
}

.newsview-footer{position: fixed;bottom: 0;background: #fff;height: 25px; overflow: hidden}
.paddingbottom5{padding-bottom:5px}
.centerclass{background-color:#fff;}
.margin20{
    margin: 20px;
}
.mybox1 {width:100%; padding:10px; background:#FFF; margin:5px;  overflow:hidden;}
.mybox2 {width:100%; height: 25px;  background:#FCFCFC; overflow:hidden;padding-right:10px;padding-left:10px; border-bottom: 1px solid #eee;}
.boxtitle-txt{font-size: 13px;position: relative;top: -15px;background: #fff;padding: 10px 0px 10px 13px;margin-right: -5px;}
body.night .boxtitle-txt{background: #0d0f14;}
.boxbettag{
    white-space: normal;
    margin-left: 15px;
    margin-top: -10px;
    margin-bottom: 10px;
    background-color: #e3e3e3;
    padding: 10px 15px;
    text-align: center;
    font-size: 13px;
}
.boxbettag a {
    /* color: #2ea4e6;*/
    color: #006aa9;
    padding: 5px 7px;
    display: inline-block;
    font-weight: normal;
    font-size: 13px;
}
.boxbettag a:hover {
    /* color: #2ea4e6;*/
    color: #2ea4e6;
    text-decoration: underline;
}
.rss-icon a svg {
    width: 17px;
    height: 17px;
}
.topnava{color: #006aa9;padding: 7px 7px;display: inline-block;font-weight: normal;font-size: 13px;}
.mbox{height: 70px}
.linkbox1{height: 40px;overflow: hidden;text-align: center;}
.linkbox2{background-color: #fff;margin-left: 0px;padding: 0px 0px 10px 0px;height: 25px;text-align: center;}
.linkbox2a{padding: 0px 7px 20px 7px}   </a>
              </li>
          <li class="menu-id182">
        <a href="/بخش-%DA%A9%D8%B1%D8%AF%D8%B3%D8%AA%D8%A7%D9%86-149" title=" کردستان" target="_blank">
           کردستان                  </a>
              </li>
          <li class="menu-id183">
        <a href="/بخش-%DA%A9%D8%B1%D9%85%D8%A7%D9%86-150" title=" کرمان" target="_blank">
           کرمان                  </a>
              </li>
          <li class="menu-id184">
        <a href="/بخش-%DA%A9%D8%B1%D9%85%D8%A7%D9%86%D8%B4%D8%A7%D9%87-151" title=" کرمانشاه" target="_blank">
           کرمانشاه                  </a>
              </li>
          <li class="menu-id185">
        <a href="/بخش-%DA%A9%D9%87%DA%AF%DB%8C%D9%84%D9%88%DB%8C%D9%87-%D8%A8%D9%88%DB%8C%D8%B1%D8%A7%D8%AD%D9%85%D8%AF-152" title=" کهگیلویه و بویراحمد" target="_blank">
           کهگیلویه و بویراحمد                  </a>
              </li>
          <li class="menu-id186">
        <a href="/بخش-%DA%AF%D9%84%D8%B3%D8%AA%D8%A7%D9%86-153" title=" گلستان" target="_blank">
           گلستان                  </a>
              </li>
          <li class="menu-id187">
        <a href="/بخش-%DA%AF%DB%8C%D9%84%D8%A7%D9%86-154" title=" گیلان" target="_blank">
           گیلان                  </a>
              </li>
          <li class="menu-id188">
        <a href="/بخش-%D9%84%D8%B1%D8%B3%D8%AA%D8%A7%D9%86-155" title=" لرستان" target="_blank">
           لرستان                  </a>
              </li>
          <li class="menu-id189">
        <a href="/بخش-%D9%85%D8%A7%D8%B2%D9%86%D8%AF%D8%B1%D8%A7%D9%86-156" title=" مازندران" target="_blank">
           مازندران                  </a>
              </li>
          <li class="menu-id190">
        <a href="/بخش-%D9%85%D8%B1%DA%A9%D8%B2%DB%8C-157" title=" مرکزی" target="_blank">
           مرکزی                  </a>
              </li>
          <li class="menu-id191">
        <a href="/بخش-%D9%87%D8%B1%D9%85%D8%B2%DA%AF%D8%A7%D9%86-158" title=" هرمزگان" target="_blank">
           هرمزگان                  </a>
              </li>
          <li class="menu-id192">
        <a href="/بخش-%D9%87%D9%85%D8%AF%D8%A7%D9%86-159" title=" همدان" target="_blank">
           همدان                  </a>
              </li>
          <li class="menu-id193">
        <a href="/بخش-%DB%8C%D8%B2%D8%AF-160" title=" یزد" target="_blank">
           یزد                  </a>
              </li>
      </ul>
      </li>
          <li class="menu-id317">
        <a href="/بخش-%D8%A7%D8%AE%D8%A8%D8%A7%D8%B1-%D8%B3%D9%84%D8%A8%D8%B1%DB%8C%D8%AA%DB%8C-%D9%87%D8%A7-6" title=" چهره ها" target="_blank">
           چهره ها                  </a>
              </li>
          <li class="menu-id37">
        <a href="/بخش-%D9%88%DB%8C%D8%AF%DB%8C%D9%88-%D9%87%D8%A7-46" title=" ویدیو ها" target="_blank">
           ویدیو ها                       <i class="fa fa-angle-left submenu-desktop-icn" aria-hidden="true"></i>
                   </a>
        


<ul class="sub-menu" itemscope="" itemtype="http://schema.org/SiteNavigationElement">
        <li class="menu-id315">
        <a href="/بخش-%D9%86%D9%85%D8%A7%D9%87%D9%86%DA%AF-224" title=" نماهنگ" target="_blank">
           نماهنگ                  </a>
              </li>
      </ul>
      </li>
          <li class="menu-id199">
        <a href="/بخش-%D8%B9%DA%A9%D8%B3-168" title="عکس" target="_blank">
          عکس                  </a>
              </li>
          <li class="menu-id327">
        <a href="/صفحه-%D9%86%D8%AA%D8%A7%DB%8C%D8%AC-%D8%B2%D9%86%D8%AF%D9%87-246" title="نتایج زنده" target="_blank">
          نتایج زنده                  </a>
              </li>
      </ul>

        </nav>
        <!-- <input /> -->
        <button class="mega-menu-icon" title="button">
          <i class="fa fa-navicon"></i>
        </button>
        <!-- *.*.*..*.*.*.*. START TOP TREND *.*.*.*.*.*.**.*.*.*-->
        <div class="top-trend-cnt top-trend-mob">
                                        </div>
        <!-- *.*.*..*.*.*.*. END OF TOP TREND *.*.*.*.*.*.**.*.*.*-->
        <div class="mega-menu-content" id="slimScroll">
          <button class="mega-menu-close"><i class="fa fa-close"></i></button>
          <div class="main-wrapper">
            <div class="mega-menu-cnt">
              <!-- *.*.*.*.*.*.*.* START RIGHT MEGA MENU *.*.*.*.*.*.*.*-->
              <div class="right-col-menu">
                
              <ul class="mega-toggle">
                                <li class='mega-menu-item' >
                      <a href="https://www.rokna.net/newsstudios/archive/">
                          آرشیو                      </a>
                                                              </li>
                                <li class='mega-menu-item' >
                      <a href="/بخش-%D8%A7%D8%AE%D8%A8%D8%A7%D8%B1-%D8%B3%D9%84%D8%A8%D8%B1%DB%8C%D8%AA%DB%8C-%D9%87%D8%A7-6">
                           چهره ها                      </a>
                                                <i class="fa fa-angle-down mega-arrow-icn" aria-hidden="true"></i>
                                                      <ul class="mega-toggle">
                                <li class='mega-menu-item' >
                      <a href="/بخش-%D9%87%D9%86%D8%B1%DB%8C-7">
                           هنری                      </a>
                                                              </li>
                                <li class='mega-menu-item' >
                      <a href="/بخش-%D9%81%D8%B1%D9%87%D9%86%DA%AF%DB%8C-9">
                           فرهنگی                      </a>
                                                              </li>
                                <li class='mega-menu-item' >
                      <a href="/بخش-%D8%AA%D9%84%D9%88%DB%8C%D8%B2%DB%8C%D9%88%D9%86-112">
                           تلویزیون                      </a>
                                                              </li>
                                <li class='mega-menu-item' >
                      <a href="/بخش-%D8%B3%DB%8C%D9%86%D9%85%D8%A7-113">
                           سینما                      </a>
                                                              </li>
                                <li class='mega-menu-item' >
                      <a href="/بخش-%D9%85%D9%88%D8%B3%DB%8C%D9%82%DB%8C-114">
                           موسیقی                      </a>
                                                              </li>
                                <li class='mega-menu-item' >
                      <a href="/بخش-%D8%AA%D8%A6%D8%A7%D8%AA%D8%B1-115">
                           تئاتر                      </a>
                                                              </li>
                                <li class='mega-menu-item' >
                      <a href="/بخش-%D8%A7%DB%8C%D9%86%D8%B3%D8%AA%D8%A7%DA%AF%D8%B1%D8%A7%D9%85-116">
                           اینستاگرام                      </a>
                                                              </li>
                                <li class='mega-menu-item' >
                      <a href="/بخش-%D8%A8%DB%8C%D9%88%DA%AF%D8%B1%D8%A7%D9%81%DB%8C-220">
                           بیوگرافی                      </a>
                                                              </li>
                        </ul>
                      </li>
                                <li class='mega-menu-item' >
                      <a href="/بخش-%D8%A7%D8%AE%D8%A8%D8%A7%D8%B1-%D8%B3%DB%8C%D8%A7%D8%B3%DB%8C-74">
                           سیاسی                      </a>
                                                <i class="fa fa-angle-down mega-arrow-icn" aria-hidden="true"></i>
                                                      <ul class="mega-toggle">
                                <li class='mega-menu-item' >
                      <a href="/بخش-%D8%A7%D8%AE%D8%A8%D8%A7%D8%B1-%D8%B3%DB%8C%D8%A7%D8%B3%DB%8C-74">
                           مجلس                      </a>
                                                              </li>
                                <li class='mega-menu-item' >
                      <a href="/بخش-%D9%86%D8%B8%D8%A7%D9%85%DB%8C-119">
                           نظامی                      </a>
                                                              </li>
                                <li class='mega-menu-item' >
                      <a href="/بخش-%D8%AA%D8%A7%D8%B1%DB%8C%D8%AE%DB%8C-118">
                           تاریخی                      </a>
                                                              </li>
                        </ul>
                      </li>
                                <li class='mega-menu-item' >
                      <a href="/بخش-%D8%AD%D8%A7%D8%AF%D8%AB%D9%87-245">
                           حادثه                      </a>
                                                              </li>
                                <li class='mega-menu-item' >
                      <a href="/بخش-%D8%B9%D8%A7%D8%B7%D9%81%D9%87-%D9%87%D8%A7%DB%8C-%DA%AF%D9%85%D8%B4%D8%AF%D9%87-30">
                           عاطفه های گمشده                      </a>
                                                              </li>
                                <li class='mega-menu-item' >
                      <a href="/بخش-%D8%A7%D8%AE%D8%A8%D8%A7%D8%B1-%D8%A7%D8%AC%D8%AA%D9%85%D8%A7%D8%B9%DB%8C-95">
                           اجتماعی                      </a>
                                                <i class="fa fa-angle-down mega-arrow-icn" aria-hidden="true"></i>
                                                      <ul class="mega-toggle">
                                <li class='mega-menu-item' >
                      <a href="/بخش-%D9%85%D8%AD%DB%8C%D8%B7-%D8%B2%DB%8C%D8%B3%D8%AA-97">
                           محیط زیست                      </a>
                                                              </li>
                                <li class='mega-menu-item' >
                      <a href="/بخش-%D8%B4%D9%87%D8%B1%DB%8C-98">
                           شهری                      </a>
                                                              </li>
                                <li class='mega-menu-item' >
                      <a href="/بخش-%D8%A2%D9%85%D9%88%D8%B2%D8%B4-100">
                           علمی و آموزشی                      </a>
                                                              </li>
                                <li class='mega-menu-item' >
                      <a href="/بخش-%D9%85%DB%8C%D8%B1%D8%A7%D8%AB-%DA%AF%D8%B1%D8%AF%D8%B4%DA%AF%D8%B1%DB%8C-101">
                           میراث فرهنگی و گردشگری                      </a>
                                                              </li>
                                <li class='mega-menu-item' >
                      <a href="/بخش-%DA%A9%D8%A7%D8%B1-%D8%A7%D8%B4%D8%AA%D8%BA%D8%A7%D9%84-102">
                           کار و اشتغال                      </a>
                                                              </li>
                                <li class='mega-menu-item' >
                      <a href="/بخش-%D8%A8%D9%87%D8%AF%D8%A7%D8%B4%D8%AA-%D8%AF%D8%B1%D9%85%D8%A7%D9%86-103">
                           بهداشت و درمان                      </a>
                                                              </li>
                        </ul>
                      </li>
                                <li class='mega-menu-item' >
                      <a href="/بخش-%D8%B3%D9%84%D8%A7%D9%85%D8%AA-16">
                           سلامت                      </a>
                                                              </li>
                                <li class='mega-menu-item' >
                      <a href="/بخش-%D8%A7%D8%B3%D8%AA%D8%A7%D9%86%DB%8C-52">
                           استان ها                      </a>
                                                <i class="fa fa-angle-down mega-arrow-icn" aria-hidden="true"></i>
                                                      <ul class="mega-toggle">
                                <li class='mega-menu-item' >
                      <a href="/بخش-%D8%A7%D8%B3%D8%AA%D8%A7%D9%86-%D9%87%D8%A7%DB%8C-%D8%B4%D9%85%D8%A7%D9%84%DB%8C-53">
                           استان های شمالی                      </a>
                                                              </li>
                                <li class='mega-menu-item' >
                      <a href="/بخش-%D8%A7%D8%B3%D8%AA%D8%A7%D9%86-%D9%87%D8%A7%DB%8C-%D8%AC%D9%86%D9%88%D8%A8%DB%8C-54">
                           استان های جنوبی                      </a>
                                                              </li>
                                <li class='mega-menu-item' >
                      <a href="/بخش-%D8%A7%D8%B3%D8%AA%D8%A7%D9%86-%D9%87%D8%A7%DB%8C-%D9%85%D8%B1%DA%A9%D8%B2%DB%8C-55">
                           استان های مرکزی                      </a>
                                                              </li>
                                <li class='mega-menu-item' >
                      <a href="/بخش-%D8%A7%D8%B3%D8%AA%D8%A7%D9%86-%D9%87%D8%A7%DB%8C-%D8%B4%D8%B1%D9%82%DB%8C-56">
                           استان های شرقی                      </a>
                                                              </li>
                                <li class='mega-menu-item' >
                      <a href="/بخش-%D8%A7%D8%B3%D8%AA%D8%A7%D9%86-%D9%87%D8%A7%DB%8C-%D8%BA%D8%B1%D8%A8%DB%8C-57">
                           استان های غربی                      </a>
                                                              </li>
                                <li class='mega-menu-item' >
                      <a href="/بخش-%D8%A2%D8%B0%D8%B1%D8%A8%D8%A7%DB%8C%D8%AC%D8%A7%D9%86-%D8%B4%D8%B1%D9%82%DB%8C-130">
                           آذربایجان شرقی                      </a>
                                                              </li>
                                <li class='mega-menu-item' >
                      <a href="/بخش-%D8%A2%D8%B0%D8%B1%D8%A8%D8%A7%DB%8C%D8%AC%D8%A7%D9%86-%D8%BA%D8%B1%D8%A8%DB%8C-131">
                           آذربایجان غربی                      </a>
                                                              </li>
                                <li class='mega-menu-item' >
                      <a href="/بخش-%D8%A7%D8%B1%D8%AF%D8%A8%DB%8C%D9%84-132">
                           اردبیل                      </a>
                                                              </li>
                                <li class='mega-menu-item' >
                      <a href="/بخش-%D8%A7%D8%B5%D9%81%D9%87%D8%A7%D9%86-133">
                           اصفهان                      </a>
                                                              </li>
                                <li class='mega-menu-item' >
                      <a href="/بخش-%D8%A7%D9%84%D8%A8%D8%B1%D8%B2-134">
                           البرز                      </a>
                                                              </li>
                                <li class='mega-menu-item' >
                      <a href="/بخش-%D8%A7%DB%8C%D9%84%D8%A7%D9%85-135">
                           ایلام                      </a>
                                                              </li>
                                <li class='mega-menu-item' >
                      <a href="/بخش-%D8%A8%D9%88%D8%B4%D9%87%D8%B1-136">
                           بوشهر                      </a>
                                                              </li>
                                <li class='mega-menu-item' >
                      <a href="/بخش-%D8%AA%D9%87%D8%B1%D8%A7%D9%86-137">
                           تهران                      </a>
                                                              </li>
                                <li class='mega-menu-item' >
                      <a href="/بخش-%DA%86%D9%87%D8%A7%D8%B1%D9%85%D8%AD%D8%A7%D9%84-%D8%A8%D8%AE%D8%AA%DB%8C%D8%A7%D8%B1%DB%8C-138">
                           چهارمحال و بختیاری                      </a>
                                                              </li>
                                <li class='mega-menu-item' >
                      <a href="/بخش-%D8%AE%D8%B1%D8%A7%D8%B3%D8%A7%D9%86-%D8%AC%D9%86%D9%88%D8%A8%DB%8C-139">
                           خراسان جنوبی                      </a>
                                                              </li>
                                <li class='mega-menu-item' >
                      <a href="/بخش-%D8%AE%D8%B1%D8%A7%D8%B3%D8%A7%D9%86-%D8%B1%D8%B6%D9%88%DB%8C-140">
                           خراسان رضوی                      </a>
                                                              </li>
                                <li class='mega-menu-item' >
                      <a href="/بخش-%D8%AE%D8%B1%D8%A7%D8%B3%D8%A7%D9%86-%D8%B4%D9%85%D8%A7%D9%84%DB%8C-141">
                           خراسان شمالی                      </a>
                                                              </li>
                                <li class='mega-menu-item' >
                      <a href="/بخش-%D8%AE%D9%88%D8%B2%D8%B3%D8%AA%D8%A7%D9%86-142">
                           خوزستان                      </a>
                                                              </li>
                                <li class='mega-menu-item' >
                      <a href="/بخش-%D8%B2%D9%86%D8%AC%D8%A7%D9%86-143">
                           زنجان                      </a>
                                                              </li>
                                <li class='mega-menu-item' >
                      <a href="/بخش-%D8%B3%D9%85%D9%86%D8%A7%D9%86-144">
                           سمنان                      </a>
                                                              </li>
                                <li class='mega-menu-item' >
                      <a href="/بخش-%D8%B3%DB%8C%D8%B3%D8%AA%D8%A7%D9%86-%D8%A8%D9%84%D9%88%DA%86%D8%B3%D8%AA%D8%A7%D9%86-145">
                           سیستان و بلوچستان                      </a>
                                                              </li>
                                <li class='mega-menu-item' >
                      <a href="/بخش-%D9%81%D8%A7%D8%B1%D8%B3-146">
                           فارس                      </a>
                                                              </li>
                                <li class='mega-menu-item' >
                      <a href="/بخش-%D9%82%D8%B2%D9%88%DB%8C%D9%86-147">
                           قزوین                      </a>
                                                              </li>
                                <li class='mega-menu-item' >
                      <a href="/بخش-%D9%82%D9%85-148">
                           قم                      </a>
                                                              </li>
                                <li class='mega-menu-item' >
                      <a href="/بخش-%DA%A9%D8%B1%D8%AF%D8%B3%D8%AA%D8%A7%D9%86-149">
                           کردستان                      </a>
                                                              </li>
                                <li class='mega-menu-item' >
                      <a href="/بخش-%DA%A9%D8%B1%D9%85%D8%A7%D9%86-150">
                           کرمان                      </a>
                                                              </li>
                                <li class='mega-menu-item' >
                      <a href="/بخش-%DA%A9%D8%B1%D9%85%D8%A7%D9%86%D8%B4%D8%A7%D9%87-151">
                           کرمانشاه                      </a>
                                                              </li>
                                <li class='mega-menu-item' >
                      <a href="/بخش-%DA%A9%D9%87%DA%AF%DB%8C%D9%84%D9%88%DB%8C%D9%87-%D8%A8%D9%88%DB%8C%D8%B1%D8%A7%D8%AD%D9%85%D8%AF-152">
                           کهگیلویه و بویراحمد                      </a>
                                                              </li>
                                <li class='mega-menu-item' >
                      <a href="/بخش-%DA%AF%D9%84%D8%B3%D8%AA%D8%A7%D9%86-153">
                           گلستان                      </a>
                                                              </li>
                                <li class='mega-menu-item' >
                      <a href="/بخش-%DA%AF%DB%8C%D9%84%D8%A7%D9%86-154">
                           گیلان                      </a>
                                                              </li>
                                <li class='mega-menu-item' >
                      <a href="/بخش-%D9%84%D8%B1%D8%B3%D8%AA%D8%A7%D9%86-155">
                           لرستان                      </a>
                                                              </li>
                                <li class='mega-menu-item' >
                      <a href="/بخش-%D9%85%D8%A7%D8%B2%D9%86%D8%AF%D8%B1%D8%A7%D9%86-156">
                           مازندران                      </a>
                                                              </li>
                                <li class='mega-menu-item' >
                      <a href="/بخش-%D9%85%D8%B1%DA%A9%D8%B2%DB%8C-157">
                           مرکزی                      </a>
                                                              </li>
                                <li class='mega-menu-item' >
                      <a href="/بخش-%D9%87%D8%B1%D9%85%D8%B2%DA%AF%D8%A7%D9%86-158">
                           هرمزگان                      </a>
                                                              </li>
                                <li class='mega-menu-item' >
                      <a href="/بخش-%D9%87%D9%85%D8%AF%D8%A7%D9%86-159">
                           همدان                      </a>
                                                              </li>
                                <li class='mega-menu-item' >
                      <a href="/بخش-%DB%8C%D8%B2%D8%AF-160">
                           یزد                      </a>
                                                              </li>
                        </ul>
                      </li>
                                <li class='mega-menu-item' >
                      <a href="/بخش-%D8%A7%D8%AE%D8%A8%D8%A7%D8%B1-%D8%A7%D9%82%D8%AA%D8%B5%D8%A7%D8%AF%DB%8C-65">
                           اقتصادی                      </a>
                                                <i class="fa fa-angle-down mega-arrow-icn" aria-hidden="true"></i>
                                                      <ul class="mega-toggle">
                                <li class='mega-menu-item' >
                      <a href="/بخش-%D8%A8%D8%A7%D9%86%DA%A9-%D8%A8%DB%8C%D9%85%D9%87-66">
                           بیمه ، بانک و بورس                      </a>
                                                              </li>
                                <li class='mega-menu-item' >
                      <a href="/بخش-%D8%A8%D8%A7%D8%B2%D8%A7%D8%B1%DA%A9-12">
                           بازارک                      </a>
                                                              </li>
                                <li class='mega-menu-item' >
                      <a href="/بخش-%D8%AA%D9%88%D9%84%DB%8C%D8%AF-%D8%AA%D8%AC%D8%A7%D8%B1%D8%AA-68">
                           تولید و تجارت                      </a>
                                                              </li>
                                <li class='mega-menu-item' >
                      <a href="/بخش-%D8%AE%D9%88%D8%AF%D8%B1%D9%88-69">
                           خودرو                      </a>
                                                              </li>
                                <li class='mega-menu-item' >
                      <a href="/بخش-%D8%B1%D8%A7%D9%87-%D8%B3%D8%A7%D8%AE%D8%AA%D9%85%D8%A7%D9%86-70">
                           راه و ساختمان                      </a>
                                                              </li>
                                <li class='mega-menu-item' >
                      <a href="/بخش-%D8%A7%D9%86%D8%B1%DA%98%DB%8C-71">
                           انرژی                      </a>
                                                              </li>
                                <li class='mega-menu-item' >
                      <a href="/بخش-%D9%88%D8%B1%D8%B2%D8%B4%DB%8C-8">
                           ورزشی                      </a>
                                                              </li>
                        </ul>
                      </li>
                                <li class='mega-menu-item' >
                      <a href="/بخش-%D9%88%D8%B1%D8%B2%D8%B4%DB%8C-8">
                           ورزشی                      </a>
                                                <i class="fa fa-angle-down mega-arrow-icn" aria-hidden="true"></i>
                                                      <ul class="mega-toggle">
                                <li class='mega-menu-item' >
                      <a href="/بخش-%D8%B1%DA%A9-%D8%A7%D8%B3%D9%BE%D9%88%D8%B1%D8%AA-15">
                           رک اسپورت                      </a>
                                                              </li>
                                <li class='mega-menu-item' >
                      <a href="/بخش-%D9%BE%D8%B1%D9%88%D8%B1%D8%B4-%D8%A7%D9%86%D8%AF%D8%A7%D9%85-170">
                           پرورش اندام                      </a>
                                                              </li>
                        </ul>
                      </li>
                                <li class='mega-menu-item' >
                      <a href="/صفحه-%D9%86%D8%AA%D8%A7%DB%8C%D8%AC-%D8%B2%D9%86%D8%AF%D9%87-246">
                          نتایج زنده                      </a>
                                                              </li>
                                <li class='mega-menu-item' >
                      <a href="/بخش-%D9%88%DB%8C%D8%AF%DB%8C%D9%88-%D9%87%D8%A7-46">
                           ویدیو ها                      </a>
                                                              </li>
                                <li class='mega-menu-item' >
                      <a href="/بخش-%D8%B9%DA%A9%D8%B3-168">
                           عکس                      </a>
                                                              </li>
                                <li class='mega-menu-item' >
                      <a href="/بخش-%D8%AE%D8%A8%D8%B1-172">
                           خبر                      </a>
                                                              </li>
                                <li class='mega-menu-item' >
                      <a href="/بخش-%D9%82%D8%B6%D8%A7%DB%8C%DB%8C-%D8%A7%D9%86%D8%AA%D8%B8%D8%A7%D9%85%DB%8C-26">
                           پلیس و قضا                      </a>
                                                <i class="fa fa-angle-down mega-arrow-icn" aria-hidden="true"></i>
                                                      <ul class="mega-toggle">
                                <li class='mega-menu-item' >
                      <a href="/بخش-%D9%BE%D9%84%DB%8C%D8%B3-27">
                           پلیس                      </a>
                                                              </li>
                        </ul>
                      </li>
                        </ul>
    
              </div>
              <!-- *.*.*.*.*.*.* END OF RIGHT MEGA MENU *.*.*.*.*.*.*.* -->
              <!-- .*.*.*.*.*.*. START LEFT-ROKMAK MEGA MENU .*.* .*.*.*.-->
              <div class="left-col-menu">
                




<ul  id="mega-toggle" itemscope="" itemtype="http://schema.org/SiteNavigationElement">
        <li >
        <a href="/بخش-%D8%B1%DA%A9-%D9%BE%D9%84%D8%A7%D8%B3-10" >
          رک پلاس                         <i class="fa fa-play fa-rotate-90" aria-hidden="true"></i>
                  </a>
                       <i class="fa fa-angle-down mega-arrow-icn" aria-hidden="true"></i>
                  


<ul  class="sub-menu-mega" itemscope="" itemtype="http://schema.org/SiteNavigationElement">
        <li >
        <a href="/بخش-%D8%AF%D8%A7%D8%B3%D8%AA%D8%A7%D9%86%DA%A9-173" >
           داستانک                    </a>
                        </li>
          <li >
        <a href="/بخش-%D9%87%D9%88%D9%85-%D9%BE%D9%84%D8%A7%D8%B3-11" >
          هوم پلاس                    </a>
                        </li>
          <li >
        <a href="/بخش-%D8%A8%D8%A7%D8%B2%D8%A7%D8%B1%DA%A9-12" >
           بازارک                    </a>
                        </li>
          <li >
        <a href="/بخش-%D8%AA%DA%A9%D9%86%D9%88%D9%84%D9%88%DA%98%DB%8C-14" >
          تکنولوژی                    </a>
                        </li>
          <li >
        <a href="/بخش-%D8%B3%D9%84%D8%A7%D9%85%D8%AA-16" >
          سلامت                    </a>
                        </li>
          <li >
        <a href="/بخش-%D8%A7%D8%B3%D8%AA%D8%A7%DB%8C%D9%84-17" >
          استایل                    </a>
                        </li>
          <li >
        <a href="/بخش-%D8%B3%D9%81%D8%B1-18" >
          سفر                    </a>
                        </li>
          <li >
        <a href="/بخش-%D8%A7%D8%AA%D9%88-%D9%BE%D9%84%D8%A7%D8%B3-19" >
           اتو پلاس                    </a>
                        </li>
          <li >
        <a href="/بخش-%D8%B2%D9%86%D8%AF%DA%AF%DB%8C-%D8%AE%D9%88%D8%A8-20" >
          زندگی                    </a>
                        </li>
          <li >
        <a href="/بخش-%D8%B2%DB%8C%D8%B3%D8%AA-%D9%BE%D9%84%D8%A7%D8%B3-21" >
          زیست پلاس                    </a>
                        </li>
          <li >
        <a href="/بخش-%DA%AF%D9%88%D9%86%D8%A7%DA%AF%D9%88%D9%86-22" >
           گوناگون                    </a>
                        </li>
          <li >
        <a href="/بخش-%DA%AF%D8%A7%D9%84%D8%B1%DB%8C-34" >
           گالری                    </a>
                        </li>
          <li >
        <a href="/بخش-%D8%A2%D8%B4%D9%BE%D8%B2%DB%8C-110" >
           آشپزی                    </a>
                        </li>
          <li >
        <a href="/بخش-%D8%B4%D8%A8%DA%A9%D9%87-%D9%87%D8%A7%DB%8C-%D8%A7%D8%AC%D8%AA%D9%85%D8%A7%D8%B9%DB%8C-78" >
           حادثه پلاس                    </a>
                        </li>
          <li >
        <a href="/بخش-%D9%81%D8%A7%D9%84-%D8%B7%D8%A7%D9%84%D8%B9-%D8%A8%DB%8C%D9%86%DB%8C-161" >
           فال و طالع بینی                         <i class="fa fa-play fa-rotate-90" aria-hidden="true"></i>
                  </a>
                       <i class="fa fa-angle-down mega-arrow-icn" aria-hidden="true"></i>
                  


<ul  class="sub-menu-mega" itemscope="" itemtype="http://schema.org/SiteNavigationElement">
        <li >
        <a href="/بخش-%D9%81%D8%A7%D9%84-%D9%82%D9%87%D9%88%D9%87-162" >
           فال قهوه                    </a>
                        </li>
          <li >
        <a href="/بخش-%D9%81%D8%A7%D9%84-%D8%B2%D9%86%D8%AF%DA%AF%DB%8C-164" >
           فال زندگی هفته                    </a>
                        </li>
          <li >
        <a href="/بخش-%D8%B7%D8%A7%D9%84%D8%B9-%D8%B1%D9%88%D8%B2%D8%A7%D9%86%D9%87-169" >
           طالع روزانه                    </a>
                        </li>
          <li >
        <a href="/بخش-%D9%81%D8%A7%D9%84-%D8%AD%D8%A7%D9%81%D8%B8-165" >
           فال حافظ روزانه                    </a>
                        </li>
          <li >
        <a href="/بخش-%D9%81%D8%A7%D9%84-%D8%B7%D8%A7%D9%84%D8%B9-%D8%A8%DB%8C%D9%86%DB%8C-%DA%86%DB%8C%D9%86%DB%8C-166" >
           فال و طالع چینی                    </a>
                        </li>
      </ul>
      </li>
      </ul>
      </li>
      </ul>

              </div>
              <!-- .*.*.*.*.*.*.*END OF LEFT-ROKMAK MEGA MENU .*.*.*.*.*.-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- *.*.*.*.*.*.*.* END OF MENU *.*.*.*.*.*.*.* -->
  <!-- *.*.*.*.*.*.*.* START LOGO *.*.*.*.*.*.*.* -->
  <div class="main-wrapper">
    <div class="rokna-logo">

                      <!-- LOGO -->
                                                <a href="/" title="rokna" target="_blank">
                <img src="https://assets.rokna.net/images/logo.png" alt="rokna" height="284" width="202">
              </a>
                                <!-- LOGO -->
              
    </div>
  </div>
  <!-- *.*.*.*.*.*.*.* END OF LOGO *.*.*.*.*.*.*.* -->

</header>	<!-- *.*.*.*.*.*.*.*.*.*.END OF MAIN-HEADER *.*.*.*.*.*.*.*.*.*.-->
	<main data-entity-id='4573' data-entity-module='qa' >
		<div class="answers-outer container">
			<div class="main-wrapper">
				
<!-- POSITION_A0-->
<div class="home-zxc zxc-res">
  </div>
<!-- POSITION_A0-->
<!-- POSITION_H4 SAME -->
<div class="zxc-header-zxc">
  <div  style="width: px;
		height: px;
  overflow: hidden;" class="type-script position-h4 ">
<div id="adx-205" data-wid="d1338322-c813-45b9-827f-07d6567e2805"></div>
</div>
<div  style="width: px;
		height: px;
  overflow: hidden;" class="type-script position-h4 ">
<div id="adx-173" data-wid="a2614b20-f48b-4f55-8ec0-4a18437fb9f9"></div>
</div></div>
<!-- POSITION_H4 SAME -->
<script>
var question_id = 4573;
</script>
<div class="container question-answers">
  <!-- 1 -->
  <div class="faq-answers" itemscope="" itemtype="http://schema.org/QAPage">
    <!-- bread -->
    <div class="margin-bottom-16 container">
      <ul class="breadcrumb-ans">
        <li>
          <a href="/answers/" title="پرسش و پاسخ">
            پرسش و پاسخ
          </a>
          <i class="fa fa-angle-left"></i>
        </li>
        <li>
          <a href="/answers/?cat=1" title="سلامت">
            سلامت          </a>
        </li>
      </ul>
          </div>
    <!-- question 1-->
    <div class="first-row-faq" itemprop="mainEntity" itemscope itemtype="https://schema.org/Question">
      <!-- question -->
      <div class="question-title">
        <h1 class="title" itemprop="name">
          <i class="i-grey fa fa-external-link-square"></i>
          درمان بیماری کرم حلقه ای چیست؟        </h1>
        <p class="question-description" itemprop="text">
          هنگامی كه متوجه شدم دخترم مبتلا به كرم حلقه‌ای در شكم شده است خیلی ترسیدم. او چگونه مبتلا به این بیماری شده است؟ من همیشه نسبت به تمیز بودن او و غذایی كه می‌خورد بسیار محتاط بوده‌ام.        </p>
        <div class="question-tools">
                    <span itemprop="dateCreated" style="display:none">
            2020-12-02 16:26:46          </span>
          <span>
            تاریخ :
            ۱۳۹۹/۰۹/۱۲ ۱۹:۵۶:۴۶          </span>
          <span class="answer-count">
            تعداد پاسخ ها
            <span class="answer-count" itemprop="answerCount">
              1            </span>
          </span>
                      <span itemprop="author" itemscope itemtype="http://schema.org/Person">
              <span itemprop="name">
                سودابه              </span>
            </span>
                  </div>
      </div>
      <!-- answers -->
      <div class="author-answers">
                  <div class="author-answers-list container">
            <ul>
              <li itemprop="suggestedAnswer acceptedAnswer" itemscope itemtype="http://schema.org/Answer">
                <a itemprop="author" itemscope itemtype="http://schema.org/Person" class="r-img res" id="3540" href="#3540">
                                      <img src="/images/default.jpg" width="128" height="128" />
                  
                                      <span itemprop="name">
                      <i class="fa fa-check-square" aria-hidden="true"></i>
                      مهسا مقدمى                    </span>

                                  </a>
                <div class="l-answer-descriptions">
                  <p itemprop="text">
                    ابتدا باید بگویم كه داشتن این مریضی جای هیچ‌گونه نگرانی ندارد. درست است كه نام این مریضی كرم حلقه‌ای است، اما شامل هیچ كرمی نمی‌شود. كلمه حلقه توضیح می‌دهد شكل دانه و جوش را و كرم اشاره به حلقه اطراف و لبه‌های جوش كه حالت تاب‌خورده دارد و شبیه به كرم است. <br />
اصولاً این عفونت قارچی باعث یكی یا بیش از یك عدد تكه‌های قرمزرنگ روی پوست می‌شود كه حالت ناهموار و فلس مانند دارند كه رشد بسیار كندی دارند و ممكن است تا مدت‌های طولانی باقی بمانند. این دانه‌ها می‌توانند در تمام سطوح پوست دیده شوند. اما درمان برای این مریضی بسیار سریع اتفاق می‌افتد و تنها كافی است كه از كرم‌های ضد قارچ مانند كوتریموكسازول (co-trimazole) استفاده كنید. <br />
شبیه به تمام بیماری‌های قارچی این بیماری نیز در گرما و رطوبت رشد و نمو پیدا می‌كند و خیلی سریع از شخصی به شخص دیگر منتقل می‌شود.                  </p>
                  <div class="answ-tools">
                                        <span itemprop="dateCreated" style="display:none">
                      2020-12-02 16:26:51                    </span>
                    <span >
                      ۱۳۹۹/۰۹/۱۲ ۱۹:۵۶:۵۱                    </span>
                    <span>
                      <a itemprop="url"  id="3540" href="#3540">
                        <i class="fa fa-link" aria-hidden="true"></i>
                      </a>
                    </span>
                                          <span itemprop="upvoteCount" style="display:none">
                        586                      </span>
                                      </div>
                </div>
              </li>
            </ul>
          </div>
          <!-- second-answers -->

              </div>
    </div>
    <!-- LINK_HELPER -->
    <div>
        <script>
      var adv_link_helper = "";
    </script>
</div>

<script>
  var NewsListLimit = 10;
</script>
  <div class="news-bottom-link noprint" data-element-name="LANDING_O" >
    <p class="helper-header">
       حوادث اختصاصی رکنا را اینجا بخوانید:     </p>
    <ul class="list-link">
    </ul>
  </div>
        <!-- LINK_HELPER -->
    <!-- POSITION_H0-->
    <div class="home-zxc">
            <div  style="width: px;
		height: px;
  overflow: hidden;" class="type-script position-h0 ">
<div id="mediaad-JRxA2"></div>
<div id="mediaad-W2lya"></div>
</div>    </div>
    <!-- POSITION_H0-->
    <!-- POSITION_H3-->
    <div class="home-zxc">
          </div>
    <!-- POSITION_H3-->
    <!-- POSITION_H1-->
    <div class="home-zxc">
      <div  style="width: px;
		height: px;
  overflow: hidden;" class="type-script position-h1 ">
<div id="mediaad-v9RrV"></div>
</div>    </div>
    <!-- POSITION_H1-->
    <!-- POSITION_H2-->
    <div class="home-zxc noprint">
          </div>
    <!-- POSITION_H2-->

    <div class="answers-cnt send-qus">

      <div class="list-answers">
        <!-- 1 -->
        <div class="faq-form container default-bg margin-bottom-16" >
          <header class="default-header-2">
            <h4 class="title">
              <i class="fa fa-th"></i>
              ارسال پرسش
            </h4>
          </header>
          <style>
          .browseuploader {
            display: none;
          }
          </style>
          <div>
            <script>

	// document ready
	$(document).ready(function(){

		// uploader
		new FileUploader('DuUik3kgEVRI', progressFileSample, fileSampleUpload);
	});

</script>
<form id="fileUploader_DuUik3kgEVRI" target="fileUploaderFrame_DuUik3kgEVRI" autocomplete="off" method="post" accept-charset="utf-8" enctype="multipart/form-data" action="https://static3.rokna.net/upload?X-Progress-ID=DuUik3kgEVRI" class="browseuploader">
	<div class="holder"  style="width: 48px; height: 48px;">
		<input type="hidden" name="token" value="-l6UxZfC2_cGh4K4N91SNI3nRtKherjtqICjSJwKLWdLoxv9B_AsVPf4hPn9k5YcK7V5_Ba9NPz4fYmH4-KTR6olDTf7L3G2NWIdPQoo4GPn9XexKpOyGa8Hu8HPW98G4m9gAqAjFsWm2eiPzp3wZIY_D0zXs-IzVkLTNpyu6wnmjQpu8WvoWFydB5EFBX4uUtJ88y6mMdknbIgYqqPxb5rbytRMCfmhjJ6qyglF9o7-JuSCRYiQWgA3mZwe2_KPhGuAxovlMVzreqfLEbycGdHzf2GdvRK0dd6g1GCupAL4AcX-q2cPwVwGdzxQcNMtmUH_jQOiLjuhhLJGPuABq6SbSMVlhizs" />
		<input type="hidden" name="identifier" value="DuUik3kgEVRI" />
		<input type="file" name="files[]" class="file" />
	</div>
</form>
<iframe id="fileUploaderFrame_DuUik3kgEVRI" name="fileUploaderFrame_DuUik3kgEVRI" width="0" height="0" class="hide"></iframe>
          </div>
          <div id="AnswerFormControllerId" data-ng-controller="AnswerFormController">
            <form name="askQuestionForm"  novalidate="" >
              <div ng-show="status === 'emailSuccess'">
                <p class="alert-email">
                  پرسش شما با موفقیت ارسال شد ، کاربر گرامی چنانچه ایمیل خود را هنگام ثبت سوال وارد کرده اید در صورت پاسخ دادن به سوال شما از طریق ایمیل به شما اطلاع داده خواهد شد.
                </p>
              </div>
              <div ng-show="status === 'anoSuccess'">
                <p class="alert-email">
                  پرسش شما با موفقیت ارسال شد، کاربر گرامی، لطفا برای بازدید از پاسخ‌های ارسالی به سوالتان، حداکثر تا 7 روز آینده به همین صفحه مراجعه کنید.
                </p>
              </div>
              <fieldset ng-disabled="loading" ng-show="status === 'ready'">
                <div class="no-title margin-bottom-12" data-ng-class="{ 'has-error': askQuestionForm.title.$touched && askQuestionForm.title.$invalid, 'has-success': askQuestionForm.title.$touched && askQuestionForm.title.$valid }">
                  <label class="padding-left-10">
                    عنوان :
                  </label>
                  <input data-ng-model="form.askQuestion.fields.title" name="title" class="normal" type="text" >
                </div>
                <div class="margin-bottom-12">
                  <label>
                    نام/نام مستعار :
                  </label>
                  <input data-ng-model="form.askQuestion.fields.name" class="normal width-over" type="text" name="name" >
                </div>
                <div class="margin-bottom-12">
                  <label class="padding-left-14">ایمیل: </label>
                  <input dir="ltr" data-ng-model="form.askQuestion.fields.email" class="normal" type="email" name="email" style="direction: ltr;" >
                  <div data-ng-messages="askQuestionForm.email.$error" data-ng-if="askQuestionForm.email.$touched &&
                  askQuestionForm.email.$invalid"  class="msg-warning">
                  <span data-ng-message="email">
                    ایمیل واد شده صحیح نمیباشد.
                  </span>

                </div>
                <span style="display: block;font-size: 10px;color: #d90000;">
                  وارد نمودن ایمیل ضروری نیست
                </span>
              </div>
              <div class="margin-bottom-12">
                <label>دسته بندی : </label>
                <select
                required=""
                name="category"
                data-ng-model="form.askQuestion.fields.category"
                class="input-large"
                ng-options="item.id as item.name for item in form.askQuestion.categories"
                ></select>
                <div data-ng-messages="askQuestionForm.category.$error" data-ng-if="askQuestionForm.category.$touched &&
                askQuestionForm.category.$invalid" class="msg-warning">
                <span data-ng-message="required">
                  انتخاب دسته بندی اجباری می‌باشد.
                </span>
              </div>
            </div>

            <div class="margin-bottom-12">
              <label>
                انتخاب فایل ضمیمه:
              </label>
              <button class="uploadme" data-ng-click="clickForUpload()" ng-hide="uploadedFileData">
                انتخاب
              </button>
              <span ng-show="uploadedFileData">
                ok {{ uploadedFileData.name }} uplodaed.
              </span>
              <script>
              function progressFileSample() {
              }
              function fileSampleUpload(data) {
                if (data) {
                  var scope = angular.element(document.getElementById("AnswerFormControllerId")).scope();
                  scope.uploadedFile = Object.values(data)[0].data;
                  scope.$apply();
                }
              }
              </script>
            </div>

            <div  class="margin-bottom-12">
              <label class="block">توضیحات : </label>
              <textarea class="normal" required="" minlength="18" name="description" data-ng-model="form.askQuestion.fields.description" type="text">
              </textarea>
              <div data-ng-messages="askQuestionForm.description.$error" data-ng-if="askQuestionForm.description.$touched &&
              askQuestionForm.description.$invalid"  class="msg-warning">
              <span data-ng-message="required">
                این فیلد اجباری میباشد.
              </span>
              <span data-ng-message="minlength">
                کاراکتر وارد شده کم میباشد.
              </span>
            </div>

          </div>
          <button class="form-submit" type="submit" value="Submit" ng-click="form.askQuestion.submit()">
            <i class="fa icon fn17 fa-paper-plane"></i>
            ارسال
          </button>
        </fieldset>

      </form>
    </div>
  </div>
</div>
</div>






<!-- *.*.*..*.*.*.*. START COMMENT FORM *.*.*..*.*.*.*.-->
<div class="margin-bottom-16 noprint">
  <script>
var setCommentParentId = function(parentId) {

document.getElementById('commentParent').value = parentId;
// scroll to form
window.scrollTo({
    top: document.getElementById('newsCommentBoxForm').offsetTop,
    behavior: 'smooth'
});

};
document.addEventListener("DOMContentLoaded", function() {
var commentSelector = document.querySelector("#newsCommentBoxForm form");

if(commentSelector) {
    new CommentForm(commentSelector,
    {"object_master_id":934,"category_id":1,"model":8},
    {
    onSubmit: function() {
        var elem = document.querySelector('#newsCommentBoxForm .statusBox');
        // var elemFieldset = document.querySelector('#newsCommentBoxForm .fieldset');
        var elemBtn = document.querySelector('#newsCommentBoxForm button');
        console.log(elemBtn);
        elem.style.display = 'block';
        elem.innerHTML = 'در حال ارسال نظر...';
        // elemFieldset.setAttribute("disabled", "disabled");
        elemBtn.style.display = 'none';
    },
    onError: function() {
        var elem = document.querySelector('#newsCommentBoxForm .statusBox');
        elem.style.display = 'block';
        elem.innerHTML = 'ارسال نظر با خطا مواجه شد.';
        var elemBtn = document.querySelector('#newsCommentBoxForm button');
        elemBtn.style.display = 'block';
    },
    onSuccess: function() {
        var elem = document.querySelector('#newsCommentBoxForm .statusBox');
        var elemBtn = document.querySelector('#newsCommentBoxForm button');
        elem.style.display = 'block';
        elem.innerHTML = "نظر شما با موفقیت ارسال شد";
        elemBtn.style.display = 'block';
        var elemForm = document.querySelector('#newsCommentBoxForm form');
        elemForm.reset();
    }
    });

}
});

</script>

<div id="newsCommentBoxForm">
  <div class="comment-form default-bg white">
    <div class="comment-form-cnt">
      <header class="default-header-2">
        <h2>
          <i class="fa fa-th"></i>
              
          ارسال نظر
                    <i class="fa fa-envelope"></i>
        </h2>
      </header>
      <form class="comment-stuff">
        <fieldset>
          <legend>&nbsp;</legend>
          <div class="form-top-inputs">
            <div class="border-input">
                  
                <label for="commentName"> نام:</label>
                              <input dir="rtl" id="commentName" name="name" type="text" value="">
            </div>
            <div class="border-input">
              <label class="defloat" for="commentEmail">: Email</label>
              <input class="force-dir" id="commentEmail" name="email" type="email" value="">
            </div>
            <input id="commentParent" name="parent" type="hidden" value="">
          </div>

          <div class="container form-bottom-textaria margin-top-16">
            <label for="commentMessage">
                
              نظر:  
                          </label>
            <textarea rows="6" id="commentMessage" cols="40" name="message" placeholder=""></textarea>
          </div>
          <div class="container">
            <span class="statusBox"></span>
            <button class="submit-comment" type="submit" name="button" value="submit">
                  
                ارسال دیدگاه
                            <i class="fa icon fn17 fa-paper-plane"></i>
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  </div>
</div>
  <!-- COMMENT LIST -->
  <div id="comment-list" class="noprint">
    <ul class="level-0">
  </ul>
  </div>

  <!-- END OF COMMENT LIST -->
</div>
<!-- *.*.*..*.*.*.*. END OF COMMENT FORM *.*.*..*.*.*.*.-->


</div>
<!-- 2 news page stuff-->
<div class="faq-adv">
  <div class="container margin-bottom-16 default-bg white zxc-padding-custom">
    <!-- POSITION_G0-->
    <div class="home-zxc">
      <div  style="width: px;
		height: px;
  overflow: hidden;" class="type-script position-g0 ">
<div id="adx-218" data-wid="5c8fb36e-4768-4798-a995-78cac68ab547"></div>
</div>
<div  style="width: px;
		height: px;
  overflow: hidden;" class="type-script position-g0 ">
<div id="adx-211" data-wid="556e4df3-987b-4c65-8b69-045f565d00f3"></div>
</div>
<div  style="width: px;
		height: px;
  overflow: hidden;" class="type-script position-g0 ">
<div id="adx-208" data-wid="5ea73716-f398-431f-9370-8063f8673eeb"></div>
</div>
<div  style="width: px;
		height: px;
  overflow: hidden;" class="type-script position-g0 ">
<div id="adx-174" data-wid="b5d3ab73-735d-4687-8d0c-03bcf8b11750"></div>

</div>    </div>
    <!-- POSITION_G0-->
    <!-- POSITION_G1-->
    <div class="home-zxc">
      <div  style="width: px;
		height: px;
  overflow: hidden;" class="type-script position-g1 ">
<div id="Bino_Hybrid_Panel"></div> <script src="https://bl9.ir/file/hybrid/9NNKVcc0.js"></script>
</div>    </div>
    <!-- POSITION_G1-->
    <!-- POSITION_G2-->
    <div class="home-zxc">
          </div>
    <!-- POSITION_G2-->
    <!-- POSITION_G3-->
    <div class="home-zxc">
      <div  style="width: px;
		height: px;
  overflow: hidden;" class="type-script position-g3 ">
<div id="mediaad-fgbX"></div>
</div>
<div  style="width: px;
		height: px;
  overflow: hidden;" class="type-script position-g3 ">
<header class="default-header-2">
  <h2>
    <i class="fa fa-th"></i>
    سفر
  </h2>
</header>
<ul class="adtodate-unique-place global-list"></ul>
<script src="https://adtodate.bashgahs.ir/main.js"></script>

</div>
<div  style="width: px;
		height: px;
  overflow: hidden;" class="type-script position-g3 ">
<div id="mediaad-DA6YG"></div>
</div>    </div>
    <!-- POSITION_G3-->
  </div>
  <!-- *.*.*..*.*.*.*. START TOP NEWS TAB *.*.*..*.*.*.*.-->
  <div class="primary-multi-tab global-box-shadow margin-bottom-16" itemscope="" itemtype="http://schema.org/CreativeWork">
    <!-- tab-title -->
    <ul class="tabs" id="multi-tabs">
                            </ul>
    <!-- tab-content -->
    <div id="tab-content" class="box-color">
      <!-- first -->
            <!-- second -->
            <!-- third -->
            <!-- forth -->
          </div>
  </div>
  <!-- *.*.*..*.*.*.*. END OF TOP NEWS TAB *.*.*..*.*.*.*.-->
  <!-- *.*.*..*.*.*.*. START WHAT OTHERS READ *.*.*..*.*.*.*.-->
  <div class="margin-bottom-16 default-bg white">
      <section class="default-bg live-read-cnt" data-element-name="FRONT_C1" itemscope="" itemtype="https://schema.org/CreativeWork">
      <header class="default-header-2">
        <h2>
          <span class="icon-live"></span>
                        <a href="/newsstudios/search/?" title="هم اکنون دیگران می خوانند" itemprop="url" target="_blank">
                  هم اکنون دیگران می خوانند              </a>
                  </h2>
      </header>
      <ul class="global-list">
                  <li>
              <i class="i-red fa fa-external-link-square"></i>
              <a href="/بخش-%D8%A7%D8%AE%D8%A8%D8%A7%D8%B1-%D8%A7%D9%82%D8%AA%D8%B5%D8%A7%D8%AF%DB%8C-65/579846-%D8%A7%D8%AE%D8%A8%D8%A7%D8%B1-%D8%A7%D9%82%D8%AA%D8%B5%D8%A7%D8%AF%DB%8C-%D9%85%D9%87%D9%85-%D8%AA%D8%B1%DB%8C%D9%86-%D9%87%D8%A7%DB%8C-%D8%B3%D8%A7%D8%B9%D8%AA-%DA%AF%D8%B0%D8%B4%D8%AA%D9%87" target="_blank" title="اخبار اقتصادی / مهم ترین های 24 ساعت گذشته" itemprop="url">
                اخبار اقتصادی / مهم ترین های 24 ساعت گذشته              </a>
          </li>
                  <li>
              <i class="i-red fa fa-external-link-square"></i>
              <a href="/بخش-%D8%B4%D8%A8%DA%A9%D9%87-%D9%87%D8%A7%DB%8C-%D8%A7%D8%AC%D8%AA%D9%85%D8%A7%D8%B9%DB%8C-78/970378-%D8%AA%D8%BA%DB%8C%DB%8C%D8%B1-%DA%86%D9%87%D8%B1%D9%87-%D9%81%D8%A7%D8%B7%D9%85%D9%87-%D8%AD%D8%A8%DB%8C%D8%A8-%D8%B2%D8%A7%D8%AF%D9%87-%D8%AE%D9%88%D8%B1%D8%B4%DB%8C%D8%AF-%D9%BE%D8%B3-%D8%A7%D8%B2-%D8%A8%D8%A7%D8%B1%D8%A7%D9%86-%D8%A8%D8%B9%D8%AF-%D8%B3%D8%A7%D9%84-%D8%B9%DA%A9%D8%B3" target="_blank" title="تغییر چهره فاطمه حبیب زاده، خورشیدِ پس از باران بعد  23 سال‎ +عکس" itemprop="url">
                تغییر چهره فاطمه حبیب زاده، خورشیدِ پس از باران بعد  23 سال‎ +عکس              </a>
          </li>
                  <li>
              <i class="i-red fa fa-external-link-square"></i>
              <a href="/بخش-%D8%B4%D8%A8%DA%A9%D9%87-%D9%87%D8%A7%DB%8C-%D8%A7%D8%AC%D8%AA%D9%85%D8%A7%D8%B9%DB%8C-78/970830-%D8%B4%D8%A8%D8%A7%D9%87%D8%AA-%D8%A8%D8%A7%D9%88%D8%B1%D9%86%DA%A9%D8%B1%D8%AF%D9%86%DB%8C-%D8%AC%D9%88%D8%A7%D9%86%DB%8C-%D9%85%D8%A7%D8%AF%D8%B1-%D9%85%D8%A7%D8%AF%D8%B1%D8%B4%D9%88%D9%87%D8%B1-%D9%86%D8%B1%DA%AF%D8%B3-%D9%85%D8%AD%D9%85%D8%AF%DB%8C-%D8%B9%DA%A9%D8%B3-%D8%A8%DB%8C%D9%88%DA%AF%D8%B1%D8%A7%D9%81%DB%8C-%D8%A8%D8%A7%D8%B2%DB%8C%DA%AF%D8%B1-%D8%B3%D8%AA%D8%A7%DB%8C%D8%B4" target="_blank" title="شباهت باورنکردنی و جوانی مادر و مادرشوهر نرگس محمدی +عکس و  بیوگرافی بازیگر ستایش !" itemprop="url">
                شباهت باورنکردنی و جوانی مادر و مادرشوهر نرگس محمدی +عکس و  بیوگرافی بازیگر ستایش !              </a>
          </li>
                  <li>
              <i class="i-red fa fa-external-link-square"></i>
              <a href="/بخش-%D8%B4%D8%A8%DA%A9%D9%87-%D9%87%D8%A7%DB%8C-%D8%A7%D8%AC%D8%AA%D9%85%D8%A7%D8%B9%DB%8C-78/971009-%D9%81%DB%8C%D9%84%D9%85-%D8%B3%DA%A9%D9%88%D8%AA-%D8%B3%D8%A7%D9%84%D9%87-%D8%A2%D8%B2%DB%8C%D8%AA%D8%A7-%D8%AD%D8%A7%D8%AC%DB%8C%D8%A7%D9%86-%D8%AF%D8%B1%D8%A8%D8%A7%D8%B1%D9%87-%D8%B7%D9%84%D8%A7%D9%82%D8%B4-%D8%A7%D8%B2-%D8%B4%D8%B1%DB%8C%D9%81%DB%8C-%D9%86%DB%8C%D8%A7-%D8%B4%DA%A9%D8%B3%D8%AA-%D8%A8%D8%A7%D9%88%D8%B1-%D9%86%D9%85%DB%8C-%DA%A9%D9%86%DB%8C%D8%AF" target="_blank" title="فیلم / سکوت 20 ساله آزیتا حاجیان درباره طلاقش از شریفی نیا شکست ! / باور نمی کنید !" itemprop="url">
                فیلم / سکوت 20 ساله آزیتا حاجیان درباره طلاقش از شریفی نیا شکست ! / باور نمی کنید !              </a>
          </li>
                  <li>
              <i class="i-red fa fa-external-link-square"></i>
              <a href="/بخش-%D8%B4%D8%A8%DA%A9%D9%87-%D9%87%D8%A7%DB%8C-%D8%A7%D8%AC%D8%AA%D9%85%D8%A7%D8%B9%DB%8C-78/970640-%D8%B9%DA%A9%D8%B3-%D8%AA%D8%BA%DB%8C%DB%8C%D8%B1-%D8%B9%D8%AC%DB%8C%D8%A8-%D8%AF%D8%A7%DB%8C%DB%8C-%DB%8C%D9%88%D9%86%D8%B3-%D9%BE%D8%B3-%D8%A7%D8%B2-%D8%A8%D8%A7%D8%B1%D8%A7%D9%86-%D8%A8%D8%B9%D8%AF-%D8%B3%D8%A7%D9%84" target="_blank" title="عکس تغییر عجیب  دایی یونس پس از باران بعد 23 سال !" itemprop="url">
                عکس تغییر عجیب  دایی یونس پس از باران بعد 23 سال !              </a>
          </li>
                  <li>
              <i class="i-red fa fa-external-link-square"></i>
              <a href="/بخش-%D9%81%D8%A7%D9%84-%D8%B7%D8%A7%D9%84%D8%B9-%D8%A8%DB%8C%D9%86%DB%8C-161/970403-%D9%81%D8%A7%D9%84-%D8%A7%D8%A8%D8%AC%D8%AF-%D9%85%D8%AD%D8%B4%D8%B1-%D8%A8%D9%87%D9%85%D9%86-%D9%81%DB%8C%D9%84%D9%85" target="_blank" title="فال ابجد محشر 21 بهمن + فیلم " itemprop="url">
                فال ابجد محشر 21 بهمن + فیلم               </a>
          </li>
                  <li>
              <i class="i-red fa fa-external-link-square"></i>
              <a href="/بخش-%D9%81%D8%A7%D9%84-%D8%B7%D8%A7%D9%84%D8%B9-%D8%A8%DB%8C%D9%86%DB%8C-161/970405-%D9%81%D8%A7%D9%84-%D8%B7%D8%A7%D9%84%D8%B9-%D8%A8%DB%8C%D9%86%DB%8C-%D8%B1%D9%88%D8%B2%D8%A7%D9%86%D9%87-%D8%A8%D9%87%D9%85%D9%86-%D9%81%DB%8C%D9%84%D9%85" target="_blank" title="فال و طالع بینی روزانه 21 بهمن + فیلم" itemprop="url">
                فال و طالع بینی روزانه 21 بهمن + فیلم              </a>
          </li>
                  <li>
              <i class="i-red fa fa-external-link-square"></i>
              <a href="/بخش-%D9%81%D8%A7%D9%84-%D8%B7%D8%A7%D9%84%D8%B9-%D8%A8%DB%8C%D9%86%DB%8C-161/970404-%D9%81%D8%A7%D9%84-%D8%AD%D8%A7%D9%81%D8%B8-%D8%A7%D9%85%D8%B1%D9%88%D8%B2-%D8%A8%D9%87%D9%85%D9%86-%D9%81%DB%8C%D9%84%D9%85" target="_blank" title="فال حافظ امروز 21 بهمن + فیلم" itemprop="url">
                فال حافظ امروز 21 بهمن + فیلم              </a>
          </li>
                  <li>
              <i class="i-red fa fa-external-link-square"></i>
              <a href="/بخش-%D8%B4%D8%A8%DA%A9%D9%87-%D9%87%D8%A7%DB%8C-%D8%A7%D8%AC%D8%AA%D9%85%D8%A7%D8%B9%DB%8C-78/970882-%D8%B9%DA%A9%D8%B3-%D9%87%D8%A7%DB%8C-%D9%87%D8%A7%D9%84%DB%8C%D9%88%D9%88%D8%AF%DB%8C-%D8%B1%D8%B2%DB%8C%D8%AA%D8%A7-%D8%BA%D9%81%D8%A7%D8%B1%DB%8C-%D8%AE%D8%A7%D8%B1%D8%AC-%D8%A7%D8%B2-%D8%B5%D8%AF%D8%A7-%D8%B3%DB%8C%D9%85%D8%A7" target="_blank" title="عکس های هالیوودی رزیتا غفاری خارج از صدا و سیما " itemprop="url">
                عکس های هالیوودی رزیتا غفاری خارج از صدا و سیما               </a>
          </li>
                  <li>
              <i class="i-red fa fa-external-link-square"></i>
              <a href="/بخش-%D8%AD%D8%A7%D8%AF%D8%AB%D9%87-245/971116-%D8%A7%D9%81%D8%AA%D8%A7%D8%AF%D9%86-%D9%85%D8%A7%D8%B4%DB%8C%D9%86-%D9%86%D8%B9%D8%B4-%DA%A9%D8%B4-%D8%AF%D8%B1-%DA%86%D8%A7%D9%84%D9%87-%D8%AE%DB%8C%D8%A7%D8%A8%D8%A7%D9%86-%D9%85%D8%B1%D8%AF-%D9%85%D8%B1%D8%AF%D9%87-%D8%B1%D8%A7-%D8%B2%D9%86%D8%AF%D9%87-%DA%A9%D8%B1%D8%AF" target="_blank" title="افتادن ماشین نعش کش در چاله خیابان مرد مرده را زنده کرد !" itemprop="url">
                افتادن ماشین نعش کش در چاله خیابان مرد مرده را زنده کرد !              </a>
          </li>
                  <li>
              <i class="i-red fa fa-external-link-square"></i>
              <a href="/بخش-%D8%AD%D8%A7%D8%AF%D8%AB%D9%87-245/971072-%D9%BE%D8%B3%D8%B1-%D8%AC%D9%88%D8%A7%D9%86-%D9%BE%D8%AF%D8%B1-%D9%85%D8%A7%D8%AF%D8%B1%D8%B4-%D8%B1%D8%A7-%DA%A9%D8%B4%D8%AA-%D8%A7%D9%85%D8%A7-%D8%A8%D8%AE%D8%B4%DB%8C%D8%AF%D9%87-%D8%B4%D8%AF-%D8%B3%D9%88%D9%85%DB%8C%D9%86-%D9%82%D8%AA%D9%84-%D9%85%D8%B3%D9%84%D8%AD%D8%A7%D9%86%D9%87-%D9%85%D8%B1%D8%AF-%D8%AA%D8%A8%D8%B1%DB%8C%D8%B2%DB%8C-%D9%BE%D8%B3-%D8%A7%D8%B2-%D8%A2%D8%B2%D8%A7%D8%AF%DB%8C-%D8%A7%D8%B2-%D8%B2%D9%86%D8%AF%D8%A7%D9%86-%D8%AC%D8%B2%DB%8C%DB%8C%D8%A7%D8%AA" target="_blank" title="پسر جوان پدر و مادرش را کشت اما بخشیده شد / سومین قتل مسلحانه مرد تبریزی پس از آزادی از زندان + جزییات" itemprop="url">
                پسر جوان پدر و مادرش را کشت اما بخشیده شد / سومین قتل مسلحانه مرد تبریزی پس از آزادی از زندان + جزییات              </a>
          </li>
                  <li>
              <i class="i-red fa fa-external-link-square"></i>
              <a href="/بخش-%D8%AD%D8%A7%D8%AF%D8%AB%D9%87-245/971119-%D8%AE%D8%A7%D9%86%D9%85-%D8%AF%DA%A9%D8%AA%D8%B1-%D8%B4%D9%88%D9%87%D8%B1%D8%B4-%D8%B1%D8%A7-%D8%A8%D8%AE%D8%B4%DB%8C%D8%AF-%D8%AE%D9%88%D8%AF%D8%B4-%D8%AF%D8%B1-%D9%85%D9%86%D8%AC%D9%84%D8%A7%D8%A8-%DA%AF%D8%B1%D9%81%D8%AA%D8%A7%D8%B1-%D8%B4%D8%AF-%D8%B1%D8%B3%D9%88%D8%A7%DB%8C%DB%8C-%D8%A7%D8%B2-%D8%A7%DB%8C%D9%86-%D8%A8%D8%AF%D8%AA%D8%B1-%D9%86%D9%85%DB%8C-%D8%B4%D8%AF" target="_blank" title="خانم دکتر شوهرش را بخشید و  خودش در منجلاب گرفتار شد ! / رسوایی از این بدتر نمی شد !" itemprop="url">
                خانم دکتر شوهرش را بخشید و  خودش در منجلاب گرفتار شد ! / رسوایی از این بدتر نمی شد !              </a>
          </li>
              </ul>
  </section>
  </div>
  <!-- *.*.*..*.*.*.*. END OF WHAT OTHERS READ *.*.*..*.*.*.*.-->
  <!-- *.*.*..*.*.*.*. START ANSWERS*.*.*..*.*.*.*.-->
  <div class="margin-bottom-16">
          <section class="answer-cnt" data-element-name="VIEW_H" itemscope="" itemtype="https://schema.org/CreativeWork">
      <header class="default-header">
        <h2 class="title">
          <i class="fa fa-th"></i>
          <a href="https://www.rokna.net/answers" title="پرسش و پاسخ">
            پرسش و پاسخ          </a>
        </h2>
      </header>
      <!-- START TAB -->
      <div class="tab-one primary-multi-tab global-box-shadow margin-bottom-16" itemscope="" itemtype="http://schema.org/CreativeWork">
        <!-- tab-title -->
        <ul class="tabs tabs1" id="multi-tabs">
                              <li class="active">
        <button type="button">
          آخرین        </button>
      </li>
                              <li>
        <button type="button">
          حقوقی        </button>
      </li>
                            <li>
        <button type="button">
          روانشناسی        </button>
      </li>
                            <li>
        <button type="button">
          سلامت        </button>
      </li>
            </ul>
        <!-- tab-content -->
        <div id="tab-content1">
          <!-- LAST ANSWERS -->
                              <div class="tab_content visible" data-element-name="VIEW_H1" itemscope="" itemtype="http://schema.org/CreativeWork">
        <ul class="first-tab-list all-list ans-list global-scroll">
                        <li>
                <i class="i-grey fa fa-external-link-square"></i>
                <a href="/answers/question/5132" target="_blank" title="کسی میدونه سیستم Govermental Evisa Sy..." itemprop="url">
                  کسی میدونه سیستم Govermental Evisa Sy...                </a>
              </li>
                        <li>
                <i class="i-grey fa fa-external-link-square"></i>
                <a href="/answers/question/5131" target="_blank" title="ویزای تضمینی کانادا واقعا ممکن هست؟" itemprop="url">
                  ویزای تضمینی کانادا واقعا ممکن هست؟                </a>
              </li>
                        <li>
                <i class="i-grey fa fa-external-link-square"></i>
                <a href="/answers/question/5130" target="_blank" title="ویزای کانادای الکترونیکی چگونه باید اقدام کنم و بگیرم؟" itemprop="url">
                  ویزای کانادای الکترونیکی چگونه باید اقدام کنم و بگیرم؟                </a>
              </li>
                        <li>
                <i class="i-grey fa fa-external-link-square"></i>
                <a href="/answers/question/5076" target="_blank" title="علاقه به زندگی ندارم" itemprop="url">
                  علاقه به زندگی ندارم                </a>
              </li>
                        <li>
                <i class="i-grey fa fa-external-link-square"></i>
                <a href="/answers/question/5075" target="_blank" title="همسرم خودخواهم به من خیانت کرده است" itemprop="url">
                  همسرم خودخواهم به من خیانت کرده است                </a>
              </li>
                        <li>
                <i class="i-grey fa fa-external-link-square"></i>
                <a href="/answers/question/5074" target="_blank" title="با بیماری که حاضر نیست به پزشک برود چکار کنیم؟" itemprop="url">
                  با بیماری که حاضر نیست به پزشک برود چکار کنیم؟                </a>
              </li>
                        <li>
                <i class="i-grey fa fa-external-link-square"></i>
                <a href="/answers/question/5073" target="_blank" title="به خاطر توهین‌های همسرم اعتماد به نفس ندارم" itemprop="url">
                  به خاطر توهین‌های همسرم اعتماد به نفس ندارم                </a>
              </li>
                        <li>
                <i class="i-grey fa fa-external-link-square"></i>
                <a href="/answers/question/5072" target="_blank" title="احساس کمبود عاطفی دارم" itemprop="url">
                  احساس کمبود عاطفی دارم                </a>
              </li>
                        <li>
                <i class="i-grey fa fa-external-link-square"></i>
                <a href="/answers/question/5071" target="_blank" title="خانواده همسرم به قولشان عمل نکردند" itemprop="url">
                  خانواده همسرم به قولشان عمل نکردند                </a>
              </li>
                        <li>
                <i class="i-grey fa fa-external-link-square"></i>
                <a href="/answers/question/5070" target="_blank" title="چگونه افکار منفی را از خودم دور کنم؟" itemprop="url">
                  چگونه افکار منفی را از خودم دور کنم؟                </a>
              </li>
                  </ul>
      </div>
                <!-- END OF MOST VIEW -->
          <!-- MOST COMMENT -->
                        <div class="tab_content" data-element-name="VIEW_H2" itemscope="" itemtype="http://schema.org/CreativeWork">
        <ul class="first-tab-list all-list ans-list global-scroll">
                        <li>
                <i class="i-grey fa fa-external-link-square"></i>
                <a href="/answers/question/5131" target="_blank" title="ویزای تضمینی کانادا واقعا ممکن هست؟" itemprop="url">
                  ویزای تضمینی کانادا واقعا ممکن هست؟                </a>
              </li>
                        <li>
                <i class="i-grey fa fa-external-link-square"></i>
                <a href="/answers/question/5130" target="_blank" title="ویزای کانادای الکترونیکی چگونه باید اقدام کنم و بگیرم؟" itemprop="url">
                  ویزای کانادای الکترونیکی چگونه باید اقدام کنم و بگیرم؟                </a>
              </li>
                        <li>
                <i class="i-grey fa fa-external-link-square"></i>
                <a href="/answers/question/4658" target="_blank" title="حساب مشترک بانکی مسوولیت تضامنی دارد؟" itemprop="url">
                  حساب مشترک بانکی مسوولیت تضامنی دارد؟                </a>
              </li>
                        <li>
                <i class="i-grey fa fa-external-link-square"></i>
                <a href="/answers/question/4655" target="_blank" title="اسقاط کافه خیارات یعنی چه؟" itemprop="url">
                  اسقاط کافه خیارات یعنی چه؟                </a>
              </li>
                        <li>
                <i class="i-grey fa fa-external-link-square"></i>
                <a href="/answers/question/4654" target="_blank" title="رضایت اجباری ارزش حقوقی دارد؟" itemprop="url">
                  رضایت اجباری ارزش حقوقی دارد؟                </a>
              </li>
                        <li>
                <i class="i-grey fa fa-external-link-square"></i>
                <a href="/answers/question/4650" target="_blank" title="جرم کردن در زمانی که خواب هستیم مجازات دارد؟" itemprop="url">
                  جرم کردن در زمانی که خواب هستیم مجازات دارد؟                </a>
              </li>
                        <li>
                <i class="i-grey fa fa-external-link-square"></i>
                <a href="/answers/question/4649" target="_blank" title="همسرم با بچه 2 ساله قهر  کرده و رفته چکار کنم؟" itemprop="url">
                  همسرم با بچه 2 ساله قهر  کرده و رفته چکار کنم؟                </a>
              </li>
                        <li>
                <i class="i-grey fa fa-external-link-square"></i>
                <a href="/answers/question/4648" target="_blank" title="حکم پناه دادن به متهم چیست؟" itemprop="url">
                  حکم پناه دادن به متهم چیست؟                </a>
              </li>
                        <li>
                <i class="i-grey fa fa-external-link-square"></i>
                <a href="/answers/question/4645" target="_blank" title="مجازات جعل سمت و سند چیست؟" itemprop="url">
                  مجازات جعل سمت و سند چیست؟                </a>
              </li>
                        <li>
                <i class="i-grey fa fa-external-link-square"></i>
                <a href="/answers/question/4644" target="_blank" title="مامور دولتی که وظیفه خود را درست انجام ندهد چه مجازاتی دارد؟" itemprop="url">
                  مامور دولتی که وظیفه خود را درست انجام ندهد چه مجازاتی دارد؟                </a>
              </li>
                  </ul>
      </div>
              <!-- END OF MOST COMMENT -->
          <!-- MOST VIEW -->
                        <div class="tab_content" data-element-name="VIEW_H3" itemscope="" itemtype="http://schema.org/CreativeWork">
        <ul class="first-tab-list all-list ans-list global-scroll">
                        <li>
                <i class="i-grey fa fa-external-link-square"></i>
                <a href="/answers/question/5076" target="_blank" title="علاقه به زندگی ندارم" itemprop="url">
                  علاقه به زندگی ندارم                </a>
              </li>
                        <li>
                <i class="i-grey fa fa-external-link-square"></i>
                <a href="/answers/question/5075" target="_blank" title="همسرم خودخواهم به من خیانت کرده است" itemprop="url">
                  همسرم خودخواهم به من خیانت کرده است                </a>
              </li>
                        <li>
                <i class="i-grey fa fa-external-link-square"></i>
                <a href="/answers/question/5074" target="_blank" title="با بیماری که حاضر نیست به پزشک برود چکار کنیم؟" itemprop="url">
                  با بیماری که حاضر نیست به پزشک برود چکار کنیم؟                </a>
              </li>
                        <li>
                <i class="i-grey fa fa-external-link-square"></i>
                <a href="/answers/question/5073" target="_blank" title="به خاطر توهین‌های همسرم اعتماد به نفس ندارم" itemprop="url">
                  به خاطر توهین‌های همسرم اعتماد به نفس ندارم                </a>
              </li>
                        <li>
                <i class="i-grey fa fa-external-link-square"></i>
                <a href="/answers/question/5072" target="_blank" title="احساس کمبود عاطفی دارم" itemprop="url">
                  احساس کمبود عاطفی دارم                </a>
              </li>
                        <li>
                <i class="i-grey fa fa-external-link-square"></i>
                <a href="/answers/question/5071" target="_blank" title="خانواده همسرم به قولشان عمل نکردند" itemprop="url">
                  خانواده همسرم به قولشان عمل نکردند                </a>
              </li>
                        <li>
                <i class="i-grey fa fa-external-link-square"></i>
                <a href="/answers/question/5070" target="_blank" title="چگونه افکار منفی را از خودم دور کنم؟" itemprop="url">
                  چگونه افکار منفی را از خودم دور کنم؟                </a>
              </li>
                        <li>
                <i class="i-grey fa fa-external-link-square"></i>
                <a href="/answers/question/5069" target="_blank" title="از بعضی حرف‌های شوهرم ناراحت می‌شوم" itemprop="url">
                  از بعضی حرف‌های شوهرم ناراحت می‌شوم                </a>
              </li>
                        <li>
                <i class="i-grey fa fa-external-link-square"></i>
                <a href="/answers/question/5068" target="_blank" title="شوهرم اهل کار و زندگی نیست" itemprop="url">
                  شوهرم اهل کار و زندگی نیست                </a>
              </li>
                        <li>
                <i class="i-grey fa fa-external-link-square"></i>
                <a href="/answers/question/5067" target="_blank" title="به خاطر اعتیاد پدرم خواستگار ندارم" itemprop="url">
                  به خاطر اعتیاد پدرم خواستگار ندارم                </a>
              </li>
                  </ul>
      </div>
            <!-- END OF MOST VIEW -->
          <!-- MOST COMMENT -->
                        <div class="tab_content" data-element-name="VIEW_H4" itemscope="" itemtype="http://schema.org/CreativeWork">
        <ul class="first-tab-list all-list ans-list global-scroll">
                        <li>
                <i class="i-grey fa fa-external-link-square"></i>
                <a href="/answers/question/4643" target="_blank" title="عادت بدی دارم که موی سر خودم را میکنم" itemprop="url">
                  عادت بدی دارم که موی سر خودم را میکنم                </a>
              </li>
                        <li>
                <i class="i-grey fa fa-external-link-square"></i>
                <a href="/answers/question/4642" target="_blank" title="بعد از بسته شدن صفحه رشد راهی برای بلندتر شدن قد هست؟" itemprop="url">
                  بعد از بسته شدن صفحه رشد راهی برای بلندتر شدن قد هست؟                </a>
              </li>
                        <li>
                <i class="i-grey fa fa-external-link-square"></i>
                <a href="/answers/question/4592" target="_blank" title="یبوست نوزادم ربطی به عفونت قبلی دارد؟" itemprop="url">
                  یبوست نوزادم ربطی به عفونت قبلی دارد؟                </a>
              </li>
                        <li>
                <i class="i-grey fa fa-external-link-square"></i>
                <a href="/answers/question/4591" target="_blank" title="لکنت بچه ها درمانی دارد؟" itemprop="url">
                  لکنت بچه ها درمانی دارد؟                </a>
              </li>
                        <li>
                <i class="i-grey fa fa-external-link-square"></i>
                <a href="/answers/question/4578" target="_blank" title="با مصرف قرص ضدبارداری احتمال حاملگی هست؟" itemprop="url">
                  با مصرف قرص ضدبارداری احتمال حاملگی هست؟                </a>
              </li>
                        <li>
                <i class="i-grey fa fa-external-link-square"></i>
                <a href="/answers/question/4575" target="_blank" title="از بین بردن  آماس سینه راهی دارد؟" itemprop="url">
                  از بین بردن  آماس سینه راهی دارد؟                </a>
              </li>
                        <li>
                <i class="i-grey fa fa-external-link-square"></i>
                <a href="/answers/question/4574" target="_blank" title="درمان اسهال نوزاد چیست؟" itemprop="url">
                  درمان اسهال نوزاد چیست؟                </a>
              </li>
                        <li>
                <i class="i-grey fa fa-external-link-square"></i>
                <a href="/answers/question/4573" target="_blank" title="درمان بیماری کرم حلقه ای چیست؟" itemprop="url">
                  درمان بیماری کرم حلقه ای چیست؟                </a>
              </li>
                        <li>
                <i class="i-grey fa fa-external-link-square"></i>
                <a href="/answers/question/4572" target="_blank" title="میتوانیم به جای لبنیات از مکمل استفاده کنیم؟" itemprop="url">
                  میتوانیم به جای لبنیات از مکمل استفاده کنیم؟                </a>
              </li>
                        <li>
                <i class="i-grey fa fa-external-link-square"></i>
                <a href="/answers/question/4571" target="_blank" title="جای زخم روی صورت دخترم خوب میشود؟" itemprop="url">
                  جای زخم روی صورت دخترم خوب میشود؟                </a>
              </li>
                  </ul>
      </div>
              <!-- END OF MOST COMMENT -->
        </div>
      </div>
      <!-- END OF TAB -->
    </section>

      </div>
  <!-- *.*.*..*.*.*.*. END OF OTHERS ANSWERS*.*.*..*.*.*.*.-->
  <div class="container margin-bottom-16 default-bg white padding-top-16 padding-bottom-8">
    <!-- POSITION_G4-->
    <div class="home-zxc">
          </div>
    <!-- POSITION_G4-->
    <!-- POSITION_G5-->
    <div class="home-zxc">
          </div>
    <!-- POSITION_G5-->
  </div>
</div>
</div>
			</div>
		</div>
	</main>
	<!-- *.*.*.*.*.*.*.*.*.*. START-FOOTER *.*.*.*.*.*.*.*.*.*.-->
	<footer class="main-footer noprint" itemscope="" itemtype="http://schema.org/CreativeWork">
    <div class="main-wrapper">
      <div class="rokna-robon-one">
        <div class="sanjagh">
          <p>
            <a href="http://sanjagh.com" title="سنجاق">
                            "سنجاق"
                          </a>
                          مجری انحصاری تبلیغات رکنا
                      </p>
        </div>
        <div class="footer-socials">
          <div>
          <a title="rss" href="/feeds/" title="" target="_blank">
            <i class="rss fa fa-rss-square"></i>
        </a>
              <a target="_blank" title="instagram" href="https://instagram.com/rokna.official" class="insta">
      <i class="instagram fa fa-instagram"></i>
    </a>
    <a target="_blank" title="twitter" href="https://twitter.com/roknapress" class="twit">
      <i class="twitter fa fa-twitter-square"></i>
    </a>
    <a target="_blank" title="rokna-telegram" href="https://t.me/rokna_news" class="telegram">
      <i class="twitter fa fa-telegram"></i>
    </a>
    </div>
        </div>
              </div>
    </div>
    <!-- 2 -->
            <div class="rokna-robon-two">
      <div class="main-wrapper">
        <!-- trend -->
        <div class="footer-trend">
          <div data-element-name="" >
    <p> 
           
          موضوعات داغ
              </p>

        <a target="_blank" title="متکدیان در مشهد" href="/tags/%D9%85%D8%AA%DA%A9%D8%AF%DB%8C%D8%A7%D9%86_%D8%AF%D8%B1_%D9%85%D8%B4%D9%87%D8%AF">
        <i class="fa fa-tag"></i>
        متکدیان در مشهد    </a>
      <a target="_blank" title="محمدرضا و فرح" href="/tags/%D9%85%D8%AD%D9%85%D8%AF%D8%B1%D8%B6%D8%A7_%D9%88_%D9%81%D8%B1%D8%AD">
        <i class="fa fa-tag"></i>
        محمدرضا و فرح    </a>
      <a target="_blank" title="مهدی طارمی" href="/tags/%D9%85%D9%87%D8%AF%DB%8C_%D8%B7%D8%A7%D8%B1%D9%85%DB%8C">
        <i class="fa fa-tag"></i>
        مهدی طارمی    </a>
      <a target="_blank" title="ملیکا شریفی نیا" href="/tags/%D9%85%D9%84%DB%8C%DA%A9%D8%A7_%D8%B4%D8%B1%DB%8C%D9%81%DB%8C_%D9%86%DB%8C%D8%A7">
        <i class="fa fa-tag"></i>
        ملیکا شریفی نیا    </a>
      <a target="_blank" title="روشنک عجمیان" href="/tags/%D8%B1%D9%88%D8%B4%D9%86%DA%A9_%D8%B9%D8%AC%D9%85%DB%8C%D8%A7%D9%86">
        <i class="fa fa-tag"></i>
        روشنک عجمیان    </a>
      <a target="_blank" title="سحر قریشی بیوگرافی" href="/tags/%D8%B3%D8%AD%D8%B1_%D9%82%D8%B1%DB%8C%D8%B4%DB%8C_%D8%A8%DB%8C%D9%88%DA%AF%D8%B1%D8%A7%D9%81%DB%8C">
        <i class="fa fa-tag"></i>
        سحر قریشی بیوگرافی    </a>
      <a target="_blank" title="سحر قریشی" href="/tags/%D8%B3%D8%AD%D8%B1_%D9%82%D8%B1%DB%8C%D8%B4%DB%8C">
        <i class="fa fa-tag"></i>
        سحر قریشی    </a>
      <a target="_blank" title="سحر قریشی اینستاگرام" href="/tags/%D8%B3%D8%AD%D8%B1_%D9%82%D8%B1%DB%8C%D8%B4%DB%8C_%D8%A7%DB%8C%D9%86%D8%B3%D8%AA%D8%A7%DA%AF%D8%B1%D8%A7%D9%85">
        <i class="fa fa-tag"></i>
        سحر قریشی اینستاگرام    </a>
      <a target="_blank" title="علیرضا قربانی" href="/tags/%D8%B9%D9%84%DB%8C%D8%B1%D8%B6%D8%A7_%D9%82%D8%B1%D8%A8%D8%A7%D9%86%DB%8C">
        <i class="fa fa-tag"></i>
        علیرضا قربانی    </a>
      <a target="_blank" title="فرشته حسینی" href="/tags/%D9%81%D8%B1%D8%B4%D8%AA%D9%87_%D8%AD%D8%B3%DB%8C%D9%86%DB%8C">
        <i class="fa fa-tag"></i>
        فرشته حسینی    </a>
      <a target="_blank" title="آگهی های دولتی" href="/tags/آگهی_های_دولتی">
      <i class="fa fa-tag"></i>
      آگهی های دولتی    
    </a>
</div>
        </div>
      </div>
    </div>
        <!-- 3 -->
    <!-- list-footer-news -->
    <div class="main-wrapper">
      <div class="footer-news-list-cnt">
        <!--parvandehay vije  -->
                <!--havades  -->
                <!--chehreha  -->
                <!--parvanehaye siah  -->
              </div>
    </div>
    <!-- 4 -->
    <div class="footer-last-part">
      <div class="main-wrapper">
        <div class="last-part-cnt">
          <!-- MOSTVISIT VIDEO -->
                    <!-- END OF MOSTVISIT VIDEO -->
          <!-- MOSTVISIT NEWS -->
          
          <!-- END OF MOSTVISIT NEWS -->
          <!-- SHARE NEWSLET،ER -->
                  </div>
      </div>
    </div>
    <!-- 5 -->
    <div class="copy-right">
      <div class="main-wrapper">
        <div class="copy-right-cnt">
          <div class="lateral-menu">
            
              <ul>
              
                  <li class="float mr16" >
                      <a href="/صفحه-%D8%AA%D9%85%D8%A7%D8%B3-%D8%A8%D8%A7-%D9%85%D8%A7-49" title=" تماس با ما" target="_blank">
                        <span>
                           تماس با ما                        </span>
                      </a>
                  </li>
              
                  <li class="float mr16" >
                      <a href="/صفحه-%D8%AF%D8%B1%D8%A8%D8%A7%D8%B1%D9%87-%D9%85%D8%A7-50" title=" درباره ما" target="_blank">
                        <span>
                           درباره ما                        </span>
                      </a>
                  </li>
              
                  <li class="float mr16" >
                      <a href="/صفحه-%D8%AA%D8%B9%D8%B1%D9%81%D9%87-%D8%AA%D8%A8%D9%84%DB%8C%D8%BA%D8%A7%D8%AA-84" title=" تعرفه تبلیغات" target="_blank">
                        <span>
                           تعرفه تبلیغات                        </span>
                      </a>
                  </li>
              
                  <li class="float mr16" >
                      <a href="/بخش-%D8%B4%D9%87%D8%B1%D9%88%D9%86%D8%AF-%D8%AE%D8%A8%D8%B1%D9%86%DA%AF%D8%A7%D8%B1-40" title=" شهروند خبرنگار" target="_blank">
                        <span>
                           شهروند خبرنگار                        </span>
                      </a>
                  </li>
              
                  <li class="float mr16" >
                      <a href="/answers" title=" پرسش و پاسخ" target="_blank">
                        <span>
                           پرسش و پاسخ                        </span>
                      </a>
                  </li>
              
                  <li class="float mr16" >
                      <a href="https://www.rokna.net/newsstudios/archive/" title="آرشیو" target="_blank">
                        <span>
                          آرشیو                        </span>
                      </a>
                  </li>
                        </ul>
    
          </div>
          <div class="left-cp">
            <p class="rokna">
                              <a href="/">
                  سایت اینترنتی رکنا
                  </a>
                  <i class="fa fa-copyright"></i>
                  کلیه حقوق متعلق به
                  <a href="/">
                      سایت اینترنتی رکنا
                  </a>
                  است

                          </p>
                               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105.833 105.833" height="40" width="40"><path d="M71.967 51.827L31.75 92.043v5.324h40.217z" fill="#ffa000"/><path d="M52.917 2.117a50.8 50.8 0 00-50.8 50.8 50.8 50.8 0 0050.8 50.8 50.8 50.8 0 0050.8-50.8 50.8 50.8 0 00-50.8-50.8zm0 8.466A42.333 42.333 0 0195.25 52.917a42.333 42.333 0 01-16.933 33.815V52.917a25.4 25.4 0 00-7.451-17.95l7.45-7.45H52.918a25.4 25.4 0 00-17.95 7.45l-.011-.011L22.983 46.93l-5.987 5.987 5.987 5.986 8.98 8.98L20.158 79.69a42.333 42.333 0 01-9.575-26.772 42.333 42.333 0 0142.334-42.334zm0 25.4A16.933 16.933 0 0169.85 52.917V91.66a42.333 42.333 0 01-16.933 3.59 42.333 42.333 0 01-26.772-9.575l4.32-4.32 7.765-7.765 5.707-5.706-2.994-2.994-2.993-2.993-8.98-8.98 11.973-11.974.007.007a16.933 16.933 0 0111.967-4.967zM37.95 61.897l8.448-8.448a5.292 5.292 0 002.285.526 5.292 5.292 0 005.292-5.292 5.292 5.292 0 00-5.292-5.291 5.292 5.292 0 00-5.291 5.291 5.292 5.292 0 003.006 4.765z" fill="#0277bd"/></svg>
                                    <a class="aasaam" href="https://aasaam.com/product/cms" rel="nofollow" title="طراحی و اجرای سایت های خبری و خبرگزاری : گروه نرم افزاری آسام">
                          طراحی سایت خبری و خبرگزاری آسام
                    </a>
                                            </div>
        </div>
      </div>
    </div>

</footer>
	<!-- *.*.*.*.*.*.*.*.*.*.END OF FOOTER *.*.*.*.*.*.*.*.*.*.-->
</div>


<!--  randomize zxc  -->
<script>
document.addEventListener("DOMContentLoaded", function () {

});
</script>
<!-- <script>
document.addEventListener("DOMContentLoaded", function () {
  var randNum = Math.floor(Math.random() * 5);
    console.log(randNum);
  if (randNum === 0) {
    console.log("sanjagh is showing");
    for (var x of document.querySelectorAll("[id*=mediaad-]")) {
      x.remove()
    }
  } else if (randNum > 0) {
    console.log("mediaad is showing");
    for (var x of document.querySelectorAll("[id*=sanjagh_]")) {
      x.remove()
    }
  }
});
</script> -->

<script>
  ! function (e, t, n) {
    var i = t.getElementsByTagName("script")[0],
      t = t.createElement("script"),
      r = (t.async = !0, t.defer = !0, "https://" + n.s + "/_/" + (new Date).toISOString().split("T")[0].replace(/[^0-9]+/g, ''));
    "URLSearchParams" in e && "entries" in Object && "Promise" in e && "any" in Promise ? (t.setAttribute("data-i", e.btoa(encodeURIComponent(JSON.stringify(n)))), t.src = r + "/a.js") : (e.aai_lid = n, t.src = r + "/l.js"), i.parentNode.insertBefore(t, i)
  }(window, document, {
    "i": "5JFzrpQ7MUXh",
    "s": "analyt.ir"
  });
</script>


<!-- <script>
  var head = document.getElementsByTagName("head")[0];
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.async = true;
  var d = new Date();
  script.src = ["https://s1.mediaad.org/serve/rokna.net/loader.js?t=" + d.getFullYear() + d.getMonth() + d.getDate() + d.getHours(),
    "https://s1.mediaad.org/serve/rokna.net/loader.js?t=" + d.getFullYear() + d.getMonth() + d.getDate() + d.getHours(),
    "https://s1.mediaad.org/serve/rokna.net/loader.js?t=" + d.getFullYear() + d.getMonth() + d.getDate() + d.getHours(),
    "https://cdn.sanjagh.com/assets/sdk/www.rokna.net/client.js?t=" + d.getFullYear() + d.getMonth() + d.getDate() + d.getHours()
  ][Math.floor(Math.random() * 4)];
  head.appendChild(script);
</script> -->


<!-- Start of Sanjagh Native Ads old -->
<!-- <script type="text/javascript"> var h=document.getElementsByTagName("head")[0],s=document.createElement("script");s.async=!0,s.defer=!0,s.type="text/javascript",d=new Date,s.src="https://cdn.sanjagh.com/assets/sdk/www.rokna.net/client.js?t="+d.getFullYear().toString()+d.getMonth()+d.getDate()+d.getHours(),h.appendChild(s);
</script> -->
<!-- end of Sanjagh Native Ads -->

<!-- MediaAd Script old -->
<script>
  var head = document.getElementsByTagName("head")[0];
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.async = 1;
  script.src = "https://s1.mediaad.org/serve/rokna.net/loader.js";
  head.appendChild(script);
</script>
<!-- End Of MediaAd Script -->

<!-- Global site tag (gtag.js) - Google Analytics -->
<!-- <script async src="https://www.googletagmanager.com/gtag/js?id=UA-106912304-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-106912304-1');
</script> -->


<!-- Sanjagh notif Script -->
<script>!function(e,t,n,s){var a=t.createElement("script"),r=new Date;a.src="https://cdn.sanjagh.com/assets/notif-sdk/notif2.js?t="+r.getFullYear().toString()+r.getMonth()+r.getDate()+r.getHours(),a.async=!0,a.defer=!0,e.snj_notif={publisher_id:"5e47eb4b310a2a511e1d1862",delay:5,ask_location:!1};var i=t.getElementsByTagName("script")[0];i.parentNode.insertBefore(a,i)}(window,document);</script>
<!-- End Sanjagh Notif Script-->

<!-- Google tag (gtag.js) GA4  -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-311ESJMFSB"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-311ESJMFSB');
</script>


<!-- <script type="text/javascript" language="javascript" src="https://panel.adtodate.net/scripts/rokna.js" ></script> -->

<script type="text/javascript" src="https://cdn.adtodate.net/script/network.adtodate.net_banner.js?sid=113"></script>   </body>
</html>
