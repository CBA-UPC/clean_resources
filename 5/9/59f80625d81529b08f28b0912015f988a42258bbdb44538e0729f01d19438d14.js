<template id="menu-item-template">
  <style>
  : left;
     -flyout-menu-item-title {
      margin-bottom: 10px;
    }
    .nav-flyout-menu-item-title span {
      font-size: 14px;
      margin: 0 10px;
    }
    .nav-flyout-menu-item-title h3 {
      font-size: 18px;
      color: #000;
      letter-spacing: 0.6px;
      line-height: 30px;
      font-weight: normal;
    }
    .nav-flyoutt li a {
      font-size: 14px;
      color: #333;
      letter-spacing: 0.4px;
      line-height: 22px;
    }
    .nav-flyout-menu-item-list li span {
      display: inline-block;
    }
    .nav-flyout-menu-item-list li .name-cn {
      width: 18%;
    }
    .nav-flyout-menu-item-list li .name-en {
      width: 60%;
    }
    .nav-flyout-menu-item-list.long li .name-cn {
      width: 31%;
    }
    .nav-flyout-menu-item-list.long2 li .name-cn {
      width: 37%;
    }
    .nav-flyout-menu-item-list.long3 li .name-cn {
      width: 25%;
    }
    .nav-flyout-menu-item-list li a:hover {
      color: #90080e;
      text-decoration: none;
    }

    /* 索引定义不同样式 */
    .nav-flyout-menu-item[data-index='0']
      .nav-flyout-menu-item-list
      li
      .name-cn {
      width: 18%;
    }
    .nav-flyout-menu-item[data-index='1']
      .nav-flyout-menu-item-list
      li
      .name-cn {
      width: 29%;
    }
    .nav-flyout-menu-item[data-index='2']
      .nav-flyout-menu-item-list
      li
      .name-cn {
      width: 23%;
    }
    .nav-flyout-menu-item[data-index='3']
      .nav-flyout-menu-item-list
      li
      .name-cn {
      width: 18%;
    }
    .nav-flyout-menu-item[data-index='4']
      .nav-flyout-menu-item-list
      li
      .name-cn {
      width: 18%;
    }
    .nav-flyout-menu-item[data-index='5']
      .nav-flyout-menu-item-list
      li
      .name-cn {
      width: 35%;
    }
    .nav-flyout-menu-item[data-index='6']
      .nav-flyout-menu-item-list
      li
      .name-cn {
      width: 55%;
    }
    .nav-flyout-menu-item[data-index='6']
      .nav-flyout-menu-item-list
      li
      .name-en {
      width: 0%;
    }
    .nav-flyout-menu-item[data-index='7']
      .nav-flyout-menu-item-list
      li
      .name-cn {
      width: 23%;
    }

    /* 黑色模式 */
    .nav-flyout-menu-item[data-dark] .nav-flyout-menu-item-title h3 {
      color: #fff;
    }
    .nav-flyout-menu-item[data-dark] .nav-flyout-menu-item-title h4 {
      color: #fff;
    }
    .nav-flyout-menu-item[data-dark] .nav-flyout-menu-item-list li a {
      color: #bfbfbf;
    }
    .nav-flyout-menu-item[data-dark] .nav-flyout-menu-item-list li a:hover {
      color: #fff;
    }

    @media screen and (max-width: 1170px) {
      .nav-flyout-menu-item {
        padding: 0 8px 0 0;
        width: 25%;
        height: 239px;
      }
      .nav-flyout-menu-item.s-hight {
        height: 215px;
      }
      .nav-flyout-menu-item .nav-flyout-menu-item-list li a {
        line-height: 18px;
      }
      .nav-flyout-menu-item .nav-flyout-menu-item-title {
        margin-bottom: 15px;
      }
      .nav-flyout-menu-item .nav-flyout-menu-item-list li {
        margin: 0;
      }
      .nav-flyout-menu-item .nav-flyout-menu-item-list li p {
        line-height: 22px;
      }
      .nav-flyout-menu-item .nav-flyout-menu-item-list li .name-en {
        width: 50%;
      }
      .nav-flyout-menu-item .nav-flyout-menu-item-list.long li .name-cn {
        width: 34%;
      }
      .nav-flyout-menu-item .nav-flyout-menu-item-list.long2 li .name-cn {
        width: 40%;
      }
    }
  </style>

  <div class="nav-flyout-menu-item">
    <div class="nav-flyout-menu-item-title">
      <h3>
        <slotpro name="title"></slotpro><span style="margin: 10px"></span>
      </h3>
      <h4>
        <slotpro name="subtitle"></slotpro><span style="margin: 10px"></span>
      </h4>
    </div>
    <div class="children" style="display: none">
      <slotpro name="children"></slotpro>
    </div>
    <ul class="nav-flyout-menu-item-list"></ul>
  </div>
</template>
<!-- 
  /**
   * @description 公用顶部导航子组件
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
    }

    callback(content) {
      this.setAttr(content);
      this.render(content);
    }
    render(content) {
      content
        .querySelector('.nav-flyout-menu-item-list')
        .insertAdjacentHTML('beforeend', this.getDom(content).join(' '));
    }

    getDom(content) {
      const children = JSON.parse(
        content.querySelector('.children').innerHTML || []
      );
      return children.map(
        (item) =>
          `<li>
              <a target="_blank" href="${item.url}">
                <span class="name-cn">${item.name}</span>
                <span class="name-en">${item.desc}</span>
              </a>
            </li>
          `
      );
    }

    setAttr(content) {
      const index = this.getAttribute('__attr__index') || '#';
      const dark = this.getAttribute('__attr__dark') || '';

      index &&
        content
          .querySelector('.nav-flyout-menu-item')
          .setAttribute('data-index', index);
      dark &&
        content
          .querySelector('.nav-flyout-menu-item')
          .setAttribute('data-dark', dark);
    }
  }
</script>
