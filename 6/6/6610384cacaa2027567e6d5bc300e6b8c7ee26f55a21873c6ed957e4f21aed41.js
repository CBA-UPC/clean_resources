<template id="layout-hd-template">
  <style>
    font-size: 
      font-weight: 500;
      min-height: 30px;
      color: #262626;
      word-break: break-word;
    }
    h3 strong {
      font-weight: 500;
      display: inline-block;
    }
    h3::before {
      display: none;
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      height: 20px;
      margin-top: -10px;
      border-left: 2px solid #90080e;
    }
    a:hover {
      text-decoration: none;
      color: #90080e;
    }

    .more {
      position: absolute;
      right: 0;
      font-size: 14px;
      top: 50%;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
      color: #c5c5c5;
      text-decoration: none;
      font-weight: normal;
    }
    a:hover i {
      color: #c5c5c5;
    }
    .mod-hd[data-line] h3 {
      padding-left: 12px;
    }
    .mod-hd[data-line] h3::before {
      display: block;
    }
    .mod-hd[data-border] h3 {
      border-bottom: 1px solid #e5e5e5;
    }
    .mod-hd[data-border] h3 strong {
      border-bottom: 2px solid #90080e;
      margin-bottom: -1px;
    }
    .mod-hd[data-bor }
    .mod-hd[data-light] h3 {
      color: #fff;
    }
  </style>
  <div class="mod-hd">
    <h3>
      <strong><slotpro name="title"></slotpro></strong>
      <a class="more" target="_blank">
        <slotpro name="more"></slotpro>
      </a>
    </h3>
  </div>
</template>
<script>
  class CustomClass extends HTMLElement {
    constructor() {
      super();
    }

    callback(content) {
      this.setAttr(content);
      this.setStyle(content);
    }

    setAttr(content) {
      const href = this.getAttribute('__attr__href') || '###';
      const line = this.getAttribute('__attr__line');
      const border = this.getAttribute('__attr__border');
      const light = this.getAttribute('__attr__light');

      href === ''
        ? (content.querySelector('h3 .more').style.display = 'none')
        : content.querySelector('h3 .more').setAttribute('href', href);

      // 竖线标题 __attr__line: true/false
      line && content.querySelector('.mod-hd').setAttribute('data-line', line);

      // 横线下方标题 __attr__border: true/false
      border &&
        content.querySelector('.mod-hd').setAttribute('data-border', border);
      light &&
        content.querySelector('.mod-hd').setAttribute('data-light', light);
    }

    setStyle(content) {
      let style =
        this.getAttribute('__attr__style') &&
        this.getAttribute('__attr__style').replace(/{|}|"/g, '');
      if (!style) return;

      content
        .querySelector('style')
        .insertAdjacentHTML('beforeend', `.mod-hd {${style}}`);
    }

    // dp 高亮
    get __edit__() {
      return true;
    }
  }
</script>
