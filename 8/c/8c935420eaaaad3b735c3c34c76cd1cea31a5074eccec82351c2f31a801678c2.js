<template id="article-next-template">
  <style>;
   lute;
      right: 6px;
      top: 3px;
      z-index: 2147483649;
      cursor: pointer;
      color: #8e8e8e;
    }
    .close-ad .iconfont {
      font-size: 12px;
    }
    .box {
      background: #262626;
      padding: 15px;
      position: relative;
      z-index: 2147483650;
    }
    .box h3 {
      font-size: 14px;
      color: #ffffff;
      line-height: 17px;
      font-weight: normal;
    }
    li {
      overflow: hidden;
      padding: 12px 0;
      border-bottom: 1px solid #424242;
    }
    li a {
      display: block;
    }
    .img-item {
      height: 90px;
      overflow: hidden;
      float: left;
    }
    li img {
      float: left;
      width: 120px;
      min-height: 90px;
      /* max-height: 90px; */
      object-fit: cover;
      margin-right: 20px;
    }
    li .txt-item h4,
    li .txt-item p {
      font-size: 12px;
      line-height: 20px;
      overflow: hidden;
    }
    li .txt-item h4 {
      font-size: 14px;
      height: 22px;
      color: #8e8e8e;
      margin-bottom: 10px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    li .txt-item p {
      color: #fff;
      height: 40px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      white-space: normal;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      word-break: break-word;
    }
    .oAd-con {
      background: #f9f9f9;
      display: flex;
      justify-content: space-around;
    }
    @media screen and (max-width: 1170px) {
      .next {
        display: none !important;
      }
    }
  </style>
  <div class="next" id="next-box">
    <div class="ad oAd-con"><slotpro name="ad"></slotpro></div>
    <div class="close-ad"><slotpro name="close"></slotpro></div>
    <div class="box">
      <h3>
        <slotpro name="title"></slotpro>
      </h3>
      <ul></ul>
    </div>
  </div>
</template>

<script>
  class CustomClass extends HTMLElement {
    constructor() {
      super();
    }

    callback(content) {
      this.displayNext(content);
    }

    // 是否为爬虫
    isSpider() {
      var searchEngines = ['spider', 'bot'];
      try {
        for (var i = 0; i < searchEngines.length; i++) {
          if (
            navigator.userAgent
              .toLocaleLowerCase()
              .indexOf(searchEngines[i]) !== -1
          ) {
            return true;
          }
        }
      } catch (error) {
        return true;
      }

      return false;
    }
    displayNext(content) {
      // 爬虫访问一年前的稿件不提供 接下来 功能
      if (
        nodeText('article > textarea.article-time') <
          new Date().getTime() - 365 * 24 * 3600000 &&
        this.isSpider()
      ) {
        return false;
      }

      this.getData(content);
      this.bindEvent(content);
    }

    getData(content) {
      let _this = this;
      const host = !!hostname.includes('huanqiu-ltd')
        ? window.global_constant.global_path
        : window.location.host;
      const ul = content.querySelector('ul');
      const catnode = nodeText('article > textarea.article-catnode');
      const xtime = nodeText('article > textarea.article-ext-xtime');
      const aid = nodeText('article > textarea.article-aid');
      requestMemorize(`//${host}/api/navigate?type=article&catnode=${catnode}`).then(
        ({ data }) => {
          const oPathName = data[data.length - 1].path_name;

          requestMemorize(
            `//${host}/api/article/next?catnode=${catnode}&ctime=${xtime}&aid=${aid}&limit=2`
          ).then(({ list }) => {
            let result = list;
            if (result.length - 1 < 2) {
              request(
                `//${host}/api/gallery/previous?catnode=${catnode}&ctime=${xtime}&aid=${aid}&limit=2`
              ).then(({ list }) => {
                let listTemp = [];
                if (result.length - 1 == 0 && list.length - 1 != 0) {
                  listTemp = list;
                } else if (result.length - 1 == 1 && list.length - 1 == 0) {
                  listTemp = result;
                } else if (result.length - 1 == 1 && list.length - 1 != 0) {
                  listTemp = result;
                }
                if (listTemp.length > 0) {
                  const dom = listTemp.map(
                    ({ aid, addltype, cover, title, summary }) => {
                      if (!aid) return;
                      addltype = addltype == 'normal' ? 'article' : 'gallery';
                      return `<li>
                    <div class="img-items">
                      <a target="_blank" href="/${addltype}/${aid}">
                        <div class="img-item">
                          ${
                            cover
                              ? '<img loading="lazy" src="' + cover + '?w=180">'
                              : ''
                          }
                        </div>
                        <div class="txt-item">
                          <h4>${oPathName}</h4>
                          <p>${title}</p>
                        </div>
                      </a>
                    </div>
                  </li>`;
                    }
                  );

                  ul.insertAdjacentHTML('beforeend', dom.join(''));
                } else {
                  _this.setAttribute('class', 'noData');
                }
              });
            } else {
              const dom = result.map(
                ({ aid, addltype, cover, title, summary }) => {
                  if (!aid) return;
                  addltype = addltype == 'normal' ? 'article' : 'gallery';
                  return `<li>
                <div class="img-items">
                  <a target="_blank" href="/${addltype}/${aid}">
                    <div class="img-item">
                      ${
                        cover
                          ? '<img loading="lazy" src="' + cover + '?w=180">'
                          : ''
                      }
                    </div>
                    <div class="txt-item">
                      <h4>${oPathName}</h4>
                      <p>${title}</p>
                    </div>
                  </a>
                </div>
              </li>`;
                }
              );

              ul.insertAdjacentHTML('beforeend', dom.join(''));
            }
          });
        }
      );
    }

    bindEvent(content) {
      const next = content.querySelector('#next-box');
      const fixedTop = this.offsetTop;
      const closeAd = content.querySelector('.close-ad');
      const oAdCon = content.querySelector('.oAd-con');

      !window.AD_SURVEY_Add_AdPos && (closeAd.style.display = 'none');

      // 判断标题导航操作
      const _this = this;

      closeAd.addEventListener('click', (e) => {
        e.stopPropagation();
        oAdCon.style.display = 'none';
        closeAd.style.display = 'none';
      });
    }
  }
</script>
