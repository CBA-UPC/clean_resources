<template id="sketch-txt-template">
  <style>
    margin-top  font-size: 14px;
      line-height: 1.5;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: #262626;
      text-decoration: none;
    }
    a:hover {
      text-decoration: none;
      color: #90080e;
    }
    /* 标题红点 */
    li[data-disc] {
      padding-left: 12px;
    }
    li[data-disc]::before {
      content: '';
      position: absolute;
      top: 10px;
      left: 0;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background-color: #90080e;
    }
    /* 标题行数 */
    li[data-line] a,
    li[data-line='2'] a {
      max-height: 42px;
      white-space: normal;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    /* 标题加粗 */
    li[data-strong] a {
      font-weight: 800;
    }
    li[data-splitline] a::before {
      content: '';
      position: absolute;
      top: 50%;
      right: -20px;
      height: 15px;
      margin-top: -8px;
      border-left: 1px solid #8c8c8c;
    }
    /* 一行显示个数 */
    li[data-number='2'] {
      width: 128px;
    }
    li[data-number='3'] {
      width: 82px;
    }
    .time:empty {
      display: none;
    }
    .time {
      position: absolute;
      top: 0;
      right: 0;
      color: #8c8c88;
      font-size: 14px;
      line-height: 1.5;
    }
    /* 右侧时间,默认时间在右侧 */
    li[data-time='right'] {
      padding-right: 140px;
    right: 0;
    }

    /* 文字前边加序号 */
    li[data-item='0'] a::before {
      content: '01.';
      color: #90080e;
      padding-right: 20px;
    }
    li[data-item='1'] a::before {
      content: '02.';
      color: #90080e;
      padding-right: 20px;
    }
    li[data-item='2'] a::before {
      content: '03.';
      color: #90080e;
      padding-right: 20px;
    }
    li[data-item='3'] a::before {
      content: '04.';
      color: #90080e;
      padding-right: 20px;
    }
    li[data-item='4'] a::before {
      content: '05.';
      color: #90080e;
      padding-right: 20px;
    }
    li[data-item='5'] a::before {
      content: '06.';
      color: #90080e;
      padding-right: 20px;
    }
    li[data-item='6'] a::before {
      content: '07.';
      color: #90080e;
      padding-right: 20px;
    }
    li[data-item='7'] a::before {
      content: '08.';
      color: #90080e;
      padding-right: 20px;
    }
    li[data-item='8'] a::before {
      content: '09.';
      color: #90080e;
      padding-right: 20px;
    }
    li[data-item='9'] a::before {
      content: '10.';
      color: #90080e;
      padding-right: 20px;
    }
  </style>
  <li>
    <a target="_blank">
      <slotpro name="title"></slotpro>
    </a>
    <span class="time"><slotpro name="time"></slotpro></span>
  </li>
</template>
<!-- 
  /**
  * @description 图文类新闻列表
  * @param { string } [ __attr__disc ] 是否显示红点
  * @param { string } [ __attr__number ] 一行显示个数
  * @param { string } [ __attr__line ]  标题行数
  * @param { string } [ __attr__strong ]  标题是否需要加粗
  * @param { string } [ __attr__time ]  时间
  * @param { string } [ __attr__splitline ]  分割线
  * @param { string } [ __attr__item ]  序号
  * @param { string } [ __attr__outside ]  外链

  * 
  * @example
  * __attr__disc: true
  * __attr__number: 2
  * __attr__line: 2
  * __attr__strong: true
  * __attr__time: 'right'
  * __attr__splitline: true
  * __attr__item: 1
  * __attr__outside: ''
  */ 
-->
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
      const href =
        this.getAttribute('__attr__outsite') ||
        this.getAttribute('__attr__href') ||
        '###';
      const disc = this.getAttribute('__attr__disc');
      const line = this.getAttribute('__attr__line');
      const strong = this.getAttribute('__attr__strong');
      const number = this.getAttribute('__attr__number');
      const decimal = this.getAttribute('__attr__decimal');
      const time = this.getAttribute('__attr__time');
      const splitline = this.getAttribute('__attr__splitline');
      const item = this.getAttribute('__attr__item') || '';

      content.querySelector('a').setAttribute('href', href);
      disc && content.querySelector('li').setAttribute('data-disc', disc);
      line && content.querySelector('li').setAttribute('data-line', line);
      strong && content.querySelector('li').setAttribute('data-strong', strong);
      number && content.querySelector('li').setAttribute('data-number', number);
      time && content.querySelector('li').setAttribute('data-time', time);
      splitline &&
        content.querySelector('li').setAttribute('data-splitline', splitline);
      item && content.querySelector('li').setAttribute('data-item', item);
    }

    setStyle(content) {
      let style = this.getAttribute('__attr__style');
      if (!style) return;

      content
        .querySelector('style')
        .insertAdjacentHTML('beforeend', `${style}`);
    }

    get __edit__() {
      return true;
    }
  }
</script>
