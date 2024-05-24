<template id="sketch-feed-template">
  <style>
    .feed-item {
      position: relative;
      overflow: hidden;
      padding: 24px 0;
      min-height: 81px;
      border-top: 1px solid #f2f2f2;
    }
    .feed-other {
      min-height: auto;
      border-top: none;
      padding: 0;
    }
    .feed-item:first-child {
      border-top: none;
    }
    .feed-item a {
      display: block;
      text-decoration: none;
    }
    .feed-item h4 {
      font-size: 20px;
      font-weight: normal;
      line-height: 1.5;
      margin-bottom: 46px;
      word-break: break-word;
      color: #262626;
    }
    .feed-item .tool {
      height: 21px;
      line-height: 21px;
      text-align: right;
    }
    .feed-item .tool .source,
    .feed-item .tool .time {
      color: #8c8c88;
      font-size: 14px;
      line-height: 1.5;
    }
    .feed-item .tool .source {
      float: left;
    }
    .feed-item .tool .time {
      float: right;
    }
    .feed-item .img-item {
   idden;
    }
     padding-top: 66.66666666666666%;
    }
    .feed-item .img-item img,
    .feed-item .img-item .img {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      /* height: 100%; */
      min-height: 100%;
      -o-object-fit: cover;
      object-fit: cover;
      -webkit-transition: all 0.6s ease-in;
      transition: all 0.6s ease-in;
    }
    .feed-item.feed-item-b .img-item {
      float: left;
      width: 186px;
    }
    .feed-item.feed-item-b .txt-item {
      margin-left: 206px;
      overflow: hidden;
    }
    .feed-item.feed-item-b .txt-item h4 {
      margin-bottom: 20px;
      margin-top: -4px;
    }
    .feed-item.feed-item-b .txt-item .tool {
      position: absolute;
      bottom: 20px;
      right: 0;
      left: 206px;
    }
    .feed-item.feed-item-c h4 {
      margin-bottom: 16px;
    }
    .feed-item.feed-item-c .img-items {
      overflow: hidden;
      margin-left: -20px;
      margin-bottom: 8px;
    }
    .feed-item.feed-item-c .img-items .img-item {
      float: left;
      width: 186px;
      margin-left: 20px;
    }
    .other-box {
      overflow: hidden;
    }
    .feed-item a:hover h4 {
      color: #90080e;
      text-decoration: none;
    }
    .feed-item.feed-item-b a,
    .feed-item.feed-item-c a {
      min-height: 124px;
    }

    .none {
      /* border-top: 1px solid #e5e5e5; */
      height: 40px;
      line-height: 40px;
      text-align: center;
      color: #777;
      display: none;
      font-size: 14px;
      margin-top: 20px;
    }
    /* 广告 */
    .mod-feed-list .feed-item.feed-other div[id^='AD_SURVEY_POSITION_SIMPLE_'] {
      border-toding-top: 56.25%;
    }
    .mod-feed-list[data-scale='4:3'] .feed-item .img-item::before {
      padding-top: 75%;
    }
    .mod-feed-list[data-scale='1:1'] .feed-item .img-item::before {
      padding-top: 100%;
    }
    /* 鼠标悬浮至图上放大效果 */
    .mod-feed-list[data-animation] a:hover img {
      -webkit-transform: scale(1.08);
      transform: scale(1.08);
    }

    /* 四图 */
    .mod-feed-list[data-number='4'] .feed-item.feed-item-b a,
    .mod-feed-list[data-number='4'] .feed-item.feed-item-c a {
      min-height: 106px;
    }
    .mod-feed-list[data-number='4'] .feed-item.feed-item-b .img-item,
    .mod-feed-list[data-number='4']
      .feed-item.feed-item-c
      .img-items
      .img-item {
      width: 160px;
    }
    .mod-feed-list[data-number='4'] .feed-item.feed-item-b .txt-item {
      margin-left: 180px;
    }
    .mod-feed-list[data-number='4'] .feed-item.feed-item-b .txt-item .tool {
      left: 180px;
    }
    @media screen and (max-width: 1170px) {
    }
  </style>
  <div>
    <!-- <div style="display: none" class="ad"><slotpro name="ad"></slotpro></div> -->
    <div class="mod-feed-list"></div>
    <div class="none">没有内容了</div>
  </div>
</template>

<script>
  class CustomClass extends HTMLElement {
    constructor() {
      super();

      this.host = this.getAttribute('__attr__host') || '';
      this.api = this.getAttribute('__attr__api') || '/api/list';
      this.path = this.getAttribute('__attr__path') || pathname.slice(1);

      this.limit = Number(this.getAttribute('__attr__limit') || 24);
      this.page = 1;

      this.quality = this.getAttribute('__attr__quality') || '280'; // 图片的宽度，默认为 186*1.5 倍质量
      this.number = this.getAttribute('__attr__number') || '3'; // 图片的数量，默认为 3图
      this.filter = this.getAttribute('__attr__filter') || '';

      this.catnodes = '';
      this.loading = false;
      this.onece = true;

      this.ad = JSON.parse(this.getAttribute('__attr__ad') || '{}') || {};
      this.jsonp_ad = this.getAttribute('__attr__jsonp_ad') || false;
      this.tempData = [];

      this.firstShowCount = {};

      if(pathname.slice(1) === 'esg'){
        this.api = '/api/list';
      }
    }

    get mode() {
      return 'open';
    }

    callback(content) {
      this.setAttr(content);
      this.initFeed(content);
    }

    setAttr(content) {
      const animation = this.getAttribute('__attr__animation');
      const number = this.getAttribute('__attr__number');
      animation &&
        content
          .querySelector('.mod-feed-list')
          .setAttribute('data-animation', animation);
      number &&
        content
          .querySelector('.mod-feed-list')
          .setAttribute('data-number', number);
    }

    scroll() {
      const _this = this;
      window.addEventListener('scroll', throttle(scrollFn, 200), {
        passive: true
      });

      function scrollFn() {
        let scrollHeight = Math.max(
          document.documentElement.scrollHeight,
          document.body.scrollHeight
        );
        let scrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop;
        let clientHeight =
          window.innerHeight ||
          Math.min(
            document.documentElement.clientHeight,
            document.body.clientHeight
          );

        if (!_this.loading && clientHeight + scrollTop + 1000 >= scrollHeight) {
          _this.page++;
          _this.loading = true;

          _this.initFeed();
        }
      }
      function throttle(func, delay = 500) {
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
    }

    oFilterSame(list1, list2) {
      if (list2.length > 1) {
        let result = list2.filter(function (item1) {
          return list1.every(function (item2) {
            return item2.aid !== item1.aid;
          });
        });
        return result;
      } else {
        return list2;
      }
    }

    initFeed(content) {
      this.getFeedDom()
        .then((res) => {
          this.shadowRoot
            .querySelector('.mod-feed-list')
            .insertAdjacentHTML('beforeend', res.join(''));

          content && this.scroll(content);
        })
        // 360广告上下线
        .then(() => {
          if (Boolean(this.jsonp_ad) && this.page === 1) {
            this.firstShowCount = { 0: 0, 2: 0 };
            this.getJsonpAd('pvJ05m', 0);
            this.getJsonpAd('Y1K6a5', 2);
          }
          // Boolean(this.jsonp_ad) &&
          //   this.page === 1 &&
          //   this.getJsonpAd('pvJ05m', 0);
          // Boolean(this.jsonp_ad) &&
          //   this.page === 1 &&
          //   this.getJsonpAd('Y1K6a5', 2);
        });
    }

    async getFeedDom() {
      const catnodes = (this.catnodes =
        this.catnodes || (await this.getFeedcatnode()));
      const _tempData = await this.getRequest({ catnodes });

      this.loading = _tempData.length >= this.limit ? false : true;
      if (_tempData.length < this.limit + 1) {
        this.shadowRoot.querySelector('.none').style.display = 'block';
      }
      const data = this.oFilterSame(this.tempData, _tempData);
      this.tempData = _tempData;

      return data.map((item, i) => {
        const _quality = this.quality;
        const _filter = this.filter;
        if (!item.aid) return;
        if (_filter && _filter === item.addltype) return;
        item.addltype = item.addltype == 'gallery' ? 'gallery' : 'article';

        const ad_pos =
          this.ad && Object.keys(this.ad) && Object.keys(this.ad)[0];
        const ad_data =
          this.ad && Object.values(this.ad) && Object.values(this.ad)[0];

        let _dom = '';

        // 领导人模板 或 非图集稿件
        if (item['ext-serious'] === '2' || item.addltype !== 'gallery') {
          if (item.cover) {
            _dom += `<div class="feed-item feed-item-b">
                  <a href="/${item.addltype}/${item.aid}" target="_blank">
                      <div class="img-item">
                          <img src="${item.cover}?w=${_quality}" alt="${
              item.title
            }">
                      </div>
                      <div class="txt-item">
                          <h4>${item.title}</h4>
                          <div class="tool">
                              <span class="source">${
                                item.source && item.source.name
                                                   <span class="time">${formatDate(
                                item.xtime
                              )}</span>
                          </div>
                      </div>
                  </a>
              </div>`;
          } else {
            _dom += `<div class="feed-item feed-item-a">
                <a href="/${item.addltype}/${item.aid}" target="_blank">
                    <h4>${item.title}</h4>
                    <div class="tool">
                        <span class="source">${
                          item.source && item.source.name
                        }</span>
                        <span class="time">${formatDate(item.xtime)}</span>
                    </div>
                </a>
            </div>`;
          }
        }
        // 图集稿件
        else if (item.addltype === 'gallery') {
          // 图集稿件-多图
          if (
            item.typedata &&
            item.typedata.gallery.members.length >= this.number
          ) {
            const _gallery = item.typedata.gallery.members
              .slice(0, this.number)
              .map((gallery) => {
                return `<div class="img-item">
                        <img src="${gallery.url}?w=${_quality}" alt="${item.title}">
                      </div>`;
              });
            _dom += `<div class="feed-item feed-item-c">
                <a href="/${item.addltype}/${item.aid}" target="_blank">
                    <h4>${item.title}</h4>
                    <div class="img-items">${_gallery.join(' ')}</div>
                    <div class="tool">
                        <span class="source">${
                          item.source && item.source.name
                        }</span>
                        <span class="time">${formatDate(item.xtime)}</span>
                    </div>
                </a>
            </div>`;
          }
          // 图集稿件-单图
          else if (item.typedata && item.typedata.gallery.members.length) {
            _dom += `<div class="feed-item feed-item-b">
                      <a href="/${item.addltype}/${item.aid}" target="_blank">
                          <div class="img-item">
                              <img src="${
                                item.typedata.gallery.members[0] &&
                                item.typedata.gallery.members[0].url
                              }?w=${_quality}" alt="${item.title}">
                          </div>
                          <div class="txt-item">
                              <h4>${item.title}</h4>
                              <div class="tool">
                                  <span class="source">${
                                    item.source && item.source.name
                                  }</span>
                                  <span class="time">${formatDate(
                                    item.xtime
                                  )}</span>
                              </div>
                          </div>
                      </a>
                    </div>`;
          }
          // 图集稿件-无图
          else {
            _dom += `<div class="feed-item feed-item-a">
                  <a href="/${item.addltype}/${item.aid}" target="_blank">
                      <h4>${item.title}</h4>
                      <div class="tool">
                          <span class="source">${
                            item.source && item.source.name
                          }</span>
                          <span class="time">${formatDate(item.xtime)}</span>
                      </div>
                  </a>
              </div>`;
          }
        }

        const index = Number(i) + 1;
    _pos === 0 &&
          ad_data.length &&
          this.api.includes('list')
        ) {
          const value = ad_data.shift();
          let _id, _type;
          if (Array.isArray(value)) {
            [_id, _type] = value;
          } else {
            _id = value;
          }

          if (_id) {
            // 360 直投临时ID
            const ztAds = [...document.querySelectorAll('div[data-zt]')].map(
              (item) => item.id
            );
            if (ztAds.includes(_id)) {
              _dom += `<div class="feed-item feed-other">
                <adv-loader __attr__inner="${_id}"></adv-loader></div>`;
            } else {
              _dom += `<div class="feed-item feed-other">${public_advLoader({
                __attr__id: _id,
                __attr__feed: true,
                __attr__type: _type
              })}</div>`;
            }
          }
        }
        return _dom;
      });
    }

    async getJsonpAd(adId, adIndex) {
      // 360 信息流广告位更换
      let _this = this;
      let ad_dom = '';
      // let showid = 'Y1K6a5'
      let showid = adId;
      let refurl = encodeURIComponent(document.referrer);
      let url = `https://show-g.mediav.com/s?of=4&newf=1&type=1&showid=${showid}&reqtimes=1&scheme=https&jqhm=1&impct=1&refurl=${refurl}`;
      $.ajax({
        url: url,
        type: 'GET',
        dataType: 'json (result) {
          if (Object.keys(result) !== {})            if (ads.length > 0) {
              ad_dom += `
                <div class="mediav-newsfeed-listitem-ads_${adIndex}" style="display: flex; padding: 24px 0; border-top: 1px solid #f2f2f2; cursor: pointer; position:relative;" data-imptk=${JSON.stringify(
                ads[0].imptk
              )} data-clktk=${JSON.stringify(ads[0].clktk)} data-href=${
                ads[0].curl
              } >
                  <div class="mediav-newsfeed-listitem__img-wrap">
                    <a href="${
                      ads[0].curl
                    }" target="_blank" style="display: inline-block; cursor: pointer; width: 160px; height: 100%; max-height: 107px; position: relative; overflow: hidden;">
                      <i style="position: absolute; display: inline-block; width: 30px; height: 16px; right: 0; top: 0; background: url('//p0.ssl.qhimg.com/t01c5fc7f8612d6b610.png') no-repeat 100%"></i>
                      <img src="${
                        ads[0].img
                      }" style="object-fit: cover; height: 100%;">
                    </a>
                  </div>
                  <div class="mediav-newsfeed-listitem__content-wrap" style="margin-left: 20px; display: flex; flex-direction: column; justify-content: space-between;">
                    <h4 class="mediav-newsfeed-listitem__title"><a href="${
                      ads[0].curl
                    }" target="_blank">${ads[0].title}</a></h4>
                    <div class="mediav-newsfeed-listitem__footer-bar" style="display: flex;">
                      <a href="${
                        ads[0].curl
                      }" target="_blank" style="color: #8c8c88; font-size: 14px; line-height: 1.5;">${
                ads[0].src
              }</a> 
                      <span style="font-size: 10px; color: #ddd; line-height: 1.5; margin-left: 10px;">广告</span>
                    </div>
                  </div>
                </div>  
              `;
              _this.shadowRoot.querySelectorAll('.mod-feed-list .feed-other')[
                adIndex
              ].innerHTML = ad_dom;
              //目标：第一条广告信息流
              //step1 获取第一条广告信息流reference
              var container = _this.getByClass(
                '.mediav-newsfeed-listitem-ads_' + adIndex,
                _this.shadowRoot
              );
              var imptkNodes = _this.checkLoop(adIndex, container), //滚动条事件触发前首次循环检测一次
                timer = null;
              window.addEventListener('scroll', () => {
                clearTimeout(timer);
                timer = setTimeout(function () {
                  imptkNodes = _this.checkLoop(adIndex, imptkNodes); //循环检测
                }, 50);
              });

              // 监听点击广告事件，替换宏
              var ad_click_dom = _this.shadowRoot.querySelector(
                '.mediav-newsfeed-listitem-ads_' + adIndex
              );
              var data = {
                __EVENT_TIME_START__: '',
                __EVENT_TIME_END__: '',
                __OFFSET_X__: ': '',
                __ADSPACE_W__: '',
                __ADSPACE_H__: ''
              };
              // mousedown
              ad_click_dom.addEventListener('mousedown', (e) => {
                data.__EVENT_TIME_START__ = new Date().getTime();
                data.__ADSPACE_W__ = ad_click_dom.offsetWidth;
                data.__ADSPACE_H__ = ad_click_dom.offsetHeight;
                data.__OFFSET_X__ =
                  _this.getElPosition(ad_click_dom, e).x < 0
                    ? 0
                    : _this.getElPosition(ad_click_dom, e).x;
                data.__OFFSET_Y__ =
                  _this.getElPosition(ad_click_dom, e).y < 0
                    ? 0
                    : _this.getElPosition(ad_click_dom, e).;
              // mouseup
              ad_click_dom.addEventListener('mouseup', (e) => {
                data.__EVENT_TIME_END__ = new Date().getTime();
              });

              //step2 发送展示监测
              //step3 添加点击监听
              container.onclick = function () {
                //step4 发送点击监测
                _this.trackClick(this, data);
              };
            }
          }
        },
        error: function (err) {
          console.log(err);
        }
      });
    }

    async getFeedcatnode() {
      // 文旅
      if (this.api.includes('list1')) {
        // return `/e3pmh1tuv/e3pmh1ufv&tag=${encodeURIComponent('文旅新闻')}`;
        const goCatnode = await requestMemorize(
          `//${this.host}/api/navigate?type=column&path=https://${this.host}/${this.path}`
        ).then(
          ({ data }) =>
            data[data.length - 1] &&
            data[data.length - 1].catnode[0] &&
            data[data.length - 1].catnode[0].catnode
        );
        if (goCatnode && goCatnode != '/e3pmh1tuvigate?type=column&path=https://${this.host}/${this.path}`
          ).then(
            ({ data }) =>
              data[data.length - 1] &&
              data[data.length - 1].catnode[0] &&
              data[data.length - 1].catnode[0].catnode +
                '&tags="' +
                data[data.length - 1].path_name +
                '"'
          );
        } else {
          return `/e3pmh1tuv/e3pmh1ufv/e3pmh1v35&tags="出游"`;
        }
      }

      // 列表页
      if (this.api.includes('list2')) {
        return await requestMemorize(
          `//${this.host}/api/navigate?type=column&path=https://${this.host}/${this.path}`
        ).then(
          ({ data }) =>
            data[data.length - 1] &&
            data[data.length - 1].catnode[0] &&
            data[data.length - 1].catnode[0].catnode
        );
      }

      // esg下的栏目
      if(this.path.includes('esg')){
        let esgResult= [];
        return await requestMemorize(
          `//${this.host}/api/sidebaresg`
        ).then(
          ({ children }) => {
            Object.values(children[Object.keys(children)].children).map(
              ({ node, path_name, url, children }) =>
                Object.values(children).map(({ node, path_name, url }) => {
                  if(node !='/e3pmh1rv3/f8c7sm40k/f8c7to6pr'){
                    esgResult.push('"' + node + '"')
                  }
                }
              )
            )
            return esgResult;
          }
        );
      }

      // 频道页 & 详情页
      // return await request(`//${this.host}/api/channel_pc`).then(
      //   ({ children }) =>
      //     [...Object.values(children[Object.keys(children)].children)].map(
      //       ({ node, children }) => {
      //         let _node = '';
      //         _node += '"' + node + '"';
      //         if (children) {
      //           _node +=
      //             ',' +
      //             Object.values(children).map(({ node }) => '"' + node + '"');
      //         }
      //         return _node;
      //       }
      //     )
      // );

      let otherResult = [];
      otherResult = await request(`//${this.host}/api/channel_pc`).then(
        ({ children }) =>
          [...Object.values(children[Object.keys(children)].children)].map(
            ({ node, children }) => {
              let _node = '';
              _node += '"' + node + '"';
              if (children) {
                _node +=
                  ',' +
                  Object.values(children).map(({ node }) => '"' + node + '"');
              }
              return _node;
            }
          )
      );
      
      // 过滤5g的云上看5G，物联网+
      if(this.host === '5gcenter.huanqiu.com' && otherResult.length>1){
        otherResult = otherResult.filter((item) => item != '"/efphbf5l6/emdlbsb1i"' && item != '"/efphbf5l6/efphcn5t2"');
      }
      return otherResult;
    }

    async getRequest({
      catnodes,
      offset = (this.page - 1) * this.limit,
      limit = this.limit
    }) {
      const headers = hostname.includes('huanqiu-ltd')
        ? {}
        : { 'X-Requested-With': 'XMLHttpRequest' };
       ).then(({ list }) => list);
    }

    //通过类名选择器选择dom reference
    getByClass(className, context) {
      context = context || this.shadowRoot;
      if (context.querySelector) {
        return context.querySelector(className);
      } else {
        context = context || document;
        var classes = className.split(' '),
          classesToCheck = [],
          elements = context.getElementsByTagName('*'),
          current,
          returnElements = [],
          match;
        for (var k = 0, kl = classes.length; k < kl; k += 1) {
          classesToCheck.push(new RegExp('(^|\\s)' + classes[k] + '(\\s|$)'));
        }
        for (var l = 0, ll = elements.length; l < ll; l += 1) {
          current = elements[l];
          match = false;
          for (var m = 0, ml = classesToCheck.length; m < ml; m += 1) {
            match = classesToCheck[m].test(current.className);
            if (!match) {
              break;
            }
          }
          if (match) {
            returnElements.push(current);
          }
        }
        return returnElements;
      }
    }

    isArray(a) {
      return '[object Array]' == Object.prototype.toString.call(a);
    }

    //利用image src 发送曝光
    log(url, data) {
      let newUrl = url;
      var img = new Image(),
        key =
          'mediav_sio_log_' +
          Math.floor(Math.random() * 2147483648).toString(36);
      window[key] = img;
      img.onload =
        img.onerror =
        img.onabort =
          function () {
            img.onload = img.onerror = img.onabort = null;
            window[key] = null;
            img = null;
          };
      if (data) {
        newUrl = newUrl.replace(
          /__EVENT_TIME_START__/gi,
          data.__EVENT_TIME_START__
        );
        newUrl = newUrl.replace(
          /__EVENT_TIME_END__/gi,
          data.__EVENT_TIME_END__
        );
        newUrl = newUrl.replace(/__OFFSET_X__/gi, data.__OFFSET_X__);
        newUrl = newUrl.replace(/__OFFSET_Y__/gi, data.__OFFSET_Y__);
        newUrl = newUrl.replace(/__ADSPACE_W__/gi, data.__ADSPACE_W__);
        newUrl = newUrl.replace(/__ADSPACE_H__/gi, data.__ADSPACE_H__);
      }
      img.src = newUrl;
    }

    /**
     * @function
     * @description 曝光监测
     * @param {object} container - 包含data-imptk的dom
     * */
    //展示曝光
    trackImptk(container) {
      var imptk = null;
      try {
        imptk = JSON.parse(container.getAttribute('data-imptk'));
      } catch (e) {
        imptk = (container && container.getAttribute('data-imptk')) || [];
      }
      // console.log(1, 'trackImptk..', imptk);
      if (imptk) {
        imptk = this.isArray(imptk) ? imptk : imptk.split(',');
        for (var i = 0; i < imptk.length; i++) {
          this.log(imptk[i]);
        }
      }
    }

    /**
     * @function
     * @description 点击监测发送
     * @param {object} container - 包含data-clktk的dom
     * @param {object} data - 宏替换
     * */
    trackClick(container, data) {
      var clktk = null;
      var href = null;
      try {
        clktk = JSON.parse(container.getAttribute('data-clktk'));
      } catch (e) {
        clktk = (container && container.getAttribute('data-clktk')) || [];
      }
      href = (container && container.getAttribute('data-href')) || '';
      // console.log(2, 'trackClick..', clktk, href);
      if (href) {
        if (data) {
          href = href.replace(
            /__EVENT_TIME_START__/gi,
            data.__EVENT_TIME_START__
          );
          href = href.replace(/__EVENT_TIME_END__/gi, data.__EVENT_TIME_END__);
          href = href.replace(/__OFFSET_X__/gi, data.__OFFSET_X__);
          href = href.replace(/__OFFSET_Y__/gi, data.__OFFSET_Y__);
          href = href.replace(/__ADSPACE_W__/gi, data.__ADSPACE_W__);
          href = href.replace(/__ADSPACE_H__/gi, data.__ADSPACE_H__);
        }
        window.open(href);
      }
      if (clktk) {
        clktk = this.isArray(clktk) ? clktk : clktk.split(',');
        for (var i = 0; i < clktk.length; i++) {
          this.log(clktk[i], data);
        }
      }
    }

    //获取ele到document顶部的距离
    getElementTop(elem) {
      var elemTop = elem.offsetTop;
      elem = elem.offsetParent;
      while (elem != null) {
        elemTop += elem.offsetTop;
        elem = elem.offsetParent;
      }
      return elemTop;
    }

    //获取页面顶部被卷起来的高度
    scrollTop() {
      return Math.max(
        document.body.scrollTop, //chrome
        document.documentElement.scrollTop
      ); //firefox/IE
    }
    //获取页面浏览器视口的高度
    windowHeight() {
      return document.compatMode == 'CSS1Compat'
        ? document.documentElement.clientHeight
        : document.body.clientHeight;
    }

    // 判断目标DOM是否进入可视区域
    isView(node) {
      var $this = this;
      if (!node) {
        return false;
      }
      var nodeTop = this.getElementTop(node);
      var bottomTop = nodeTop + node.offsetHeight;
      if (
        this.scrollTop() < nodeTop &&
        nodeTop < $this.scrollTop() + $this.windowHeight()
      ) {
        return true;
      } else if (
        $this.scrollTop() < bottomTop &&
        bottomTop < $this.scrollTop() + $this.windowHeight()
      ) {
        return true;
      } else {
        return false;
      }
    }

    // step3 展示曝光
    checkLoop(adIndex, nodes) {
      var newNodes = nodes;
      this.isView(nodes) && ++this.firstShowCount[adIndex];
      if (this.firstShowCount[adIndex] === 1) {
        //step2 发送展示监测
        this.isView(nodes) ? this.trackImptk(nodes) : (newNodes = nodes);
      }
      return newNodes;
    }

    getElPosition(el, e) {
      let domToTop = el.getBoundingClientRect().top; // dom 的顶边到视口顶部的距离
      let domToLeft = el.getBoundingClientRect().left; // dom 的左边到视口左边的距离
      let l = e.x - domToLeft; // 视口距离 - 容器距离
      let t = e.y - domToTop;
      return {
        x: Math.floor(l),
        y: Math.floor(t)
      };
    }
  }
</script>
