@charset "UTF-8";
/* CSS Document */
/********** フォント設定 **********/
@import url(//fonts.googleapis.com/earlyaccess/notosansjapanese.css);
html, body {
  font-size: 62.5%;
  font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Noto Sans Japanese", "ヒラギノ角ゴ ProN W3", Hiragino Kaku Gothic ProN, Arial, Meiryo, sans-serif;
  line-height: 1.0;
  -webkit-text-size-adjust: 100%;
}

/********** ベースタグ設定 **********/
* {
  max-height: 99999px;
}

img {
  max-width: 100%;
  vertical-align: bottom;
}

a, .drawer-hamburger {
  text-decoration: none;
  outline: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  color: inherit;
}
a:visited, .drawer-hamburger:visited, a:hover, .drawer-hamburger:hover, a:active, .drawer-hamburger:active, a:focus, .drawer-hamburger:focus {
  color: inherit;
  text-decoration: none;
  outline: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

@media (min-width: 768px) {
  a:hover {
    opacity: 0.75;
  }
}

.dummyBox {
  display: block;
  width: 100%;
  height: 1000px;
}

/********** #wrapper **********/
#wrapper {
  font-size: 1.4rem;
  line-height: 1.7;
  width: 100%;
}

/********** .drawer-hamburger **********/
.drawer-hamburger {
  width: 28px;
  position: static;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  z-index: 1;
}
@media (min-width: 768px) {
  .drawer-hamburger {
    display: none;
  }
}

.drawer-hamburger-icon {
  height: 2px;
}

.drawer-hamburger-icon:before {
  top: -10px;
  height: 2px;
}

.drawer-hamburger-icon:after {
  top: 10px;
  height: 2px;
}

.drawer-nav {
  background-color: transparent;
  padding-left: 0;
  padding-right: 0;
}
@media (min-width: 768px) {
  .drawer-nav {
    position: static;
    overflow: visible;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 15px;
    padding-right: 15px;
    background-color: #cccccc;
  }
}

@media (min-width: 768px) {
  .drawer-menu {
    display: flex;
    align-items: center;
    margin-left: -15px;
    margin-right: -15px;
  }
}
@media (min-width: 768px) {
  .drawer-menu > * {
    flex-grow: 1;
    background-color: #cccccc;
    padding-left: 15px;
    padding-right: 15px;
  }
}

@media (min-width: 768px) {
  .drawer-dropdown {
    position: relative;
  }
}

@media (min-width: 768px) {
  .drawer-dropdown-menu {
    position: absolute;
  }
}

/********** .container設定 **********/
.container {
  width: 100%;
  max-width: none;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 992px) {
  .container {
    max-width: 1440px;
  }
}

/********** ガター設定 **********/
.gutter-50 {
  margin-left: -25px;
  margin-right: -25px;
}

.gutter-50 > [class*='col-'] {
  padding-left: 25px;
  padding-right: 25px;
}

@media (min-width: 0px) {
  .gutter-xs-50 {
    margin-left: -25px;
    margin-right: -25px;
  }

  .gutter-xs-50 > [class*='col-'] {
    padding-left: 25px;
    padding-right: 25px;
  }
}
@media (min-width: 576px) {
  .gutter-sm-50 {
    margin-left: -25px;
    margin-right: -25px;
  }

  .gutter-sm-50 > [class*='col-'] {
    padding-left: 25px;
    padding-right: 25px;
  }
}
@media (min-width: 768px) {
  .gutter-md-50 {
    margin-left: -25px;
    margin-right: -25px;
  }

  .gutter-md-50 > [class*='col-'] {
    padding-left: 25px;
    padding-right: 25px;
  }
}
@media (min-width: 992px) {
  .gutter-lg-50 {
    margin-left: -25px;
    margin-right: -25px;
  }

  .gutter-lg-50 > [class*='col-'] {
    padding-left: 25px;
    padding-right: 25px;
  }
}
@media (min-width: 1440px) {
  .gutter-xl-50 {
    margin-left: -25px;
    margin-right: -25px;
  }

  .gutter-xl-50 > [class*='col-'] {
    padding-left: 25px;
    padding-right: 25px;
  }
}
.gutter-40 {
  margin-left: -20px;
  margin-right: -20px;
}

.gutter-40 > [class*='col-'] {
  padding-left: 20px;
  padding-right: 20px;
}

@media (min-width: 0px) {
  .gutter-xs-40 {
    margin-left: -20px;
    margin-right: -20px;
  }

  .gutter-xs-40 > [class*='col-'] {
    padding-left: 20px;
    padding-right: 20px;
  }
}
@media (min-width: 576px) {
  .gutter-sm-40 {
    margin-left: -20px;
    margin-right: -20px;
  }

  .gutter-sm-40 > [class*='col-'] {
    padding-left: 20px;
    padding-right: 20px;
  }
}
@media (min-width: 768px) {
  .gutter-md-40 {
    margin-left: -20px;
    margin-right: -20px;
  }

  .gutter-md-40 > [class*='col-'] {
    padding-left: 20px;
    padding-right: 20px;
  }
}
@media (min-width: 992px) {
  .gutter-lg-40 {
    margin-left: -20px;
    margin-right: -20px;
  }

  .gutter-lg-40 > [class*='col-'] {
    padding-left: 20px;
    padding-right: 20px;
  }
}
@media (min-width: 1440px) {
  .gutter-xl-40 {
    margin-left: -20px;
    margin-right: -20px;
  }

  .gutter-xl-40 > [class*='col-'] {
    padding-left: 20px;
    padding-right: 20px;
  }
}
.gutter-20 {
  margin-left: -10px;
  margin-right: -10px;
}

.gutter-20 > [class*='col-'] {
  padding-left: 10px;
  padding-right: 10px;
}

@media (min-width: 0px) {
  .gutter-xs-20 {
    margin-left: -10px;
    margin-right: -10px;
  }

  .gutter-xs-20 > [class*='col-'] {
    padding-left: 10px;
    padding-right: 10px;
  }
}
@media (min-width: 576px) {
  .gutter-sm-20 {
    margin-left: -10px;
    margin-right: -10px;
  }

  .gutter-sm-20 > [class*='col-'] {
    padding-left: 10px;
    padding-right: 10px;
  }
}
@media (min-width: 768px) {
  .gutter-md-20 {
    margin-left: -10px;
    margin-right: -10px;
  }

  .gutter-md-20 > [class*='col-'] {
    padding-left: 10px;
    padding-right: 10px;
  }
}
@media (min-width: 992px) {
  .gutter-lg-20 {
    margin-left: -10px;
    margin-right: -10px;
  }

  .gutter-lg-20 > [class*='col-'] {
    padding-left: 10px;
    padding-right: 10px;
  }
}
@media (min-width: 1440px) {
  .gutter-xl-20 {
    margin-left: -10px;
    margin-right: -10px;
  }

  .gutter-xl-20 > [class*='col-'] {
    padding-left: 10px;
    padding-right: 10px;
  }
}
.gutter-16 {
  margin-left: -8px;
  margin-right: -8px;
}

.gutter-16 > [class*='col-'] {
  padding-left: 8px;
  padding-right: 8px;
}

@media (min-width: 0px) {
  .gutter-xs-16 {
    margin-left: -8px;
    margin-right: -8px;
  }

  .gutter-xs-16 > [class*='col-'] {
    padding-left: 8px;
    padding-right: 8px;
  }
}
@media (min-width: 576px) {
  .gutter-sm-16 {
    margin-left: -8px;
    margin-right: -8px;
  }

  .gutter-sm-16 > [class*='col-'] {
    padding-left: 8px;
    padding-right: 8px;
  }
}
@media (min-width: 768px) {
  .gutter-md-16 {
    margin-left: -8px;
    margin-right: -8px;
  }

  .gutter-md-16 > [class*='col-'] {
    padding-left: 8px;
    padding-right: 8px;
  }
}
@media (min-width: 992px) {
  .gutter-lg-16 {
    margin-left: -8px;
    margin-right: -8px;
  }

  .gutter-lg-16 > [class*='col-'] {
    padding-left: 8px;
    padding-right: 8px;
  }
}
@media (min-width: 1440px) {
  .gutter-xl-16 {
    margin-left: -8px;
    margin-right: -8px;
  }

  .gutter-xl-16 > [class*='col-'] {
    padding-left: 8px;
    padding-right: 8px;
  }
}
.gutter-10 {
  margin-left: -5px;
  margin-right: -5px;
}

.gutter-10 > [class*='col-'] {
  padding-left: 5px;
  padding-right: 5px;
}

@media (min-width: 0px) {
  .gutter-xs-10 {
    margin-left: -5px;
    margin-right: -5px;
  }

  .gutter-xs-10 > [class*='col-'] {
    padding-left: 5px;
    padding-right: 5px;
  }
}
@media (min-width: 576px) {
  .gutter-sm-10 {
    margin-left: -5px;
    margin-right: -5px;
  }

  .gutter-sm-10 > [class*='col-'] {
    padding-left: 5px;
    padding-right: 5px;
  }
}
@media (min-width: 768px) {
  .gutter-md-10 {
    margin-left: -5px;
    margin-right: -5px;
  }

  .gutter-md-10 > [class*='col-'] {
    padding-left: 5px;
    padding-right: 5px;
  }
}
@media (min-width: 992px) {
  .gutter-lg-10 {
    margin-left: -5px;
    margin-right: -5px;
  }

  .gutter-lg-10 > [class*='col-'] {
    padding-left: 5px;
    padding-right: 5px;
  }
}
@media (min-width: 1440px) {
  .gutter-xl-10 {
    margin-left: -5px;
    margin-right: -5px;
  }

  .gutter-xl-10 > [class*='col-'] {
    padding-left: 5px;
    padding-right: 5px;
  }
}
/********** 5分割設定 **********/
/*
ex)
col-5-1 20%
col-sm-5-3 60%
col-md-5-4 80%
*/
.col-5-1, .col-xs-5-1, .col-5-2, .col-xs-5-2, .col-5-3, .col-xs-5-3, .col-5-4, .col-xs-5-4, .col-5-5, .col-xs-5-5, .col-sm-5-1, .col-sm-5-2, .col-sm-5-3, .col-sm-5-4, .col-sm-5-5, .col-md-5-1, .col-md-5-2, .col-md-5-3, .col-md-5-4, .col-md-5-5, .col-lg-5-1, .col-lg-5-2, .col-lg-5-3, .col-lg-5-4, .col-lg-5-5, .col-xl-5-1, .col-xl-5-2, .col-xl-5-3, .col-xl-5-4, .col-xl-5-5 {
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}

@media (min-width: 0px) {
  .col-xs-5-1 {
    -ms-flex: 0 0 20%;
    flex: 0 0 20%;
    max-width: 20%;
  }

  .col-xs-5-2 {
    -ms-flex: 0 0 40%;
    flex: 0 0 40%;
    max-width: 40%;
  }

  .col-xs-5-3 {
    -ms-flex: 0 0 60%;
    flex: 0 0 60%;
    max-width: 60%;
  }

  .col-xs-5-4 {
    -ms-flex: 0 0 80%;
    flex: 0 0 80%;
    max-width: 80%;
  }

  .col-xs-5-5 {
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
}
@media (min-width: 576px) {
  .col-sm-5-1 {
    -ms-flex: 0 0 20%;
    flex: 0 0 20%;
    max-width: 20%;
  }

  .col-sm-5-2 {
    -ms-flex: 0 0 40%;
    flex: 0 0 40%;
    max-width: 40%;
  }

  .col-sm-5-3 {
    -ms-flex: 0 0 60%;
    flex: 0 0 60%;
    max-width: 60%;
  }

  .col-sm-5-4 {
    -ms-flex: 0 0 80%;
    flex: 0 0 80%;
    max-width: 80%;
  }

  .col-sm-5-5 {
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
}
@media (min-width: 768px) {
  .col-md-5-1 {
    -ms-flex: 0 0 20%;
    flex: 0 0 20%;
    max-width: 20%;
  }

  .col-md-5-2 {
    -ms-flex: 0 0 40%;
    flex: 0 0 40%;
    max-width: 40%;
  }

  .col-md-5-3 {
    -ms-flex: 0 0 60%;
    flex: 0 0 60%;
    max-width: 60%;
  }

  .col-md-5-4 {
    -ms-flex: 0 0 80%;
    flex: 0 0 80%;
    max-width: 80%;
  }

  .col-md-5-5 {
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
}
@media (min-width: 992px) {
  .col-lg-5-1 {
    -ms-flex: 0 0 20%;
    flex: 0 0 20%;
    max-width: 20%;
  }

  .col-lg-5-2 {
    -ms-flex: 0 0 40%;
    flex: 0 0 40%;
    max-width: 40%;
  }

  .col-lg-5-3 {
    -ms-flex: 0 0 60%;
    flex: 0 0 60%;
    max-width: 60%;
  }

  .col-lg-5-4 {
    -ms-flex: 0 0 80%;
    flex: 0 0 80%;
    max-width: 80%;
  }

  .col-lg-5-5 {
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
}
@media (min-width: 1440px) {
  .col-xl-5-1 {
    -ms-flex: 0 0 20%;
    flex: 0 0 20%;
    max-width: 20%;
  }

  .col-xl-5-2 {
    -ms-flex: 0 0 40%;
    flex: 0 0 40%;
    max-width: 40%;
  }

  .col-xl-5-3 {
    -ms-flex: 0 0 60%;
    flex: 0 0 60%;
    max-width: 60%;
  }

  .col-xl-5-4 {
    -ms-flex: 0 0 80%;
    flex: 0 0 80%;
    max-width: 80%;
  }

  .col-xl-5-5 {
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
}
* {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.mv {
  width: 100%;
}
.mv img {
  width: 100%;
  max-width: none;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  padding-bottom: 0;
}

body {
  color: #333333;
}

/**********************************/
.object-fit {
  object-fit: contain;
  max-width: 100%;
  max-height: 100%;
  font-family: "object-fit: contain;";
}

.fc-white {
  color: #ffffff;
}

/************************************/
ul.tab {
  margin: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  border-bottom: 6px solid #000000;
}

.tab li {
  background: #e7e7e7;
  list-style: none;
  display: inline-block;
  font-size: 1.4rem;
  color: #727272;
  margin-left: 10px;
  width: calc((100% - 20px) / 3);
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 25px;
}
@media (min-width: 768px) {
  .tab li {
    font-size: 1.6rem;
    margin-top: 50px;
    cursor: pointer;
  }
}
.tab li:first-of-type {
  margin-left: 0px;
}

.tab li.active {
  background: #000000;
  color: #ffffff;
}

.tab_cnt {
  margin-top: -1px;
  overflow: hidden;
  width: 100%;
}

.tab_cnt > div {
  display: none;
}

.tab_cnt > div.active {
  display: block;
  width: 100%;
}

/********************************/
.sp_prize {
  width: 120px;
  margin-left: auto;
  margin-right: auto;
}

.prize {
  width: 120px;
  margin-left: auto;
  margin-right: auto;
}
@media (min-width: 768px) {
  .prize {
    width: 135px;
  }
}

@media (min-width: 768px) {
  .p_01 .img {
    width: 58%;
  }
}
@media (min-width: 768px) {
  .p_01 .text {
    width: 38%;
  }
}
.p_01 .text .pc_prize {
  width: 135px;
  margin-left: auto;
  margin-right: auto;
}
.p_01 .container > div.d-md-flex {
  width: 100%;
}

.tw {
  background: #000000;
  color: #ffffff;
  font-size: 1.3rem;
  border-radius: 30px;
  display: inline-block;
  padding: 0 20px;
}
@media (min-width: 768px) {
  .tw {
    font-size: 1.6rem;
  }
}

.modal_btn {
  text-align: center;
  font-size: 1.4rem;
  position: relative;
  padding-right: 25px;
  color: #333333;
}
.modal_btn:visited, .modal_btn:hover, .modal_btn:active, .modal_btn:focus {
  color: #333333;
}
@media (min-width: 768px) {
  .modal_btn {
    font-size: 1.6rem;
  }
  .modal_btn:hover {
    text-decoration: underline;
    opacity: 1;
  }
}
.modal_btn:after {
  position: absolute;
  content: "";
  width: 25px;
  height: 13px;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  background: url(../img/arrow.png) no-repeat center center;
  background-size: contain;
}
.modal_btn > * {
  color: #333333;
}
.modal_btn > *:visited, .modal_btn > *:hover, .modal_btn > *:active, .modal_btn > *:focus {
  color: #333333;
}

.p_01 {
  padding: 40px 0 60px;
}
@media (min-width: 768px) {
  .p_01 {
    padding: 40px 0 90px;
  }
}
.p_01 .swiper-container .swiper-button-prev {
  width: 50%;
  top: 0;
  margin-top: 0;
  left: 0;
  height: 100%;
  justify-content: flex-start;
}
.p_01 .swiper-container .swiper-button-prev:before {
  position: absolute;
  content: "";
  width: 15px;
  height: 15px;
  top: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  background: url(../img/prev.png) no-repeat center center;
  background-size: contain;
  transform: translateY(-50%);
}
.p_01 .swiper-container .swiper-button-prev:after {
  display: none;
}
.p_01 .swiper-container .swiper-button-prev:focus {
  outline: 0;
}
.p_01 .swiper-container .swiper-button-next {
  width: 50%;
  top: 0;
  margin-top: 0;
  right: 0;
  left: auto;
  height: 100%;
  justify-content: flex-start;
}
.p_01 .swiper-container .swiper-button-next:before {
  position: absolute;
  content: "";
  width: 15px;
  height: 15px;
  top: 50%;
  right: 0;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  background: url(../img/next.png) no-repeat center center;
  background-size: contain;
  transform: translateY(-50%);
}
.p_01 .swiper-container .swiper-button-next:after {
  display: none;
}
.p_01 .swiper-container .swiper-button-next:focus {
  outline: 0;
}

.p_02, .p_04 {
  background: url(../img/bg01.png) repeat 0 0;
  background-size: 100%;
  padding: 60px 0;
}
@media (min-width: 768px) {
  .p_02, .p_04 {
    padding: 70px 0;
  }
}

.p_03 {
  padding: 60px 0;
}
@media (min-width: 768px) {
  .p_03 {
    padding: 70px 0;
  }
}

@media (min-width: 768px) {
  .prize_flex {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: calc(100% + 20px);
    margin-left: -10px;
  }
}
.prize_flex li {
  width: 100%;
  margin-top: 40px;
}
@media (min-width: 768px) {
  .prize_flex li {
    width: 446px;
    margin-left: 10px;
    margin-right: 10px;
  }
}
.prize_flex li .img {
  width: 100%;
  height: 230px;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
}
@media (min-width: 768px) {
  .prize_flex li .img {
    height: 310px;
  }
}
.prize_flex li .img .swiper-slide {
  top: auto;
  bottom: auto;
}
.prize_flex li .img .swiper-container {
  top: 0;
  height: 230px;
}
@media (min-width: 768px) {
  .prize_flex li .img .swiper-container {
    height: 305px;
  }
}
.prize_flex li .img .swiper-container .swiper-button-next {
  width: 50%;
  top: 0;
  margin-top: 0;
  right: 0;
  height: 100%;
  justify-content: flex-end;
}
@media (min-width: 768px) {
  .prize_flex li .img .swiper-container .swiper-button-next {
    padding-right: 10px;
  }
}
.prize_flex li .img .swiper-container .swiper-button-next:focus {
  outline: 0;
}
.prize_flex li .img .swiper-container .swiper-button-next:before {
  position: absolute;
  content: "";
  width: 15px;
  height: 15px;
  left: auto;
  right: 6px;
  top: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  background: url(../img/next.png) no-repeat center center;
  background-size: contain;
  transform: translateY(-50%);
}
.prize_flex li .img .swiper-container .swiper-button-next:after {
  display: none;
}
.prize_flex li .img .swiper-container .swiper-button-prev {
  width: 50%;
  top: 0;
  margin-top: 0;
  left: 0;
  height: 100%;
  justify-content: flex-start;
}
@media (min-width: 768px) {
  .prize_flex li .img .swiper-container .swiper-button-prev {
    padding-left: 10px;
  }
}
.prize_flex li .img .swiper-container .swiper-button-prev:focus {
  outline: 0;
}
.prize_flex li .img .swiper-container .swiper-button-prev:before {
  position: absolute;
  content: "";
  width: 15px;
  height: 15px;
  top: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  background: url(../img/prev.png) no-repeat center center;
  background-size: contain;
  transform: translateY(-50%);
}
.prize_flex li .img .swiper-container .swiper-button-prev:after {
  display: none;
}

@media (min-width: 768px) {
  .p_03 .prize_flex {
    width: calc(100% + 70px);
    margin-left: -35px;
  }
}
.p_03 .prize_flex li {
  margin-top: 40px;
}
@media (min-width: 768px) {
  .p_03 .prize_flex li {
    width: 292px;
    margin-left: 35px;
    margin-right: 35px;
  }
}
.p_03 .prize_flex li .img {
  background: #f0f0f0;
  height: 230px;
}
@media (min-width: 768px) {
  .p_03 .prize_flex li .img {
    height: 230px;
  }
}
.p_03 .prize_flex li .img .swiper-container {
  height: 230px;
}
.p_03 .prize_flex li .img .swiper-pagination {
  bottom: -10px;
}

.p_04 .bg_white {
  background: #ffffff;
  padding: 20px 15px;
}
@media (min-width: 768px) {
  .p_04 .bg_white {
    padding: 40px;
  }
}
.p_04 .bg_white .prize {
  width: 140px;
  height: 25px;
  margin-top: -32px;
}
@media (min-width: 768px) {
  .p_04 .bg_white .prize {
    width: 260px;
    height: 30px;
    margin-top: -55px;
  }
}
.p_04 .bg_white ul li {
  display: inline;
}

.yoko_img .img {
  position: relative;
}
.yoko_img .img img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}

.yoko_img02 > div img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}

/********************************/
.modaal-container {
  width: calc(100vw - 50px);
  background: transparent;
  box-shadow: none;
}
.modaal-container .modal_prize_sp {
  text-align: center;
}
.modaal-container .modal_prize_sp img {
  margin-bottom: 20px;
}
.modaal-container .text_area .modal_prize {
  display: flex;
  justify-content: center;
  margin-top: 60px;
}
@media (min-width: 768px) {
  .modaal-container .text_area .modal_prize {
    justify-content: flex-start;
    align-items: center;
    margin-top: 20px;
  }
}
.modaal-container .text_area .white_ttl {
  text-align: center;
  margin-top: 20px;
}
@media (min-width: 768px) {
  .modaal-container .text_area .white_ttl {
    text-align: left;
    margin-top: 50px;
  }
}
.modaal-container .text_area .white_ttl span {
  background: #ffffff;
  color: #000000;
  font-size: 1.3rem;
  border-radius: 30px;
  padding: 3px 10px;
}
@media (min-width: 768px) {
  .modaal-container .text_area .white_ttl span {
    font-size: 1.8rem;
  }
}

/* Modal */
#modal,
#modal02,
#modal03,
#modal04,
#modal04_02,
#modal05,
#modal06,
#modal07,
#modal08,
#modal_mybest01,
#modal_mybest02,
#modal_mybest03,
#modal_mybest04,
#modal_student01,
#modal_student02,
#modal_student03,
#modal_student04,
#modal_student05,
#modal_student06,
#modal_student07,
#modal_student08 {
  display: none;
}

.modaal-content-container {
  padding: 90px 25px 0;
  position: relative;
  text-align: center;
}
.modaal-content-container .close_btn01, .modaal-content-container .close_btn02, .modaal-content-container .close_btn07, .modaal-content-container .close_btn08, .modaal-content-container .close_btn09 {
  position: absolute;
  top: 0px;
  right: 25px;
  border-style: none;
}
.modaal-content-container .close_btn01:focus, .modaal-content-container .close_btn02:focus, .modaal-content-container .close_btn07:focus, .modaal-content-container .close_btn08:focus, .modaal-content-container .close_btn09:focus {
  outline: 0;
}
.modaal-content-container .close_btn01:hover, .modaal-content-container .close_btn02:hover, .modaal-content-container .close_btn07:hover, .modaal-content-container .close_btn08:hover, .modaal-content-container .close_btn09:hover {
  cursor: pointer;
}

.text_area {
  margin-top: 30px;
  width: 100%;
}
@media (min-width: 768px) {
  .text_area {
    margin-left: auto;
    margin-right: auto;
  }
}

.modaal-close:before, .modaal-close:hover:before {
  display: none;
}

.modaal-inner-wrapper {
  padding-left: 0;
  padding-right: 0;
}

.modaal-close:after {
  background: transparent;
}

.modaal-close {
  width: 36px;
  height: 50px;
  top: 25px;
  border-radius: 0;
}

.modaal-close:after {
  width: 36px;
  height: 50px;
  left: 0;
  background: url(../img/modal_close.png) repeat 0 0;
  background-size: contain;
  transform: rotate(0);
  -webkit-transform: rotate(0);
}

.modaal-close:focus, .modaal-close:hover {
  background: transparent;
}

.modaal-close:focus:after, .modaal-close:hover:after {
  background: transparent url(../img/modal_close.png) repeat 0 0;
  background-size: contain;
}

/* Swiper */
.swiper-container {
  width: 100%;
}
.swiper-container.slider {
  position: absolute;
}
.swiper-container.slider02, .swiper-container.slider02_student {
  position: absolute;
}
.swiper-container.slider04 {
  position: absolute;
}
.swiper-container.slider06 {
  position: absolute;
}

.modaal-content-container .swiper-container {
  position: relative;
  width: 100%;
  height: 230px;
}
@media (min-width: 768px) {
  .modaal-content-container .swiper-container {
    height: auto;
    width: 100%;
  }
}
.modaal-content-container .swiper-container.slider02,
.modaal-content-container .swiper-container.slider02_student {
  position: relative;
}
.modaal-content-container .swiper-container.slider04 {
  position: relative;
}
.modaal-content-container .swiper-container.slider16,
.modaal-content-container .swiper-container.slider12,
.modaal-content-container .swiper-container.slider06 {
  position: relative;
}

.swiper-slide img {
  max-width: 100%;
  max-height: 100%;
}

.swiper-slide {
  text-align: center;
}

.swiper-button-next:after, .swiper-container-rtl .swiper-button-prev:after,
.swiper-button-prev:after, .swiper-container-rtl .swiper-button-next:after {
  content: "";
}

.swiper-button-prev:after {
  text-indent: -9999px;
  width: 33px;
  height: 33px;
  top: 50%;
  left: 0;
  background: url(../img/modal_prev_sp.png) no-repeat center center;
  background-size: contain;
}
@media (min-width: 768px) {
  .swiper-button-prev:after {
    width: 36px;
    height: 64px;
    background-image: url(../img/modal_prev_pc.png);
  }
}

.swiper-button-next:after {
  text-indent: -9999px;
  width: 33px;
  height: 33px;
  top: 50%;
  right: 0;
  background: url(../img/modal_next_sp.png) no-repeat center center;
  background-size: contain;
}
@media (min-width: 768px) {
  .swiper-button-next:after {
    width: 36px;
    height: 64px;
    background-image: url(../img/modal_next_pc.png);
  }
}

.swiper-pagination-bullet {
  height: 3px;
  width: 25px;
  background: #000000;
  border-radius: 0;
  opacity: 1;
}

.swiper-pagination-bullet-active {
  background: #c8c8c8;
}

.swiper-button-next {
  z-index: 100;
  right: 0px;
}

.swiper-button-prev {
  z-index: 100;
  left: 0px;
}

.swiper-container {
  z-index: auto;
}

.swiper-container-horizontal > .swiper-pagination-bullets {
  bottom: -30px;
}

.swiper-pagination {
  position: absolute;
  padding-top: 20px;
  left: 50%;
  transform: translateX(-50%);
}
.swiper-pagination span {
  margin-left: 5px;
  margin-right: 5px;
}
.swiper-pagination.swiper-pagination_type03, .swiper-pagination.swiper-pagination_type05, .swiper-pagination.swiper-pagination_type07 {
  position: absolute;
  width: 100%;
  left: 50%;
  padding-top: 5px;
  transform: translateX(-50%);
}
.swiper-pagination.swiper-pagination_type03 span, .swiper-pagination.swiper-pagination_type05 span, .swiper-pagination.swiper-pagination_type07 span {
  margin-left: 5px;
  margin-right: 5px;
}

/**************************************/
.judging {
  width: 100%;
  border-top: 6px solid #000000;
  padding: 60px 0 35px;
}
@media (min-width: 768px) {
  .judging {
    padding: 90px 0 40px;
  }
}
@media (min-width: 768px) {
  .judging .judging_img li {
    width: 33.333%;
  }
}
.judging .back_y_online {
  color: #4b0082;
}
.judging .back_y_online:hover {
  text-decoration: underline;
  opacity: 1;
}

/****************************************/
#footer {
  background: #000000;
  position: relative;
  font-size: 1.1rem;
  color: #ffffff;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
@media (min-width: 768px) {
  #footer {
    font-size: 1.2rem;
    height: 60px;
  }
}
#footer .top_link {
  text-indent: -9999px;
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid #ffffff;
  background: #000000;
  top: -20px;
  right: 10px;
}
@media (min-width: 768px) {
  #footer .top_link {
    width: 50px;
    height: 50px;
    top: -25px;
    right: 30px;
  }
}
#footer .top_link:before {
  position: absolute;
  content: "";
  left: 12px;
  top: 15px;
  width: 12px;
  height: 12px;
  border-top: 2px solid #ffffff;
  border-right: 2px solid #ffffff;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
@media (min-width: 768px) {
  #footer .top_link:before {
    left: 17px;
    top: 19px;
    width: 12px;
    height: 12px;
  }
}

/******flex box 中央左揃え******/
@media (min-width: 768px) {
  .p_03 .prize_flex.grid {
    max-width: 1086px;
    width: auto;
    margin-left: auto;
    margin-right: auto;
  }
}
.p_03 .prize_flex.grid .cell.is-empty {
  height: 0;
  padding-top: 0;
  padding-bottom: 0;
  margin-top: 0;
  margin-bottom: 0;
}

@media (min-width: 768px) {
  #tab3_cnt .p_03 .prize_flex.grid {
    max-width: none;
    width: calc(100% + 70px);
    margin-left: -35px;
    margin-right: auto;
  }
}

/*******************/

/*# sourceMappingURL=style.css.map */
