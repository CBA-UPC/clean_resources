<template id="header-template">
  <style>
    .in-height: 40px;
      transition: transform 0.2s linear;
      position: relative;
      z-index: 1000;
    }
    .header-fixed {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
    }
    .other-box {
      background-color: #fff;
    }
    .other-box-fixed {
      position: fixed;
      text-indent: -9999rem;
      opacity: 0;
    }
    .header > .header-container > .main {
      position: relative;
      padding-right: 100px;
      white-space: nowrap;
      padding: 5px 0;
      overflow: hidden;
      display: flex;
      align-items: center;
    }

    .header > .header-container > .main .tool {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      background-color: #90080e;
    }

    .header > .header-container > .main .tool.tool-search .search-bar {
      width: 1015px;
    }

    .header > .header-container > .main .tool > div {
      display: inline-block;
      vertical-align: middle;
      margin-left: 10px;
      cursor: pointer;
      line-height: 40px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }

    .header > .header-container > .main .tool > div .iconfont {
      font-size: 18px;
      font-weight: bold;
    }

    .header > .header-container > .main .tool .menu-btn.active {
      -webkit-animation-name: zoomIn;
      animation-name: zoomIn;
      -webkit-animation-duration: 0.5s;
      animation-duration: 0.5s;
    }

    .header > .header-container > .main .tool .menu-btn.menu_close {
      -webkit-animation-name: zoomIn2;
      animation-name: zoomIn2;
      -webkit-animation-duration: 0.5s;
      animation-duration: 0.5s;
    }

    .header
      > .header-container
      > .main
      .tool
      .menu-btn.active
      .icon-menu::before {
      content: '\E61E';
    }

    .search-bar {
      position: relative;
      width: 100%;
      height: 30px;
      -webkit-transition: width 0.3s ease-out;
      transition: width 0.3s ease-out;
      overflow: hidden;
      margin-right: 0;
      background-color: #e5e5e5;
    }

    .search-bar input,
    .search-bar button {
      position: absolute;
      top: 0;
      height: 30px;
      border-radius: 2px;
      outline: none;
      background-color: #fff;
      color: #262626;
      border: none;
   font-size: 14px;
      width: 100%;
      line-height: 30px\0;
      background-color: #e5e5e5;
    }

    .search-bar button {
      right: 0;
      line-height: 26px;
      line-height: 22px\0;
      width: 34px\0;
      color: #b2b2b2;
      background-color: #e5e5e5;
    }

    .search-bar.search-bar-dark {
      background-color: #323232;
    }

    .search-bar.search-bar-dark input,
    .search-bar.search-bar-dark button {
      background-color: #323232;
    }

    .search-bar.search-bar-dark input {
      color: #fff;
    }
    .header > .header-container > .main .tool .search-bar {
      overflow: hidden;
      width: 0;
      margin-right: 0;
    }

    .header > .header-container > .main .tool .search-bar input,
    .header > .header-container > .main .tool .search-bar button {
      background-color: #fff;
      color: #262626;
    }

    .header > .header-container > .main .tool .search-bar input {
      font-size: 14px;
      line-height: 30px\0;
    }

    .header .logo {
      position: absolute;
      /*
      color: #fff;
      text-decoration:tive;
      /* height: 30px;
    line-height: 30px; */
      font-size: 16px;
      padding-left: 23px;
      margin-left: 60px;
      margin-right: 60px;
    }

    .header .nav::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 10px;
      height: 16px;
      margin-top: -8px;
      border-left: 1px solid #a40910;
    }
    .header .navStyle::before {
      border-left: 1px solid #f9f9f9;
    }
    .header .nav .breadcrumb {
      background-color: transparent;
      padding: 0;
      margin: 3px 0;
      color: #fff;
    }

    .header .nav .breadcrumb > li::before,
    .header .nav .breadcrumb .active {
      color: #fff;
    }

    .header .nav-panel {
      display: none;
      color: #262626;
      background-color: rgba(255, 255, 255, 0.8);
      position: absolute;
      width: 100%;
      opacity: 0.99;
      -webkit-backdrop-filter: saturate(180%) blur(20px);
      backdrop-filter: saturate(180%) blur(20px);
      -webkit-box-shadow: 0 2px 10px 0 rgba(215, 215, 215, 0.5);
      box-shadow: 0 2px 10px 0 rgba(215, 215, 215, 0.5);
      padding-bottom: 20   }
    /* .header .nav-panel .main { paddi: 22%
}

.header .nav-panel .nav-panel-items-box .nav-panel-items {
    margin: 40px 20px 0 0;
    overflow: hidden;
    letter-spacing: .4px;
    font-size: 14px;
    line-height: 1.5714285714285714;
    min-height: 280px
}

.header .nav-panel .nav-panel-items-box .nav-panel-items h3 {
    font-weight: normal;
    font-size: 18px;
    letter-spacing: .6px;
    line-height: 1.6666666666666667
}

.header .nav-panel .nav-panel-items-box .nav-panel-items h3 span {
    manel-items-box .nav-panel-items h4 {
    font-weight: normal;
    font-size: 18px;
    letter-spacing: .53px;
    line-height: 1;
    margin-bottom: 20px
}

.header .nav-panel .nav-panel-items-box .nav-panel-items h4 span {
    margin: 0 10px
}

.header .nav-panel .nav-panel-items-box .nav-panel-items a {
    display: block;
    margin: 5px 0;
    color: #4d4d4d
}

.header .nav-panel .nav-panel-items-box .nav-panel-items a span {
    display: inline-block
}

.header .nav-panel .nav-panel-items-box .nav-panel-items a .name-cn {
    min-width: 44px
}

.header .nav-panel .nav-panel-items-box:nth-child(2) .nav-panel-items a .name-cn {
    min-width: 72px
}

.header .nav-panel .nav-panel-items-box:nth-child(3) .nav-panel-items a .name-cn,.header .nav-panel .nav-panel-items-box:nth-child(8) .nav-panel-items a .name-cn {
    min-width: 60px
}

.header .nav-panel .nav-panel-items-box:nth-child(6) .nav-panel-items a .name-cn {
    min-width: 88px
} */

    /* 深色导航 */
    .header[data-dark] {
      background-color: #000;
    }
    .header[data-dark] .logo {
      text-align: center;
      width: 70px;
      background-color: #cb0000;
    }
    .header[data-dark] .nav::before {
      display: none;
    }
    .header[data-dark] .header-container {
      border-top: 4px solid #cb0000;
    }
    .header[data-dark] > .header-container > .main .tool {
      background-color: #000;
    }
    .header[data-dark] > .header-container > .main {
      height: 36px;
      padding: 0;
    }
    .header[data-dark] > .header-container > .main .tool > div {
      line-height: 36px;
    }
    .header[data-dark] .nav-panel {
      color: #fff;
      background-color: rgba(0, 0, 0, 0.8);
      opacity: inherit;
      background: rgba(0, 0, 0, 0.8);
      backdrop-filter: saturate(180%) blur(20px);
      box-shadow: none;
    }
    .header[data-dark] > .header-container > .main .tool .menu-btn.active {
      color: #cb0000;
    }
    .header[data-dark] .search-bar,
    .header[data-dark] .search-bar input,
    .header[data-dark] .search-bar button {
      height: 25px;
    }
    .header[data-dark] .other-box {
      background-color: #262626;
    }
    .nav-title {
      display: none;
      line-height: 24px;
      margin: 3px 0;
    }

    @-webkit-keyframes zoomIn {
      0% {
        opacity: 0;
        -webkit-transform: scale3d(0.3, 0.3, 0.3);
        transform: scale3d(0.3, 0.3, 0.3);
      }

      50% {
        opacity: 1;
      }
    }

    @keyframes zoomIn {
      0% {
        opacity: 0;
        -webkit-transform: scale3d(0.3, 0.3, 0.3);
        transform: scale3d(0.3, 0.3, 0.3);
      }

      50% {
        opacity: 1;
      }
    }

    @-webkit-keyframes zoomIn2 {
      0% {
        opacity: 0;
        -webkit-transform: scale3d(0.3, 0.3, 0.3);
        transform: scale3d(0.3, 0.3, 0.3);
      }

      50% {
        opacity: 1;
      }
    }

    @keyframes zoomIn2 {
      0% {
        opacity: 0;
        -webkit-transform: scale3d(0.3, 0.3, 0.3);
        transform: scale3d(0.3, 0.3, 0.3);
      }

      50% {
        opacity: 1;
      }
    }
    @media screen and (max-width: 1170px) {
      .header > .main .tool.tool-search .search-bar {
        width: 650px;
      }
    }
    .header .navSetting::before {
      border-left: 1px solid transparent!important;
    }

    /* 浅底模板 */
    .lightHeader .header-container {
      border-top: 4px solid #f9f9f9!important;
    }
    .lightHeader .other-box, .lightHeader {
      background-color: #f9f9f9!important;
    }
    .lightHeader .logo .icon-logo, .lightHeader .nav .breadcrumb a, .header .nav .breadcrumb a::before {
      color: #90080E!important;
    }
    .lightHeader > .header-container > .main .tool {
      background-color: #f9f9f9!important;
      color: #90080E!important;
    }
    .lightHeader .logo {
      background-color: transparent!important;
      color: #90080E!important;
    }
    .lightHeader .nav-title {
      color: #90080E!important;
    }
    .lightHeader .lightB {
      color: #8c8c8c!important;
    }
    .lightHeader > .header-container > .main .toolStyle {
      color: #8c8c8c!important;
    }
  </style>
  <div class="header header-fixed">
    <div class="other-box other-box-fixed">
      <div class="main">
        <!-- Ad Survey 广告位代码  顶通 -->
        <slotpro name="ad"></slotpro>
      </div>
    </div>
    <div class="header-container">
      <div class="main">
        <a href="//www.huanqiu.com" class="logo"
          ><i class="iconfont icon-logo"></i
        ></a>
        <div class="nav">
          <ol class="breadcrumb">
            <slotpro name="breadcrumb"></slotpro>
          </ol>
          <div class="nav-title"><slotpro name="title"></slotpro></div>
        </div>
        <div class="tool">
          <div class="search-bar">
            <input type="text" placeholder="请输入..." />
            <button>»</button>
          </div>
          <div class="search-btn"><i class="iconfont icon-search"></i></div>
          <div class="menu-btn"><i class="iconfont icon-menu"></i></div>
        </div>
      </div>
    </div>
    <div class="nav-panel">
      <div class="main"><slotpro name="panel"></slotpro></div>
    </div>
  </div>
</template>
<!-- 
  /**
   * @description 公用顶部导航
   * @param { string } [ __attr__dark ] 黑色模式
   

   * 
   * @example
   * __attr__dark: true
  */ 
-->
<script>
  class CustomClass extends HTMLElement {
    constructor() {
      super();

      this.onceState = false;
    }

    callback(content) {
      this.setAttr(content);
      this.once(content);
      this.goTop(content);
      this.bindEvent(content);

      this.getAttribute('__attr__title') && this.toTitle(content);

      const headerBlock = content.querySelector('.header');
      const toolEle = content.querySelector('.tool');
      const navBefore = content.querySelector('.nav');

      if(window.__case__setting){
        if(window.__case__setting.case_2 && window.location.pathname.includes('article')){
          $(headerBlock).addClass('gray');
        }else if(window.__case__setting.article_nav_bg && window.__case__setting.article_nav_bg!='' && window.location.href.includes('article')){
          $(headerBlock).css('background',window.__case__setting.article_nav_bg);
          $(toolEle).css('background',window.__case__setting.article_nav_bg);
          $(navBefore).addClass('navSetting');
        }
      }

      
      if(window.location.pathname.includes('gallery') && (nodeHTML('article > textarea.article-ext-serious') === '3' || nodeHTML('article > textarea.article-ext-serious') === '4' || nodeHTML('article > textarea.article-ext-serious') === '5')){
        $(headerBlock).addClass('lightHeader');
      }

      if(window.location.pathname.includes('gallery') && (nodeHTML('article > textarea.article-ext-serious') === '3' || nodeHTML('article > textarea.article-ext-serious') === '4')){
        $(headerBlock).addClass('gray');
      }

      if(window.location.pathname.includes('gallery') && nodeHTML('article > textarea.article-ext-serious') === '5'){
        const navTitle = content.querySelector('.nav-title');
        $(navTitle).addClass('lightB');

        const navStyle = content.querySelector('.nav');
        $(navStyle).addClass('navStyle');

        const tool = content.querySelector('.tool');
        $(tool).addClass('toolStyle');
      }
    }

    once(content) {
      const toolEle = content.querySelector('.tool');
      if (!this.onceState) {
        $('body').on('click', function (e) {
          if ($(toolEle).hasClass('tool-search')) {
            if (!$(e.target).parents('.search-bar').length) {
              $(toolEle).removeClass('tool-search');
            }
          }
        });
        this.onceState = true;
      }
    }

    goTop() {
      const _goTop = {
        init() {
          this.render();
          this.reset();
          this.event();
        },
        render() {
          const _style = `<style>
                            #HQbackArea {position: fixed; bottom: 15px;z-index: 1070;}
                            #HQbackArea div { cursor: pointer; }
                            #HQbackArea div:hover { color: #E2CD88; }
                            #HQbackArea i { font-size: 30px;}
                            @media screen and (max-width:1170px) { #HQbackArea {right: 40px!important;}}
                          </style>`;
          const _dom = `<div id="HQbackArea"><div class="backBtn"><i class="iconfont icon-top"></i></div></div>`;
          $('body').append(_style + _dom);
        },
        reset() {
          const container = $('#HQbackArea');
          container.css({
            right: Math.ceil(($(window).width() - 1170) / 2) - 40
          });
          $(window).scrollTop() < 350 ? container.hide() : container.show();
        },
        event() {
          const _this = this;
          $('#HQbackArea')
            .find('.backBtn')
            .on('click', function () {
              $('html,body').animate(
                {
                  scrollTop: 0
                },
                300
              );
              return false;
            });
          $(window).on('scroll resize', function () {
            _this.reset();
          });
        }
      };
      _goTop.init();
    }

    toTitle(content) {
      const _this = this;
      const breadcrumbEle = content.querySelector('.breadcrumb');
      $(window).on('scroll', function () {
        if ($(window).scrollTop() > 40) {
          $(breadcrumbEle).hide().siblings().show();
        } else {
          $(breadcrumbEle).show().siblings().hide();
        }
      });
    }

    bindEvent(content) {
      const searchBtnEle = content.querySelector('.search-btn');
      const searchBarEle = content.querySelector('.search-bar');
      const searchBarBtnEle = content.querySelector('.search-bar button');
      const searchBarInputEle = content.querySelector('.search-bar input');
      const searchMenuBtnEle = content.querySelector('.menu-btn');
      const otherBoxEle = content.querySelector('.other-box');
      const headerEle = content.querySelector('.header');
      const titleEle = content.querySelector('.nav-title');

      const toolEle = content.querySelector('.tool');
      const navPanelEle = content.querySelector('.nav-panel');

      $(searchBarInputEle).on('click', function (e) {
        e.stopPropagation();
      });
      $(searchBarInputEle).on('keypress', function (e) {
        if (e.keyCode == '13') {
          toSearch();
        }
      });

      // search
      $(searchBtnEle).on('click', function (e) {
        if ($(toolEle).hasClass('tool-search')) {
          $(this).removeClass('active');
          $(toolEle).removeClass('tool-search');
          $(searchBarInputEle).trigger('blur');
        } else {
          $(toolEle).addClass('tool-search');
          $(searchBarInputEle).trigger('focus');
        }
        return false;
      });

      // search-button
      $(searchBarBtnEle).on('click', function () {
        toSearch();
      });

      function toSearch() {
        const val = $(searchBarInputEle).val();
        window.open(
          `https://www.baidu.com/s?wd=site:huanqiu.com ${val ? val : '环球网'}`
        );
      }

      // menus
      $(searchMenuBtnEle).on('click', function () {
        if ($(this).hasClass('active')) {
          $(otherBoxEle).css('display', 'block');
          $(this).removeClass('active').addClass('menu_close');
          $(navPanelEle).css('display', 'none');
          $('body,html').css('overflow', '');
        } else {
          $(window).scrollTop(0);
          $(this).addClass('active').removeClass('menu_close');
          $(navPanelEle)
            .css('display', 'block')
            .height($(window).height() - 40);
          $(otherBoxEle).css('display') != 'none' &&
            $(otherBoxEle).css({ display: 'none' });
          $('body,html').css('overflow', 'hidden');
        }
      });

      let adBoxHeight = otherBoxEle.clientHeight || 0;
      $('body').css('padding-top', adBoxHeight + 40);

      let timer_i = 5; // 定时器执行次数
      const timer = setInterval(function () {
        if (!timer_i) clearInterval(timer);
        timer_i--;
        adBoxHeight = otherBoxEle.clientHeight;
        if (adBoxHeight) {
          clearInterval(timer);
          $(otherBoxEle).removeClass('other-box-fixed');
          $('body').css('padding-top', adBoxHeight + 40);

          if ($(window).scrollTop() >= 40) {
            headerEle.isFixed = true;
            $(headerEle).css({
              transform: 'translateY(' + -otherBoxEle.clientHeight + 'px)'
            });
          }
        }
      }, 800);
      // setTimeout(function(){clearInterval(timer)},5000);

      $(window).on('scroll resize', function () {
        if ($(window).scrollTop() >= 40) {
          if (headerEle.isFixed) return;
          headerEle.isFixed = true;
          $(headerEle).css({
            transform: 'translateY(' + -otherBoxEle.clientHeight + 'px)'
          });
          $('body').css('padding-top', otherBoxEle.clientHeight + 40);
        }
        if ($(window).scrollTop() === 0) {
          headerEle.isFixed = false;
          $(headerEle).css({
            transform: 'translateY(0)'
          });
        }
      });
    }

    setAttr(content) {
      const dark = this.getAttribute('__attr__dark') || '';
      const _class = this.getAttribute('__attr__class') || '';

      const header = content.querySelector('.header');

      dark && content.querySelector('.header').setAttribute('data-dark', dark);
      _class && $(header).addClass(_class)
    }
  }
</script>
