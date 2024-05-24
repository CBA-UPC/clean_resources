/*
 Theme Name:   Twenty Twenty Child
 Theme URI:    http://example.com/twenty-twenty-child/
 Description:  Twenty Twenty Child Theme
 Author:       John Doe
 Author URI:   http://example.com
 Template:     twentytwenty
 Version:      1.0.0
 License:      GNU General Public License v2 or later
 License URI:  http://www.gnu.org/licenses/gpl-2.0.html
 Tags:         light, dark, two-columns, right-sidebar, responsive-layout, accessibility-ready
 Text Domain:  twentytwentychild
*/

@font-face {
    font-family: "Proxima Nova BD";
    src: url(fonts/Proxima-Nova-Bold.otf);
    font-weight: normal;
    font-display: swap;
  }
  
  @font-face {
    font-family: "Proxima Nova";
    src: url(fonts/ProximaNova-Regular.otf);
    font-weight: normal;
    font-display: swap;
  }
  
  @font-face {
    font-family: "Glyphicons Halflings";
    src: url(../twentytwenty/assets/fonts/glyphicons-halflings-regular.ttf);
    font-weight: normal;
    font-display: swap;
  }
  
body {
    font-family: "Proxima Nova" !important;
    font-size: 16px;
    letter-spacing: 0.1rem !important;
  }

  div#contact-us {
        position: absolute;
        right: 0;
        top: 5px;
        /* background-color: #4472C4;
        color: #ffffff; */
        
        cursor: pointer;
    }

    .header-contact{
        display: none;
    }

    div#contact-us a > span{
        padding: 5px 10px;
    }
  .header-inner .toggle{
    padding: 4rem 2rem 0 2rem;
    align-items: unset;
  }
  
  article.page > header {
    display: none;
  }
  
  article.post > header > .entry-header-inner > .entry-categories {
    display: none;
  }
  
  article.post > nav.pagination-single.section-inner {
    display: none;
  }
  
  .post-inner > .entry-content > p {
    width: 70% !important;
    max-width: none !important;
  }
  
  .post-inner > .entry-content > div#dpsp-content-top {
    max-width: none;
    width: 70%;
  }
  
  a {
    color: #4d7dff;
  }
  
  h1 {
    font-size: 64px;
    letter-spacing: 1rem;
  }
  
  h2 {
    font-size: 36px;
    letter-spacing: 0.5rem;
    font-weight: 500;
  }
  
  h3 {
    font-size: 24px;
    letter-spacing: 1px;
    font-weight: 600;
  }
  
  h4 {
    font-size: 18px;
    letter-spacing: 0.2rem;
    font-weight: 300;
  }
  
  header#site-header {
    background-color: #002149;
    /*border-bottom: 2px solid #000;*/
  }
  
  .entry-content {
    font-family: "Proxima Nova" !important;
  }
  
  ul.primary-menu {
    letter-spacing: 0.1rem;
    margin-right: 75px;
  }
  
  .primary-menu ul::before,
  .primary-menu ul::after {
    content: none;
  }
  
  .primary-menu > li > .icon {
    display: none;
  }
  
  .primary-menu > li.menu-item-has-children > a {
    padding-right: 0;
    cursor: pointer;
  }
  
  .primary-menu li > a:hover,
  .primary-menu li > .link-icon-wrapper > a:hover {
    text-decoration: underline;
  }
  .primary-menu li > a,
  .primary-menu li > .link-icon-wrapper > a {
    text-decoration: none;
    color: #ffffff !important;
    text-transform: uppercase;
    font-size: 14px;
    cursor: pointer;
  }
  
  .primary-menu li.current-menu-item > a:hover,
  .primary-menu li.current-menu-item > .link-icon-wrapper > a:hover {
    text-decoration: underline;
  }
  .primary-menu li.current-menu-item > a,
  .primary-menu li.current-menu-item > .link-icon-wrapper > a {
    text-decoration: none;
    color: #ffffff !important;
    text-transform: uppercase;
    font-size: 14px;
  }
  
  .primary-menu a:hover,
  .primary-menu a:focus,
  .primary-menu .current_page_ancestor {
    text-decoration: none;
  }
  
  .primary-menu ul {
    background-color: #002149 !important;
    border-radius: 0%;
    top: calc(100% + 0.4rem);
    margin-right: -8vw;
    z-index: 10;
  }

  .primary-menu > li:last-of-type {
    margin-right: 100px;
    }
  
  hr.newsroom.footer {
    background: linear-gradient(to right, #d459d4, #4d7dff);
    height: 10px;
    margin: 0;
    margin-top: 50px;
  }
  
  hr.post.footer {
    background: linear-gradient(to right, #d459d4, #4d7dff);
    height: 10px;
    margin: 0;
    margin-top: 50px;
    border: none;
  }
  
  h1.entry-title {
    font-size: 26px;
  }
  
  .post h1.entry-title {
    font-size: 36px;
    text-align: left;
    letter-spacing: 5px;
    line-height: 46px;
  }
  
  .post .section-inner.medium {
    max-width: 70%;
  }
  
  .footer-news {
      margin-bottom: 20px;
  }
  
  .footer-news img{
      display: inline;
  }
  
  .footer-nav-widgets-wrapper.header-footer-group {
    border: 0;
    margin-top: 0;
  }
  
  .footer-widgets > .widget_text.widget.widget_custom_html {
    margin-top: 0;
  }
  
  .footer-widgets > .widget.widget_media_image {
    margin-top: 0;
  }
  
  .widget_text p,
  .widget_text ol,
  .widget_text ul,
  .widget_text dl,
  .widget_text dt,
  .widget-content .rssSummary {
    font-family: "Proxima Nova";
    font-size: 16px;
    line-height: 25.6px;
  }
  
  .widget_text h4 {
    font-weight: 700;
    font-size: 16px;
    color: #333e48;
  }
  
  .footer-widgets.column-one.grid-item {
    width: 25%;
  }
  
  .footer-widgets.column-two.grid-item {
    width: 50%;
  }
  
  .footer-widgets.column-three.grid-item {
    width: 30%;
    text-align: center;
  }
  
  .footer-widgets.grid-item:not(:first-child) {
    margin-left: 0;
  }
  
  .social-icons a {
    background-color: #ffffff;
    color: #000000;
  }
  
  .footer-menu {
    list-style-type: none;
    margin: 0;
    padding: 0;
    font-size: 14px;
  }
  
  .footer-menu > .menu-item {
    padding-left: 50px;
    padding-bottom: 30px;
    margin: 0 !important;
  }
  
  .footer-menu > .menu-item > a {
    width: 100%;
    height: 30px;
    letter-spacing: -0.03em;
    color: #000;
    display: inline-block;
    text-decoration: none;
    position: relative;
    font-family: "Proxima Nova BD";
    line-height: 22.4px;
  }
  
  .footer-menu .sub-menu {
    list-style-type: none;
    padding: 0;
  }
  
  .footer-menu .sub-menu > .menu-item {
    margin-top: 0px;
    position: relative;
    margin-left: 0px;
    margin-bottom: 10px;
  }
  
  .footer-menu .sub-menu > .menu-item a {
    color: #333e48;
    opacity: 0.6;
    text-decoration: none;
    font-weight: normal;
    letter-spacing: 0.1rem;
    cursor: pointer;
  }
  
  .footer-inner.section-inner {
    max-width: none;
  }
  
  .footer-inner span.description {
    color: #333e48;
    opacity: 0.6;
  }
  
  .button-border {
    padding: 1em !important;
    border: 1em solid transparent !important;
    color: #000000 !important;
    transition: all 0.6s;
    background: linear-gradient(20deg, #ffffff, #ffffff) !important;
    /*background: linear-gradient(#ffffff, #ffffff)
                  padding-box,
                  repeating-linear-gradient(-45deg,
                  #f69ec4 0, #f69ec4 12.5%,
                  transparent 0, transparent 25%,
                  #7eb4e2 0, #7eb4e2 37.5%,
                  transparent 0, transparent 50%)
                  0 / 5em 5em !important;*/
  }
  
  .button-border:hover {
    padding: 1em !important;
    border: 1em solid transparent !important;
    color: #ffffff !important;
    transition: all 0.6s;
    background: linear-gradient(90deg, #00ad68, #48a9bf) !important;
    /*background: linear-gradient(to right, #00AD68, #48A9BF)
                  padding-box,
                  repeating-linear-gradient(-45deg,
                  #f69ec4 0, #f69ec4 12.5%,
                  transparent 0, transparent 25%,
                  #7eb4e2 0, #7eb4e2 37.5%,
                  transparent 0, transparent 50%)
                  0 / 5em 5em !important;*/
  }
  
  .swiper-slide img {
    filter: grayscale(100%);
  }
  
  .swiper-slide img:hover {
    filter: none;
  }
  
  section {
    padding: 0 !important;
  }
  
  .ut-btn a {
    background-image: linear-gradient(
      315deg,
      #ff0d36 0%,
      #d659d6 48.7%,
      #4d7dff 100%
    );
    padding: 2px 2px 2px 2px;
    border-radius: 13px;
    font-size: 14px;
    text-decoration: none;
    font-family: "Proxima Nova" !important;
    font-weight: bold !important;
    letter-spacing: 1px;
    z-index: 100;
  }
  
  .ut-btn.orange-blue a {
    background-image: linear-gradient(to right, #ff800a, #4d7dff);
  }

  .ut-btn.blue a {
    background-image: linear-gradient(
        315deg,
        #d659d6 0%,
        #4d7dff 100%
      );
  }
  
  .ut-btn a > span {
    background: #fff;
    color: #000000;
    padding: 17px 25px 17px 25px;
    border-radius: 10px;
    font-size: 16px;
    z-index: 100;
  }
  
  .ut-btn a > span > span {
      z-index: 100;
  }
  
  .ut-btn.dark-blue a > span {
    background: #002149;
    color: #ffffff;
  }
  
  .ut-btn.light-gray a > span {
    background: #f2f4f6;
    color: #000000;
  }
  
  .ut-btn.big a > span {
    padding: 16px 40px 16px 40px;
  }
  
  /*.ut-btn a > span > span::after{
      font-family: 'Glyphicons Halflings';
      content: " \e092";
      vertical-align: -15%;
  }*/
  
  @media (hover: hover) {
    .ut-btn a:hover > span {
      border-radius: 13px;
      background-image: linear-gradient(
        315deg,
        #ff0d36 0%,
        #d659d6 48.7%,
        #4d7dff 100%
      );
      color: #ffffff;
      padding: 17px 25px 17px 25px;
    }
  
    .ut-btn.orange-blue a:hover > span {
      background-image: linear-gradient(to right, #ff800a, #4d7dff);
    }

    .ut-btn.blue a:hover > span {
        background-image: linear-gradient(
            315deg,
            #d659d6 0%,
            #4d7dff 100%
          );
      }
  
    .ut-btn.big a:hover > span {
      padding: 16px 40px 16px 40px;
    }
  }
  
  .ut-btn input[type="checkbox"] {
    display: inline-block !important;
    border-color: #7a7a7a;
    outline: none;
  }
  
  .ut-btn button {
    background-image: linear-gradient(to right, #d459d4, #4d7dff);
    padding: 2px 2px 2px 2px;
    border-radius: 13px;
    font-size: 14px;
    text-decoration: none;
    font-family: "Proxima Nova" !important;
    font-weight: bold !important;
    letter-spacing: 1px;
    min-width: 130px;
    min-height: 34px !important;
  }
  
  .ut-btn button > span {
    background: #fff;
    color: #000000;
    padding: 7px 45px 7px 45px;
    border-radius: 10px;
  }
  
  .ut-btn button:hover > span {
    border-radius: 13px;
    background-image: linear-gradient(to right, #d459d4, #4d7dff);
    color: #ffffff;
    padding: 7px 45px 7px 45px;
  }
  
  .fa-angle-right:before {
    content: "\f138";
    /*background: -webkit-gradient(linear, left top, right bottom, from(#00AD68), to(#48A9BF));*/
    background-color: #ff800a;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: initial;
    font-size: 30px;
  }
  
  .fa-angle-left:before {
    content: "\f137";
    /*background: -webkit-gradient(linear, left top, right bottom, from(#00AD68), to(#48A9BF));*/
    background-color: #ff800a;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: initial;
    font-size: 30px;
  }
  
  .fa,
  .fas {
    background-color: #fff;
    border-radius: 20px;
  }
  
  .pp-info-box-icon img {
    filter: none;
    height: 115px;
  }
  
  .creative .filter-ddl {
    flex: 0 0 31.7%;
    padding: 0;
    margin: 0 0.8%;
  }
  
  .creativeCard {
    position: relative;
    width: 23.4%;
    display: inline-flex;
    margin: 0 0.8% 16px;
  }
  
  .creativeCard > .image {
    opacity: 1;
    display: block;
    width: 100%;
    height: 417px;
    transition: 0.5s ease;
    backface-visibility: hidden;
    border-radius: 20px;
  }
  
  .creativeCard > .middle {
    transition: 0.5s ease;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    text-align: center;
    height: 100%;
    width: 100%;
  }
  
  .creativeCard > .middle > .text {
    height: 100%;
    position: relative;
    padding: 0 10px;
  }
  
  .creativeCard p {
    font-size: 24px;
    color: #ffffff;
    margin-top: 0 10px;
  }
  
  .creativeCard p.title {
    margin-top: 30%;
  }
  
  .creativeCard p.tags {
    font-size: 18px;
    font-weight: 700;
    opacity: 1;
    margin-top: 17px;
  }
  
  .creativeCard #gotoproject {
    position: absolute;
    bottom: 27px;
    right: calc((100% - 230px) / 2);
  }
  
  .creativeCard:hover .image {
    opacity: 0.1;
  }
  
  .creativeCard:hover .middle {
    opacity: 1;
  }
  
  .creativeCard:hover {
    background: linear-gradient(to right, #d459d4, #ff0d36);
    border-radius: 20px;
  }
  
  #response.creative {
    /*height: calc(100% - 330px);*/
    /*overflow: hidden;*/
    /*text-align: center;*/
    color: #ffffff
  }

  .creative .noResults{
    text-align: center;
    margin: 20px auto;
  }

  .creative span.more {
    display: block;
    text-align: center;
    font-weight: normal;
    margin: 25px auto;
}
  
  #response.creative > .article {
    /*width: 300px;
        height: 400px;*/
    border-radius: 20px;
    -webkit-box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);
    background-color: #f6f6f6;
    display: inline-block;
    width: 25%;
    vertical-align: top;
    /*margin-left: 63px;*/
    margin-right: 60px;
    margin-bottom: 90px;
    padding: 32px 27px 28px 27px;
    height: 450px;
    color: #333e48;
    overflow: hidden;
    text-align: left;
  }
  
  #response.creative > .hide {
    opacity: 0.5;
    -webkit-mask-image: -webkit-gradient(
      linear,
      0% 60%,
      0% 100%,
      from(rgb(0, 0, 0)),
      to(rgba(0, 0, 0, 0))
    );
    pointer-events: none;
  }
  
  section.creative.banner {
    background-color: #002149;
    padding: 0px 0px 80px 0px !important;
  }
  
  section.creative.banner h1 {
    margin: 10% 0 0 15%;
    text-align: left;
    letter-spacing: 1rem;
    background: -webkit-linear-gradient(0deg, #d459d4, #ff0d36);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  main#site-content.creative {
    background-color: #002149;
  }
  
  hr.creative.footer {
    background: linear-gradient(to right, #d459d4, #ff0d36);
    height: 10px;
    margin: 0;
    margin-top: 50px;
    border: none;
  }
  
  .flickity-page-dots .dot.is-selected {
    background: #ff0d36;
  }
  
  .flickity-page-dots .dot {
    background: #cccccc;
    opacity: 1;
  }
  
  .carousel-cell {
    width: 100%;
    margin-right: 10px;
    border-radius: 5px;
    counter-increment: carousel-cell;
  }
  
  section.creative.banner h3 {
    font-size: 16px;
    margin: 50px 0 0 15%;
    font-weight: normal;
    text-align: initial;
  }
  
  img.creativeLogoBack2 {
    position: absolute;
    margin-top: -450px;
  }
  
  img.creativeLogoBack1 {
    position: absolute;
  }
  
  /* img.creativeLogo {
    position: absolute;
    width: 750px;
    right: 15%;
    top: 50px;
  } */
  
  .creativeCard #gotoproject a {
    background: unset;
  }
  
  .creativeCard #gotoproject a > span {
    background: unset;
    border: solid 1px #fff;
    border-radius: 20px;
    color: #fff;
  }
  
  .creativeCard #gotoproject:hover a > span {
    background: #fff;
    color: #ea3385;
  }
  
  section.project.banner {
    background-color: #002149;
    padding: 0px 0px 80px 0px !important;
  }
  
  section.project.banner h1 {
    width: 500px;
    letter-spacing: 1rem;
    background: -webkit-linear-gradient(0deg, #d459d4, #ff0d36);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  main#site-content.project {
  }
  
  section.project.description {
    margin-top: 80px;
  }
  
  .project .description > .container > .row > .seperate {
    border-right: solid 1px;
  }
  
  section.project.banner img {
    margin-left: auto;
    margin-right: auto;
  }
  
  section.project.banner .fas {
    background-color: unset;
    margin-right: 10px;
  }
  
  section.project.banner a {
    color: #fff;
    text-decoration: none;
  }
  
  section.project.banner .back {
    margin-bottom: 10px;
    padding-top: 60px;
  }
  
  section.project.description .example {
    margin-top: 80px;
  }
  
  section.project.description .example img {
    margin-left: auto;
    margin-right: auto;
  }
  
  #response.project img {
    display: inline-block;
  }
  
  .project p.format {
    font-size: 12px;
    opacity: 0.8;
  }
  
  .project p.title {
    font-size: 16px;
    font-weight: 600;
  }
  
  .project p.description {
    font-size: 14px;
    opacity: 0.8;
  }
  
  .creative .carousel {
    color: #ffffff;
    font-weight: 600;
  }
  
  .project span.more {
    font-size: 24px;
    font-weight: 600;
    margin-left: 15px;
  }
  
  section.newsroom.banner {
    background: linear-gradient(
        to top left,
        #547bfd,
        rgba(178, 105, 157, 0),
        #ef727f
      ),
      linear-gradient(to top right, #bd53f3, rgba(178, 105, 157, 0), #fe800a)
        rgba(178, 105, 157, 1);
    padding: 61px 0px 132px 0px !important;
  }
  
  section.newsroom.banner h3 {
    margin-top: 0;
    font-weight: normal;
  }
  
  div.banner {
    text-align: center;
    color: #ffffff;
  }
  
  #response.newsroom > .article {
    border-radius: 20px;
    -webkit-box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);
    background-color: #f6f6f6;
    width: 43%;
    vertical-align: top;
    margin-right: 7%;
    margin-bottom: 80px;
    padding: 32px 27px 28px 27px;
    color: #333e48;
    text-align: left;
    position: relative;
  }
  
  #response.newsroom > .hide {
    height: 70px;
    -webkit-mask-image: -webkit-gradient(
      linear,
      0% 0%,
      0% 100%,
      from(rgb(0, 0, 0)),
      to(rgba(0, 0, 0, 0))
    );
  }
  
  .category-filter-container {
    max-width: none;
    flex: 0 0 30%;
    padding: 0;
  }
  
  .category-filter {
    border-radius: 20px;
    -webkit-box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);
    background-color: #002149;
    padding: 29px 33px 51px 33px;
    color: #ffffff;
  }
  
  .category-post {
    max-width: none;
    flex: 0 0 70%;
    padding: 0;
  }
  
  .creative .category-post {
    flex: 0 0 100%;
    margin-top: 28px;
  }
  
  select.filterByTag {
      width: 100%;
      height: 48px;
      padding: 10px;
      background-color: #002149;
      color: #ffffff;
      border-color: #ffffff;
      border-radius: 5px;
      border: 1px solid;
      margin: 0;
  }
  
  select.filterByTag option {
    font: -moz-pull-down-menu;
    font-size: inherit;
  }
  
  .category-filter > hr {
    margin: inherit;
    margin-top: 25px;
    margin-bottom: 25px;
    opacity: 50%;
  }
  
  .category-filter > h3 {
      text-align: left;
    margin-top: 15px;
    margin-bottom: 15px;
  }
  
  .category-filter > .module-border-wrap > #customerQuote {
    padding: 10px 15px;
  }
  
  .category-filter > .module-border-wrap {
    border: solid 5px transparent;
    border-radius: 10px;
    background-image: linear-gradient(#002149, #002149),
      linear-gradient(267.2deg, #ff800a 2.33%, #d659d5 48.95%, #4d7dff 97.56%);
    background-origin: border-box;
    background-clip: content-box, border-box;
  }
  
  img#open-quote,
  img#close-quote {
    height: 25px;
  }
  
  input#field-email {
      background: unset;
    background-color: #002149 !important;
    border-radius: 5px;
    border-width: 2px;
    color: white;
    font-size: 18px;
    font-family: "Proxima Nova";
    padding: 10px 60px 10px 20px;
  }
  
  input#field-email-mobile {
    background-color: #ffffff;
    border-radius: 5px;
    border-width: 2px;
    color: white;
    font-size: 18px;
    font-family: "Proxima Nova";
    padding: 10px 60px 10px 20px;
  }
  
  #customerQuote p#quote {
    padding-top: 5px;
    font-size: 15px;
    margin-bottom: 0;
  }
  
  img#close-quote {
    float: right;
  }
  
  div#quoter {
    color: #ffffff;
    margin-top: 2.5rem;
  }
  
  p#auther {
    font-size: 18px;
    font-style: italic;
    letter-spacing: 3px;
    margin-bottom: 5px;
  }
  
  p#position {
    font-size: 13px;
    margin: 0;
  }
  
  #follow-desktop > hr {
    margin: 30px 0;
    opacity: 50%;
  }
  
  #follow-desktop > h3 {
      text-align: left;
    margin-top: 0;
    margin-bottom: 20px;
  }
  
  input#submit-email {
    background-image: url(/wp-content/uploads/2020/12/send.png);
    background-color: #002149;
    height: 1px;
    position: relative;
    left: calc(100% - 51px);
    bottom: 42px;
    background-size: 20px;
    background-repeat: no-repeat;
    background-position: center;
  }
  
  input#submit-email:focus {
    outline: none;
  }
  
  input#submit-email::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: red;
    opacity: 1; /* Firefox */
  }
  
  input#submit-email:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: red;
  }
  
  input#submit-email::-ms-input-placeholder {
    /* Microsoft Edge */
    color: red;
  }
  
  #keepContact {
    height: 56px;
  }
  
  #keepContact > input[type="text"] {
    display: inline;
  }
  
  div#follow-desktop {
    display: block;
  }
  
  div#follow-mobile {
    display: none;
    text-align: center;
  }
  
  input#submit-email-mobile {
    background-image: url(/wp-content/uploads/2020/12/send.png);
    background-color: #ffffff;
    height: 1px;
    position: relative;
    left: 43%;
    bottom: 42px;
    background-size: 20px;
    background-repeat: no-repeat;
    background-position: center;
  }
  
  .posts > .container {
    max-width: 1186px;
    margin-top: 55px;
  }
  
  .creative .posts > .container {
    margin-top: 0;
  }
  
  .post-header > h3 {
    text-align: left;
    margin-top: 0px;
    margin-bottom: 20px;
  }
  
  .post-content > p {
    height: 315px;
    overflow: hidden;
    opacity: 80%;
    margin-bottom: 50px;
  }
  
  p.date {
    margin: 0px;
    font-size: 15px;
  }
  
  p.tags {
    display: inline-block;
    font-size: 12px;
    font-weight: normal;
    opacity: 0.8;
  }
  
  img.tag {
    display: inline;
    width: 15px;
    margin-right: 10px;
  }
  
  .post-content > a {
    color: #333e48;
    text-decoration: none;
    font-weight: 600;
    font-size: 18px;
    position: absolute;
    bottom: 28px;
  }
  
  .article.hide .post-content > a {
    position: inherit;
  }
  
  .social > a {
    color: #ffffff;
    margin-right: 25px;
  }
  
  .social > a > i {
    font-size: 30px;
  }
  
  .post-content > a > i {
    background-color: #f6f6f6;
  }
  
  .creative #loadmore {
    padding-right: 0;
  }
  
  #loadmore {
      margin-top: 30px;
    text-align: center;
    padding-right: 7%;
    z-index: 100;
  }
  
  #response.newsroom {
    text-align: center;
    display: flex;
    flex-flow: row wrap;
    z-index: -1;
  }
  
  .hider {
    position: absolute;
    width: 100%;
    height: 70px;
    background: #ffffff;
    bottom: 667px;
    opacity: 85%;
  }
  
  /* .row.center {
    padding-right: 10%;
  } */
  
  /********** Careers Page ***********/
  
  /**********************************/
  @media only screen and (max-width: 768px) {
    div#contact-us {
        display: none;
    }

    .header-contact{
        display: inline;
    }
  }

  @media only screen and (max-width: 768px) {
    .creative .filter-ddl {
        flex: 0 0 90%;
        padding: 0;
        margin: 5px auto;
    }

    .toggle-icon:before {
      font-family: "Font Awesome 5 Free";
      content: "\f0c9";
      font-size: 28px;
      font-weight: 900;
      color: #fff;
    }
  
    .nav-toggle .toggle-inner {
      padding-top: 0;
    }
  
    .toggle-inner .toggle-icon {
      color: #fff;
      height: 35px;
    }
  
    .toggle-inner .toggle-text {
      color: #fff;
      display: none;
    }
  
    .menu-top button {
      outline: none;
    }
    button.nav-toggle {
      outline: none;
    }
  
    button.toggle.sub-menu-toggle {
      color: #fff !important;
    }
  
    .flickity-viewport {
      height: 200px !important;
    }
  
    .creative .banner .flickity-viewport {
      height: 620px !important;
    }
  
    #response.project {
      text-align: center;
    }
  
    section.project.banner a {
      display: none;
    }
  
    .project p.format {
      text-align: center;
      font-size: 20px;
    }
  
    .project p.title {
      text-align: center;
      font-size: 30px;
    }
  
    .project p.description {
      text-align: center;
      font-size: 18px;
    }
  
    .gotodemo.mobile {
      display: block !important;
    }
  
    .project #gotodemo {
      text-align: center;
      margin-top: 50px;
    }
  
    section.project.description .example {
      margin-top: 20px;
    }
  
    .carousel-control-next {
      display: none;
    }
  
    .carousel-control-prev {
      display: none;
    }
  
    .carousel {
      text-align: center;
    }
  
    section.project.description {
      margin-top: 30px;
    }
  
    .gotodemo.desktop {
      display: none;
    }
  
    .creative.row.desktop {
      display: none;
    }
    .creativeCard > .middle {
      display: none;
    }
    .creativeCard > .mobile {
      display: block !important;
    }
    .creativeCard > .mobile p.tags {
      position: absolute;
      bottom: 55px;
      left: 15px;
      opacity: 0.8;
      font-size: 20px;
    }
    .creativeCard > .mobile p.title {
      position: absolute;
      bottom: -15px;
      left: 15px;
      width: 70%;
      height: 65px;
      font-size: 25px;
    }
    .creativeCard > .mobile a.creativeBtn {
      position: absolute;
      right: 15px;
      bottom: 40px;
      width: 55px;
      text-align: center;
      border: solid 1px #fff;
      padding: 10px;
      color: #fff;
    }
  
    .creativeCard > .mobile a.creativeBtn > .fas {
      background-color: unset;
    }
    .creativeCard > .image {
      -webkit-mask-image: -webkit-gradient(
        linear,
        center bottom,
        center top,
        color-stop(0, rgba(0, 0, 0, 0)),
        color-stop(1, rgba(0, 0, 0, 1))
      );
    }
    .creativeCard:hover .image {
      opacity: 1;
    }
  
    .creativeCard:hover {
      background: unset;
      border-radius: 20px;
    }
  
    .creative.row.mobile {
      display: flex !important;
    }
    .creativeCard {
      width: 90%;
      margin-bottom: 50px;
      text-align: left;
    }
    img.creativeLogo {
      width: 345px;
      margin-left: auto;
      margin-right: auto;
      margin-top: 50px;
    }
    img.creativeLogoBack2 {
      margin-top: 0px;
      width: 95%;
      height: 100%;
      z-index: -1;
    }
  
    .creative .flickity-page-dots {
      bottom: 45px;
    }
  
    section.posts {
      margin-top: -54px;
    }
  
    hr.newsroom.footer {
      margin-top: 0px;
    }
  
    section.newsroom.banner {
      padding: 40px 0px 73px 0px !important;
    }
  
    .newsroom .banner h1 {
      font-size: 46px;
      letter-spacing: 5px;
    }
  
    .newsroom .banner h3 {
      font-size: 16px;
      padding-left: 20px;
      padding-right: 20px;
    }
  
    .category-filter > h3 {
      text-align: center;
    }
  
    .category-filter > h3:first-of-type {
      display: none;
    }
  
    section.creative.banner h3 {
      font-size: 16px;
      background: unset;
      -webkit-text-fill-color: unset;
      width: 100%;
      padding-left: 20px;
      padding-right: 20px;
      padding-top: 20px;
      text-align: center;
      margin: unset;
    }
    section.creative.banner h1 {
      font-size: 40px;
      line-height: 50.6px;
      letter-spacing: 5px;
      background: unset;
      -webkit-text-fill-color: unset;
      width: 100%;
      padding-left: 15px;
      padding-right: 15px;
      padding-top: 20px;
      margin: unset;
      text-align: center;
    }
    .filterByTag {
      margin-bottom: 15px;
    }
  
    .swiper-slide img {
      filter: none;
    }
  
    div#quoter {
      bottom: 0px;
    }
  
    div#follow-desktop {
      display: none;
    }
  
    div#follow-mobile {
      display: block;
      background-color: #002149;
      padding: 20px;
      margin-top: 20px;
      color: #ffffff;
    }
  
    .row.center {
      padding-right: 0;
    }
  
    #response.newsroom > .article {
      width: 100%;
      margin-left: 0px;
      margin-right: 0px;
      margin-bottom: 25px;
      text-align: left;
    }
  
    .posts > .container {
      max-width: 100%;
      padding-left: 10px;
      padding-right: 10px;
    }
  
    .category-filter {
      margin-top: 0;
      border-radius: 0;
    }
  
    .category-filter-container {
      flex: unset;
    }
  
    .category-post {
      padding-right: 20px;
      padding-left: 20px;
      text-align: center;
      flex: unset;
    }
  
    .menu-modal-inner.modal-inner {
      background-color: #002149;
    }
    .social-icons a {
      background-color: #002149;
      color: #000000;
    }
    .footer-social-wrapper {
      width: 160px;
      margin-left: auto;
      margin-right: auto;
    }
    .footer-social-wrapper > .social-icons a {
      background-color: #ffffff;
    }
    button.toggle.close-nav-toggle.fill-children-current-color {
      background-color: #002149;
      color: #ffffff;
      position: relative;
      left: calc(45% - 50vw);
      width: 100vw;
    }
    .modal-menu {
      background-color: #002149;
    }
    li.menu-item {
      border: 0;
    }
    li.menu-item > .ancestor-wrapper > a {
      color: #ffffff;
      position: relative;
      /*left: 27%;*/
      font-weight: 100;
      font-size: 2.5rem;
      text-transform: uppercase;
    }
    ul.sub-menu > li.menu-item > .ancestor-wrapper > a {
      text-transform: none;
    }
    .menu-bottom {
      display: none;
    }
    .footer-inner.section-inner {
      padding-right: 15px;
      padding-left: 15px;
      text-align: center;
      margin: 0;
      width: 100%;
    }
    .textwidget > p > img {
      position: relative;
      margin-right: auto;
      margin-left: auto;
    }
    .footer-widgets.column-one.grid-item {
      width: 100%;
    }
    .footer-widgets.column-two.grid-item {
      width: 100%;
      display: none;
    }
    .footer-widgets.column-three.grid-item {
      width: 100%;
    }
  }
  
  /*
      code by Iatek LLC 2018 - CC 2.0 License - Attribution required
      code customized by Azmind.com
  */
  
  @media (min-width: 576px) {
    .carousel-item {
      margin-right: 0;
    }
    /* show 2 items */
    .carousel-inner .active + .carousel-item {
      display: block;
    }
    .carousel-inner
      .carousel-item.active:not(.carousel-item-right):not(.carousel-item-left),
    .carousel-inner
      .carousel-item.active:not(.carousel-item-right):not(.carousel-item-left)
      + .carousel-item {
      transition: none;
    }
    .carousel-inner .carousel-item-next {
      position: relative;
      transform: translate3d(0, 0, 0);
    }
    /* left or forward direction */
    .active.carousel-item-left + .carousel-item-next.carousel-item-left,
    .carousel-item-next.carousel-item-left + .carousel-item,
    .carousel-item-next.carousel-item-left + .carousel-item + .carousel-item {
      position: relative;
      transform: translate3d(-100%, 0, 0);
      visibility: visible;
    }
    /* farthest right hidden item must be also positioned for animations */
    .carousel-inner .carousel-item-prev.carousel-item-right {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      display: block;
      visibility: visible;
    }
    /* right or prev direction */
    .active.carousel-item-right + .carousel-item-prev.carousel-item-right,
    .carousel-item-prev.carousel-item-right + .carousel-item,
    .carousel-item-prev.carousel-item-right + .carousel-item + .carousel-item {
      position: relative;
      transform: translate3d(100%, 0, 0);
      visibility: visible;
      display: block;
      visibility: visible;
    }
  }
  
  .carousel-control-prev-new {
    position: initial;
    color: #ffffff;
    float: right;
    text-decoration: none;
    font-size: 16px;
    margin-bottom: 10px;
  }
  .carousel-control-prev-new:hover {
    color: #ffffff;
  }
  
  .carousel-control-next-new {
    position: initial;
    color: #ffffff;
    float: right;
    margin-right: 15px;
    text-decoration: none;
    border-left: solid 1px;
    font-size: 16px;
  }
  .carousel-control-next-new:hover {
    color: #ffffff;
  }
  
  span.next {
    margin-left: 19px;
  }
  
  span.prev {
    margin-right: 19px;
  }
  
  .carousel-inner {
    margin-top: 15px;
  }
  
  .creative #carousel-example .fa-arrow-right {
    margin-left: 5px;
    background-color: #002149;
  }
  
  .creative #carousel-example .fa-arrow-left {
    margin-right: 5px;
    background-color: #002149;
  }
  
  .creative #carousel-example .fa-arrow-right::before,
  .creative #carousel-example .fa-arrow-left::before {
    color: #ffffff;
  }
  
  main.def-page {
    background-color: #002149;
    color: #fff;
  }
  
  main.def-page > section {
    width: 90%;
    margin: 0 auto;
  }
  
  .def-page h1 {
    background: -webkit-linear-gradient(78.59deg, #d358d4 11.77%, #276aff 86.71%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: left;
    letter-spacing: 5px;
  }
  
  .def-page .post-inner > .entry-content > p {
    width: 100% !important;
  }
  
  .def-page article {
    margin-top: 50px;
  }
  
  .def-page
    .entry-content
    > *:not(.alignwide):not(.alignfull):not(.alignleft):not(.alignright):not(.is-style-wide) {
    max-width: 100%;
  }
  
  .def-page .entry-content h1 {
    margin-left: 0;
    font-family: "Proxima Nova";
  }
  
  .sitemap > section {
      width: 90%;
      margin: 30px auto;
  }
  
  main.ccpa{
      background-color: #002149;
      color: #fff;
  }
  
  .ccpa > section {
      width: 90%;
      margin: 0 auto;
  }
  
  .ccpa h1{
      color: #ff800a;
      font-family: 'Proxima Nova BD';
      font-size: 30px;
      letter-spacing: 1px;
      margin-bottom: 40px;
      text-transform: uppercase;
  }
  
  .ccpa h2 {
      font-family: 'Proxima Nova';
      font-size: 18px;
      letter-spacing: 1px;
      margin: 0;
  }
  
  .ccpa h3 {
      color: #ff800a;
      /* font-family: 'Proxima Nova BD'; */
      font-size: 18px;
      letter-spacing: 1px;
      margin: 0;
      margin-top: 50px;
      margin-bottom: 25px;
  }
  
  .ccpa #step2 label {
      margin-right: 50px;
      display: inline-block;
  }
  
  .ccpa label > p {
      display: inline;
  }
  
  .ccpa label > p > em {
      font-size: 12px;
  }
  
  .ccpa p.declaration {
      margin-top: 50px;
      font-size: 14px;
  }
  
  .ccpa .column {
      display: inline-flex;
  }
  
  .ccpa .column.right {
      margin-left: 20px;
  }
  
  .ccpa .verfiy_row{
      display: flex;
  }
  
  .ccpa button:disabled{
      opacity: 0.6;
  }
  
  .ccpa input#deviceid {
      width: 180px;
      height: 30px;
  }
  
  .ccpa input#email{
      width: 300px;
      height: 30px;
  }
  
  .ccpa .result{
      border-left: 1px solid;
      height: 100%;
      width: 100%;
      padding: 30px;
  }
  
  .ccpa .email_note {
      font-size: 12px;
  }
  
  .ccpa i.fa.fa-question-circle{
      color: #ff800a;
      width: 17px;
      height: 18px;
  }
  
  .ccpa .modal-dialog {
      margin-top: 15%;
  }
  
  .ccpa .modal-dialog p {
      color: #000000;
  }
  
  .ccpa button.btn.btn-secondary {
      background: unset;
      color: #000000;
  }
  
  .ccpa .modal-footer {
      border: unset;
  }
  
  .ccpa #no_data{
      text-align: center;
  }
  
  .ccpa #no_data > img{
      margin-left: auto;
      margin-right: auto;
      max-width: 70px;
  }
  
  .ccpa .noHover{
      pointer-events: none;
      opacity: 0.4;
  }
  
  .ccpa .checkbox_group {
      display: inline-block;
      vertical-align: top;
  }
  
  span.error {
      color: red;
      font-size: 12px;
  }
  
  @media only screen and (max-width: 768px) {
      .ccpa #verify_submit, .ccpa h1, .ccpa h2, .ccpa h3, .ccpa p.declaration, #step2 p, #action_submit
      , #access_cookie_success, #access_data, #access_segments {
          text-align: center;
      }
  
      .ccpa .result {
          border: none;
          border-top: solid 1px;
      }
  
      .ccpa .checkbox_group {
          margin-top: 15px;
      }
  
      .ccpa #step2 label {
          margin-right: 50px;
          display: inline-block;
          width: 180px;
      }
  }this.invoke.apply(this,Array.prototype.slice.call(arguments,0))}catch(c){}};var fd=function(a,b){this.s=a;this.h=b},H=function(a,b){var c=a.h;return Ha(b)?eb(c,b):b},I=function(a){return a.s.F};var gd=function(){this.map=new Map};gd.prototype.set=function(a,b){this.map.set(a,b)};gd.prototype.get=function(a){return this.map.get(a)};var hd=function(){this.keys=[];this.values=[]};hd.prototype.set=function(a,b){this.keys.push(a);this.values.push(b)};hd.prototype.get=function(a){var b=this.keys.indexOf(a);if(-1<b)return this.values[b]};function id(){try{return Map?new gd:new hd}catch(a){return new hd}};var jd=function(a){if(a instanceof jd)return a;if(pb(a))throw Error("Type of given value has an equivalent Pixie type.");this.h=a};jd.prototype.toString=function(){return String(this.h)};var ld=function(a){gb.call(this);this.F=a;this.set("then",kd(this));this.set("catch",kd(this,!0));this.set("finally",kd(this,!1,!0))};sa(ld,sb);var kd=function(a,b,c){b=void 0===b?!1:b;c=void 0===c?!1:c;return new ed("",function(d,e){b&&(e=d,d=void 0);c&&(e=d);d instanceof ed||(d=void 0);e instanceof ed||(e=void 0);var f=Ba(this.h),g=function(m){return function(n){return c?(m.invoke(f),a.F):m.invoke(f,n)}},h=a.F.then(d&&g(d),e&&g(e));return new ld(h)})};var nd=function(a,b,c){var d=id(),e=function(g,h){for(var m=hb(g,1),n=0;n<m.length;n++)h[m[n]]=f(g.get(m[n]))},f=function(g){var h=d.get(g);if(h)return h;if(g instanceof rb){var m=[];d.set(g,m);for(var n=g.Tb(),p=0;p<n.length();p++)m[n.get(p)]=f(g.get(n.get(p)));return m}if(g instanceof ld)return g.F;if(g instanceof sb){var q={};d.set(g,q);e(g,q);return q}if(g instanceof ed){var r=function(){for(var u=Array.prototype.slice.call(arguments,0),v=0;v<u.length;v++)u[v]=md(u[v],b,c);var w=new za(b?b.X:
new ya);b&&(w.h=b.h);return f(g.invoke.apply(g,[w].concat(u)))};d.set(g,r);e(g,r);return r}var t=!1;switch(c){case 1:t=!0;break;case 2:t=!1;break;case 3:t=!1;break;default:}if(g instanceof jd&&t)return g.h;switch(typeof g){case "boolean":case "number":case "string":case "undefined":return g;case "object":if(null===g)return null}};return f(a)},md=function(a,b,c){var d=id(),e=function(g,
h){for(var m in g)g.hasOwnProperty(m)&&h.set(m,f(g[m]))},f=function(g){var h=d.get(g);if(h)return h;if(Ha(g)||Ma(g)){var m=new rb([]);d.set(g,m);for(var n in g)g.hasOwnProperty(n)&&m.set(n,f(g[n]));return m}if(lb(g)){var p=new sb;d.set(g,p);e(g,p);return p}if("function"===typeof g){var q=new ed("",function(x){for(var y=Array.prototype.slice.call(arguments,0),A=0;A<y.length;A++)y[A]=nd(H(this,y[A]),b,c);return f((0,this.h.M)(g,g,y))});d.set(g,q);e(g,q);return q}var v=typeof g;if(null===g||"string"===v||"number"===v||"boolean"===v)return g;var w=!1;switch(c){case 1:w=!0;break;case 2:w=!1;break;default:}if(void 0!==g&&w)return new jd(g)};return f(a)};var od=function(){var a=!1;return a};var pd={supportedMethods:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(var e=1;e<arguments.length;e++)if(arguments[e]instanceof rb)for(var f=arguments[e],g=0;g<f.length();g++)c.push(f.get(g));else c.push(arguments[e]);return new rb(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&
d<c;d++)if(this.has(d)&&!b.invoke(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.invoke(a,this.get(e),e,this)&&d.push(this.get(e));return new rb(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.invoke(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=
e;f<d;f++)if(this.has(f)&&this.get(f)===b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.invoke(a,this.get(e),e,this));return new rb(d)},pop:function(){return this.pop()},push:function(a,
b){return this.push.apply(this,Array.prototype.slice.call(arguments,1))},reduce:function(a,b,c){var d=this.length(),e,f=0;if(void 0!==c)e=c;else{if(0===d)throw Error("TypeError: Reduce on List with no elements.");for(var g=0;g<d;g++)if(this.has(g)){e=this.get(g);f=g+1;break}if(g===d)throw Error("TypeError: Reduce on List with no elements.");}for(var h=f;h<d;h++)this.has(h)&&(e=b.invoke(a,e,this.get(h),h,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f=d-1;if(void 0!==c)e=c;else{if(0===
d)throw Error("TypeError: ReduceRight on List with no elements.");for(var g=1;g<=d;g++)if(this.has(d-g)){e=this.get(d-g);f=d-(g+1);break}if(g>d)throw Error("TypeError: ReduceRight on List with no elements.");}for(var h=f;0<=h;h--)this.has(h)&&(e=b.invoke(a,e,this.get(h),h,this));return e},reverse:function(){for(var a=ob(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):this.remove(c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();
void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?Math.max(d+c,0):Math.min(c,d);c=Math.max(b,c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new rb(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.invoke(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=ob(this);void 0===b?c.sort():c.sort(function(e,f){return Number(b.invoke(a,e,f))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):this.remove(d);
return this},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,1,arguments.length-1))},toString:function(){return this.toString()},unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var qd=function(a){var b;b=Error.call(this,a);this.message=b.message;"stack"in b&&(this.stack=b.stack)};sa(qd,Error);var rd={charAt:1,concat:1,indexOf:1,lastIndexOf:1,match:1,replace:1,search:1,slice:1,split:1,substring:1,toLowerCase:1,toLocaleLowerCase:1,toString:1,toUpperCase:1,toLocaleUpperCase:1,trim:1},sd=new wa("break"),td=new wa("continue"),ud=function(a,b){return H(this,a)+H(this,b)},vd=function(a,b){return H(this,a)&&H(this,b)},wd=function(a,b,c){a=H(this,a);b=H(this,b);c=H(this,c);if(!(c instanceof rb))throw Error("Error: Non-List argument given to Apply instruction.");if(null===a||void 0===a){var d="TypeError: Can't read property "+
b+" of "+a+".";if(od())throw new qd(d);throw Error(d);}var e="number"===typeof a;if("boolean"===typeof a||e){if("toString"===b){if(e&&c.length()){var f=nd(c.get(0));try{return a.toString(f)}catch(y){}}return a.toString()}var g="TypeError: "+a+"."+b+" is not a function.";if(od())throw new qd(g);throw Error(g);}if("string"===typeof a){if(rd.hasOwnProperty(b)){var h=2;h=1;
var m=nd(c,void 0,h);return md(a[b].apply(a,m),this.h)}var n="TypeError: "+b+" is not a function";if(od())throw new qd(n);throw Error(n);}if(a instanceof rb){if(a.has(b)){var p=a.get(b);if(p instanceof ed){var q=ob(c);q.unshift(this.h);return p.invoke.apply(p,q)}var r="TypeError: "+b+" is not a function";if(od())throw new qd(r);throw Error(r);}if(0<=pd.supportedMethods.indexOf(b)){var t=ob(c);t.unshift(this.h);return pd[b].apply(a,t)}}if(a instanceof ed||a instanceof sb){if(a.has(b)){var u=a.get(b);
if(u instanceof ed){var v=ob(c);v.unshift(this.h);return u.invoke.apply(u,v)}var w="TypeError: "+b+" is not a function";if(od())throw new qd(w);throw Error(w);}if("toString"===b)return a instanceof ed?a.F:a.toString();if("hasOwnProperty"===b)return a.has.apply(a,ob(c))}if(a instanceof jd&&"toString"===b)return a.toString();var x="TypeError: Object has no '"+b+"' property.";if(od())throw new qd(x);throw Error(x);},xd=function(a,b){a=H(this,a);if("string"!==typeof a)throw Error("Invalid key name given for assignment.");
var c=this.h;if(!c.has(a))throw Error("Attempting to assign to undefined value "+b);var d=H(this,b);c.set(a,d);return d},yd=function(a){var b=Ba(this.h),c=db(b,Array.prototype.slice.apply(arguments));if(c instanceof wa)return c},zd=function(){return sd},Ad=function(a){for(var b=H(this,a),c=0;c<b.length;c++){var d=H(this,b[c]);if(d instanceof wa)return d}},Bd=function(a){for(var b=this.h,c=0;c<arguments.length-1;c+=2){var d=arguments[c];if("string"===typeof d){var e=H(this,arguments[c+1]);Aa(b,d,e,
!0)}}},Cd=function(){return td},Dd=function(a,b){return new wa(a,H(this,b))},Ed=function(a,b,c){var d=new rb;b=H(this,b);for(var e=0;e<b.length;e++)d.push(b[e]);var f=[51,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.h.add(a,H(this,f))},Fd=function(a,b){return H(this,a)/H(this,b)},Gd=function(a,b){a=H(this,a);b=H(this,b);var c=a instanceof jd,d=b instanceof jd;return c||d?c&&d?a.h==b.h:!1:a==b},Hd=function(a){for(var b,c=0;c<arguments.length;c++)b=H(this,arguments[c]);
return b};function Id(a,b,c,d){for(var e=0;e<b();e++){var f=a(c(e)),g=db(f,d);if(g instanceof wa){if("break"===g.h)break;if("return"===g.h)return g}}}function Jd(a,b,c){if("string"===typeof b)return Id(a,function(){return b.length},function(f){return f},c);if(b instanceof sb||b instanceof rb||b instanceof ed){var d=b.Tb(),e=d.length();return Id(a,function(){return e},function(f){return d.get(f)},c)}}
var Kd=function(a,b,c){a=H(this,a);b=H(this,b);c=H(this,c);var d=this.h;return Jd(function(e){d.set(a,e);return d},b,c)},Ld=function(a,b,c){a=H(this,a);b=H(this,b);c=H(this,c);var d=this.h;return Jd(function(e){var f=Ba(d);Aa(f,a,e,!0);return f},b,c)},Md=function(a,b,c){a=H(this,a);b=H(this,b);c=H(this,c);var d=this.h;return Jd(function(e){var f=Ba(d);f.add(a,e);return f},b,c)},Od=function(a,b,c){a=H(this,a);b=H(this,b);c=H(this,c);var d=this.h;return Nd(function(e){d.set(a,e);return d},b,c)},Pd=
function(a,b,c){a=H(this,a);b=H(this,b);c=H(this,c);var d=this.h;return Nd(function(e){var f=Ba(d);Aa(f,a,e,!0);return f},b,c)},Qd=function(a,b,c){a=H(this,a);b=H(this,b);c=H(this,c);var d=this.h;return Nd(function(e){var f=Ba(d);f.add(a,e);return f},b,c)};
function Nd(a,b,c){if("string"===typeof b)return Id(a,function(){return b.length},function(d){return b[d]},c);if(b instanceof rb)return Id(a,function(){return b.length()},function(d){return b.get(d)},c);if(od())throw new qd("The value is not iterable.");throw new TypeError("The value is not iterable.");}
var Rd=function(a,b,c,d){function e(p,q){for(var r=0;r<f.length();r++){var t=f.get(r);q.add(t,p.get(t))}}var f=H(this,a);if(!(f instanceof rb))throw Error("TypeError: Non-List argument given to ForLet instruction.");var g=this.h;d=H(this,d);var h=Ba(g);for(e(g,h);eb(h,b);){var m=db(h,d);if(m instanceof wa){if("break"===m.h)break;if("return"===m.h)return m}var n=Ba(g);e(h,n);eb(n,c);h=n}},Sd=function(a,b,c){var d=this.h,e=H(this,b);if(!(e instanceof rb))throw Error("Error: non-List value given for Fn argument names.");
var f=Array.prototype.slice.call(arguments,2);return new ed(a,function(){return function(g){var h=Ba(d);void 0===h.h&&(h.h=this.h.h);for(var m=Array.prototype.slice.call(arguments,0),n=0;n<m.length;n++)if(m[n]=H(this,m[n]),m[n]instanceof wa)return m[n];for(var p=e.get("length"),q=0;q<p;q++)q<m.length?h.add(e.get(q),m[q]):h.add(e.get(q),void 0);h.add("arguments",new rb(m));var r=db(h,f);if(r instanceof wa)return"return"===r.h?r.s:r}}())},Td=function(a){a=H(this,a);var b=this.h,c=!1;if(c&&!b.has(a))throw new ReferenceError(a+" is not defined.");return b.get(a)},Ud=function(a,b){var c;a=H(this,a);b=H(this,b);if(void 0===a||null===a){var d="TypeError: Cannot read properties of "+a+" (reading '"+b+"')";if(od())throw new qd(d);throw Error(d);}if(a instanceof sb||a instanceof rb||a instanceof ed)c=a.get(b);else if("string"===typeof a)"length"===b?c=a.length:qb(b)&&(c=a[b]);else if(a instanceof jd)return;
return c},Vd=function(a,b){return H(this,a)>H(this,b)},Wd=function(a,b){return H(this,a)>=H(this,b)},Xd=function(a,b){a=H(this,a);b=H(this,b);a instanceof jd&&(a=a.h);b instanceof jd&&(b=b.h);return a===b},Yd=function(a,b){return!Xd.call(this,a,b)},Zd=function(a,b,c){var d=[];H(this,a)?d=H(this,b):c&&(d=H(this,c));var e=db(this.h,d);if(e instanceof wa)return e},$d=function(a,b){return H(this,a)<H(this,b)},ae=function(a,b){return H(this,a)<=H(this,b)},be=function(a){for(var b=new rb,c=0;c<arguments.length;c++){var d=
H(this,arguments[c]);b.push(d)}return b},ce=function(a){for(var b=new sb,c=0;c<arguments.length-1;c+=2){var d=H(this,arguments[c])+"",e=H(this,arguments[c+1]);b.set(d,e)}return b},de=function(a,b){return H(this,a)%H(this,b)},ee=function(a,b){return H(this,a)*H(this,b)},fe=function(a){return-H(this,a)},ge=function(a){return!H(this,a)},he=function(a,b){return!Gd.call(this,a,b)},ie=function(){return null},je=function(a,b){return H(this,a)||H(this,b)},ke=function(a,b){var c=H(this,a);H(this,b);return c},
le=function(a){return H(this,a)},me=function(a){return Array.prototype.slice.apply(arguments)},ne=function(a){return new wa("return",H(this,a))},oe=function(a,b,c){a=H(this,a);b=H(this,b);c=H(this,c);if(null===a||void 0===a){var d="TypeError: Can't set property "+b+" of "+a+".";if(od())throw new qd(d);throw Error(d);}(a instanceof ed||a instanceof rb||a instanceof sb)&&a.set(b,c);return c},pe=function(a,b){return H(this,a)-H(this,b)},qe=function(a,b,c){a=H(this,a);var d=H(this,b),e=H(this,c);if(!Ha(d)||
!Ha(e))throw Error("Error: Malformed switch instruction.");for(var f,g=!1,h=0;h<d.length;h++)if(g||a===H(this,d[h]))if(f=H(this,e[h]),f instanceof wa){var m=f.h;if("break"===m)return;if("return"===m||"continue"===m)return f}else g=!0;if(e.length===d.length+1&&(f=H(this,e[e.length-1]),f instanceof wa&&("return"===f.h||"continue"===f.h)))return f},re=function(a,b,c){return H(this,a)?H(this,b):H(this,c)},se=function(a){a=H(this,a);return a instanceof ed?"function":typeof a},te=function(a){for(var b=
this.h,c=0;c<arguments.length;c++){var d=arguments[c];"string"!==typeof d||b.add(d,void 0)}},ue=function(a,b,c,d){var e=H(this,d);if(H(this,c)){var f=db(this.h,e);if(f instanceof wa){if("break"===f.h)return;if("return"===f.h)return f}}for(;H(this,a);){var g=db(this.h,e);if(g instanceof wa){if("break"===g.h)break;if("return"===g.h)return g}H(this,b)}},ve=function(a){return~Number(H(this,a))},we=function(a,b){return Number(H(this,a))<<Number(H(this,b))},xe=function(a,b){return Number(H(this,a))>>Number(H(this,
b))},ye=function(a,b){return Number(H(this,a))>>>Number(H(this,b))},ze=function(a,b){return Number(H(this,a))&Number(H(this,b))},Ae=function(a,b){return Number(H(this,a))^Number(H(this,b))},Be=function(a,b){return Number(H(this,a))|Number(H(this,b))},Ce=function(){},De=function(a,b,c,d,e){var f=!0;try{var g=H(this,c);if(g instanceof wa)return g}catch(r){if(!(r instanceof qd&&a))throw f=r instanceof qd,r;var h=Ba(this.h),m=new jd(r);h.add(b,m);var n=H(this,d),p=db(h,n);if(p instanceof wa)return p}finally{if(f&&
void 0!==e){var q=H(this,e);if(q instanceof wa)return q}}};var Fe=function(){this.h=new fb;Ee(this)};Fe.prototype.execute=function(a){return this.h.s(a)};var Ee=function(a){var b=function(c,d){var e=new ed(String(c),d);e.Eb();a.h.h.set(String(c),e)};b("map",ce);b("and",Zc);b("contains",bd);b("equals",$c);b("or",ad);b("startsWith",cd);b("variable",dd)};var Ie=function(){this.h=new fb;He(this)};Ie.prototype.execute=function(a){return Je(this.h.s(a))};
var Ke=function(a,b,c){return Je(a.h.F(b,c))},He=function(a){var b=function(c,d){var e=String(c),f=new ed(e,d);f.Eb();a.h.h.set(e,f)};b(0,ud);b(1,vd);b(2,wd);b(3,xd);b(56,ze);b(57,we);b(58,ve);b(59,Be);b(60,xe);b(61,ye);b(62,Ae);b(53,yd);b(4,zd);b(5,Ad);b(52,Bd);b(6,Cd);b(49,Dd);b(7,be);b(8,ce);b(9,Ad);b(50,Ed);b(10,Fd);b(12,Gd);b(13,Hd);b(51,Sd);b(47,Kd);b(54,Ld);b(55,Md);b(63,Rd);b(64,Od);b(65,Pd);b(66,Qd);b(15,Td);b(16,Ud);b(17,Ud);b(18,Vd);b(19,Wd);b(20,Xd);b(21,Yd);b(22,Zd);b(23,$d);b(24,ae);
b(25,de);b(26,ee);b(27,fe);b(28,ge);b(29,he);b(45,ie);b(30,je);b(32,ke);b(33,ke);b(34,le);b(35,le);b(46,me);b(36,ne);b(43,oe);b(37,pe);b(38,qe);b(39,re);b(67,De);b(40,se);b(44,Ce);b(41,te);b(42,ue)};function Je(a){if(a instanceof wa||a instanceof ed||a instanceof rb||a instanceof sb||a instanceof jd||null===a||void 0===a||"string"===typeof a||"number"===typeof a||"boolean"===typeof a)return a};function Le(a){switch(a){case 1:return"1";case 2:case 4:return"0";default:return"-"}};var Me=function(){var a=function(b){return{toString:function(){return b}}};return{kk:a("consent"),fi:a("convert_case_to"),gi:a("convert_false_to"),hi:a("convert_null_to"),ii:a("convert_true_to"),ji:a("convert_undefined_to"),un:a("debug_mode_metadata"),ka:a("function"),Tg:a("instance_name"),Sk:a("live_only"),Tk:a("malware_disabled"),Uk:a("metadata"),Xk:a("original_activity_id"),Jn:a("original_vendor_template_id"),In:a("once_on_load"),Wk:a("once_per_event"),ej:a("once_per_load"),Nn:a("priority_override"),
On:a("respected_consent_types"),kj:a("setup_tags"),oe:a("tag_id"),pj:a("teardown_tags")}}();var hf;
var jf=[],kf=[],lf=[],mf=[],nf=[],of={},pf,qf,rf=function(a){qf=qf||a},sf=function(a){},tf,uf=[],vf=function(a,b){var c={};c[Me.ka]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},wf=function(a,
b){var c=a[Me.ka],d=b&&b.event;if(!c)throw Error("Error: No function name given for function call.");var e=of[c],f=b&&2===b.type&&d.reportMacroDiscrepancy&&e&&-1!==uf.indexOf(c),g={},h={},m;for(m in a)a.hasOwnProperty(m)&&0===m.indexOf("vtp_")&&(e&&(g[m]=a[m]),!e||f)&&(h[m.substr(4)]=a[m]);e&&d&&d.cachedModelValues&&(g.vtp_gtmCachedValues=d.cachedModelValues);if(b){if(null==b.name){var n;a:{var p=b.type,q=b.index;if(null==q)n="";else{var r;switch(p){case 2:r=jf[q];break;case 1:r=mf[q];break;default:n=
"";break a}var t=r&&r[Me.Tg];n=t?String(t):""}}b.name=n}e&&(g.vtp_gtmEntityIndex=b.index,g.vtp_gtmEntityName=b.name)}var u,v;e&&(u=e(g));if(!e||f)v=hf(c,h,b);f&&d&&(pb(u)?typeof u!==typeof v&&d.reportMacroDiscrepancy(d.id,c):u!==v&&d.reportMacroDiscrepancy(d.id,c));return e?u:v},yf=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=xf(a[e],b,c));return d},xf=function(a,b,c){if(Ha(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(xf(a[e],
b,c));return d;case "macro":var f=a[1];if(c[f])return;var g=jf[f];if(!g||b.isBlocked(g))return;c[f]=!0;var h=String(g[Me.Tg]);try{var m=yf(g,b,c);m.vtp_gtmEventId=b.id;b.priorityId&&(m.vtp_gtmPriorityId=b.priorityId);d=wf(m,{event:b,index:f,type:2,name:h});tf&&(d=tf.xl(d,m))}catch(y){b.logMacroError&&b.logMacroError(y,Number(f),h),d=!1}c[f]=!1;return d;case "map":d={};for(var n=1;n<a.length;n+=2)d[xf(a[n],b,c)]=xf(a[n+1],b,c);return d;case "template":d=[];for(var p=!1,q=1;q<a.length;q++){var r=xf(a[q],
b,c);qf&&(p=p||qf.km(r));d.push(r)}return qf&&p?qf.zl(d):d.join("");case "escape":d=xf(a[1],b,c);if(qf&&Ha(a[1])&&"macro"===a[1][0]&&qf.lm(a))return qf.Pm(d);d=String(d);for(var t=2;t<a.length;t++)Ne[a[t]]&&(d=Ne[a[t]](d));return d;case "tag":var u=a[1];if(!mf[u])throw Error("Unable to resolve tag reference "+u+".");return d={Aj:a[2],index:u};case "zb":var v={arg0:a[2],arg1:a[3],ignore_case:a[5]};v[Me.ka]=a[1];var w=zf(v,b,c),x=!!a[4];return x||2!==w?x!==(1===w):null;default:throw Error("Attempting to expand unknown Value type: "+
a[0]+".");}}return a},zf=function(a,b,c){try{return pf(yf(a,b,c))}catch(d){JSON.stringify(a)}return 2},Af=function(a){var b=a[Me.ka];if(!b)throw Error("Error: No function name given for function call.");return!!of[b]};var Bf=function(a,b,c){var d;d=Error.call(this,c);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.h=a};sa(Bf,Error);function Cf(a,b){if(Ha(a)){Object.defineProperty(a,"context",{value:{line:b[0]}});for(var c=1;c<a.length;c++)Cf(a[c],b[c])}};var Df=function(a,b){var c;c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.Km=a;this.s=b;this.h=[]};sa(Df,Error);var Ff=function(){return function(a,b){a instanceof Df||(a=new Df(a,Ef));b&&a.h.push(b);throw a;}};function Ef(a){if(!a.length)return a;a.push({id:"main",line:0});for(var b=a.length-1;0<b;b--)Ga(a[b].id)&&a.splice(b++,1);for(var c=a.length-1;0<c;c--)a[c].line=a[c-1].line;a.splice(0,1);return a};var If=function(a){function b(r){for(var t=0;t<r.length;t++)d[r[t]]=!0}for(var c=[],d=[],e=Gf(a),f=0;f<kf.length;f++){var g=kf[f],h=Hf(g,e);if(h){for(var m=g.add||[],n=0;n<m.length;n++)c[m[n]]=!0;b(g.block||[])}else null===h&&b(g.block||[]);}for(var p=[],q=0;q<mf.length;q++)c[q]&&!d[q]&&(p[q]=!0);return p},Hf=function(a,b){for(var c=a["if"]||[],d=0;d<c.length;d++){var e=b(c[d]);if(0===e)return!1;
if(2===e)return null}for(var f=a.unless||[],g=0;g<f.length;g++){var h=b(f[g]);if(2===h)return null;if(1===h)return!1}return!0},Gf=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=zf(lf[c],a));return b[c]}};var Jf={xl:function(a,b){b[Me.fi]&&"string"===typeof a&&(a=1==b[Me.fi]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(Me.hi)&&null===a&&(a=b[Me.hi]);b.hasOwnProperty(Me.ji)&&void 0===a&&(a=b[Me.ji]);b.hasOwnProperty(Me.ii)&&!0===a&&(a=b[Me.ii]);b.hasOwnProperty(Me.gi)&&!1===a&&(a=b[Me.gi]);return a}};var Kf=function(){this.h={}},Mf=function(a,b){var c=Lf.s,d;null!=(d=c.h)[a]||(d[a]=[]);c.h[a].push(function(){return b.apply(null,ja(ta.apply(0,arguments)))})};function Nf(a,b,c,d){if(a)for(var e=0;e<a.length;e++){var f=void 0,g="A policy function denied the permission request";try{f=a[e](b,c,d),g+="."}catch(h){g="string"===typeof h?g+(": "+h):h instanceof Error?g+(": "+h.message):g+"."}if(!f)throw new Bf(c,d,g);}}
function Of(a,b,c){return function(){var d=arguments[0];if(d){var e=a.h[d],f=a.h.all;if(e||f){var g=c.apply(void 0,Array.prototype.slice.call(arguments,0));Nf(e,b,d,g);Nf(f,b,d,g)}}}};var Pf=[],Qf=function(a){return void 0==Pf[a]?!1:Pf[a]};var Uf=function(){var a=data.permissions||{},b=Rf.ctid,c=this;this.s=new Kf;this.h={};var d=Qf(15),e={},f={},g=Of(this.s,b,function(){var h=arguments[0];return h&&e[h]?e[h].apply(void 0,Array.prototype.slice.call(arguments,0)):{}});l(a,function(h,m){var n={};l(m,function(q,r){var t=Sf(q,r);n[q]=t.assert;e[q]||(e[q]=t.K);d&&t.sj&&!f[q]&&(f[q]=t.sj)});var p;d&&(p=function(q){var r=ta.apply(1,arguments);if(!n[q])throw Tf(q,{},"The requested additional permission "+q+" is not configured.");g.apply(null,
[q].concat(ja(r)))});c.h[h]=function(q,r){var t=n[q];if(!t)throw Tf(q,{},"The requested permission "+q+" is not configured.");var u=Array.prototype.slice.call(arguments,0);t.apply(void 0,u);g.apply(void 0,u);if(d){var v=f[q];v&&v.apply(null,[p].concat(ja(u.slice(1))))}}})},Vf=function(a){return Lf.h[a]||function(){}};
function Sf(a,b){var c=vf(a,b);c.vtp_permissionName=a;c.vtp_createPermissionError=Tf;try{return wf(c)}catch(d){return{assert:function(e){throw new Bf(e,{},"Permission "+e+" is unknown.");},K:function(){if(Qf(15))throw new Bf(a,{},"Permission "+a+" is unknown.");for(var e={},f=0;f<arguments.length;++f)e["arg"+(f+1)]=arguments[f];return e}}}}function Tf(a,b,c){return new Bf(a,b,c)};var Wf=!1;var Xf={};Xf.qn=Oa('');Xf.Bl=Oa('');var Yf=Wf,Zf=Xf.Bl,$f=Xf.qn;var ng=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];function og(a,b){a=String(a);b=String(b);var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)===c}var pg=new Ka;function qg(a,b,c){var d=c?"i":void 0;try{var e=String(b)+d,f=pg.get(e);f||(f=new RegExp(b,d),pg.set(e,f));return f.test(a)}catch(g){return!1}}function rg(a,b){return 0<=String(a).indexOf(String(b))}function sg(a,b){return String(a)===String(b)}
function tg(a,b){return Number(a)>=Number(b)}function ug(a,b){return Number(a)<=Number(b)}function vg(a,b){return Number(a)>Number(b)}function wg(a,b){return Number(a)<Number(b)}function xg(a,b){return 0===String(a).indexOf(String(b))};var Eg=/^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;function Fg(a,b){for(var c="",d=!0;7<a;){var e=a&31;a>>=5;d?d=!1:e|=32;c="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[e]+c}a<<=2;d||(a|=32);return c="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[a|b]+c};var Gg=/^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|PixieMap|List|OpaqueValue)$/i,Hg={Fn:"function",PixieMap:"Object",List:"Array"},J=function(a,b,c){for(var d=0;d<b.length;d++){var e=Gg.exec(b[d]);if(!e)throw Error("Internal Error in "+a);var f=e[1],g="!"===e[2],h=e[3],m=c[d];if(null==m){if(g)throw Error("Error in "+a+". Required argument "+f+" not supplied.");}else if("*"!==h){var n=typeof m;m instanceof ed?n="Fn":m instanceof rb?n="List":m instanceof sb?n="PixieMap":m instanceof jd&&(n=
"OpaqueValue");if(n!=h)throw Error("Error in "+a+". Argument "+f+" has type "+(Hg[n]||n)+", which does not match required type "+(Hg[h]||h)+".");}}};function Ig(a){return""+a}
function Jg(a,b){var c=[];return c};var Kg=function(a,b){var c=new ed(a,function(){for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;e++)d[e]=H(this,d[e]);try{return b.apply(this,d)}catch(g){if(od())throw new qd(g.message);throw g;}});c.Eb();return c},Lg=function(a,b){var c=new sb,d;for(d in b)if(b.hasOwnProperty(d)){var e=b[d];Fa(e)?c.set(d,Kg(a+"_"+d,e)):lb(e)?c.set(d,Lg(a+"_"+d,
e)):(Ga(e)||k(e)||"boolean"===typeof e)&&c.set(d,e)}c.Eb();return c};var Mg=function(a,b){J(I(this),["apiName:!string","message:?string"],arguments);var c={},d=new sb;return d=Lg("AssertApiSubject",c)};var Ng=function(a,b){J(I(this),["actual:?*","message:?string"],arguments);if(a instanceof ld)throw Error("Argument actual cannot have type Promise. Assertions on asynchronous code aren't supported.");var c={},d=new sb;return d=Lg("AssertThatSubject",c)};function Og(a){return function(){for(var b=[],c=this.h,d=0;d<arguments.length;++d)b.push(nd(arguments[d],c));return md(a.apply(null,b))}}var Qg=function(){for(var a=Math,b=Pg,c={},d=0;d<b.length;d++){var e=b[d];a.hasOwnProperty(e)&&(c[e]=Og(a[e].bind(a)))}return c};var Rg=function(a){var b;return b};var Sg=function(a){var b;return b};var Tg=function(a){try{return encodeURI(a)}catch(b){}};var Ug=function(a){try{return encodeURIComponent(a)}catch(b){}};function Vg(a,b){var c=!1;J(I(this),["booleanExpression:!string","context:?PixieMap"],arguments);var d=JSON.parse(a);if(!d)throw Error("Invalid boolean expression string was given.");var e=b?nd(b):{};c=Wg(d,e);return c}
var Xg=function(a,b){for(var c=0;c<b.length;c++){if(void 0===a)return;a=a[b[c]]}return a},Yg=function(a,b){var c=b.preHit;if(c){var d=a[0];switch(d){case "hitData":return 2>a.length?void 0:Xg(c.getHitData(a[1]),a.slice(2));case "metadata":return 2>a.length?void 0:Xg(c.getMetadata(a[1]),a.slice(2));case "eventName":return c.getEventName();case "destinationId":return c.getDestinationId();default:throw Error(d+" is not a valid field that can be accessed\n                      from PreHit data.");}}},
Zg=function(a,b){if(a){if(void 0!==a.contextValue){var c;a:{var d=a.contextValue,e=d.keyParts;if(e&&0!==e.length){var f=d.namespaceType;switch(f){case 1:c=Yg(e,b);break a;case 2:var g=b.macro;c=g?g[e[0]]:void 0;break a;default:throw Error("Unknown Namespace Type used: "+f);}}c=void 0}return c}if(void 0!==a.booleanExpressionValue)return Wg(a.booleanExpressionValue,b);if(void 0!==a.booleanValue)return!!a.booleanValue;if(void 0!==a.stringValue)return String(a.stringValue);if(void 0!==a.integerValue)return Number(a.integerValue);
if(void 0!==a.doubleValue)return Number(a.doubleValue);throw Error("Unknown field used for variable of type ExpressionValue:"+a);}},Wg=function(a,b){var c=a.args;if(!Ha(c)||0===c.length)throw Error('Invalid boolean expression format. Expected "args":'+c+" property to\n         be non-empty array.");var d=function(g){return Zg(g,b)};switch(a.type){case 1:for(var e=0;e<c.length;e++)if(d(c[e]))return!0;return!1;case 2:for(var f=0;f<c.length;f++)if(!d(c[f]))return!1;return 0<c.length;case 3:return!d(c[0]);
case 4:return qg(d(c[0]),d(c[1]),!1);case 5:return sg(d(c[0]),d(c[1]));case 6:return xg(d(c[0]),d(c[1]));case 7:return og(d(c[0]),d(c[1]));case 8:return rg(d(c[0]),d(c[1]));case 9:return wg(d(c[0]),d(c[1]));case 10:return ug(d(c[0]),d(c[1]));case 11:return vg(d(c[0]),d(c[1]));case 12:return tg(d(c[0]),d(c[1]));default:throw Error('Invalid boolean expression format. Expected "type" property tobe a positive integer which is less than 13.');}};
Vg.D="internal.evaluateBooleanExpression";var $g=function(a){J(I(this),["message:?string"],arguments);};var ah=function(a,b){J(I(this),["min:!number","max:!number"],arguments);return Ja(a,b)};var bh=function(){return(new Date).getTime()};var ch=function(a){if(null===a)return"null";if(a instanceof rb)return"array";if(a instanceof ed)return"function";if(a instanceof jd){a=a.h;if(void 0===a.constructor||void 0===a.constructor.name){var b=String(a);return b.substring(8,b.length-1)}return String(a.constructor.name)}return typeof a};var dh=function(a){function b(c){return function(d){try{return c(d)}catch(e){(Yf||$f)&&a.call(this,e.message)}}}return{parse:b(function(c){return md(JSON.parse(c))}),stringify:b(function(c){return JSON.stringify(nd(c))})}};var ih=function(a){return Na(nd(a,this.h))};var jh=function(a){return Number(nd(a,this.h))};var kh=function(a){return null===a?"null":void 0===a?"undefined":a.toString()};var lh=function(a,b,c){var d=null,e=!1;return e?d:null};var Pg="floor ceil round max min abs pow sqrt".split(" ");var mh=function(){var a={};return{Ol:function(b){return a.hasOwnProperty(b)?a[b]:void 0},hn:function(b,c){a[b]=c},reset:function(){a={}}}},nh=function(a,b){return function(){var c=Array.prototype.slice.call(arguments,0);c.unshift(b);return ed.prototype.invoke.apply(a,c)}},oh=function(a,b){J(I(this),["apiName:!string","mock:?*"],arguments);};var ph={};
ph.keys=function(a){return new rb};
ph.values=function(a){return new rb};
ph.entries=function(a){return new rb};
ph.freeze=function(a){return a};ph.delete=function(a,b){return!1};var K=function(a,b,c){var d=a.h.h;if(!d)throw Error("Missing program state.");if(d.Wm){try{d.uj.apply(null,Array.prototype.slice.call(arguments,1))}catch(e){throw Ab("TAGGING",21),e;}return}d.uj.apply(null,Array.prototype.slice.call(arguments,1))};var rh=function(){this.h={};this.s={};};rh.prototype.get=function(a,b){var c=this.h.hasOwnProperty(a)?this.h[a]:void 0;return c};
rh.prototype.add=function(a,b,c){if(this.h.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";if(this.s.hasOwnProperty(a))throw"Attempting to add an API with an existing private API name: "+a+".";this.h[a]=c?void 0:Fa(b)?Kg(a,b):Lg(a,b)};function sh(a,b){var c=void 0;return c};function th(){var a={};
return a};var vh=function(a){return uh?C.querySelectorAll(a):null},wh=function(a,b){if(!uh)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!C.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},xh=!1;if(C.querySelectorAll)try{var yh=C.querySelectorAll(":root");yh&&1==yh.length&&yh[0]==C.documentElement&&(xh=!0)}catch(a){}var uh=xh;var L=function(a){Ab("GTM",a)};
var zh=function(a){return null==a?"":k(a)?Qa(String(a)):"e0"},Bh=function(a){return a.replace(Ah,"")},Dh=function(a){return Ch(a.replace(/\s/g,""))},Ch=function(a){return Qa(a.replace(Eh,"").toLowerCase())},Gh=function(a){a=a.replace(/[\s-()/.]/g,"");"+"!==a.charAt(0)&&(a="+"+a);return Fh.test(a)?a:"e0"},Ih=function(a){var b=a.toLowerCase().split("@");if(2==b.length){var c=b[0];/^(gmail|googlemail)\./.test(b[1])&&(c=c.replace(/\./g,""));c=c+"@"+b[1];if(Hh.test(c))return c}return"e0"},Lh=function(a){if(""===
a||"e0"===a)return Promise.resolve(a);if(z.crypto&&z.crypto.subtle){if(Jh.test(a))return Promise.resolve(a);try{var b=Kh(a);return z.crypto.subtle.digest("SHA-256",b).then(function(c){var d=Array.from(new Uint8Array(c)).map(function(e){return String.fromCharCode(e)}).join("");return z.btoa(d).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}).catch(function(){return"e2"})}catch(c){return Promise.resolve("e2")}}else return Promise.resolve("e1")},Kh=function(a){var b;if(z.TextEncoder)b=(new TextEncoder("utf-8")).encode(a);
else{for(var c=[],d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?c.push(e):2048>e?c.push(192|e>>6,128|e&63):55296>e||57344<=e?c.push(224|e>>12,128|e>>6&63,128|e&63):(e=65536+((e&1023)<<10|a.charCodeAt(++d)&1023),c.push(240|e>>18,128|e>>12&63,128|e>>6&63,128|e&63))}b=new Uint8Array(c)}return b},Eh=/[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g,Hh=/^\S+@\S+\.\S+$/,Fh=/^\+\d{10,15}$/,Ah=/[.~]/g,Mh=/^[0-9A-Za-z_-]{43}$/,Jh=/^[0-9A-Fa-f]{64}$/,Nh={},Oh=(Nh.email="em",Nh.phone_number="pn",Nh.first_name="fn",
Nh.last_name="ln",Nh.street="sa",Nh.city="ct",Nh.region="rg",Nh.country="co",Nh.postal_code="pc",Nh.error_code="ec",Nh),Ph={},Qh=(Ph.email="sha256_email_address",Ph.phone_number="sha256_phone_number",Ph.first_name="sha256_first_name",Ph.last_name="sha256_last_name",Ph.street="sha256_street",Ph),Sh=function(a,b){a.some(function(c){c.value&&Rh.indexOf(c.name)})?b(a):z.Promise?Promise.all(a.map(function(c){return c.value&&-1!==Rh.indexOf(c.name)?Lh(c.value).then(function(d){c.value=d}):Promise.resolve()})).then(function(){b(a)}).catch(function(){b([])}):
b([])},Uh=function(a,b){var c=Th(a);Sh(c,b)},Th=function(a){function b(r,t,u,v){var w=zh(r);""!==w&&(Jh.test(w)?h.push({name:t,value:w,index:v}):h.push({name:t,value:u(w),index:v}))}function c(r,t){var u=r;if(k(u)||Ha(u)){u=Ha(r)?r:[r];for(var v=0;v<u.length;++v){var w=zh(u[v]),x=Jh.test(w);t&&!x&&L(89);!t&&x&&L(88)}}}function d(r,t){var u=r[t];c(u,!1);var v=Qh[t];r.hasOwnProperty(v)&&(r.hasOwnProperty(t)&&L(90),u=r[v],c(u,!0));return u}function e(r,t,u){var v=d(r,t);v=Ha(v)?v:[v];for(var w=0;w<v.length;++w)b(v[w],
t,u)}function f(r,t,u,v){var w=d(r,t);b(w,t,u,v)}function g(r){return function(t){L(64);return r(t)}}var h=[];if("https:"!==z.location.protocol)return h.push({name:"error_code",value:"e3",index:void 0}),h;e(a,"email",Ih);e(a,"phone_number",Gh);e(a,"first_name",g(Dh));e(a,"last_name",g(Dh));var m=a.home_address||{};e(m,"street",g(Ch));e(m,"city",g(Ch));e(m,"postal_code",g(Bh));e(m,"region",g(Ch));e(m,"country",g(Bh));var n=a.address||{};n=Ha(n)?n:[n];for(var p=0;p<n.length;p++){var q=n[p];f(q,"first_name",
Dh,p);f(q,"last_name",Dh,p);f(q,"street",Ch,p);f(q,"city",Ch,p);f(q,"postal_code",Bh,p);f(q,"region",Ch,p);f(q,"country",Bh,p)}return h},Wh=function(a,b){Uh(a,function(c){var d=Vh(c);b(d.Nf,d.Lh)})},Vh=function(a){for(var b=["tv.1"],c=0,d=0;d<a.length;++d){var e=a[d].name,f=a[d].value,g=a[d].index,h=Oh[e];h&&f&&(-1===Rh.indexOf(e)||/^e\d+$/.test(f)||Mh.test(f)||Jh.test(f))&&(void 0!==g&&(h+=g),b.push(h+"."+f),c++)}1===a.length&&"error_code"===a[0].name&&(c=0);return{Nf:encodeURIComponent(b.join("~")),
Lh:c}},Xh=function(a){if(z.Promise)try{return new Promise(function(b){Wh(a,function(c,d){b({Kj:c,Lh:d})})})}catch(b){}},Rh=Object.freeze(["email","phone_number","first_name","last_name","street"]);var N={g:{Ea:"ad_personalization",J:"ad_storage",N:"ad_user_data",R:"analytics_storage",Va:"region",ud:"consent_updated",We:"wait_for_update",pk:"ads",ag:"all",qk:"maps",rk:"playstore",sk:"search",tk:"shopping",uk:"youtube",ki:"app_remove",li:"app_store_refund",mi:"app_store_subscription_cancel",ni:"app_store_subscription_convert",oi:"app_store_subscription_renew",dg:"add_payment_info",eg:"add_shipping_info",ac:"add_to_cart",bc:"remove_from_cart",fg:"view_cart",Hb:"begin_checkout",fc:"select_item",
fb:"view_item_list",sb:"select_promotion",hb:"view_promotion",ra:"purchase",hc:"refund",Fa:"view_item",gg:"add_to_wishlist",wk:"exception",ri:"first_open",si:"first_visit",sa:"gtag.config",Pa:"gtag.get",ui:"in_app_purchase",ic:"page_view",xk:"screen_view",vi:"session_start",yk:"timing_complete",zk:"track_social",xd:"user_engagement",tb:"gclid",wa:"ads_data_redaction",ja:"allow_ad_personalization_signals",Xe:"allow_custom_scripts",Ye:"allow_display_features",yd:"allow_enhanced_conversions",ib:"allow_google_signals",
Ga:"allow_interest_groups",Ak:"app_id",Bk:"app_installer_id",Ck:"app_name",Dk:"app_version",jc:"auid",wi:"auto_detection_enabled",Ib:"aw_remarketing",Ze:"aw_remarketing_only",zd:"discount",Ad:"aw_feed_country",Bd:"aw_feed_language",Z:"items",Cd:"aw_merchant_id",hg:"aw_basket_type",Ic:"campaign_content",Jc:"campaign_id",Kc:"campaign_medium",Lc:"campaign_name",Mc:"campaign",Nc:"campaign_source",Oc:"campaign_term",ub:"client_id",xi:"content_group",yi:"content_type",Qa:"conversion_cookie_prefix",Pc:"conversion_id",
Ha:"conversion_linker",Jb:"conversion_api",af:"cookie_deprecation",Wa:"cookie_domain",Ka:"cookie_expires",Xa:"cookie_flags",kc:"cookie_name",Qc:"cookie_path",Ra:"cookie_prefix",mc:"cookie_update",nc:"country",xa:"currency",Dd:"customer_lifetime_value",Rc:"custom_map",zi