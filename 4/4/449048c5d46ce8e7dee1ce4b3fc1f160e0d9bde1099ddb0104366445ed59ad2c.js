/**
 * :: Madara Shortcodes
 * -------------------------------------------------- */
.clearfix:before,
.clearfix:after {
  content: " ";
  display: table;
}
.clearfix:after {
  clear: both;
}
.c-button.icon-left .button-icon {
  margin-right: 9px;
}
.c-button.icon-right .button-icon {
  margin-left: 9px;
}
.c-button .button-title {
  float: none;
}
.c-button .button-title,
.c-button .button-icon {
  display: inline-block;
  vertical-align: middle;
}
.c-button.border {
  background-color: transparent;
  border: 2px solid #ca383a;
  color: #ca383a;
}
.c-button.border:hover {
  border-color: #ffcc00;
}
.c-button.border.small {
  padding: 8px 13px;
}
.c-button.border.medium {
  padding: 13px 18px;
}
.c-button.border.large {
  padding: 18px 28px;
}
.c-button.border.x-large {
  padding: 28px 58px;
}
.c-button-wrap.inline {
  display: inline-block;
}
.c-button-wrap.left {
  max-width: 100%;
  text-align: left;
  display: block;
}
.c-button-wrap.right {
  max-width: 100%;
  text-align: right;
  display: block;
}
.c-button-wrap.center {
  max-width: 100%;
  text-align: center;
  display: block;
}
.c-compare-table .c-compare-table__inner .block-group > .shortcode-inner {
  width: 25%;
  float: none;
  display: inline-block;
  vertical-align: middle;
}
.c-compare-table .c-compare-table__inner .block-group > .shortcode-inner .c-column {
  width: 100%;
}
@media only screen and (max-width: 769px) {
  .c-compare-table .c-compare-table__inner .block-group > .shortcode-inner {
    width: calc(100% / 3);
    margin-bottom: 10px;
  }
}
@media only screen and (max-width: 767px) {
  .c-compare-table .c-compare-table__inner .block-group > .shortcode-inner {
    width: 100%;
  }
}
.c-compare-table.style-1 .c-compare-table__inner .block-group .c-column .block {
  padding: 34px 0 26px 0;
}
.c-compare-table.style-1 .c-compare-table__inner .block-group .c-column .block .c-title .item-title .heading {
  line-height: 30px;
}
.c-compare-table.style-1 .c-compare-table__inner .block-group .c-column .block .c-price .item-price .c-price {
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
.c-compare-table.style-1 .c-compare-table__inner .block-group .c-column .block .c-price .item-sub-title {
  padding-top: 17px;
  padding-bottom: 19px;
}
.c-compare-table.style-1 .c-compare-table__inner .block-group .c-column .block .c-price .item-sub-title p {
  margin-bottom: 0;
}
.c-compare-table.style-1 .c-compare-table__inner .block-group .c-column .block .c-summary {
  margin: 0;
}
.c-compare-table.style-1 .c-compare-table__inner .block-group .c-column .block .c-summary .item-summary p {
  font-size: 14px;
  line-height: 25px;
  margin-bottom: 6px;
}
.c-compare-table.style-1 .c-compare-table__inner .block-group .c-column .block .c-summary .item-summary:first-child {
  margin-bottom: 16px;
}
.c-compare-table.style-1 .c-compare-table__inner .block-group .c-column .block .c-summary .item-summary:last-child {
  margin-bottom: 0px;
}
.c-compare-table.style-1 .c-compare-table__inner .block-group .c-column .block .c-summary .item-summary .c-button-wrap {
  margin-bottom: 14px;
}
.c-compare-table.style-2 .c-compare-table__inner .block-group .c-column {
  padding-left: 0;
  padding-right: 0;
}
.c-compare-table.style-2 .c-compare-table__inner .block-group .c-column .block {
  text-align: left;
  border-radius: initial;
}
.c-compare-table.style-2 .c-compare-table__inner .block-group .c-column .block .c-title .item-title {
  padding: 0px 30px;
}
.c-compare-table.style-2 .c-compare-table__inner .block-group .c-column .block .c-title .item-title .heading {
  font-weight: bold;
  font-size: 24px;
}
.c-compare-table.style-2 .c-compare-table__inner .block-group .c-column .block .c-price {
  padding-top: 10px;
}
.c-compare-table.style-2 .c-compare-table__inner .block-group .c-column .block .c-price .item-price {
  width: auto;
  height: auto;
  border-radius: initial;
  padding: 29px 30px 27px 30px;
  margin-top: 0;
}
.c-compare-table.style-2 .c-compare-table__inner .block-group .c-column .block .c-price .item-price .c-price {
  padding: 0;
  line-height: 60px;
}
.c-compare-table.style-2 .c-compare-table__inner .block-group .c-column .block .c-price .item-sub-title {
  padding: 23px 30px;
  border-bottom: solid 1px #f5f5f5;
}
.c-compare-table.style-2 .c-compare-table__inner .block-group .c-column .block .c-price .item-sub-title p {
  margin: 0;
}
.c-compare-table.style-2 .c-compare-table__inner .block-group .c-column .block .c-summary {
  margin: 0;
}
.c-compare-table.style-2 .c-compare-table__inner .block-group .c-column .block .c-summary .item-summary {
  padding: 23px 30px;
  border-bottom: solid 1px #f5f5f5;
}
.c-compare-table.style-2 .c-compare-table__inner .block-group .c-column .block .c-summary .item-summary:last-child {
  border: none;
  padding-bottom: 0px;
}
.c-icon-box.style-5 .block.style-5 .block-items-wrap {
  -webkit-transition: background-color 150ms ease-in-out;
  -moz-transition: background-color 150ms ease-in-out;
  -o-transition: background-color 150ms ease-in-out;
  transition: background-color 150ms ease-in-out;
  width: 100%;
  height: 100%;
}
.c-icon-box.style-5.custom-content .c-icon-box__inner {
  display: table;
}
.c-icon-box.style-5.custom-content .c-icon-box__inner .block-list,
.c-icon-box.style-5.custom-content .c-icon-box__inner .custom_content {
  display: table-cell;
  width: 1140px;
}
.c-icon-box.style-5.custom-content .c-icon-box__inner .custom_content {
  vertical-align: middle;
  width: calc(100% - 1140px);
  padding: 0px 40px;
}
.c-icon-box.style-5.custom-content .c-icon-box__inner:after {
  content: '';
  display: block;
  clear: both;
}
@media only screen and (max-width: 1600px) {
  .c-icon-box.style-5.custom-content .c-icon-box__inner {
    display: block;
  }
  .c-icon-box.style-5.custom-content .c-icon-box__inner .block-list,
  .c-icon-box.style-5.custom-content .c-icon-box__inner .custom_content {
    display: block;
    width: 100%;
  }
  .c-icon-box.style-5.custom-content .c-icon-box__inner .custom_content * {
    text-align: center;
  }
}
.c-block {
  max-width: 100%;
  display: block;
}
.c-block.align-left {
  text-align: left;
}
.c-block.align-right {
  text-align: right;
}
.c-block.align-center {
  text-align: center;
}
.c-typo.align-left {
  text-align: left;
}
.c-typo.align-right {
  text-align: right;
}
.c-typo.align-center {
  text-align: center;
}
.c-typo > * {
  display: inline-block;
}
.c-testimonials .c-testimonials__inner .block-group {
  opacity: 0;
  transition: opacity 0.3s;
}
.c-testimonials .c-testimonials__inner .block-group.slick-initialized {
  opacity: 1;
}
.c-testimonials .block-group .c-column.slick-cloned img {
  padding-top: 0 !important;
}
.c-testimonials.style-1 .c-testimonials__inner .block-group .block .item-image img {
  margin-bottom: 0px !important;
}
.c-testimonials.style-1 .c-testimonials__inner .block-group .block .item-avatar img {
  display: inline;
}
.c-testimonials.style-1 .c-testimonials__inner .block-group .block.no-bg .item-avatar {
  margin-top: 0;
}
.c-testimonials.style-1 .c-testimonials__inner .block-group .block .c-testimonial__rating {
  margin-bottom: 20px;
}
.c-testimonials.style-1 .c-testimonials__inner .block-group .block .c-testimonial__rating > i {
  font-size: 17px;
  padding-left: 2px;
}
.c-testimonials.style-3 .block-group .block .c-position {
  margin-bottom: 17px;
}
.c-progress {
  color: #fff;
}
.c-progress:before,
.c-progress:after {
  content: " ";
  display: table;
}
.c-progress:after {
  clear: both;
}
.c-progress .c-progress-item.circle {
  text-align: center;
}
.c-progress .c-progress-item.circle .item-content .item-round {
  max-width: 200px;
  max-height: 200px;
  margin: 0 auto;
  position: relative;
}
.c-progress .c-progress-item.circle .item-content .item-caption {
  padding-top: 24px;
  font-size: 16px;
  font-weight: bold;
}
@media (min-width: 768px) {
  .c-col-5 {
    width: 20% !important;
  }
}
@media (min-width: 768px) {
  .c-col-7 {
    width: 14.285% !important;
  }
}
@media (min-width: 768px) {
  .c-col-8 {
    width: 12.5% !important;
  }
}
@media (min-width: 768px) {
  .c-col-9 {
    width: 11.111% !important;
  }
}
@media (min-width: 768px) {
  .c-col-10 {
    width: 10% !important;
  }
}
@media (min-width: 768px) {
  .c-col-11 {
    width: 9.0909% !important;
  }
}
.wpb_wrapper .c-download-box .c-download-box__inner .block .c-summary {
  margin-bottom: 20px;
  display: inline;
}
.wpb_wrapper .c-download-box .c-download-box__inner .block .c-summary .wpb_text_column {
  display: inline;
}
.c-download-box {
  width: 100%;
  position: relative;
}
.c-download-box .c-download-box__inner {
  background-color: #ca383a;
}
.c-download-box .c-download-box__inner .block {
  position: relative;
  z-index: 1;
}
.c-download-box .c-download-box__inner .block .c-summary,
.c-download-box .c-download-box__inner .block .c-summary * {
  color: #ffffff;
  margin-bottom: 0;
}
.c-download-box .c-download-box__inner .block .call-to-action .btn-custom {
  background-color: #FFFFFF;
  color: #111111;
}
.c-download-box .c-download-box__inner .block .call-to-action .btn-custom:hover {
  background-color: #ffcc00;
  color: #111111 !important;
}
.c-download-box.style-1 .c-download-box__inner {
  text-align: center;
}
.c-download-box.style-1 .c-download-box__inner .block {
  padding: 50px 20px;
}
.c-download-box.style-1 .c-download-box__inner .block .call-to-action {
  margin-top: 20px;
}
.c-download-box.style-2 .c-download-box__inner .block {
  padding: 20px 30px;
  display: table;
  width: 100%;
}
.c-download-box.style-2 .c-download-box__inner .block .block-left {
  display: table-cell;
  padding-right: 30px;
  vertical-align: middle;
}
@media (min-width: 768px) {
  .c-download-box.style-2 .c-download-box__inner .block .block-left {
    width: 80%;
    float: none;
  }
}
.c-download-box.style-2 .c-download-box__inner .block .block-right {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
}
@media (min-width: 768px) {
  .c-download-box.style-2 .c-download-box__inner .block .block-right {
    width: 20%;
    float: none;
  }
}
@media (max-width: 768px) {
  .c-download-box.style-2 .c-download-box__inner .block .block-right {
    margin-top: 20px;
  }
}
.c-contacts {
  display: inline-block;
}
.c-contacts .c-contact__inner .block-group {
  list-style: none;
  margin: 0;
}
.c-contacts .c-contact__inner .block-group .block:not(:last-child) {
  padding-bottom: 13px;
  margin-bottom: 13px;
  border-bottom: 1px solid #d2d0d2;
}
.c-contacts .c-contact__inner .block-group .block .c-name .item-name .heading {
  margin-bottom: 7px;
}
.c-contacts .c-contact__inner .block-group .block .c-title .item-title p {
  font-size: 14px;
  line-height: 26px;
  margin-bottom: 0px;
  color: #777777;
}
.c-contacts .c-contact__inner .block-group .block .c-company .item-company p {
  font-size: 14px;
  line-height: 26px;
  margin-bottom: 0px;
  color: #777777;
}
.c-contacts .c-contact__inner .block-group .block .c-meta {
  margin-top: 5px;
}
.c-contacts .c-contact__inner .block-group .block .c-meta .item-email a,
.c-contacts .c-contact__inner .block-group .block .c-meta .item-phone a,
.c-contacts .c-contact__inner .block-group .block .c-meta .item-email p,
.c-contacts .c-contact__inner .block-group .block .c-meta .item-phone p {
  font-size: 12px;
  font-weight: bold;
  color: #777777;
  margin-bottom: 0px;
  padding-left: 0px;
}
.c-contacts .c-contact__inner .block-group .block .c-meta .item-email a:before,
.c-contacts .c-contact__inner .block-group .block .c-meta .item-phone a:before,
.c-contacts .c-contact__inner .block-group .block .c-meta .item-email p:before,
.c-contacts .c-contact__inner .block-group .block .c-meta .item-phone p:before {
  display: none;
}
.c-contacts .c-contact__inner .block-group .block .c-meta .item-phone {
  margin-top: 3px;
}
.c-contacts .c-contact__inner .block-group .block .c-content {
  margin-top: 6px;
}
.c-contacts .c-contact__inner .block-group .block .c-content .item-content p {
  color: #777777;
  margin-bottom: 0px;
  font-size: 14px;
  line-height: 26px;
}
.c-separator {
  display: block;
  max-width: 100%;
  width: 100%;
}
.c-separator.left {
  margin-left: 0;
  margin-right: auto;
}
.c-separator.right {
  margin-left: auto;
  margin-right: 0;
}
.c-separator.center {
  margin: 0 auto;
}
.c-separator .c-separator-line {
  border-top: 1px solid #f5f5f5;
  display: block;
  position: relative;
  width: 100%;
}
.c-custom-box {
  text-align: center;
  overflow: hidden;
}
.c-custom-box .item-content {
  padding: 20px;
  font-size: 24px;
  line-height: 28px;
  height: 100%;
  display: table;
  float: none;
  position: absolute;
}
.c-custom-box .item-content .content-inner {
  display: table-cell;
  vertical-align: middle;
}
.c-word-rotator.style-sliding .heading {
  font-weight: normal;
}
.c-word-rotator.style-sliding .c-typed {
  overflow: hidden;
  position: relative;
  height: 44px;
  display: inline-block;
  vertical-align: top;
}
.c-word-rotator.style-sliding .c-typed ul {
  position: relative !important;
  line-height: inherit;
  padding: 0px 10px !important;
}
.c-word-rotator.style-sliding .c-typed ul li {
  list-style: none;
  text-align: center;
  height: inherit !important;
  font-weight: bold;
}
.c-welcome.style-1 .c-welcome__inner.full-screen {
  height: 100vh;
}
.c-welcome.style-1 .c-welcome__inner.full-screen .c-thumbnail {
  text-indent: -999em;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 100vh;
}
.c-members.basic-style .c-members__inner .block .item-hover {
  opacity: 0;
}
.c-members.basic-style .c-members__inner .block .item-hover:not(:hover) {
  background-color: transparent !important;
}
.c-members.basic-style .c-members__inner .block .item-hover:hover {
  opacity: 1;
}
.c-counter {
  display: inline-block;
}
.c-counter .c-counter__inner.align-left {
  text-align: left;
}
.c-counter .c-counter__inner.align-center {
  text-align: center;
}
.c-counter .c-counter__inner.align-right {
  text-align: right;
}
.c-counter .c-counter__inner .c-counter__value_wrap .c-counter__value {
  font-size: 72px;
  color: #ff2462;
  font-family: "Raleway", Arial, sans-serif;
  font-weight: bold;
  line-height: normal !important;
}
.c-counter .c-counter__inner .c-counter__content .heading {
  font-size: 24px;
  color: #111111;
  margin-top: 15px;
}
.c-counter .c-counter__inner .c-counter__content .content {
  font-size: 16px;
  color: #111111;
  padding-top: 8px;
}
.c-counter .c-counter__inner .c-counter__content .content .wpb_text_column {
  margin-bottom: 0px;
}
.c-counter .c-counter__inner .c-counter__content .content .c-button-wrap {
  margin-top: 21px;
}
.c-shortcode-menu .menu_content {
  width: 100%;
  text-align: left;
  display: block;
}
.c-shortcode-menu .menu_content:after {
  content: "";
  visibility: hidden;
  display: block;
  clear: both;
}
.c-shortcode-menu .menu_content .menu_image {
  width: 60px;
  height: 60px;
  float: left;
  overflow: hidden;
  margin-right: 15px;
  margin-top: 10px;
  border-radius: 100px;
  position: relative;
  z-index: 3;
}
.c-shortcode-menu .menu_content .menu_image img {
  width: auto;
  height: 60px;
}
.c-shortcode-menu .menu_content .menu_post {
  text-transform: uppercase;
  position: relative;
  margin-bottom: 0px;
}
.c-shortcode-menu .menu_content .menu_post .menu_title {
  position: relative;
  z-index: 2;
  padding-right: 5px;
}
@media (max-width: 768px) {
  .c-shortcode-menu .menu_content .menu_post .menu_title {
    max-width: 60%;
    display: inline-block;
  }
}
.c-shortcode-menu .menu_content .menu_post .menu_title .menu_icon {
  padding-right: 6px;
  font-size: 20px;
}
.c-shortcode-menu .menu_content .menu_post .menu_dots {
  position: absolute;
  top: 14px;
  left: 0;
  right: 0;
  z-index: 1;
  margin: 0;
  border: 0;
  height: 3px;
  display: block;
  background-image: radial-gradient(circle closest-side, #cccccc 80%, #ffffff 10%);
  background-position: bottom;
  background-size: 4px 2px;
  background-repeat: repeat-x;
}
.c-shortcode-menu .menu_content .menu_post .menu_price {
  position: absolute;
  right: 0;
  z-index: 2;
  padding-left: 5px;
  top: 1px;
}
.c-shortcode-menu .menu_content .post_detail {
  text-transform: none;
  letter-spacing: 0;
  width: auto;
  margin-top: 0;
  font-weight: normal;
  margin-bottom: 0;
  display: inline-block;
  margin-top: -3px;
  margin-bottom: 21px;
}
.c-shortcode-menu .menu_content .menu_excerpt_wrap {
  overflow: hidden;
}
.c-shortcode-menu.style-2 .menu_content .menu_post .menu_dots {
  left: 75px;
}
.c-shortcode-menu.ui-dark .menu_content .menu_post .menu_title,
.c-shortcode-menu.ui-dark .menu_content .menu_post .menu_price {
  color: #ffffff;
  background-color: #151515;
}
.c-shortcode-menu.ui-dark .menu_content .menu_post .menu_dots {
  background-image: radial-gradient(circle closest-side, #ffffff 80%, #151515 10%);
}
.c-shortcode-menu.ui-dark .menu_content .post_detail {
  color: #ffffff;
  background-color: #151515;
}
.c-shortcode-menu.ui-light .menu_content .menu_post .menu_title,
.c-shortcode-menu.ui-light .menu_content .menu_post .menu_price {
  color: #151515;
  background-color: #ffffff;
}
.c-shortcode-menu.ui-light .menu_content .menu_post .menu_dots {
  background-image: radial-gradient(circle closest-side, #151515 80%, #ffffff 10%);
}
.c-shortcode-menu.ui-light .menu_content .post_detail {
  color: #151515;
}
.c-shortcode-menu.style-1 .menu_content .menu_post .menu_title {
  top: 1px;
  background-color: transparent;
}
.c-shortcode-menu.style-1 .menu_content .menu_post .menu_dots {
  display: none;
}
.c-shortcode-menu.style-1 .menu_content .menu_post .menu_price {
  background-color: transparent;
  font-weight: normal;
}
.c-shortcode-menu.style-1 .menu_content .post_detail {
  background-color: transparent;
}
.c-shortcode-menu.style-1.ui-dark .menu_content .menu_post .menu_title,
.c-shortcode-menu.style-1.ui-dark .menu_content .menu_post .menu_price {
  color: #151515;
}
.c-shortcode-menu.style-1.ui-dark .menu_content .post_detail {
  color: #151515;
}
.c-shortcode-menu.style-1.ui-light .menu_content .menu_post .menu_title,
.c-shortcode-menu.style-1.ui-light .menu_content .menu_post .menu_price {
  color: #ffffff;
}
.c-shortcode-menu.style-1.ui-light .menu_content .post_detail {
  color: #ffffff;
}
.shortcode-block .c-block > * {
  position: relative;
  z-index: 1;
}
.shortcode-block .c-block > .mask {
  z-index: 0;
  position: absolute;
}
/**
 * Services Listing shortcode
 */
.c-services.style-1 .c-thumbnail {
  margin-bottom: 25px;
}
/**
 * Shortcode CountDown
 */
.c-countdown {
  display: block;
  width: 100%;
}
.c-countdown .c-countdown__inner {
  display: block;
}
.c-countdown .c-countdown__inner .countdown-row {
  display: block;
}
.c-countdown .c-countdown__inner .countdown-row:after {
  display: block;
  content: "";
  clear: both;
}
.c-countdown .c-countdown__inner .countdown-row .countdown-section {
  width: 25%;
  display: block;
  float: left;
  text-align: center;
}
.c-countdown .c-countdown__inner .countdown-row .countdown-section .countdown-amount {
  font-size: 72px;
  line-height: 72px;
  font-weight: bold;
  display: block;
  padding-bottom: 17px;
  font-family: "Raleway", Arial, sans-serif;
}
.c-countdown .c-countdown__inner .countdown-row .countdown-section .countdown-period {
  font-size: 18px;
  line-height: 26px;
  font-weight: bold;
  display: block;
  font-family: "Raleway", Arial, sans-serif;
}
.c-gallery .c-gallery__inner .block-group .gallery-item .block-content .item-content .item-hover i {
  top: 50%;
  left: 50%;
  position: absolute;
  -o-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  webkit-transition: all 0.2s ease-in-out;
  -moz-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  opacity: 0;
}
.c-gallery .c-gallery__inner .block-group .gallery-item .block-content:hover .item-content .item-hover i {
  opacity: 1 !important;
  color: #ffffff;
  font-size: 20px;
}
#swipebox-overlay {
  background-color: rgba(0, 0, 0, 0.92) !important;
}
#swipebox-close {
  right: 29px !important;
  top: 12px !important;
  opacity: 0.6;
  webkit-transition: all 0.2s ease-in-out;
  -moz-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}
#swipebox-close:hover {
  opacity: 1;
  transform: rotateZ(90deg);
}
.c-block-quote {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
}
.c-block-quote.left {
  float: left;
}
.c-block-quote.right {
  float: right;
}
.c-block-quote .c-block-quote-content {
  padding: 30px;
}
.c-block-quote .c-block-quote-content.is-background {
  background-repeat: no-repeat;
  background-position: top left;
}
.c-block-quote .c-block-quote-content .quote-background {
  position: absolute;
  top: 0;
  left: 0;
}
.c-block-quote .c-block-quote-content .quote-background > i {
  font-size: 90px;
  color: #000000;
  opacity: 0.2;
}
.c-block-quote .c-block-quote-content .quote-content {
  display: block;
  font-size: 48px;
  line-height: 60px;
  color: #f54828;
  position: relative;
  z-index: 2;
}
.c-block-quote .c-block-quote-content .quote-content.center {
  text-align: center;
}
.c-block-quote .c-block-quote-content .quote-content.right {
  text-align: right;
}
/* Lightbox for Portfolio Shortcode*/
.c-projects .c-thumbnail.light-box {
  -webkit-transition: 0.2s opacity ease-in-out;
  -moz-transition: 0.2s opacity ease-in-out;
  transition: 0.2s opacity ease-in-out;
}
.c-projects .c-thumbnail.light-box:hover {
  opacity: 0.7;
}

.text2row {
    display: -webkit-box;
    overflow: hidden;
    white-space: normal;
    word-wrap: break-word;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}

.grid9 .item{display: inline-block}
body:not(.mobile) .grid9{margin:0; padding:0; list-style: none}
body:not(.mobile) .grid9 .item{float: left; margin:0 17px 34px 17px}
body:not(.mobile) .grid9:after{content:'';display:block;clear:both}
body:not(.mobile) .grid9 .item:nth-child(5),body:not(.mobile)  .grid9 .item:nth-child(9){margin-right: 0}
body:not(.mobile) .grid9 .grid_col_4{width: 380px; background: #FFF; height: 700px; margin-left: 0}
.grid9 .grid_col_4 .item-inner{padding: 20px}
body:not(.mobile) .grid9 .grid_col_2{width: 148px; min-height: 324px}
.grid9 .grid_col_2 .post-title h3{font-size:14px}
.grid9 .item-thumb{text-align: center; margin:0 0 10px 0}
body:not(.mobile) .grid9 .grid_col_2 .item-thumb{height: 214px}
.grid9 .grid_col_4 .item-thumb{margin-bottom: 20px}
.grid9 .grid_col_4 .post-title a{color: #000}
.grid9 .post-title h3{margin: 0}
.grid9 .meta-item.rating .ratings_stars{font-size:18px;}
.grid9 .meta-item.rating .score{font-size:16px; padding: 0 6px}
.grid9 .grid_col_4 .meta-item.genres{font-size: 13px}
.grid9 .grid_col_4 .meta-item.genres a, .grid9 .grid_col_4 a.c-read-more-link{color:#999}
.c-blog-post .entry-content .entry-content_wrap .grid9 .grid_col_4 .description p{margin-bottom: 0}

@media (max-width: 1200px){
	body:not(.mobile) .grid9 .item:nth-child(4), body:not(.mobile) .grid9 .item:nth-child(7){margin-right: 0}
	body:not(.mobile) .grid9 .item:nth-child(5), body:not(.mobile) .grid9 .item:nth-child(9){margin-right: 17px}
	body:not(.mobile) .grid9 .item:nth-child(8), body:not(.mobile) .grid9 .item:nth-child(9){display: none}
}

@media (max-width: 992px){
	body:not(.mobile) .grid9 .item:nth-child(4),body:not(.mobile) .grid9 .item:nth-child(5){margin-bottom:0}
	body:not(.mobile) .grid9 .item:nth-child(8), body:not(.mobile) .grid9 .item:nth-child(9){display: block}
	body:not(.mobile) .grid9 .item:nth-child(3), body:not(.mobile) .grid9 .item:nth-child(5),body:not(.mobile) .grid9 .item:nth-child(7), body:not(.mobile) .grid9 .item:nth-child(9){margin-right: 0}
	body:not(.mobile) .grid9 .item:nth-child(4){margin-right: 17px; }
	body:not(.mobile) .grid9 .grid_col_4{width: 330px; height: 675px; margin-bottom: 0; margin-right: 13px}
	body:not(.mobile) .grid9 .item:nth-child(6){clear:both; margin-left: 0}
	body:not(.mobile) .grid9 .item:nth-child(6),body:not(.mobile) .grid9 .item:nth-child(7),body:not(.mobile) .grid9 .item:nth-child(8),body:not(.mobile) .grid9 .item:nth-child(9){margin-top:20px}
}

.grid9 .slick-prev{left:0; z-index: 1}
.grid9 .slick-next{right:0; z-index: 1}
.grid9 .slick-prev:before, .grid9 .slick-next:before{font-size: 25px}
.grid9{display: none}

.grid9.block, .grid9.slick-initialized{display: block}
.mobile .grid9 .item{padding:0 5px}
.mobile .grid9 .description{display: none}
.mobile .grid9 .grid_col_4 .item-inner{padding:0}


.manga-chapters-listing{}
.manga-chapters-listing th.genre, .manga-chapters-listing th.time{width: 120px}
.manga-chapters-listing th.title{width: 50%}
.manga-chapters-listing .font-meta{font-size:1em}

.grid9.block .badge-pos-2 .item-thumb{position: relative}
.grid9.block .badge-pos-2 .item-thumb .manga-title-badges{left:0}

.shortcode-manga-chapters .listing-chapters_wrap > ul.main.version-chap li{padding:5px 0}
.shortcode-manga-chapters.border-0 .listing-chapters_wrap > ul.main.version-chap li:after{visibility:hidden;display:none}

.page-listing-item.shortcode-manga-chapters ul.version-chap{
    flex-wrap: wrap;
    display: flex;
}
.page-listing-item.shortcode-manga-chapters.cols-4 ul.version-chap li{
    flex: 1 0 25%;
    padding-right:10px
}
.page-listing-item.shortcode-manga-chapters.cols-3 ul.version-chap li{
    flex: 1 0 33%;
    padding-right:10px
}
.page-listing-item.shortcode-manga-chapters.cols-2 ul.version-chap li{
    flex: 1 0 50%;
    padding-right:10px
}
.page-listing-item.shortcode-manga-chapters.cols-1 ul.version-chap li{
    flex: 1 0 100%;
    padding-right:10px
}

@media (max-width: 992px){
    .page-listing-item.shortcode-manga-chapters.cols-4 ul.version-chap li{
        flex: 1 0 33%;
    }
}
@media (max-width: 768px){
    .page-listing-item.shortcode-manga-chapters.cols-4 ul.version-chap li, .page-listing-item.shortcode-manga-chapters.cols-3 ul.version-chap li{
        flex: 1 0 50%;
    }
}
@media (max-width: 576px){
    .page-listing-item.shortcode-manga-chapters.cols-4 ul.version-chap li, .page-listing-item.shortcode-manga-chapters.cols-3 ul.version-chap li, .page-listing-item.shortcode-manga-chapters.cols-2 ul.version-chap li{
        flex: 1 0 100%;
    }
}
    
.page-listing-item.shortcode-manga-chapters.cols-2 .listing-chapters_wrap > ul.main.version-chap li .chapter-release-date,.page-listing-item.shortcode-manga-chapters.cols-3 .listing-chapters_wrap > ul.main.version-chap li .chapter-release-date,.page-listing-item.shortcode-manga-chapters.cols-4 .listing-chapters_wrap > ul.main.version-chap .chapter-release-date,.page-listing-item.shortcode-manga-chapters.cols-5 .listing-chapters_wrap > ul.main.version-chap li .chapter-release-date{position:relative; display:inline-block;transform:initial;top:9px}

.page-listing-item.shortcode-manga-chapters.chapter-listing-2 .wp-manga-chapter a:not(.c-new-tag){background:#CCC;padding:2px 10px;border-radius:10px; margin-bottom:10px}oocommerce-page input[type="tel"]:active, .text-ui-light.woocommerce-page .input-text:active, .text-ui-light.woocommerce-page input[type="text"]:hover, .text-ui-light.woocommerce-page input[type="email"]:hover, .text-ui-light.woocommerce-page input[type="search"]:hover, .text-ui-light.woocommerce-page input[type="url"]:hover, .text-ui-light.woocommerce-page input[type="password"]:hover, .text-ui-light.woocommerce-page input[type="tel"]:hover, .text-ui-light.woocommerce-page .input-text:hover, .text-ui-light.woocommerce-page select.orderby:hover  { border-color: #000fba ;}.site-header .c-sub-header-nav .c-sub-nav_wrap .sub-nav_content .sub-nav_list > li.menu-item-has-children > ul.sub-menu, .site-header .c-sub-header-nav .c-sub-nav_wrap .c-modal_item .c-user_item .c-user_menu { border-bottom-color: #000fba ;}.widget.widget_tag_cloud .tag-cloud-link:hover, body.page .c-page-content .c-page .c-page__content .page-content-listing .page-listing-item .page-item-detail .item-summary .list-chapter .chapter-item .chapter:hover, .popular-slider .slider__container .slider__item .slider__content .slider__content_item .chapter-item .chapter a:hover, .widget.c-popular .popular-item-wrap .popular-content .chapter-item .chapter:hover, .site-footer .top-footer .wrap_social_account ul.social_account__item li a, .site-content .main-col .item-tags ul li a:hover, .popular-slider .slider__container .slick-arrow:hover, .widget.background.widget_tag_cloud .tag-cloud-link:hover, .wp-pagenavi a:hover, body.search.search-results .search-wrap .tab-content-wrap .c-tabs-item .c-tabs-item__content .tab-meta .latest-chap .chapter:hover, .go-to-top:hover, .widget.c-popular .widget-view-more, body.search .c-search-header__wrapper .search-content .search-form .search-submit, body.reading-manga .entry-header .select-pagination .nav-links .nav-next a:not(:hover), body.reading-manga .c-select-bottom .select-pagination .nav-links .nav-next a:not(:hover), body.reading-manga .entry-header .entry-header_wrap .action-icon ul li:hover a, body.reading-manga .c-select-bottom .entry-header_wrap .action-icon ul li:hover a, .widget.c-released .released-search form [type="submit"], body.manga-page .profile-manga .tab-summary .loader-inner > div, .wpcf7-submit, .woocommerce #respond input#submit.alt, .woocommerce a.button.alt, .woocommerce button.button.alt, .woocommerce input.button.alt, .woocommerce .woocommerce-cart-form .cart button.button, .woocommerce .cart input.button:not(:hover), #adult_modal .modal-footer .btn.btn-primary:not(:hover), body.reading-manga .entry-header .select-pagination .nav-links > * a, body.reading-manga .c-select-bottom .select-pagination .nav-links > * a, .settings-page .list-chapter .chapter-item .chapter:hover, body.modal-open .modal .modal-content .modal-body .login .submit .wp-submit:not(:hover), .settings-page .tabs-content-wrap .my_account_orders a.button.view, .main-bg { background-color: #000fba ;}:root{ --madara-main-color: #000fba}body.search.search-results .search-wrap .tab-content-wrap .c-tabs-item .c-tabs-item__content .tab-meta .latest-chap .chapter:hover a, .wp-pagenavi a:hover{color:#FFF !important}a:not(.btn-link):hover, .c-breadcrumb .breadcrumb li a:hover, .tab-wrap .c-nav-tabs ul.c-tabs-content li.active a, .tab-wrap .c-nav-tabs ul.c-tabs-content li:hover a, .c-blog-post .entry-header .entry-meta .post-on .posted-on a:hover, .c-blog-post .entry-header .entry-meta .post-on .c-blog__date .post-category a:hover, body.manga-page .content-readmore:hover, body.text-ui-light.manga-page .content-readmore:hover, body.manga-page .chapter-readmore:hover, body.page .c-page-content .c-page .c-page__content .page-content-listing .page-listing-item .page-item-detail .item-summary .list-chapter .chapter-item .vol a:hover, .site-header .main-navigation.style-1 .search-navigation .search-navigation__wrap .link-adv-search a:hover, .woocommerce ul.products li.product h2:hover, .woocommerce .c-woo-breadcrumb a:hover, .genres_wrap .genres__collapse .genres ul li a:hover, .genres_wrap .genres__collapse .genres ul li a:hover:before ,.widget.c-released .released-item-wrap ul.list-released li a:hover,body.search.search-results .search-wrap .tab-content-wrap .c-tabs-item .c-tabs-item__content .tab-summary .post-content .post-content_item .summary-content:not(.release-year) a:hover, body.search.search-results .search-wrap .tab-content-wrap .c-tabs-item .c-tabs-item__content .tab-summary .post-content .post-content_item .summary-content.release-year a:hover{ color: #000fba;}.tab-wrap .c-nav-tabs ul.c-tabs-content li.active a:after, .tab-wrap .c-nav-tabs ul.c-tabs-content li:hover a:after, { background: #000fba;}body.page .c-page-content .c-page .c-page__content .page-content-listing .page-listing-item .page-item-detail .item-summary .manga-title-badges.hot { background-color: #ff41a2 ;}body.page .c-page-content .c-page .c-page__content .page-content-listing .page-listing-item .page-item-detail .item-summary .manga-title-badges.new { background-color: #f635fb ;}.meta-item.rating .rating_current, .meta-item.rating .rating_current_half, body.manga-page .profile-manga .tab-summary .post-rating i.ion-ios-star, body.manga-page .profile-manga .tab-summary .post-rating i.ion-ios-star.rating_current, body.manga-page .profile-manga .tab-summary .post-rating i.ion-ios-star-half, body.manga-page .profile-manga .tab-summary .post-rating .user-rating i.ion-ios-star, body.manga-page .profile-manga .tab-summary .post-rating .post-total-rating i.ion-ios-star, body.manga-page .profile-manga .tab-summary .post-rating .post-total-rating i.ion-ios-star.rating_current, body.manga-page .profile-manga .tab-summary .post-rating .user-rating i.ion-ios-star, body.manga-page .profile-manga .tab-summary .post-rating .user-rating i.ion-ios-star.rating_current, .woocommerce .star-rating, .woocommerce .star-rating::before,
body.manga-page .profile-manga .tab-summary .post-rating .post-total-rating i.ion-ios-star-half { color: #fc9443 ;}
			#pageloader.spinners{
				position:fixed;
				top:0;
				left:0;
				width:100%;
				height:100%;
				z-index:99999;
				background:#222
			}
		
			p.madara-unyson{
				color: #FF0000;
			}
		
			.table.table-hover.list-bookmark tr:last-child td{
				text-align: center;
			}
		#adminmenu .wp-submenu li.current { display: none !important;}.show_tgmpa_version{ float: right; padding: 0em 1.5em 0.5em 0; }.tgmpa > h2{ font-size: 23px; font-weight: 400; line-height: 29px; margin: 0; padding: 9px 15px 4px 0;}.update-php{ width: 100%; height: 98%; min-height: 850px; padding-top: 1px; }@media only screen and (-webkit-min-device-pixel-ratio: 2),(min-resolution: 192dpi) {
				/* Retina Logo */
				.site-header .c-header__top .wrap_branding a {background:url(https://manhwatop.com/wp-content/uploads/2020/03/LOGO.png) no-repeat center; background-size:contain; display:block; max-width: 100%}
				.site-header .c-header__top .wrap_branding a img{ opacity:0; visibility:hidden;}
			}.c-blog-post .entry-content .entry-content_wrap .read-container img.alignleft { margin: 10px 30px 10px 0 !important; } .c-blog-post .entry-content .entry-content_wrap .read-container img.alignright { margin: 10px 0px 10px 30px !important; } .read-container i.fas.fa-spinner.fa-spin{ font-size: 31px; color: #888; }.c-blog-post .entry-content .entry-content_wrap .read-container img{ cursor : pointer; }.choose-avatar .loading-overlay {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background-color: rgba(255, 255, 255, 0.72);
			z-index: 1;
			display: none;
		}

		.choose-avatar .loading-overlay i.fas.fa-spinner {
			font-size: 40px;
			color: #ec3348;
		}

		.choose-avatar .loading-overlay .loading-icon {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%,-50%);
		}

		.choose-avatar.uploading .loading-overlay {
			display: block;
		}.site-header .c-sub-header-nav .entry-header {
			display: none;
			margin-bottom: 15px;
		}

		.site-header .c-sub-header-nav.sticky .entry-header {
			display: block;
		}

		.site-header .c-sub-header-nav.hide-sticky-menu.sticky .c-sub-nav_wrap{
			display:none;
		}
		.site-header .c-sub-header-nav.hide-sticky-menu .entry-header{
			margin-top:15px;
		}
		@media (max-width: 480px) {.c-blog-post .entry-content .entry-content_wrap .reading-content{margin-left:-15px;margin-right:-15px}}ul.social_manhwatop__item{list-style:none;padding:0}.social_manhwatop__item li{margin-bottom:10px;display:block;width:100%;text-align:left;height:auto}.social_manhwatop__item a{padding:5px 10px;color:#fff;display:block;font-size:15px}.social_manhwatop__item a i{margin-right:5px}.social_manhwatop__item a:hover{color:#fff;box-shadow:0 0 10px rgba(0,0,0,.15)}.social_manhwatop__item a.social-fb{background-color:#3b5999}.social_manhwatop__item a.social-tw{background-color:#55acee}.social_manhwatop__item a.social-pin{background-color:#cd2129}.social_manhwatop__item a.social-yt{background-color:#cd201f}.social_manhwatop__item a.social-ins{background-color:#3b5999}.social_manhwatop__item a.social-fl{background-color:#ff007e}.social_manhwatop__item a.social-reddit {background-color: #ff4500;}.shark-item {min-height: 45px;}.widget-manga-popular-display.heading-style-2 .style-1 .c-blog__heading.style-2 {margin-bottom: 15px;}.site-header .main-navigation .main-navigation_wrap {padding: 15px 0;}.wp-manga-tags-list a {display: inline-block;background-color: #ebebeb;border-radius: 25px;padding: 5px 10px;margin-bottom: 10px;}.wp-manga-tags-list a:hover{background-color: #55acee;color:#fff;}.widget.manga-history-widget .my-history .my-history-item-wrap .my-history-title {width: 100%;padding: 0;}body.manga-page .summary__content a {font-weight: bold;}.my-history-title a {display: -webkit-box;max-width: 100%;-webkit-line-clamp: 2;-webkit-box-orient: vertical;overflow: hidden;text-overflow: ellipsis;}@media screen and (min-width: 1280px){.site-header .c-sub-header-nav .c-sub-nav_wrap .sub-nav_content {width: 80%;}.site-header .c-sub-header-nav .c-sub-nav_wrap .c-modal_item {width: 20%;}.site-header .c-sub-header-nav .c-sub-nav_wrap .sub-nav_content .sub-nav_list li a {padding: 10px;}}@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : portrait) {.shark-item-wrap .col-lg-2 {flex: 0 0 20%;max-width: 20%;}.shark-item-wrap .col-lg-2:last-child {display: none;}#manga-shark-2 {margin: 0;}#manga-shark-3 {margin: 0;}.c-page-content .sidebar-col {flex: 0 0 100%;max-width: 100%;}.c-page-content .main-col:not(.sidebar-hidden) {flex: 0 0 100%;max-width: 100%;}#custom_html-15 .textwidget.custom-html-widget p {width: 50%;float: left;margin: 0;display: flex;align-items: center;}#custom_html-15 .textwidget.custom-html-widget p .alignnone {margin-bottom: 15px;}body.manga-page .profile-manga .tab-summary .summary_image {display: table-cell;margin: 0;}body.manga-page .profile-manga .tab-summary .summary_content_wrap {display: table-cell;}}@media screen and (min-width: 577) and (max-width: 767px){.c-page-content .sidebar-col {flex: 0 0 100%;max-width: 100%;}.c-page-content .main-col:not(.sidebar-hidden) {flex: 0 0 100%;max-width: 100%;}}@media screen and (max-width: 576px){body.manga-page .page-content-listing.single-page .listing-chapters_wrap ul.main.version-chap li {display: flex;justify-content: space-between;align-items: center;}body.manga-page .page-content-listing.single-page .listing-chapters_wrap ul.main.version-chap li::after, .shortcode-manga-chapters .listing-chapters_wrap ul.main.version-chap li::after {bottom: 0;}.body-wrap .site-header .c-sub-header-nav .c-sub-nav_wrap .sub-nav_content .sub-nav_list li a {padding: 5px;}.settings-page table.list-bookmark .mange-name {display: flex;}.settings-page table.list-bookmark tr {background-color: #f5f5f5;}.settings-page table.list-bookmark tbody tr td div.mange-name::before {display: none;}.settings-page table.list-bookmark tbody tr td div.mange-name .item-thumb {width: 70px;}.settings-page .mange-name .item-infor .post-title h3 a {color: #000fba;padding-left: 10px;}.settings-page .post-on {margin: 0;}.settings-page table.list-bookmark tbody tr td div::before {padding: 0;}.settings-page table.list-bookmark tbody tr td div.action {margin: 0;}.settings-page .action .checkbox label {margin: 0;}.settings-page .action i.ion-ios-close::before {font-size: 36px;line-height: 1;position: absolute;top: -24px;left: 0;}.settings-page .action .wp-manga-delete-bookmark {position: relative;display: inline-block;}body.text-ui-light .settings-page table.list-bookmark tr { background-color: #f5f5f5;}body.text-ui-light .settings-page table.list-bookmark tbody tr td div::before {color: #f1f1f1;}}@media screen and (max-width: 414px){.c-sidebar.c-top-sidebar {padding: 30px 0 0 !important;}.c-sidebar.c-top-second-sidebar {padding: 30px 0 0 !important;}.c-blog__heading.style-2 {margin-bottom: 15px;display: flex;}body.reading-manga .site-header .main-navigation.style-1 .wrap_branding {width: 45%;}.site-header .main-navigation.style-1 .wrap_branding a img {max-width: 100%;}}@media screen and (max-width: 375px){.c-blog__heading.style-2.font-heading h4 {font-size: 16px;padding-bottom: 10px;}.c-blog__heading.style-2.font-heading h4 .fa {display: none;}}
.c-blog-post .entry-content .entry-content_wrap .read-container img {margin: 0 auto;}
body.manga-page.text-ui-light .profile-manga, body.text-ui-light .c-sidebar.c-top-second-sidebar {background-image: none !important;}
body.text-ui-light .wp-manga-tags-list a {background-color: darkblue;}
body.text-ui-light .settings-page table.list-bookmark tr {background-color: #222;border-color: #555;}
body.text-ui-light .settings-page .mange-name .item-infor .post-title h3 a {color: #eee;padding-left: 10px;}
#disqus_thread iframe[sandbox^="allow"] {display: none;visible:hidden;}
.manga_content .wp-pagenavi {float: none;text-align: center;}
.site-header .c-sub-header-nav.with-border {background-color: #dfdfdf;}
.reading-content .page-break img{min-width: 50px; min-height: 50px;}
body.text-ui-light .reading-content .page-break, body.text-ui-light .reading-content .page-break img{background-color:#262626;}
.shark-item-wrap .popular-content {padding: 50px 20px 5px;background: linear-gradient(to bottom,rgba(255,255,255,0),#000);}
#menu-menu-recommendation li:nth-child(1) {
  background-color: #8b00e9;
}
#menu-menu-recommendation li:nth-child(2) {
  background-color: #eea800;
}
#menu-menu-recommendation li:nth-child(3) {
  background-color: #fd337f;
}
#menu-menu-recommendation li:nth-child(4) {
  background-color: #0F1128;
}
#menu-menu-recommendation li:nth-child(5) {
  background-color: #434458;
}

body.manga-page .page-content-listing.single-page .listing-chapters_wrap ul.version-chap, .shortcode-manga-chapters .listing-chapters_wrap ul.version-chap {
  display: flex;
  flex-wrap: wrap;
  margin-left: -5px;
}
body.manga-page .page-content-listing.single-page .listing-chapters_wrap ul.main.version-chap li, .shortcode-manga-chapters .listing-chapters_wrap ul.main.version-chap li {
  flex: 0 0 calc(33.3333% - 5px);
  background-color: #f5f5f5;
  margin-top: 5px;
  margin-left: 5px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
body.manga-page .page-content-listing.single-page .listing-chapters_wrap ul.main.version-chap li .chapter-release-date, .shortcode-manga-chapters .listing-chapters_wrap ul.main.version-chap li .chapter-release-date {
    font-size: 12px;
    right: 10px;
}
body.manga-page .page-content-listing.single-page .listing-chapters_wrap ul.main.version-chap li::after, .shortcode-manga-chapters .listing-chapters_wrap ul.main.version-chap li::after {
  display: none;
}
body.manga-page .page-content-listing.single-page .listing-chapters_wrap ul li a, .shortcode-manga-chapters .listing-chapters_wrap ul li a {
    padding: 10px 0;
    padding-right: 0px;
    font-size: 15px;
    padding-right: 75px;
    width: 100%;
}
@media screen and (max-width:414px){
    body.manga-page .profile-manga .tab-summary .summary_content_wrap .summary_content {
    	padding: 10px;
    }
    body.manga-page .profile-manga .tab-summary .post-content_item {
    	display: inline-block;
    }
    body.manga-page .page-content-listing.single-page .listing-chapters_wrap ul.main.version-chap li, .shortcode-manga-chapters .listing-chapters_wrap ul.main.version-chap li {
        flex: 0 0 calc(50% - 5px);
        flex-wrap: wrap;
    }
    body.manga-page .page-content-listing.single-page .listing-chapters_wrap ul li a, .shortcode-manga-chapters .listing-chapters_wrap ul li a {
        padding-right: 0px;
        padding-bottom: 5px;
    }
    body.manga-page .page-content-listing.single-page .listing-chapters_wrap ul.main.version-chap li .chapter-release-date, .shortcode-manga-chapters .listing-chapters_wrap ul.main.version-chap li .chapter-release-date {
        font-size: 12px;
        right: 10px;
        line-height: 1.42;
        padding-left: 10px;
    }
}
</style>
<script type="text/javascript" src="https://manhwatop.com/wp-includes/js/jquery/jquery.min.js" id="jquery-core-js"></script>
<link rel="https://api.w.org/" href="https://manhwatop.com/wp-json/" />
<script async data-cfasync="false" src="https://cdn.pubfuture-ad.com/v2/unit/pt.js" type="text/javascript"></script>
<script data-cfasync="false">
		(function(uvthw){
		var d = document,
		    s = d.createElement('script'),
		    l = d.scripts[d.scripts.length - 1];
		s.settings = uvthw || {};
		s.src = "\/\/busyexit.com\/cCD.9-6Qbx2Q5llXS\/WjQ\/9\/NFDUgrxQOoDFQXydObSG0\/0yO\/DaEU4_NFDcMlwn";
		l.parentNode.insertBefore(s, l);
		})({})
	</script>

<script async src="https://www.googletagmanager.com/gtag/js?id=G-BWY3F7GNTF"></script>
<script>
	  window.dataLayer = window.dataLayer || [];
	  function gtag(){dataLayer.push(arguments);}
	  gtag('js', new Date());

	  gtag('config', 'G-BWY3F7GNTF');
	</script>
<script type="text/javascript">var infolinks_pid = 3299380;var infolinks_wsid = 1;</script>
<script type="text/javascript" src="//resources.infolinks.com/js/infolinks_main.js"></script>
</head>
<body class="archive post-type-archive post-type-archive-wp-manga wp-embed-responsive wp-manga-page page header-style-1 sticky-enabled sticky-style-2 is-sidebar text-ui-dark">
<div class="wrap">
<div class="body-wrap">
<header class="site-header">
<div class="c-header__top">
<ul class="search-main-menu">
<li>
<form id="blog-post-search" action="https://manhwatop.com/" method="get">
<input type="text" placeholder="Search..." name="s" value>
<input type="submit" value="Search">
<div class="loader-inner line-scale">
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
</div>
</form>
</li>
</ul>
<div class="main-navigation style-1 ">
<div class="container ">
<div class="row">
<div class="col-md-12">
<div class="main-navigation_wrap">
<div class="wrap_branding">
<a class="logo" href="https://manhwatop.com/" title="MANHWATOP">
<img class="img-responsive" src="https://manhwatop.com/wp-content/uploads/2020/03/LOGO.png" alt="MANHWATOP" />
</a>
</div>
<div class="main-menu">
<ul class="nav navbar-nav main-navbar"><li id="menu-item-9" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-9"><a href="/"><i class="fas fa-home"></i> HOME</a></li>
<li id="menu-item-366" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-366"><a href="/manga?m_orderby=latest">ALL MANGA</a></li>
<li id="menu-item-32797" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-32797"><a href="https://manhwatop.com/manhwa-recommendations-listing/">RECOMMENDED</a></li>
<li id="menu-item-9668" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-9668"><a target="_blank" rel="nofollow" href="https://librarynovel.com/?utm_source=manhwatop">READ NOVEL</a></li>
<li id="menu-item-420" class="menu-item menu-item-type-post_type menu-item-object-page current_page_parent menu-item-420"><a href="https://manhwatop.com/blog/">BLOG</a></li>
<li id="menu-item-8320" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-8320"><a rel="nofollow" href="https://manhwatop.com/donate">DONATE</a></li>
</ul> </div>
<div class="search-navigation search-sidebar">
<div id="custom_html-32" class="widget_text widget col-12 col-md-12   default  no-icon heading-style-1 widget_custom_html"><div class="widget_text widget__inner widget_custom_html__inner c-widget-wrap"><div class="widget_text widget-content"><div class="textwidget custom-html-widget"><script>	
var _0x3642=['location','4860FdzLCD','http://','top','manhwa','157823BgeqKy','40359vZdate','log','61JbHVEL','2QSgQFo','235779gGzopF','.com','1435749ezrPsN','origin','716645xxStot','342306HRaLsd','55JpwYbC','1FDyqem','https://','href'];function _0x3117(_0x1429b8,_0x96d703){_0x1429b8=_0x1429b8-0xb9;var _0x364204=_0x3642[_0x1429b8];return _0x364204;}var _0x19f91a=_0x3117;(function(_0x195a1e,_0x1dc959){var _0x536e07=_0x3117;while(!![]){try{var _0x290298=-parseInt(_0x536e07(0xcb))*parseInt(_0x536e07(0xc3))+parseInt(_0x536e07(0xc1))+parseInt(_0x536e07(0xbb))*parseInt(_0x536e07(0xc0))+parseInt(_0x536e07(0xc7))*-parseInt(_0x536e07(0xba))+parseInt(_0x536e07(0xbe))+parseInt(_0x536e07(0xbc))+parseInt(_0x536e07(0xcc))*-parseInt(_0x536e07(0xc2));if(_0x290298===_0x1dc959)break;else _0x195a1e['push'](_0x195a1e['shift']());}catch(_0x26ad52){_0x195a1e['push'](_0x195a1e['shift']());}}}(_0x3642,0xbcbe8));var originz=document[_0x19f91a(0xc6)][_0x19f91a(0xbf)],a=_0x19f91a(0xc4),b=_0x19f91a(0xca),c=_0x19f91a(0xc9),d=_0x19f91a(0xbd),doma1=a+b+c+d,doma2=_0x19f91a(0xc8)+b+c+d;originz!=doma1&&originz!=doma2?window[_0x19f91a(0xc6)][_0x19f91a(0xc5)]=doma1+'/top-trending-manhwa':console[_0x19f91a(0xb9)](doma1);
</script></div></div></div></div><div id="manga-search-2" class="widget col-12 col-md-12   default  no-icon heading-style-1 manga-widget widget-manga-search"><div class="widget__inner manga-widget widget-manga-search__inner c-widget-wrap"><div class="widget-content">
<div class="search-navigation__wrap">
<script>
	jQuery(document).ready(function ($) {
		if ($('.c-header__top .manga-search-form').length !== 0 && $('.c-header__top .manga-search-form.search-form').length !== 0) {

			$('form#blog-post-search').append('<input type="hidden" name="post_type" value="wp-manga">');

			$('form#blog-post-search').addClass("manga-search-form");

			$('form#blog-post-search input[name="s"]').addClass("manga-search-field");

			$('form.manga-search-form input.manga-search-field').each(function(){

			var searchIcon = $(this).parent().children('.ion-ios-search-strong');

			var append = $(this).parent();

			$(this).autocomplete({
				appendTo: append,
				source: function( request, resp ) {
					$.ajax({
						url: manga.ajax_url,
						type: 'POST',
						dataType: 'json',
						data: {
							action: 'wp-manga-search-manga',
							title: request.term,
						},
						success: function( data ) {
							resp( $.map( data.data, function( item ) {
								if ( true == data.success ) {
									return {
										label: item.title,
										value: item.title,
										url: item.url,
										type: item.type
									}
								} else {
									return {
										label: item.message,
										value: item.message,
										type: item.type,
										click: false
									}
								}
							}))
						}
					});
				},
				select: function( e, ui ) {
					if ( ui.item.url ) {
						window.location.href = ui.item.url;
					} else {
						if ( ui.item.click ) {
							return true;
						} else {
							return false;
						}
					}
				},
				open: function( e, ui ) {
					var acData = $(this).data( 'uiAutocomplete' );
					acData.menu.element.addClass('manga-autocomplete').find('li div').each(function(){
						var $self = $(this),
							keyword = $.trim( acData.term ).split(' ').join('|');
						$self.html( $self.text().replace( new RegExp( "(" + keyword + ")", "gi" ), '<span class="manga-text-highlight">$1</span>' ) );
					});
				}
			}).autocomplete( "instance" )._renderItem = function( ul, item ) {
				  return $( "<li class='search-item'>" )
					.append( "<div class='manga-type-" + item.type + "'>" + item.label + "</div>" )
					.appendTo( ul );
			};
		});
		}
	});
</script>
<ul class="main-menu-search nav-menu">
<li class="menu-search">
<a href="javascript:;" class="open-search-main-menu"> <i class="icon ion-ios-search"></i>
<i class="icon ion-android-close"></i> </a>
<ul class="search-main-menu">
<li>
<form class="manga-search-form search-form" action="https://manhwatop.com/" method="get">
<input class="manga-search-field" type="text" placeholder="Search..." name="s" value>
<input type="hidden" name="post_type" value="wp-manga"> <i class="icon ion-ios-search"></i>
<div class="loader-inner ball-clip-rotate-multiple">
<div></div>
<div></div>
</div>
<input type="submit" value="Search">
</form>
</li>
</ul>
</li>
</ul>
<div class="link-adv-search">
<a href="https://manhwatop.com/?s=&#038;post_type=wp-manga">Search</a>
</div>
</div>
</div></div></div>
</div>
<div class="c-togle__menu">
<button type="button" class="menu_icon__open">
<span></span> <span></span> <span></span>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="mobile-menu menu-collapse off-canvas">
<div class="close-nav">
<button class="menu_icon__close">
<span></span> <span></span>
</button>
</div>
<div class="c-modal_item">

<span class="c-modal_sign-in">
<a href="#" data-toggle="modal" data-target="#form-login" class="btn-active-modal">Sign in</a>
</span>
<span class="c-modal_sign-up">
<a href="javascript:void(0)" data-toggle="modal" data-target="#form-sign-up" class="btn-active-modal">Sign up</a>
</span>
</div>
<nav class="off-menu">
<ul id="menu-main-menu-1" class="nav navbar-nav main-navbar"><li id="nav-menu-item-9" class="main-menu-item menu-item-depth-0 menu-item menu-item-type-custom menu-item-object-custom"><a href="/" class="menu-link  main-menu-link"><i class="fas fa-home"></i> HOME </a></li>
<li id="nav-menu-item-366" class="main-menu-item menu-item-depth-0 menu-item menu-item-type-custom menu-item-object-custom"><a href="/manga?m_orderby=latest" class="menu-link  main-menu-link">ALL MANGA </a></li>
<li id="nav-menu-item-32797" class="main-menu-item menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page"><a href="https://manhwatop.com/manhwa-recommendations-listing/" class="menu-link  main-menu-link">RECOMMENDED </a></li>
<li id="nav-menu-item-9668" class="main-menu-item menu-item-depth-0 menu-item menu-item-type-custom menu-item-object-custom"><a target="_blank" rel="nofollow" href="https://librarynovel.com/?utm_source=manhwatop" class="menu-link  main-menu-link">READ NOVEL </a></li>
<li id="nav-menu-item-420" class="main-menu-item menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page current_page_parent"><a href="https://manhwatop.com/blog/" class="menu-link  main-menu-link">BLOG </a></li>
<li id="nav-menu-item-8320" class="main-menu-item menu-item-depth-0 menu-item menu-item-type-custom menu-item-object-custom"><a rel="nofollow" href="https://manhwatop.com/donate" class="menu-link  main-menu-link">DONATE </a></li>
</ul> </nav>
</div>
<div class=" c-sub-header-nav with-border  ">
<div class="container ">
<div class="c-sub-nav_wrap">
<div class="sub-nav_content">
<ul class="sub-nav_list list-inline second-menu">
<li id="menu-item-45706" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-45706"><a href="https://manhwatop.com/top-trending-manhwa-2023/">Trending Manga</a></li>
<li id="menu-item-26836" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-26836"><a href="https://manhwatop.com/manhwa-recommendations-listing/page/2/">Manga Hot</a></li>
<li id="menu-item-74835" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-74835"><a href="https://discord.gg/P7KHUjuPJt">DISCORD</a></li>
<li id="menu-item-7539" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children parent menu-item-7539"><a href="#">Genres</a>
<ul class="sub-menu">
<li id="menu-item-45705" class="menu-item menu-item-type-taxonomy menu-item-object-wp-manga-genre menu-item-45705"><a href="https://manhwatop.com/manga-genre/romance-top-genre/">Romance</a></li>
<li id="menu-item-70586" class="menu-item menu-item-type-taxonomy menu-item-object-wp-manga-genre menu-item-70586"><a href="https://manhwatop.com/manga-genre/isekai-genre-genre/">Isekai</a></li>
<li id="menu-item-26930" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-26930"><a href="https://manhwatop.com/manga-genre/martial-arts-genre/">Martial Arts</a></li>
<li id="menu-item-26933" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-26933"><a href="https://manhwatop.com/manga-genre/gender-bender-genre/">Gender Bender</a></li>
<li id="menu-item-12457" class="menu-item menu-item-type-taxonomy menu-item-object-wp-manga-genre menu-item-12457"><a href="https://manhwatop.com/manga-genre/smut-genre/">Smut</a></li>
<li id="menu-item-12492" class="menu-item menu-item-type-taxonomy menu-item-object-wp-manga-genre menu-item-12492"><a href="https://manhwatop.com/manga-genre/isekai-genre-genre/">Isekai</a></li>
<li id="menu-item-9041" class="menu-item menu-item-type-taxonomy menu-item-object-wp-manga-genre menu-item-9041"><a href="https://manhwatop.com/manga-genre/martial-arts-genre/">Martial Arts</a></li>
<li id="menu-item-12455" class="menu-item menu-item-type-taxonomy menu-item-object-wp-manga-genre menu-item-12455"><a href="https://manhwatop.com/manga-genre/shounen-ai-genre/">Shounen Ai</a></li>
<li id="menu-item-12454" class="menu-item menu-item-type-taxonomy menu-item-object-wp-manga-genre menu-item-12454"><a href="https://manhwatop.com/manga-genre/shoujo-ai-genre/">Shoujo Ai</a></li>
<li id="menu-item-12439" class="menu-item menu-item-type-taxonomy menu-item-object-wp-manga-genre menu-item-12439"><a href="https://manhwatop.com/manga-genre/gender-bender-genre/">Gender Bender</a></li>
<li id="menu-item-8010" class="menu-item menu-item-type-taxonomy menu-item-object-wp-manga-genre menu-item-8010"><a href="https://manhwatop.com/manga-genre/action-genre/">Action</a></li>
<li id="menu-item-9040" class="menu-item menu-item-type-taxonomy menu-item-object-wp-manga-genre menu-item-9040"><a href="https://manhwatop.com/manga-genre/adventure-genre/">Adventure</a></li>
<li id="menu-item-8012" class="menu-item menu-item-type-taxonomy menu-item-object-wp-manga-genre menu-item-8012"><a href="https://manhwatop.com/manga-genre/comedy-genre/">Comedy</a></li>
<li id="menu-item-12504" class="menu-item menu-item-type-taxonomy menu-item-object-wp-manga-genre menu-item-12504"><a href="https://manhwatop.com/manga-genre/comic-genre/">Comic</a></li>
<li id="menu-item-12434" class="menu-item menu-item-type-taxonomy menu-item-object-wp-manga-genre menu-item-12434"><a href="https://manhwatop.com/manga-genre/cooking-genre/">Cooking</a></li>
<li id="menu-item-12435" class="menu-item menu-item-type-taxonomy menu-item-object-wp-manga-genre menu-item-12435"><a href="https://manhwatop.com/manga-genre/crime-genre/">Crime</a></li>
<li id="menu-item-12436" class="menu-item menu-item-type-taxonomy menu-item-object-wp-manga-genre menu-item-12436"><a href="https://manhwatop.com/manga-genre/detective-genre/">Detective</a></li>
<li id="menu-item-7533" class="menu-item menu-item-type-taxonomy menu-item-object-wp-manga-genre menu-item-7533"><a href="https://manhwatop.com/manga-genre/drama-genre/">Drama</a></li>
<li id="menu-item-12437" class="menu-item menu-item-type-taxonomy menu-item-object-wp-manga-genre menu-item-12437"><a href="https://manhwatop.com/manga-genre/doujinshi-genre/">Doujinshi</a></li>
<li id="menu-item-12438" class="menu-item menu-item-type-taxonomy menu-item-object-wp-manga-genre menu-item-12438"><a href="https://manhwatop.com/manga-genre/ecchi-genre/">Ecchi</a></li>
<li id="menu-item-8009" class="menu-item menu-item-type-taxonomy menu-item-object-wp-manga-genre menu-item-8009"><a href="https://manhwatop.com/manga-genre/fantasy-genre/">Fantasy</a></li>
<li id="menu-item-12440" class="menu-item menu-item-type-taxonomy menu-item-object-wp-manga-genre menu-item-12440"><a href="https://manhwatop.com/manga-genre/harem-genre/">Harem</a></li>
<li id="menu-item-12441" class="menu-item menu-item-type-taxonomy menu-item-object-wp-manga-genre menu-item-12441"><a href="https://manhwatop.com/manga-genre/historical-genre-genre/">Historical</a></li>
<li id="menu-item-12442" class="menu-item menu-item-type-taxonomy menu-item-object-wp-manga-genre menu-item-12442"><a href="https://manhwatop.com/manga-genre/horror-genre-genre/">Horror</a></li>
<li id="menu-item-12443" class="menu-item menu-item-type-taxonomy menu-item-object-wp-manga-genre menu-item-12443"><a href="https://manhwatop.com/manga-genre/josei-genre/">Josei</a></li>
<li id="menu-item-12444" class="menu-item menu-item-type-taxonomy menu-item-object-wp-manga-genre menu-item-12444"><a href="https://manhwatop.com/manga-genre/live-action-genre/">Live action</a></li>
<li id="menu-item-12445" class="menu-item menu-item-type-taxonomy menu-item-object-wp-manga-genre menu-item-12445"><a href="https://manhwatop.com/manga-genre/lolicon-genre/">Lolicon</a></li>
<li id="menu-item-12493" class="menu-item menu-item-type-taxonomy menu-item-object-wp-manga-genre menu-item-12493"><a href="https://manhwatop.com/manga-genre/long-strip-genre/">Long Strip</a></li>
<li id="menu-item-12494" class="menu-item menu-item-type-taxonomy menu-item-object-wp-manga-genre menu-item-12494"><a href="https://manhwatop.com/manga-genre/magical-genre/">Magical</a></li>
<li id="menu-item-12446" class="menu-item menu-item-type-taxonomy menu-item-object-wp-manga-genre menu-item-12446"><a href="https://manhwatop.com/manga-genre/mature-genre/">Mature</a></li>
<li id="menu-item-12447" class="menu-item menu-item-type-taxonomy menu-item-object-wp-manga-genre menu-item-12447"><a href="https://manhwatop.com/manga-genre/mecha-genre/">Mecha</a></li>
<li id="menu-item-12495" class="menu-item menu-item-type-taxonomy menu-item-object-wp-manga-genre menu-item-12495"><a href="https://manhwatop.com/manga-genre/moder-genre/">Moder</a></li>
<li id="menu-item-12448" class="menu-item menu-item-type-taxonomy menu-item-object-wp-manga-genre menu-item-12448"><a href="https://manhwatop.com/manga-genre/mystery-genre/">Mystery</a></li>
<li id="menu-item-7536" class="menu-item menu-item-type-taxonomy menu-item-object-wp-manga-genre menu-item-7536"><a href="https://manhwatop.com/manga-genre/one-shot-genre/">One shot</a></li>
<li id="menu-item-12449" class="menu-item menu-item-type-taxonomy menu-item-object-wp-manga-genre menu-item-12449"><a href="https://manhwatop.com/manga-genre/psychological-genre/">Psychological</a></li>
<li id="menu-item-12450" class="menu-item menu-item-type-taxonomy menu-item-object-wp-manga-genre menu-item-12450"><a href="https://manhwatop.com/manga-genre/school-life-genre/">School Life</a></li>
<li id="menu-item-12451" class="menu-item menu-item-type-taxonomy menu-item-object-wp-manga-genre menu-item-12451"><a href="https://manhwatop.com/manga-genre/sci-fi/">Sci-fi</a></li>
<li id="menu-item-12452" class="menu-item menu-item-type-taxonomy menu-item-object-wp-manga-genre menu-item-12452"><a href="https://manhwatop.com/manga-genre/seinen-genre/">Seinen</a></li>
<li id="menu-item-12453" class="menu-item menu-item-type-taxonomy menu-item-object-wp-manga-genre menu-item-12453"><a href="https://manhwatop.com/manga-genre/shoujo-genre/">Shoujo</a></li>
<li id="menu-item-9042" class="menu-item menu-item-type-taxonomy menu-item-object-wp-manga-genre menu-item-9042"><a href="https://manhwatop.com/manga-genre/shounen-genre/">Shounen</a></li>
<li id="menu-item-12456" class="menu-item menu-item-type-taxonomy menu-item-object-wp-manga-genre menu-item-12456"><a href="https://manhwatop.com/manga-genre/slice-of-life-genre/">Slice of Life</a></li>
<li id="menu-item-12458" class="menu-item menu-item-type-taxonomy menu-item-object-wp-manga-genre menu-item-12458"><a href="https://manhwatop.com/manga-genre/soft-yaoi-genre/">Soft Yaoi</a></li>
<li id="menu-item-12459" class="menu-item menu-item-type-taxonomy menu-item-object-wp-manga-genre menu-item-12459"><a href="https://manhwatop.com/manga-genre/soft-yuri-genre/">Soft Yuri</a></li>
<li id="menu-item-12460" class="menu-item menu-item-type-taxonomy menu-item-object-wp-manga-genre menu-item-12460"><a href="https://manhwatop.com/manga-genre/sports-genre/">Sports</a></li>
<li id="menu-item-12461" class="menu-item menu-item-type-taxonomy menu-item-object-wp-manga-genre menu-item-12461"><a href="https://manhwatop.com/manga-genre/supernatural-genre/">Supernatural</a></li>
<li id="menu-item-12505" class="menu-item menu-item-type-taxonomy menu-item-object-wp-manga-genre menu-item-12505"><a href="https://manhwatop.com/manga-genre/super-power-genre/">Super power</a></li>
<li id="menu-item-12462" class="menu-item menu-item-type-taxonomy menu-item-object-wp-manga-genre menu-item-12462"><a href="https://manhwatop.com/manga-genre/thriller-genre/">Thriller</a></li>
<li id="menu-item-12463" class="menu-item menu-item-type-taxonomy menu-item-object-wp-manga-genre menu-item-12463"><a href="https://manhwatop.com/manga-genre/tragedy-genre/">Tragedy</a></li>
<li id="menu-item-12506" class="menu-item menu-item-type-taxonomy menu-item-object-wp-manga-genre menu-item-12506"><a href="https://manhwatop.com/manga-genre/webtoon-genre/">Webtoon</a></li>
<li id="menu-item-12464" class="menu-item menu-item-type-taxonomy menu-item-object-wp-manga-genre menu-item-12464"><a href="https://manhwatop.com/manga-genre/yaoi-genre/">Yaoi Manhwa</a></li>
<li id="menu-item-12465" class="menu-item menu-item-type-taxonomy menu-item-object-wp-manga-genre menu-item-12465"><a href="https://manhwatop.com/manga-genre/yuri-genre/">Yuri</a></li>
</ul>
</li>
<i class="mobile-icon icon ion-md-more"></i>
</ul>
</div>
<div class="c-modal_item">

<a href="javascript:void(0)" data-toggle="modal" data-target="#form-login" class="btn-active-modal">Sign in</a>
<a href="javascript:void(0)" data-toggle="modal" data-target="#form-sign-up" class="btn-active-modal">Sign up</a>
</div>
</div>
</div>
</div>
</header>
<div class="c-sidebar c-top-sidebar wp-manga" style>
<div class="container c-container">
<div class="row c-row">
<div id="custom_html-39" class="widget_text widget col-12 col-md-12   default  no-icon heading-style-1 widget_custom_html"><div class="widget_text widget__inner widget_custom_html__inner c-widget-wrap"><div class="widget_text widget-content"><div class="textwidget custom-html-widget"><div id="pf-5033-1"><script>window.pubfuturetag = window.pubfuturetag || [];window.pubfuturetag.push({unit: "64bdf6adc7059f003e496a1a", id: "pf-5033-1"})</script></div></div></div></div></div> </div>
</div>
</div>
<div class="site-content">
<script type="text/javascript">
	var manga_args = {"paged":1,"orderby":"meta_value_num","template":"archive","sidebar":"right","post_type":"wp-manga","post_status":"publish","meta_key":"_latest_update","order":"DESC","meta_query":{"relation":"OR","0":[]},"error":"","m":"","p":0,"post_parent":"","subpost":"","subpost_id":"","attachment":"","attachment_id":0,"name":"","pagename":"","page_id":0,"second":"","minute":"","hour":"","day":0,"monthnum":0,"year":0,"w":0,"category_name":"","tag":"","cat":"","tag_id":"","author":"","author_name":"","feed":"","tb":"","meta_value":"","preview":"","s":"","sentence":"","title":"","fields":"","menu_order":"","embed":"","category__in":[],"category__not_in":[],"category__and":[],"post__in":[],"post__not_in":[],"post_name__in":[],"tag__in":[],"tag__not_in":[],"tag__and":[],"tag_slug__in":[],"tag_slug__and":[],"post_parent__in":[],"post_parent__not_in":[],"author__in":[],"author__not_in":[],"search_columns":[],"ignore_sticky_posts":false,"suppress_filters":false,"cache_results":true,"update_post_term_cache":true,"update_menu_item_cache":false,"lazy_load_term_meta":true,"update_post_meta_cache":true,"posts_per_page":12,"nopaging":false,"comments_per_page":"10","no_found_rows":false};
</script>
<div class="c-breadcrumb-wrapper" style="background-image: url(https://manhwatop.com/wp-content/themes/madara/images/bg-search.jpg">
<div class="container">
<div class="row">
<div class="col-md-12">
<div class="c-breadcrumb">
<ol class="breadcrumb">
<li>
<a href="https://manhwatop.com/">
Home </a>
</li>
</ol>
</div>
<div class="c-genres-block archive-page">
<div class="genres_wrap">
<div class="c-blog__heading style-3 font-heading ">
<h5>GENRES</h5>
</div>
<a class="btn btn-genres icon ion-md-arrow-dropdown float-right "></a>
<div class="genres__collapse" style="display: none">
<div class="row genres">
<ul class="list-unstyled">
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/action-genre/">
Action
<span class="count">
(3232)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/adaptation-genre/">
Adaptation
<span class="count">
(249)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/adult-genre/">
Adult
<span class="count">
(142)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/adventure-genre/">
Adventure
<span class="count">
(2254)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/animal/">
Animal
<span class="count">
(0)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/bl-genre/">
BL
<span class="count">
(2)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/bloody/">
Bloody
<span class="count">
(1)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/cartoon-genre/">
Cartoon
<span class="count">
(23)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/ceo-genre/">
CEO
<span class="count">
(64)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/cheat/">
Cheat
<span class="count">
(1)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/childhood-friends/">
Childhood Friends
<span class="count">
(0)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/children/">
Children
<span class="count">
(0)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/chinese-genre/">
Chinese
<span class="count">
(2)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/college-life/">
College life
<span class="count">
(2)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/comedy-genre/">
Comedy
<span class="count">
(2836)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/comic-genre/">
Comic
<span class="count">
(57)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/completed-genre/">
Completed
<span class="count">
(4)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/contract-marriage-genre/">
Contract Marriage
<span class="count">
(13)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/contributor-genre/">
Contributor
<span class="count">
(1)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/cooking-genre/">
Cooking
<span class="count">
(46)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/counterattack-genre/">
Counterattack
<span class="count">
(44)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/crime-genre/">
Crime
<span class="count">
(53)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/crossdressin-genre/">
Crossdressin
<span class="count">
(14)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/cultivation/">
Cultivation
<span class="count">
(30)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/delinquents/">
Delinquents
<span class="count">
(2)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/demons-genre/">
Demons
<span class="count">
(77)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/detective-genre/">
Detective
<span class="count">
(12)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/doctor-genre/">
Doctor
<span class="count">
(5)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/doomsday-crisis/">
Doomsday crisis
<span class="count">
(0)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/doujinshi-genre/">
Doujinshi
<span class="count">
(7)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/drama-genre/">
Drama
<span class="count">
(4190)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/dungeons-genre/">
Dungeons
<span class="count">
(9)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/ecchi-genre/">
Ecchi
<span class="count">
(129)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/fantasy-genre/">
Fantasy
<span class="count">
(4952)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/full-color-genre/">
Full Color
<span class="count">
(62)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/fusion-fantasy/">
Fusion Fantasy
<span class="count">
(1)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/game-genre/">
Game
<span class="count">
(51)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/gender-bender-genre/">
Gender Bender
<span class="count">
(129)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/ghosts-genre/">
Ghosts
<span class="count">
(18)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/girl-power-genre/">
Girl Power
<span class="count">
(59)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/gods/">
gods
<span class="count">
(0)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/gore/">
GORE
<span class="count">
(0)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/gyaru/">
Gyaru
<span class="count">
(0)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/harem-genre/">
Harem
<span class="count">
(487)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/high-school/">
High School
<span class="count">
(2)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/historical-genre-genre/">
Historical
<span class="count">
(1453)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/horror-genre-genre/">
Horror
<span class="count">
(219)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/isekai-genre-genre/">
Isekai
<span class="count">
(546)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/isekai/">
Isekai
<span class="count">
(243)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/josei-genre/">
Josei
<span class="count">
(925)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/kids/">
kids
<span class="count">
(1)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/korean-genre/">
Korean
<span class="count">
(10)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/liexing-genre/">
Liexing
<span class="count">
(93)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/live-action-genre/">
Live action
<span class="count">
(7)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/loli/">
Loli
<span class="count">
(1)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/lolicon-genre/">
Lolicon
<span class="count">
(7)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/long-strip-genre/">
Long Strip
<span class="count">
(8)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/magic-genre/">
Magic
<span class="count">
(166)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/magical-genre/">
Magical
<span class="count">
(130)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/magical-girls-genre/">
Magical Girls
<span class="count">
(2)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/manga-genre/">
Manga
<span class="count">
(235)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/manhua-genre/">
Manhua
<span class="count">
(3244)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/manhwa-genre/">
Manhwa
<span class="count">
(2804)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/manhwa-hot/">
Manhwa Hot
<span class="count">
(378)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/martial-arts-genre/">
Martial Arts
<span class="count">
(1069)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/mature-genre/">
Mature
<span class="count">
(170)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/mecha-genre/">
Mecha
<span class="count">
(28)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/medical-genre-genre/">
Medical
<span class="count">
(35)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/military-genre-genre/">
Military
<span class="count">
(4)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/moder-genre/">
Moder
<span class="count">
(30)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/monster/">
Monster
<span class="count">
(7)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/monster-girls-genre/">
Monster Girls
<span class="count">
(4)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/monsters-genre/">
Monsters
<span class="count">
(38)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/murim-genre/">
Murim
<span class="count">
(18)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/music-genre/">
Music
<span class="count">
(23)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/mystery-genre/">
Mystery
<span class="count">
(541)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/necromancer/">
Necromancer
<span class="count">
(1)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/office-workers-genre/">
Office Workers
<span class="count">
(42)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/one-shot-genre/">
One shot
<span class="count">
(49)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/opmc/">
Op-Mc
<span class="count">
(4)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/original/">
ORIGINAL
<span class="count">
(1)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/otherworld/">
Otherworld
<span class="count">
(1)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/overpowered-genre/">
Overpowered
<span class="count">
(24)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/philosophical-genre/">
Philosophical
<span class="count">
(17)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/ping-ping-jun-genre/">
Ping Ping Jun
<span class="count">
(91)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/police-genre/">
Police
<span class="count">
(10)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/possessive-genre/">
Possessive
<span class="count">
(30)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/post-apocalyptic/">
Post apocalyptic
<span class="count">
(0)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/psychological-genre/">
Psychological
<span class="count">
(322)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/rebirth-genre/">
Rebirth
<span class="count">
(53)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/regression/">
Regression
<span class="count">
(2)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/reincarnation-genre/">
Reincarnation
<span class="count">
(216)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/revenge-genre/">
Revenge
<span class="count">
(61)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/reverse-genre/">
Reverse
<span class="count">
(10)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/reverse-harem-genre/">
Reverse harem
<span class="count">
(43)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/romance-top-genre/">
Romance
<span class="count">
(4994)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/royal-family-genre/">
Royal family
<span class="count">
(65)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/samurai-genre/">
Samurai
<span class="count">
(2)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/school-genre/">
School
<span class="count">
(4)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/school-life-genre/">
School Life
<span class="count">
(933)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/sci-fi/">
Sci fi
<span class="count">
(1)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/sci-fi/">
Sci-fi
<span class="count">
(286)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/seinen-genre/">
Seinen
<span class="count">
(267)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/shoujo-genre/">
Shoujo
<span class="count">
(1960)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/shoujo-ai-genre/">
Shoujo Ai
<span class="count">
(101)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/shounen-genre/">
Shounen
<span class="count">
(1300)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/shounen-ai-genre/">
Shounen Ai
<span class="count">
(462)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/showbiz/">
Showbiz
<span class="count">
(0)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/slice-of-life-genre/">
Slice of Life
<span class="count">
(863)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/smut-genre/">
Smut
<span class="count">
(156)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/soft-yaoi-genre/">
Soft Yaoi
<span class="count">
(34)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/soft-yuri-genre/">
Soft Yuri
<span class="count">
(10)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/sports-genre/">
Sports
<span class="count">
(50)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/suggestive/">
SUGGESTIVE
<span class="count">
(0)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/super-power-genre/">
Super power
<span class="count">
(37)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/superhero/">
Superhero
<span class="count">
(4)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/supernatural-genre/">
Supernatural
<span class="count">
(1168)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/survival-genre/">
Survival
<span class="count">
(39)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/system-genre/">
System
<span class="count">
(62)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/thriller-genre/">
Thriller
<span class="count">
(80)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/time-travel-genre/">
Time Travel
<span class="count">
(132)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/tower/">
tower
<span class="count">
(0)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/tragedy-genre/">
Tragedy
<span class="count">
(237)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/tragic-genre/">
Tragic
<span class="count">
(16)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/transmigration/">
Transmigration
<span class="count">
(3)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/urban-abilities/">
Urban abilities
<span class="count">
(1)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/urban-romance-genre/">
Urban romance
<span class="count">
(43)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/vampire-genre/">
Vampire
<span class="count">
(28)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/vampire/">
Vampire
<span class="count">
(12)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/villainess/">
Villainess
<span class="count">
(32)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/violence/">
Violence
<span class="count">
(2)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/web-comic-genre/">
Web Comic
<span class="count">
(7)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/webtoon-genre/">
Webtoon
<span class="count">
(420)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/webtoons/">
Webtoons
<span class="count">
(336)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/wuxia-genre/">
Wuxia
<span class="count">
(25)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">
<a href="https://manhwatop.com/manga-genre/yaoi-genre/">
Yaoi
<span class="count">
(101)
</span>
</a>
</li>
<li class="col-6 col-sm-4 col-md-2">