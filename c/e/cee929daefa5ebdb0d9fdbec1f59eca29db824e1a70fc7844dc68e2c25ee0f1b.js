!function(n){"function"==typeof define&&define.amd?define(["jquery"],function(e){return n(e)}):"object"==typeof module&&"object"==typeof module.exports?module.exports=n(require("jquery")):n(jQuery)}(function(n){function e(n){var e=7.5625,t=2.75;return n<1/t?e*n*n:n<2/t?e*(n-=1.5/t)*n+.75:n<2.5/t?e*(n-=2.25/t)*n+.9375:e*(n-=2.625/t)*n+.984375}void 0!==n.easing&&(n.easing.jswing=n.easing.swing);var t=Math.pow,u=Math.sqrt,r=Math.sin,i=Math.cos,a=Math.PI,o=1.70158,c=1.525*o,s=2*a/3,f=2*a/4.5;return n.extend(n.easing,{def:"easeOutQuad",swing:function(e){return n.easing[n.easing.def](e)},easeInQuad:function(n){return n*n},easeOutQuad:function(n){return 1-(1-n)*(1-n)},easeInOutQuad:function(n){return n<.5?2*n*n:1-t(-2*n+2,2)/2},easeInCubic:function(n){return n*n*n},easeOutCubic:function(n){return 1-t(1-n,3)},easeInOutCubic:function(n){return n<.5?4*n*n*n:1-t(-2*n+2,3)/2},easeInQuart:function(n){return n*n*n*n},easeOutQuart:function(n){return 1-t(1-n,4)},easeInOutQuart:function(n){return n<.5?8*n*n*n*n:1-t(-2*n+2,4)/2},easeInQuint:function(n){return n*n*n*n*n},easeOutQuint:function(n){return 1-t(1-n,5)},easeInOutQuint:function(n){return n<.5?16*n*n*n*n*n:1-t(-2*n+2,5)/2},easeInSine:function(n){return 1-i(n*a/2)},easeOutSine:function(n){return r(n*a/2)},easeInOutSine:function(n){return-(i(a*n)-1)/2},easeInExpo:function(n){return 0===n?0:t(2,10*n-10)},easeOutExpo:function(n){return 1===n?1:1-t(2,-10*n)},easeInOutExpo:function(n){return 0===n?0:1===n?1:n<.5?t(2,20*n-10)/2:(2-t(2,-20*n+10))/2},easeInCirc:function(n){return 1-u(1-t(n,2))},easeOutCirc:function(n){return u(1-t(n-1,2))},easeInOutCirc:function(n){return n<.5?(1-u(1-t(2*n,2)))/2:(u(1-t(-2*n+2,2))+1)/2},easeInElastic:function(n){return 0===n?0:1===n?1:-t(2,10*n-10)*r((10*n-10.75)*s)},easeOutElastic:function(n){return 0===n?0:1===n?1:t(2,-10*n)*r((10*n-.75)*s)+1},easeInOutElastic:function(n){return 0===n?0:1===n?1:n<.5?-t(2,20*n-10)*r((20*n-11.125)*f)/2:t(2,-20*n+10)*r((20*n-11.125)*f)/2+1},easeInBack:function(n){return 2.70158*n*n*n-o*n*n},easeOutBack:function(n){return 1+2.70158*t(n-1,3)+o*t(n-1,2)},easeInOutBack:function(n){return n<.5?t(2*n,2)*(7.189819*n-c)/2:(t(2*n-2,2)*((c+1)*(2*n-2)+c)+2)/2},easeInBounce:function(n){return 1-e(1-n)},easeOutBounce:e,easeInOutBounce:function(n){return n<.5?(1-e(1-2*n))/2:(1+e(2*n-1))/2}}),n});8px;
    }

}

/*----- Medium -----*/
@media(min-width: 992px) and (max-width: 1199px){

    h2 {
        font-size: 35px;
    }

    h3 {
        font-size: 30px;
    }

    h4 {
        font-size: 22px;
    }

    h5 {
        font-size: 18px;
    }

}

/*----- Large -----*/
@media(min-width: 1200px){

}

/*---------------------------------------- BUTTONS & LINKS ----------------------------------------*/

a,
a:focus,
a:visited {
    color: #006699;
    outline: none;
    text-decoration: none;
}
a:active,
a:hover {
    color: #7dc049;
    outline: none;
    text-decoration: none;
}

.comparisonBtn,
.comparisonBtn:focus,
.comparisonBtn:visited {
    background-color: #006699;
    border: none;
    border-radius: 5px;
    color: #fff;
    outline: none;
    padding: 15px 50px;
}
.comparisonBtn:active,
.comparisonBtn:hover {
    background-color: #005580;
}

.comparisonBtnSmall,
.comparisonBtnSmall:focus,
.comparisonBtnSmall:visited {
    background-color: #bbb;
    font-size: 15px;
    padding: 3px 25px;
}
.comparisonBtnSmall:active,
.comparisonBtnSmall:hover {
    background-color: #999;
}

/*---------------------------------------- NAV BAR ----------------------------------------*/

.comparisonsNavbar {
    background: none;
    border: none;
    margin: 0 35px 0 0;
}

.comparisonsNavbar2 {
    background-color: #fff;
    border-bottom: 1px solid #eaeaea;
    height: 80px;
    margin: 0;
}

.comparisonsNavbar .comparisonsLogo {
    background-image: url(https://mfcdn.s3.amazonaws.com/Comparisons.org/images/logo.png);
    height: 45px;
    margin: 20px 0 0 35px;
    width: 249px;
}

.comparisonsNavbar .comparisonsLogo2 {
    background-image: url(https://mfcdn.s3.amazonaws.com/Comparisons.org/images/logo2.png);
}

.comparisonsNavbar .container-fluid a.navLink,
.comparisonsNavbar .container-fluid a.navLink:active,
.comparisonsNavbar .container-fluid a.navLink:focus {
    color: #fff;
    font-size: 15px;
    padding: 45px 0 0 1em;
    letter-spacing: 0.1em;
}
.comparisonsNavbar .container-fluid a.navLink:hover {
    color: #7dc049;
}

.navbar-toggle,
.navbar-toggle:focus {
    background-color: rgba(0,0,0,0.65);
    border: 2px solid #fff;
    margin-top: 15px;
    padding: 8px 9px;
}
.navbar-toggle:active,
.navbar-toggle:hover {
    background-color: rgba(0,0,0,1) !important;
}

.navbar-default .navbar-toggle .icon-bar {
    background-color: #d8ecc8;
    width: 15px;
}

.referralText {
    bottom: 20px;
    color: #fff;
    position: absolute;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 12px;
    margin-top: 5px;
    padding: 0 50px;
    text-align: right;
    width: 100%;
}

.referralText a.referralLink,
.referralText a.referralLink:active,
.referralText a.referralLink:visited {
    color: #fff;
    font-size: 14px;
}
.referralText a.referralLink:hover {
    color: #7dc049;
}

/*----- Extra Small -----*/
@media(max-width: 767px){

    .comparisonsNavbar {
        margin: 0 0 0 0;
    }

    .comparisonsNavbar .navbar-nav {
        margin: 0px -15px;
    }

    .comparisonsNavbar .comparisonsLogo {
        background-image: url(https://mfcdn.s3.amazonaws.com/Comparisons.org/images/logo.png);
        background-size: 170px 33px;
        height: 33px;
        margin: 15px 0 0 15px;
        width: 170px;
    }

    .comparisonsNavbar .comparisonsLogo2 {
        background-image: url(https://mfcdn.s3.amazonaws.com/Comparisons.org/images/logo2.png);
    }

    .comparisonsNavbar .container-fluid a.navLink,
    .comparisonsNavbar .container-fluid a.navLink:active,
    .comparisonsNavbar .container-fluid a.navLink:focus {
        background-color: #fff;
        border-bottom: 1px solid #555;
        color: #555;
        font-size: 18px;
        font-weight: 700;
        padding: 10px 0 10px 15px;
        letter-spacing: 0.1em;
    }
    .comparisonsNavbar .container-fluid a.navLink:hover {
        background-color: #eaeaea;
        color: #555;
    }

    .navbar-nav {
        margin: 10px -15px;
    }

    .comparisonsNavbar .container-fluid .navbar-collapse {
        border: none;
    }

    .referralText {
        padding: 0 15px;
    }

}

/*----- Small -----*/
@media(min-width: 768px) and (max-width: 991px){

    .comparisonsNavbar {
        margin: 0;
    }

    .comparisonsNavbar .comparisonsLogo {
        background-image: url(https://mfcdn.s3.amazonaws.com/Comparisons.org/images/logo.png);
        background-size: 170px 33px;
        height: 33px;
        margin: 15px 0 0 0;
        width: 170px;
    }

    .comparisonsNavbar .comparisonsLogo2 {
        background-image: url(https://mfcdn.s3.amazonaws.com/Comparisons.org/images/logo2.png);
    }

    .comparisonsNavbar .container-fluid a.navLink {
        font-size: 13px;
        padding: 30px 0 0 1em;
    }

}

/*----- Medium -----*/
@media(min-width: 992px) and (max-width: 1199px){

}

/*----- Large -----*/
@media(min-width: 1200px){

}

/*---------------------------------------- SOCIAL MEDIA ----------------------------------------*/

#socialMedia {
    bottom: 70px;
    position: absolute;
    right: 50px;
    width: 40px;
}

.btnSocial {
    background-color: rgba(0,0,0,0.5);
    border: 2px solid #fff;
    height: 40px;
    margin-top: 5px;
    outline: none;
    width: 40px;
}

.btnFacebook,
.btnFacebook:focus,
.btnFacebook:visited {
    background-image: url(https://mfcdn.s3.amazonaws.com/Comparisons.org/images/iconFacebook.png);
    background-position: 14px 8px;
    background-repeat: no-repeat;
}
.btnFacebook:active,
.btnFacebook:hover {
    background-color: #3b5a9b;

}

.btnGoogle,
.btnGoogle:focus,
.btnGoogle:visited {
    background-image: url(https://mfcdn.s3.amazonaws.com/Comparisons.org/images/iconGoogle.png);
    background-position: 10px 12px;
    background-repeat: no-repeat;
}
.btnGoogle:active,
.btnGoogle:hover {
    background-color: #e1493c;
}

.btnLinkedIn,
.btnLinkedIn:focus,
.btnLinkedIn:visited {
    background-image: url(https://mfcdn.s3.amazonaws.com/Comparisons.org/images/iconLinkedIn.png);
    background-position: 11px 10px;
    background-repeat: no-repeat;
}
.btnLinkedIn:active,
.btnLinkedIn:hover {
    background-color: #017bb6;
}

/*----- Extra Small -----*/
@media(max-width: 767px){

    #socialMedia {
        right: 15px;
    }

}

/*---------------------------------------- SECTIONS ----------------------------------------*/

.sectionContainer {
    padding: 70px 0 110px;
}

.sectionContent {
    margin-top: 35px;
}

.sectionContainer h1,
.sectionContainer h2,
.sectionContainer h3 {
    color: #7dc049;
    text-align: center;
}

.sectionContainer h4 {
    color: #555;
    text-align: center;
}

.sectionGray {
    background-color: #eaeaea;
}

.sectionWhite {
    background-color: #fff;
}

.sectionContainer .comparisonBtn {
    margin-top: 10px;
}

/*----- Extra Small -----*/
@media(max-width: 767px){

    .sectionContainer {
        padding: 30px 0 50px;
    }

    .sectionContent {
        margin-top: 10px;
    }

    .sectionContainer h1,
    .sectionContainer h2,
    .sectionContainer h3,
    .sectionContainer h4 {
        text-align: left;
    }

    .sectionContainer h4 {
        margin-bottom: 20px;
    }

}

/*----- Extra Small -----*/
@media(max-width: 767px){

    .sectionContainer {
        padding: 40px 10px 55px;
    }

}

/*----- Small -----*/
@media(min-width: 768px) and (max-width: 991px){

    .sectionContainer {
        padding: 45px 0 70px;
    }

}

/*----- Medium -----*/
@media(min-width: 992px) and (max-width: 1199px){

    .sectionContainer {
        padding: 60px 0 100px;
    }

}

/*---------------------------------------- SECTION TOP ----------------------------------------*/

#sectionTop {
    background: none;
    height: 100%;
    position: relative;
}

#sectionTop h1 {
    color: #fff;
}

#sectionTop h2 {
    color: #7dc049;
}

#sectionTop h5 {
    color: #bde89c;
    margin-bottom: 0;
}

#sectionTop #billboardContainer {
    position: relative;
    text-align: center;
    top: 25%;
}

#sectionTop #billboardContainer #billboard {
    background-color: rgba(0,0,0,0.65);
    border: 2px solid #fff;
    font-weight: 600;
    letter-spacing: 0.1em;
    padding: 15px 30px;
}

#menu {
    margin-top: 35px;
}

#menu select {
    background: #fff;
    background-image: url(https://mfcdn.s3.amazonaws.com/Comparisons.org/images/bgSelect.png);
    background-position: right;
    border: 1px solid #999;
    color: #555;
    cursor: pointer;
    font-size: 20px;
    height: 55px;
    letter-spacing: 0.03em;
    max-width: 400px;
    outline: none;
    text-indent: 15px;
    width: 100%;
    -webkit-appearance: none;
    -moz-appearance: none;
}

#menu select::-ms-expand {
    display: none;
}

/*for IE10*/
select::-ms-expand {
    display: none;
}

/*----- Extra Small -----*/
@media(max-width: 767px){


    #sectionTop {
        background: center top fixed no-repeat url(https://mfcdn.s3.amazonaws.com/Comparisons.org/images/bg_xs.jpg);
        height: 100%;
        max-height: 800px;
    }

    #sectionTop h1 {
        font-size: 40px;
    }

    #sectionTop #billboardContainer {
        top: 50px;
    }

    #sectionTop #billboardContainer #billboard {
        padding: 15px 20px;
    }

    #menu select {
        font-size: 17px;
    }

}

/*----- Small -----*/
@media(min-width: 768px) and (max-width: 991px){

    #sectionTop h1 {
        font-size: 50px;
    }

}

/*----- Medium -----*/
@media(min-width: 992px) and (max-width: 1199px){

    #sectionTop h1 {
        font-size: 70px;
    }

}

/*---------------------------------------- SECTION NUMBERS ----------------------------------------*/

#sectionNumbers {
    background-color: #7dc049;
    color: #d8ecc8;
    font-size: 18px;
    letter-spacing: 0.05em;
    line-height: 1.1em;
    padding: 50px 0 65px;
}

#sectionNumbers h4 {
    color: #fff;
    font-size: 22px;
}

.iconNumbers {
    height: 50px;
    float: left;
    margin-right: 15px;
}

#iconReviews {
    background-image: url(https://mfcdn.s3.amazonaws.com/Comparisons.org/images/iconReviews.png);
    width: 50px;
}

#iconBrands {
    background-image: url(https://mfcdn.s3.amazonaws.com/Comparisons.org/images/iconBrands.png);
    width: 52px;
}

#iconCategories {
    background-image: url(https://mfcdn.s3.amazonaws.com/Comparisons.org/images/iconCategories.png);
    width: 46px;
}

/*----- Small -----*/
@media(min-width: 768px) and (max-width: 991px){

    #sectionNumbers {
        font-size: 15px;
    }

    #sectionNumbers h4 {
        font-size: 18px;
    }

}

/*----- Medium -----*/
@media(min-width: 992px) and (max-width: 1199px){

    #sectionNumbers {
        font-size: 16px;
    }


    #sectionNumbers h4 {
        color: #fff;
        font-size: 19px;
    }

}

/*---------------------------------------- SECTION CATEGORIES ----------------------------------------*/

.categoryThumb {
    background-color: #fff;
    background-position-x: 50%;
    background-position-y: 50%;
    background-size: 100% 100%;
    box-shadow: 2px 2px 10px #d4d4d4;
    color: #555;
    margin: 15px 0;
    padding-top: 75%; /* 4:3 Aspect Ratio */
    position: relative;
    width: 100%;
}
.categoryThumb:hover {
    background-size: 107% 107%;
    box-shadow: 2px 2px 15px #bbb;
    color: #7dc049;
    text-decoration: none;
}

.categoryHeadline {
    background-color: #fff;
    bottom: 0;
    letter-spacing: 0.02em;
    padding: 10px 25px;
    position: absolute;
    text-align: center;
    width: 100%;
    z-index: 100;
}

.categorySearch {
    background-color: #fff;
    box-shadow: 2px 2px 10px #d4d4d4;
    color: #555;
    margin: 15px 0;
    padding: 30px;
    position: relative;
    text-align: center;
    width: 100%;
}
.categorySearch:hover {
    background-size: 107% 107%;
    box-shadow: 2px 2px 15px #bbb;
    text-decoration: none;
}

.categorySearch a {
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 0.05em;
}

.categorySearch h4 {
    text-align: left;
}

#categoryThumbMortgage {
    background-image: url(https://mfcdn.s3.amazonaws.com/Comparisons.org/photos/photo_mortgage.jpg);
}
#categoryThumbLife {
    background-image: url(https://mfcdn.s3.amazonaws.com/Comparisons.org/photos/photo_life.jpg);
}
#categoryThumbDebt {
    background-image: url(https://mfcdn.s3.amazonaws.com/Comparisons.org/photos/photo_debt.jpg);
}
#categoryThumbHomeSecurity {
    background-image: url(https://mfcdn.s3.amazonaws.com/Comparisons.org/photos/photo_homeSecurity.jpg);
}
#categoryThumbPersonalLoans {
    background-image: url(https://mfcdn.s3.amazonaws.com/Comparisons.org/photos/photo_personalLoans.jpg);
}
#categoryThumbDating {
    background-image: url(https://mfcdn.s3.amazonaws.com/Comparisons.org/photos/photo_dating.jpg);
}
#categoryThumbAuto {
    background-image: url(https://mfcdn.s3.amazonaws.com/Comparisons.org/photos/photo_auto.jpg);
}
#categoryThumbAntivirus {
    background-image: url(https://mfcdn.s3.amazonaws.com/Comparisons.org/photos/photo_antivirus.jpg);
}
#categoryThumbTaxSoftware {
    background-image: url(https://mfcdn.s3.amazonaws.com/Comparisons.org/photos/photo_taxSoftware.jpg);
}
#categoryThumbCreditRepair {
    background-image: url(https://mfcdn.s3.amazonaws.com/Comparisons.org/photos/photo_creditRepair.jpg);
}
#categoryThumbVpn {
    background-image: url(https://mfcdn.s3.amazonaws.com/Comparisons.org/photos/photo_vpn.jpg);
}
#categoryThumbHomeWarranty {
    background-image: url(https://mfcdn.s3.amazonaws.com/Comparisons.org/photos/photo_homeWarranty.jpg);
}
#categoryThumbWebsiteBuilder {
    background-image: url(https://mfcdn.s3.amazonaws.com/Comparisons.org/photos/photo_websiteBuilder.jpg);
}
#categoryThumbMoving {
    background-image: url(https://mfcdn.s3.amazonaws.com/Comparisons.org/photos/photo_moving.jpg);
}
#categoryThumbMealKit {
    background-image: url(https://mfcdn.s3.amazonaws.com/Comparisons.org/photos/photo_mealKit.jpg);
}
#categoryThumbHomeInsurance {
    background-image: url(https://mfcdn.s3.amazonaws.com/Comparisons.org/photos/photo_homeInsurance.jpg);
}
#categoryThumbCasualGames {
    background-image: url(https://mfcdn.s3.amazonaws.com/Comparisons.org/photos/photo_casualGames.jpg);
}
#categoryThumbCreditCards {
    background-image: url(https://mfcdn.s3.amazonaws.com/Comparisons.org/photos/photo_creditCards.jpg);
}
#categoryThumbMattresses {
    background-image: url(https://mfcdn.s3.amazonaws.com/Comparisons.org/photos/photo_mattresses.jpg);
}
#categoryThumbMedicalAlerts {
    background-image: url(https://mfcdn.s3.amazonaws.com/Comparisons.org/photos/photo_medicalAlerts.jpg);
}


/*----- Extra Small -----*/
@media(max-width: 767px){

    .categoryThumb,
    .categoryThumb:hover {
        box-shadow: none;
    }

    .categoryHeadline {
        font-size: 15px;
        letter-spacing: 0.01em;
        padding: 2px 10px;
    }

    .categorySearch,
    .categorySearch:hover {
        box-shadow: none;
        font-size: 12px;
        line-height: 1.2em;
        padding: 20px;
    }

    .categorySearch a {
        font-size: 12px;
        letter-spacing: -0.1px;
    }

}

/*----- Small -----*/
@media(min-width: 768px) and (max-width: 991px){

    .categorySearch {
        line-height: 1.2em;
        padding: 20px 30px;
    }

}

/*----- Medium -----*/
@media(min-width: 992px) and (max-width: 1199px){

    .categorySearch {
        height: 159px;
        line-height: 1.2em;
        padding: 20px 30px;
    }

}

/*----- Large -----*/
@media(min-width: 1200px){

    .categorySearch {
        height: 197px;
    }

}

/*---------------------------------------- SECTION BRANDS ----------------------------------------*/

.reviewedBrands {
    margin-top: 20px;
}

.reviewedBrands ul li img {
    margin: 30px 10px 0;
    height: 62px;
    width: 140px;
}

/*----- Extra Small -----*/
@media(max-width: 767px){

    .reviewedBrands ul li img {
        height: 44px;
        width: 100px;
    }

}

/*---------------------------------------- SECTION ABOUT ----------------------------------------*/

.tableJobs {
    margin-bottom: 50px;
}

.tableJobs .listing {
    border: none;
    padding: 30px 20px;
}

.listingDescription {
    margin-bottom: 10px;
}

.tableJobs .listing .ctaContainer {
    text-align: right;
}

.table-striped > tbody > tr:nth-child(2n+1) > td, .table-striped > tbody > tr:nth-child(2n+1) > th {
    background-color: #eaeaea;
}

/*----- Extra Small -----*/
@media(max-width: 767px){

    .tableJobs .listing {
        border: none;
        padding: 20px 0;
    }

    .tableJobs .listing .ctaContainer {
        margin-top: 20px;
        text-align: left;
    }

    .listingDescription {
        margin-bottom: 0;
    }

}


/*---------------------------------------- FORMS ----------------------------------------*/

form button {
    margin: 30px 0 0;
}

form label {
    color: #555;
}

.form-control {
    color: #999;
    font-size: 16px;
    height: 45px;
}

.form-control::-moz-placeholder {
    color: #999;
}
.form-control:-ms-input-placeholder {
    color: #999;
}
.form-control::-webkit-input-placeholder {
    color: #999;
}

.formResponse {
    height: calc(100% - 251px);
}

.formResponse h2 {
    color: #7dc049;
    margin-top: 100px;
    text-align: center;
}

.formResponse .comparisonBtn {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
}

/*---------------------------------------- FOOTER ----------------------------------------*/

#footer {
    background-color: #7dc049;
    color: #d8ecc8;
    font-size: 10px;
    height: 250px;
    letter-spacing: 0.05em;
    padding-top: 50px;
}

#footer .comparisonsLogo {
    margin: 0 0 7px;
}

#footer .footerRight {
    font-family: Arial, Helvetica, sans-serif;
    text-align: right;
}

#footer .footerNavLink {
    font-size: 15px;
    margin-right: 1em;
}

#footer .footerInfoLink {
    font-size: 12px;
}

#footer a,
#footer a:focus,
#footer a:visited {
    color: #fff;
    font-family: 'Rambla', sans-serif;

}
#footer a:active,
#footer a:hover {
    color: #d8ecc8;
}

#footer ul.list-inline {
    margin-left: 0;
}

#footer .list-inline > li {
    padding: 0;
    margin-right: 1em;
}

.footerSocial {
    height: 20px;
    margin: 7px 3px 6px 0;
    width: 20px;
}

.footerFacebook,
.footerFacebook:focus,
.footerFacebook:visited {
    background-image: url(https://mfcdn.s3.amazonaws.com/Comparisons.org/images/socialSprite.png);
    background-position: 0 0;
}
.footerFacebook:active,
.footerFacebook:hover {
    background-image: url(https://mfcdn.s3.amazonaws.com/Comparisons.org/images/socialSprite.png);
    background-position: 0 20px;
}

.footerGoogle {
    background-image: url(https://mfcdn.s3.amazonaws.com/Comparisons.org/images/socialSprite.png);
    background-position: 40px 0;
}
.footerGoogle:active,
.footerGoogle:hover {
    background-image: url(https://mfcdn.s3.amazonaws.com/Comparisons.org/images/socialSprite.png);
    background-position: 40px 20px;
}

.footerLinkedIn {
    background-image: url(https://mfcdn.s3.amazonaws.com/Comparisons.org/images/socialSprite.png);
    background-position: 20px 0;
}
.footerLinkedIn:active,
.footerLinkedIn:hover {
    background-image: url(https://mfcdn.s3.amazonaws.com/Comparisons.org/images/socialSprite.png);
    background-position: 20px 20px;
}

/*----- Extra Small -----*/
@media(max-width: 767px){

    #footer {
        padding: 60px 0 85px;
    }

    #footer .footerRight {
        text-align: center;
    }

    #footer .footerInfoLink {
        font-size: 12px;
        margin-right: 5px;
    }

}

/*---------------------------------------- MODALS ----------------------------------------*/

.modal-dialog {
    max-width: 700px;
    width: 100%;
}

.modal-header {
    border-bottom: none;
    padding: 15px 15px 0;
}

.modal-body {
    padding: 0 15px 30px;
}

#modalTitle {
    color: #7dc049;
    font-size: 30px;
    margin: 10px 0 0;
    text-align: center;
    text-transform: uppercase;
}

.modalIntro {
    text-align: center;
    margin-bottom: 30px;
}

/*----- Extra Small -----*/
@media(max-width: 767px){

    .modal-dialog {
        max-width: unset;
        width: unset;
    }

    #modalTitle {
        font-size: 24px;
    }

}

/*---------------------------------------- VIDEO PLAYER ----------------------------------------*/

.sectionContent video {
    height: auto;
    width: 100%;
}
.sectionContent video:hover {
    box-shadow: 2px 2px 15px #bbb;
}

video::-internal-media-controls-download-button {
    display:none;
}

video::-webkit-media-controls-enclosure {
    overflow:hidden;
}

video::-webkit-media-controls-panel {
    width: calc(100% + 30px); /* Adjust as needed */
}

/*----- Extra Small -----*/
@media(max-width: 767px){

    .sectionContent video,
    .sectionContent video:hover {
        box-shadow: none;
    }

}

/*---------------------------------------- VIDEO BACKGROUND ----------------------------------------*/

.fullscreen-bg {
    background-color: #555;
    bottom: 0;
    left: 0;
    overflow: hidden;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -100;
}

.fullscreen-bg__video {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
}

@media (min-aspect-ratio: 16/9) {

    .fullscreen-bg__video {
        height: 300%;
        top: -100%;
    }

}

@media (max-aspect-ratio: 16/9) {

    .fullscreen-bg__video {
        left: -100%;
        width: 300%;
    }

}

/*----- Extra Small -----*/
@media(max-width: 767px){

    .fullscreen-bg {
        display: none;
    }

}
/*---------------------------------------- TRANSITIONS ----------------------------------------*/

.transColor {
    -webkit-transition: color 200ms ease-in-out;
    -moz-transition: color 200ms ease-in-out;
    -o-transition: color 200ms ease-in-out;
    transition: color 200ms ease-in-out;
}

.transBGColor {
    -webkit-transition: background-color 200ms ease-in-out;
    -moz-transition: background-color 200ms ease-in-out;
    -o-transition: background-color 200ms ease-in-out;
    transition: background-color 200ms ease-in-out;
}

.transShadow {
    -webkit-transition: box-shadow 200ms ease;
    -moz-transition: box-shadow 200ms ease;
    -o.src;if(_.af(b))return df(b.Xm,a);var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(pf(c),d):b.addListener&&b.removeListener&&b.removeListener(d);qf--;(c=_.nf(b))?(df(c,a),0==c.Jg&&(c.src=null,b[of]=null)):bf(a);return!0};pf=function(a){return a in tf?tf[a]:tf[a]="on"+a};
vaa=function(a,b){if(a.un)a=!0;else{b=new _.Ze(b,this);var c=a.listener,d=a.em||a.src;a.Gu&&_.sf(a);a=c.call(d,b)}return a};_.nf=function(a){a=a[of];return a instanceof cf?a:null};kf=function(a){if("function"===typeof a)return a;a[uf]||(a[uf]=function(b){return a.handleEvent(b)});return a[uf]};_.vf=function(){_.Xe.call(this);this.Xm=new cf(this);this.uu=this;this.yj=null};_.lf=function(a,b,c,d,e){return a.Xm.add(String(b),c,!1,d,e)};
wf=function(a,b,c,d){b=a.Xm.Ig[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.un&&g.capture==c){var h=g.listener,l=g.em||g.src;g.Gu&&df(a.Xm,g);e=!1!==h.call(l,d)&&e}}return e&&!d.defaultPrevented};
waa=function(a){switch(a){case 0:return"No Error";case 1:return"Access denied to content document";case 2:return"File not found";case 3:return"Firefox silently errored";case 4:return"Application custom error";case 5:return"An exception occurred";case 6:return"Http response at 400 or 500 level";case 7:return"Request was aborted";case 8:return"Request timed out";case 9:return"The resource is not available offline";default:return"Unrecognized error code"}};
_.xf=function(a){switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:return!0;default:return!1}};yf=function(){};zf=function(a){return a.Jg||(a.Jg=a.Mg())};Af=function(){};
Bf=function(a){if(!a.Kg&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){const b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"];for(let c=0;c<b.length;c++){const d=b[c];try{return new ActiveXObject(d),a.Kg=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.Kg};Cf=function(a,b){a.Kg(b);100>a.Jg&&(a.Jg++,b.next=a.Ig,a.Ig=b)};_.Df=function(a){return a*Math.PI/180};
_.Ef=function(a){return 180*a/Math.PI};xaa=function(a,b){_.ke(b,function(c,d){"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:Ff.hasOwnProperty(d)?a.setAttribute(Ff[d],c):_.Pa(d,"aria-")||_.Pa(d,"data-")?a.setAttribute(d,c):a[d]=c})};_.Hf=function(a,b,c){var d=arguments,e=document,f=d[1],g=Gf(e,String(d[0]));f&&("string"===typeof f?g.className=f:Array.isArray(f)?g.className=f.join(" "):xaa(g,f));2<d.length&&yaa(e,g,d);return g};
yaa=function(a,b,c){function d(h){h&&b.appendChild("string"===typeof h?a.createTextNode(h):h)}for(var e=2;e<c.length;e++){var f=c[e];if(!_.qa(f)||_.va(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(_.va(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if("function"===typeof f){g="function"==typeof f.item;break a}}g=!1}_.Tb(g?_.Yb(f):f,d)}}};_.If=function(a){return Gf(document,a)};
Gf=function(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)};_.Jf=function(a,b){b.parentNode&&b.parentNode.insertBefore(a,b.nextSibling)};_.Kf=function(a){return a&&a.parentNode?a.parentNode.removeChild(a):null};_.Lf=function(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a};
_.Mf=function(a){this.Ig=a||_.na.document||document};_.Of=function(a,b,c){var d=a;b&&(d=(0,_.Ca)(a,b));d=zaa(d);"function"!==typeof _.na.setImmediate||!c&&_.na.Window&&_.na.Window.prototype&&!_.pb()&&_.na.Window.prototype.setImmediate==_.na.setImmediate?(Nf||(Nf=Aaa()),Nf(d)):_.na.setImmediate(d)};
Aaa=function(){var a=_.na.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!_.eb("Presto")&&(a=function(){var e=_.If("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=(0,_.Ca)(function(l){if(("*"==h||l.origin==h)&&l.data==g)this.port1.onmessage()},
this);f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});if("undefined"!==typeof a&&!_.mb()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.cb;c.cb=null;e()}};return function(e){d.next={cb:e};d=d.next;b.port2.postMessage(0)}}return function(e){_.na.setTimeout(e,0)}};
_.Qf=function(a){this.Ig=0;this.Pg=void 0;this.Mg=this.Jg=this.Kg=null;this.Ng=this.Og=!1;if(a!=_.pe)try{var b=this;a.call(void 0,function(c){Pf(b,2,c)},function(c){Pf(b,3,c)})}catch(c){Pf(this,3,c)}};Sf=function(){this.next=this.context=this.Jg=this.Kg=this.Ig=null;this.Mg=!1};Uf=function(a,b,c){var d=Tf.get();d.Kg=a;d.Jg=b;d.context=c;return d};
Vf=function(a,b){if(0==a.Ig)if(a.Kg){var c=a.Kg;if(c.Jg){for(var d=0,e=null,f=null,g=c.Jg;g&&(g.Mg||(d++,g.Ig==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.Ig&&1==d?Vf(c,b):(f?(d=f,d.next==c.Mg&&(c.Mg=d),d.next=d.next.next):Wf(c),Xf(c,e,3,b)))}a.Kg=null}else Pf(a,3,b)};Zf=function(a,b){a.Jg||2!=a.Ig&&3!=a.Ig||Yf(a);a.Mg?a.Mg.next=b:a.Jg=b;a.Mg=b};
ag=function(a,b,c,d){var e=Uf(null,null,null);e.Ig=new _.Qf(function(f,g){e.Kg=b?function(h){try{var l=b.call(d,h);f(l)}catch(n){g(n)}}:f;e.Jg=c?function(h){try{var l=c.call(d,h);void 0===l&&h instanceof $f?g(h):f(l)}catch(n){g(n)}}:g});e.Ig.Kg=a;Zf(a,e);return e.Ig};
Pf=function(a,b,c){if(0==a.Ig){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.Ig=1;a:{var d=c,e=a.oI,f=a.pI;if(d instanceof _.Qf){Zf(d,Uf(e||_.pe,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(n){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(_.va(d))try{var l=d.then;if("function"===typeof l){Baa(d,l,e,f,a);g=!0;break a}}catch(n){f.call(a,n);g=!0;break a}g=!1}}}g||(a.Pg=c,a.Ig=b,a.Kg=null,Yf(a),3!=b||c instanceof $f||Caa(a,c))}};
Baa=function(a,b,c,d,e){function f(l){h||(h=!0,d.call(e,l))}function g(l){h||(h=!0,c.call(e,l))}var h=!1;try{b.call(a,g,f)}catch(l){f(l)}};Yf=function(a){a.Og||(a.Og=!0,_.bg(a.PE,a))};Wf=function(a){var b=null;a.Jg&&(b=a.Jg,a.Jg=b.next,b.next=null);a.Jg||(a.Mg=null);return b};Xf=function(a,b,c,d){if(3==c&&b.Jg&&!b.Mg)for(;a&&a.Ng;a=a.Kg)a.Ng=!1;if(b.Ig)b.Ig.Kg=null,cg(b,c,d);else try{b.Mg?b.Kg.call(b.context):cg(b,c,d)}catch(e){dg.call(null,e)}Cf(Tf,b)};
cg=function(a,b,c){2==b?a.Kg.call(a.context,c):a.Jg&&a.Jg.call(a.context,c)};Caa=function(a,b){a.Ng=!0;_.bg(function(){a.Ng&&dg.call(null,b)})};$f=function(a){_.La.call(this,a)};_.eg=function(a,b,c){if("function"===typeof a)c&&(a=(0,_.Ca)(a,c));else if(a&&"function"==typeof a.handleEvent)a=(0,_.Ca)(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:_.na.setTimeout(a,b||0)};
_.fg=function(a){_.vf.call(this);this.headers=new Map;this.Yg=a||null;this.Jg=!1;this.Wg=this.Ig=null;this.Tg="";this.Ng=0;this.Og="";this.Mg=this.dh=this.Sg=this.ah=!1;this.Qg=0;this.Rg=null;this.Vg="";this.eh=this.Pg=!1};Daa=function(a){return _.gg&&"number"===typeof a.timeout&&void 0!==a.ontimeout};jg=function(a,b){a.Jg=!1;a.Ig&&(a.Mg=!0,a.Ig.abort(),a.Mg=!1);a.Og=b;a.Ng=5;hg(a);ig(a)};hg=function(a){a.ah||(a.ah=!0,a.Kg("complete"),a.Kg("error"))};
ng=function(a){if(a.Jg&&"undefined"!=typeof kg)if(a.Wg[1]&&4==_.lg(a)&&2==a.getStatus())a.getStatus();else if(a.Sg&&4==_.lg(a))_.eg(a.GB,0,a);else if(a.Kg("readystatechange"),a.zk()){a.getStatus();a.Jg=!1;try{if(_.mg(a))a.Kg("complete"),a.Kg("success");else{a.Ng=6;try{var b=2<_.lg(a)?a.Ig.statusText:""}catch(c){b=""}a.Og=b+" ["+a.getStatus()+"]";hg(a)}}finally{ig(a)}}};
ig=function(a,b){if(a.Ig){og(a);const c=a.Ig,d=a.Wg[0]?()=>{}:null;a.Ig=null;a.Wg=null;b||a.Kg("ready");try{c.onreadystatechange=d}catch(e){}}};og=function(a){a.Ig&&a.eh&&(a.Ig.ontimeout=null);a.Rg&&(_.na.clearTimeout(a.Rg),a.Rg=null)};_.mg=function(a){var b=a.getStatus(),c;if(!(c=_.xf(b))){if(b=0===b)a=_.Pe(1,String(a.Tg)),!a&&_.na.self&&_.na.self.location&&(a=_.na.self.location.protocol.slice(0,-1)),b=!Eaa.test(a?a.toLowerCase():"");c=b}return c};_.lg=function(a){return a.Ig?a.Ig.readyState:0};
Faa=function(a){const b={};a=a.getAllResponseHeaders().split("\r\n");for(let d=0;d<a.length;d++){if(_.Ra(a[d]))continue;var c=_.Ne(a[d]);const e=c[0];c=c[1];if("string"!==typeof c)continue;c=c.trim();const f=b[e]||[];b[e]=f;f.push(c)}return laa(b,function(d){return d.join(", ")})};_.pg=function(a){return"string"===typeof a.Og?a.Og:String(a.Og)};
Gaa=function(a){a.Pg.Jq("data",b=>{if("1"in b){var c=b["1"];let d;try{d=a.Qg(c)}catch(e){_.wg(a,new _.xg(13,`Error when deserializing response data; error: ${e}`+`, response: ${c}`))}d&&_.yg(a,d)}if("2"in b)for(b=_.zg(a,b["2"]),c=0;c<a.Og.length;c++)a.Og[c](b)});a.Pg.Jq("end",()=>{_.Ag(a,_.Bg(a));for(let b=0;b<a.Mg.length;b++)a.Mg[b]()});a.Pg.Jq("error",()=>{if(0!=a.Jg.length){var b=a.Ig.Ng;0!==b||_.mg(a.Ig)||(b=6);var c=-1;switch(b){case 0:var d=2;break;case 7:d=10;break;case 8:d=4;break;case 6:c=
a.Ig.getStatus();d=_.We(c);break;default:d=14}_.Ag(a,_.Bg(a));b=waa(b)+", error: "+_.pg(a.Ig);-1!=c&&(b+=", http status code: "+c);_.wg(a,new _.xg(d,b))}})};_.wg=function(a,b){for(let c=0;c<a.Jg.length;c++)a.Jg[c](b)};_.Ag=function(a,b){for(let c=0;c<a.Ng.length;c++)a.Ng[c](b)};_.Bg=function(a){const b={},c=Faa(a.Ig);Object.keys(c).forEach(d=>{b[d]=c[d]});return b};_.yg=function(a,b){for(let c=0;c<a.Kg.length;c++)a.Kg[c](b)};
_.zg=function(a,b){let c=2,d;const e={};try{let f;f=Haa(b);c=_.be(f);d=_.ce(f,2);_.$d(f,Iaa).length&&(e["grpc-web-status-details-bin"]=b)}catch(f){a.Ig&&404===a.Ig.getStatus()?(c=5,d="Not Found: "+String(a.Ig.Tg)):(c=14,d="Unable to parse RpcStatus: "+f)}return{code:c,details:d,metadata:e}};Cg=function(a,b){b=a.indexOf(b);-1<b&&a.splice(b,1)};_.Dg=function(a){this.Ng=a.HI||null;this.Kg=a.cI||!1};
Eg=function(a,b){_.vf.call(this);this.Vg=a;this.Qg=b;this.Pg=void 0;this.status=this.readyState=0;this.responseType=this.responseText=this.response=this.statusText="";this.onreadystatechange=null;this.Sg=new Headers;this.Mg=null;this.Tg="GET";this.Jg="";this.Ig=!1;this.Rg=this.Ng=this.Og=null};Fg=function(a){a.Ng.read().then(a.tF.bind(a)).catch(a.hv.bind(a))};Hg=function(a){a.readyState=4;a.Og=null;a.Ng=null;a.Rg=null;Gg(a)};Gg=function(a){a.onreadystatechange&&a.onreadystatechange.call(a)};
_.Ig=function(a,b=`unexpected value ${a}!`){throw Error(b);};_.Ng=function(a,b,c){const d=a.length;if(d){var e=a[0],f=0;if(_.Lg(e)){var g=e;var h=a[1];f=3}else"number"===typeof e&&f++;e=1;for(var l;f<d;){let q,t=void 0;var n=a[f++];"function"===typeof n&&(t=n,n=a[f++]);let u;Array.isArray(n)?u=n:(n?q=l=n:q=l,q instanceof Mg&&(u=a[f++]));n=f<d&&a[f];"number"===typeof n&&(f++,e+=n);b(e++,q,u,t)}c&&g&&(a=h.GA,a(g,b))}};_.Lg=function(a){return"string"===typeof a};
_.Pg=function(a){let b=a.length-1;const c=a[b],d=_.Og(c)?c:null;d||b++;return function(e){let f;e<=b&&(f=a[e-1]);null==f&&d&&(f=d[e]);return f}};_.Rg=function(a,b){Qg(a,b);return b};_.Og=function(a){return null!=a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object};
_.Tg=function(a,b,c,d){var e=a.length;let f=Math.max(b||500,e+1),g;e&&(b=a[e-1],_.Og(b)&&(g=b,f=e));500<f&&(f=500,a.forEach((h,l)=>{l+=1;l<f||null==h||h===g||(g?g[l]=h:g={[l]:h})}),a.length=f,g&&(a[f-1]=g));if(g)for(const h in g)e=Number(h),e<f&&(a[e-1]=g[h],delete g[e]);_.Sg(a,f,d,c);return a};_.Vg=function(a){const b=_.Ug(a);return b>a.length?null:a[b-1]};_.H=function(a,b,c,d){d&&(d=d(a))&&d!==b&&_.Wg(a,d);d=_.Ug(a);if(b<d)a[b-1]=c;else{const e=_.Vg(a);e?e[b]=c:a[d-1]={[b]:c}}};
_.Xg=function(a,b,c){if(!c||c(a)===b)return c=_.Ug(a),b<c?a[b-1]:_.Vg(a)?.[b]};_.Yg=function(a,b,c,d){a=_.Xg(a,b,d);return null==a?c:a};_.Wg=function(a,b){_.Zg(a)?.Ng(a,b);const c=_.Vg(a);c&&delete c[b];b<Math.min(_.Ug(a),a.length+1)&&delete a[b-1]};
_.fh=function(a,b,c,d){let e=a;if(Array.isArray(a))c=Array(a.length),_.$g(a)?_.ah(_.Tg(c,_.Ug(a),_.bh(a)),a):ch(c,a,b),e=c;else if(null!==a&&"object"===typeof a){if(a instanceof Uint8Array||a instanceof _.uc)return a;if(a instanceof _.dh)return a.Kg(c,d);d={};_.eh(d,a,b,c);e=d}return e};ch=function(a,b,c,d){_.gh(b)&1&&_.hh(a);let e=0;for(let f=0;f<b.length;++f)if(b.hasOwnProperty(f)){const g=b[f];null!=g&&(e=f+1);a[f]=_.fh(g,c,d,f+1)}c&&(a.length=e)};
_.eh=function(a,b,c,d){for(const e in b)if(b.hasOwnProperty(e)){let f;d&&(f=+e);a[e]=_.fh(b[e],c,d,f)}};_.ah=function(a,b){if(a!==b){_.$g(b);_.$g(a);a.length=0;var c=_.bh(b);null!=c&&_.ih(a,c);c=_.Ug(b);var d=_.Ug(a);(b.length>=c||b.length>d)&&mh(a,c);(c=_.Zg(b))&&_.Rg(a,c.Og());a.length=b.length;ch(a,b,!0,b)}};_.nh=function(a,b){let c=a.length-1;if(!(0>c)){var d=a[c];if(_.Og(d)){c--;for(const e in d){const f=d[e];if(null!=f&&b(f,+e))return}}for(;0<=c&&(d=a[c],null==d||!b(d,c+1));c--);}};
_.qh=function(){oh||(oh=new _.ph(0,0));return oh};_.rh=function(a,b){return new _.ph(a,b)};_.th=function(a){if(16>a.length)return _.sh(Number(a));a=BigInt(a);return new _.ph(Number(a&BigInt(4294967295)),Number(a>>BigInt(32)))};_.sh=function(a){return 0<a?new _.ph(a,a/4294967296):0>a?_.uh(-a,-a/4294967296):_.qh()};_.vh=function(a){return BigInt(a.Wn>>>0)<<BigInt(32)|BigInt(a.Ho>>>0)};_.wh=function(a){const b=a.Ho>>>0,c=a.Wn>>>0;return 2097151>=c?String(4294967296*c+b):String(_.vh(a))};
_.uh=function(a,b){a|=0;b=~b;a?a=~a+1:b+=1;return _.rh(a,b)};
_.qi=function(a,b){const c={pp:15,Kk:0,Xy:void 0,zv:!1,jB:!1,XG:void 0};_.Ng(a,(d,e=_.xh,f,g)=>{c.Kk=d;c.Xy=f;c.XG=g;d=e.cE;null!=d?e=d:(e instanceof _.yh?d=17:e instanceof _.zh?d=49:e instanceof _.Ah||e instanceof _.Bh?d=14:e instanceof _.Ch?d=46:e instanceof _.Dh||e instanceof _.Eh?d=15:e instanceof _.Fh?d=47:e instanceof _.Gh?d=0:e instanceof _.Hh?d=32:e instanceof _.Ih||e instanceof _.Jh?d=1:e instanceof _.Kh?d=33:e instanceof _.Lh?d=2:e instanceof _.Mh||e instanceof _.Nh?d=34:e instanceof _.Oh||
e instanceof _.Ph?d=6:e instanceof _.Sh||e instanceof _.Th?d=38:e instanceof _.Uh?d=7:e instanceof _.Vh||e instanceof _.Wh?d=39:e instanceof _.Xh?d=8:e instanceof _.Yh?d=40:e instanceof _.Zh?d=9:e instanceof _.$h?d=10:e instanceof _.ai?d=12:e instanceof _.bi||e instanceof _.ci?d=44:e instanceof _.di?d=13:e instanceof _.ei?d=67:e instanceof _.fi||e instanceof _.gi?d=99:e instanceof _.hi||e instanceof _.ii?d=73:e instanceof _.ji||e instanceof _.ki?d=105:e instanceof _.li?d=74:e instanceof _.mi?d=106:
e instanceof _.ni?d=75:e instanceof _.oi?d=17:e instanceof _.pi&&(d=49),e=e.cE=d);c.pp=e&31;c.zv=32===(e&32);c.jB=64===(e&64);b(c)},!0)};_.wi=function(a,b){const c=_.Xg(a,b);return Array.isArray(c)?c.length:c instanceof _.vi?c.getSize(a,b):0};_.yi=function(a,b,c){let d=_.Xg(a,b);d instanceof _.vi&&(d=_.xi(a,b));return d?.[c]};_.xi=function(a,b){var c=_.Xg(a,b);if(Array.isArray(c))return c;c instanceof _.vi?c=c.Ig(a,b):(c=[],_.H(a,b,c));return c};_.zi=function(a,b,c){_.xi(a,b).push(c)};
Jaa=function(a){return a.replace(/[+/]/g,b=>"+"===b?"-":"_").replace(/[.=]+$/,"")};Laa=function(a,b){switch(b){case 0:case 1:return a;case 13:return a?1:0;case 15:return String(a);case 14:return _.qa(a)?a=_.mc(a,4):(a instanceof _.uc&&(a=_.Ec(a)),a=Jaa(a)),a;case 12:case 6:case 9:case 7:case 10:case 8:case 11:case 2:case 4:case 3:case 5:return Kaa(a,b);default:_.Ig(b,void 0)}};
Kaa=function(a,b){switch(b){case 7:case 2:return Number(a)>>>0;case 10:case 3:if("string"===typeof a){if("-"===a[0])return _.wh(_.th(a))}else if(0>a)return _.wh(_.sh(a))}return"number"===typeof a?Math.floor(a):a};Bi=function(a,b,c,d,e,f){const g=_.Pg(a);c(b,h=>{const l=h.Kk,n=g(l);if(null!=n)if(h.zv)for(let q=0;q<n.length;++q)f=Ai(n[q],l,h,c,d,e,f);else f=Ai(n,l,h,c,d,e,f)});return f};
Ai=function(a,b,c,d,e,f,g){f[g++]=0===e?"!":"&";f[g++]=b;if(15<c.pp)f[g++]="m",f[g++]=0,b=g,g=Bi(a,c.Xy,d,e,f,g),f[b-1]=g-b>>2;else{d=c.pp;c=_.Ci[d];if(15===d)if(1===e)a=encodeURIComponent(String(a));else if(a="string"===typeof a?a:`${a}`,Maa.test(a)?e=!1:(e=encodeURIComponent(a).replace(/%20/g,"+"),d=e.match(/%[89AB]/gi),d=a.length+(d?d.length:0),e=4*Math.ceil(d/3)-(3-d%3)%3<e.length),e&&(c="z"),"z"===c){e=[];for(b=d=0;b<a.length;b++){var h=a.charCodeAt(b);128>h?e[d++]=h:(2048>h?e[d++]=h>>6|192:
(55296==(h&64512)&&b+1<a.length&&56320==(a.charCodeAt(b+1)&64512)?(h=65536+((h&1023)<<10)+(a.charCodeAt(++b)&1023),e[d++]=h>>18|240,e[d++]=h>>12&63|128):e[d++]=h>>12|224,e[d++]=h>>6&63|128),e[d++]=h&63|128)}a=_.mc(e,4)}else-1!==a.indexOf("*")&&(a=a.replace(Naa,"*2A")),-1!==a.indexOf("!")&&(a=a.replace(Oaa,"*21"));else a=Laa(a,d);f[g++]=c;f[g++]=a}return g};_.Di=function(a,b,c){{const d=Array(768);a=Bi(a,b,_.qi,c,d,0);0!==c&&a?(d.shift(),c=d.join("").replace(/'/g,"%27")):c=d.join("")}return c};
Fi=function(a){const b=[];let c=a.length;var d=a[c-1];let e;if(_.Og(d)){c--;e={};var f=0;for(const g in d)null!=d[g]&&(e[g]=Ei(d[g],a,g),f++);f||(e=void 0)}for(d=0;d<c;d++)f=a[d],null!=f&&(b[d]=Ei(f,a,d+1));e&&b.push(e);return b};Ei=function(a,b,c){a instanceof _.dh&&(a=a.Ig(b,+c));return Array.isArray(a)?Fi(a):"number"===typeof a?isNaN(a)||Infinity===a||-Infinity===a?String(a):a:a instanceof Uint8Array?_.oc(a):a instanceof _.uc?_.Ec(a):a};_.Gi=function(a,b,c){return!!_.Yg(a,b,c||!1)};
_.I=function(a,b,c,d){return _.Yg(a,b,c||0,d)};Paa=function(a,b,c,d){_.H(a,b,c,d)};Hi=function(a,b){if(a===b)return!0;const c=_.Pg(b);let d=!1;_.nh(a,(g,h)=>{h=c(h);return d=!(g===h||null==g&&null==h||!(!0!==g&&1!==g||!0!==h&&1!==h)||!(!1!==g&&0!==g||!1!==h&&0!==h)||Array.isArray(g)&&Array.isArray(h)&&Hi(g,h))});if(d)return!1;const e=_.Pg(a);let f=!1;_.nh(b,(g,h)=>f=null==e(h));return!f};_.J=function(a,b,c,d){return _.Ii(a,b,c,d)||new c};
_.Ji=function(a,b,c,d){d&&(d=d(a))&&d!==b&&_.Wg(a,d);d=_.Ii(a,b,c);if(!d){const e=[];d=new c(e);_.H(a,b,e)}return d};_.Li=function(a,b,c){c=new c;_.zi(a,b,_.Ki(c));return c};_.Ii=function(a,b,c,d){if(d=_.Xg(a,b,d))return d instanceof _.Mi&&(d=d.Ig(a,b)),_.Ni(d,c)};_.Ni=function(a,b){const c=_.Oi(a);return null==c?new b(a):c};_.Ki=function(a){_.Oi(a.Lg);return a.Lg};_.Pi=function(a,b,c,d){return _.Yg(a,b,c||"",d)};_.Qi=function(a){return _.Pi(a.Lg,2)};
_.Si=function(){var a=_.Ri.Ig();return _.Pi(a.Lg,7)};_.Ti=function(a,b,c){return+_.Yg(a,b,c??0)};_.Ui=function(a){return _.J(a.Lg,4,Qaa)};_.Vi=function(a,b){if(1===a.nodeType){const c=a.tagName;if("SCRIPT"===c||"STYLE"===c)throw Error("");}a.innerHTML=_.Ie(b)};_.Wi=function(a){var b;(b=(b=(a.ownerDocument&&a.ownerDocument.defaultView||window).document.querySelector?.("script[nonce]"))?b.nonce||b.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",b)};_.Xi=function(a){return a?a.length:0};
_.Zi=function(a,b){b&&_.Yi(b,c=>{a[c]=b[c]})};_.$i=function(a,b,c){null!=b&&(a=Math.max(a,b));null!=c&&(a=Math.min(a,c));return a};_.aj=function(a,b,c){a>=b&&a<c||(c-=b,a=((a-b)%c+c)%c+b);return a};_.bj=function(a,b,c){return Math.abs(a-b)<=(c||1E-9)};_.cj=function(a,b){const c=[];if(!a)return c;const d=_.Xi(a);for(let e=0;e<d;++e)c.push(b(a[e],e));return c};_.dj=function(a){return"number"===typeof a};_.ej=function(a){return"object"===typeof a};_.fj=function(a,b){return null==a?b:a};
_.gj=function(a){return"string"===typeof a};_.hj=function(a){return a===!!a};_.Yi=function(a,b){if(a)for(const c in a)a.hasOwnProperty(c)&&b(c,a[c])};ij=function(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]};_.jj=function(...a){_.na.console&&_.na.console.error&&_.na.console.error(...a)};_.kj=function(a){for(const [b,c]of Object.entries(a)){const d=b;void 0===c&&delete a[d]}};
_.pj=function(a,b){let c="";if(null!=b){if(!lj(b))return b instanceof Error?b:Error(String(b));c=": "+b.message}return mj?new nj(a+c):new oj(a+c)};_.qj=function(a){if(!lj(a))throw a;_.jj(a.name+": "+a.message)};lj=function(a){return a instanceof nj||a instanceof oj};
_.rj=function(a,b,c){c=c?c+": ":"";return d=>{if(!d||!_.ej(d))throw _.pj(c+"not an Object");const e={};for(const f in d)if(e[f]=d[f],!b&&!a[f])throw _.pj(c+"unknown property "+f);for(const f in a)try{const g=a[f](e[f]);if(void 0!==g||Object.prototype.hasOwnProperty.call(d,f))e[f]=g}catch(g){throw _.pj(c+"in property "+f,g);}return e}};_.sj=function(a){try{return"object"===typeof a&&null!=a&&!!("cloneNode"in a)}catch(b){return!1}};
_.tj=function(a,b,c){return c?d=>{if(d instanceof a)return d;try{return new a(d)}catch(e){throw _.pj("when calling new "+b,e);}}:d=>{if(d instanceof a)return d;throw _.pj("not an instance of "+b);}};_.uj=function(a){return b=>{for(const c in a)if(a[c]===b)return b;throw _.pj(`${b} is not an accepted value`);}};_.vj=function(a){return b=>{if(!Array.isArray(b))throw _.pj("not an Array");return _.cj(b,(c,d)=>{try{return a(c)}catch(e){throw _.pj("at index "+d,e);}})}};
_.wj=function(a,b){return c=>{if(a(c))return c;throw _.pj(b||""+c);}};_.xj=function(a){return b=>{const c=[];for(let d=0,e=a.length;d<e;++d){const f=a[d];try{mj=!1,(f.wz||f)(b)}catch(g){if(!lj(g))throw g;c.push(g.message);continue}finally{mj=!0}return(f.then||f)(b)}throw _.pj(c.join("; and "));}};_.yj=function(a,b){return c=>b(a(c))};_.zj=function(a){return b=>null==b?b:a(b)};_.Aj=function(a){return b=>{if(b&&null!=b[a])return b;throw _.pj("no "+a+" property");}};
_.Ij=function(a,b,c){try{return c()}catch(d){throw _.pj(`${a}: \`${b}\` invalid`,d);}};Jj=function(a,b,c){for(const d in a)if(!(d in b))throw _.pj(`Unknown property '${d}' of ${c}`);};Kj=function(){};
_.Lj=function(a,b,c=!1){let d;a instanceof _.Lj?d=a.toJSON():d=a;let e,f;if(!d||void 0===d.lat&&void 0===d.lng)e=d,f=b;else{2<arguments.length?console.warn("Expected 1 or 2 arguments in new LatLng() when the first argument is a LatLng instance or LatLngLiteral object, but got more than 2."):_.hj(arguments[1])||null==arguments[1]||console.warn("Expected the second argument in new LatLng() to be boolean, null, or undefined when the first argument is a LatLng instance or LatLngLiteral object.");try{Mj(d),
c=c||!!b,f=d.lng,e=d.lat}catch(g){_.qj(g)}}e-=0;f-=0;c||(e=_.$i(e,-90,90),180!=f&&(f=_.aj(f,-180,180)));this.lat=function(){return e};this.lng=function(){return f}};_.Nj=function(a){return _.Df(a.lat())};_.Oj=function(a){return _.Df(a.lng())};Pj=function(a,b){b=Math.pow(10,b);return Math.round(a*b)/b};_.Sj=function(a){let b=a;_.Qj(a)&&(b={lat:a.lat(),lng:a.lng()});try{const c=Raa(b);return _.Qj(a)?a:_.Rj(c)}catch(c){throw _.pj("not a LatLng or LatLngLiteral with finite coordinates",c);}};
_.Qj=function(a){return a instanceof _.Lj};_.Rj=function(a){try{if(_.Qj(a))return a;a=Mj(a);return new _.Lj(a.lat,a.lng)}catch(b){throw _.pj("not a LatLng or LatLngLiteral",b);}};_.Tj=function(a){this.Ig=_.Rj(a)};Uj=function(a){if(a instanceof Kj)return a;try{return new _.Tj(_.Rj(a))}catch(b){}throw _.pj("not a Geometry or LatLng or LatLngLiteral object");};_.Wj=function(a){a=_.Vj(a);return _.Ke(a)};_.Xj=function(a){a=_.Vj(a);return _.Ce(a)};
_.Vj=function(a){return null===a?"null":void 0===a?"undefined":a};Yj=function(a,b,c,d){const e=a.head;a=(new _.Mf(a)).createElement("SCRIPT");a.type="text/javascript";a.charset="UTF-8";a.async=!1;a.defer=!1;c&&(a.onerror=c);d&&(a.onload=d);a.src=_.Be(b);(void 0)?.vG||_.Wi(a);e.appendChild(a)};Zj=function(a,b){let c="";for(const d of a)d.length&&"/"===d[0]?c=d:(c&&"/"!==c[c.length-1]&&(c+="/"),c+=d);return c+"."+_.ze(b)};ak=function(a,b){a.Mg[b]=a.Mg[b]||{sE:!a.Qg};return a.Mg[b]};
Taa=function(a,b){const c=ak(a,b),d=c.kG;if(d&&c.sE&&(delete a.Mg[b],!a.Ig[b])){var e=a.Ng;bk(a.Kg,f=>{const g=f.Ig[b]||[],h=e[b]=Saa(g.length,()=>{delete e[b];d(f.Jg);a.Og.delete(b);ck(a,b)});for(const l of g)a.Ig[l]&&h()})}};ck=function(a,b){bk(a.Kg,c=>{c=c.Mg[b]||[];const d=a.Jg[b];delete a.Jg[b];const e=d?d.length:0;for(let f=0;f<e;++f)try{d[f].xi(a.Ig[b])}catch(g){setTimeout(()=>{throw g;})}for(const f of c)a.Ng[f]&&a.Ng[f]()})};
dk=function(a,b){a.requestedModules[b]||(a.requestedModules[b]=!0,bk(a.Kg,c=>{const d=c.Ig[b],e=d?d.length:0;for(let f=0;f<e;++f){const g=d[f];a.Ig[g]||dk(a,g)}c.Kg.av(b,f=>{var g=a.Jg[b]||[];for(const h of g)(g=h.Dm)&&g(f&&f.error||Error(`Could not load "${b}".`));delete a.Jg[b];a.Pg&&a.Pg(b,f)},()=>{a.Og.has(b)||ck(a,b)})}))};bk=function(a,b){a.config?b(a.config):a.Ig.push(b)};Saa=function(a,b){if(a)return()=>{--a||b()};b();return()=>{}};
_.fk=function(a){return new Promise((b,c)=>{var d=ek.getInstance(),e=""+a;d.Ig[e]?b(d.Ig[e]):((d.Jg[e]=d.Jg[e]||[]).push({xi:b,Dm:c}),dk(d,e))})};_.gk=function(a,b){var c=ek.getInstance();a=""+a;if(c.Ig[a])throw Error(`Module ${a} has been provided more than once.`);c.Ig[a]=b};_.ik=function(a){hk.has(a)||(console.warn(a),hk.add(a))};_.lk=function(a){a=a||window.event;_.jk(a);_.kk(a)};_.jk=function(a){a.stopPropagation()};_.kk=function(a){a.preventDefault()};_.mk=function(a){a.handled=!0};
_.ok=function(a,b,c){return new _.nk(a,b,c,0)};_.pk=function(a,b){if(!a)return!1;b=(a=a.__e3_)&&a[b];return!!b&&!_.le(b)};_.qk=function(a){a&&a.remove()};_.sk=function(a,b){_.Yi(rk(a,b),(c,d)=>{d&&d.remove()})};_.tk=function(a){_.Yi(rk(a),(b,c)=>{c&&c.remove()})};uk=function(a){if("__e3_"in a)throw Error("setUpNonEnumerableEventListening() was invoked after an event was registered.");Object.defineProperty(a,"__e3_",{value:{}})};
_.vk=function(a,b,c,d){const e=d?4:1;a.addEventListener&&a.addEventListener(b,c,d);return new _.nk(a,b,c,e)};_.wk=function(a,b,c,d){const e=_.vk(a,b,function(){e.remove();return c.apply(this,arguments)},d);return e};_.xk=function(a,b,c,d){return _.ok(a,b,(0,_.Ca)(d,c))};_.yk=function(a,b,c){const d=_.ok(a,b,function(){d.remove();return c.apply(this,arguments)});return d};_.Ak=function(a,b,c){return _.ok(a,b,_.zk(b,c))};
_.Bk=function(a,b,...c){if(_.pk(a,b)){a=rk(a,b);for(const d of Object.keys(a))(b=a[d])&&b.em.apply(b.instance,c)}};Ck=function(a,b){a.__e3_||(a.__e3_={});a=a.__e3_;a[b]||(a[b]={});return a[b]};rk=function(a,b){a=a.__e3_||{};if(b)b=a[b]||{};else{b={};for(const c of Object.values(a))_.Zi(b,c)}return b};_.zk=function(a,b,c){return function(d){const e=[b,a,...arguments];_.Bk.apply(this,e);c&&_.mk.apply(null,arguments)}};
_.Dk=function(a){a=a||{};this.Kg=a.id;this.Ig=null;try{this.Ig=a.geometry?Uj(a.geometry):null}catch(b){_.qj(b)}this.Jg=a.properties||{}};_.Ek=function(a){return""+(_.va(a)?_.Aa(a):a)};_.Fk=function(){};Hk=function(a,b){var c=b+"_changed";if(a[c])a[c]();else a.changed(b);c=Gk(a,b);for(let d in c){const e=c[d];Hk(e.Vr,e.pn)}_.Bk(a,b.toLowerCase()+"_changed")};_.Kk=function(a){return Ik[a]||(Ik[a]=a.substr(0,1).toUpperCase()+a.substr(1))};Lk=function(a){a.gm_accessors_||(a.gm_accessors_={});return a.gm_accessors_};
Gk=function(a,b){a.gm_bindings_||(a.gm_bindings_={});a.gm_bindings_.hasOwnProperty(b)||(a.gm_bindings_[b]={});return a.gm_bindings_[b]};_.Mk=function(a){this.Jg=this;this.__gm=a};Nk=function(){this.Ig={};this.Kg={};this.Jg={}};Ok=function(a){this.Ig=new Uaa;_.yk(a,"addfeature",()=>{_.fk("data").then(b=>{b.YD(this,a,this.Ig)})})};_.Pk=function(a){this.Ig=[];try{this.Ig=Vaa(a)}catch(b){_.qj(b)}};_.Rk=function(a){this.Ig=(0,_.Qk)(a)};_.Sk=function(a){this.Ig=(0,_.Qk)(a)};_.Tk=function(a){this.Ig=Waa(a)};
_.Uk=function(a){this.Ig=(0,_.Qk)(a)};_.Vk=function(a){this.Ig=Xaa(a)};_.Wk=function(a){this.Ig=Yaa(a)};
_.Yk=function(a,b,c){function d(y){if(!y)throw _.pj("not a Feature");if("Feature"!=y.type)throw _.pj('type != "Feature"');var B=y.geometry;try{B=null==B?null:e(B)}catch(M){throw _.pj('in property "geometry"',M);}var C=y.properties||{};if(!_.ej(C))throw _.pj("properties is not an Object");var F=c.idPropertyName;y=F?C[F]:y.id;if(null!=y&&!_.dj(y)&&!_.gj(y))throw _.pj((F||"id")+" is not a string or number");return{id:y,geometry:B,properties:C}}function e(y){if(null==y)throw _.pj("is null");var B=(y.type+
"").toLowerCase(),C=y.coordinates;try{switch(B){case "point":return new _.Tj(h(C));case "multipoint":return new _.Uk(n(C));case "linestring":return g(C);case "multilinestring":return new _.Tk(q(C));case "polygon":return f(C);case "multipolygon":return new _.Wk(u(C))}}catch(F){throw _.pj('in property "coordinates"',F);}if("geometrycollection"==B)try{return new _.Pk(w(y.geometries))}catch(F){throw _.pj('in property "geometries"',F);}throw _.pj("invalid type");}function f(y){return new _.Vk(t(y))}function g(y){return new _.Rk(n(y))}
function h(y){y=l(y);return _.Rj({lat:y[1],lng:y[0]})}if(!b)return[];c=c||{};var l=_.vj(_.Xk),n=_.vj(h),q=_.vj(g),t=_.vj(function(y){y=n(y);if(!y.length)throw _.pj("contains no elements");if(!y[0].equals(y[y.length-1]))throw _.pj("first and last positions are not equal");return new _.Sk(y.slice(0,-1))}),u=_.vj(f),w=_.vj(e),x=_.vj(d);if("FeatureCollection"==b.type){b=b.features;try{return _.cj(x(b),function(y){return a.add(y)})}catch(y){throw _.pj('in property "features"',y);}}if("Feature"==b.type)return[a.add(d(b))];
throw _.pj("not a Feature or FeatureCollection");};Zk=function(a,b){-180==a&&180!=b&&(a=180);-180==b&&180!=a&&(b=180);this.lo=a;this.hi=b};_.$k=function(a){return a.lo>a.hi};_.al=function(a){return 360==a.hi-a.lo};_.bl=function(a,b){const c=a.lo,d=a.hi;return _.$k(a)?_.$k(b)?b.lo>=c&&b.hi<=d:(b.lo>=c||b.hi<=d)&&!a.isEmpty():_.$k(b)?_.al(a)||b.isEmpty():b.lo>=c&&b.hi<=d};_.cl=function(a,b){const c=b-a;return 0<=c?c:b+180-(a-180)};dl=function(a,b){this.lo=a;this.hi=b};
_.fl=function(a,b){var c;if((c=a)&&"south"in c&&"west"in c&&"north"in c&&"east"in c)try{a=_.el(a)}catch(d){}a instanceof _.fl?(c=a.getSouthWest(),b=a.getNorthEast()):(c=a&&_.Rj(a),b=b&&_.Rj(b));if(c){b=b||c;a=_.$i(c.lat(),-90,90);const d=_.$i(b.lat(),-90,90);this.ci=new dl(a,d);c=c.lng();b=b.lng();360<=b-c?this.Nh=new Zk(-180,180):(c=_.aj(c,-180,180),b=_.aj(b,-180,180),this.Nh=new Zk(c,b))}else this.ci=new dl(1,-1),this.Nh=new Zk(180,-180)};
_.gl=function(a,b,c,d){return new _.fl(new _.Lj(a,b,!0),new _.Lj(c,d,!0))};_.el=function(a){if(a instanceof _.fl)return a;try{return a=Zaa(a),_.gl(a.south,a.west,a.north,a.east)}catch(b){throw _.pj("not a LatLngBounds or LatLngBoundsLiteral",b);}};_.hl=function(a){return function(){return this.get(a)}};_.il=function(a,b){return b?function(c){try{this.set(a,b(c))}catch(d){_.qj(_.pj("set"+_.Kk(a),d))}}:function(c){this.set(a,c)}};
_.jl=function(a,b){_.Yi(b,function(c,d){var e=_.hl(c);a["get"+_.Kk(c)]=e;d&&(d=_.il(c,d),a["set"+_.Kk(c)]=d)})};ll=function(a){var b=this;a=a||{};this.setValues(a);this.Ig=new Nk;_.Ak(this.Ig,"addfeature",this);_.Ak(this.Ig,"removefeature",this);_.Ak(this.Ig,"setgeometry",this);_.Ak(this.Ig,"setproperty",this);_.Ak(this.Ig,"removeproperty",this);this.Jg=new Ok(this.Ig);this.Jg.bindTo("map",this);this.Jg.bindTo("style",this);_.Tb(_.kl,function(c){_.Ak(b.Jg,c,b)});this.Kg=!1};
ml=function(a){a.Kg||(a.Kg=!0,_.fk("drawing_impl").then(b=>{b.JF(a)}))};_.ol=function(){var a=_.Ri;if(!(a&&_.Gi(a.Ig().Lg,18)&&_.Pi(a.Ig().Lg,19)&&_.Pi(a.Ig().Lg,19).star