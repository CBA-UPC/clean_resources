<template id="navigation-path-template">
  <sty
      color: #fff;
      padding-left: 22px;
      font-size: 16px;
      line-height: 24px;
    }
    a:hover {
      color: #fff;
      text-decoration: none;
    }

    a::before {
      position: absolute;
      top: -3px;
      left: 5px;
      content: '>';
      color: #fff;
      font-size: 12px;
    }

    a[data-index='0']::before {
      display: none;
    }

    a[data-index='0'] {
      padding-left: 0;
    }

    /* 浅色模板 */
    .lightA {
      color: #90080E!important;
    }
    .lightA::before {
      color: #90080E!important
    }

    .lightB {
      color: #8c8c8c!important;
    }
    .lightB::before {
      color: #8c8c8c!important
    }
  </style>

  <a>
    <slotpro name="title"></slotpro>
  </a>
</template>

<script>
  class CustomClass extends HTMLElement {
    constructor() {
      super();
    }

    callback(content) {
      this.setAttr(content);

      if(window.location.pathname.includes('gallery') && ((nodeHTML('article > textarea.article-ext-serious') === '3' || nodeHTML('article > textarea.article-ext-serious') === '4'))){
        const navigationA = content.querySelector('a');
        $(navigationA).addClass('lightA');
      }

      if(window.location.pathname.includes('gallery') && nodeHTML('article > textarea.article-ext-serious') === '5'){
        const navigationA = content.querySelector('a');
        $(navigationA).addClass('lightB');
      }
    }

    setAttr(content) {
      const href = this.getAttribute('__attr__href');
      content.querySelector('a').setAttribute('href', href);

      const index = this.getAttribute('__attr__index') || '';

      content.querySelector('a').setAttribute('data-index', index);
    }
  }
</script>
