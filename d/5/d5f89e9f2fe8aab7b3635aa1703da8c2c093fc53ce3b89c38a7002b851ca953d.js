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
    font-display: optional;
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
    background-color: #eaf7ff;/* #f1f3f4;*/
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
    padding:0; }
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
    margin: 10px 8px 5px 0px;
}


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
.menu-btn{
    float: left
}
header .header-option {
    /* float: right;*/
    padding: 0;
    margin: 0;
}
header .header-option .tools-btn, header .header-option .menu-btn {
    margin-top: 10px;   }
header .header-option .tools-btn svg, header .header-option .menu-btn svg {
    width: 22px;
    height: 22px; }
header .header-option .tools-btn svg path, header .header-option .menu-btn svg path {
    fill: #535353; } /** color of option botton */
header .left-side {
    float: left;
    position: relative;
}
header .right-side {
    float: right;
    position: relative;
    margin-right: 10px;
    width: 250px;
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
    margin-top: 5px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 5px;
    display: table;
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

.news-list-items li .linktextalignindex{
    text-align: left !important;
    padding-left: 5px;
}

.grey-bg {
    background: #eaf7ff; /*f7f8f9  eaf7ff*/

}

.white-bg {
    background: #fff; }

.padding-sides {
    padding: 0 31px; }
.font11 {
    font-size: 11px; }

.main-slider {
    margin: 15px 0; }
.main-slider .item img {
    min-height: 185px;
    background: url("../images/loading.gif") center center no-repeat, #fff;
    background-size: 15%;
    max-height: 250px;
    overflow: hidden; }

.wrapper-news-part {
    padding: 5px 0px 5px 0px;
}
.wrapper-news-part-left {
    padding: 5px 5px 5px 0px;
}
.wrapper-news-part-right {
    padding: 5px 0px 5px 5px;
}
.news-part {
    padding: 20px 15px 10px 15px;
    margin: 0 0 20px 0;
    white-space: nowrap;
    text-align: right;
    text-overflow: ellipsis;
    border-radius: 5px;
    box-shadow: 5px 5px 5px 0px rgba(112, 141, 164, 0.2);
    display: block;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
}
.news-part-video {
    padding: 20px 15px 10px 15px;
    margin: 0 0 20px 0;
    text-align: right;
    text-overflow: ellipsis;
    border-radius: 5px;
    box-shadow: 5px 5px 5px 0px rgba(112, 141, 164, 0.2);
    display: block;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
}

.box-title {
    margin: 0px 0 20px 0;
    padding: 0;
}
.box-title .title-txt a{
    position: relative;
    font-size: 14px;
    color: #005b91;/*006aa9*/
    padding: 10px 10px 0px 10px;
    background: #fff;
    margin-bottom: 10px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.box-title .title-txt{
    position: relative;
    font-size: 14px;
    color: #005b91;/*006aa9*/
    padding: 10px 10px 0px 10px;
    background: #fff;
    margin-bottom: 10px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
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
    height:19px;
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
    height: 19px;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #000;/*#00131f*/
    font-size: 12px;
    padding:0; }


.news-list-items {
    border-right: none;
    background: #fff;
    margin-bottom: 10px; }
.news-list-items li {
    overflow: hidden;
    width: 100%;
    float: right;
    padding: 4px 7px 4px 3px;
    background: #f9f9f9;
    border-right: 1px solid #00a0ff;

}
.news-list-items li:nth-child(2n) {
    background: #fff;
    border-right-color: #e3e4e8; }
.news-list-items li .refrence {
    font-size: 11px;
    left: 25px;
    top: 4px;
    color: #333;
    min-width: 88px;
    overflow: hidden;
    text-align: right; }
.news-list-items li .refrence2 {
    font-size: 11px;
    left: 25px;
    top: 4px;
    color: #333;
    padding-left: 5px;
    overflow: hidden;
    text-align: right; }
.news-list-items li > a {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #142a37;/* color: #00131f; */
    font-size: 12px;
    padding: 4px 0 4px 10px; }

.news-list-items li > a:hover {
    color: #017dc6; }

.news-list-items li .like-pan {
    font-size: 11px;
    margin-top: 3px;
    color:#666;
}

.like-pan a svg:active {
    fill: #fff;
    transition: all ease 0.3s;
}


.news-list-items li .like-pan.active .like-btn {
    -webkit-animation: 0.8s ease 0s normal forwards 0.8 fadein;
    animation: 0.8s ease 0s normal forwards 0.8 fadein;
    display: inline-block;
    margin-left: 0px; }


.news-list-items li .rating-pan {
    font-size: 11px;
    margin-top: 0px;
    padding-top: 5px;
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
    font-size: 15px;
    position: relative;
    top: 0px;
    left: 0px;
    margin-right: 10px;
    transition: all ease 0.3s; }
.news-list-items li .like-btn {
    color: #b2b2b2;
    font-size: 15px;
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
    content: 'ÃƒÂ¢Ã‹Å“Ã¢â‚¬Â¦';
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
    content: 'ÃƒÂ¢Ã‹Å“Ã¢â‚¬Â¦'; }

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
    padding-right: 10px;
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
    background: #535353 !important; }
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
    color: #535353;
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
    margin-top: 20px;
    text-align: center;}
footer .footer-links li {
    display: inline-block;
    list-style: none;
}
footer .footer-links li a {
    position: relative;
    color: #ffffff;
    font-size: 12px;
    padding: 10px 15px;
    margin: 10px 0;
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
.sociallir{
    line-height: 40px;
    display: block;
    text-align: right;
}
.social-icons2 li{
    line-height: 40px;
    display: block;
    text-align: right;
}
.social-icons {
    text-align: center;
    margin-bottom: 10px; }
.social-icons li {
    display: inline-block;
    margin: 0 1px;
    position: relative; }
.social-icons li a {
    color:#535353;
}
.social-icons li a svg {
    width: 20px;
    height: 20px; }
.social-icons li a svg path {
    transition: all ease 0.2s; }
.social-icons li.rss-icon a:hover svg path {
    fill: #ffc107; }
.social-icons li.app-icon a:hover svg path {
    color: #057ec6;
    fill: #057ec6 !important; }
.social-icons li.app-icon a:hover svg {
    color: #057ec6;
    fill: #057ec6 !important; }
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
    padding: 10px 15px;
    background-color: #eaeaea;
    border-radius: 0px;
    margin-bottom: 5px;
    margin-left: 10px;
    text-align: center;
    font-size: 13px;
    overflow: hidden;
    border-radius: 5px;}
.hash-tags > span {
    margin-right: 5px;
    color: #142a37;
    /* color: 4a4a4a;*/
}
.hash-tags a {
    /* color: #2ea4e6; 006aa9*/
    color: #004f7d;
    padding: 5px 7px;
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
    margin: 0px;
    white-space: nowrap;
    text-align: right;
    text-overflow: ellipsis;

}
.toplinksd2 {
    padding: 0 5px 0 5px;
    background-color: #fff;
    border-radius: 0px;
    float: right;
    margin: 0px;
    white-space: nowrap;
    text-align: right;
    text-overflow: ellipsis;

}
.toplinks {
    padding: 5px 0 39px 0;
    margin-right: 10px;
    background-color: white;
    border-radius: 5px;

}
.toplinkli {
    background-color: #fff;
    border-right-color: #e3e4e8;
}

.toplinkli div {
    padding-top: 0px;
    margin-top: 2px;
}

.news-list-toplink {
    border-right: none;
    background: #ccc;
    margin-bottom: 0px;
    -webkit-box-shadow: 5px 1px 4px -3px #333;
    -moz-box-shadow: 5px 1px 4px -3px #333;
    box-shadow: -1px 0px 2px -3px #333; }
.news-list-toplink li {
    overflow:hidden;width:100%;float:right;
    padding-right: 10px;
    padding: 5px 7px 5px 3px;
    background: #fff;
    border-right: 1px solid #00a0ff; }
.news-list-toplink li .refrence {
    font-size: 11px;
    left: 25px;
    top: 4px;
    color: #333;
    min-width: 88px;
    overflow: hidden;
    text-align: center; }
.minw30{
    width: 30px;
    min-width: 30px;
}
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
    margin-top: 5px;
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
    color: #333;
    overflow: hidden;
    text-align: right; }
.news-list-toplink li > a {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #142a37;/*#00131f*/
    font-size: 12px;
    padding: 4px 0; }
.news-list-toplink li > a:hover {
    color: #017dc6; }
.news-list-toplink li .rating-pan {
    font-size: 11px;
    margin-top: 5px;
    color:#666;
}
.news-list-toplink li .rating-pan .refrence {
    font-size: 11px;
    margin-right: 10px;
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


.top-footer-cont {
    background: #575757;
    padding: 15px 0; }

.bottom-footer-cont {
    background: #515151;
    padding: 15px 0;

}

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

.refrence3align{
    float: left;
}
.nlinktb1{
    float: right;
    width: 72%;
}
.nlinkb1{
    float: right;
    width: 80%;
}
.nlinkb2{
    float: right;
    width: 77%;
}
.nlinki1{
    float: right;
    width: 77%;
}



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
    position: relative; }
body.night .social-icons li a svg {
    fill: #fff;
    color:#fff;
}
body.night .social-icons li a svg path {
    transition: all ease 0.2s; }
body.night .social-icons li.rss-icon a:hover svg path {
    fill: #ffc107 !important; }
body.night .social-icons li.app-icon a:hover svg path {
    fill: #057ec6!important;
    color:#057ec6;
}
body.night .social-icons li.app-icon a:hover svg  {
    fill: #057ec6 !important;
    color:#057ec6;
}
body.night .home-icona svg {
    fill: #fff;
}
body.night .home-icona:hover svg  {
    fill: #057ec6 !important;
}
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
body.night .buttonicon1 {
    color: #fff;
}
body.night .buttonicon1 svg path{

}

body.night .fontd{
    color: #fff;}
body.night .toplinks{
    background-color: #151820;}

.margin0{
    margin: 0;
}
.width100{width: 100%}
.height200{height:200px;overflow: hidden}
.height220{height:220px;overflow: hidden}
.height130{height:130px;overflow: hidden;}
.prelative{position: relative;}
.awebkit2lines{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    width: 100%;
}
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
    font-size: 13px;
    color: #142a37;
}
body.night .vlink{
    font-size: 13px;
    color: #fff;
}
.vresource{
    font-size: 11px;
    color: #777;
    padding-top: 10px;
    margin-top: -10px;
}
body.night .vresource{
    font-size: 11px;
    color: #c4c4c4;
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
    padding:5px 0 0 2px;
}
.logodiv{

}
body.night .toplinksd{
    background-color: #151820;
}
body.night .toplinksd2{
    background-color: #151820;
}
body.night .logodiv{

}
body.night .title-txt a{
    background-color: #0d0f14;
    color: #4eaae1;
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
body.night .news-list-items li .refrence {
    color: #c4c4c4;
}
body.night .news-list-items li .refrence2 {
    color: #c4c4c4;
}
body.night .news-list-toplink li .refrence {
    color: #c4c4c4;
}

.topbaner{
    margin: 10px 5px 5px 2px;
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
    padding: 0px;
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
    bottom:64px;
    z-index:1;
    background-repeat:no-repeat;
    display:none;
    color: #0074b9;
    /*color: #fcb712; 00a0ff*/
    font-size: 36px;
    opacity: 0.5;
    border: 0;
    background: transparent;

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
    padding: 10px 0 0 0 ;
    border-radius: 5px;
}

.adv-part {
    border-radius: 5px;
    padding: 10px 10px;
    margin: 5px 0 0 0;
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.width120 {
    width: 120px;
}
.marginleft5 {
    margin-left: 5px;
}
.hoemenupadding {
    padding: 10px 11px 0 11px;
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
    margin: 10px;
}
.page_box a{
    color: #000;
    font-size: 12px;
}
body.night .page_box a{
    color: #fff;
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
.boxtitle-txt{font-size: 13px;top: -15px;background: #fff;padding: 10px 0px 10px 13px;}
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
    border-radius: 5px;
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
.fontd {
    font-size: 12px;margin-top: 8px;;
}

.buttonicon svg:hover {
    fill: #057ec6;
}
.buttonicon {
    border: none;
    background-color: transparent;
    padding: 5px 5px 0 5px;;
    text-align: center;
    text-decoration: none;
    display: inline-block;
}
.buttonicon1 svg:hover {
    fill: #057ec6;
}
.buttonicon1 {
    border: none;
    background-color: transparent;
    padding: 8px 0px 0 10px;
    text-align: center;
    text-decoration: none;
    display: flex;
}
.buttonlike svg:hover {

}
.marginleft8 {
    margin-left: 8px;
}
.buttonlike {
    border: none;
    background-color: transparent;
    padding: 0px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    padding-top: 10px;
    margin-top: -10px;
}
.height37{
    height: 37px;
}
.margin05 {
    margin: 0px 5px 0 0px;
}
.margint05 {
    margin: 3px 5px 0 0px;
}
*:focus,
*:active,
a:active,
a:focus,
input:focus,
input:active {
    -moz-outline-style: none;
    outline:none;
    outline: 0;
}

/* Remove outline for non-keyboard :focus */
*:focus:not(.focus-visible) {
    -moz-outline-style: none;
    outline:none;
    outline: 0;
}

/* Optional: Customize .focus-visible */
.focus-visible:focus {
    outline:none;
    color: #057ec6;
}
.focus-visible:focus svg{
    fill: #057ec6;
    outline:none;
}
.twitter-icona:focus svg{
    fill:#09bcdc;
}
.app-icona:focus svg{
    fill: #057ec6;
}
.rss-icona:focus svg{
    fill: #ffc107;
}
.insta-icona:focus svg{
    fill: #dc287d;
}
.margintop10{
    margin-top: 10px;
}
.margintop5{
    margin-top: 5px;
}
.margintop20{
    margin-top: 20px;
}
.home-icona{
    padding: 10px 11px 0 11px;
}
.home-icona:focus svg{
    fill: #057ec6;
}
.settingfstext{font-size: 12px;text-align: center;float: right;margin-top: 10px;margin-right: 5px;}
body.night .settingfstext22{color: #fff;}
.settingnmtext{font-size: 12px;margin: 4px 0px 0px 10px;text-align: center;}
body.night .settingnmtext32{font-size: 12px;color: #fff;}
body.night .collapsible svg{fill: #fff;}
.settingtext{float: left;margin: 3px 7px 0px 0px;}
body.night .settingtext{color: #fff;}
.form-control2{
    height: 40px
}
.form-btn{
    margin-left: 15px;
}
.collapsible {
    background-color: transparent;
    color: #000;
    cursor: pointer;
    padding: 3px 5px 5px 5px;
    border: none;
    text-align: left;
    font-size: 12px;
    /* background: url("https://www.shahrekhabar.com/statics/svg/settings-sharp.svg") no-repeat;*/
    background-size: auto;
    background-size: 20px;
    background-position: right;
}

.active, .collapsible:hover {
    color: #057ec6;
}

.active:after {
    /* content: "\2212";*/
}
body.night .collapsible {
    background-color: transparent;
    color: #fff;
}
.settingbtn{

}
.content {
    padding: 0px 10px;
    overflow: hidden;
    transition: 0.2s ease-out;
    background: #fff;
    width: auto;

}

.border-bottom1{
    border-bottom: 1px solid #fff;
}
body.night .border-bottom1{
    border-bottom: 0;
}
.padding5-0{
    padding: 5px 0px;
}
.padding5 {
    padding: 5px;
}
.padding10 {
    padding: 10px;
}
.height40{
    height: 40px
}
.paddingtop1 {
    padding-top: 1px;
}
.paddingtop100010 {
    padding: 10px 0 0 0;
}
.paddingtop05100 {
    padding: 0 5px 10px 0;
}
.ionicon{
    height: 18px;
    width: 18px;
    margin-right: 5px;
    margin-top: -5px;
}
.ioniconl2{
    height: 18px;
    width: 18px;
    margin-right: 5px;
    margin-top: -8px;
}
.iconsvg{
    height: 20px;
    width: 20px;
}
.iconsvg:hover{
    height: 20px;
    width: 20px;
}
.spanlikecounter{
    text-align: left;direction: ltr;min-width: 30px;width: 30px;color: #333;
}

/* The switch - the box around the slider */
.switch {
    position: relative;
    display: inline-block;
    height: 24px;
    width: 53px;
    background-color: #f0f0f0;
    -webkit-transition: .4s;
    transition: all .4s ease;
    border-radius: 2em;
    padding: 2px;
    cursor: pointer;
    top: 1px;
    border: 1px solid #dbdbdb;
}

/* Hide default HTML checkbox */
.switch input {
    opacity: 1;
    width: 0;
    height: 0;
}


.switchslider {
    height: 16px;
    width: 16px;
    position: absolute;
    cursor: pointer;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: transparent;
    -webkit-transition: .2s;
    transition: .2s;
    transition: all .2s ease;
    border-radius: 2em;
    padding: 2px;
    margin-right: 2px;
    margin-top: 3px;
    background-image: url("../svg/moon.svg");

}

body.night .switch {
    background-color: #40485f;
}
body.night .switchslider {

    -webkit-transform: translateX(-31px);
    -ms-transform: translateX(-31px);
    transform: translateX(-31px);
}
.mw50 {

}
.paddinddate {
    padding: 0 0 0 10px;
}
.txtmodaltitle {
    display: inline-block;
    margin-top: 1px;
    text-align: center;
    vertical-align: top;
}

.topnav {
    padding: 2px;
    overflow: hidden;
    background-color: #fff;
    border-radius: 5px;
    position: relative;
    width: 100%;
    font-size: 12px;
    float: right;
    text-align: center;
    margin-top: 10px;
}


.topnava {
    float: right;
    display: block;
    color: #000;
    background-color: #fff;
    text-align: center;
    padding: 10px 0px;
    text-decoration: none;
    font-size: 12px;
    width: 25%;
}

.topnava:hover {
    background-color: #eee;
    color: black;
    padding-top: 8px;
    border-bottom: 2px solid #46caf7;
}

.topnava50{
    float: right;
    display: block;
    color: #000;
    background-color: #fff;
    text-align: center;
    padding: 10px 0px;
    text-decoration: none;
    font-size: 12px;
    width: 50%;
}
.topnava50:hover {
    background-color: #eee;
    color: black;
    padding-top: 8px;
    border-bottom: 2px solid #46caf7;
}

.close-menu2 {
    display: none;
    position: absolute;
    left: 5px;
    top: 5px;
    width: 35px;
    height: 30px;
    z-index: 9999;
    background: none;
    border: 0;
}
.close-menu2:after, .close-menu2:before {
    content: "";
    position: absolute;
    width: 25px;
    height: 2px;
    background: #fff;
    top: 15px;
    right: 5px;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg); }
.close-menu2:after {
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg); }

.iconmenu {
    display: none;
}
.marginleft5 {
    margin-left: 5px;
}

body.night .topnav{
    background-color: #0d0f14;
}
body.night .topnava{
    color: #fff;
    background-color: #0d0f14;
}
body.night .topnava svg{
    fill: #fff;
}
body.night .topnava50{
    color: #fff;
    background-color: #0d0f14;
}
.top-left-side{

}
.top-right-side{

}

.notife2{
    background-color: #1565C0;
    padding: 15px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    border-radius: 50%;
}
.notife2:hover{

}
.fixed-action-btn2 {
    position: fixed;
    bottom: 23px;
    padding-top: 15px;
    margin-bottom: 0;
    z-index: 997;
    margin-bottom: 50px;
    left: 23px;right: auto;
}
.ionicon28 {
    height: 28px;
    width: 28px;
}
.ionicon12 {
    height: 12px;
    width: 12px;
    margin-bottom: 4px;
}
.ionicon14 {
    height: 14px;
    width: 14px;
}
.divbappr{
    position: fixed; bottom: 0;padding:0px;z-index: 1000;width: 100%;right: 0;border-top: 1px solid #eee;text-align: center;font-size: 16px;font-weight: bold;
}
.divbappr2{background-color: #fcb813;padding: 20px;}
.divbappr3{padding: 10px;color: #fcb813;text-align: center;}
.notife{color: #fcb813;}
.topbanner1{
    margin-left: auto;
    margin-right: auto;
    height: 90px;
    width: 728px;

}

@media only screen and (max-width: 479px) {


    .news-list-items li > a{
        margin-top: 5px;
        font-size: 13px;
    }
    .news-list-toplink li > a {
        margin-top: 5px;
    }
    header .right-side {
        width: 100%;
        margin-right: 0px;
    }
    .date-text {
        font-size: 14px;
    }

    .logo img {
        width: 125px;
    }
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


    .container {
        width: 100%; }

    .right-padding25 {
        padding: 0; }

    .news-part {
        margin-bottom: 20px;
        padding: 25px 8px 10px 8px;
    }
    .news-part-video {
        margin-bottom: 20px;
        padding: 25px 8px 10px 8px;
    }

    .mw50 {
        width: 50%;
    }
    .ap-tooltip {
        display: none !important; }

    .news-list-items li .refrence{
        color: #888;  
    }
    .refrence2 {
        display: none !important; }

    footer .bottom-logo img {
        width: 100%;
        height: auto; }

    footer .footer-links {
        margin-top: 20px;
        text-align: right;
    }

    footer .footer-links li {
        width: 100%;
        margin: 5px 0;
        display: block;
        float: right;
        padding: 5px 0px;
    }
    footer .footer-links li a {
        font-size: 14px;
    }

    .bottom-images-list li:nth-child(3n) {
        padding-left: 10px; }

    .logo {
        margin-right: 10px;
    }




    header {
        padding: 10px 0; }

    header .padding-left {
        padding: 0; }

    .no-left-padding, .no-padding {
        padding: 5px 0px; }

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
        margin-top: 10px;
    }
    .wrapper-news-part-left {
        padding: 0 0 0 0;
        margin-top: 10px;
    }
    .wrapper-news-part-right {
        padding: 0 0 0 0;
        margin-top: 10px;
    }
    .marle80{
        margin-top: 0px;
        margin-left: 10px;
    }
    .marle30{
        margin-top: 0px;
        margin-left: 10px;
    }
    .advdiv-native{
        border-left: 0px;
    }
    .social-icons li a svg {
        width: 22px;
        height: 22px; }
    .hash-tags-padding{
        padding: 0px;
    }
    body.index .hash-tags {
        margin: 10px 0px 15px 0px;
    }
    .toplinks{
        margin-right: 0px;
        padding: 5px 0 76px 0;
        margin-bottom: 5px;
    }
    .news-list-items li .like-pan {
        margin-top: 8px;
    }

    .advdiv-native {
        border-left: 0px;
    }

    .settingnmtext {
        margin: 3px 0px 0px 10px;
    }
    .settingfstext {
        margin-top: 8px;
    }
    .settingtext {
        margin: 1px 7px 0px 0px;
    }


    .hash-tags a {
        margin: 5px 0;
    }
    .social-icons li {
        margin: 0 1px;
    }

    .settingbtn{
        float: right;
        margin: 15px 0px 0px 0px;
    }

    .topnav {
        position: fixed;
        padding: 0px;
        width: 0;
        top: 0;
        right: 0;
        height: 100%;
        z-index: 10000;
        overflow-y: auto;
        border-radius: 0;
        transition: all ease 0.5s;
        background-color: #333;
        padding-top: 30px;
        margin-top: 0px;
    }

    .topnava{
        width: 70%;
        font-size: 16px;
        color: #f2f2f2;
        background-color: #333;
        text-align: right;
        padding: 12px 10px;

    }
    .topnava50{
        width: 100%;
        font-size: 16px;
        color: #f2f2f2;
        background-color: #333;
        text-align: right;
        padding: 12px 10px;

    }
    .topnava svg{
        fill: #f2f2f2;
        background-color: #333;
        width: 20px;
        height: 20px;
    }

    .topnava:hover {
        color: #fff;
        background-color: #333;
        border-bottom: 0;
        padding: 12px 20px;
    }
    .topnava50:hover {
        color: #fff;
        background-color: #333;
        border-bottom: 0;
        padding: 12px 20px;
    }
    .close-menu2 {
        display: block;
    }
    .iconmenu {
        float: left;
        display: block;
    }
    .boxbettag {
        margin-left: 0px;
    }

    .topbanner1{
        height: 60px;
        width: auto;
    }

    .news-list-items li .rating-pan {
        margin-top: 0px;
        width: 100%; 
        padding-right: 10px;
        padding-left: 10px;
    }
    .nlinki1{
        width: 100%;
    }
    .nlinkb1{
        width: 100%;
    }
    .nlinkb2{
        width: 100%;
    }
    .nlinktb1{
        width: 100%;
    }
    .refrence3align{
        float: right;
    }

    .buttonlike {
        padding-top: 33px;
        margin-top: -30px;
        padding-left: 15px;
        margin-left: -15px;
        margin-right: -10px;
        padding-right: 10px;
        margin-bottom: 3px;
    }

    .news-list-items li .linktextalignindex{
        text-align: right !important;
        padding-left: 0px;
    }

    .toplinkli div{
        padding-top: 5px;
        margin-top: 2px;
    }
    .spanlikecounter{.buttonicon1 
        color: #888;
    }
    
    .buttonicon1 {
        border: none;
        background-color: transparent;
        padding: 8px 0px 0 24px;
        text-align: center;
        text-decoration: none;
        display: flex;
    }
}



@media only screen and (min-width: 480px) and (max-width: 768px) {
    .news-list-items li > a {
        font-size: 13px;
    }
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
    .news-part-video {
        margin-bottom: 20px; }


    .mw50 {
        width: 50%;
    }
    .news-list-items li .refrence{
        color: #888;  
    }

    .no-left-padding, .no-padding {
        padding: 5px 0px; }

    .bottom-images-list li, .bottom-images-list li:nth-child(3n) {
        padding: 0; }

    .ap-tooltip {
        display: none !important; }

    footer .footer-links li {
        width: 50%;
        margin-bottom: 15px; }

    .right-padding25 {
        padding-right: 0; }
    .wrapper-news-part {
        padding: 0 0 0 0;
    }
    .wrapper-news-part-left {
        padding: 0 0 0 0;
    }
    .wrapper-news-part-right {
        padding: 0 0 0 0;
    }
    .advdiv-native{
        border-left: 0px;
    }
    .toplinks{
        margin: 0px 0px 40px 0px;
    }
    body.index .hash-tags{
        margin: 10px 0px 10px 0px;
    }

    .topnav {
        position: fixed;
        padding: 0px;
        width: 0;
        top: 0;
        right: 0;
        height: 100%;
        z-index: 10000;
        overflow-y: auto;
        border-radius: 0;
        transition: all ease 0.5s;
        background-color: #333;
        padding-top: 30px;
        margin-top: 0px;
    }

    .topnava{
        width: 70%;
        font-size: 16px;
        color: #f2f2f2;
        background-color: #333;
        text-align: right;
        padding: 12px 20px;

    }
    .topnava50{
        width: 70%;
        font-size: 16px;
        color: #f2f2f2;
        background-color: #333;
        text-align: right;
        padding: 12px 20px;

    }
    .topnava svg{
        fill: #f2f2f2;
        width: 20px;
        height: 20px;
    }

    .topnava:hover {
        color: #fff;
        background-color: #333;
        border-bottom: 0;
        padding: 12px 20px;
    }
    .topnava50:hover {
        color: #fff;
        background-color: #333;
        border-bottom: 0;
        padding: 12px 20px;
    }
    .close-menu2 {
        display: block;
    }
    .iconmenu {
        float: left;
        display: block;
    }

    .topbanner1{
        height: 86px;
        width: auto;
    }

    .news-list-items li .rating-pan {
        margin-top: 0px;
        width: 100%; 
        padding-right: 10px;
        padding-left: 10px;
    }
    .nlinki1{
        width: 100%;
    }
    .nlinkb1{
        width: 100%;
    }
    .nlinkb2{
        width: 100%;
    }
    .nlinktb1{
        width: 100%;
    }
    .refrence3align{
        float: right;
    }
    .buttonlike {
        padding-top: 30px;
        margin-top: -30px;
        padding-left: 13px;
        margin-left: -15px;
        margin-right: -10px;
        padding-right: 10px;
        margin-bottom: 3px;
    }
    .news-list-items li .linktextalignindex{
        text-align: right !important;
        padding-left: 0px;
    }
    .spanlikecounter{
        color: #888;
    }
}



@media only screen and (min-width: 769px) and (max-width: 992px) {
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
    .news-part-video {
        margin-bottom: 20px; }

    .mw50 {
        width: 50%;
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
    .wrapper-news-part-left {
        padding: 0 0 0 0;
    }
    .wrapper-news-part-right {
        padding: 0 0 0 0;
    }
    .advdiv-native{
        border-left: 0px;
    }
    .toplinks{
        margin: 0px 0px 40px 0px;
    }
    body.index .hash-tags{
        margin: 10px 0px 10px 0px;
    }

    .topnav {
        position: fixed;
        padding: 0px;
        width: 0;
        top: 0;
        right: 0;
        height: 100%;
        z-index: 10000;
        overflow-y: auto;
        border-radius: 0;
        transition: all ease 0.5s;
        background-color: #333;
        padding-top: 30px;
        margin-top: 0px;
    }

    .topnava{
        width: 70%;
        font-size: 16px;
        color: #f2f2f2;
        background-color: #333;
        text-align: right;
        padding: 12px 20px;

    }
    .topnava50{
        width: 70%;
        font-size: 16px;
        color: #f2f2f2;
        background-color: #333;
        text-align: right;
        padding: 12px 20px;

    }
    .topnava svg{
        fill: #f2f2f2;
        width: 20px;
        height: 20px;
    }

    .topnava:hover {
        color: #fff;
        background-color: #333;
        border-bottom: 0;
        padding: 12px 20px;
    }
    .topnava50:hover {
        color: #fff;
        background-color: #333;
        border-bottom: 0;
        padding: 12px 20px;
    }
    .close-menu2 {
        display: block;
    }
    .iconmenu {
        float: left;
        display: block;
    }
    .nlinktb1{
        width: 57%;
    }
    .nlinkb1{
        width: 69%;
    }
    .nlinkb2{
        width: 66%;
    }
    .nlinki1{
        width: 69%;
    }
    .news-list-items li .linktextalignindex{
        text-align: right !important;
        padding-left: 0px;
    }
}

@media only screen and (min-width: 993px) and (max-width: 1200px) {
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
    .topbanner1{
        height: 86px;
        width: 700px;
    }
    .nlinktb1{
        width: 67%;
    }
    .nlinkb1{
        width: 75%;
    }
    .nlinkb2{
        width: 72%;
    }
    .nlinki1{
        width: 72%;
    }
}
@media only screen and (min-width: 1201px) and (max-width: 1400px) {
    .menu-btn, .close-menu {
        display: none; } }
@media only screen and (min-width: 1401px) and (max-width: 1750px) {
    .menu-btn, .close-menu {
        display: none; } }
@media only screen and (min-width: 1750px) {
    .menu-btn, .close-menu {
        display: none; } }