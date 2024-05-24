<template id="adv-loader">
  <style>
    .ad-content {
      position: relative;
      width: 100%;
      box-sizing: border-box;
      overflow: hidden;
    }
    .ad-close {
      position: absolute;
      right: 0;
      bottom: 15px;
      width: 50px;
      height: 50px;
      z-index: 2;
    }
    .ad-content[data-feed] div[id^='AD_SURVEY_POSITION_SIMPLE_'] div:empty {
      display: none;
    }
    .ad-content[data-feed] div[id^='AD_SURVEY_POSITION_SIMPLE_'] div {
      border-top: 1px solid #f2f2f2;
      padding: 20px 0;
    }
    img {
      vertical-align: middle;
    }

    /* 中部广告间距 */
    #AD_SURVEY_POSITION_SIMPLE_7007548, .ad-content[data0 !important;
    }
    /* 品牌广告 */
    .ad-content[data-feed] div[id^='AD_SURVEY_POSITION_SIMPLE_'] > a {
      top: initial !important;
      bottom: 20px;
    }
    .ad-content[data-feed]
      div[id^='AD_SURVEY_POSITION_SIMPLE_']
      > a[target='_blank'] {
      display: flex;
      flex-direction: column-reverse;
      border-top: 1px solid #f2f2f2 !important;
      padding: 20px 0 !important;
    }
    .ad-content[data-feed]
      div[id^='AD_SURVEY_POSITION_SIMPLE_']
      > a[target='_blank']
      div {
      border-top: none !important;
      padding: 0 !important;
    }
    .ad-content[data-feed]
      div[id^='AD_SURVEY_POSITION_SIMPLE_']
      > a[target='_blank']
      span {
      color: #262626;
      font-silass="ad-content"></div>
</template>

<script>
  window.customElements.define(
    'adv-loader',
    class extends HTMLElement {
      constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const target = document.getElementById('adv-loader');
        const content = target.content.cloneNode(true);

        shadow.appendChild(content);
      }

      setStyle() {
        let style =
          this.getAttribute('__attr__style') &&
          this.getAttribute('__attr__style').replace(/{|}|"/g, '');
        if (!style) return;

        this.shadowRoot
          .querySelector('style')
          .insertAdjacentHTML('beforeend', `.ad-content {${style}}`);
      }

      connectedCallback(content) {
        this.insertAd();
        this.setAttr();
      }

      insertAd() {
        let id = this.getAttribute('__attr__id');
        let inner = this.getAttribute('__attr__inner');

        if (!window.ids) {
          window.ids = [];
        }
        if (window.ids.includes(id)) return;
        id && window.ids.push(id);

        if (id) {
          this.resolveID(id);
          id && this.observerDom(id);
      }
      }

      resolveID(id) {
        const feed = this.getAttribute('__attr__feed');
        const type = this.getAttribute('__attr__type');
        this.insertAdSlot(id);

        const oXIPengEle = document.body.querySelectorAll('x-ipeng');
        const oIpeng = {
          init: function () {
            this.oXIPengFn();
            // this.hideFn();
          },
          // 鹏泰页面直投广告，默认 <x-ipeng data-id="xxxx"></x-ipeng> 占位，支持广告投放后渲染
          oXIPengFn: function () {
            for (var i = 0; i < oXIPengEle.length; i++) {
              var x = oXIPengEle[i];
              var s = document.createElement('script');
              s.innerHTML =
                'AD_SURVEY_Add_AdPos_Simple("' +
                x.getAttribute('data-id') +
                '")';
              );
              x = x.outerHTML = '<div id="' + id + '"></div>';
              var e = document.body.querySelector('#' + id);
              e && e.insertAdjacentElement('afterend', s)

              // 判断广告不加载时手动执行一次广告代码
              // if (feed) {
              let timer_i = 3; // 定时器执行次数
              const timer = setInterval(() => {
                if (!timer_i) clearInterval(timer);
                timer_i--;
                const baidu = e.querySelector('div');
                const scripts = e.querySelectorAll('script');
                if (!baidu) return;
                clearInterval(timer);
                if (baidu.innerHTML) return;
                [...scripts].map(script => {
                  script.innerHTML && eval(script.innerHTML);
                })
              }, 800);
              // }
            }
          },
          hideFn() {
            // 焦点图尾帧广告
            var $caroufredselObj = $('#foucsBoxCC #imgCon');
            var $caroufredselObjAdBox = $('#foucsBoxCC #imgCon .l-ad');
            var timer = setInterval(function () {
              var $caroufredselObj = $('#foucsBoxCC #imgCon');
              var $caroufredselObjAdBox = $('#foucsBoxCC #imgCon .l-ad');
              if (
                $caroufredselObjAdBox
                  .find('[id^=AD_SURVEY_POSITION_SIMPLE_]')
                  .css('display') == 'none'
              ) {
                clearInterval(timer);
                $caroufredselObj.trigger('removeItem', $caroufredselObjAdBox);
                $caroufredselObjAdBox.remove();
              }
            }, 200);
            setTimeout(function () {
              clearInterval(timer);
            }, 4000);
          }
        };

        if (!type) {
          window.AD_SURVEY_Add_AdPos && oIpeng.init();
        }
      }

      resolveInner(id) {
        const ad = document.getElementById(id);
        if (!ad || !window.AD_SURVEY_Add_AdPos) return;
        if (!ad.clientHeight) return;

        this.setStyle();
        this.shadowRoot.querySelector('.ad-content').innerHTML = ad
          ? `<div class="ad-close"></div>${ad.innerHTML}`
          : '';
        this.bindEvent();
      }

      /**
       * default: <x-ipeng> 占位
       * 2: 只需要将 script:https://www.nkscdn.com/smu/o.js 插入页面，不需要占位符
       **/
      insertAdSlot(id) {
        const type = this.getAttribute('__attr__type');

        switch (+type) {
          case 2:
            document.body.insertAdjacentHTML(
              'beforeend',
              `<div id="${id}" class="ad" s/div>`
            );
            const script = Attribute('smua', 'd=p&s=b&u=u3184336&w=700&h=150');
            script.src = 'https://www.nkscdn.com/smu/o.js';
            document
              .getElementById(id)
              .insertAdjacentElement('beforeend', script);
            break;
          default:
            document.body.insertAdjacentHTML(
              'beforeend',
              `<div id="${id}" class="ad" style='visibility:hidden;height:0;overflow:hidden;'>
                <x-ipeng data-id=${id}></x-ipeng>
              </div>`
            );
        }
      }

      observerDom(id) {
        const targetNode = document.getElementById(id);
        const setStyleFn = this.execLimit(this.setStyle);
        ).innerHTML = targetNode
            ? `<div class="ad-close"></div>${targetNode.innerHTML}`
            : '';
        };

        // 部分广告内部实现逻辑会导致无法渲染成功，需要特殊处理
        this.observerFn(targetNode, (mutation) => {
          if (
            mutation.addedNodes.length === 6 &&
            mutation.addedNodes[2].firstChild.nodeName === 'IFRAME'
          ) {
            setT           setDOM();
              this.bindEvent();
              setTimeout(() => {
                setDOM();
                this.bindEvent();
              }, 4000);
            }, 4000);
            return;
          }

          setStyleFn();
          setDOM();
          this.bindEvent();
        });
      }

      observerFn(target, callback) {
        if (!target) return;
        const disconnect = window.debounce((observer) => {
          observer.disconnect(observer);
        }, 6000);
        const onChange = window.debounce((mutation) => {
          callback(mutation);
        }, 1000);

        const observer = new MutationObserver(function (
          mutationsList,
          observer
        ) {
          for (let mutation of mutationsList) {
            onChange(mutation);
            disconnect(observer);
          }
        });
        observer.observe(target, { childList: true, subtree: true });
      }

      execLimit(fn, n = 1) {
        let count = 0;
        return () => {
          if (count < n) {
            fn.call(this);
            count += 1;
          }
        };
      }

      bindEvent(content) {
        const closeEle = this.shadowRoot.querySelector('.ad-close');
        closeEle &&
          closeEle.addEventListener('click', () => {
            closeEle.parentNode.style.display = 'none';
          });
      }

      setAttr(content) {
        const feed = this.getAttribute('__attr__feed');
        feed &&
          this.shadowRoot
            .querySelector('.ad-content')
            .setAttribute('data-feed', feed);
        const oType = this.getAttribute('__attr__type');
        oType &&
          this.shadowRoot
            .querySelector('.ad-content')
            .setAttribute('data-type', oType);
      }

      get __edit__() {
        return true;
      }
    }
  );
</script>
