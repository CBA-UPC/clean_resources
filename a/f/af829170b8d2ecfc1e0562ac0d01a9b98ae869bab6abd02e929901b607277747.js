/*
Theme Name: Madara

Adding support for language written in a Right To Left (RTL) direction is easy -
it's just a matter of overwriting all the horizontal positioning attributes
of your CSS stylesheet in a separate stylesheet file named rtl.css.

http://codex.wordpress.org/Right_to_Left_Language_Support

*/
.vertical-align {
  position: relative;
  -webkit-transform: translateY(50%);
  -ms-transform: translateY(50%);
  transform: translateY(50%);
}
body {
  direction: rtl;
  unicode-bidi: embed;
}
table tr th {
  text-align: right;
}
.blockquote {
  border-right: 5px solid #eee;
  border-left: none;
}
.main-navigation .main-menu ul li {
  float: right;
}
.main-navigation .main-menu ul li.menu-item-has-children > a:after {
  margin-left: 0;
  margin-right: 10px;
}
.main-navigation .main-menu ul ul.children ul,
.main-navigation .main-menu ul ul.sub-menu ul {
  left: auto;
  right: 100%;
}
.site-header .main-navigation.style-1 .search-navigation .search-navigation__wrap .link-adv-search {
      padding-left: 0px;
    padding-right: 15px;
    padding-top: 7px;
}
.site-header .search-main-menu form input[type="text"] {
  padding: 13px 15px 13px 115px;
}
.site-header .search-main-menu form input[type=submit] {
  left: 15px;
  right: auto;
}
.site-header .c-sub-header-nav .c-sub-nav_wrap .c-modal_item {
  text-align: left;
}
.site-header .c-sub-header-nav .c-sub-nav_wrap .c-modal_item .c-user_item span {
  margin-right: 0;
  margin-left: 10px;
}
.site-header .c-sub-header-nav .c-sub-nav_wrap .c-modal_item .c-user_item .c-user_menu {
  right: auto;
  left: 0;
  text-align: right;
}
.site-header .c-sub-header-nav .c-sub-nav_wrap .sub-nav_content .sub-nav_list li.menu-item-has-children > a:after {
  margin-left: 0;
  margin-right: 10px;
  content: '\f282';
}
.site-header .c-sub-header-nav .c-sub-nav_wrap .sub-nav_content .sub-nav_list li .sub-menu {
  left: auto;
  right: 0;
}
.site-header .c-sub-header-nav .c-sub-nav_wrap .sub-nav_content .sub-nav_list li .sub-menu .sub-menu .sub-menu {
  left: auto;
  right: 100%;
}
.site-header .main-navigation.style-1 .c-togle__menu .widget.widget_tag_cloud .tag-cloud-link {
  float: right;
}
.widget.widget_search input[type="search"],
#main-sidebar .search-navigation__wrap ul.main-menu-search.nav-menu li.menu-search .search-main-menu form input[type="text"] {
  padding: 0 15px 0 45px;
}
.widget.widget_search input[type=submit],
#main-sidebar .search-navigation__wrap ul.main-menu-search.nav-menu li.menu-search .search-main-menu form input[type=submit] {
  right: auto;
  left: 0;
  border-left: none;
  border-right: 1px solid rgba(45, 45, 45, 0.3);
}
.widget.widget_search label:after,
#main-sidebar .search-navigation__wrap ul.main-menu-search.nav-menu li.menu-search .search-main-menu form i {
  right: auto;
  left: 10px;
}
.widget.c-released .released-item-wrap ul.list-released li a {
  float: right;
}
.widget.c-popular .style-1 .popular-item-wrap .popular-img {
  float: right;
  margin-right: 0;
  margin-left: 20px;
}
.widget.c-popular .popular-item-wrap .popular-content .chapter-item .chapter {
  margin-right: 0;
  margin-left: 15px;
}
.genres_wrap .genres__collapse .genres ul li {
  float: right;
}
/* single post */
.c-blog-post .entry-header .entry-meta .post-on {
  padding-right: 38px;
  padding-left: 0;
  text-align: right
}
.c-blog-post .entry-header .entry-meta .post-on:before {
  right: 0;
  left: auto;
}
.c-blog-post .entry-header .entry-meta .total-count {
  left: 0;
  right: auto;
}
.c-blog-post .entry-header .entry-meta .total-count span {
  float: right;
}
.c-blog-post .entry-header .entry-meta .total-count span + span {
  margin-left: 0;
  margin-right: 22px;
}
.c-blog-post .entry-content .apss-social-share .apss-single-icon {
  float: right;
}
.apss-social-share .apss-single-icon:first-of-type > a {
  margin-left: 10px;
  margin-right: 0;
}
.site-content .main-col .item-tags ul {
  padding: 0;
}
.site-content .main-col .item-tags ul li a {
  margin: 5px 0px 0 5px;
}
#comments.comments-area ol.comment-list li.comment article.comment-body .block-left,
#comments.comments-area ol.comment-list li.pingback article.comment-body .block-left {
  float: right;
  margin-right: 0;
  margin-left: 30px;
}
#comments.comments-area ol.comment-list li.comment article.comment-body div.reply,
#comments.comments-area ol.comment-list li.pingback article.comment-body div.reply {
  left: 0;
  right: auto;
}
@media (max-width: 767px) {
  #comments.comments-area ol.comment-list li.comment ol.children,
  #comments.comments-area ol.comment-list li.pingback ol.children {
    padding-right: 0;
    margin-right: 0;
  }
}
.c-blog-listing .c-blog__inner .c-blog__content .c-blog_item .c-blog__summary .total-count:after {
  content: "";
  display: table;
  clear: both;
}
.c-blog-listing .c-blog__inner .c-blog__content .c-blog_item .c-blog__summary .total-count span {
  float: right;
}
.c-blog-listing .c-blog__inner .c-blog__content .c-blog_item .c-blog__summary .total-count span + span {
  margin-left: 0;
  margin-right: 27px;
}
.c-blog__heading.style-2 i {
  margin-right: 0;
  margin-left: 16px;
}
.c-blog__heading.style-2 i:after {
  left: auto;
  right: 100%;
  border-right: 5px solid #ef4447;
  border-left: none;
}
body.search .c-search-header__wrapper .search-content .search-form label .search-field {
  padding: 17px 30px 16px 100px;
}
@media (max-width: 480px) {
  body.search .c-search-header__wrapper .search-content .search-form label .search-field {
    padding: 10px 10px 10px 60px;
  }
}
body.search .c-search-header__wrapper .search-content .search-form .search-submit {
  left: 0;
  right: auto;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
body.search .c-search-header__wrapper .search-content .search-form label:after {
  right: auto;
  left: 30px;
}
@media (max-width: 480px) {
  body.search .c-search-header__wrapper .search-content .search-form label:after {
    font-size: 20px;
    left: 20px;
    right: auto;
  }
}
/* manga */
.tab-wrap .c-nav-tabs {
  float: left;
}
.tab-wrap .c-nav-tabs ul.c-tabs-content {
  padding-right: 0;
}
.tab-wrap .c-nav-tabs ul.c-tabs-content li {
  float: right;
}
body.page .c-page-content .c-page .c-page__content .page-content-listing .page-listing-item .page-item-detail .item-thumb {
  float: right;
  margin-right: 0;
  margin-left: 20px;
}
body.page .c-page-content .c-page .c-page__content .page-content-listing .page-listing-item .page-item-detail .item-summary .rating .score {
  margin-right: 8px;
  margin-left: 0;
}
body.page .c-page-content .c-page .c-page__content .page-content-listing .page-listing-item .page-item-detail .item-summary .list-chapter .chapter-item span {
  margin-right: 0;
  margin-left: 26px;
}
@media (max-width: 600px) {
  body.page .c-page-content .c-page .c-page__content .page-content-listing .page-listing-item .page-item-detail .item-summary .list-chapter .chapter-item span {
    margin-left: 15px;
  }
}
body.manga-page .page-content-listing.single-page .listing-chapters_wrap > ul {
  padding: 0;
}
body.manga-page .page-content-listing.single-page .listing-chapters_wrap > ul li ul {
  padding-left: 0;
  padding-right: 30px;
}
body.manga-page .page-content-listing.single-page .listing-chapters_wrap > ul.main.version-chap li .wp-manga-chapter:before {
  left: auto;
  right: -30px;
}
body.manga-page .page-content-listing.single-page .listing-chapters_wrap > ul > li.has-child > i.icon {
  right: auto;
  left: 15px;
}
body.manga-page .page-content-listing.single-page .listing-chapters_wrap > ul.main.version-chap li .chapter-release-date {
  left: 0;
  right: auto !important;
  text-align: left;
  width: 50%;
}
body.manga-page .page-content-listing.single-page .listing-chapters_wrap > ul.version-chap > li > a, body.manga-page .page-content-listing.single-page .listing-chapters_wrap > ul.vol-chap > li > a, body.manga-page .page-content-listing.single-page .listing-chapters_wrap li.wp-manga-chapter > a{padding-right:0 !important}

body.reading-manga .entry-header .entry-header_wrap .action-icon,
body.reading-manga .c-select-bottom .entry-header_wrap .action-icon {
  float: left;
}
body.reading-manga .entry-header .entry-header_wrap .action-icon ul,
body.reading-manga .c-select-bottom .entry-header_wrap .action-icon ul {
  padding: 0;
}
body.reading-manga .entry-header .c-selectpicker select.selectpicker,
body.reading-manga .c-select-bottom .c-selectpicker select.selectpicker {
  padding: 8px 16px 8px 30px;
}
body.reading-manga .entry-header .c-selectpicker label:after,
body.reading-manga .c-select-bottom .c-selectpicker label:after {
  right: auto;
  left: 0;
  margin-left: 5px
}
.site-header .main-navigation.style-1 .c-togle__menu {
  text-align: left;
}
@media (max-width: 1200px) {
  .site-header .main-navigation.style-1 .search-navigation .search-navigation__wrap {
    text-align: left;
  }
}
@media (max-width: 600px) {
  .site-header .main-navigation.style-1 .search-navigation .search-navigation__wrap {
    text-align: right;
  }
}
.c-blog-listing .c-blog__inner .c-blog__content [class*=' col-'] {
  float: right !important;
}
/* search advance */
body.search .c-search-header__wrapper .search-content .btn-search-adv {
  float: left;
}
body.search .c-search-header__wrapper #search-advanced .search-advanced-form .form-group.checkbox-group .checkbox {
  float: right;
  text-align: right
}
input[type=checkbox] + label:before,
input[type=radio] + label:before {
  padding-right: 0;
  padding-left: 12px;
}
body.search.search-results .search-wrap .tab-content-wrap .c-tabs-item .c-tabs-item__content [class*=' col-'] {
  float: right;
}
body.search.search-results .search-wrap .tab-content-wrap .c-tabs-item .c-tabs-item__content .tab-summary .post-content .post-content_item:nth-last-of-type(-n+2) {
  float: right;
}
body.search.search-results .search-wrap .tab-content-wrap .c-tabs-item .c-tabs-item__content .tab-summary .post-content .post-content_item:last-child {
  margin-left: 0;
  margin-right: 95px;
}
body.search.search-results .search-wrap .tab-content-wrap .c-tabs-item .c-tabs-item__content .tab-meta .latest-chap .chapter {
  margin-left: 0;
  margin-right: 20px;
}
body.search.search-results .search-wrap .tab-content-wrap .c-tabs-item .c-tabs-item__content .tab-meta .meta-item + .meta-item {
  margin-left: 0;
  margin-right: 16px;
}
body.search.search-results .search-wrap .tab-content-wrap .c-tabs-item .c-tabs-item__content .tab-meta .meta-item:last-child {
  margin-left: 0;
  margin-right: 110px;
}
body.search.search-results .search-wrap .tab-content-wrap .c-tabs-item .c-tabs-item__content .tab-meta .rating .score {
  margin-left: 0;
  margin-right: 8px;
}
.genres_wrap .genres__collapse .genres ul {
  padding-right: 0;
}
.genres_wrap .genres__collapse .genres ul li a:before {
  margin-right: 0;
  margin-left: 10px;
  content: "\f282";
}
/* custom widget */
.popular-slider.style-1 .slider__container .slick-prev {
  right: auto;
  left: 0;
}
.popular-slider.style-1 .slider__container .slick-next {
  right: auto;
  left: 40px;
}
/* setting */
.settings-page [class*=' col-'] {
  float: right;
}
.settings-page .nav-tabs-wrap ul.nav-tabs {
  padding-right: 0;
}
.settings-page .nav-tabs-wrap ul.nav-tabs li a i {
  margin-right: 0;
  margin-left: 15px;
}
.settings-page .nav-tabs-wrap ul.nav-tabs li:after {
  right: 100%;
  left: auto;
  border-right-width: 8px;
  border-right-style: solid;
  border-left: none;
}
.settings-page .mange-name .item-thumb {
  float: right;
}
.settings-page .tabs-content-wrap .tab-group-item .tab-item .form-choose-avatar input[type=file] {
  margin-left: 0;
  margin-right: 5px;
}
.settings-page .tabs-content-wrap .tab-group-item .tab-item .form-choose-avatar .select-avata:after {
  left: auto;
  right: 0;
}
.genres_wrap a.btn-genres {
  float: left !important;
}
.off-canvas {
  left: auto;
  right: -300px;
  -webkit-transition: right 0.3s ease-in-out;
  -moz-transition: right 0.3s ease-in-out;
  -o-transition: right 0.3s ease-in-out;
  transition: right 0.3s ease-in-out;
}
@media (max-width: 600px) {
  .off-canvas {
    right: -260px;
  }
}
.off-canvas.active {
  right: 0;
  left: auto;
}
.off-canvas .close-nav > .menu_icon__close {
  direction: ltr;
}
.off-canvas ul.main-navbar li.menu-item-has-children > a {
  padding-left: 0;
  padding-right: 18px;
}
.off-canvas ul.main-navbar li.menu-item-has-children > i.fa {
  left: auto;
  right: -17px;
}
/* login */
body.modal-open .modal .modal-content .modal-body .login label {
  text-align: right;
}
body.modal-open .modal .modal-content .modal-body .login .submit {
  float: right;
}
body.modal-open .modal .modal-content .modal-body .login #loginform .forgetmenot {
  float: left;
}
body.modal-open .modal .modal-content .modal-body .login .submit {
  float: right;
}
body.modal-open .modal .modal-content .modal-body .login #loginform .forgetmenot #rememberme {
  margin-right: 0;
  margin-left: 10px;
}
/* slick nav */
.popular-slider.style-3 .slider__container .slick-prev {
  right: 0;
  left: auto;
}
.popular-slider.style-3 .slider__container .slick-prev:before {
  content: "\f363";
}
.popular-slider.style-3 .slider__container .slick-next {
  left: 0;
  right: auto;
}
.popular-slider.style-3 .slider__container .slick-next:before {
  content: "\f361";
}
/* footer */
.site-footer .top-footer .wrap_social_account ul.social_account__item li {
  margin-right: 0;
  margin-left: 10px;
}
.site-footer .top-footer .wrap_social_account ul.social_account__item li:last-child {
  margin-left: 0;
}
.main-navigation .main-menu ul {
  float: right;
}
.site-header .main-navigation.style-1 .search-navigation .search-navigation__wrap .link-adv-search {
  text-align: left;
}
.site-header .main-navigation .search-navigation.search-sidebar .widget {
  padding-left: 0;
}

.c-blog-listing .c-blog__inner .c-blog__content .sticky .c-blog_item .c-blog__summary .heading:before {
  margin-right: 0;
  margin-left: 7px;
}
.apss-social-share {
  margin: 30px 0px;
}
body.manga-page .wp-manga-tags-wrapper .wp-manga-tags a:not(:first-child) {
  margin-left: 0;
  margin-right: 5px;
}
.c-blog-post .item-tags .list-inline {
  padding-right: 0;
}
.c-blog-post .item-tags .list-inline li {
  padding-right: 5px;
  padding-left: 0px;
}
.c-blog-post .entry-header .entry-meta .post-on .c-blog__date {
  padding-right: 0;
  padding-left: 20%;
}
.popular-slider.style-1 .c-blog__heading.style-2, .post-total-rating, .list-chapter .chapter-item, .post-title, .widget, .wrap_branding{text-align:right}
.manga-title-badges{float:right; margin-left: 7px; margin-right: 0}
.widget .my-history .my-history-item-wrap .my-history-title{padding-right:0; padding-left:30px}
.sub-nav_list{padding-right:0; padding-left: 20px}

.shortcode.my-bookmarks .popular-item-wrap .popular-img{float: right; margin: 0 0 10px 10px}
body .c-blog__heading.style-2{text-align: right}
.c-blog__heading.style-2 i{margin-right:0; margin-left: 16px}
.list-chap .wp-manga-chapter{text-align: right}
.main.version-chap .parent.has-child, #comments.comments-area .comments-title, #comments.comments-area h4.comment-reply-title, #comments.comments-area #respond.comment-respond .comment-form > *{text-align: right}

body.manga-page .page-content-listing.single-page .listing-chapters_wrap > ul.main.version-chap li, #comments.comments-area ol.comment-list li.comment article.comment-body .block-right, #comments.comments-area ol.comment-list li.pingback article.comment-body .block-right,body.manga-page .wp-manga-tags-wrapper .wp-manga-tags, .c-breadcrumb-wrapper{text-align: right}
body.manga-page .profile-manga .tab-summary .post-content_item .summary-content, body.manga-page .profile-manga .post-status .post-content_item .summary-content{text-align: right;padding-right: 10px}

.summary__content {text-align: right}
.post-edit-link{float:right}
#wc-comment-header{text-align: right}

.wp-manga-nav{}
body.reading-manga .entry-header .select-view{float: right}
body.reading-manga .entry-header .select-pagination{float: left}

body.page .c-page-content .main-col-inner .entry-header .entry-title .item-title, .c-blog-post .entry-content .entry-content_wrap, body.manga-page .profile-manga .tab-summary .post-content_item .summary-heading, body.manga-page .profile-manga .post-status .post-content_item .summary-heading, #init-links.nav-links, body.manga-page .profile-manga .tab-summary .post-rating:hover .user-rating, body.search .search-wrap .tab-content-wrap .c-tabs-item .c-tabs-item__content .tab-summary .post-content .post-content_item .summary-heading, body.search .search-wrap .tab-content-wrap .c-tabs-item .c-tabs-item__content .tab-summary .post-content .post-content_item .summary-content, .search-wrap .tab-meta, body.search .c-search-header__wrapper #search-advanced .search-advanced-form .form-group:not(.checkbox-group){text-align: right}
.site-header .c-header__top form#blog-post-search.manga-search-form .loader-inner{left:15px; right: auto}
body.search .c-search-header__wrapper .search-content .search-form{float: right}

body.search.search-results .search-wrap .tab-content-wrap .c-tabs-item .c-tabs-item__content .tab-summary .post-content .post-content_item:last-child{margin-right: 0; margin-left: 95px}
.related-heading:after, .widget-heading:after{right: 15px; left: auto}