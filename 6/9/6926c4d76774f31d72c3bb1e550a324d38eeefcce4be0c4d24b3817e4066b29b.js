/*
Theme Name: Appland
Theme URI: http://codepixar.com
Author: CodePixar
Author URI: https://themeforest.net/user/codepixar
Description: Appland is a powerful Responsive App Landing WordPress theme. It is 100% responsive and looks stunning on all types of screens and devices.
Version: 1.5.1
License: GNU General Public License v2 or later
License URI: LICENSE
Text Domain: appland


/*========== Table of Contents ===========*/
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

.admin-bar nav.navbar.navbar-fixed-top.affix-top {
    margin-top: 32px
}

.navbar-brand h3 {
    color: #fff;
    padding-top: 0;
    margin: 0
}

.admin-bar nav.navbar.navbar-fixed-top.affix {
    margin-top: 32px
}

.media-left img.media-object {
    max-width: none
}

p.mchimp-errmessage {
    top: 65px
}

.call-action3 .call-text .active img {
    display: none
}

.call-action3 .call-text .active img+img {
    display: inline-block
}

.call-action3 .call-text .active {
    background: transparent
}

nav.navbar.navbar-fixed-top.affix .navbar-brand h3 {
    color: #404040
}

.widget ul li a:hover {
    color: #4776e6
}

.affix .btn-getnow:hover {
    color: #ffffff!important
}

section.comment_area.no_comments {
    padding-top: 0
}

.search header.page-header {
    margin-top: 0
}

.search .appland-search {
    float: left
}

.blog-section .blog-items {
    word-wrap: break-word
}

.about_us_widget ul li a:hover {
    background-color: transparent!important
}

article.sticky {
    background-color: #f8f8f8!important
}

.blog-content blockquote:after {
    content: "\f10d";
    width: 40px;
    height: 100%;
    position: absolute;
    left: 16px;
    color: #eae9e9;
    font: normal normal normal 60px/1 FontAwesome;
    top: 6px;
    z-index: 0
}

.blog-content blockquote:before {
    z-index: 1
}

.widget ul li ul.children li a {
    margin-top: 0;
    padding-top: 0;
    line-height: 0;
    padding-bottom: 15px
}

ul.post-info {
    padding: 0;
    margin: 0;
    list-style: none
}

.blog-sidebar .widget.widget_calendar .widget_title,
.blog-sidebar .widget.widget_text .widget_title,
.blog-sidebar .widget.widget_search .widget_title,
.blog-sidebar .post-widget h2.widget_title {
    margin-bottom: 45px
}

.widget:first-child .widget_title {
    margin-top: 0!important
}

.blog_single.has-post-thumbnail .blog-items .blog-content {
    padding-top: 25px;
    padding-right: 20px;
}

.no-post-thumbnail h2 {
    margin-top: 0
}

.comment_time {
    display: inline-block;
    font: 300 14px/26px "Quicksand", sans-serif;
    color: #a1a1a1;
}

a.comment-reply-link:hover {
    border-color: #4a80f9;
    color: #4a80f9
}

a.comment-reply-link {
    font: 700 13px/32px "Montserrat", sans-serif;
    color: #333;
    text-transform: uppercase;
    border-bottom: 1px solid transparent;
    margin-top: -10px;
    display: inline-block
}

a.comment-reply-link i {
    padding-right: 6px
}

h5.commenter-name,
h6.comment_time {
    margin-bottom: 0!important
}

.comments ul.children {
    margin-top: 45px;
    margin-left: 60px
}

.footer-widget a {
    color: #ddd
}

.blog_area_two p,
.sec_features_item p,
.team_member p,
.price .pricing-box .pricing-header h2,
.price .pricing-box .pricing-header .packeg_typ,
.section_title p,
.video-area_two .wrapper-video h3,
.wrapper-video p,
.hero-contents h4,
.hero-contents h2,
.fact_item p,
.footer_sidebar p,
.hero-contents .media .media-body h3,
.hero-contents .media .media-body p,
.call-action3 .call-text p,
.testimonial_item .media .media-body h6,
.power_features_item p,
.testimonial_item .media .media-body h2,
.team_member .content h2,
.team_member .content h6,
.fact_item h2,
.section_title h2,
.ex_features_one_area .features_content h2,
.col-header-text h1,
.footer_bottom .footer-menu,
.post_box .blog-text .title,
.sec_title_five h2,
.power_features_item .title,
.title,
.app-features-item .content h3,
.footer-top .footer_sidebar .widget .widget_title,
.call-action3 .call-text h2,
.more_features_four .exclusive_features-two .media .media-body h2 {
    margin: 0
}

ul.date {
    padding: 0
}

.app-features-item .content i {
    font-size: 40px
}

.features_content_three {
    padding-top: 0
}

.sec_content {
    font-size: 18px
}

.section_title .br {
    width: 103px;
    height: 2px;
    position: relative;
    margin: 0
}

.section_title .subtitle {
    margin: 30px 0 45px
}

.section_title.text-center .br {
    margin: 0 auto;
    margin-bottom: 40px
}

.price .pricing-box:hover .purchase-btn {
    color: #ffffff!important
}

.call-text.sec_title_five.sec_five .br:before,
.call-text.sec_title_five.sec_five .br:after {
    background: #ffffff!important
}

.analysis_area .apps_button {
    margin-top: 40px
}

.menu li.current_page_item a {
    background: transparent;
    border-color: #fff
}
/*custom CSS*/
.blog_single .blog-items .blog-content .post_meta span a:hover{
    color:#4776e6;
}

#bs-example-navbar-collapse-1 .menu li:hover .sub-menu {
    z-index:1;
    opacity:1;
    visibility: visible;
}
#bs-example-navbar-collapse-1 .sub-menu {
    min-width:180px;
    padding: 30px 0px 0;
    position:absolute;
    top:26px;
    left:0px;
    z-index:-1;
    opacity:0;
    transition:opacity linear 0.15s;
    -webkit-box-shadow: 0px 15px 27px 0px rgba(14, 0, 40, 0.05);
    box-shadow: 0px 15px 27px 0px rgba(14, 0, 40, 0.05);
    background: transparent;
    white-space: nowrap;
    visibility: hidden;
}
#bs-example-navbar-collapse-1 .sub-menu li {
    display:block;
    font-size:16px;
    padding: 5px 25px;
    background: #fff;
}
#bs-example-navbar-collapse-1 .sub-menu li:first-child {
    padding-top: 15px;
}
#bs-example-navbar-collapse-1 .sub-menu li:last-child {
    padding-bottom: 15px;
}
#bs-example-navbar-collapse-1 .sub-menu li a {
    padding:0px 0px;
    display:block;
    color: #000 !important;
}
#bs-example-navbar-collapse-1 .sub-menu li a:hover{
    color: #5d58f7 !important;
    transition:opacity linear 0.15s;
}
#bs-example-navbar-collapse-1 .sub-menu li a:hover,
#bs-example-navbar-collapse-1 .sub-menu .current-item a {
    border: 0px !important;
}

#bs-example-navbar-collapse-1 .menu li .sub-menu li a{
    border: 0px;
}

#bs-example-navbar-collapse-1 .sub-menu li {
    margin-right: 0;
}
#HeroImg.call-action1{
	background-image:url("Group-homepage-S.jpg");
}


/* End Of Dropdown Menu */
.media p {
    margin: 0
}

.sec_features_item .icon {
    margin-left: 0
}

.features_content a.btn:hover {
    color: #fff!important
}

.call-action3 .call-text p {
    padding-top: 0
}

.call-action3 .call-text.sec_title_five.sec_five {
    margin-bottom: 0
}

.price_table .price_box a.learn_btn:hover {
    color: #ffffff!important
}

.call-text.sec_five.has_br p {
    padding-top: 40px
}

.call-text.sec_five.has_br h2 {
    padding-bottom: 3px
}

#preloader {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    z-index: 9999
}

#status {
    width: 200px;
    height: 200px;
    position: absolute;
    left: 50%;
    top: 50%;
    background-image: url(assets/image/status.gif);
    background-repeat: no-repeat;
    background-position: center;
    margin: -100px 0 0 -100px
}

.analysis_area img {
    display: block;
    margin: auto
}

.f_images_area .col-sm-4:first-child .sec_features_item {
    text-align: right
}

.f_images_area .col-sm-4:last-child .sec_features_item {
    text-align: left
}

.f_images_area .col-sm-4:last-child {
    padding-left: 60px
}

.f_images_area .col-sm-4:first-child {
    padding-right: 60px
}

.testimonial_area_four .quote_author {
    font-size: 18px;
    color: #222222!important;
    font-weight: 500
}

.testimonial_area_four .test-carousel-three .author_designation {
    font-size: 14px;
    color: #404040!important;
    line-height: 22px;
    margin: 0;
    padding: 0;
    font-weight: 400!important
}

.test-carousel-three .quote_author {
    color: rgba(255, 254, 254, .8);
    font-size: 18px;
    font-weight: 500
}

.test-carousel-three .author_designation {
    color: rgba(255, 255, 255, .8);
    font-size: 14px;
    font-weight: 400;
    margin-top: 5px;
    margin-bottom: 0
}

.testimonial_area_three .test-carousel-three .owl-dots .owl-dot {
    border-color: #fff!important
}

.sec_features_item img {
    max-height: 49px
}

.sec-pricing .price_table .price_box h2 span:first-child {
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent
}

.sec-pricing .price_table .price_box h2 span:last-child {
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent
}

.pricing_area_three .price_table .price_box h2 span:first-child {
    vertical-align: super;
    font-size: 25px;
    color: #4f4e50;
    padding-right: 7px
}

.pricing_area_three .price_table .price_box h2 span:last-child {
    font-size: 20px;
    color: #4f4e50;
    margin-top: 22px;
    padding-top: 2px;
    display: inline-block;
    padding-left: 4px
}

.price .pricing-box:hover .packeg_typ {
    background: #b166ff;
    color: #fff!important
}

.price .pricing-box:hover ul li {
    color: #585e68
}

.price .pricing-box:hover .packeg_typ span,
.price .pricing-box:hover .packeg_typ small {
    color: #fff!important
}

.price .pricing-box {
    border-radius: 5px;
    border: 1px solid transparent
}

.price .pricing-box:hover {
    border: 1px solid #b166ff
}

.tab-content.priceing-tab ul li {
    color: #999
}

.tab-content.priceing-tab ul li:before {
    content: "\f00c";
    font-size: 18px;
    color: #999;
    padding-right: 5px;
    font-family: fontawesome
}

.pricing_area_two a.purchase-btn {
    font-family: 'Quicksand', sans-serif;
    font-size: 14px;
    color: #1a264a!important
}

.swiper-pagination-bullet {
    opacity: 1!important
}

.screenshot_area_two .section_title.sec_title_two p {
    margin-bottom: 35px
}

.overview_area .overview_item img {
    margin-bottom: 30px
}

.iphonex_mockup div#screen-shot {
    padding-top: 0
}

.testimonial_item .author h2 {
    margin-bottom: 0
}

.price_table .price_box .price_head {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px
}

.price_table .price_box {
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px
}

.pricing_area_three .price_table .price_box h2 span:first-child,
.pricing_area_three .price_table .price_box h2 span:last-child {
    color: #4f4e50
}

.post-widget .media-left img.media-object {
    width: 110px;
    height: auto
}

ul.recent_post_meta li a {
    font-weight: 400 !IMPORTANT
}

.mojar_function_content i {
    font-size: 60px
}

.clients-logo-one .owl-dots .owl-dot.active,
.clients-logo-one .owl-dots .owl-dot:hover {
    background: #8766e5;
}

.n_features_item .f_icon i {
    line-height: 64px
}

.navbar .container-fluid {
    padding-left: 80px;
    padding-right: 80px
}

.contact-form .form-control {
    border: 1px solid #eaeaea;
}
.footer_sidebar .widget select {
    margin-top: 0;
}
.appland-page p {
    margin-bottom: 20px;
}
.post .featured_post {
    float: right;
}
.pagination span.page-numbers.current {
    background: #4a80f9;
    border-color: #4a80f9;
}
.front-page p {
    margin-bottom: 10px;
}
.widget_rss span.rss-date {
    font-size: 14px;
}

.clients-logo-one .section_title.text-center {
    margin-bottom: 100px;
}

.contact-form textarea.form-control {
    font-size: 14px;
    color: #666;
    padding-left: 20px;
}

.comment_item_text {
    margin-top: 10px;
}