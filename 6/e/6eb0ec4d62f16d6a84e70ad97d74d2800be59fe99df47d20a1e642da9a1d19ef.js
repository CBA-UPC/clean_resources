<template id="menu-nav-template">
  <style>
    .navFlyout {
      background: #000000;
      filter: alpha(opacity=90);
      -moz-opacity: 0.9;
      -khtml-opacity: 0.9;
      opacity: 0.9;
      max-height: none;
      padding: 0;
      position: absolute;
      width: 100%;
      height: 638px;
      display: none;
    }
    .navFlyout .nav-flyout-container {
      margin: 0 auto;
      max-width: 1030px;
      padding: 20px 0;
      overflow: hidden;
    }
    .navFlyout .nav-flyout-container .nav-flyout-menu-item {
      float: left;
      width: 23%;
      height: 285px;
      padding: 0 20px 0 0;
    }
    .navFlyout .nav-flyout-container .nav-flyout-menu-item.no-right {
      padding-right: 0;
    }
    .navFlyout
      .nav-flyout-container
      .nav-flyout-menu-item
      .nav-flyout-menu-item-title {
      margin-bottom: 20px;
    }
    .navFlyout
      .nav-flyout-container
      .nav-flyout-menu-item
      .nav-flyout-menu-item-title
      span {
      font-size: 14px;
    }
    .navFlyout
      .nav-flyout-container
      .nav-flyout-menu-item
      .nav-flyout-menu-item-title
      h3 {
      font-size: 18px;
      color: #ffffff;
      letter-spacing: 0.6px;
      line-height: 30px;
    }
    .navFlyout
      .nav-flyout-container
      .nav-flyout-menu-item
      .nav-flyout-menu-item-title
      h4 {
      font-size: 16px;
      color: #ffffff;
      letter-spacing: 0.53px;
      line-height: 18px;
    }
    .navFlyout
      .nav-flyout-container
      .nav-flyout-menu-item
      .nav-flyout-menu-item-list
      li {
      margin: 5px 0;
    }
    .navFlyout
      .nav-flyout-container
      .nav-flyout-menu-item
      .nav-flyout-menu-item-list
      li
      a {
      font-size: 14px;
      color: #bfbfbf;
      letter-spacing: 0.4px;
      line-height: 22px;
    }
    .navFlyout
      .nav-flyout-container
      .nav-flyout-menu-item
      .nav-flyout-menu-item-list
      li
      a:hover {
      color: #ffffff;
    }
    .navFlyout
      .nav-flyout-container
      .nav-flyout-menu-item
      .nav-flyout-menu-item-list
      li
      span {
      display: inline-block;
    }
    .navFlyout
      .nav-flyout-container
      .nav-flyout-menu-item
      .nav-flyout-menu-item-list
      li
      .name-cn {
      width: 18%;
    }
    .navFlyout
      .nav-flyout-container
      .nav-flyout-menu-item
      .nav-flyout-menu-item-list
      li
      .name-en {
      width: 60%;
    }
    .navFlyout
      .nav-flyout-container
      .nav-flyout-menu-item
      .nav-flyout-menu-item-list.long
      li
      .name-cn {
      width: 31%;
    }
    .navFlyout
      .nav-flyout-container
      .nav-flyout-menu-item
      .nav-flyout-menu-item-list.long2
      li
      .name-cn {
      width: 37%;
    }
    .navFlyout
      .nav-flyout-container
      .nav-flyout-menu-item
      .nav-flyout-menu-item-list.long3
      li
      .name-cn {
      width: 25%;
    }
    /* @media screen and (max-width: 960px) {
      .navTopSec,
      .navFlyout .nav-flyout-container {
        max-width: 630px;
      }
      .navTopSec .nav-container .nav-section .nav-section-article-title {
        max-width: 450px;
        letter-spacing: 0;
      }
      .navFlyout {
        height: 735px;
      }
      .navFlyout .nav-flyout-container .nav-flyout-menu-item {
        padding: 0 8px 0 0;
        width: 32%;
        height: 239px;
      }
      .navFlyout .nav-flyout-container .nav-flyout-menu-item.s-hight {
        height: 215px;
      }
      .navFlyout
        .nav-flyout-container
        .nav-flyout-menu-item
        .nav-flyout-menu-item-list
        li
        a {
        line-height: 18px;
      }
      .navFlyout
        .nav-flyout-container
        .nav-flyout-menu-item
        .nav-flyout-menu-item-title {
        margin-bottom: 15px;
      }
      .navFlyout
        .nav-flyout-container
        .nav-flyout-menu-item
        .nav-flyout-menu-item-list
        li {
        margin: 0;
      }
      .navFlyout
        .nav-flyout-container
        .nav-flyout-menu-item
        .nav-flyout-menu-item-list
        li
        p {
        line-height: 22px;
      }
      .navFlyout
        .nav-flyout-container
        .nav-flyout-menu-item
        .nav-flyout-menu-item-list
        li
        .name-en {
        width: 50%;
      }
      .navFlyout
        .nav-flyout-container
        .nav-flyout-menu-item
        .nav-flyout-menu-item-list.long
        li
        .name-cn {
        width: 34%;
      }
      .navFlyout
        .nav-flyout-container
        .nav-flyout-menu-item
        .nav-flyout-menu-item-list.long2
        li
        .name-cn {
        width: 40%;
      }
    }
    .navFlyout {
      background: #f5f5f5;
      filter: alpha(opacity=99);
      -moz-opacity: 0.99;
      -khtml-opacity: 0.99;
      opacity: 0.99;
    }
    .navFlyout
      .nav-flyout-container
      .nav-flyout-menu-item
      .nav-flyout-menu-item-title
      h3 {
      color: #000;
    }
    .navFlyout
      .nav-flyout-container
      .nav-flyout-menu-item
      .nav-flyout-menu-item-title
      h4 {
      color: #000;
    }
    .navFlyout
      .nav-flyout-container
      .nav-flyout-menu-item
      .nav-flyout-menu-item-list
      li
      a {
      color: #333;
    }
    .navFlyout
      .nav-flyout-container
      .nav-flyout-menu-item
      .nav-flyout-menu-item-list
      li
      a:hover {
      color: #90080e;
    }
    @supports (
      (-webkit-backdrop-filter: saturate(180%) blur(20px)) or
        (backdrop-filter: saturate(180%) blur(20px))
    ) {
      .navFlyout {
        background: rgba(255, 255, 255, 0.8);
        -webkit-backdrop-filter: saturate(180%) blur(20px);
        backdrop-filter: saturate(180%) blur(20px);
        box-shadow: 0 2px 10px 0 rgba(215, 215, 215, 0.5);
      }
    } */
  </style>
  <slotpro name="menu-item"></slotpro>
</template>
