/*form-page*/
@font-face {
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local('Roboto Mono Light'), local('RobotoMono-Light'), url(https://fonts.gstatic.com/s/robotomono/v6/L0xkDF4xlVMF-BfR8bXMIjDgiWqxf7o.ttf) format('truetype');
}
@font-face {
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Roboto Mono'), local('RobotoMono-Regular'), url(https://fonts.gstatic.com/s/robotomono/v6/L0x5DF4xlVMF-BfR8bXMIjhLq3o.ttf) format('truetype');
}
@font-face {
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local('Roboto Mono Medium'), local('RobotoMono-Medium'), url(https://fonts.gstatic.com/s/robotomono/v6/L0xkDF4xlVMF-BfR8bXMIjC4iGqxf7o.ttf) format('truetype');
}
@font-face {
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local('Roboto Mono Bold'), local('RobotoMono-Bold'), url(https://fonts.gstatic.com/s/robotomono/v6/L0xkDF4xlVMF-BfR8bXMIjDwjmqxf7o.ttf) format('truetype');
}
@font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v19/KFOmCnqEu92Fr1Mu4mxP.ttf) format('truetype');
}
@font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu5mxKKTU1Kvnz.woff2) format('woff2');
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
@font-face {
    font-family: 'Roboto';
    src: url('../fonts/Roboto-Regular.eot');
    src: local('Roboto'), local('Roboto-Regular'),
    url('../fonts/Roboto-Regular.eot?#iefix') format('embedded-opentype'),
    url('../fonts/Roboto-Regular.woff2') format('woff2'),
    url('../fonts/Roboto-Regular.woff') format('woff'),
    url('../fonts/Roboto-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Roboto';
    src: url('../fonts/Roboto-Medium.eot');
    src: local('Roboto Medium'), local('Roboto-Medium'),
    url('../fonts/Roboto-Medium.eot?#iefix') format('embedded-opentype'),
    url('../fonts/Roboto-Medium.woff2') format('woff2'),
    url('../fonts/Roboto-Medium.woff') format('woff'),
    url('../fonts/Roboto-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
}

@font-face {
    font-family: 'Roboto';
    src: url('../fonts/Roboto-Bold.eot');
    src: local('Roboto Bold'), local('Roboto-Bold'),
    url('../fonts/Roboto-Bold.eot?#iefix') format('embedded-opentype'),
    url('../fonts/Roboto-Bold.woff2') format('woff2'),
    url('../fonts/Roboto-Bold.woff') format('woff'),
    url('../fonts/Roboto-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Roboto';
    src: url('../fonts/Roboto-Light.eot');
    src: local('Roboto Light'), local('Roboto-Light'),
    url('../fonts/Roboto-Light.eot?#iefix') format('embedded-opentype'),
    url('../fonts/Roboto-Light.woff2') format('woff2'),
    url('../fonts/Roboto-Light.woff') format('woff'),
    url('../fonts/Roboto-Light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
}
/*landing-new*/
.landing-page{
    background-image: url('../img/pink-bg.jpg');
    background-position: center;
    background-size: cover;
}
/*.landing-page .footer{*/
/*    background: transparent;*/
/*}*/
.landing-new{
    padding-top: 35px;
}
.landing-new__title{
    font-size: 37px;
    font-weight: 300;
    color: #ffffff;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 70px;
}
.landing-new__parts{
    display: flex;
    position: relative;
    margin-bottom: 40px;
    padding-top: 47px;
    background-image: url(../img/border.png);
    background-position-y: bottom;
    background-repeat: no-repeat;
}
/*.landing-new__parts::after{*/
/*    content: '';*/
/*    position: absolute;*/
/*    height: 1px;*/
/*    left: 65px;*/
/*    right: 65px;*/
/*    bottom: 0;*/
/*    background-color: rgba(29,151,173, .4);*/
/*}*/
.landing-new__part{
    width: 50%;
    text-align: center;
    padding-bottom: 57px;
}
.landing-new__part .landing-new__item:last-of-type{
    margin-bottom: 40px;
}
.landing-new__subtitle{
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 40px;
    position: relative;
    z-index: 2;
    text-align: center;
}
.landing-new__item{
    text-align: center;
    margin-bottom: 7px;
}
.landing-new__item p {
    width: 100%;
    max-width: 350px;
    font-size: 18px;
    line-height: 21px;
    margin: 0 auto;
    min-height: 42px;
    opacity: .8;
}
.landing-new__item-img{
    display: flex;
    align-items: flex-end;
    justify-content: center;
    height: 55px;
    margin-bottom: 7px;
}
.landing-new__item-img img{
    flex-shrink: 0;
}
.landing-new-btn{
    font-family: 'Roboto Mono';
    display: inline-block;
    cursor: pointer;
    text-transform: uppercase;
    text-decoration: none;
    text-align: center;
    min-width: 205px;
    padding: 15px 40px;
    font-size: 18px;
    line-height: 20px;
    color: #ffffff;
    font-weight: bold;
    letter-spacing: 1px;
    background-color: transparent;
    border: 2px solid #ffffff;
    transition: 0.3s;
}
.landing-new-btn:hover{
    background-color: #fff;
    color: #EC008C;
}

.form-page{
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #000;
}
.form-page--blue .btn-join:hover{
    color: #00C4FF;
    background-color: #fff;
}
.form-page--blue .join-sign-block .join-sign-block_input:focus {
    border-bottom-color: #00C4FF;
}
.form-page .main-block-join{
    padding-bottom: 0;
    flex-grow: 1;
}
@media (max-width: 1070px){
    .landing-new__parts{
        background-image: none;
    }
}
@media (max-width: 1023px){
    .landing-new__title{
        margin-bottom: 30px;
        font-size: 34px;
    }
    .landing-new__part{
        padding-bottom: 50px;
    }
    .landing-new__parts::after{
        left: 40px;
        right: 40px;
    }
}
@media (max-width: 1000px){
    .landing-new__parts{
        flex-wrap: wrap;
        padding-top: 30px;
    }
    .landing-new__part{
        width: 100%;
    }
}
@media (max-width: 767px){
    .landing-new__title{
        font-size: 30px;
    }
    .landing-new__part .landing-new__item:last-of-type{
        margin-bottom: 30px;
    }
    .landing-new__subtitle{
        margin-bottom: 30px;
    }
    .landing-new__item{
        margin-bottom: 15px;
    }
    .landing-new__item p{
        min-height:  auto;
    }
    .landing-new__parts::after{
        left: 20px;
        right: 20px;
    }
}
@media (max-width: 540px){
    .landing-new__title{
        font-size: 24px;
    }
}

.landing-page{
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: #000;
}
.landing__top-wrap {
    position: relative;
    background-color: #000;
}
.main-block__footer{
    margin-top: auto;
}

.landing-page .el-title, .form-page .el-title {
    font-size: 37px;
    font-weight: 300;
    color: #ffffff;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 30px;
}

.landing-page .el-title {
    margin-bottom: 30px;
}
.form-page--blue .join-sign-block .checkbox-block input[type="checkbox"] + label::before{
    border: 2px solid #00c4ff;
}
.form-page--blue .join-sign-block .checkbox-block input[type="checkbox"]:checked + label::before{
    background-color: #00c4ff;
}

.form-page .main-block-join {
    padding: 0;
}

.form-page .section {
    max-width: 1024px;
}


.form-page .main-block-join__item {
    width: 100%;
}

.form-page .join-sign-block {
    background-color: rgba(0, 0, 0, 0.25);
}

.form-page .el-title {
    margin-bottom: 15px;
}

.form-page__line {
    display: flex;
    left: 0;
    align-items: center;
    justify-content: center;
    position: relative;
    right: 0;
    margin-bottom: 40px;
}
.form-page__line--blue{
    border-bottom: 1px solid #1b3942;
}
.form-page__line--pink{
    border-bottom: 1px solid #473440;
}

.form-page__line img {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
}

/*.form-page .join-sign-block .join-sign-block__txt {*/
/*    opacity: 1;*/
/*    font-size: 12px;*/
/*    margin-bottom: 30px;*/
/*}*/

.form-page-section {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.join-sign-block .relative.landing-form-item {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 20px;
}

.join-sign-block .relative.landing-form-item .control-label {
    position: relative;
    top: 0;
    font-size: 14px;
    font-weight: 700;
    color: #fff;
}

.join-sign-block .relative.landing-form-item .join-sign-block_input {
    width: 220px;
    flex-shrink: 0;
    margin-bottom: 0;
    margin-left: 20px;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 14px;
    line-height: 19px;
    font-weight: 700;
}

.join-sign-block .relative.landing-form-item .join-sign-block_input--blue {
    border: 1px solid #1b3942;
    transition: .3s;
}

.join-sign-block .relative.landing-form-item .join-sign-block_input--blue:focus {
    border: 1px solid #00c4ff;
}

.join-sign-block .relative.landing-form-item .join-sign-block_input--pink {
    border: 1px solid #473440;
    transition: .3s;
}

.join-sign-block .relative.landing-form-item .join-sign-block_input--pink:focus {
    border: 1px solid #EC008C;
}


.form-page .landing__btn {
    font-size: 14px;
}


@media (max-width: 1023px) {
    .landing-page .el-title, .form-page .el-title {
        font-size: 34px;
    }
}

@media (max-width: 767px) {
    .landing-page .el-title, .form-page .el-title {
        font-size: 30px;
    }
    .form-page .main-block-join .join-sign-block{
        margin-bottom: 0;
    }
}

@media (max-width: 540px) {
    .landing-page .el-title, .form-page .el-title {
        font-size: 24px;
        line-height: 28px;
        margin-top: 0;
    }
    .el-title br{
        display: none;
    }
}

@media (max-width: 350px) {
    .form-page .join-sign-block .section{
        width: 310px;
    }
}


body {
    position: relative;
    font-family: 'Roboto', sans-serif;
    margin: 0;
    color: #C0C0C0;
}

body .section {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
}

img.loader {
    top: 50%;
    position: relative;
    z-index: 200;
    display: block;
    margin: 0 auto;
}

div.overlay {
    height: 100%;
    width: 100%;
    background: #fff;
    opacity: 0.5;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
    position: absolute;
    top: 0;
    left: 0;
    z-index: 200;
}

form {
    position: relative;
}

form a {
    color: #B0B0B0;
}

.subscribe-form__success {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #1a1a1a;
    padding: 15px;
    font-size: 18px;
    line-height: 1.4;
    box-sizing: border-box;
    z-index: 10;
}

.subscribe-form__success.active {
    display: block;
}

.subscribe-form__success > div {
    display: table;
    width: 100%;
    height: 100%;
}

.subscribe-form__success > div > div {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
}

.subscribe-form__success b {
    display: block;
    margin-bottom: 10px;
}

ul.errors {
    text-align: center;
    clear: both;
    width: 100%;
    box-sizing: border-box;
    margin: 0 0 20px;
}

/* ------------ iti ------------ */
.iti__country-list {
    max-width: 500px;
    background: #050505;
    width: 100%;
}

.iti--container {
    width: calc(100vw - 36px);
}

.iti__country-name {
    color: #7a7e85;
}

.iti__country {
    max-width: 100%;
    overflow: hidden;
}

.iti__divider {
    width: 100%;
}

/* ------------ /iti ------------ */

/* --------------- placeholder --------------- */
::-webkit-input-placeholder {
    color: #7a7e85;
    -webkit-transition: color 300ms ease-in-out;
}

:-moz-placeholder {
    color: #7a7e85;
    -webkit-transition: color 300ms ease-in-out;
    transition: color 300ms ease-in-out;
}

.placeholder {
    color: #7a7e85;
    -webkit-transition: color 300ms ease-in-out;
    transition: color 300ms ease-in-out;
}

:focus::-webkit-input-placeholder {
    color: transparent
}

:focus::-moz-placeholder {
    color: transparent
}

:focus:-moz-placeholder {
    color: transparent
}

:focus:-ms-input-placeholder {
    color: transparent
}

/* --------------- /placeholder --------------- */

/* --------------- nice-select --------------- */
.nice-select {
    display: inline-block;
    vertical-align: top;
    position: relative;
    z-index: 10;
    width: 100%;
    height: 58px;
    padding: 0;
    font-size: 16px;
    cursor: pointer;
    border: none;
    -webkit-transition: border-radius .3s ease-in-out;
    transition: border-radius .3s ease-in-out;
    text-align: center;
}

.nice-select.active {
    z-index: 100;
}

.nice-select:after {
    position: absolute;
    z-index: 12;
    top: 50%;
    right: 7px;
    margin-top: -2px;
    border: 5px solid transparent;
    border-left: 5px solid #8e929b;
    -webkit-transition: transform .3s ease-in-out, top .3s ease-in-out;
    transition: transform .3s ease-in-out, top .3s ease-in-out;
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    content: '';
}

.nice-select.active:after {
    -webkit-transform: rotate(270deg);
    transform: rotate(270deg);
}

.nice-select__item {
    position: absolute;
    z-index: 12;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
    height: 100% !important;
    width: 100%;
    margin: 0;
    line-height: 28px;
    padding: 14px 20px;
    font-family: Roboto, sans-serif !important;
    font-size: 18px !important;
    font-weight: 400 !important;
    color: #7a7e85;
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-sizing: border-box;
    -webkit-transition: border-bottom 0.2s ease, color 0.2s ease;
    transition: border-bottom 0.2s ease, color 0.2s ease;
}

.nice-select_selected .nice-select__item {
    color: #fff;
}

.nice-select_mobile select {
    position: absolute;
    top: 0;
    left: 1px;
    bottom: -1px;
    z-index: 13;
    width: 100%;
}

.nice-select_custom select {
    position: absolute;
    left: -100000px;
    width: 100%;
}

.nice-select__popup {
    position: absolute;
    top: 100% !important;
    overflow: hidden;
    padding: 0;
    z-index: 11;
    border: 1px solid rgb(86, 85, 87);
    border-top: none;
    box-sizing: border-box;
}

.nice-select__popup ul {
    z-index: 1;
    margin: 0;
    padding: 0;
}

.nice-select__popup li {
    white-space: nowrap;
    overflow: hidden;
    cursor: pointer;
    padding: 0 10px;
    margin: 0;
    height: 32px;
    line-height: 32px;
    font-size: 14px;
    background: #050505;
    color: #8e929b;
    text-align: left;
    -webkit-transition: background .3s, color .3s;
    transition: background .3s, color .3s;
}

.nice-select__popup li:hover,
.nice-select__popup li.active {
    color: #fff;
}

.nice-select__popup li.active {
    cursor: default;
}

.nice-select.site-form__error {
    border-bottom: none !important;
}

.nice-select.site-form__error .nice-select__item {
    border-bottom: 1px solid #f97168 !important;
    color: #f97168;
}

/* --------------- /nice-select --------------- */

ul.errors > li {
    color: #ff0000;
    font-size: 14px;
    margin-bottom: 20px;
}

.site__form-finish.active {
    opacity: 1;
    visibility: visible;
}

.site__form-finish > div {
    display: table;
    width: 100%;
    height: 100%;
}

.site__form-finish > div > div {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
}

.site__form-finish b {
    display: block;
    font-size: 20px;
    font-family: "Roboto-Bold", sans-serif;
    text-transform: uppercase;
}

#feedback-form-recaptcha > div {
    margin: 0 auto;
}

.flex-block {
    display: flex;
    justify-content: space-between;
}

.flex-column {
    display: flex;
    flex-direction: column;
}

.flex-center {
    display: flex;
    align-items: center;
}

.right-menu {
    margin-left: auto;
}

.left-menu {
    margin-right: auto;
}

.vh100 {
    min-height: 100vh;
}

.txt-center {
    text-align: center;
}

.bg-none {
    background-image: none !important;
}

.gradient-pink_blue {
    background: -moz-linear-gradient(45deg, #ec008e 0%, #00c4ff 100%);
    background: -webkit-gradient(left bottom, right top, color-stop(0%, #ec008e), color-stop(100%, #00c4ff));
    background: -webkit-linear-gradient(45deg, #ec008e 0%, #00c4ff 100%);
    background: -o-linear-gradient(45deg, #ec008e 0%, #00c4ff 100%);
    background: -ms-linear-gradient(45deg, #ec008e 0%, #00c4ff 100%);
    background: linear-gradient(45deg, #ec008e 0%, #00c4ff 100%);
}

.txt-16 {
    font-size: 16px;
    font-weight: 500;
    line-height: 21px;
}

.txt-56 {
    font-size: 56px;
    font-weight: 500;
    line-height: 66px;
}

.txt-32 {
    font-size: 32px;
    font-weight: 500;
    line-height: 43px;
}

.txt-21 {
    font-family: Roboto;
    font-size: 21px;
    line-height: 24px;
}

.txt-18 {
    font-size: 18px;
    font-family: Roboto;
    color: #ffffff;
}

.swiper-container {
    cursor: pointer;
    position: relative;
    margin-top: 40px;
    margin-bottom: 40px;
}

.swiper-container img {
    margin: 0 auto;
    transition: 0.4s;
    transform: scale(0.75);
    opacity: 0.5;
}

.swiper-container .swiper-slide {
    height: 60px;
}

.swiper-container .swiper-slide img {
    margin-top: 10px;
}

.swiper-container .swiper-slide-active img {
    transform: scale(1.25);
    opacity: 1 !important;
}

.center .slick-center img {
    transition: 0.4s;
}

.center .slick-slide {
    display: flex;
    align-items: center;
    height: 50px;
}

.center .slick-prev,
.center .slick-next {
    position: absolute;
    width: 50%;
    height: 100%;
    opacity: 0.00001;
    top: 0;
    z-index: 30;
    cursor: pointer;
}

.center .slick-prev {
    left: 0;
}

.center .slick-next {
    right: 0;
}

.header {
    padding: 0 20px;
    position: fixed;
    right: 0;
    left: 0;
    height: 70px;
    transition: 0.4s;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 40;
}

.header .header_desktop {
    height: 36px;
}

.header a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
    margin-top: auto;
}

.header .header-nav {
    transition: 0.3s;
    color: #C0C0C0;
    align-items: center;
    width: 70%;
}

.header .header-nav .header__nav-link {
    position: relative;
    transition: 0.3s;
    font-size: 16px;
    font-weight: 500;
    line-height: 21px;
    text-transform: uppercase;
}

.header .header-nav .header__nav-link_ru {
    font-size: 14px;
}

.header .header-nav .header__nav-link:hover {
    color: #ffffff;
}

.header .header-nav .header__nav-link:hover::after {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    left: 0;
    bottom: -10px;
    margin: 0 auto;
    height: 2px;
    animation: gradientBottom 0.4s;
    background: -moz-linear-gradient(45deg, #ec008e 0%, #00c4ff 100%);
    background: -webkit-gradient(left bottom, right top, color-stop(0%, #ec008e), color-stop(100%, #00c4ff));
    background: -webkit-linear-gradient(45deg, #ec008e 0%, #00c4ff 100%);
    background: -o-linear-gradient(45deg, #ec008e 0%, #00c4ff 100%);
    background: -ms-linear-gradient(45deg, #ec008e 0%, #00c4ff 100%);
    background: linear-gradient(45deg, #ec008e 0%, #00c4ff 100%);
}

.header .header-nav .sign-btn img {
    margin-right: 10px;
    opacity: 0.8;
    transition: 0.4s;
}

.header .header-nav .sign-btn:hover img {
    opacity: 1;
}

.header .header_desktop .header-nav {
    margin-left: auto;
    display: flex;
    justify-content: space-between;
}

.header .header_desktop .header-nav .header__nav-link {
    display: flex;
    align-items: center;
}

.header .mobile-nav-menu {
    display: none;
    z-index: 99;
    overflow: auto;
    padding-top: 88px;
    padding-bottom: 100px;
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    background-color: black;
}

.header .mobile-nav-menu .header-nav {
    width: 100%;
}

.header .mobile-nav-menu .header-nav .header__nav-link {
    margin-bottom: 48px;
}

.header .mobile-nav-menu .header-nav .header__nav-link:hover::after {
    bottom: -24px;
}

.header .mobile-nav-menu .header-nav .margin-40 {
    margin-bottom: 40px;
}

.header .mobile-nav-menu .header-nav .padding-24 {
    margin: 0;
    padding: 24px 0;
}

.header .mobile-nav-menu .header-nav .padding-24:hover::after {
    bottom: -2px;
}

.header .mobile-nav-menu .header-nav .sign-btn {
    position: relative;
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}

.header .mobile-nav-menu .header-nav .sign-btn img {
    position: absolute;
    left: 16px;
}

.header .mobile-nav-menu .btn-footer {
    top: auto;
    bottom: -55px;
    right: 0;
    left: 0;
}

.header .header_mobile {
    display: none;
}

.header .header_mobile .header__logo {
    width: 141.44px;
    height: 31.51px;
}

.header .header_mobile .header__menu {
    margin-left: auto;
    cursor: pointer;
    opacity: 0.6;
    transition: 0.2s;
}

.header .header_mobile .header__menu:hover {
    opacity: 1;
    transition: 0.2s;
}

@keyframes gradientBottom {
    from {
        opacity: 0;
        width: 1%;
    }
    to {
        opacity: 1;
        width: 100%;
    }
}

.main-block-index {
    background-image: url('../img/img_first_screen.jpg');
}

.main-block {
    padding-top: 90px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.main-block__content-first {
    width: 100%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.main-block__content-center {
    margin-bottom: 160px;
}

.main-block__content h1,
.main-block__content h2,
.main-block__content h3 {
    text-transform: uppercase;
}

.main-block__content h1 {
    color: #ffffff;
    margin-bottom: 0;
    margin-top: 0;
    font-size: 56px;
    font-weight: 500;
    line-height: 66px;
}

.main-block__content p {
    margin-top: 24px;
    color: #ffffff;
    font-family: Roboto, Arial, sans-serif;
    font-size: 21px;
    line-height: 24px;
}

.main-block__content h2 {
    font-size: 32px;
    font-weight: 500;
    line-height: 43px;
}

.main-block__content h3 {
    color: #6C6C6C;
    font-size: 24px;
    font-weight: 500;
    line-height: 28px;
}

.main-block__content .content-center__item {
    display: flex;
    background-repeat: no-repeat;
    background-position: top;
    width: 175px;
    height: 205px;
    cursor: pointer;
    margin: auto;
    margin-top: 81px;
    transition: 0.4s;
    text-decoration: none;
    color: inherit;
}

.main-block__content .content-center__item_ru {
    width: auto;
}

.main-block__content .content-center__item h2 {
    margin-top: auto;
}

.main-block__content .key-blue {
    background-image: url("../img/ic_monetize.png");
}

.main-block__content .key-blue:hover {
    background-image: url("../img/ic_monetize_hover.png");
    color: #00C4FF;
}

.main-block__content .key-pink {
    background-image: url("../img/ic_advertise.png");
}

.main-block__content .key-pink:hover {
    background-image: url("../img/ic_advertise_hover.png");
    color: #EC008C;
}

.btn-join-2 {
    display: inline-block;
    cursor: pointer;
    text-transform: uppercase;
    margin-top: 80px;
    min-width: 180px;
    padding: 12px 10px;
    font-size: 18px;
    color: #ffffff;
    font-weight: bold;
    letter-spacing: 1px;
    line-height: 24px;
    border: 2px solid #ffffff;
    transition: 0.3s;
}

.btn-join-2:hover {
    background-color: #ffffff;
    color: #EC008C;
    transition: 0.3s;
}

.main-block-content {
    background-image: url("../img/img_adv_first_screen.jpg");
}

.main-block-content .section {
    min-height: 44vh;
    margin-top: auto;
    display: flex;
    flex-direction: column;
}

.main-block-content h1 {
    margin: 0 0 24px;
    color: #FFFFFF;
    font-size: 56px;
    font-weight: 500;
    line-height: 66px;
}

.main-block-content p {
    opacity: 0.8;
    line-height: 28px;
    font-size: 18px;
    font-family: Roboto;
    color: #fff;
}

.main-block-content a {
    color: inherit;
    text-decoration: none;
    border-bottom: 1px solid transparent;
    -webkit-transition: border-bottom 0.2s ease;
    transition: border-bottom 0.2s ease;
}

.main-block-content a[href^=tel] {
    cursor: default;
}

.main-block-content a:hover {
    border-bottom: 1px solid #fff;
}

.main-block-content a[href^=tel]:hover {
    border-bottom: 1px solid transparent;
}

.animate-scroll-btn {
    margin-top: auto;
    margin-bottom: 30px;
}

.animate-scroll-btn img {
    display: block;
    margin: 0 auto;
}

.animate-scroll-btn img:first-of-type {
    animation: scrollAnimation ease-in 1.4s;
    animation-iteration-count: infinite;
}

.main-block-content-table {
    display: flex;
    flex-direction: column;
    padding-top: 40px;
    background-image: url("../img/img_adv_benefits.jpg");
}

.main-block-content-table .section {
    background-image: url('../img/ic_adv_border.svg');
    background-position-y: bottom;
    background-repeat: no-repeat;
    padding-top: 100px;
    display: flex;
    justify-content: space-between;
}

.main-block-content-table .section {
    max-width: 1040px;
}

.main-block-content-table__item {
    max-width: 370px;
    margin: 0 auto;
}

.main-block-content-table__item_ru {
    max-width: 380px;
}

.main-block-content-table__item h4 {
    font-size: 21px;
    line-height: 24px;
    margin: 0 0 8px;
    font-family: Roboto;
    color: #FFFFFF;
    text-transform: uppercase;
}

.main-block-content-table__item p {
    font-size: 18px;
    font-family: Roboto;
    color: #ffffff;
    opacity: 0.8;
    line-height: 21px;
    min-height: 42px;
    margin: 0 0 32px;
}

.main-block-join {
    background-image: url("../img/img_adv_with_adskeeper.jpg");
    padding: 40px 20px;
}

.main-block-join .section {
    display: flex;
    justify-content: space-between;
}

.main-block-join__item {
    width: 50%;
    margin: 0 auto;
}

.main-block-join__item h1 {
    margin-top: 0;
    color: #FFFFFF;
    font-family: Roboto;
    font-weight: 600;
    margin-bottom: 41px;
}

.main-block-join__item-box {
    position: relative;
    margin-bottom: 30px;
}

.main-block-join__item-box p {
    color: #ffffff;
    font-family: Roboto;
    font-size: 21px;
    line-height: 24px;
    position: absolute;
    margin: 0;
    top: 20px;
    left: 80px;
}

.btn-join {
    display: inline-block;
    cursor: pointer;
    text-transform: uppercase;
    padding: 12px 10px;
    font-size: 18px;
    color: #ffffff;
    background-color: transparent;
    font-weight: bold;
    letter-spacing: 1px;
    line-height: 24px;
    border: 2px solid #ffffff;
    transition: 0.3s;
    margin: 0 auto;
    min-width: 180px;
}

.btn-join:hover {
    background-color: #ffffff;
    color: #EC008C;
    transition: 0.3s;
}

.sign-block,
.monetize,
.about_us,
.advertize {
    position: relative;
}

.sign-block .footer .btn-footer,
.monetize .footer .btn-footer,
.about_us .footer .btn-footer,
.advertize .footer .btn-footer {
    top: -3px;
}

.monetize .main-block-content {
    background-image: url("../img/img_mon_first_screen.jpg");
}

.monetize .main-block-content p {
    max-width: 640px;
    margin: 0 auto;
}

.monetize .main-block-content-table {
    justify-content: center;
    align-items: center;
    background-image: url("../img/img_mon_benefits.jpg");
    display: flex;
    flex-direction: column;
}

.monetize .main-block-content-table .px60 p {
    margin-bottom: 80px;
}

.monetize .main-block-content-table .section {
    padding-top: 20px;
}

.monetize .main-block-content-table .btn-join-2:hover {
    color: #00C4FF;
}

.monetize .bg-gradient {
    background: linear-gradient(to bottom, #000000 0%, #005f7c 100%);
}

.monetize .bg-gradient .section {
    background-image: url("../img/ic_mon_border.svg");
}

.monetize .main-block-txt-img {
    background: linear-gradient(to bottom, #005f7c 0%, #000000 100%);
    padding-top: 100px;
    text-align: center;
}

.monetize .main-block-txt-img h1 {
    margin: 0 0 20px;
    color: #FFFFFF;
}

.monetize .main-block-txt-img p {
    max-width: 800px;
    margin: 0 auto 70px;
    opacity: 0.8;
    line-height: 28px;
    font-size: 18px;
    font-family: Roboto;
    color: #ffffff;
}

.monetize .main-block-txt-img .main-block__item {
    max-width: 220px;
    margin: 0 auto 30px;
}

.monetize .main-block-txt-img .main-block__item p {
    font-family: Roboto;
    font-size: 21px;
    line-height: 24px;
    opacity: 1;
    margin-bottom: 0;
}

.monetize .main-block-txt-img .btn-join-2 {
    margin-top: 34px;
    min-width: 220px;
}

.monetize .main-block-txt-img .btn-join-2:hover {
    color: #00C4FF;
}

.monetize .main-block-join {
    background-image: url("../img/img_mon_join_adskeeper 3.jpg");
}

.monetize .join-sign-block .control-label {
    color: #B0B0B0;
}

.monetize .join-sign-block .join-sign-block_input:focus {
    border-bottom-color: #00C4FF;
}

.monetize .join-sign-block .checkbox-block input[type="checkbox"] + label::before {
    border: 2px solid #00C4FF;
}

.monetize .join-sign-block .checkbox-block input[type="checkbox"]:checked + label::before {
    background-color: #00C4FF;
}

.monetize .btn-join:hover {
    color: #00C4FF;
}

.main-block-txt-img__down-img {
    width: 100%;
    height: auto;
    max-width: 1300px;
    margin: 0 auto;
    margin-top: 100px;
    display: block;
}

.iti--allow-dropdown {
    margin-bottom: 30px;
}

@keyframes scrollAnimation {
    0% {
        transform: translate3d(0, -20px, 0);
    }
    50% {
        transform: translate3d(0, -10px, 0);
    }
    100% {
        transform: translate3d(0, -20px, 0);
    }
}

.about_us .main-block-content {
    display: flex;
    justify-content: space-between;
}

.about_us .main-block-content .section {
    min-height: 70vh;
}

.about_us .main-block-content h1 {
    font-weight: 600;
}

.about_us .main-block-content p {
    font-size: 18px;
    font-family: Roboto;
    color: #ffffff;
    opacity: 0.8;
    line-height: 28px;
    font-weight: 400;
    max-width: 720px;
    margin: 0 auto 80px;
}

.about_us .main-block-content .our_mission {
    transform: skew(170deg);
    background-color: transparent;
    border: 1px solid rgba(255, 255, 255, 0.3);
    padding: 30px 20px;
    margin-bottom: 80px;
}

.about_us .main-block-content .our_mission h2,
.about_us .main-block-content .our_mission p {
    display: block;
    transform: skew(-170deg);
    max-width: 720px;
    margin: 0 auto;
}

.about_us .main-block-content .our_mission h2 {
    color: #FFFFFF;
    text-transform: uppercase;
    margin-bottom: 16px;
    font-family: Roboto;
    font-size: 26px;
    font-weight: 500;
    letter-spacing: 0.2px;
    line-height: 30px;
}

.about_us .main-block-content {
    background-image: url("../img/img_about_us.jpg");
}

.terms {
    font-size: 13px;
    text-align: justify;
    background-image: url(../img/img_about_us.jpg);
}

.terms .main-block {
    padding-bottom: 90px;
}

.terms .main-block-content {
    margin: auto;
    width: 70%;
    background: none;
}

.terms .main-block-content h1 {
    text-align: center;
    text-transform: uppercase;
    margin: 40px 0;
}

@media (max-width: 1331px) {
    .about_us .main-block-content .section {
        padding: 0 40px;
    }

    .about_us .main-block-content .our_mission {
        width: calc(100% - 80px);
        margin: 0 auto 80px;
    }
}

.our_story {
    display: flex;
    align-items: center;
    background-color: #000000;
}

.our_story .section {
    max-width: 620px;
    margin: 0 auto;
    border-left: 1px;
}

.our_story .section h1 {
    text-align: center;
    text-transform: uppercase;
    font-family: Roboto;
    font-size: 26px;
    font-weight: 500;
    line-height: 30px;
    margin: 0 0 80px;
}

.our_story__item {
    padding: 0 20px 1px;
    border-left: 2px solid #EC008C;
}

.our_story__items {
    position: relative;
}

.our_story__items-last-item:after {
    content: '';
    display: block;
    position: absolute;
    bottom: -22px;
    left: -22px;
    width: 16px;
    height: 4px;
    border-radius: 20px 20px 20px 0;
    background-color: #EC008C;
}

.our_story__txt {
    font-size: 18px;
    font-family: Roboto;
    color: #ffffff;
    opacity: 0.8;
    margin: 0 0 20px;
    font-weight: 500;
    line-height: 21px;
    padding-top: 40px;
    padding-bottom: 70px;
}

.our_story__txt span {
    white-space: nowrap;
}

.our_story__gradient {
    background: -moz-linear-gradient(45deg, #ec008e 0%, #00c4ff 100%);
    background: -webkit-gradient(left bottom, right top, color-stop(0%, #ec008e), color-stop(100%, #00c4ff));
    background: -webkit-linear-gradient(45deg, #ec008e 0%, #00c4ff 100%);
    background: -o-linear-gradient(45deg, #ec008e 0%, #00c4ff 100%);
    background: -ms-linear-gradient(45deg, #ec008e 0%, #00c4ff 100%);
    background: linear-gradient(45deg, #ec008e 0%, #00c4ff 100%);
    position: absolute;
    padding: 2px;
    left: -22px;
    top: -30px;
    width: 83px;
    height: 32px;
    overflow: hidden;
    border-radius: 30px 30px 30px 0;
}

.our_story__gradient-item {
    text-align: center;
    padding: 5px 0;
    background-color: black;
    border-radius: 30px 30px 30px 0;
}

.sign-block .main-block-join__item {
    width: 100%;
}

.sign-block .main-block-content {
    background-image: url("../img/img_about_us.jpg");
}

.sign-block .main-block-content .section {
    margin: auto;
}

.sign-block .main-block-content .main-block-join__item {
    margin: initial;
    max-width: initial;
    text-align: left !important;
}

.sign-up .join-sign-block .control-label {
    color: #B0B0B0;
}

.sign-up .join-sign-block .join-sign-block_input:focus {
    border-bottom-color: #00C4FF;
}

.sign-up .join-sign-block .input-change {
    border-bottom-color: #00C4FF;
}

.sign-up .join-sign-block .checkbox-block input[type="checkbox"] + label::before {
    border: 2px solid #00C4FF;
}

.sign-up .join-sign-block .checkbox-block input[type="checkbox"]:checked + label::before {
    background-color: #00C4FF;
}

.sign-up .btn-join:hover {
    color: #00C4FF;
}

.contacts__head {
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
}

.contacts__num {
    width: 100%;
}

.contacts__recaptcha {
    position: relative;
    -webkit-transform: scale(0.8);
    -ms-transform: scale(0.8);
    transform: scale(0.8);
}

.contacts .main-block-content .contacts__num p,
.contacts .main-block-content .contacts__num h2 {
    text-align: left;
}

.contacts__input {
    display: block;
    width: 100%;
    box-sizing: border-box;
    padding: 14px 20px;
    color: #fff;
    font-family: Roboto, sans-serif;
    font-size: 18px;
    line-height: 28px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    background-color: transparent;
    margin-bottom: 30px;
    transition: 0.4s;
}

.contacts__input:focus {
    transition: 0.4s;
    outline: none;
    border-color: #ffffff;
}

.contacts textarea {
    min-height: 300px;
    resize: none;
}

.contacts .main-block-content {
    background-image: url("../img/img_about_us.jpg");
    min-height: 100vh;
    margin-top: auto;
}

.contacts .main-block-content h1,
.contacts .main-block-content h2,
.contacts .main-block-content p {
    text-align: center;
    text-transform: uppercase;
    margin: 0;
}

.contacts .main-block-content h1,
.contacts .main-block-content p {
    margin-bottom: 40px;
}

.contacts .main-block-content h2 {
    font-size: 26px;
    margin-bottom: 4px;
}

.contacts .main-block-content .section {
    max-width: 500px;
    margin-top: auto;
    min-height: 60vh;
    box-sizing: border-box;
    padding: 60px 10px 0;
}

.contacts .main-block-content .section form {
    width: 100%;
}

.contacts .main-block-content .section form input {
    width: calc(100% - 42px);
}

.contacts .btn-join {
    text-align: center;
}

.contacts .btn-join:hover {
    color: black;
}

.contacts__error .nice-select__item,
.contacts__error {
    color: #f97168;
    border: 1px solid #f97168 !important;
}

.contacts__error::-webkit-input-placeholder {
    color: #f97168;
}

.contacts__error:-moz-placeholder {
    color: #f97168;
}

.contacts__error.placeholder {
    color: #f97168;
}

.contacts__row_double:after {
    content: '';
    clear: both;
    display: table;
}

.contacts__row_double > div {
    float: left;
    width: 100%;
    margin-bottom: 10px;
}

.contacts__row_double > div + div {
    float: right;
    margin-bottom: 0;
}

@media (max-height: 600px) {
    .contacts .main-block-content .section {
        padding-top: 100px !important;
        min-height: 100vh;
    }

    .contacts .btn-join {
        margin-bottom: 40px;
    }
}

.join-sign-block {
    position: relative;
    padding: 40px 0;
    max-width: 420px;
    width: 150%;
    margin: 0 auto;
    background-color: rgba(0, 0, 0, 0.56);
}

.join-sign-block .relative {
    position: relative;
}

.join-sign-block .section {
    display: block;
    width: 320px;
}

.join-sign-block .section .join-sign-block__title {
    margin: 0 0 10px;
    text-transform: uppercase;
    text-align: center;
    font-size: 32px;
    font-weight: 400;
    line-height: 43px;
}

.join-sign-block .section p {
    font-size: 18px;
    font-family: Roboto;
    color: #ffffff;
    text-align: center;
    line-height: 21px;
    opacity: 0.8;
    margin: 0 0 38px;
}

.join-sign-block .section label {
    top: -10px;
    left: 0;
    font-family: 'Roboto';
    font-size: 15px;
    line-height: 18px;
    color: #333;
}

.join-sign-block .section .control-label {
    position: absolute;
    top: -15px;
    transition: 0.4s;
}

.join-sign-block .join-sign-block_input {
    font-size: 18px;
    font-family: Roboto;
    color: #ffffff;
    width: 100%;
    background-color: transparent;
    margin-bottom: 47px;
    border: 0;
    padding: 10px 0;
    line-height: 21px;
    transition: 0.4s;
    border-bottom: 2px solid rgba(255, 255, 255, 0.6);
}

.join-sign-block .join-sign-block_input:focus {
    outline: none;
    border-bottom-color: #EC008C;
    transition: 0.4s;
}

.join-sign-block .join-sign-block_input:focus + .control-label {
    color: #B0B0B0;
    transition: 0.4s;
}

.join-sign-block .input-change {
    border-bottom-color: #EC008C;
}

.join-sign-block .input-email {
    margin-bottom: 15px;
}

.join-sign-block .checkbox-block {
    position: relative;
}

.join-sign-block .checkbox-block label {
    color: #B0B0B0;
    font-family: Roboto;
    font-size: 15px;
    font-weight: 500;
    line-height: 18px;
}

.join-sign-block .checkbox-block input[type="checkbox"] {
    position: absolute;
}

.join-sign-block .checkbox-block input[type="checkbox"] + label {
    display: block;
    position: relative;
    top: 0;
}

.join-sign-block .checkbox-block input[type="checkbox"] + label::before {
    content: '';
    position: relative;
    display: inline-block;
    margin-right: 10px;
    width: 15px;
    height: 15px;
    background: none;
    top: 4px;
    border: 2px solid #EC008C;
}

.join-sign-block .checkbox-block input[type="checkbox"]:checked + label::before {
    background: none;
    background-color: #EC008C;
}

.join-sign-block .checkbox-block input[type="checkbox"]:checked + label::after {
    content: '';
    position: absolute;
    top: 9px;
    left: 3px;
    border-left: 2px solid #ffffff;
    border-bottom: 2px solid #ffffff;
    height: 4px;
    width: 10px;
    transform: rotate(-45deg);
}

.join-sign-block .checkbox-block input[type="checkbox"]:focus + label::before {
    outline: none;
}

.join-sign-block .checkbox-block input[type="checkbox"] {
    position: absolute;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(1px 1px 1px 1px);
    /* IE6, IE7 */
    clip: rect(1px, 1px, 1px, 1px);
}

.join-sign-block .checkbox-block input[type="checkbox"]:disabled + label {
    color: #575757;
}

.join-sign-block .checkbox-block input[type="checkbox"]:disabled + label::before {
    background: #ddd;
}

.join-sign-block .captcha {
    margin: 30px auto;
    width: 303px;
    height: 78px;
    background-color: #ffffff;
}

.main-block__footer {
    padding: 26px 20px;
    background-color: #000000;
}

.main-block__footer .section {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.main-block__footer p {
    color: #707070;
    font-family: Roboto;
    font-size: 14px;
    letter-spacing: 0.88px;
    line-height: 16px;
    margin: 0;
    text-align: center;
}

.main-block__footer > p {
    width: 33%;
}

/* ----- webmoney -----*/
.webmoney {
    display: flex;
    justify-content: space-between;
    width: 33%;
}

.webmoney a {
    display: inline-block;
    vertical-align: top;
    margin-right: 10px;
}

.webmoney p {
    font-size: 9px;
    text-align: left;
}

/* ----- /webmoney -----*/
@media (min-width: 540px) {
    .contacts__recaptcha {
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
    }

    .iti__country-list,
    .iti--container {
        width: auto;
    }
}

.btn-footer {
    text-transform: uppercase;
    text-decoration: none;
    font-size: 14px;
    color: #C0C0C0;
    font-weight: 500;
    letter-spacing: 0.88px;
    line-height: 19px;
    width: 33%;
}

.btn-footer:hover {
    color: #ffffff;
    transition: 0.4s;
}

@media (max-width: 1280px) {
    .header .header_desktop .header-nav {
        transition: 0.3s;
        width: 80%;
    }

    .main-block-index .section {
        overflow: hidden;
    }
}

@media (max-width: 1024px) {
    .webmoney {
        flex-direction: column;
        align-items: start;
    }
}

@media (max-width: 1000px) {
    .header {
        background-color: rgba(0, 0, 0, 0.85) !important;
    }

    .header .header_desktop {
        display: none;
    }

    .header .header_mobile {
        display: flex;
        justify-content: space-between;
        z-index: 100;
    }

    a.lang_mobile {
        margin-top: 0;
        margin-right: 10px;
    }

    .lang_mobile img {
        margin-right: 3px;
    }

    .header_mobile_left {
        display: flex;
        align-items: center;
    }

    .lang_mobile span {
        display: flex;
        align-items: center;
    }

    .header .mobile-nav-menu {
        display: none;
    }

    .main-block-content-table {
        padding: 0;
    }

    .main-block-content-table .section {
        padding-top: 50px;
        display: block;
        background-image: none !important;
    }

    .main-block-content-table__item {
        margin-bottom: 70px;
    }

    .main-block-content-table .btn-join-2 {
        margin: 0 0 40px;
    }

    .main-block-join .join-sign-block {
        margin-bottom: 40px;
    }

    .main-block-join .section {
        display: block;
    }

    .main-block-join__item {
        width: 100%;
    }

    .main-block-join h1 {
        text-align: center;
    }

    .main-block-join__item-box {
        text-align: center;
    }

    .main-block-join__item-box p {
        text-align: center !important;
        position: initial;
    }

    .main-block-txt-img {
        padding: 100px 20px 40px;
    }

    .main-block-txt-img .flex-block {
        display: block;
    }

    .terms .main-block-content {
        width: 80%;
    }
}

.overflow {
    overflow: hidden;
    height: 100vh;
}

@media (max-width: 540px) {
    .main-block__content-center {
        margin-bottom: 0;
    }

    .main-block__content .content-center__item {
        margin-top: 10px;
    }

    .main-block__content-first {
        min-height: auto;
    }

    .main-block-content .section {
        min-height: 66vh;
    }

    .main-block__content .content-center__item h2 {
        text-align: center;
        width: 100%;
        margin-top: 100px;
    }

    .main-block__content .content-center__item_ru h2 {
        font-size: 16px;
    }

    .main-block-center {
        margin-bottom: 63px;
        flex-direction: column;
    }

    .main-block-center .content-center__item {
        width: 103px;
        height: 87px;
        background-size: 60px;
        margin-top: 32px;
    }

    .main-block-center .center {
        margin: 32px;
        margin: 0;
    }

    .main-block {
        padding-top: 30px;
    }

    .main-block h1 {
        margin: 50px 0 8px;
        font-size: 24px;
        line-height: 28px;
    }

    .main-block h2 {
        font-size: 19px;
        line-height: 25px;
    }

    .main-block p {
        max-width: 312px;
        margin: 0 auto 30px;
        font-size: 16px;
        line-height: 19px;
    }

    .main-block h3 {
        font-size: 14px;
        line-height: 16px;
    }

    .about_us .main-block-content .section {
        min-height: 80vh;
        padding: 0 20px;
    }

    .about_us .main-block-content .our_mission {
        position: relative;
        border: none;
        padding: 30px 0;
        width: calc(100%);
        transform: none;
    }

    .about_us .main-block-content .our_mission :before,
    .about_us .main-block-content .our_mission :after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        height: 2px;
        background-color: rgba(255, 255, 255, 0.3);
    }

    .about_us .main-block-content .our_mission :after {
        bottom: 0;
    }

    .about_us .main-block-content .our_mission :before {
        top: 0;
    }

    .about_us .main-block-content .our_mission p,
    .about_us .main-block-content .our_mission h2 {
        transform: none;
    }

    .about_us .our_story .section {
        margin-bottom: 80px;
    }

    .about_us .our_story__items-last-item:after {
        bottom: -1px;
    }

    .main-block__footer .btn-footer {
        display: none;
    }

    .main-block-join {
        padding-left: 0;
        padding-right: 0;
    }

    .main-block-join .join-sign-block {
        width: auto;
    }

    .sign-block .join-sign-block {
        width: 100%;
        margin-top: 60px;
        margin-bottom: 60px;
    }

    .main-block__footer .section {
        flex-direction: column;
    }

    .webmoney {
        width: 100%;
        flex-direction: row;
        margin-bottom: 10px;
    }

    .webmoney p {
        text-align: right;
    }
}

@media screen and (min-width: 768px) {

    /* --------------- nice-select --------------- */
    .nice-select:after {
        right: 8px;
    }

    /* --------------- /nice-select --------------- */
    /* ------------ contacts ------------ */
    .contacts__head {
        -webkit-flex-wrap: nowrap;
        -ms-flex-wrap: nowrap;
        flex-wrap: nowrap;
    }

    .contacts__num {
        width: 100%;
    }

    .contacts__row_double > div {
        width: 47.3%;
        margin-bottom: 0;
    }

    /* ------------ /contacts ------------ */

}

@media (max-width: 360px) {
    .webmoney {
        flex-direction: column;
        align-items: center;
    }

    .webmoney p {
        text-align: center;
        margin-top: 10px;
    }
}

/* ------------ /landing ------------ */


.landing-page {
    font-family: 'Roboto';
    font-weight: 400;
    color: #fff;
}

.landing-page * {
    box-sizing: border-box;
}

.landing-section {
    display: flex;
    flex-direction: column;

}

.landing-container {
    width: 100%;
    padding: 0 15px;
    max-width: 1070px;
    margin: 0 auto;
}

.landing__logo {
    display: block;
    text-align: center;
    margin: 0 auto 30px;
}
.landing__logo--inner {
    margin-top: 25px;
}

.landing__title {
    margin-bottom: 30px;
}

.landing__subtitle {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 20px;
    position: relative;
    z-index: 2;
}

.landing__subtitle--pink {
    color: #EC008C;
}

.landing__subtitle--blue {
    color: #00c4ff;
}

.landing__item {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    max-width: 355px;
    margin: 0 auto;
    padding: 30px 15px;
}

.landing__top-wrap {
    position: relative;
    background-color: #000;
}

.landing__top {
    position: relative;
    z-index: 3;
    text-align: center;
    padding-top: 25px;
}


.landing__top-desc {
    display: flex;
    justify-content: center;
    text-align: left;
    position: relative;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 26px;
    margin: 0;
}

.landing__top-desc::before {
    content: '';
    position: absolute;
    z-index: 3;
    left: 50%;
    top: -6px;
    transform: translateX(-50%);
    width: 21px;
    height: 10px;
    background-image: url('../img/key.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.landing__top-desc::after {
    content: '';
    position: absolute;
    z-index: 3;
    left: calc(50% - 0.5px);
    width: 1px;
    height: 310px;
    top: 64px;
    background-color: rgba(255, 255, 255, 0.2);
}

.landing__top-text {
    position: relative;
    z-index: 2;
    font-size: 12px;
    line-height: 20px;
    min-height: 60px;
    margin-bottom: 50px;
}

.landing__bottom-wrap {
    position: relative;
}

.landing__bottom {
    display: flex;
    position: relative;
    z-index: 2;
}


.landing__top-wrap::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 50%;
    height: 340px;
    background-image: url('../img/land-1.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.landing__top-wrap::after {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    width: 50%;
    height: 340px;
    background-image: url('../img/land-2.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.landing__list {
    padding-left: 0;
    padding-top: 0;
    margin: auto 0 30px;
    list-style: none;
}

.landing__list li {
    margin-bottom: 15px;
    font-size: 14px;
    line-height: 20px;
    position: relative;
    padding-left: 10px;
    white-space: nowrap;
}

.landing__list li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 7px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: #fff;
}

.landing__btn {
    position: relative;
    z-index: 2;
    display: inline-block;
    box-sizing: border-box;
    cursor: pointer;
    text-transform: uppercase;
    padding: 10px;
    font-family: 'Roboto';
    font-size: 12px;
    color: #ffffff;
    background-color: transparent;
    text-decoration: none;
    font-weight: bold;
    line-height: 20px;
    border: 1px solid;
    text-align: center;
    transition: 0.3s;
    margin: 0 auto 40px;
    margin-left: 0;
    min-width: 193px;
}

.landing__btn--pink {
    border-color: #EC008C;
}

.landing__btn--pink:hover {
    color: #EC008C;
    background-color: #fff;
    border-color: #fff;
}

.landing__btn--blue {
    border-color: #00c4ff;
}

.landing__btn--blue:hover {
    color: #00c4ff;
    background-color: #fff;
    border-color: #fff;
}

@media (max-width: 1023px) {
    .landing__top-wrap::before, .landing__top-wrap::after {
        display: none;
    }

    .landing__top-desc {
        border-top: 0;
    }

    .landing__top-desc::before {
        display: none;
    }

    .landing__top-text, .landing__list, .landing__btn-wrap {
        width: 310px;
        white-space: normal;
    }

    .landing__top-text {
        margin-bottom: 40px;
    }

    .landing__top-text br {
        display: none;
    }

    .landing__list li {
        font-size: 13px;
        margin-bottom: 10px;
        /*white-space: normal;*/
    }

    .landing__item {
        max-width: 100%;
        align-items: center;
    }

    .landing__top-desc .landing__item:first-of-type::before {
        content: '';
        position: absolute;
        left: -15px;
        right: 0;
        top: -15px;
        bottom: 0;
        width: calc(100% + 15px);
        background-image: url('../img/land-1.png');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .landing__top-desc .landing__item:last-of-type::before {
        content: '';
        position: absolute;
        left: 0;
        top: -15px;
        bottom: 0;
        right: -15px;
        width: calc(100% + 15px);
        background-image: url('../img/land-2.png');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .landing__btn {
        margin: 0 auto;
    }
}

@media (max-width: 767px) {
    .landing__top-desc {
        flex-wrap: wrap;
    }

    .landing__item {
        width: 100%;
    }

    .landing__top, .landing__bottom {
        flex-wrap: wrap;
    }

    .landing__top-desc::after {
        display: none;
    }

    .landing__top-desc .landing__item:first-of-type::before, .landing__top-desc .landing__item:last-of-type::before {
        top: 0;
        width: calc(100% + 30px);
        left: -15px;
        right: -15px;
    }

    .landing__bottom-wrap::before, .landing__after-wrap::before {
        width: 100%;
    }

    .landing__top-text {
        width: 100%;
        min-height: auto;
        margin-bottom: 30px;
    }

    .landing__list {
        width: 100%;
    }

    .landing__list li {
        white-space: normal;
    }

    .landing__item {
        width: 100%;
    }

    .landing__btn-wrap {
        width: auto;
    }
}

@media (max-width: 425px) {
    .landing__title {
        margin-bottom: 20px;
    }

    .landing__title {
        margin-bottom: 20px;
    }
}


/* ----- not-available -----*/
.sign-wrapper-js {
    display: none;
}
.not-available {
    min-height: 100vh;
    width: 100%;
    background: url("../img/not-available-bg.jpg") no-repeat center center;
    background-size: cover;
    display: none;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
.not-available .main-block__footer {
    margin-top: unset;
}
.not-available-top {
    padding-top: 42px;
    display: flex;
    justify-content: center;
}
.not-available-middle {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 655px;
    height: 380px;
    overflow: hidden;
    background: rgba(6, 5, 5, 0.4);
    backdrop-filter: blur(10px);
}
.not-available-text {
    color: #fff;
    font-size: 34px;
    line-height: 48px;
    text-align: center;
    max-width: 512px;
    font-family: 'Roboto', Arial, sans-serif;
    margin: 0;
    text-transform: uppercase;
    z-index: 2;
}
.not-available .footer {
    width: 100%;
    box-sizing: border-box;
}
@media (max-width: 1280px) {
    .not-available-middle {
        height: 280px;
        max-width: 600px;
    }
}
@media (max-width: 767px) {
    .not-available-middle {
        backdrop-filter: none;
        background-color: transparent;
        padding: 0 30px;
        box-sizing: border-box;
    }
}
/* ----- /not-available -----*/

