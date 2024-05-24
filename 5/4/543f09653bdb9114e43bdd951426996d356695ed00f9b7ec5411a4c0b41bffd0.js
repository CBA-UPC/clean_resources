<template id="article-other-template">
  <stylepx;
       margin-bottom: 30px;
      position: relative;
      line-height: 30px;
      color: #000;
      font-size: 14px;
      font-family: 'PingFang SC', Helvetica, 'Microsoft YaHei', Ari #other-block p {
      text-align: center;
    }
    #other-block .other-block-close {
      position: absolute;
      right: 20px;
      top: 18px;
      cursor: pointer;
      text-align: center;
      width: 18px;
      height: 18px;
      background: #90080f;
      color: #fff;
      line-height: 18px;
    }
    #other-block .other-block-close i {
      font-size: 12px;
    }
    #other-block .other-block-inner {
      border: 2px solid #90080f;
      padding: 48px 28px;
    }
    a:hover {
      text-decoration: none;
    }
  </style>
  <div id="other-block">
    <div class="other-block-inner">
      <a herf="javascript:void(0);" class="other-block-close">
        <i class="iconfont icon-close"></i>
      </a>
      <strong>系统提示：</strong>AdBlock 或Adblock
      Plus插件已阻拦了站点推荐内容，为体验更好的服务，请移除相关插件或将环球网设置为白名单。如有疑问可电话咨询
      <p>(010) 65361101-2804</p>
    </div>
  </div>
</template>

<script>
  class CustomClass extends HTMLElement {
    constructor() {
      super();
    }

    callback(content) {
      this.bindEvent(content);
    }

    bindEvent(content) {
      const close = content.querySelector('.other-block-close');
      const box = content.querySelector('#other-block');

      close.addEventListener('click', (e) => {
        this.style.display = 'none';
        // box.style.display = 'none'
      });
    }

    setAttr(content) {
      const href = this.getAttribute('__attr__href');
      content.querySelector('h3 .more').setAttribute('href', href);

      const _height = this.getAttribute('__attr__height') || 'auto';
      content.querySelector('aside').style.height = `${_height}px`;
    }
  }
</script>
