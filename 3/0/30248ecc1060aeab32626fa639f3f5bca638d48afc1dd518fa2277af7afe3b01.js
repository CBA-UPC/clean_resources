<template id="article-container-template">
  <style>
    .container {
      padding-top: 40px;
      word-break: break-word;
    }
    .container .main {
      padding-left: 90px;
    }
    .container .container-body {
      /* overflow: hidden; */
      /* display: flex;
      flex-wrap: wrap; */
    }
    .container .container-left {
      width: 700px;
      float: left;
    }
    .container .container-right {
      width: 340px;
      float: right;
    }
    .container .right-box {
      width: 340px;
    }
    .container .container-feed {
      float: left;
      width: 700px;
    }
    @media screen and (max-width: 1170px) {
      .container .main {
        padding-right: 10px;
      }
      .container .container-right {
        margin-left: 0;
        width: 700px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }
    }
    .next {
    }
    .next-fixed {
    }
    /*  */
    .container[data-serious='2'] .container-right,
    .container[data-serious='3'] .container-right,
    .container[data-serious='4'] .container-right {
      display: none;
    }
    .container[data-serious='2'] .container-left,
    .container[data-serious='3'] .container-left,
    .container[data-serious='4'] .container-left {
      width: inherit;
      float: none;
    }
    .container[data-serious='2'] .main,
    .container[data-serious='3'] .main,
    .container[data-serious='4'] .main {
      width: 1000px;
    }
  </style>
  <slotpro name="header"></slotpro>
  <div class="container">
    <div class="main">
      <div class="container-head">
        <slotpro name="head"></slotpro>
      </div>
      <div class="container-body clearfix">
        <div class="container-left">
          <slotpro name="left"></slotpro>
        </div>
        <div class="container-right">
          <div class="right-box">
            <slotpro name="right1"></slotpro>
          </div>
          <div class="right-box">
            <slotpro name="right2"></slotpro>
          </div>
        </div>
        <div class="container-feed">
          <slotpro name="feed"></slotpro>
        </div>
      </div>
    </div>
  </div>
  <div class="footer">
    <slotpro name="footer"></slotpro>
  </div>
  <slotpro name="coupletad"></slotpro>
</template>
<script>
  class CustomClass extends HTMLElement {
    constructor() {
      super();
      this.rightContent = null;
      this.target = null;
      this.ele = null;
      this.serious = this.getAttribute('__attr__serious') || '1';
    }

    callback(content) {
      this.setAttr(content);

      // 领导人模板不展示接下来
      if (this.serious === '2' || this.serious === '3' || this.serious === '4') return;

      this.rightContent = content.querySelector('.container-right');
      this.target = $(this.rightContent).children().children().last()[0];
      this.ele = $(this.rightContent).children().children().last().prev()[0];
      // const target = $(this.rightContent).children().children().last()[0];
      // const ele = $(this.rightContent).children().children().last().prev()[0];
      const fn = this.throttle(this.scrollFn.bind(this), 500);
      this.scrollFn();
      window.addEventListener('scroll', fn, { passive: true });
    }

    scrollFn() {
      if (!this.ele) return;
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      const lastChildTop = this.ele.offsetTop;
      if (lastChildTop && scrollTop > lastChildTop) {
        this.target.style.position = 'fixed';
        this.target.style.bottom = '0px';
        this.target.style.transition = 'bottom 0.6s ease 0s';
        this.target.style['-webkit-transition'] = 'bottom 0.6s ease 0s';
        this.target.style['-o-transition'] = 'bottom 0.6s ease 0s';
        this.target.style['-moz-transition'] = 'bottom 0.6s ease 0s';
        this.target.style['-ms-transition'] = 'bottom 0.6s ease 0s';
      } else if (this.target.getAttribute('class') === 'noData') {
        this.target.style.display = 'none';
      } else {
        this.target.style.position = 'fixed';
        this.target.style.bottom = '-584px';
        this.target.style.transition = 'bottom 0.6s ease 0s';
        this.target.style['-webkit-transition'] = 'bottom 0.6s ease 0s';
        this.target.style['-o-transition'] = 'bottom 0.6s ease 0s';
        this.target.style['-moz-transition'] = 'bottom 0.6s ease 0s';
        this.target.style['-ms-transition'] = 'bottom 0.6s ease 0s';
      }
    }

    throttle(func, delay = 10) {
      let time = null;
      return function () {
        let args = Array.from(arguments);
        if (time === null) {
          time = setTimeout(() => {
            func(...args);
            clearTimeout(time);
            time = null;
          }, delay);
        }
      };
    }

    setAttr(content) {
      const serious = this.getAttribute('__attr__serious') || '1';
      content.querySelector('.container').setAttribute('data-serious', serious);
    }
  }
</script>
