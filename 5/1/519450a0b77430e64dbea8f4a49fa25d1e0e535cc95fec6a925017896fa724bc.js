<template id="image-img-template">
  <style>
    li {
      margin-top: 16px;
      margin-bottom: 1px;
      width: 140px;
    }
    .img-items {
      position: relative;
      font-sizeolor: #262626;
      overflow: hidden;
      text-decoration: none;
    }
    a:hover {
      color: #90080e;
      text-decoration: none;
    }
    a:hover h4 {
      color: #90080e;
    }
    .img-item {
      position: relative;
      overflow: hidden;
    }
    .img-item::before {
      display: block;
      content: '';
      padding-top: 66.66666666666666%;
    }

    .img-item img,
    .img-item .img {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      /* height: 100%; */
      min-height: 100%;
      object-fit: cover;
      -webkit-transition: all 0.6s ease-in;
      transition: all 0.6s ease-in;
    }
    .txt-item {
      position: relative;
      padding-top: 4px;
    }
    h4 {
      display: block;
      font-size: 14px;
      line-height: 1.5;
      color: #262626;
      font-weight: 400;
      max-height: 21px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-break: break-word;
    }
    h5 {
      display: block;
      font-size: 12px;
      line-height: 1.5;
      color: #8c8c8c;
      font-weight: 400;
      max-height: 21px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-break: break-word;
      max-height: 42px;
      white-space: normal;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .img-item i {
      font-size: 32px;
      line-height: 40px;
      display: none;
      position: absolute;
      width: 40px;
      height: 40px;
      top: 50%;
      left: 50%;
      margin: -20px 0 0 -20px;
      border-radius: 50%;
      z-index: 2;
      color: #fff;
      text-align: center;
      background-color: rgba(0, 0, 0, 0.3);
    }
    .img-item .img-label {
      width: 76px;
      height: 28px;
      line-height: 28px;
      background: #90080e;
      color: #fff;
      font-size: 12px;
      text-align: center;
      position: absolute;
      left: 0;
      top: 15px;
      z-index: 100;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .img-item .img-label:empty {
      display: none;
    }
    /* 声明i[data-limit='left'] {
      padding-right: 10px;
    }
    li[data-limit='right'] {
      padding-left: 10px;
    }
    /* 比例 */
    li[data-scale='16:9'] .img-item::before {
      padding-top: 56.25%;
    }
    li[data-scale='4:3'] .img-item::before {
      padding-top: 75%;
    }
    li[data-scale='1:1'] .img-item::before {
      padding-top: 100%;
    }
    /* 显示视频图标 */
    li[data-video] i {
      display: block;
    }

    li[data-animation] a:hover img {
      -webkit-transform: scale(1.15);
      transform: scale(1.15);
    }
    li[data-animation='blur'] .img-item img,
    li[data-animation='blur'] .img-item .img {
      -webkit-transition: none;
      transition: none;
    }
    li[data-animation='blur'] a:hover img {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-filter: blur(5px);
      filter: blur(5px);
    }
    /* 标题对齐方式 */
    li[data-title='center'] h4 {
      text-align: center;
    }
    /* 标题是否压图 */
    li[data-layout='up'] .txt-item {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 10px 5px 2px;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
    }
    li[data-layout='up'] h4,
    li[data-layout='up'] a:hover h4 {
      color: #fff;
      text-align: center;
    }
    /* 标题全补叠加到图片上 */
    li[data-layout='cover'] .txt-item {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      padding: 20px;
      /* background: linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)); */
      background: rgba(0, 0, 0, 0.3);
    }
    li[data-layout='cover'] .txt-item {
      display: none;
    }
    li[data-layout='cover'] h4,
    li[data-layout='cover'] a:hover h4 {
      color: #fff;
      font-size: 20px;
      text-shadow: 0 2px 1px rgb(0 0 0 / 50%);
      max-height: inherit;
    }
    li[data-layout='cover'] a:hover .txt-item {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    /* 不显示标题 */
    li[data-layout='none'] .txt-item {
      display: none;
    }
    /* 一行显示图片个数 */
    li[data-number='3'] {
      width: 90px;
    }
    /* 标题行数 */
    li[data-line='2'] h4 {
      max-height: 42px;
      white-space: normal;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    li[data-line='3'] h4 {
      max-height: 63px;
      white-space: normal;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
    li[data-dark] h4,
    li[data-dark] a:hover h4 {
      color: #fff;
    }

    li[data-shadow='true'] .txt-item {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      padding: 20px;
      background: rgba(0, 0, 0, 0.5);
      height: 100%;
      display: none;
    }
    li[data-shadow='true']:hover .txt-item {
      display: block;
    }
    li[data-shadow='true'] .txt-item::before {
      content: '';
      display: inline-block;
      vertical-align: middle;
      height: 100%;
      width: 1px;
      overflow: hidden;
    }
    li[data-shadow='true'] .txt-item h4 {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      white-space: normal;
      -webkit-box-orient: vertical;
      word-break: break-word;
      color: #fff;
      display: inline-block;
      vertical-align: middle;
      width: calc(100% - 18px);
      margin: 0 6px;
      text-align: center;
      max-height: 42px;
      -webkit-line-clamp: 2;
      padding-bottom: 10px;
      position: relative;
    }
    li[data-shadow='true'] .txt-item h4::before {
      content: '____';
      width: 36px;
      height: 2px;
      overflow: hidden;
      background: #fff;
      position: absolute;
      left: 50%;
      margin-left: -18px;
      bottom: 0;
    }
  </style>
  <li>
    <div class="img-items">
      <a target="_blank">
        <div class="img-item">
          <slotpro name="label"></slotpro>
          <i class="iconfont icon-video"></i>
          <img src="" loading="lazy" />
        </div>
        <div class="txt-item">
          <h4><slotpro name="title"></slotpro></h4>
          <h5><slotpro name="summary"></slotpro></h5>
        </div>
      </a>
    </div>
  </li>
</template>
<!-- 
  /**
   * @description 图片类图片列表
   * @param { string } [ __attr__scale ] 图片比例； 默认3:2，支持 16:9,4:3,1:1
   * @param { string } [ __attr__video ] 是否压默认视频图标；
   * @param { string } [ __attr__animation ] 鼠标悬浮至图上时是否需要放大效果；
   * @param { string } [ __attr__layout ] 标题是否压图，默认图片下方，支持 up(图上面)
   * @param { string } [ __attr__title ] 标题对齐方式
   * @param { string } [ __attr__limit ] 声明左图 or 右图
   * @param { string } [ __attr__number ] 一行显示图片个数，默认2张
   * @param { string } [ __attr__line ] 标题显示行数，默认一行，支持 2，3
   * @param { string } [ __attr__dark ] 黑色模式白字
   * @param { number } [ __attr__quality ] 图片资源的宽度（推荐为当前容器1.5x）
   * @param { string } [ __attr__shadow ] 图片遮罩
   * @param { string } [ __attr__sixImg ] 六图效果
   

   * 
   * @example
   * __attr__scale: 3:2
   * __attr__number: 2
   * __attr__video: true
   * __attr__animation: true
   * __attr__layout: true
   * __attr__title: 'center'
   * __attr__limit: 'left'
   * __attr__line: 2
   * __attr__dark: true
   * __attr__quality: 228
   * __attr__shadow: true
   * __attr__sixImg: true   
  */ 

  注意：
  <slotpro name="label"></slotpro>  传值时需要带有结构   label: `<span class="img-label">${'西安发布'}</span>`
-->
<script>
  class CustomClass extends HTMLElement {
    constructor() {
      super();
      this.quality = this.getAttribute('__attr__quality') || 228; // 图片的宽度，默认为 140*1.5 倍质量
    }

    callback(content) {
      this.setStyle(content);
      this.setAttr(content);
    }

    setStyle(content) {
      let style =
        this.getAttribute('__attr__style') &&
        this.getAttribute('__attr__style').replace(/{|}|"/g, '');
      if (!style) return;

      content
        .querySelector('style')
        .insertAdjacentHTML('beforeend', `li {${style}}`);
    }

    setAttr(content) {
      const src = this.getAttribute('__attr__image') || '';
      const href =
        this.getAttribute('__attr__outsite') ||
        this.getAttribute('__attr__href') ||
        '###';
      const scale = this.getAttribute('__attr__scale');
      const number = this.getAttribute('__attr__number');
      const video = this.getAttribute('__attr__video');
      const animation = this.getAttribute('__attr__animation');
      const layout = this.getAttribute('__attr__layout');
      const title = this.getAttribute('__attr__title');
      const limit = this.getAttribute('__attr__limit');
      const line = this.getAttribute('__attr__line');
      const dark = this.getAttribute('__attr__dark');
      const shadow = this.getAttribute('__attr__shadow') || false;
      const sixImg = this.getAttribute('__attr__sixImg') || false;

      content.querySelector('a').setAttribute('href', href);
      content
        .querySelector('img')
        .setAttribute('src', src + '?w=' + this.quality);

      scale && content.querySelector('li').setAttribute('data-scale', scale);
      number && content.querySelector('li').setAttribute('data-number', number);
      video && content.querySelector('li').setAttribute('data-video', video);
      animation &&
        content.querySelector('li').setAttribute('data-animation', animation);
      layout && content.querySelector('li').setAttribute('data-layout', layout);
      title && content.querySelector('li').setAttribute('data-title', title);
      limit && content.querySelector('li').setAttribute('data-limit', limit);
      line && content.querySelector('li').setAttribute('data-line', line);
      dark && content.querySelector('li').setAttribute('data-dark', dark);
      shadow && content.querySelector('li').setAttribute('data-shadow', shadow);
      sixImg && content.querySelector('li').setAttribute('data-sixImg', sixImg);
    }
    get __edit__() {
      return true;
    }
  }
</script>
