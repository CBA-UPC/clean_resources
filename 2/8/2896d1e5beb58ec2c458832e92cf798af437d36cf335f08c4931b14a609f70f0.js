try{document.getElementById('PX-Live-Sex-Tab-2').xxx/ai/r.php?url=https%3A%2F%2Fgo.xlivrdr.com%2Fsmartpop%2F81a02132b9f162d161eddd5e7f8f0ab3424f422113eee20ba7bff6c260d78360%21c%2CuserId%3Daa8853810fc8fbe7d15c51ecf5c69b35161e854f7b7a9a800e701f4920b92580%26sourceId%3Dtab_crazyporn" target="_blank" rel="noopener nofollow" class="live_sex"><svg class="svg-icon"> <use xlink:href="#icon-camera"></use> </svg>Live Sex</a>';}catch(e){};ams = {
        hasReturn: '0',
        urlReturn: [
          '/ai/s/s/im.php?index=1&ss=FK-Video-Slider&rc=1&session_id=66fbd70b5ef8903c81d170d1a8803dfd&capped=300&spot_disabled=0&referrer_check=1&referrer_enabled=0&referrer_url=https%3A%2F%2F4kporn.xxx%2Fvideos%2F736556%2Fsurprise-under-her-home-underwear-unique-lingerie-for-anal-plugs%2F&referrer_site=',
          '/ai/s/s/im.php?index=2&ss=FK-Video-Slider&rc=1&session_id=66fbd70b5ef8903c81d170d1a8803dfd&capped=300&spot_disabled=0&referrer_check=1&referrer_enabled=0&referrer_url=https%3A%2F%2F4kporn.xxx%2Fvideos%2F736556%2Fsurprise-under-her-home-underwear-unique-lingerie-for-anal-plugs%2F&referrer_site=',
          '/ai/s/s/im.php?index=3&ss=FK-Video-Slider&rc=1&session_id=66fbd70b5ef8903c81d170d1a8803dfd&capped=300&spot_disabled=0&referrer_check=1&referrer_enabled=0&referrer_url=https%3A%2F%2F4kporn.xxx%2Fvideos%2F736556%2Fsurprise-under-her-home-underwear-unique-lingerie-for-anal-plugs%2F&referrer_site='
        ],
        hideAdAfterReturnError: false
      };VR_PARAMS_IM_VR.VR_URL_VR = 'https://go.xlirdr.com/easy?campaignId=fabf45529c7535087122c592c575177aaa3944ee2f5aa778c63856becdb72b9e&userId=ab45e846de0288eded2ab611aff3632f1a0081e93b5e4972450a9d81e0936f2e&sourceId=slider_vast_fk';
VR_PARAMS_IM_VR.VR_PLAYER_SETTINGS_VR = JSON.parse('{"ajax_timeout":8000,"creative_load_timeout":10000,"max_num_redirects":4, "debug": false}');
/**
 * IM модуль визуального отображения
 *
 * @package Adman System
 * @author  DSerov <dserov@gmail.com>
 * @version 0.0.2
 */

(function () {
  window.AdmanIM = function () {
  };
  AdmanIM.prototype = {
    makeElFromString: function (string) {
      let div = document.createElement('div');
      div.innerHTML = string.trim();
      return div.firstChild
    },
    processPlaceholders: function (toReplace, content) {
      for (let placeholder in toReplace) {
        if (!toReplace.hasOwnProperty(placeholder)) {
          continue
        }
        let regExTemp = new RegExp('{{' + placeholder + '}}', 'g');
        content = content.replace(regExTemp, toReplace[placeholder])
      }
      return content
    },
    makeStyleSheetEl: function (css, close_color, border_width, border_color) {
      let el = document.createElement("style");
      let replacements = {
        'randomId': this.randomId,
        'close_color': close_color,
        'encode_close_color': encodeURIComponent(close_color),
        'border_width': border_width,
        'border_color': border_color,
      };
      el.innerHTML = this.processPlaceholders(replacements, css);
      return el
    },
    makeDomElFromTemplate: function (template, data_in_wrapper) {
      let replacements = {
        'randomId': this.randomId,
        'data_in_wrapper': data_in_wrapper,
      };
      return this.makeElFromString(this.processPlaceholders(replacements, template))
    },
    addIgnoreClassesforOtherSpot: function () {
      let self = this;

      function addClasses() {
        //--- добавим класс игнора попандером
        try {
          if (typeof is_desktop === 'undefined' || !is_desktop) {
            let ignore_class = VR_PARAMS_VR.VR_POPUNDER_MOBILE_NON_CLASS_VR.split(' ').filter(function (item) {
              return item.length > 0
            })[0];
            self.mainDiv.classList.add(ignore_class);
          } else {
            let ignore_class = VR_PARAMS_VR.VR_POPUNDER_DESKTOP_NON_CLASS_VR.split(' ').filter(function (item) {
              return item.length > 0
            })[0];
            self.mainDiv.classList.add(ignore_class);
          }
        } catch (e) {
        }

        //--- добавим класс игнора постишелом
        try {
          let ignore_class = VR_PARAMS_POSTSTT_VR.VR_PARAM_POSTSTT_IGNORE_CLASS_NAME_VR.split(' ').filter(function (item) {
            return item.length > 0
          })[0];
          self.mainDiv.classList.add(ignore_class);
        } catch (e) {
        }

        //--- добавим класс игнора интерстишелом
        try {
          let ignore_class = VR_PARAMS_INTT_VR.VR_PARAM_INTT_IGNORE_CLASS_NAME_VR.split(' ').filter(function (item) {
            return item.length > 0
          })[0];
          self.mainDiv.classList.add(ignore_class);
        } catch (e) {
        }
      }

      window.addEventListener('load', () => {
        addClasses();
      });
    },
    constructor: AdmanIM,
    randomId: null,
    imCss: `#{{randomId}}{box-sizing:content-box;position:fixed;z-index:2147483647;bottom:0;background:#000;outline:0;border:{{border_width}}px solid {{border_color}};visibility:hidden;transition:right 1s ease-in-out .1s}#{{randomId}}__close_container{color:{{close_color}};padding:4px;right:0;position:absolute;z-index:2;cursor:pointer;background:#000000a1;display:flex;align-items:center;transition:opacity .3s ease-in-out .1s;visibility:hidden;opacity:0}#{{randomId}}__close_text{font-size:16px;white-space:pre;}#{{randomId}}__close_x{color:{{close_color}};font-size:0;line-height:0;width:17px;height:17px;margin-left:4px;fill:{{close_color}}}#{{randomId}}__wrapper{overflow:hidden;height:100%;display:flex;justify-content:center;align-items:center}`,
    imMediaCss: function (im_size) {
      return `@media (orientation: landscape) {
                #${this.randomId} {
                  width:` + im_size.h.width + (im_size.h.width_type ? 'vw' : 'px') + `;
                  height:` + im_size.h.height + (im_size.h.height_type ? 'vh' : 'px') + `;
                }
              }

              @media (orientation: portrait) {
                #${this.randomId} {
                  width:` + im_size.v.width + (im_size.v.width_type ? 'vw' : 'px') + `;
                  height:` + im_size.v.height + (im_size.v.height_type ? 'vh' : 'px') + `;
                }
              }`;
    },
    imTemplate: '<div style="margin-left: 100vw;" id="{{randomId}}"><div id="{{randomId}}__close_container"> <div id="{{randomId}}__close_text"></div><svg id="{{randomId}}__close_x" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/><path d="M0 0h24v24H0z" fill="none"/></svg></div><div id="{{randomId}}__wrapper">{{data_in_wrapper}}</div></div>',
    currentScriptEl: document.currentScript,
    device: null,
    mainDiv: null,
    timeToImComing: 1, // seconds столько времени занимает анимация "выезда" баннера
    videoAspectRatio: 16 / 9, // default aspect ratio
    addImToDom: function (css, html) {
      this.currentScriptEl.insertAdjacentElement('afterend', css);
      css.insertAdjacentElement('afterend', html);
    },
    startVast: function () {
      /**
 * @package Adman System
 * @author  Fred Melnichuk <fredeveloper@gmail.com>
 * @author  Sergey Gorban <serg.ck.ua@gmail.com>
 * @author  DSerov <dserov@gmail.com>
 * @version 0.2.10
 */

(function(ssimInstance) {
  // разметка
  let style = document.createElement('style');
  style.innerText = `#${ssimInstance.randomId}_mute{margin:0;opacity:.5;background-color:#000;transition:.4s linear;display:flex;justify-content:center;align-items:center;border-radius:50%;position:absolute;right:0;bottom:0;width:40px;height:40px;cursor:pointer}#${ssimInstance.randomId}_mute:hover{opacity:1;background-color:#333}#${ssimInstance.randomId}_mute>svg{display:block;width:50%;height:50%;opacity:.7;transition-property:opacity;transition-duration:.4s;transition-timing-function:ease-in}#${ssimInstance.randomId}_replay{position:absolute;display:flex;justify-content:center;align-items:center;left:50%;top:50%;transform:translate(-50%,-50%);border-radius:50%;width:100px;height:100px;opacity:0.5;transition:.4s linear;background-color:#000;cursor:pointer}#${ssimInstance.randomId}_replay>svg{width:50%;transition:.4s linear;}#${ssimInstance.randomId}_replay:hover{background-color:#333;opacity:1}#${ssimInstance.randomId} .hidden{display:none!important}`;
  document.getElementById(ssimInstance.randomId + '__wrapper').insertAdjacentElement('beforeend', style);

  document.getElementById(ssimInstance.randomId + '__wrapper').insertAdjacentHTML('beforeend', `<div class="rmp-container" id="im_${ssimInstance.randomId}_player" style="height:100%;width:100%;"> <div class="rmp-content"> <video class="rmp-video" muted playsinline></video> </div> </div>` +
    `<div id="${ssimInstance.randomId}_replay" class="hidden" tabindex="0" role="button" aria-label="replay button">` +
    '<svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#fff" d="M256.455 8c66.269.119 126.437 26.233 170.859 68.685l35.715-35.715C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.75c-30.864-28.899-70.801-44.907-113.23-45.273-92.398-.798-170.283 73.977-169.484 169.442C88.764 348.009 162.184 424 256 424c41.127 0 79.997-14.678 110.629-41.556 4.743-4.161 11.906-3.908 16.368.553l39.662 39.662c4.872 4.872 4.631 12.815-.482 17.433C378.202 479.813 319.926 504 256 504 119.034 504 8.001 392.967 8 256.002 7.999 119.193 119.646 7.755 256.455 8z"></path></svg>' +
    '</div>' +
    `<div id="${ssimInstance.randomId}_mute" aria-label="mute button">` +
    `<svg id="${ssimInstance.randomId}_mute_on" class="hidden" aria-hidden="true" focusable="false" data-icon="volume-up" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#fff" d="M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zm233.32-51.08c-11.17-7.33-26.18-4.24-33.51 6.95-7.34 11.17-4.22 26.18 6.95 33.51 66.27 43.49 105.82 116.6 105.82 195.58 0 78.98-39.55 152.09-105.82 195.58-11.17 7.32-14.29 22.34-6.95 33.5 7.04 10.71 21.93 14.56 33.51 6.95C528.27 439.58 576 351.33 576 256S528.27 72.43 448.35 19.97zM480 256c0-63.53-32.06-121.94-85.77-156.24-11.19-7.14-26.03-3.82-33.12 7.46s-3.78 26.21 7.41 33.36C408.27 165.97 432 209.11 432 256s-23.73 90.03-63.48 115.42c-11.19 7.14-14.5 22.07-7.41 33.36 6.51 10.36 21.12 15.14 33.12 7.46C447.94 377.94 480 319.54 480 256zm-141.77-76.87c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 228.28 336 241.63 336 256c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.86z"></path></svg>` +
    `<svg id="${ssimInstance.randomId}_mute_off" class="hidden" aria-hidden="true" focusable="false" data-icon="volume-mute" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#fff" d="M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zM461.64 256l45.64-45.64c6.3-6.3 6.3-16.52 0-22.82l-22.82-22.82c-6.3-6.3-16.52-6.3-22.82 0L416 210.36l-45.64-45.64c-6.3-6.3-16.52-6.3-22.82 0l-22.82 22.82c-6.3 6.3-6.3 16.52 0 22.82L370.36 256l-45.63 45.63c-6.3 6.3-6.3 16.52 0 22.82l22.82 22.82c6.3 6.3 16.52 6.3 22.82 0L416 301.64l45.64 45.64c6.3 6.3 16.52 6.3 22.82 0l22.82-22.82c6.3-6.3 6.3-16.52 0-22.82L461.64 256z"></path></svg>` +
    `</div>`);

  const playerEl = document.getElementById('im_' + ssimInstance.randomId + '_player');
  let adPlayedSrc = '';
  let isVastSuccess = false;
  let rmpVast;
  let companionClickTrackingUrls = [];
  const muteButton = document.getElementById(ssimInstance.randomId + "_mute");
  const muteOn = document.getElementById(ssimInstance.randomId + "_mute_on");
  const muteOff = document.getElementById(ssimInstance.randomId + "_mute_off");
  const replayButton = document.getElementById(ssimInstance.randomId + "_replay");

  let functionTryCountOnError = {
    allow: true,
    maximumTryCount: 2,
    timeout: 1000,
    currentCountIndex: 0
  };

  let functionReturns = {
    allow: true,
    onErrors: [303,403,900,401],
    currentReturnIndex: 0
  };

  let debug_lastErrorCode = 0;

  let attachVast = function() {
    ssimInstance.mainDiv.addEventListener('im.close', function () {
      setTimeout(function () {
        try {
          rmpVast.pause();
        } catch (e) {}
      }, 900);
    });

    let params = {
      forceUseContentPlayerForAds: true,
      ajaxWithCredentials: false,
      autoplay: false,
      ajaxTimeout: 12000, // def = 8000
      creativeLoadTimeout: 15000, // def = 10000
      enableVpaid: false,
    };

    params.ajaxTimeout = VR_PARAMS_IM_VR.VR_PLAYER_SETTINGS_VR.ajax_timeout;
    params.creativeLoadTimeout = VR_PARAMS_IM_VR.VR_PLAYER_SETTINGS_VR.creative_load_timeout;
    params.maxNumRedirects = VR_PARAMS_IM_VR.VR_PLAYER_SETTINGS_VR.max_num_redirects;

    rmpVast = new RmpVast(playerEl.id, params);
    rmpVast.setVolume(1);

    rmpVast.on("adinitialplayrequestsucceeded", function() {
      // при успешной загрузке рекламы - покажем ИМ
      isVastSuccess = true;
      rmpVast.pause();

      // рекламная ссылка из vast
      const url = rmpVast.getClickThroughUrl();
      updateClickHref(url);

      // ссылку трекинга клика получим и сохраним
      rmpVast.trackingTags.forEach(function(tag) {
        if (tag.event === 'clickthrough') {
          companionClickTrackingUrls.push(tag.url);
        }
      });

      //
      let loadDuration = (Date.now() - VR_PARAMS_IM_VR.startTimestamp) / 1000;
      VR_PARAMS_IM_VR.VR_PARAM_IM_DELAY_SHOW_BANNER_VR = Math.max(0, +VR_PARAMS_IM_VR.VR_PARAM_IM_DELAY_SHOW_BANNER_VR - loadDuration);
      setTimeout(function () {
        try {
          ssimInstance.mainDiv.dispatchEvent(new CustomEvent('im.show'));
        } catch (e) {}
        rmpVast.play();
      }, VR_PARAMS_IM_VR.VR_PARAM_IM_DELAY_SHOW_BANNER_VR * 1000);
    });

    rmpVast.on("adloaded", function() {
      //--- удалим кнопки для скипа рекламы
      let elements = playerEl.getElementsByClassName("rmp-ad-container-skip");
      while (elements.length > 0) elements[0].remove();

      //--- удалим кнопку для мобилы
      elements = playerEl.getElementsByClassName("rmp-ad-click-ui-mobile");
      while (elements.length > 0) elements[0].remove();

      //--- реакция на клик по плееру - открыть окно и закрыть ИМ
      let rmpContentEl = playerEl.querySelector('.rmp-content');
      if (rmpContentEl) {
        rmpContentEl.removeEventListener('click', clickAdHandler, true);
        rmpContentEl.addEventListener('click', clickAdHandler, true);
      }

      // получим соотношение сторон видео - нужно для подгонки размеров рамки
      ssimInstance.mainDiv.dispatchEvent(new CustomEvent('im.video_ready', {detail: {videoAspectRatio: getVideoAspectRatio()}}));
    });

    rmpVast.on("addestroyed", handlePlayerError);

    rmpVast.on("aderror", function(e) {

      try {
        playerEl.getElementsByClassName('rmp-content-replay')[0].classList.add('hidden');
      } catch (e) {}

      //--- запомним ошибку
      debug_lastErrorCode = rmpVast.getAdVastErrorCode();
    });

    rmpVast.on("adstarted", function() {
      //--- запоминаем url рекламы, для будущего повтора
      adPlayedSrc = rmpVast.getContentPlayer().src;
    });

    rmpVast.loadAds(VR_PARAMS_IM_VR.VR_URL_VR);

    //--- добавим replay icon
    addReplayBehavior();

    //--- добавим sound on/off icon
    addSoundIconBehavior();
  };

  let handlePlayerError = function() {

    //--- при 401 ошибке - увеличить время между попытками с одной секунды до двух.
    if (debug_lastErrorCode == 401)
      functionTryCountOnError.timeout = functionTryCountOnError.timeout * 2;

    //--- при 400 ошибке делаем только откликивание и все (если еще не были задействованы возвраты)
    if (debug_lastErrorCode == 400 && functionReturns.currentReturnIndex == 0)
    {
      functionTryCountOnError.allow = false;
      functionReturns.allow = false;

      //--- откликиваем последний клик
      try {
        if (VR_PARAMS_IM_VR.adParams.urlReturn[functionReturns.currentReturnIndex].length > 0)
        {
          fetch(VR_PARAMS_IM_VR.adParams.urlReturn[functionReturns.currentReturnIndex].replace('index=','uon=1&index='));
        }
      } catch(e){}
    }

    try {
      if (isVastSuccess)
      {
        if (VR_PARAMS_IM_VR.VR_PARAM_IM_HIDE_AFTER_VIDEO_FINISHED_PLAYING_VR) {
          try {
            ssimInstance.mainDiv.dispatchEvent(new CustomEvent('im.close'));
          } catch (e) {}
        } else {
          if (VR_PARAMS_IM_VR.VR_PARAM_IM_AUTOREPLAY_ENABLE_VR) {
            replayButton.dispatchEvent(new CustomEvent('click'));
          } else {
            replayButton.classList.remove('hidden');
          }
        }
      }
      else
      {
        //--- пробуем повторно подгрузить рекламу
        if (functionTryCountOnError.currentCountIndex < functionTryCountOnError.maximumTryCount && functionTryCountOnError.allow)
        {
          setTimeout(function() {
            rmpVast.loadAds(VR_PARAMS_IM_VR.VR_URL_VR);
          }, functionTryCountOnError.timeout);

          functionTryCountOnError.currentCountIndex++;
        }
        //--- задействуем возврат
        else
        {
          try {
            try {
              if (functionReturns.allow && VR_PARAMS_IM_VR.adParams.hasReturn == 1 && VR_PARAMS_IM_VR.adParams.urlReturn[functionReturns.currentReturnIndex].length)
              {
                //--- проверяем ошибку, разрешено ли при ней возвраты + если цепочка возвратов уже запущена, значит продолжать при любых ошибках нужно
                if (functionReturns.currentReturnIndex > 0 || functionReturns.onErrors.includes(debug_lastErrorCode))
                {
                  processReturnUrl(VR_PARAMS_IM_VR.adParams.urlReturn[functionReturns.currentReturnIndex]);
                  functionReturns.currentReturnIndex++;
                }
              }
            } catch(e){
              try {
                replayButton.classList.add('hidden');

                if (VR_PARAMS_IM_VR.adParams.hideAdAfterReturnError)
                {
                  //--- закрываем плеер, если нет рекламы
                  {
                    rmpVast.pause();
                    try {
                      ssimInstance.mainDiv.dispatchEvent(new CustomEvent('im.close'));
                    } catch (e) {}
                  }
                }
              } catch(e){}
            }
          } catch (e) {}
        }
      }
    } catch (e) {}
  };

  let processReturnUrl = function (returnUrl) {
    const controller = new AbortController();
    const timeout = 5000;

    // Set up a timeout
    const timeoutId = setTimeout(function () {
      controller.abort(); // Abort the fetch request
    }, timeout);

    fetch(returnUrl, {signal: controller.signal})
      .then(function (response) {
        return response.json()
      })
      .then(function (result) {
        clearTimeout(timeoutId);
        if (result.is_url) {
          rmpVast.loadAds(result.data);
        } else {
          if (result.is_our_function) {
            // our code mode
            delete VR_PARAMS_IM_VR.VR_URL_VR;
            VR_PARAMS_IM_VR.VR_DATA_VR = result.data;

            let wrapper = document.getElementById(ssimInstance.randomId + "__wrapper");
            while (wrapper.firstChild) {
              wrapper.removeChild(wrapper.firstChild);
            }

            ssimInstance.initAd();
          } else {
            // broker code mode
            (im && im.counter) ? im.counter.markCurrentPage() : 0;
            postscribe(window.document.body, result.data, {done: saveImHits});
          }
        }
      })
      .catch(function (reason) {
        clearTimeout(timeoutId);
        debug_lastErrorCode = 900;
        handlePlayerError();
      });
  };

  let getVideoAspectRatio = function () {
    let isInvalidRatio = function (value) {
      return isNaN(value) || Infinity === value || 0 === value;
    };

    let aspectRatio = rmpVast.contentPlayer.videoWidth / rmpVast.contentPlayer.videoHeight;
    if (isInvalidRatio(aspectRatio)) {
      aspectRatio = rmpVast.initialWidth / rmpVast.initialHeight;
    }
    if (isInvalidRatio(aspectRatio)) {
      aspectRatio = 16 / 9; // fallback
    }

    return aspectRatio;
  };

  let updateClickHref = function (url) {
    let clickId = ssimInstance.randomId + '_click', clickEl;
    if (!(clickEl = document.getElementById(clickId))) {
      //--- ссылку для перехода добавим
      clickEl = document.createElement('a');
      clickEl.setAttribute('target', '_blank');
      clickEl.className = 'hidden';
      clickEl.id = clickId;
      playerEl.insertAdjacentElement('beforeend', clickEl);
    }
    clickEl.href = url;
  };

  let clickAdHandler = function (e) {
    e.stopPropagation();

    try {
      companionClickTrackingUrls.forEach(pingTrackingUrl);
    } catch (e) {}

    try {
      const clickEl = document.getElementById(ssimInstance.randomId + '_click');
      clickEl.click();
    } catch (e) {}

    if (VR_PARAMS_IM_VR.VR_PARAM_IM_HIDE_AD_AFTER_CLICK_VR) {
      rmpVast.pause();
      //--- при клике по рекламе, отправим событие для закрытия баннера
      try {
        ssimInstance.mainDiv.dispatchEvent(new CustomEvent('im.close'));
      } catch (e) {}
    } else {
      // заглушим его
      rmpVast.setMute(true);
      updateMuteButtons();
    }
  };

  let pingTrackingUrl = function(url) {
    // we expect an image format for the tracker (generally a 1px GIF/PNG/JPG) or JavaScript as
    // those are the most common format in the industry
    // other format may produce errors and the related tracker may not be requested properly
    if (url.url !== undefined) {
      url = url.url;
    }

    const jsPattern = /\.js$/i;
    if (jsPattern.test(url)) {
      const script = document.createElement('script');
      script.src = url;
      try {
        document.head.appendChild(script);
      } catch (error) {
        document.body.appendChild(script);
      }
    } else {
      new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.timeout = rmpVast.params.ajaxTimeout;
        xhr.withCredentials = false;
        xhr.onloadend = function () {
          if (typeof xhr.status === 'number' && xhr.status >= 200 && xhr.status < 300) {
            resolve('XMLHttpRequest request succeeded');
          } else {
            reject('XMLHttpRequest wrong status code: ' + xhr.status);
          }
        };
        xhr.ontimeout = function () {
          reject('XMLHttpRequest timeout');
        };
        xhr.send(null);
      });
    }
  };

  // кнопки mute on|off
  let updateMuteButtons = function () {
    muteOn.classList.toggle('hidden', rmpVast.getMute());
    muteOff.classList.toggle('hidden', !rmpVast.getMute());
  };

  let addSoundIconBehavior = function() {
    muteButton.addEventListener('click', function (event) {
      event.preventDefault();
      event.stopPropagation();
      rmpVast.setMute(!rmpVast.getMute());
      updateMuteButtons()
    });

    updateMuteButtons();
  };

  let addReplayBehavior = function() {
    replayButton.addEventListener('click', function(e) {
      e.stopPropagation();

      rmpVast.getContentPlayer().src = adPlayedSrc;
      replayButton.classList.add('hidden');
      rmpVast.play();

      let onEndVideoListener = function(){
        rmpVast.getContentPlayer().src = '';

        rmpVast.getContentPlayer().removeEventListener("ended", onEndVideoListener);
        if (VR_PARAMS_IM_VR.VR_PARAM_IM_AUTOREPLAY_ENABLE_VR) {
          replayButton.dispatchEvent(new CustomEvent('click'));
        } else {
          replayButton.classList.remove('hidden');
        }
      };

      rmpVast.getContentPlayer().addEventListener("ended", onEndVideoListener);
    });
  };

  // для отладки нужна не минифицированная версия
  const jsUrl = ADMAN_INFO.script_add_folder + 's/s/vast/player' + (VR_PARAMS_IM_VR.VR_PLAYER_SETTINGS_VR.debug ? '' : '.min') + '.js';
  $script(jsUrl, attachVast);
})(this);
;
    },
    consolePrepend: function () {
      const CLASSIC_LOG_PATTERN = /(edge|xbox|msie|trident)/i;
      if (navigator && navigator.userAgent && CLASSIC_LOG_PATTERN.test(navigator.userAgent)) {
        // browsers with no console log styling capabilities
        return 'IM:';
      }
      return '%cim%c';
    },
    consoleStyle: 'color: white; background-color: #00ACC1; padding:1px 3px; border-radius: 3px; margin-right: 7px',
    enableDebug: false,
    debug: function (message) {
      if (!this.enableDebug) {
        return;
      }
      console.log(
        `${this.consolePrepend()}`,
        this.consoleStyle,
        '',
        message
      );
    },
    setupResizeHandler: function () {
      let self = this;
      let sizeHandler = function () {
        if (getIsDesktop()) {
          removeWidthHeightHandler();
        }

        //--- если динамическая ширина ИМ
        if (VR_PARAMS_IM_VR.getWidthDynamicParameter()) {
          setDynamicWidth();
        } else {
          setDynamicHeight();
        }
      };

      let setDynamicWidth = function () {
        let newWidth = self.mainDiv.clientHeight * self.videoAspectRatio;
        let newHeight = self.mainDiv.clientHeight;
        const viewportWidth = Math.min(document.documentElement.clientWidth || 100000, window.innerWidth || 100000);
        if (newWidth > viewportWidth) {
          newWidth = viewportWidth;
          newHeight = newWidth / self.videoAspectRatio;
        }

        if (self.mainDiv.style.visibility == 'hidden') {
          self.mainDiv.style.right = (-1 * Math.round(newWidth + 2 * +VR_PARAMS_IM_VR.VR_PARAM_IM_BORDER_WIDTH_VR)) + 'px';
        }

        self.mainDiv.style.height = Math.round(newHeight) + 'px';
        self.mainDiv.style.width = Math.round(newWidth) + 'px';
      };

      let setDynamicHeight = function () {
        let oldHeight = self.mainDiv.clientHeight;
        let newWidth = self.mainDiv.clientWidth;
        let newHeight = newWidth / self.videoAspectRatio;
        if (newHeight >= oldHeight) {
          self.debug('newHeight >= oldHeight');
          return;
        }
        const viewportHeight = Math.min(document.documentElement.clientHeight || 100000, window.innerHeight || 100000);
        if (newHeight > viewportHeight) {
          newHeight = viewportHeight;
          newWidth = newHeight * self.videoAspectRatio;
        }
        self.mainDiv.style.height = Math.round(newHeight) + 'px';
        self.mainDiv.style.width = Math.round(newWidth) + 'px';
      };

      let removeWidthHeightHandler = function () {
        self.mainDiv.style.removeProperty('width');
        self.mainDiv.style.removeProperty('height');
      };

      window.addEventListener('orientationchange', removeWidthHeightHandler);
      window.addEventListener('resize', debounce(sizeHandler, 300));
      sizeHandler();
    },
    createAdContainer: function () {
      this.randomId = VR_PARAMS_IM_VR.VR_UNIQUE_ID_VR;
      let self = this;
      this.device = (getIsDesktop() ? 'desktop' : 'mobile');
      let imMediaCss = self.imMediaCss(VR_PARAMS_IM_VR.VR_PARAM_IM_IM_SIZE_VR[this.device]);
      let cssEl = self.makeStyleSheetEl(self.imCss + imMediaCss, VR_PARAMS_IM_VR.VR_PARAM_IM_CLOSE_COLOR_VR, VR_PARAMS_IM_VR.VR_PARAM_IM_BORDER_WIDTH_VR, VR_PARAMS_IM_VR.VR_PARAM_IM_BORDER_COLOR_VR);
      let mainEl = self.makeDomElFromTemplate(self.imTemplate, '');
      self.addImToDom(cssEl, mainEl);
      this.mainDiv = document.getElementById(self.randomId);

      // добавим игнор другими спотами
      this.addIgnoreClassesforOtherSpot();

      // прячем рамку и рассчитываем её размеры
      let container_width = this.mainDiv.getBoundingClientRect().width;
      this.mainDiv.style.right = (-1 * container_width) + 'px';
      this.mainDiv.style.visibility = 'hidden';
      VR_PARAMS_IM_VR.startTimestamp = Date.now();

      let closeContainer = document.getElementById(self.randomId + "__close_container");

      this.mainDiv.addEventListener('im.show', function () {
        self.debug('event im.show');
        try {
          //--- Count Real Impressions
          saveImHits();
        } catch (e) {
        }

        // отметим страничку, как отстреляную
        try {
          im.counter.markCurrentPage();
        } catch (e) {
        }

//        self.mainDiv.style.transition = 'right ' + self.timeToImComing + 's ease-in-out .1s';
        self.mainDiv.style.visibility = 'visible';
        self.mainDiv.style.right = '0';

        // появление кнопки закрытия, мы знаем, что время появления кнопки всегда больше времени появления баннера
        setTimeout(function () {
          closeContainer.style.visibility = 'visible';
          closeContainer.style.opacity = '1';
        }, (+VR_PARAMS_IM_VR.VR_PARAM_IM_DELAY_SHOW_CLOSE_BUTTON_VR - +VR_PARAMS_IM_VR.VR_PARAM_IM_DELAY_SHOW_BANNER_VR) * 1000);
      });

      this.mainDiv.addEventListener('im.close', function () {
        self.mainDiv.style.right = -1 * self.mainDiv.clientWidth + 'px';
        setTimeout(function () {
          // удаление баннера
          self.mainDiv.remove();
        }, self.timeToImComing * 1000);
      });

      // крестик не всегда есть
      if (VR_PARAMS_IM_VR.VR_PARAM_IM_IS_X_BUTTON_VR != 1) {
        try {
          let closeX = document.getElementById(self.randomId + "__close_x");
          closeX.remove();
        } catch (e) {
        }
      }

      // событие закрытие баннера по щелчку закрывашки
      closeContainer.addEventListener('click', function (event) {
        event.stopPropagation();
        setAdmanCookie('__ctr_' + im.counter.identy + '_closed', VR_PARAMS_IM_VR.VR_PARAM_IM_CLOSED_FOR_ALL_CLICKS_VR, {
          expires: im.counter.capp_seconds,
          path: '/',
          domain: location.hostname
        });
        self.mainDiv.dispatchEvent(new CustomEvent('im.close'));
      });

      // заголовок кнопки закрытия
      let closeText = document.getElementById(self.randomId + "__close_text");
      closeText.innerHTML = VR_PARAMS_IM_VR.VR_PARAM_IM_CLOSE_TEXT_VR;

      // inside/outside frame
      closeContainer.style.top = (VR_PARAMS_IM_VR.VR_PARAM_IM_SHOW_CLOSE_INSIDE_FRAME_VR && VR_PARAMS_IM_VR.VR_PARAM_IM_SHOW_CLOSE_INSIDE_FRAME_VR == 'inside') ? '0' : '-' + (closeContainer.getBoundingClientRect().height + +VR_PARAMS_IM_VR.VR_PARAM_IM_BORDER_WIDTH_VR) + 'px';
      closeContainer.style.right = (VR_PARAMS_IM_VR.VR_PARAM_IM_SHOW_CLOSE_INSIDE_FRAME_VR && VR_PARAMS_IM_VR.VR_PARAM_IM_SHOW_CLOSE_INSIDE_FRAME_VR == 'inside') ? '0' : '-' + +VR_PARAMS_IM_VR.VR_PARAM_IM_BORDER_WIDTH_VR + 'px';

      return this;
    },
    initAd: function () {
      let self = this;
      self.adVideoMode = VR_PARAMS_IM_VR.VR_URL_VR !== undefined; // видео-режим
      self.adCodeMode = !self.adVideoMode; // режим отображения разметки

      // сразу стартуем появление не video-баннера или если настройка "не показывать пока реклама не загружена"
      if (self.adCodeMode || VR_PARAMS_IM_VR.VR_PARAM_IM_DONT_SHOW_UNTIL_AD_LOADED_VR === 0) {
        let loadDuration = (Date.now() - VR_PARAMS_IM_VR.startTimestamp) / 1000;
        VR_PARAMS_IM_VR.VR_PARAM_IM_DELAY_SHOW_BANNER_VR = Math.max(0, +VR_PARAMS_IM_VR.VR_PARAM_IM_DELAY_SHOW_BANNER_VR - loadDuration);
        setTimeout(function () {
          self.mainDiv.dispatchEvent(new CustomEvent('im.show'));
        }, VR_PARAMS_IM_VR.VR_PARAM_IM_DELAY_SHOW_BANNER_VR * 1000 + 50); // 50 - это добавочное время, необходимо, чтобы баннер выплыл справа, а не сразу появился на своем месте
      }

      if (this.adCodeMode) {
        let wrapper = document.getElementById(self.randomId + "__wrapper");
        postscribe(wrapper, VR_PARAMS_IM_VR.VR_DATA_VR);
      } else {
        // с видео чуть интереснее...
        // fix size of container
        self.mainDiv.style.height = self.mainDiv.clientHeight + 'px';
        self.mainDiv.style.width = self.mainDiv.clientWidth + 'px';

        this.mainDiv.addEventListener('im.video_ready', function (event) {
          try {
            self.videoAspectRatio = event.detail.videoAspectRatio;
            self.debug('video_ready, aspectRatio = ' + self.videoAspectRatio);
          } catch (e) {
          }
          self.setupResizeHandler();
        });
        self.startVast();
      }
    },
  };
  new AdmanIM().createAdContainer().initAd();
})();
</li>
<li class="cat-item">
<a href="//uk.escortsaffair.com/wales"><span>Wales</span></a>
</li>
</ul>
</li>
</ul></li>
<li class="cat-item"><a href="//us.escortsaffair.com">United States</a>
<ul class="children" style="display: none">
<li class="cat-item">
<span>Alabama</span>
<ul class="children">
<li class="cat-item">
<a href="//us.escortsaffair.com/auburn"><span>Auburn</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/birmingham"><span>Birmingham</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/dothan"><span>Dothan</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/gadsden"><span>Gadsden</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/huntsville"><span>Huntsville</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/mobile"><span>Mobile</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/montgomery"><span>Montgomery</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/muscleshoals"><span>Muscle Shoals</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/tuscaloosa"><span>Tuscaloosa</span></a>
</li>
</ul>
</li>
<li class="cat-item">
<span>Alaska</span>
<ul class="children">
<li class="cat-item">
<a href="//us.escortsaffair.com/anchorage"><span>Anchorage</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/fairbanks"><span>Fairbanks</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/juneau"><span>Juneau</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/kenaipeninsula"><span>Kenai Peninsula</span></a>
</li>
</ul>
</li>
<li class="cat-item">
<span>Arizona</span>
<ul class="children">
<li class="cat-item">
<a href="//us.escortsaffair.com/flagstaff-sedona"><span>Flagstaff / Sedona</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/mohavecounty"><span>Mohave County</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/phoenix"><span>Phoenix</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/prescott"><span>Prescott</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/showlow"><span>Show Low</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/sierravista"><span>Sierra Vista</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/tucson"><span>Tucson</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/yuma"><span>Yuma</span></a>
</li>
</ul>
</li>
<li class="cat-item">
<span>Arkansas</span>
<ul class="children">
<li class="cat-item">
<a href="//us.escortsaffair.com/fortsmith"><span>Fort Smith</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/jonesboro"><span>Jonesboro</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/littlerock"><span>Little Rock</span></a>
</li>
</ul>
</li>
<li class="cat-item">
<span>California</span>
<ul class="children">
<li class="cat-item">
<a href="//us.escortsaffair.com/bakersfield"><span>Bakersfield</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/chico"><span>Chico</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/fresno"><span>Fresno</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/humboldtcounty"><span>Humboldt County</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/imperialcounty"><span>Imperial County</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/inlandempire"><span>Inland Empire</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/longbeach"><span>Long Beach</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/losangeles"><span>Los Angeles</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/mendocino"><span>Mendocino</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/merced"><span>Merced</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/modesto"><span>Modesto</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/monterey"><span>Monterey</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/oakland-eastbay"><span>Oakland / East Bay</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/orangecounty"><span>Orange County</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/palmsprings"><span>Palm Springs</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/palmdale-lancaster"><span>Palmdale / Lancaster</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/redding"><span>Redding</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/sacramento"><span>Sacramento</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/sandiego"><span>San Diego</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/sanfernandovalley"><span>San Fernando Valley</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/sanfrancisco"><span>San Francisco</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/sangabrielvalley"><span>San Gabriel Valley</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/sanjose"><span>San Jose</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/sanluisobispo"><span>San Luis Obispo</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/sanmateo"><span>San Mateo</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/santabarbara"><span>Santa Barbara</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/santacruz"><span>Santa Cruz</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/santamaria"><span>Santa Maria</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/santarosa-northbay"><span>Santa Rosa</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/siskiyou"><span>Siskiyou</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/stockton"><span>Stockton</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/susanville"><span>Susanville</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/ventura"><span>Ventura</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/visalia"><span>Visalia</span></a>
</li>
</ul>
</li>
<li class="cat-item">
<span>Colorado</span>
<ul class="children">
<li class="cat-item">
<a href="//us.escortsaffair.com/boulder"><span>Boulder</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/coloradosprings"><span>Colorado Springs</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/denver"><span>Denver</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/fortcollins"><span>Fort Collins</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/grandjunction"><span>Grand Junction</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/pueblo"><span>Pueblo</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/rockies"><span>Rockies</span></a>
</li>
</ul>
</li>
<li class="cat-item">
<span>Connecticut</span>
<ul class="children">
<li class="cat-item">
<a href="//us.escortsaffair.com/bridgeport"><span>Bridgeport</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/hartford"><span>Hartford</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/newhaven"><span>New Haven</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/norwich"><span>Norwich</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/torrington"><span>Torrington</span></a>
</li>
</ul>
</li>
<li class="cat-item">
<span>Delaware</span>
<ul class="children">
<li class="cat-item">
<a href="//us.escortsaffair.com/delaware"><span>Delaware</span></a>
</li>
</ul>
</li>
<li class="cat-item">
<span>District of Columbia</span>
<ul class="children">
<li class="cat-item">
<a href="//us.escortsaffair.com/bowie"><span>Bowie</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/centreville"><span>Centreville</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/washingtondc"><span>Washington DC</span></a>
</li>
</ul>
</li>
<li class="cat-item">
<span>Florida</span>
<ul class="children">
<li class="cat-item">
<a href="//us.escortsaffair.com/daytona"><span>Daytona</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/fortlauderdale"><span>Fort Lauderdale</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/fortmyers"><span>Fort Myers</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/gainesville"><span>Gainesville</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/jacksonville"><span>Jacksonville</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/keys"><span>Keys</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/lakeland"><span>Lakeland</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/miami"><span>Miami</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/ocala"><span>Ocala</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/okaloosa"><span>Okaloosa</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/orlando"><span>Orlando</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/palmbay"><span>Palm Bay</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/panamacity"><span>Panama City</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/pensacola"><span>Pensacola</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/sarasota-bradenton"><span>Sarasota / Bradenton</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/spacecoast"><span>Space Coast</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/staugustine"><span>St. Augustine</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/tallahassee"><span>Tallahassee</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/tampa"><span>Tampa</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/treasurecoast"><span>Treasure Coast</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/westpalmbeach"><span>West Palm Beach</span></a>
</li>
</ul>
</li>
<li class="cat-item">
<span>Georgia</span>
<ul class="children">
<li class="cat-item">
<a href="//us.escortsaffair.com/athens"><span>Athens</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/atlanta"><span>Atlanta</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/augusta"><span>Augusta</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/brunswick"><span>Brunswick</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/macon"><span>Macon</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/rome"><span>Rome</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/savannah"><span>Savannah</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/statesboro"><span>Statesboro</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/valdosta"><span>Valdosta</span></a>
</li>
</ul>
</li>
<li class="cat-item">
<span>Hawaii</span>
<ul class="children">
<li class="cat-item">
<a href="//us.escortsaffair.com/bigisland"><span>Big Island</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/honolulu"><span>Honolulu</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/kauai"><span>Kauai</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/maui"><span>Maui</span></a>
</li>
</ul>
</li>
<li class="cat-item">
<span>Idaho</span>
<ul class="children">
<li class="cat-item">
<a href="//us.escortsaffair.com/boise"><span>Boise</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/idahofalls"><span>Idaho Falls</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/lewiston"><span>Lewiston</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/twinfalls"><span>Twin Falls</span></a>
</li>
</ul>
</li>
<li class="cat-item">
<span>Illinois</span>
<ul class="children">
<li class="cat-item">
<a href="//us.escortsaffair.com/carbondale"><span>Carbondale</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/chambana"><span>Chambana</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/chicago"><span>Chicago</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/decatur"><span>Decatur</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/galesburg"><span>Galesburg</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/lasallecounty"><span>La Salle County</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/mattoon"><span>Mattoon</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/peoria"><span>Peoria</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/rockford"><span>Rockford</span></a>
</li>
</ul>
</li>
<li class="cat-item">
<span>Indiana</span>
<ul class="children">
<li class="cat-item">
<a href="//us.escortsaffair.com/bloomington"><span>Bloomington</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/evansville"><span>Evansville</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/ftwayne"><span>Ft Wayne</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/indianapolis"><span>Indianapolis</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/kokomo"><span>Kokomo</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/muncie"><span>Muncie</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/southbend"><span>South Bend</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/terrehaute"><span>Terre Haute</span></a>
</li>
</ul>
</li>
<li class="cat-item">
<span>Iowa</span>
<ul class="children">
<li class="cat-item">
<a href="//us.escortsaffair.com/ames"><span>Ames</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/cedarrapids"><span>Cedar Rapids</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/davenport"><span>Davenport</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/desmoines"><span>Des moines</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/dubuque"><span>Dubuque</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/fortdodge"><span>Fort Dodge</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/iowacity"><span>Iowa City</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/masoncity"><span>Mason City</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/quadcities"><span>Quad Cities</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/siouxcity"><span>Sioux City</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/waterloo"><span>Waterloo</span></a>
</li>
</ul>
</li>
<li class="cat-item">
<span>Kansas</span>
<ul class="children">
<li class="cat-item">
<a href="//us.escortsaffair.com/lawrence"><span>Lawrence</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/salina"><span>Salina</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/topeka"><span>Topeka</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/wichita"><span>Wichita</span></a>
</li>
</ul>
</li>
<li class="cat-item">
<span>Kentucky</span>
<ul class="children">
<li class="cat-item">
<a href="//us.escortsaffair.com/bowlinggreen"><span>Bowling Green</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/lexington"><span>Lexington</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/louisville"><span>Louisville</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/middlesboro"><span>Middlesboro</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/owensboro"><span>Owensboro</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/paducah"><span>Paducah</span></a>
</li>
</ul>
</li>
<li class="cat-item">
<span>Louisiana</span>
<ul class="children">
<li class="cat-item">
<a href="//us.escortsaffair.com/alexandria"><span>Alexandria</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/batonrouge"><span>Baton Rouge</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/houma"><span>Houma</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/lafayette"><span>Lafayette</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/lakecharles"><span>Lake Charles</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/neworleans"><span>New Orleans</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/shreveport"><span>Shreveport</span></a>
</li>
</ul>
</li>
<li class="cat-item">
<span>Maine</span>
<ul class="children">
<li class="cat-item">
<a href="//us.escortsaffair.com/maine"><span>Maine</span></a>
</li>
</ul>
</li>
<li class="cat-item">
<span>Maryland</span>
<ul class="children">
<li class="cat-item">
<a href="//us.escortsaffair.com/annapolis"><span>Annapolis</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/baltimore"><span>Baltimore</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/cumberlandvalley"><span>Cumberland Valley</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/frederick"><span>Frederick</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/hagerstown"><span>Hagerstown</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/salisbury"><span>Salisbury</span></a>
</li>
</ul>
</li>
<li class="cat-item">
<span>Massachusetts</span>
<ul class="children">
<li class="cat-item">
<a href="//us.escortsaffair.com/boston"><span>Boston</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/brockton"><span>Brockton</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/capecod"><span>Cape Cod</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/lowell"><span>Lowell</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/newbedford"><span>New Bedford</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/worcester"><span>Worcester</span></a>
</li>
</ul>
</li>
<li class="cat-item">
<span>Michigan</span>
<ul class="children">
<li class="cat-item">
<a href="//us.escortsaffair.com/annarbor"><span>Ann Arbor</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/battlecreek"><span>Battle Creek</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/detroit"><span>Detroit</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/flint"><span>Flint</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/grandrapids"><span>Grand Rapids</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/holland"><span>Holland</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/kalamazoo"><span>Kalamazoo</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/lansing"><span>Lansing</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/marquette"><span>Marquette</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/midland"><span>Midland</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/monroe"><span>Monroe</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/muskegon"><span>Muskegon</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/niles"><span>Niles</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/porthuron"><span>Port Huron</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/saginaw"><span>Saginaw</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/traversecity"><span>Traverse City</span></a>
</li>
</ul>
</li>
<li class="cat-item">
<span>Minnesota</span>
<ul class="children">
<li class="cat-item">
<a href="//us.escortsaffair.com/bemidji"><span>Bemidji</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/brainerd"><span>Brainerd</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/duluth"><span>Duluth</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/mankato"><span>Mankato</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/minneapolis-stpaul"><span>Minneapolis / St. Paul</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/stcloud"><span>St. Cloud</span></a>
</li>
</ul>
</li>
<li class="cat-item">
<span>Mississippi</span>
<ul class="children">
<li class="cat-item">
<a href="//us.escortsaffair.com/biloxi"><span>Biloxi</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/hattiesburg"><span>Hattiesburg</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/jackson"><span>Jackson</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/meridian"><span>Meridian</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/natchez"><span>Natchez</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/southaven"><span>Southaven</span></a>
</li>
</ul>
</li>
<li class="cat-item">
<span>Missouri</span>
<ul class="children">
<li class="cat-item">
<a href="//us.escortsaffair.com/capegirardeau"><span>Cape Girardeau</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/jeffcity"><span>Jeff City</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/joplin"><span>Joplin</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/kansascity"><span>Kansas City</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/kirksville"><span>Kirksville</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/lakeoftheozarks"><span>Lake Of The Ozarks</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/springfield"><span>Springfield</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/stjoseph"><span>St Joseph</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/stlouis"><span>St. Louis</span></a>
</li>
</ul>
</li>
<li class="cat-item">
<span>Montana</span>
<ul class="children">
<li class="cat-item">
<a href="//us.escortsaffair.com/billings"><span>Billings</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/bozeman"><span>Bozeman</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/butte"><span>Butte</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/greatfalls"><span>Great Falls</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/helena"><span>Helena</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/kalispell"><span>Kalispell</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/missoula"><span>Missoula</span></a>
</li>
</ul>
</li>
<li class="cat-item">
<span>Nebraska</span>
<ul class="children">
<li class="cat-item">
<a href="//us.escortsaffair.com/grandisland"><span>Grand Island</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/lincoln"><span>Lincoln</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/northplatte"><span>North Platte</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/omaha"><span>Omaha</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/scottsbluff"><span>Scottsbluff</span></a>
</li>
</ul>
</li>
<li class="cat-item">
<span>Nevada</span>
<ul class="children">
<li class="cat-item">
<a href="//us.escortsaffair.com/elko"><span>Elko</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/lasvegas"><span>Las Vegas</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/reno"><span>Reno</span></a>
</li>
</ul>
</li>
<li class="cat-item">
<span>New Hampshire</span>
<ul class="children">
<li class="cat-item">
<a href="//us.escortsaffair.com/newhampshire"><span>New Hampshire</span></a>
</li>
</ul>
</li>
<li class="cat-item">
<span>New Jersey</span>
<ul class="children">
<li class="cat-item">
<a href="//us.escortsaffair.com/camden"><span>Camden</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/jerseyshore"><span>Jersey Shore</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/newjersey"><span>New Jersey</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/newbrunswick"><span>New brunswick</span></a>
</li>
</ul>
</li>
<li class="cat-item">
<span>New Mexico</span>
<ul class="children">
<li class="cat-item">
<a href="//us.escortsaffair.com/albuquerque"><span>Albuquerque</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/clovis-portales"><span>Clovis / Portales</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/farmington"><span>Farmington</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/lascruces"><span>Las Cruces</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/roswell-carlsbad"><span>Roswell / Carlsbad</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/santafe-taos"><span>Santa Fe / Taos</span></a>
</li>
</ul>
</li>
<li class="cat-item">
<span>New York</span>
<ul class="children">
<li class="cat-item">
<a href="//us.escortsaffair.com/albany"><span>Albany</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/binghamton"><span>Binghamton</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/bronx"><span>Bronx</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/brooklyn"><span>Brooklyn</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/buffalo"><span>Buffalo</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/catskills"><span>Catskills</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/chautauqua"><span>Chautauqua</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/elmira"><span>Elmira</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/fairfield"><span>Fairfield</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/fingerlakes"><span>Finger Lakes</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/glensfalls"><span>Glens Falls</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/hudsonvalley"><span>Hudson Valley</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/ithaca"><span>Ithaca</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/longisland"><span>Long Island</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/newyork-manhattan"><span>New York / Manhattan</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/oneonta"><span>Oneonta</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/plattsburgh"><span>Plattsburgh</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/potsdam"><span>Potsdam</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/queens"><span>Queens</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/rochester"><span>Rochester</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/statenisland"><span>Staten Island</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/syracuse"><span>Syracuse</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/twintiers"><span>Twin Tiers</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/utica"><span>Utica</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/watertown"><span>Watertown</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/westchester"><span>Westchester</span></a>
</li>
</ul>
</li>
<li class="cat-item">
<span>North Carolina</span>
<ul class="children">
<li class="cat-item">
<a href="//us.escortsaffair.com/asheville"><span>Asheville</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/boone"><span>Boone</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/charlotte"><span>Charlotte</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/fayetteville"><span>Fayetteville</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/greensboro"><span>Greensboro</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/hickory"><span>Hickory</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/highpoint"><span>High Point</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/outerbanks"><span>Outer Banks</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/raleigh-durham"><span>Raleigh / Durham</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/rockymount"><span>Rocky Mount</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/wilmington"><span>Wilmington</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/winston-salem"><span>Winston-Salem</span></a>
</li>
</ul>
</li>
<li class="cat-item">
<span>North Dakota</span>
<ul class="children">
<li class="cat-item">
<a href="//us.escortsaffair.com/bismarck"><span>Bismarck</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/fargo"><span>Fargo</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/grandforks"><span>Grand Forks</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/minot"><span>Minot</span></a>
</li>
</ul>
</li>
<li class="cat-item">
<span>Ohio</span>
<ul class="children">
<li class="cat-item">
<a href="//us.escortsaffair.com/akron"><span>Akron</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/ashtabula"><span>Ashtabula</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/chillicothe"><span>Chillicothe</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/cincinnati"><span>Cincinnati</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/cleveland"><span>Cleveland</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/columbus"><span>Columbus</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/dayton"><span>Dayton</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/hutington-ashland"><span>Hutington / Ashland</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/lima"><span>Lima</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/mansfield"><span>Mansfield</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/sandusky"><span>Sandusky</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/toledo"><span>Toledo</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/tuscarawascounty"><span>Tuscarawas County</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/youngstown"><span>Youngstown</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/zanesville"><span>Zanesville</span></a>
</li>
</ul>
</li>
<li class="cat-item">
<span>Oklahoma</span>
<ul class="children">
<li class="cat-item">
<a href="//us.escortsaffair.com/lawton"><span>Lawton</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/norman"><span>Norman</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/oklahomacity"><span>Oklahoma City</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/stillwater"><span>Stillwater</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/tulsa"><span>Tulsa</span></a>
</li>
</ul>
</li>
<li class="cat-item">
<span>Oregon</span>
<ul class="children">
<li class="cat-item">
<a href="//us.escortsaffair.com/bend"><span>Bend</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/corvallis"><span>Corvallis</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/eugene"><span>Eugene</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/hermiston"><span>Hermiston</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/klamathfalls"><span>Klamath Falls</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/medford"><span>Medford</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/oregoncoast"><span>Oregon Coast</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/portland"><span>Portland</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/roseburg"><span>Roseburg</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/salem"><span>Salem</span></a>
</li>
</ul>
</li>
<li class="cat-item">
<span>Pennsylvania</span>
<ul class="children">
<li class="cat-item">
<a href="//us.escortsaffair.com/allentown"><span>Allentown</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/altoona"><span>Altoona</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/chambersburg"><span>Chambersburg</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/erie"><span>Erie</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/harrisburg"><span>Harrisburg</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/lancaster"><span>Lancaster</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/meadville"><span>Meadville</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/pennstate"><span>Penn State</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/philadelphia"><span>Philadelphia</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/pittsburgh"><span>Pittsburgh</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/poconos"><span>Poconos</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/reading"><span>Reading</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/scranton"><span>Scranton</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/williamsport"><span>Williamsport</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/york"><span>York</span></a>
</li>
</ul>
</li>
<li class="cat-item">
<span>Rhode Island</span>
<ul class="children">
<li class="cat-item">
<a href="//us.escortsaffair.com/providence"><span>Providence</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/warwick"><span>Warwick</span></a>
</li>
</ul>
</li>
<li class="cat-item">
<span>South Carolina</span>
<ul class="children">
<li class="cat-item">
<a href="//us.escortsaffair.com/charleston"><span>Charleston</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/columbia"><span>Columbia</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/florence"><span>Florence</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/greenville"><span>Greenville</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/hiltonhead"><span>Hilton Head</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/myrtlebeach"><span>Myrtle Beach</span></a>
</li>
</ul>
</li>
<li class="cat-item">
<span>South Dakota</span>
<ul class="children">
<li class="cat-item">
<a href="//us.escortsaffair.com/aberdeen"><span>Aberdeen</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/pierre"><span>Pierre</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/rapidcity"><span>Rapid City</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/siouxfalls"><span>Sioux Falls</span></a>
</li>
</ul>
</li>
<li class="cat-item">
<span>Tennessee</span>
<ul class="children">
<li class="cat-item">
<a href="//us.escortsaffair.com/chattanooga"><span>Chattanooga</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/clarksville"><span>Clarksville</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/cookeville"><span>Cookeville</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/johnsoncity"><span>Johnson City</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/kingsport"><span>Kingsport</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/knoxville"><span>Knoxville</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/memphis"><span>Memphis</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/nashville"><span>Nashville</span></a>
</li>
</ul>
</li>
<li class="cat-item">
<span>Texas</span>
<ul class="children">
<li class="cat-item">
<a href="//us.escortsaffair.com/abilene"><span>Abilene</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/amarillo"><span>Amarillo</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/arlington"><span>Arlington</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/austin"><span>Austin</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/beaumont"><span>Beaumont</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/brownsville"><span>Brownsville</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/collegestation"><span>College Station</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/corpuschristi"><span>Corpus Christi</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/dallas"><span>Dallas</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/delrio"><span>Del Rio</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/denton"><span>Denton</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/elpaso"><span>El Paso</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/fortworth"><span>Fort Worth</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/galveston"><span>Galveston</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/houston"><span>Houston</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/killeen"><span>Killeen</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/laredo"><span>Laredo</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/longview"><span>Longview</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/lubbock"><span>Lubbock</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/mcallen"><span>Mcallen</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/odessa"><span>Odessa</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/sanantonio"><span>San Antonio</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/sanmarcos"><span>San Marcos</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/texarkana"><span>Texarkana</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/texoma"><span>Texoma</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/tyler"><span>Tyler</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/victoria"><span>Victoria</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/waco"><span>Waco</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/wichitafalls"><span>Wichita Falls</span></a>
</li>
</ul>
</li>
<li class="cat-item">
<span>Utah</span>
<ul class="children">
<li class="cat-item">
<a href="//us.escortsaffair.com/logan"><span>Logan</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/ogden"><span>Ogden</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/provo"><span>Provo</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/saltlakecity"><span>Salt Lake City</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/stgeorge"><span>St. George</span></a>
</li>
</ul>
</li>
<li class="cat-item">
<span>Vermont</span>
<ul class="children">
<li class="cat-item">
<a href="//us.escortsaffair.com/vermont"><span>Vermont</span></a>
</li>
</ul>
</li>
<li class="cat-item">
<span>Virginia</span>
<ul class="children">
<li class="cat-item">
<a href="//us.escortsaffair.com/bristol"><span>Bristol</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/charlottesville"><span>Charlottesville</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/chesapeake"><span>Chesapeake</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/fredericksburg"><span>Fredericksburg</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/hampton"><span>Hampton</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/harrisonburg"><span>Harrisonburg</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/lynchburg"><span>Lynchburg</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/newrivervalley"><span>New River Valley</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/newportnews"><span>Newport News</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/norfolk"><span>Norfolk</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/portsmouth"><span>Portsmouth</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/richmond"><span>Richmond</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/roanoke"><span>Roanoke</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/suffolk"><span>Suffolk</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/virginiabeach"><span>Virginia Beach</span></a>
</li>
</ul>
</li>
<li class="cat-item">
<span>Washington</span>
<ul class="children">
<li class="cat-item">
<a href="//us.escortsaffair.com/bellingham"><span>Bellingham</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/everett"><span>Everett</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/kennewick"><span>Kennewick</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/moseslake"><span>Moses Lake</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/mtvernon"><span>Mt. Vernon</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/olympia"><span>Olympia</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/pullman"><span>Pullman</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/seattle"><span>Seattle</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/spokane-coeurd-alene"><span>Spokane / Coeur D&#39;Alene</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/tacoma"><span>Tacoma</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/wenatchee"><span>Wenatchee</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/yakima"><span>Yakima</span></a>
</li>
</ul>
</li>
<li class="cat-item">
<span>West Virginia</span>
<ul class="children">
<li class="cat-item">
<a href="//us.escortsaffair.com/beckley"><span>Beckley</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/huntington"><span>Huntington</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/martinsburg"><span>Martinsburg</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/morgantown"><span>Morgantown</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/parkersburg"><span>Parkersburg</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/wheeling"><span>Wheeling</span></a>
</li>
</ul>
</li>
<li class="cat-item">
<span>Wisconsin</span>
<ul class="children">
<li class="cat-item">
<a href="//us.escortsaffair.com/appleton"><span>Appleton</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/eauclaire"><span>Eau Claire</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/greenbay"><span>Green Bay</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/janesville"><span>Janesville</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/lacrosse"><span>La Crosse</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/madison"><span>Madison</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/milwaukee"><span>Milwaukee</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/racine"><span>Racine</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/sheboygan"><span>Sheboygan</span></a>
</li>
<li class="cat-item">
<a href="//us.escortsaffair.com/wausau"><span>Wausau</span></a>
</li>
</ul>
</li>
<li class="cat-item">
<span>Wyoming</span>
<ul class="children">
<li class="cat-item">
<a href="//us.escortsaffair.com/wyoming"><span>Wyoming</span></a>
</li>
</ul>
</li>
</ul></li>
<li class="cat-item"><a href="//vn.escortsaffair.com">Vietnam</a>
<ul class="children" style="display: none">
<li class="cat-item">
<span>Vietnam</span>
<ul class="children">
<li class="cat-item">
<a href="//vn.escortsaffair.com/hanoi"><span>Hanoi</span></a>
</li>
<li class="cat-item">
<a href="//vn.escortsaffair.com/hochimihncity"><span>Ho Chi Mihn City</span></a>
</li>
<li class="cat-item">
<a href="//vn.escortsaffair.com/vamlamcity"><span>Vam Lam City</span></a>
</li>
</ul>
</li>
</ul></li>
</ul>
</div>
<section>
<div class="text-muted mx-3 mx-md-5 my-5">
<span><b>Finding the right escorts</b> <br/> <br/>Every day, people are looking for companionship. They want someone to hang out with, chill and probably spend meaningful time together. Think of it: there are many ways to get people like this — escorts. You may hit someone up on social media, emails, or websites for hangouts. And the person may feel the need during that period. <br/> <br/>Here’s where EscortsAffair comes in: Our platform has in stock photos and videos from young and good-looking individuals. We allow the display of local ads on our website. <br/> <br/>With new visitors coming in daily, this site creates space for socializing with others. It’s just like you’re hitting someone up for his or her time because you want to get familiar with each other. <br/> <br/><b>What we offer</b> <br/>It’s a whole new experience with EscortsAffair. There are no complications. It serves well whether you’re lonely or looking for someone to spend quality time with. <br/> <br/>To get the best experience, you need to know about the different code-words. Gfe (Girlfriend experience) is a clear example. “Can I get to know you?” “Let’s get comfortable.” These are terms used to communicate with escorts. <br/> <br/>Fortunately, you can benefit so much from ads posted as photos and videos on our website — numerous to be precise. <br/> <br/>The following benefits come with striking a meeting using our escort directory: <br/> <br/>No hassle <br/>Yes, you can match mature escorts using our platform. EscortsAffair displays ads in different categories. Just look at it this way: “Mr. X craves to ease his mind from work, so he decided to go online and check websites for ads.” <br/> <br/>You really don’t need to go through any complicated dealings. If the profile you visit is splendid enough that you feel like seeing the person, you can start an honest conversation and discuss your motive immediately. <br/> <br/><b>Things to have in mind</b> <br/>There are two things to have in mind when working with girls: <br/> <br/>●First, note that clients and escorts spend time together in exchange for payment — not sex or anything — just time only. <br/>●Secondly, you probably are accessing these local ads because you stay within the region. Taking the next step by clicking through all depends on you. <br/> <br/><b>Types of services</b> <br/>Escort services vary, depending on both the customers and personnel in the local ads. Keep in mind that knowing how to make your approach profoundly matters. Another thing is the agreed spot to meet. <br/> <br/>Say, you’re conversing with a female from one of the profiles. Your first motive would be getting to know each other, right? Next thing; you’re planning on meeting. This is where the services come in, and they are as follows: <br/> <br/><b>Outcall service</b> <br/>After an escort agent posts an ad, say, you clicked through to communicate with someone that attracts you. You then ask if she would like to come over. If she says yes, then you are the host, and she’s rendering an out-call service. <br/> <br/><b>Incall service</b> <br/>It’s the other way round here. Your companion may feel the need to stay in his/her location because of some reason. Hence, you have no other option than to do the visiting. It may be a bar, hotel, lounge, or amusement park. If your consort decides the location, and you have to go over to her side, it’s called an incall service. <br/> <br/><b>Specialties</b> <br/>It is essential to know how this works. Who knows what your expectations are? Maybe you need a companion just to talk things out and ease the burden in your mind. Or perhaps, you’re looking to meet new friends — local ads can help know residents around your region. <br/> <br/>If at all you want to spend quality time with your company, you need not worry. Our website helps in the following areas: <br/> <br/>●Maintaining interpersonal relationships with clients <br/>●Surfing and acquiring useful information for emergency use <br/>●Communicating with external individuals, people outside the organization. This helps us to keep a stable relationship and learn from clients’ overall experience. <br/>●Reflective communication: we stay in contact with our agents to monitor all happenings. This includes communicating through phone calls. Our supervisors also create a strong presence by keeping in touch with assigned escorts. <br/>●Developing and retaining useful knowledge: the secret behind our commitment is using what works and eliminating what doesn’t. We will continue to maintain the same approach towards an appointment. <br/> <br/><b>What are the traits to find in display ads?</b> <br/>A lot, to be precise. Here at EscortsAffair, you don’t just find random peers to match. Here are the traits to expect: <br/> <br/>●Clarity: Be sure to converse clearly with any of our assigned escorts. <br/>●Oral expression: Get a sense of feeling when receiving a response from the peered personnel. <br/>●Oral comprehension: this is one skill every escort must have — the ability to collect and interpret ideas in spoken words. <br/>●Problem sensitivity: this serves as the ability to identify issues or situations going sideways. Note that it’s not the escorts’ job to solve the problems. They only have to identify them. <br/>●Fluency: English serves as the easiest and common way of communicating. All our escorts are great speakers. <br/>●Customer experience: have in mind that you’ll be dealing with experienced companions, whose job is to make time worth spending together. <br/> <br/>Website functions <br/>This site allows agents to post photos and videos of young and mostly independent individuals looking to socialize. No doubt, people need companionship. Some go through depression; others need advice or someone for an event. This platform created spaces for different categories, depending on the type of escort you want. <br/> <br/>Conclusion <br/>EscortsAffair remains a top-notch escort directory, and it offers tons of satisfactory services. Companionship can never go sideways with us. Look in our list of local ads to select your preference. Guess what? You have hundreds of them to choose from, so choose your favorite while they are available.</span>
</div>
</section>
<footer class="footer">
<div class="modal fade bd-example-modal-lg" id="disclaimer" tabindex="-1" role="dialog" aria-labelledby="disclaimerLabel" aria-hidden="false">
<div class="modal-dialog modal-dialog-centered modal-lg" role="document">
<div class="modal-content text-left">
<div class="modal-header">
<h5 class="modal-title" id="disclaimerLabel">Disclaimer</h5>

</div>
<div class="modal-body">
<p>This website contains nudity, explicit sexual content and adult language. It should be accessed only by people who are of legal age in the physical location from where you are accessing the site. By accessing this website, you are representing to us that you are of legal age and agree to our <a href="//www.escortsaffair.com/centre/terms/terms" target="_blank">Terms &amp; Conditions</a>. Any unauthorized use of this site may violate state, federal and/or foreign law.</p>
<p>While EscortsAffair does not create, produce or edit any content listed on the advertisements, all the posted advertisements must comply with our age and content standards.</p>
<a data-toggle="collapse" class="ageReadMore" href="#ageCollapse" aria-expanded="false" aria-controls="ageCollapse">
Read more
</a>
<div class="collapse" id="ageCollapse">
<p>EscortsAffair always have been adamantly against illegal prostitution, sex trafficking, and all forms of child abuse worldwide. We only want adults that want to be here for entertainment fantasies and lawful activity. If you want to do something illegal, you are not welcome here. </p>
<p>EscortsAffair has a zero-tolerance policy toward human trafficking, prostitution, and any other illegal conduct. We cooperate with law enforcement, pursuant to appropriate process, such as a subpoena, in investigating criminal activity. Activity that violates our zero-tolerance policy may result in a referral to law enforcement. I have no intention to, and will not, use this site in violation of EscortsAffair’s policies or any federal, state, or local law, and I agree to <a href="//www.escortsaffair.com/centre/terms/report" target="_blank">report violations</a> to the appropriate authorities.</p>
<p>I also agree to <a href="//www.escortsaffair.com/centre/terms/report" target="_blank">report suspected exploitation of minors and/or human trafficking to the appropriate authorities.</a> </p>
<p>This site uses cookies. By continuing to browse the site you are agreeing to our use of cookies.</p>
</div>
<p><label><input type="checkbox" id="acceptDisclaimer"> I have read and agree to this disclaimer as well as the&nbsp;<a href="//www.escortsaffair.com/centre/terms/terms" target="_blank">Terms of Use</a>.</label></p>
<p class="d-none text-danger" id="disclaimerError">Please read and agree to this disclaimer above.</p>
</div>
<div class="modal-footer">
<button type="button" class="btn btn-secondary" onclick="declineDisclaimer()">Close</button>
<button type="button" class="btn btn-primary" onclick="acceptDisclaimer()">Continue</button>
</div>
</div>
</div>
</div>
<div class="container-fluid">
<div class="row">
<div class="col-12">
<ul class="footer-links">
<li><a href="//www.escortsaffair.com/centre/home" onclick="pickRegion();">Home</a></li>
<li><a href="//www.escortsaffair.com/centre/terms/contact">Contact</a></li>
<li><a href="//www.escortsaffair.com/centre/terms/privacy">Privacy</a></li>
<li><a href="//www.escortsaffair.com/centre/terms/terms">Terms</a></li>
<li><a href="//www.escortsaffair.com/centre/terms/report">Report Trafficking</a></li>
<li>©&nbsp;2024&nbsp;<a href="//www.escortsaffair.com/centre/home" class="homefootcls" onclick="pickRegion();">EscortsAffair.com</a></li>
</ul>
</div>
</div>
</div>
<script type="text/javascript" src="//static.escortsaffair.com/resources/js/popper.min.js"></script>
<script type="text/javascript" src="//static.escortsaffair.com/resources/js/jquery-3.3.1.min.js"></script>
<script type="text/javascript" src="//static.escortsaffair.com/resources/js/bootstrap.min.js"></script>
<script type="text/javascript" src="//static.escortsaffair.com/resources/js/common.js"></script>
<script type="text/javascript" src="//static.escortsaffair.com/resources/js/js.cookie-2.2.1.min.js"></script>
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-134926023-1"></script>
<script type="text/javascript">
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());
		
		gtag('config', 'UA-134926023-1');
	</script>
<script type="text/javascript">
	    function acceptDisclaimer(){
	      if($('#acceptDisclaimer').prop('checked')){
	    	$('#disclaimer').modal('hide');
	    	var hostname = window.location.hostname.slice(window.location.hostname.indexOf('.') + 1);	    	
	    	  
	        Cookies.set('acceptDisclaimer', true, {
	          domain : hostname,	
	          expires: 14
	        })	        
	      } else {
	        $("#disclaimerError").removeClass('d-none');
	        return false;
	      }
	    }
	
	    function declineDisclaimer(){
			window.location.href="https://www.google.com"
	    }
	
	    var agreeDisclaimer = Cookies.get('acceptDisclaimer');
	    if(!agreeDisclaimer){
	      $('#disclaimer').modal({
	        show: true,
	        backdrop: 'static'
	      })
	    }
	</script>
</footer>
<script type="text/javascript">
		var is_tax = false;
		var loc = '0';
	</script>
<script type="text/javascript" src="//static.escortsaffair.com/resources/css/home/commons.js"></script>
</body>
</html>