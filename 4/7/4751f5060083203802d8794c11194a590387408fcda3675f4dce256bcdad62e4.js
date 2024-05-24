<template id="layout-side-block-template">
  <style>
    .side-block {
      width: 340px;
      background: #f9f9f9;
      padding: 16      width: 340px;
      z-index: 100;
      display: none;
    }
  </style>
  <div class="side-block">
    <slotpro name="hd"></slotpro>
    <slotpro name="bd"></slotpro>
    <!-- <slotpro name="bd2"></slotpro>
    <slotpro name="bd3"></slotpro> -->
  </div>
</template>
<script>
  class CustomClass extends HTMLElement {
    constructor() {
      super();
      this.top = this.offsetTop - 30;
    }

    callback(content) {
      this.setAttr(content);
      this.setStyle(content);
    }

    setAttr(content) {
      const fixed = this.getAttribute('__attr__fixed');
      if (fixed) {
        content.querySelector('.side-block').setAttribute('data-fixed', fixed);
        this.fixed(content);
      }
    }

    fixed(content) {
      let _aside = content.querySelector('.side-block'),
        _this = this;

      function throttle(func, delay) {
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
      function scrollFn() {
        const top = _this.offsetTop;
        const scrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop;
        if (scrollTop >= top) {
          _aside.style.display = 'block';
          _aside.style.position = 'fixed';
          _aside.style.top = '40px';
        } else {
          _aside.style.display = 'none';
         window.addEventListener('scroll', throttle(scrollFn, 100), {
          passive: true
        });
      }, 0);

      window.addEventListener('resize', throttle(scrollFn, 100), {
        passive: true
      });
    }

    setStyle(content) {
      let style = this.getAttribute('__attr__style');
      if (!style) return;

      content
        .querySelector('style')
        .insertAdjacentHTML('beforeend', `${style}`);
    }

    // dp 高亮
    get __edit__() {
      return true;
    }
  }
</script>
