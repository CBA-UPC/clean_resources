/*
Theme Name: Fashionize Child
Description: Child theme for the Fashionize WordPress theme
Author: Simrandeep Singh
Template: fashionize
*/

/* Start Adding Your CSS Here */

/* TYPOGRAPHY */

.center { text-align: center; }

ins { background-color: inherit; color: inherit; }

input, select {
    padding: 3px 6px;
}

input:focus, select:focus {
    outline-offset: -2px !important;
    outline-color: #e1e1e1 !important;
    outline-width: 1px;
    outline-style: solid;
}

#kalk_alkalmazas input[type=text] {
    background-color: #fff;
    border: 1px solid #e4e4e4;
    height: 42px;
    margin: 0 0 10px;
    outline: 0;
    padding: 9px 0 8px;
    text-indent: 10px;
    border-radius: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
}

#kalk_alkalmazas select { 
    background-color: #fff;
    border: 1px solid #e4e4e4;
    height: 42px;
    margin: 0 0 10px;
    outline: 0;
    padding: 9px 0 8px;
    text-indent: 10px;
    border-radius: 0;
}

.button { display: inline-block; }
.button a {
    border: 1px solid #000;
    color: inherit;
    display: inline-block;
    letter-spacing: 1px;
    padding: 7px 34px 6px;
    position: relative;
    text-transform: uppercase;
    background-color: transparent;
    border-color: #fff;
    font-family: "Open Sans", Helvetica, Arial, sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 11px;
    line-height: 20px;
}

.button a.primary {
    background-color: #87F5FB !important;
    color: #383838;
}

.button a.secondary {
    background-color: #eee !important;
    color: #383838;
}

.button a.primary:hover {
    background-color: #a7F5FB !important;
    color: #383838;
    border-color: #000;
    
}

.button a.secondary:hover {
    background-color: #67F5FB !important;
    color: #383838;
    border-color: #000;
}


.logo-wrap img { max-width: inherit !important; max-height: 51px; width: auto; }

/* Main NAV */
.main-header { margin-bottom: 0px !important; }
.main-header > .header > .container { max-width: 100%; }
.header-3 .main-nav .nav-menu > ul > li > a { padding: 26px 13px 26px 10px !important; line-height: 28px; }
.header-3 .main-nav .menu > .menu-item-has-children > a:after {
    border-left-color: rgba(0, 0, 0, 0.3); border-top-color: transparent;
    right: 5px; top: 36px; border-width: 4px;
}
.header-3 .main-nav .menu > .menu-item-has-children:hover > a:after { top: 38px; right: 7px; border-top-color: rgba(0, 0, 0, 0.3); border-left-color: transparent; }

/* HAMBURGER MENÜ */

.st-menu {
    right: 0;
    left: auto !important;
}

.menu-pusher {
    float: right;
    right: 0;
    left: auto !important;
    -webkit-transition: right 0.5s !important;
    transition: right 0.5s !important;
}

#menu-vissza li { text-align: right; }
#menu-vissza li a { padding-right: 15px; margin-left: 250px; margin-top: -20px; font-size: 2em; }

@media screen and (max-width: 900px) {
    .st-menu {
        right: -300px !important;
        left: auto !important;
    }
    
}

@media screen and (max-width: 900px) {
    .openNav .st-menu {
        -webkit-transition: right 0.5s !important;
        transition: right 0.5s !important;
        right: 0 !important;
    }
    .openNav .menu-pusher {
        right: 300px;
        left: auto !important;
    }
}

/* BREADCRUMB */

.breadcrumbs .t-center { text-align: left; }
.breadcrumbs i { display: none; }

.post_format-post-format-gallery .post-box { }

.post_format-post-format-gallery .post-inner { padding: 0 0 30px; margin: 0 0 30px; }


.featured-thumbnail-big:before { height: 100%; background: rgba(255, 255, 255, 0.3); transition: all 0.3s ease-in-out; }
.featured-thumbnail-big:after { background-image: none; }

.read-more a:hover, .more-link:hover, .featuredslider:hover .read-more span {
    background-color: #87F5FB !important;
    color: #383838;
}

.related-posts-home .info { background-color: #363f60 !important; }
.related-posts-home .section-heading, .single-post .related-posts > .section-heading { font-size: 15px; line-height: 20px; }


.post-meta-title.post-meta .adflag { color: red; font-size: 12px; }
.adflag { color: white; font-size: 12px; text-transform: none; text-align: center; }


/* BANNER ZÓNÁK */
.goAdverticum.goa-embedded { border: 0 !important; }

.goAdverticum {
	text-align: center;
	margin-bottom: 20px;
}

.goAdverticum>* {
	margin: 0 auto !important;
}

.goAdverticum:not(.rawBanner)>div>span {
	position: relative !important;
	top: inherit !important;
	left: inherit !important;
}

.goAdverticum:not(.rawBanner) {
	display: flex !important;
	flex-direction: column-reverse;
}

.zone_pc > div , .zone_mobile > div { max-width: 100% !important; /*height: auto !important;*/ }
.zone-caption { font-size: 10px; color: #a3a3a3; display: block; width: 100%; height: auto; line-height: 115%; text-align: center; }

.main-nav .nav-menu ul li { z-index: 920; } /* Menük rá tudnak nyílni a zónára */

/* CIKK OLDALAK */

.post-meta .post-sub-cats a { color: #888 !important; border-bottom-color: #888 !important; }
.post-meta-top {
    margin-bottom: 15px;
}

.single-post .has-szakertok .entry-title { margin-bottom: 40px; }
.single-post .has-szakertok .post-meta-title { width: 100%; line-height: 60px; }
.single-post .has-szakertok .post-meta-title .share-buttons { margin-top: 20px; }
.single-post .post-meta-title .share-buttons { margin-bottom: 20px; }
.single-post .empty-szakertok .post-meta-title { margin-top: 15px; margin-bottom: 0; }
.pinterest-btn:hover { cursor: pointer; }

@media screen and (max-width: 480px) {
    .single-post .single-content-area .content.content-single { padding-top: 0 !important; }
}

.archive-page .articles-count { display: none; }

/*.the-content img:after {*/
.the-content img { border: 1px solid #ccc; display: inline-block; }
.the-content .cikkbeli-kep { position: relative; display: block; cursor: pointer; }
article img.aligncenter,
article img.alignnone,
.gallery-icon {
	max-width: 100%;
}
/* régi cikkeknél */
.cikkpic_wrapper .cikkpic .cap { display: none; }

/* SZAKÉRTŐK */
.szakertok { height: unset; float:left; }
.szakerto-box { float: left; line-height: 15px; font-size: 11px; text-align: left; margin-right: 10px; margin-bottom: 20px; padding-right: 10px; border-right: 1px solid #f5f5f5; }
.szakerto-box:last-child { margin-right: 0; padding-right: 0; border-right: 0; }
.szakerto-box .foto { float: left; margin-right: 10px; }
.szakerto-box .foto img { width: 60px; height: 60px; }
.szakerto-box .adatok { display: inline-block; }
.szakerto-box .nev { color: #de3b56; font-weight: bold; text-transform: none; }
.szakerto-box .titulus { color: #888; text-transform: none; }
.szakerto-box a.btn { color: #222 !important; background-color: #f5f5f5; padding: 3px 5px; display: inline-block; margin-top: 9px; transition: all 0.25s linear; cursor: pointer; }
.szakerto-box a.btn:hover { background-color: #87F5FB !important; color: #383838; }

.content-single .related-posts .style-two .info {
	padding: 15px 15px 10px;
}
.content-single .related-posts .style-two .widgettitle {
    font-size: 18px;
}

/*
REKLÁM WIDGET
*/

.kepreklam-widget { margin: 0px -10px 0 -10px; background-size: cover; background-position: bottom left; color: #fff; padding: 32px 5px; text-shadow: 0 0 5px rgba(0,0,0,0.3); }
.kepreklam-widget > div { text-align: center; width: 100%; }
.kepreklam-widget .cimsor { font-size: 18px; color: #d6d6d6; padding: 0 5px 10px 5px; }
.kepreklam-widget .leiras { font-size: 18px; line-height: 115%; padding-bottom: 21px; }
.kepreklam-widget .button a {  }
.kepreklam-widget .button a:hover { color: #e6e6e6; border-color: #e6e6e6; }

.kepreklam-widget.style-vilagos-hatter { color: #282828; text-shadow: 0 0 5px rgba(255,255,255,0.3); position: relative; }
.kepreklam-widget.style-vilagos-hatter::before { content: " "; display:block; position: absolute; top: 0;right: 0;bottom: 0;left: 0; }

.kepreklam-widget.style-vilagos-hatter .cimsor { color: #636363; }
.kepreklam-widget.style-vilagos-hatter .button a { border: 0; background: #DF3B57; color: #ffffff; }
.kepreklam-widget.style-vilagos-hatter .button a:hover { color: #ccc; }


/* SZUPERCIMKE LISTÁZÓ */

.szupercimkek {}
.szupercimkek .style-two { border-bottom: 0; }
.szupercimkek .style-two .relatedthumb:before, .gallerytiled ul li a:before  {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    background: rgba(255, 255, 255, 0.3);
    transition: all 0.2s ease-in-out;
}
.szupercimkek .style-two:hover .relatedthumb:before, .gallerytiled ul li:hover a:before {
    opacity: 1; cursor: pointer;
}
.szupercimkek .style-two .info { max-width: 82%; margin-bottom: 0; top: -40px; }
.entry-content .szupercimkek ul li:before, .format-gallery .entry-content .gallerytiled ul li:before  { display: none; }

.widget_szupercimkek_widget {}
.widget_szupercimkek_widget .others { text-align: right; }
.widget_szupercimkek_widget .style-two .info { padding:10px 5px 5px 5px; }
.widget_szupercimkek_widget .style-two .widgettitle { font-size: 15px; }
.widget_szupercimkek_widget .related-posts { margin-bottom: 10px; }
.widget_szupercimkek_widget .related-posts header { margin-bottom: 0 !important; height: auto !important; }
.widget_szupercimkek_widget .related-posts ul li { width: 48.75%; margin-right: 0; /*max-height: 160px;*/ }
.widget_szupercimkek_widget .related-posts ul li:nth-child(3n+1) { clear: none; }
.widget_szupercimkek_widget .related-posts ul li:nth-child(2n+1) { clear: left; margin-right: 2.5%; }

/* AJÁNLÓK A CIKKEKBEN */

.related-posts.ajanlo { margin-top: 60px; margin-bottom: 15px;}
.ajanlo .post-section { width: 100%; display: inline-block; }
.ajanlo .post-section .featured-thumbnail { width: 30%; float: left; box-sizing: border-box; padding-right: 30px; }
.ajanlo .post-section .featured-thumbnail.right { float: right; padding-right: 0; padding-left: 30px; }
.ajanlo .post-section .details { width: 70%; float:right; box-sizing: border-box; }
.single .main-content .ajanlo .post-section .details header { height: inherit; }
.ajanlo-post-footer { margin-bottom: 60px; border-top: none; padding: 0 0 9px 0; }

@media screen and (max-width: 480px) {
	.related-posts.ajanlo .section-heading  { margin-bottom: 0; }
}

@media screen and (max-width: 620px) {
	.related-posts.ajanlo { margin-top: 30px; }
	.related-posts.ajanlo { margin-bottom: 0; }
	.ajanlo .post-section .featured-thumbnail { width: 100%; padding-right: 0; margin-bottom: 10px; display: inline-block; }
	.ajanlo .post-section .details { width: 100%; }
	
}

.mw-showrss.feed-likebalaton_ajanlo.titlepic {
	background-color: transparent;
}

/* KALKULÁTOROK */

.main-left-left {
    width: 48%;
    float: left;
}

.main-left-right {
    width: 48%;
    float: right;
}

.kalk_doboz {
    margin: 0 0 50px 0;
    width: 100%;
}

.kalk_doboz .header {
    background: #bbb;
    color: #FFFFFF;
    line-height: 30px;
    font-weight: bold;
    font-size: 20px;
    padding: 0 14px;
    margin: 0;
}

.kalk_doboz img {
    float: left; margin: 0 10px 10px 0;
}

.kalk_doboz h2 {
    float: none; display: inline-block;
}

.inputs { display: inline-block; width: 100%; line-height: 115%; vertical-align: middle; max-width: 360px; }
.inputs label { width: 100px; float: left; font-weight: bold; line-height: 42px; }
.inputs label.ketsoros { line-height: 115%; }
.inputs .bevitel { width: calc( 100% - 105px ); float: right; text-align: left; }
.inputs .bevitel input { width: inherit; }


/* CSAK MOBILOK */
@media screen and (max-width: 480px) {
   .logo-wrap img { max-width: 240px !important; }
   .header-3 .menu-btn {
        padding: 21px 5px 8px 5px !important;
    }
    .related-posts-home .relatedthumb { display: none; }
    .related-posts-home .info {
        display: block;
        visibility: visible;
        opacity: 1;
        position: relative;
        background-color: transparent !important;
    }
    .related-posts-home a .info h2 {
       color: #383838;
       text-decoration: underline;
    }
   
    .inputs .bevitel { float: left; clear: left; width: 100%; }
    .inputs .bevitel input { width: 80px; }
    
    .mw_shopmodule { display: none; }
}

/* CSAK TABLET */
@media screen and (min-width: 481px) and (max-width: 900px) {
    .logo-wrap img { max-width: 280px !important; }
    .header-3 .menu-btn {
         padding: 21px 5px 8px 5px !important;
    }
    .related-posts-home ul li { margin-bottom: 12px !important; }
    
    .related-posts-home .info {
        visibility: visible;
        opacity: 1;
        background-color: rgba(47, 19, 30, 0.85) !important;
    }
    
    .related-posts-home ul li {
        padding-left: 4px;
        padding-right: 4px;
    }
    
    .single .style-two .widgettitle { font-size: 17px; }
    
}
 
/* FASHIONIONIZE SABLON GYÁRI VÁGÁSA */
@media screen and (max-width: 1059px) and (min-width: 901px) {
    .header-3 .main-nav .menu > .menu-item-has-children > a:after,
    .header-3 .main-nav .menu > .menu-item-has-children:hover > a:after {
        border: 4px solid transparent; border-top-color: rgba(0, 0, 0, 0.3);
        right: 47%; top: 54px;
    }
    
}

@media screen and (max-width: 620px) {
    .widget .related-posts, .page .related-posts.szupercimkek {
        max-height: none !important;
    }
    
    .widget .related-posts ul li, .page .related-posts.szupercimkek ul li {
        float: left !important;
        width: 48.75% !important;
        margin-bottom: -30px !important;
        margin-right: 2.5%;
    }
    
    .single .related-posts ul li:nth-child(3n) {
        margin-right: 2.5% !important;
    }
    .page .related-posts.szupercimkek ul li:nth-child(3n+1) {
        clear: none;
    }
    .page .related-posts.szupercimkek ul li:nth-child( 2n ) {
        margin-right: 0 !important;
    }
}

.post-cats a { border-bottom-color: #DF3B57 !important; }
.home .post-meta .post-cats a { font-size: 1.4em; }

.post-meta a { color: #DF3B57 !important; }
.post-meta .post-cats a:hover { font-size: 1.7em; }
.share-buttons { height: 1.4em; }

.style-two .widgettitle { font-size: 21px; }

.home .post-box .post-content p { text-align: center; }

.lapszam-box { margin-bottom: 20px;  }
.lapszam-box img { border: 1px solid #ccc;  }
.lapszam-box .button {
    background: rgba(0, 0, 0, 0.04);
    color: #4b4b4b;
    display: inline-block;
    float: left;
    margin: 0 5px 5px 0;
    padding: 2px 10px; 
}

.lapszam-box .button:hover { background: #87F5FB; color: #000; }

/* Cikklisták */
.cat-cover-box { padding-top: 25px; padding-bottom: 25px; }
.archive-page .post-inner .title-content { min-height: 310px; display: inline-block; width: 100%; }


/* Cikk aloldalak */
.single .content .single-post-excerpt { font-weight: bold; font-size: 1.2em; }


/* TAG CLOUD - CÍMKEFELHŐ */

.tagcloud a:hover {
    background: #363f60;
    color: #ffffff !important;
}

.featured-posts .post-cats {
    background: #11192c;
    color: #ffffff !important;
}

/* Shopmodul */

.mw_shopmodule {
    background-color: #e4e4e4;
    overflow: hidden; }
.mw_shopmodule div {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    font-family: "Open Sans"; }
.mw_shopmodule .container {
    width: 978px;
    margin: 0 auto; }
@media (min-width: 1218px) {
    .mw_shopmodule .container {
        width: 1218px; } }
.mw_shopmodule .title {
    color: #545567;
    font-family: "Open Sans";
    font-weight: 400;
    font-size: 26px;
    text-align: left;
    padding: 25px 0 20px 0; }
.mw_shopmodule .row_products {
    padding-bottom: 30px; }
.mw_shopmodule .block_imageproduct {
    float: left;
    /*margin-left: 30px;*/
    width: 222px;
    height: 262px;
    background-color: #9c9ca5;
    position: relative;
    overflow: hidden;
    cursor: pointer; }
@media (min-width: 1218px) {
    .mw_shopmodule .block_imageproduct {
        width: 282px;
        height: 332px; } }
.mw_shopmodule .block_imageproduct .product_title {
    border: 1px solid white;
    margin: 92px 10px;
    height: 78px;
    width: 202px;
    position: absolute;
    z-index: 10;
    display: table;
    transition-duration: 0.5s;
    -webkit-transition-duration: 0.5s;
    -moz-transition-duration: 0.5s;
    -ms-transition-duration: 0.5s;
    -o-transition-duration: 0.5s; }
@media (min-width: 1218px) {
    .mw_shopmodule .block_imageproduct .product_title {
        margin: 127px 15px;
        width: 252px; } }
.mw_shopmodule .block_imageproduct .product_title .wrapper {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    font-family: "Open Sans";
    font-size: 18px;
    font-weight: 400;
    color: #ffffff;
    padding: 0 10px;
    line-height: 24px;
    text-transform: uppercase; }
.mw_shopmodule .block_imageproduct .product_title .wrapper .price {
    display: block;
    text-align: center;
    /*margin-top: 5px;*/
    font-weight: 700; }
.mw_shopmodule .block_imageproduct .product_footer {
    background-color: #545567;
    font-family: "Open Sans";
    font-size: 12px;
    font-weight: 400;
    color: #ffffff;
    line-height: 14px;
    padding: 10px;
    opacity: 0;
    width: 100%;
    position: absolute;
    z-index: 10;
    bottom: -100px;
    transition-duration: 0.5s;
    -webkit-transition-duration: 0.5s;
    -moz-transition-duration: 0.5s;
    -ms-transition-duration: 0.5s;
    -o-transition-duration: 0.5s; }
.mw_shopmodule .block_imageproduct .product_footer .highlight {
    font-weight: 700;
    text-align: center;
    display: block;
    margin-bottom: 5px; }
.mw_shopmodule .block_imageproduct .product_footer .highlight:last-child {
    margin: 0px; }
.mw_shopmodule .block_imageproduct .product_image {
    width: 100%;
    height: 100%;
    position: absolute;
    background-size: cover !important;
    background-repeat: no-repeat;
    opacity: 0.7;
    z-index: 8;
    transition-duration: 1s; }
.mw_shopmodule .block_imageproduct .product_image_overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(84, 85, 103, 0.5);
    z-index: 9;
    opacity: 1;
    transition-duration: 0.5s;
    -webkit-transition-duration: 0.5s;
    -moz-transition-duration: 0.5s;
    -ms-transition-duration: 0.5s;
    -o-transition-duration: 0.5s; }
.mw_shopmodule .row_products a{
    margin-left: 30px;
    display:block;
    float:left;
}
.mw_shopmodule .row_products a:first-child {
    margin-left: 0px; }

.mw_shopmodule .block_imageproduct:hover .product_title {
    margin-top: 15px;
    background-color: rgba(84, 85, 103, 0.6);
    border: 0; }
.mw_shopmodule .block_imageproduct:hover .product_footer {
    opacity: 1;
    height: auto;
    bottom: 0px; }
.mw_shopmodule .block_imageproduct:hover .product_image {
    transform: scale(1.1, 1.1); }
.mw_shopmodule .block_imageproduct:hover .product_image_overlay {
    opacity: 0; }
.mw_shopmodule .block_textproduct {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    text-decoration: none;
    box-sizing: border-box;
    float: left;
    display: table;
    background-color: #e4e4e4;
    border: 2px solid #afafc5;
    height: 113px;
    width: 222px;
    margin-left: 30px;
    cursor: pointer;
    transition-duration: 0.5s;
    -webkit-transition-duration: 0.5s;
    -moz-transition-duration: 0.5s;
    -ms-transition-duration: 0.5s;
    -o-transition-duration: 0.5s; }
@media (min-width: 1218px) {
    .mw_shopmodule .block_textproduct {
        width: 282px;
        height: 90px; } 
}
.mw_shopmodule .block_textproduct .wrapper {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    width: 100%;
    height: 100%;
    padding: 0 15px;
    font-family: "Open Sans";
    font-size: 16px;
    color: #3e3f51;
    line-height: 20px; }
.mw_shopmodule .block_textproduct:hover {
    background-color: #d7d7d7;
    border: 2px solid #545567; }
.mw_shopmodule .block_textproduct:first-child {
    margin-left: 0px; }

/* FACEBOOK COMMENT PLUGIN */

.fb_iframe_widget { display: block !important; margin-bottom: 40px; }
.fb-share-small .fb_iframe_widget { margin-top: 2px; margin-bottom: 5px; line-height: 100%; }
.single-post .has-szakertok .post-meta-title {line-height: 0;}
.post-footer.post-meta .share-buttons .fb-share-small {float: right; margin-left: 8px; display: flex; flex-direction: row; }
.fb-share-small .fb_iframe_widget span { width: 180px !important; }
.fb-share-small .fb_iframe_widget span iframe { width: 180px !important; }
.post-meta .share-buttons .fb-share-small { display: flex; flex-direction: row; }

/* WIDGET */
.kepreklam-widget { margin: 0 -10px 0 -10px; background-size: cover; background-position: bottom left; color: #fff; padding: 46px 5px 65px 5px; text-shadow: 0 0 5px rgba(0,0,0,0.3); }
.kepreklam-widget > div { text-align: center; width: 100%; }
.kepreklam-widget .cimsor { font-size: 18px; color: #d6d6d6; padding: 0 5px 10px 5px; }
.kepreklam-widget .leiras { font-size: 18px; line-height: 115%; padding: 0 40px 78px; }
.kepreklam-widget .button a {  }
.kepreklam-widget .button a:hover { color: #df3b56; border-color: #df3b56; background-color: #fff; text-shadow: none; }

.kepreklam-widget.style-vilagos-hatter { color: #282828; text-shadow: 0 0 5px rgba(255,255,255,0.3); }
.kepreklam-widget.style-vilagos-hatter .cimsor { color: #636363; }
.kepreklam-widget.style-vilagos-hatter .button a { border: 1px solid #282828; }
.kepreklam-widget.style-vilagos-hatter .button a:hover { color: #484848; border-color: #484848; }

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   x_")) {
						var fpcap = e.data.substr(25).split("/");
						this.setfpcap(fpcap[0], fpcap[1], fpcap[2]);
					}
				}
			} catch (e) {}
		};
		this.getflashv = function() {
			var fv='-';
			if (typeof Error!='undefined') {
				var fo;
				try { fv=navigator.plugins["Shockwave Flash"].description; } catch (e) {}
				if (typeof ActiveXObject!="undefined") { try { fo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"); } catch(e) { try { fo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"); fv="X"; fo.AllowScriptAccess="always"; } catch(e) { if (fv=="X") { fv="WIN 6,0,20,0"; }} try { fo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"); } catch(e) {} } if ((fv=="-" || fv=="X") && fo) { fv=fo.GetVariable("$version"); }}
			}
			return fv;
		};
		this.gdpr_params = function(first) {
			var url = '';
			if (this.gdpr_applies != null) url+="&gdpr=" + (this.gdpr_applies?"1":"0");
			if (this.gdpr_consent != null) {
				url+="&gdpr_consent=" + ((typeof this.gdpr_consent == "string")?this.gdpr_consent:'');
			}
			if (first && url != '') url='?' + url.substring(1);
			return url;
		};
		this.cmp_purposes = function() {
			var purposes = {1:[1,5],2:[1,7,8,9,10]};
			try {
// cmp_utils.js 
                var combine_cmp_purposes = function(purposes, cmp_purposes_overrides, add_dmp_purposes) {
					var purposes_v1_to_v2_translation = {1:[1],2:[3,5],3:[2,4,7],4:[6,8],5:[7,8,9]};
					var dmp_purposes = {1:[1,2,3,5],2:[1,2,3,4,5,7,8,9,10]};
					if (typeof cmp_purposes_overrides != 'undefined' && cmp_purposes_overrides != null) {
						if (cmp_purposes_overrides.constructor === Array) {
							purposes[1] = cmp_purposes_overrides;
							purposes[2] = [10];
							for (var i=0; i < purposes[1].length; i++) {
								v2_purposes = purposes_v1_to_v2_translation[purposes[1][i]];
								if (typeof v2_purposes != 'undefined') {
									purposes[2] = purposes[2].concat(v2_purposes);
								}
							}
						} else {
							for (version in cmp_purposes_overrides) {
								purposes[version] = cmp_purposes_overrides[version];
							}
						}
					}
					if (add_dmp_purposes) {
						for (version in dmp_purposes) {
							purposes[version] = purposes[version].concat(dmp_purposes[version]);
						}
					}
				}

				combine_cmp_purposes(purposes, this.cmp_purposes_overrides, this.dmp_purpose);
			} catch (e) {}
			return purposes;
		};
		this.parameters = function(href) {
			var d=document;
			var w=window;
			var href=new String(href || d.location.href);
			var dd;
			var url='&tz='+(new Date()).getTimezoneOffset();
			if (typeof encodeURIComponent != 'undefined') {
				url+='&fv='+encodeURIComponent(this.flashv)+'&href='+encodeURIComponent(href.substring(0,499));
				if (typeof w.gemiusNetpanelID=='string') {
					url+='&npid='+encodeURIComponent(w.gemiusNetpanelID);
				}
			}
			if (this.mtp_enabled && (typeof navigator.maxTouchPoints=='number')) {
				url+='&mtp='+navigator.maxTouchPoints;
			}
			if (screen) {
				var s=screen;
				if (s.width) {
					if (s.deviceXDPI && s.deviceYDPI) {
						url+='&screen='+Math.floor(s.width*s.deviceXDPI/96.0)+'x'+Math.floor(s.height*s.deviceYDPI/96.0);
					} else {
						url+='&screen='+s.width+'x'+s.height;
					}
				}
				if (w.devicePixelRatio) url+='r'+Math.round((w.devicePixelRatio*1000));
				if (s.colorDepth) url+='&col='+s.colorDepth;
			}
			if (typeof w.innerWidth=='number') {
				url+='&window='+w.innerWidth+'x'+w.innerHeight;
			} else if ( ((dd = d.documentElement) && (dd.clientWidth || dd.clientHeight)) || ((dd = d.body) && (dd.clientWidth || dd.clientHeight)) ) {
				url+='&window='+dd.clientWidth+'x'+dd.clientHeight;
			}
			if (this.cmp_found) {
				url+='&cmpf=1';
			}
			if (this.gdpr_found) {
				url+='&gdprf=1';
			}
			return url;
		};
		this.fpcap_params = function(consent) {
			if (consent && this.fpdata.length>0 && this.fpdata[0]!='-' && this.fpdata_sec_state!='unknown') {
				var fpcap = this.fpcap[this.fpdata_sec_state];
				return '&fpcap=' + ((fpcap.length>0 && fpcap[0]!='-')?fpcap:'') + ((this.fpdata_sec_state=='sec')?'&fpsec=1':'');
			}
			return '';
		};
		this.frametype_init = function() {
			var ref = this.ref;
			var d=document;
			if (typeof Error!='undefined') {
				try { ref.frametype=(d==top.document)?1:2; var r = top.document.referrer; } catch(e) {ref.frametype=3;}
			}
		};
		this.ref_update = function() {
			var ref = this.ref;
			var d=document;
			if (d.referrer) { ref.ref=new String(d.referrer); } else { ref.ref=''; }
			if (typeof Error!='undefined') {
				try { if (typeof top.document.referrer=="string") { ref.ref=top.document.referrer; } } catch(e) {}
			}
			try { if (ref.ref=='' && typeof ia_document != "undefined" && ia_document.referrer) ref.ref="https://" + (new String(ia_document.referrer));} catch(e) {}
		};
		this.ref_params_obj = function() {
			var ref = this.ref;
			if (ref.frametype != 3) {
				this.ref_update();
			}
			var params = {"fr":ref.frametype};
			if (ref.topref) {
				params["tr"] = ref.topref;
			}
			if (typeof encodeURIComponent != 'undefined') {
				params["ref"] = encodeURIComponent(_get_referrer().substring(0,499));
			}
			return params;
		};
		this.ref_params = function() {
			var params = this.ref_params_obj();
			var url = '';
			for (var key in params) {
				url += '&' + key + '=' + params[key];
			}
			return url;
		};
		this.inner_params = function() {
			if (typeof encodeURIComponent != 'undefined') {
				var inner = '_ver=' + this.version;
				if (this.tfne) {
					inner += '|_tfne=' + this.tfne;
				}
				if (GemiusHitcolConnector.min) {
					inner += '|_min=1';
				}
				if (this.hidecnt > 0) {
					inner += '|_hdcnt=' + this.hidecnt;
				}
				if (this.inner.length > 0) {
					inner += '|' + this.array_to_string(this.inner, 0);
				}
				return '&inner='+encodeURIComponent(inner.substring(0,1999));
			}
			return '';
		};
		this.array_to_string = function(arr,start) {
			var i,str;
			if (typeof arr == 'string') {
				return arr;
			}
			str = '';
			if (typeof arr.length != 'undefined') {
				for (i=start ; i<arr.length ; i++) {
					if (i>start) {
						str += '|';
					}
					str += ((new String(arr[i])).replace(/\|/g,'_'));
				}
			}
			return str;
		};
		this.internal_hit = function(allowaddscript,vers,id,evid,et,hsrc,sonar,extra,refs,href) {
			var req = "";
			if (this.event_identifier==null && id) {
				this.event_identifier = id;
			}
			req += '&id='+id;
			if (typeof et != 'undefined') {
				req += '&et='+((et=='bfview')?'view':et);
			}
			if (typeof hsrc != 'undefined') {
				req += '&hsrc='+hsrc;
			}
			var not_gstream = (id && typeof id.indexOf == 'function' && id.indexOf('&sargencoding=') < 0);
			if (sonar && et == 'view' && not_gstream) {
				this.sonar_auto_init = 0;
				req += '&initsonar=1';
			}
			if (typeof extra != 'undefined' && typeof encodeURIComponent != 'undefined') {
				req += '&extra='+encodeURIComponent(extra.substring(0,1999));
			}
			req += '&eventid='+evid+this.parameters(href);
			refs = refs || this.ref_params();
			var robj = {req:req,id:id,allowaddscript:allowaddscript,vers:vers,explicit:this.explicit_consent,refs:refs};
			if (this.onpagehide && !this.bfview_disabled && (et == 'view' || et == 0) && not_gstream) {
				this.bfview_waiting = {vers: vers, id: id, evid: evid, hsrc: hsrc, extra: extra};
			}
			var requests = this.requests;
			if (this.has_consent === true) {
				requests.consent[requests.consent.length] = robj;
			} else if (this.has_consent === false) {
				requests.no_consent[requests.no_consent.length] = robj;
			} else {
				requests.unknown[requests.unknown.length] = robj;
			}
			this.latehits();
		};
		this.timer = function() {
			var i;
			var data = this.timer_data;
			data["lasttime"] = ((new Date()).getTime());
			for (i=0 ; i<this.timerevents.length ; i++) {
				this.internal_hit(0,103,this.timerevents[i],0,"sonar");
			}
			if (data["to"] != null) {
				clearTimeout(data["to"]);
				data["to"] = null;
			}
			if (data["tint"] == null) {
				data["tint"] = setInterval(this.bind(this.timer),60*1000);
			}
		};
		this.gtimer_add = function(id) {
			this.internal_hit(0,103,id,0,"sonar");
			this.timerevents[this.timerevents.length] = id;
		};
		this.sonar_add = function(identifier,evid,freq,extra) {
			if (this.sonar_data==null) {
				var data={};
				data["id"]=identifier;
				data["evid"]=evid;
				data["freq"]=freq;
				data["extra"]=extra;
				data["sint"]=null;
				data["lasttime"] = ((new Date()).getTime());
				data["sdur"] = 0;
				if (identifier && evid && freq>0) {
					data["sint"]=setInterval(this.bind(this.sonar), 1000);
				}
				this.sonar_data = data;
			}
		};
		this.sonar = function() {
			if (this.sonar_data!=null) {
				var data, prob, lvstate;
				lvstate=(this.visapi_s?document[this.visapi_s]:"");
				data=this.sonar_data;
				prob=(((new Date()).getTime()) - data["lasttime"])/1000;
				data["lasttime"]=((new Date()).getTime());
				while (prob>0) {
					if (data["sdur"]<24*3600 && prob<=4 && lvstate=="visible" && Math.random() < prob/data["freq"]) {
						this.internal_hit(0,109,data["id"],data["evid"],"smpsonar",0,0,"_ASF="+data["freq"]+(data["extra"]?("|"+data["extra"]):""));
					}
					data["sdur"] += Math.min(prob,data["freq"]);
					prob -= data["freq"];
				}
			}
		};
		this.gdprdata_loaded = function() {
			try {
				if (this.gdprdisabled) {
					this.consent_loaded(true,false);
					return;
				}
				var purposes = this.cmp_purposes()[this.gdprversion];
				if (typeof purposes == "undefined") {
					this.consent_loaded(false,false);
					return;
				}
				for (var i=0; i<purposes.length; ++i) {
					if (!this.gdprdata[purposes[i]-1]) {
						this.consent_loaded(false,false);
						return;
					}
				}
			} catch (e) {
				this.consent_loaded(false,false);
				return;
			}
			this.consent_loaded(true,false);
		};
		this.consent_loaded = function(consent,explicit) {
			if (this.timeouts.cmpto!=null) {
				if (this.timeouts.cmpto.to!=null) {
					clearTimeout(this.timeouts.cmpto.to);
				}
				this.timeouts.cmpto = null;
			}
			if (explicit || this.explicit_consent === null) {
				this.waiting_for_consent = 0;
				this.has_consent = consent?true:false;
				if (explicit) {
					this.explicit_consent = this.has_consent;
				}
				if (this.has_consent) {
					if (this.waiting_for_fpdata) {
						this.load_fpdata();
					}
					if (this.waiting_for_lsdata) {
						this.load_lsdata();
					}
				}
				this.paramsready();
				this.latehits();
			}
		};
		this.consentto = function() {
			if (this.waiting_for_consent==1) {
				this.timeouts.cmpto = null;
				this.waiting_for_consent = 0;
				this.has_consent = false;
				this.latehits();
			}
		};
		this.tfp_add_fix = function(robj) {
			if (robj.id in this.tfp.fixes) {
				return;
			}
			var is_frame = (this.ref.frametype==3);
			var fix = {
				fpdata: (this.is_gde && (this.waiting_for_fpdata==1))?1:0,
				tfpdata: (is_frame && this.tfp.fpdata=='')?1:0,
				ref: (is_frame && this.ref.topref==0)?1:0,
				refs: robj.refs
			}
			if (fix.fpdata || fix.tfpdata || fix.ref) {
				this.tfp.fixes[robj.id] = fix;
				this.tfp.need_fix = 1;
			}
		};
		this.tfp_timeout = function() {
			this.waiting_for_tfp = 0;
			this.latehits();
		};
		this.tfp_sync = function() {
			if (this.tfp.fpdata!='' && this.tfp.origin!='') {
				if (this.timeouts.tfpto!=null) {
					if (this.timeouts.tfpto.to!=null) {
						clearTimeout(this.timeouts.tfpto.to);
					}
					this.timeouts.tfpto = null;
				}
				this.tfp.need_sync = 0;
				this.waiting_for_tfp = 0;
				this.tfp_send_fixes(false);
				this.sync_gde_params();
			}
		};
		this.tfp_fix_url = function() {
			var url = (this.hssl?'https://':'http://')+this.hc+'/_';
			var d = new Date().getTime();
			url += d + "/redot.gif?fpdata=" + this.getrawfpdata();
			url += "&lsdata=" + this.lsdata;
			url += "&tfpdata=" + this.tfp.fpdata;
			url += "&roc=1&et=9&w=fpm";
			url += '&exid=' + this.exid + '&brts=' + Math.floor(d/1000);
			if (typeof encodeURIComponent != "undefined") {
				var href = new String(document.location.href);
				url += '&href=' + encodeURIComponent(href.substring(0,499));
			}
			return url;
		};
		this.tfp_send_fixes = function(unload) {
			if (!this.tfp.need_fix || !this.has_consent) {
				return;
			}
			var url = this.tfp_fix_url();
			var tfp = this.tfp;
			var has_fpdata = (this.waiting_for_fpdata==0);
			var has_tfpdata = (tfp.fpdata!='' && tfp.fpdata[0]!='-')?1:0;
			var has_ref = (tfp.origin!='')?1:0;
			this.tfp.need_fix = 0;
			for (var id in this.tfp.fixes) {
				var fix = this.tfp.fixes[id];
				var has_new_ref_fix = fix.ref && has_ref;
				var has_new_fix = ((fix.fpdata && has_fpdata) || (fix.tfpdata && has_tfpdata) || has_new_ref_fix);
				var has_missed_fix = ((fix.fpdata && !has_fpdata) || (fix.tfpdata && !has_tfpdata) || (fix.ref && !has_ref));
				if (has_new_fix && (unload || !has_missed_fix)) {
					var id_url = url + "&id=" + id;
					id_url += has_new_ref_fix ? this.ref_params(): fix.refs;
					if (typeof navigator.sendBeacon == "function") {
						navigator.sendBeacon(id_url);
					} else {
						var images_l = this.images.length;
						this.images[images_l] = new Image();
						this.images[images_l].src = id_url;
					}
					fix.fpdata &= !has_fpdata;
					fix.tfpdata &= !has_tfpdata;
					fix.ref &= !has_ref;
					if (!has_missed_fix) {
						delete this.tfp.fixes[id];
					}
				}
				if (id in this.tfp.fixes) {
					this.tfp.need_fix = 1;
				}
			}
		};
		this.set_tfp_origin = function(origin) {
			if (this.ref.frametype == 3) {
				this.ref.ref = origin;
				this.ref.topref = 1;
			}
			this.tfp.origin = origin;
		};
		this.has_tfp_answer = function() {
			return (this.ref.topref != 0) && (this.tfp.fpdata != "");
		};
		this.tfp_init = function() {
			if (window.self !== window.top && this.ref.frametype != 2) {
				try {
					var origins = document.location.ancestorOrigins;
					if (typeof origins != 'undefined') {
						this.set_tfp_origin(origins[origins.length-1]);
					}
				} catch(e) {};
				this.timeouts.tfpto = this.set_timeout(this.bind(this.tfp_timeout), 1000);
				this.waiting_for_tfp = 1;
				this.tfp.need_sync = 1;
				this.tfp.need_fix = 1;
				this.tfp_loop();
			}
		};
		this.tfp_pageshow = function() {
			if (this.timeouts.tfplto != null) {
				this.tfp.interval = 0.5;
				this.timeouts.tfplto.time = 0.5;
			}
		};
		this.tfp_loop = function() {
			if (this.tfp.need_sync) {
				if (this.tfp.origin=='') {
					window.top.postMessage("_xx_gemius_getref_xx_","*");
				}
				if (this.tfp.fpdata=='') {
					window.top.postMessage("_xx_gemius_gettfpdata_xx_/" + this.exid ,"*");
				}
				this.timeouts.tfplto = this.set_timeout(this.bind(this.tfp_loop), this.tfp.interval * 1000);
				if (this.tfp.interval < 8) {
					this.tfp.interval *= 2;
				}
				return;
			}
			this.timeouts.tfplto = null;
		};
		this.ghit = function(allowaddscript,vers,args,evid,hsrc,sonar) {
			if (args.length>0) {
				this.internal_hit(allowaddscript,vers,args[0],evid,"view",hsrc,sonar,this.array_to_string(args,1));
			}
		};
		this.gevent = function(allowaddscript,vers,args,evid,hsrc,sonar) {
			var pos = 0;
			var et = "view";
			if (args.length>1) {
				var m = (new String(args[0])).match('^_([a-zA-Z0-9]+)_$');
				if (m) {
					et = m[1];
					pos = 1;
				}
			}
			if (args.length>pos) {
				if (!args[pos] && this.event_identifier != null) {
					args[pos] = this.event_identifier;
				}
				if (args[pos]) {
					this.internal_hit(allowaddscript,vers,args[pos],evid,et,hsrc,sonar,this.array_to_string(args,pos+1));
				}
			}
		};
		this.addscripthit = function() { this.ghit(1,106,arguments,0,2,this.sonar_auto_init); };
		this.plainhit = function() { this.ghit(0,107,arguments,0,2,this.sonar_auto_init); };
		this.addscriptevent = function() { this.gevent(1,106,arguments,0,3,this.sonar_auto_init); };
		this.plainevent = function() { this.gevent(0,107,arguments,0,3,this.sonar_auto_init); };
		if (this.use_globals) {
			this.pendingdata = function(arr,fn) {
				var i;
				if (typeof window[arr] != 'undefined') {
					for (i=0 ; i<window[arr].length ; i++) {
						fn.apply(this,window[arr][i]);
					}
					window[arr]=[];
				}
			};
			this.sendpendingdata = function() {
				this.pendingdata('pp_gemius_hit_pdata',this.addscripthit);
				this.pendingdata('gemius_hit_pdata',this.plainhit);
				this.pendingdata('pp_gemius_event_pdata',this.addscriptevent);
				this.pendingdata('gemius_event_pdata',this.plainevent);
				this.pendingdata('gemius_shits',this.addscripthit);
				this.pendingdata('gemius_phits',this.plainhit);
				this.pendingdata('gemius_sevents',this.addscriptevent);
				this.pendingdata('gemius_pevents',this.plainevent);
				this.pendingdata('gemius_cmd_pdata',gemius_cmd);
			};
		}
		this.findvisapi = function() {
			var p = ['moz','webkit','ms','o'];
			var i;
			if (typeof document.hidden != 'undefined') {
				this.visapi_h = 'hidden';
				this.visapi_s = 'visibilityState';
				this.visapi_c = 'visibilitychange';
			} else {
				for (i in p) {
					if (typeof document[p[i]+'Hidden'] != 'undefined') {
						this.visapi_h = p[i]+'Hidden';
						this.visapi_s = p[i]+'VisibilityState';
						this.visapi_c = p[i]+'visibilitychange';
					}
				}
			}
		};
		this.chints_to_params = function(chints) {
// chints_params.js 
	var params = [];
	var skeys = {'architecture':'arch','platform':'pm','model':'model','platformVersion':'pver','bitness':'bits'};
	var bkeys = {'mobile':'mobile','wow64':'wow64'};
	for (var key in skeys) {
		if (key in chints) {
			var str = new String(chints[key]);
			if (str.length > 0) {
				params[params.length] = '_ch_'+skeys[key]+'='+str.substr(0,50);
			}
		}
	}
	for (var key in bkeys) {
		if (key in chints) {
			params[params.length] = '_ch_'+bkeys[key]+'='+(chints[key]?'1':'0');
		}
	}
	var brands = null;
	if (chints['fullVersionList'] instanceof Array) {
		brands = chints['fullVersionList'];
	} else if (chints['brands'] instanceof Array) {
		brands = chints['brands'];
	}
	if (brands && JSON && typeof JSON.stringify == 'function') {
		var str = JSON.stringify(brands);
		var re = new RegExp('^\\[|\\]$|"brand":|"version":', 'g');
		params[params.length] = '_ch_brands='+str.replace(re,'').substr(0,500);
	}
	return params;

		};
		this.chints_loaded = function(chints) {
			if (this.timeouts.chto != null) {
				this.timeouts.chto = null;
			}
			if (this.waiting_for_chints == 0) {
				return;
			}
			try {
				this.inner = this.inner.concat(this.chints_to_params(chints));
			} catch(e) {};
			this.waiting_for_chints = 0;
			this.latehits();
		};
		this.chints_failed = function() {
			if (this.timeouts.chto != null) {
				this.timeouts.chto = null;
			}
			this.waiting_for_chints = 0;
			this.latehits();
		};
		this.findchints = function() {
			if (typeof navigator.userAgentData == 'object' && typeof navigator.userAgentData.getHighEntropyValues == 'function') {
				try {
					var hints = ["architecture","model","platform","platformVersion","bitness","mobile","wow64","brands","fullVersionList"];
					navigator.userAgentData.getHighEntropyValues(hints).then(this.bind(this.chints_loaded),this.bind(this.chints_failed));
					this.timeouts.chto = this.set_timeout(this.bind(this.chints_failed),10000);
				} catch(e) {
					this.chints_failed();
				};
			} else {
				this.chints_failed();
			}
		};
		this.load_fpdata = function() {
			if (this.waiting_for_consent==0 && this.load_fpdata_started==0) {
				this.load_fpdata_started = 1;
				var domain = new String(document.location.hostname);
				var hcdomain = "hit.gemius.pl";
				if (domain == hcdomain || domain.substr(-hcdomain.length-1) == ("."+hcdomain)) {
					this.fpdata = '';
					this.fpcdomain = '';
					this.fpdata_loaded();
				} else {
					var url = (this.hssl?'https://':'http://')+this.hc+'/fpdata.js?href='+domain;
					url += this.is_gde?'&gde=1':'';
					this.timeouts.sto = this.set_timeout(this.bind(this.scriptto),10000);
					this.append_script(url,this.bind(this.fpdata_loaded),0);
				}
			}
		};
		this.load_lsdata = function() {
			if (this.waiting_for_consent==0 && this.load_lsdata_started==0) {
				this.load_lsdata_started = 1;
				if (this.ssl) {
					this.addframe(1,'get','',this.second_datareceiver);
				} else {
					this.addframe(0,'get','',this.first_datareceiver);
				}
			}
		};
		this.getchromever = function() {
			if (!!window.chrome && (typeof navigator.userAgent == 'string')) {
				var ver = navigator.userAgent.match(/(Chrom(e|ium)|CriOS)\/([0-9]+)\./);
				return (ver==null)?-1:parseInt(ver[3]);
			}
			return -1;
		};
		this.getanticache = function() {
			var dt = new Date();
			var v = new Date(dt.getFullYear(),dt.getMonth(),dt.getDate(),4).getTime()/(3600*1000);
			if (dt.getDay() != 0 || dt.getHours() >= 4) v += (7-dt.getDay())*24;
			return v;
		};
		this.gsconf_loaded = function() {
			if (typeof gemius_gsconf=="object" && gemius_gsconf!=null && gemius_gsconf.publishers && typeof this.src == 'string') {
				var url = new URL(this.src);
				url = url.origin + url.pathname.substr(0, url.pathname.lastIndexOf('/'));
				url += '/mgemius.js?gsver='+this.version+'&v='+this.getanticache();
				this.append_script(url,null,0);
			}
		};
		this.init_timeout = function() {
			if (this.timeouts.initto!=null) {
				this.timeouts.initto = null;
				this.init();
			}
		};
		this.gen_exid = function() {
			var refresh = !(this.exid == '');
			var ts = (new Date()).getTime();
			var exts = Math.floor(ts/1000).toString(16);
			var exrnd = Math.floor(Math.random()*1000000);
			var exuniqueid = ((ts%1000)*1000000 + exrnd).toString(16);
			this.exid = exts + Array(9-exuniqueid.length).join('0') + exuniqueid;
			if (refresh && this.is_gde) {
				this.sync_gde_params();
			}
		};
		this.add_gde_listener = function(callback) {
			this.gde_callbacks[this.gde_callbacks.length] = callback;
			try {
				callback(this.gde_params(), this.gde_params_ready);
			} catch (e) {}
		};
		this.gde_event = function(id) {
			if (this.has_consent && !this.gde_params_ready) {
				if (typeof id == 'string') {
					this.tfp_add_fix({"id":id, "refs":this.ref_params()});
				}
			}
		};
		this.gde_params = function() {
			var params = this.ref_params_obj();
			params.gde = 1;
			if (this.has_consent) {
				params.exid = this.exid;
				if (this.tfp.fpdata != '') {
					params.tfpdata = this.tfp.fpdata;
				}
				if (this.fpdata != '') {
					params.fpdata = this.getrawfpdata();
				}
				if (this.lsdata != '') {
					params.lsdata = this.lsdata;
				}
			}
			return params;
		};
		this.sync_gde_params = function() {
			this.gde_params_ready = (this.has_consent === false) || ((this.tfp.need_sync == 0) && (this.waiting_for_fpdata == 0) && (this.waiting_for_lsdata == 0));
			var params = this.gde_params();
			for (var i=0 ; i<this.gde_callbacks.length ; i++) {
				try {
					this.gde_callbacks[i](params, this.gde_params_ready);
				} catch (e) {}
			}
		};
		this.gde_init = function(params) {
			this.init(params);
		};
		this.init = function(params) {
			if (this.timeouts.initto!=null) {
				if (this.timeouts.initto.to!=null) {
					clearTimeout(this.timeouts.initto.to);
				}
				this.timeouts.initto = null;
			}
			if (this.init_called) {
				return;
			}
			this.init_called = 1;
			if (typeof params == 'object') {
				this.init_params(params);
			} else {
				params = {};
			}
			this.timer_data["lasttime"] = ((new Date()).getTime());
			this.timer_data["tint"] = setInterval(this.bind(this.timer),60*1000);
			if (this.dnt==0 && this.explicit_consent!==false) {
				this.getfpcookie();
				this.waiting_for_fpdata = ((this.fpdata.length>0 && this.fpdata[0]=='-') || this.fpdata=='')?1:0;
			} else {
				this.waiting_for_fpdata = 1;
				this.fpdata = "-DNT";
			}
			try {
				if (this.dnt==0 && this.explicit_consent!==false) {
					this.waiting_for_lsdata = (typeof window.postMessage != 'undefined' && typeof localStorage != 'undefined' && localStorage != null)?1:0;
					if (this.waiting_for_lsdata==0) {
						this.lsdata='-NOTSUP';
					}
				} else {
					this.waiting_for_lsdata = 1;
					this.lsdata = "-DNT";
				}
			} catch (e) {
				this.waiting_for_lsdata = 0;
				this.lsdata='-TURNEDOFF';
			}
			this.require_consent_info = 0;
			if (this.dnt==0 && this.explicit_consent!==false) {
				if (this.explicit_consent===null && this.use_cmp && (typeof gemius_cmpclient == "object") && gemius_cmpclient.find_cmp()) {
					this.cmp_found = 1;
					if (this.cmp_timeout==Infinity) {
						this.require_consent_info = 1;
					} else {
						this.timeouts.cmpto = this.set_timeout(this.bind(this.consentto),this.cmp_timeout);
					}
					gemius_cmpclient.get_consent(this.bind(this.consent_loaded),this.cmp_purposes());
				} else if (this.explicit_consent===null && this.gdpr_params() != '') {
					this.gdpr_found = 1;
					this.timeouts.cmpto = this.set_timeout(this.bind(this.consentto),10000);
					var url = (this.hssl?'https://':'http://')+this.hc+'/gdprdata.js' + this.gdpr_params(true);
					url += this.is_gde?'&gde=1':'';
					this.append_script(url,this.bind(this.gdprdata_loaded),0);
				} else {
					this.waiting_for_consent = 0;
					this.has_consent = true;
					if (this.waiting_for_fpdata) {
						this.load_fpdata();
					}
					if (this.waiting_for_lsdata) {
						this.load_lsdata();
					}
				}
			} else {
				this.waiting_for_consent = 0;
				this.has_consent = false;
				this.waiting_for_fpdata = 1;
				this.fpdata = "-DNT";
			}
			this.paramsready();
			this.latehits();
			this.add_event(document,"mousedown",this.bind(this.mousedown));
			if (this.use_globals) {
				gemius_hit = this.bind(this.plainhit);
				gemius_event = this.bind(this.plainevent);
				pp_gemius_hit = this.bind(this.addscripthit);
				pp_gemius_event = this.bind(this.addscriptevent);
				var p = params;
				if (typeof p['identifier'] == 'undefined' && typeof gemius_identifier == 'undefined' && typeof pp_gemius_identifier == 'undefined') {
					this.sonar_auto_init = (typeof p['sonar_auto_init_disabled'] == 'boolean')?(p['sonar_auto_init_disabled']?0:1):(typeof gemius_sonar_auto_init_disabled == 'boolean')?(gemius_sonar_auto_init_disabled?0:1):(typeof pp_gemius_sonar_auto_init_disabled == 'boolean')?(pp_gemius_sonar_auto_init_disabled?0:1):1;
				}
				try {
					if (typeof gemius_loaded != "undefined") {
						gemius_loaded();
					} else if (typeof pp_gemius_loaded != "undefined") {
						pp_gemius_loaded();
					}
				} catch (e) {}
				this.event_identifier = (typeof p['identifier'] != 'undefined')?p['identifier']:(typeof gemius_identifier != 'undefined')?gemius_identifier:(typeof pp_gemius_identifier != 'undefined')?pp_gemius_identifier:this.event_identifier;
				if (typeof gemius_init_pageview != "undefined") {
					for (var i=0 ; i<gemius_init_pageview.length ; i++) {
						gemius_init_pageview[i](params);
					}
				}
				this.sendpendingdata();
			}
			this.send_bfview();
		};
		this.start = function() {
			if (this.started) {
				return;
			}
			this.started = true;
			if (this.use_globals) {
				gemius_init = this.bind(this.init);
				pp_gemius_init = this.bind(this.init);
				gemius_close = this.bind(function() { this.closing = 1; });
			}
			this.getdntcookie();
			this.getfpcap();
			this.hssl = (this.ssl||this.getchromever()>=67)?1:0;
			this.flashv = this.getflashv();
			this.waiting_on_prerender = 0;
			this.findchints();
			this.findvisapi();
			if (this.visapi_s != '') {
				if (document[this.visapi_s] == 'prerender') {
					this.waiting_on_prerender = 1;
				}
				this.add_event(document,this.visapi_c,this.bind(this.visibilitychanged));
			}
			this.gen_exid();
			if ('onpagehide' in window) {
				this.onpagehide = true;
				this.add_event(window,"pagehide",this.bind(this.pagehide));
				this.add_event(window,"pageshow",this.bind(this.pageshow));
			} else {
				this.add_event(window,"unload",this.bind(this.unload, true));
				this.add_event(window,"beforeunload",this.bind(this.unload, true));
			}
			this.add_event(window,'message',this.bind(this.msgreceiver));
			this.frametype_init();
			this.ref_update();
			this.tfp_init();
			if (this.use_globals) {
				this.pendingdata('gemius_init_pdata',this.init);
				this.pendingdata('pp_gemius_init_pdata',this.init);
				if (!this.init_called) {
					var timeout = (typeof gemius_init_timeout == 'number')?gemius_init_timeout:(typeof pp_gemius_init_timeout == 'number')?pp_gemius_init_timeout:null;
					if (typeof timeout == 'number') {
						if (timeout == Infinity) {
							this.require_consent_info = 1;
						} else {
							this.timeouts.initto = this.set_timeout(this.bind(this.init_timeout),timeout);
						}
					} else {
						gemius_init();
					}
				}
			} else {
				this.require_consent_info = 1;
			}
		};
	}
	/** @define {number} */
	GemiusHitcolConnector.min = 0;
}


(function(name, cmds,flag) {
	var exists = name in window;
	if (!exists) {
		window[name] = new GemiusHitcolConnector(flag);
	}
// gcmd.js 
function define_gemius_cmd(conn_name, cmds) {
	var conn = window[conn_name];
	if (typeof gemius_cmd == 'undefined' || !('_' in gemius_cmd)) {
		gemius_cmd = function() {
			if (!arguments.length || typeof arguments[0] != 'string') {
				return;
			}
			var cmd = arguments[0];
			if (cmd in gemius_cmd) {
				var args = [];
				for (var i = 1; i < arguments.length; ++i) {
					args[args.length] = arguments[i];
				}
				return gemius_cmd[cmd].apply({}, args);
			}
		}
		gemius_cmd._ = 1;
	}
	for (var cmd in cmds) {
		gemius_cmd[cmd] = conn.bind(conn[cmds[cmd]]);
	}
	if (typeof pp_gemius_cmd == 'undefined' || !('_' in pp_gemius_cmd)) {
		pp_gemius_cmd = gemius_cmd;
	}
}
	define_gemius_cmd(name,cmds);
	if (!exists) {
		window[name].start();
	}
})('gemius_hcconn', {'referrer_override':'referrer_override'});
