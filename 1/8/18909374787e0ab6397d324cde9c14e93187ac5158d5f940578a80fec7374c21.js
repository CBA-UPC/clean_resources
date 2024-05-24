<template id="article-content-template">
  <style>
    .article_container {
      position: relative;
      margin-bottom: 60px;
    }
    .article_container .tool {
      font-size: 14px;
      display: flex;
      justify-content: space-between;
      margin-top: 10px;
    }
    .article_container .tool .tool-left a {
      margin-right: 30px;
    }
    .article_container .copyright {
      font-size: 12px;
      color: #888888;
      letter-spacing: 0.2px;
      text-align: left;
      margin-top: 10px;
    }
    .article_container .tool a {
      text-decoration: none;
      color: #90080e;
    }
    .article_container .tool a:hover {
      text-decoration: none;
      color: #ec545b;
    }

    .article_container .content {
      /* padding: 20px 0 */
      overflow: hidden;
    }

    .article_container .content p {
      /* overflow: hidden; */
      word-break: break-word;
      font-size: 18px;
      color: #262626;
      line-height: 1.778;
      letter-spacing: 1px;
      text-indent: 36px;
      margin-bottom: 30px;
      word-break: break-word;
      text-align: justify;
    }

    .article_container .content .pic-con {
      background: #f9f9f9;
      padding: 15px;
      text-align: center;
      text-indent: initial;
      display: block;
      font-style: normal;
      margin-bottom: 30px;
    }

    .article_container .content .pic-con span {
      display: block;
      text-align: center;
      font-size: 14px;
      color: #979696;
      line-height: 22px;
      margin-top: 15px;
    }

    .article_container .content img {
      max-width: 100%;
      width: inherit;
      vertical-align: to-transform: none;
      transform: none;
    }

    .article_container .content video,
    .article_container .content iframe {
      max-width: 100%;
      width: inherit;
    }

    .article_container .content ul {
      padding-left: 20px;
      list-style: disc;
      margin-bottom: 30px;
    }

    .article_container .content ul li {
      list-style: disc;
      margin-bottom: 2px;
    }

    .article_container .content ol {
      list-style: decimal;
      margin-bottom: 30px;
      padding-left: 20px;
    }

    .article_container .content ol li {
      margin-bottom: 2px;
      list-style: decimal;
    }

    .article_container .content blockquote {
      padding: 0 20px;
      margin: 0 0 30px;
      font-size: 16px;
      border-left: 3px solid #eee;
    }

    .article_container .content p[data-scene='heading'] {
      width: 100%;
      margin: 5px 0px 20px;
      font-weight: bold;
      position: relative;
      padding-bottom: 4px;
      text-indent: 0em;
      border-bottom: solid 1px #eee;
    }

    .article_container .content p[data-scene='heading']:before {
      content: '';
      display: block;
      width: 100%;
      height: 1px;
      background: #eee;
      position: absolute;
      left: 0px;
      bottom: -5px;
    }

    .article_container .content p[data-scene='sign'] {
      text-align: right;
      margin: 10px 0px;
      font-size: 14px;
      line-height: 1.8;
      color: #a6a6a6;
    }

    .article_container .content p[data-scene='sign']:before {
      content: '\2014\2014   ';
    }

    .article_container .content span[data-scene='sup'],
    .article_container .content em[data-scene='sup'] {
      vertical-align: super;
      font-size: smaller;
    }

    .article_container .content span[data-scene='sub'],
    .article_container .content em[data-scene='sub'] {
      vertical-align: sub;
      font-size: smaller;
    }

    .article_ntent em[data-scene='strong'] {
      font-weight: bold;
      font-style: inherit;
    }

    .artner .content span[data-scene='align-right'] {
      display: block;
      text-indent: 0;
    }
    .article_container .content span[data-scene='align-center'] {
     ata-scene='align-right'] {
      text-align: right;
    }

    .article_container .content .document-view {
      position: relative;
      background: #eee;
      border-radius: 3px;
      border: solid 1px #eee;
      color: #4a4a4a;
      line-height: 2;
      font-size: 14px;
      margin: 10px 0px;
      text-indent: 18px;
    }

    .article_container .content .document-view a {
      color: #4a4a4a;
      width: 100%;
      display: -webkit-box;
      display: -webkit-fleox;
      display: flex;
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
      text-decoration: none;
    }

    .article_container .content .document-view .iconfont {
      font-size: 24px;
      width: 48px;
    }

    .comment {
      display: none;
    }

    /* 视频 */
    video {
      background: #000;
      max-height: 495px;
      width: 100%;
      margin-left: -2em;
    }
    .video-con {
      height: 495px;
      margin-bottom: 15px;
      position: relative;
      /* background: #f9f9f9
        url(//t1.huanqiucdn.cn/hq2018/article/images/v-background.jpg?1)
        no-repeat center; */
      background: #000;
      overflow: hidden;
    }
    .video video {
      z-index: 10;
      position: absolute;
      min-height: 495px;
      max-height: 100%;
      width: 100%;
      margin-left: 0;
      color: #fff;
      background: #000;
      left: 0;
    }
    .video-con .v-inner1 {
      background: #000;
      height: 500px;
      right: 0;
      opacity: 0;
      position: absolute;
      top: 0;
      transition: top 0.4s, right 0.4s, width 0.4s ease, height 0.4s ease,
        opacity 1s ease-in;
      width: 700px;
      z-index: 2;
    }
    .video-con .v-inner2 {
      background: rgba(0, 0, 0, 0);
      position: fixed;
      z-index: -22;
      width: 710px;
      height: 495px;
      top: 40px;
    }
    .video-con .v-inner1.an {
      background: rgba(0, 0, 0, 0);
      height: 168.75px;
      opacity: 1;
      top: 85px;
      -webkit-transition: none;
      -o-transition: none;
      -moz-transition: none;
      transition: none;
      width: 300px;
      z-index: -22;
    }
    .video-con .v-inner2.an {
      height: 168.75px;
      position: fixed;
      -webkit-transition: left 0.3s, width 0.3s ease, height 0.3s ease;
      -o-transition: left 0.3s, width 0.3s ease, height 0.3s ease;
      -moz-transition: left 0.3s, width 0.3s ease, height 0.3s ease;
      transition: left 0.3s, width 0.3s ease, height 0.3s ease;
      width: 300px;
      background: #000;
      z-index: 900;
    }
    .video {
      height: 100%;
      position: relative;
      z-index: 901;
    }
    .video.in {
      position: relative;
      width: 700px;
      height: 495px;
    }
    .video iframe {
      width: 100%;
      height: 100%;
    }
    .video.out {
      position: fixed;
      top: 0;
      width: 300px;
      height: 168.75px;
      z-index: 902;
    }
    .video.out video {
      min-height: 168.75px;
    }
    /* 视频广告样式 */
    .v_ad {
      position: absolute;
      left: 50%;
      z-index: 20;
      width: 200px;
      height: 200px;
      margin-left: -100px;
      text-indent: 0;
      display: none;
    }
    #v_ad_close {
      width: 30px;
      padding-left: 14px;
      height: 20px;
      line-height: 20px;
      font-size: 12px;
      color: #888;
      text-decoration: none;
      position: absolute;
      right: 0;
      bottom: 0;
      display: none;
      z-index: 1000;
    }
    #v_ad_close i {
      font-size: 12px;
    }
    .out .v_ad {
      display: none !important;
    }
    .v_ad iframe {
      height: 200px !important;
    }
    /* 侧边栏 */
    .fix-menu {
      position: absolute;
      left: -90px;
      top: 0;
      width: 70px;
    }
    .fix-menu .share {
      margin-left: 13px;
    }
    .fix-menu .share .item {
      width: 40px;
      height: 40px;
      line-height: 40px;
      margin-bottom: 30px;
      text-align: center;
      border-radius: 50%;
    }
    .fix-menu .share .iconfont {
      font-size: 30px;
      cursor: pointer;
      color: #90050e;
    }
    .fix-menu .share .item-comment {
      display: none;
    }
    .fix-menu .share .item-comment-num {
      position: relative;
    }
    .fix-menu .share .item-comment-num i {
      font-size: 34px;
      color: #90050e;
    }
    .fix-menu .share .item-wechat i {
      font-size: 30px;
      color: #149817;
    }
    .fix-menu .share .item-weibo i {
      font-size: 30px;
      color: #ca0813;
    }
    .fix-menu .share .item-comment-num span {
      color: #90050e;
      font-size: 14px;
      letter-spacing: 0.47px;
      position: absolute;
      top: -18px;
      left: 22px;
      z-index: 1;
      white-space: nowrap;
    }
    .fix-menu .share .item:hover {
      opacity: 0.9;
    }
    .fix-menu .date {
      margin-bottom: 100px;
      text-align: center;
    }
    .fix-menu .date span {
      display: block;
      color: #90050e;
      line-height: 18px;
      margin-bottom: 10px;
    }
    .fix-menu .date .YYYY {
      font-size: 14px;
    }
    .fix-menu .date .MM-DD {
      font-size: 22px;
      font-weight: 700;
      line-height: 30px;
    }
    .fix-menu .date .HH {
      font-size: 16px;
    }
    #content-ad {
      display: none;
      margin: 20px 30px 40px 0;
      overflow: hidden;
      padding: 30px 30px 30px 30px;
      border: 1px solid #ebebeb;
      float: left;
      position: relative;
      z-index: 1;
    }
    #content-ad .pic-con {
      background: none;
      padding: 0;
      text-align: left;
    }
    a:hover {
      text-decoration: none;
    }

    /*  */
    .article_container[data-serious='2'] .content,
    .article_container[data-serious='3'] .content,
    .article_container[data-serious='4'] .content {
      min-height: 240px;
    }
    .article_container[data-serious='2'] .video-con,
    .article_container[data-serious='3'] .video-con,
    .article_container[data-serious='4'] .video-con,
    .article_container[data-serious='2'] .pic-con,
    .article_container[data-serious='3'] .pic-con,
    .article_container[data-serious='4'] .pic-con {
    auto;
      margin-right: }
    .article_container[data-serious='2'] .tool,
    .article_container[data-serious='3'] .tool,
    .article_container[data-serious='4'] .tool {
      margin-top: 30px;
    }
  </style>

  <div class="article_container">
    <div class="fix-menu">
      <div class="date">
        <span class="YYYY"> -<slotpro name="YYYY"></slotpro>- </span>
      D">
          <slotpro name="MM"></slotpro>
        </span>
        <span class="HH">
          <slotpro name="HH"></slotpro>
        </span>
      </div>
      <div class="share">
        <div class="item item-comment">
          <i class="iconfont icon-comment3"></i>
        </div>
        <div class="item item-wechat">
          <a title="分享到微信" href="javascript:void(0);"
            ><i class="iconfont icon-weixin"></i
          ></a>
        </div>
        <div class="item item-weibo">
          <a title="分享到微博" target="_blank" href="javascript:void(0);"
            ><i class="iconfont icon-weibo"></i
          ></a>
        </div>
      </div>
    </div>
    <div class="content">
      <slotpro name="content"></slotpro>
    </div>

    <div class="tool">
      <p class="tool-left">
        <a href="mailto:jubao@huanqiu.com">
          <i class="iconfont icon-warning"></i>
          举报
        </a>
        <a class="comment">
          <i class="iconfont icon-comment"></i>
          我也说两句
        </a>
      </p>
      <p class="tool-right"><slotpro name="editor"></slotpro></p>
    </div>
    <div class="copyright"><slotpro name="copyright"></slotpro></div>
  </div>
</template>

<script>
  class CustomClass extends HTMLElement {
    constructor() {
      super();

      this.serious = this.getAttribute('__attr__serious') || '1';
      this.aid = this.getAttribute('__attr__aid') || '';
      this.header = this.getAttribute('__attr__header') || '';
      this.host = this.getAttribute('__attr__host') || '';
      this.catnode = this.getAttribute('__attr__catnode') || '';
      this.addltype =
        this.getAttribute('__attr__addltype') === 'gallery'
          ? 'gallery'
          : 'article';
      this.time = this.getAttribute('__attr__time') || 0;
    }

    callback(content) {
      const article_container =  content.querySelector('.article_container')
      if(this.sess','article_container gray')
      }
      if(this.serious === '4') {
        article_container.querySelector('.fix-menu').setAttribute('class','fix-menu gray')
        article_container.querySelector('.tool').setAttribute('class','tool gray')
        article_container.querySelector('.copyright').setAttribute('class','copyright gray')
      }

      // 视频
      this.video(content);

      this.setAttr(content);

      // 格式化内容区
      this.format(content);

      const commentStatus =
        document.querySelector('.article-ext-CommentStatus') &&
        document.querySelector('.article-ext-CommentStatus').innerHTML; // 是否可评论
      // 评论
      commentStatus && this.comment(content);
      // 分享
      this.share(content);
      // 统计点击量
      this.interactive();

      // 设置内容部分的a标签新开
      const links = [...content.querySelectorAll('.content a')];
      links.forEach((item) => {
        item.setAttribute('target', '_blank');
      });
    }

    get mode() {
      return 'open';
    }

    // 在生命周期中获取
    connectedCallback() {
      const videos = [...this.shadowRoot.querySelectorAll('video')];
      const video = this.shadowRoot.querySelector('.video');
      const vinner1 = this.shadowRoot.querySelector('.v-inner1');
      const vinner2 = this.shadowRoot.querySelector('.v-inner2');
      const videoCon = this.shadowRoot.querySelector('.video-con');
      let videoHeight;
      videos.forEach((item, index) => {
        const height = item.offsetHeight;
        $(item).parents('.video-con').css({ height: height });

        // 视频图注
        var _alt = $(item).attr('data-alt');
        if (_alt &&          var info_audio = $(item).attr('data-alt');
          $(item)
            .parent()
            .parent()
            .after(
              '<span style="text-indent:0;line-height:22px;display:block;text-align:center;font-size:14px;color:#979696;max-width: 700px;margin-left:auto;margin-right:auto;">' +
                info_audio +
                '</span>'
            ��时使用浏览器版本过低，请升级');

        if (index === 0) {
          if (nodeText('article > textarea.article-ext-serious') != '2') {
            const id = 7006810;
            const _vad = document.createElement('div');
            _vad.className = 'v_ad';

            _vad.style.marginTop = (height - 200) / 2 + 'px';
            _vad.style.top = '0%';
            _vad.innerHTML = `<a href="javascript:void(0)" id="v_ad_close"><i class="iconfont icon-close"></i></a>${public_advLoader(
              { __attr__id: id }
            )}`;
            video.insertAdjacentElement('beforeend', _vad);
            video.querySelector('video').addEventListener('play', function () {
              _vad.style.display = 'none';
            });
            video.querySelector('video').addEventListener('pause', function () {
              _vad.style.display = 'block';
            });
            video
              .querySelector('video')
              .addEventListener('ended', function (e) {
                _vad.style.display = 'none';
              });

            const v_ad_close = video.querySelector('#v_ad_close');
            v_ad_close.style.display = 'block';
            v_ad_close.addEventListener('click', () => {
              _vad.style.display = 'none';
            });

            // 广告停止投放
            const $adEle = $('#' + id);
            const timer = setInterval(() => {
              if (!$adEle) clearInterval(timer);
              if (
                $adEle &&
                $adEle
                  .find('div[id^=AD_SURVEY_POSITION_SIMPLE_]')
                  .css('display') === 'none'
              ) {
                clearInterval(timer);
                _vad.remove();
              }
            }, 800);
            setTimeout(() => clearInterval(timer), 3000);
          }

          videoHeight = item.offsetHeight;
        }
      });
      // 领导人模板不展示小视频
      if (this.serious === '2' || this.serious === '3' || this.serious === '4') return;
      if (!video) return;
      // const videoTop = video.offsetParent.offsetTop;

      let videoTop;
      let intersectionObserver = new IntersectionObserver((entries) => {
        if (video.offsetParent) {
          videoTop = video.offsetParent.offsetTop;
        }
      });
      intersectionObserver.observe(video);

      setTimeout(() => {
        window.addEventListener('scroll', throttle(scrollFn, 100)),
          { passive: true };
      }, 0);

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
        const scrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop;
        const right = (document.body.clientWidth - 1170) / 2 + 20;
        const left = (document.body.clientWidth - 1170) / 2 + 1170 - 300 - 20;

        if (
          scrollTop > videoTop + videoHeight + 320 &&
          window.innerWidth > 1030
        ) {
          setTimeout(function () {
            $(video).removeClass('in').addClass('out');
            $(video).css({
              position: 'fixed',
              top: '60px',
              right: right
            });
          }, 20);
        } else {
          setTimeout(function () {
            $(video).removeClass('out').addClass('in');
            $(video).css({
              position: 'relative',
              top: 0,
              right: 0
            });
          }, 20);
        }
      }
    }

    format(content) {
      const article = content.querySelector('.content');
      // 文章附件
      const ele = [
        ...content.querySelectorAll(
          'article > section p[data-scene="document"]'
        )
      ];
      const extMap = {
        pdf: 'icon-pdf',
        doc: 'icon-docx',
        docx: 'icon-docx',
        ppt: 'icon-pptx',
        pptx: 'icon-pptx',
        xls: 'icon-xlsx',
        xlsx: 'icon-xlsx',
        numbers: 'icon-numbers',
        keynote: 'icon-keynote',
        pages: 'icon-pages'
      };
      ele.forEach((item) => {
        const src =
          item.getAttribute('data-source') || item.getAttribute('src');
        const filename = item.getAttribute('data-name');

        const arr = filename.split('.');
        const ext = arr[arr.length - 1];

        $(item).after(
          '<p class="document-view"><a href="' +
            src +
            '" target="_blank" alt="' +
            filename +
            '"><span class="iconfont ' +
            extMap[ext] +
            '"></span><span class="name">' +
            filename +
            '</span></a></p>'
        );
        $(item).remove();
      });

      // dp 预览单独图片处理
      if (search['dp_csid']) {
        const eleChildren = [
          ...content.querySelector('article > section').children
        ];
        eleChildren.forEach((item) => {
          const selectors = ['img'];
          for (let i = 0, len = selectors.length; i < len; i++) {
            const target = item.querySelector(selectors[i]);
            if (target) {
              this[`${selectors[i]}Format`](target, item);
              break;
            }
          }
        });
      }

      // 图注
      const imgs = [...content.querySelectorAll('.content img')];
      var info_img = '';
      imgs.forEach((item) => {
        info_img = item.getAttribute('data-alt');
        if (info_img != '' && info_img != undefined) {
          $(item).after('<span>' + info_img + '</span>');
        }
      });

      // 音频图注
      const audios = [...content.querySelectorAll('.content audio')];
      audios.forEach((item) => {
        var info_audio = $(item).find('span').text() || '';
        $(item).after(
          '<span style="display: block;text-align: center;font-size: 14px;color: #A6A6A6;">' +
            info_audio +
            '</span>'
        );
      });
    }
    imgFormat(img, target) {
      let ele = document.createElement('p');
      let i = document.createElement('i');
      i.setAttribute('class', 'pic-con');
      i.insertAdjacentElement('beforeend', img);
      ele.insertAdjacentElement('beforeend', i);

      target.innerHTML = '';
      target.replaceWith(ele);
    }

    video(content) {
      const ele = [...content.querySelectorAll('video')];

      ele.forEach((item, index) => {
        const src = item.getAttribute('data-src') || item.getAttribute('src');
        const alt = item.getAttribute('data-alt');
        const poster =
          item.getAttribute('data-cover') || item.getAttribute('poster');
        const con = document.createElement('div');
        con.className = `video-con`;
        con.innerHTML = `
          <div class="v-inner1" style="right: 0px; top: 0px;"></div>
          <div class="v-inner2" style="left: 0px; top: 50px;"></div>
          <div class="video in" id="vt-video">
            <video controls="" src="${src}" data-alt="${alt}" poster="${poster}"></video>
          </div>
        `;
        $(item).parent().html(con);
      });
    }

    insertScript(url) {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = url;
        document.body.insertAdjacentElement('beforeend', script);

        script.onload = () => {
          resolve();
        };
        script.onerror = (e) => {};
      });
    }

    // 统计点击量
    interactive() {
      const uid = cookie['REPORT_UID_'] || 1;
      $.ajax({
        url: `//interactive.huanqiu.com/?c=hits4cs&a=addHits&id=${this.aid}&u=${uid}&type=filter`,
        type: 'GET',
        dataType: 'json',
        success: function (data) {
          // console.log('+1');
        },
        error: function (data) {}
      });
    }

    share(content) {
      const wechat = content.querySelector('.item-wechat');

      const qrcode = document.createElement('div');
      const qrcode_style = document.createElement('style');
      qrcode_style.innerHTML = `
        #qrcode {
          display: none;
          position: fixed;
          width: 220px;
          height: 250px;
          left: 50%;
          top: 50%;
          margin-left: -110px;
          margin-top: -125px;
          z-index: 2000;
          background: #ffffff;
          border: 6px solid #7f7f7f;
          -webkit-box-shadow: 0 1px 13px 0 rgba(0,0,0,0.24);
          box-shadow: 0 1px 13px 0 rgba(0,0,0,0.24);
          border-radius: 4px;
          overflow: hidden
        }

        #qrcode p {
          line-height: 30px;
          padding: 0 10px;
          background-color: #f2f2f2;
          font-size: 14px
        }
        #qrcode .inner { padding: 20px;}
        #qrcode i {
          font-size: 12px;
          float: right;
          font-style: normal;
          cursor: pointer;
        }

        #qrcode img,#qrcode canvas {
          width: 100%;
          -o-object-fit: cover;
          object-fit: cover
        }
      `;
      qrcode.id = 'qrcode';
      qrcode.innerHTML = `<p>分享到微信：<i class="iconfont icon-close"></i></p><div class="inner"></div>`;

      document.body.insertAdjacentElement('beforeend', qrcode);
      document.body.insertAdjacentElement('beforeend', qrcode_style);

      this.insertScript(
        'https://rs2.huanqiucdn.cn/huanqiu/js/www/browse/jquery.qrcode.min.js'
      ).then(() => {
        $('#qrcode .inner').qrcode({
          width: 180,
          height: 180,
          text: window.location.origin + window.location.pathname
        });
        wechat.addEventListener('click', (e) => {
          e.stopPropagation();
          qrcode.style.display = 'block';
        });
        document.body.addEventListener('click', (e) => {
          qrcode.style.display = 'none';
        });
      });
    }

    comment(content) {
      const _this = this;
      const comment = content.querySelector('.item-comment');
      const comment2 = content.querySelector('.tool .comment');

      // ISE1 稿件允许评论展示评论图标
      if(this.aid === 'xxx' && window.ISE1) {
        comment.style.display = 'inline-block';
      }

      const data = {
        app_id: 'fLHTlMN2j3',
        // app_id: '8ZgHCdX1FR',
        article_id: this.aid,
        article_url: `${
          window.location.protocol +
          '//' +
          this.host +
          '/' +
          this.addltype +
          '/' +
          this.aid
        }`,
        category: this.host,
        title: this.header
      };

      $.ajax({
        type: 'post',
        url: 'https://api.comment.huanqiu.com/api/sourceInfo',
        // url: 'https://api-test.comment.huanqiu.com/api/sourceInfo',
        data: data,
        dataType: 'json',
        xhrFields: { withCredentials: true },
        success: function (res) {
          if (res.code == 2000) {
            const _href = `//${_this.host}/comment/${_this.aid}?source_id=${res.data.source_id}`;
            if (res.data.participation_sum) {
              comment.innerHTML = `<i class="iconfont icon-comment2"></i><span>${res.data.participation_sum}</span>`;
              comment.setAttribute('class', 'item item-comment-num');
            }
            comment.style.display = 'inline-block';
            comment2.setAttribute('href', _href);
            comment2.style.display = 'inline-block';

            comment.addEventListener('click', (e) => {
              e.stopPropagation();
              window.location.href = _href;
            });
          }
        },
        err: function () {}
      });
    }

    setAttr(content) {
      const weibo = this.getAttribute('__attr__weibo') || '';
      weibo &&
        content.querySelector('.item-weibo a').setAttribute('href', weibo);

      const serious = this.getAttribute('__attr__serious') || '1';
      content
        .querySelector('.article_container')
        .setAttribute('data-serious', serious);
    }

    get __edit__() {
      return true;
    }
  }
</script>
