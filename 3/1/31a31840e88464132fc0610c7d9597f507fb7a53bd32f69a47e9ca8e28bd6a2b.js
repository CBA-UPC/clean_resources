!function(){var CookieUtil={getItem:function(sKey){return sKey&&this.hasItem(sKey)?unescape(document.cookie.replace(new RegExp("(?:^|.*;\\s*)"+escape(sKey).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*"),"$1")):null},setItem:function(sKey,sValue,vEnd,sPath,sDomain,bSecure){if(sKey&&!/^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)){var sExpires="";if(vEnd)switch(vEnd.constructor){case Number:sExpires=vEnd===1/0?"; expires=Tue, 19 Jan 2038 03:14:07 GMT":"; max-age="+vEnd;break;case String:sExpires="; expires="+vEnd;break;case Date:sExpires="; expires="+vEnd.toGMTString()}document.cookie=escape(sKey)+"="+escape(sValue)+sExpires+(sDomain?"; domain="+sDomain:"")+(sPath?"; path="+sPath:"")+(bSecure?"; secure":"")}},removeItem:function(sKey,sPath){sKey&&this.hasItem(sKey)&&(document.cookie=escape(sKey)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"+(sPath?"; path="+sPath:""))},hasItem:function(sKey){return new RegExp("(?:^|;\\s*)"+escape(sKey).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(document.cookie)},keys:function(){for(var aKeys=document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g,"").split(/\s*(?:\=[^;]*)?;\s*/),nIdx=0;nIdx<aKeys.length;nIdx++)aKeys[nIdx]=unescape(aKeys[nIdx]);return aKeys}};function request(requestData,hashId){var xhr=new(window.XDomainRequest?XDomainRequest:XMLHttpRequest);xhr.onload=function(event){var expires;200===xhr.status&&0==JSON.parse(xhr.responseText).result&&(expires=+new Date+86400,CookieUtil.setItem("NAZSSYNC",hashId,expires,"/","auone.jp"))},xhr.open("POST","https://nazs.socdm.com/api/v2/sync"),xhr.setRequestHeader("Content-Type","application/json"),xhr.send(JSON.stringify(requestData))}function appendIframeContainer(){var synced=CookieUtil.getItem("NAZSSYNC"),nazsContainer=CookieUtil.getItem("CCAANCH");synced&&synced==nazsContainer||((nazsContainer=document.createElement("iframe")).src="https://sf.nazs.socdm.com/tg/nazs-container.html",nazsContainer.style.cssText="width: 0px; height: 0px; display: none;",document.body.appendChild(nazsContainer))}function isInIframe(win){return win!==window.top}window.addEventListener("message",function(event){try{if(!/\.socdm\.com/.test(event.origin))return;var soc=JSON.parse(event.data).soc,hashId=CookieUtil.getItem("CCAANCH");if(!soc||!hashId)return;var JSONdata={applitype:3,hashedid:hashId,adid:soc},ref=function(){{if(function(){if(!isInIframe(window))return!1;var windows=function(){var currentWindow,array=[];try{currentWindow=window;for(var i=0;i<20&&currentWindow.parent&&isInIframe(currentWindow)&&(array.push(currentWindow),currentWindow.parent!==window.top);i+=1)currentWindow=window.parent}catch(error){}return array}();try{for(var i=0,winLen=windows.length;i<winLen;i+=1){var parentWin=windows[i].parent;if(parentWin)if(!function(win){var html=null;try{html=win.document.body.innerHTML}catch(err){}return null!==html}(parentWin))return!0}}catch(error){}return!1}())return encodeURIComponent(document.referrer);if(0===location.href.indexOf("http"))return encodeURIComponent(location.href)}return""}();""!==ref&&(JSONdata.ref=ref),new Promise(function(resolve,reject){window.nazsUach&&resolve(),navigator.userAgentData||reject(new Error("UserAgentClientHint is not available."));var timerId=setTimeout(function(){reject(new Error("getUach is timeout."))},80);try{navigator.userAgentData.getHighEntropyValues(["platform","platformVersion","architecture","model","fullVersionList"]).then(function(uaData){clearTimeout(timerId),window.nazsUach=encodeURIComponent(JSON.stringify(uaData)),resolve()}).catch(function(e){clearTimeout(timerId),reject(new Error("UserAgentClientHint is not available."))})}catch(e){clearTimeout(timerId),reject(new Error("UserAgentClientHint is not available."))}}).then(function(){JSONdata.uach=window.nazsUach,request(JSONdata,hashId)}).catch(function(error){request(JSONdata,hashId),console.log(error)})}catch(e){console.log&&console.log(e)}}),"loading"==document.readyState?document.addEventListener("DOMContentLoaded",appendIframeContainer()):appendIframeContainer()}();mplateHTML = '<div class="st2guide-response js-id-' + index + '"><div class="st2guide-responseArea">' + _responseCardHTML + '</div></div>';

        _createdResponseHTML += _templateHTML;
      };


    };

    var _GuideSteps = function _GuideSteps() {
      var $enquete = $('.st2guide-enquete');
      var $enqueteResponse = $('.st2enquete-response');
      var $responseThanks = $enqueteResponse.find('.st2enquete-response-01');
      var $responseSorry = $enqueteResponse.find('.st2enquete-response-02');

      $(document).on('click', '.st2guide-btn', function () {
        var target = $(this).data('target');
        var levelAry = target.split('-').splice(3);
        var levelNum = levelAry.length;
        var id = $(this).data('id');

        $(this).toggleClass('-active');
        $(this).siblings().removeClass('-active');

        if ($(this).hasClass('-active')) {
          _history_of_selectedID.unshift(id);

          $('.' + target).addClass('-open').siblings().removeClass('-open');

          if ($('.' + target).hasClass('st2guide-response')) {
            _clickCount(id, 'result');
            $('.st2guide-steps').removeClass('-open');
          } else {
            _clickCount(id, 'choose');
            $('.st2guide-response').removeClass('-open');
          }
        } else {
          _history_of_selectedID.shift();

          $('.' + target).removeClass('-open');
        }

        if (levelNum === 1) {
          if (!$(this).closest('.st2guide-btns').find('.st2guide-btn').hasClass('-active')) {
            closeGuides();
          }

          $(this).closest('.st2guide-steps').siblings().find('.st2guide-btn').removeClass('-active');

        } else if (levelNum === 2) {
          if (!$(this).closest('.st2guide-btns').find('.st2guide-btn').hasClass('-active')) {
            closeGuides();
          }

          $('.js-id-1-' + levelAry[0]).addClass('-open');
          $('.st2guide-steps[data-level="3"]').find('.st2guide-btn').removeClass('-active');
          $('.st2guide-steps[data-level="4"]').find('.st2guide-btn').removeClass('-active');

        } else if (levelNum === 3) {
          if (!$(this).closest('.st2guide-btns').find('.st2guide-btn').hasClass('-active')) {
            closeGuides();
          }

          $('.js-id-1-' + levelAry[0]).addClass('-open');
          $('.js-id-1-' + levelAry[0] + '-' + levelAry[1]).addClass('-open');
          $('.st2guide-steps[data-level="4"]').find('.st2guide-btn').removeClass('-active');

        } else if (levelNum === 4) {
          if (!$(this).closest('.st2guide-btns').find('.st2guide-btn').hasClass('-active')) {
            closeGuides();
          }

          $('.js-id-1-' + levelAry[0]).addClass('-open');
          $('.js-id-1-' + levelAry[0] + '-' + levelAry[1]).addClass('-open');
          $('.js-id-1-' + levelAry[0] + '-' + levelAry[1] + '-' + levelAry[2]).addClass('-open');
        }

        if ($('.st2guide-response').hasClass('-open')) {
          $enquete.addClass('-open');
        } else {
          $enquete.removeClass('-open');
        }

        $enqueteResponse.add($responseThanks).add($responseSorry).removeClass('-open');

        if ($(this).hasClass('-active')) {
          _scrollFrontStep(target);
        }
        function closeGuides() {
          $('.st2guide-steps').removeClass('-open');
          $('.st2guide-response').removeClass('-open');
        }
      });

      var _enqueteResponse = function () {
        $enquete.find('.st2guide-enqueteBtn').on('click', function () {
          var _flg = $(this).data('enquete');
          event.preventDefault();

          $enquete.removeClass('-open');
          $enqueteResponse.addClass('-open');

          if (_flg === 'yes') {
            _clickCount(_history_of_selectedID[0], 'yes');

            $responseThanks.addClass('-open');
          } else {
            _clickCount(_history_of_selectedID[0], 'no');
            _setEnqueteLinkParam(_history_of_selectedID[0], 'no');

            $responseSorry.addClass('-open');
            _scrollFrontStep('st2enquete-response-02');
          }
        });
      }();

      var _otherLinkResponse = function () {
        $(document).on('click', '.st2guide-otherLink a', function (event) {
          event.preventDefault();

          _clickCount($(this).data('otherid'), 'other');
          _setEnqueteLinkParam($(this).data('otherid'), 'other');

          $(this).closest('.st2guide-steps').find('.st2guide-btn').removeClass('-active');
          $('.st2guide-response').removeClass('-open');
          $enquete.removeClass('-open');
          $enqueteResponse.addClass('-open');
          $responseThanks.removeClass('-open');
          $responseSorry.addClass('-open');
          _scrollFrontStep('st2enquete-response-02');
        });
      }();

      var _scrollFrontStep = function _scrollFrontStep(className) {
        var windowHeight = $(window).height();
        var documentHeight = $(document).height();
        var $targetElement = $('.' + className);
        var targetHeight = $targetElement.height();
        var footerHeight = $('footer').height();
        var scrollPoint = $targetElement.offset().top;
        scrollPoint = scrollPoint - 45;
        /* if (targetHeight + footerHeight > windowHeight - footerHeight) {
          scrollPoint = scrollPoint - 45;
        } else {
          scrollPoint = documentHeight - windowHeight;
        } */

        setTimeout(function () {
          $('html,body').animate({ scrollTop: scrollPoint }, 650, 'easeOutQuad');
        }, 100);
      };
    };

    var _AdjustCards = function _AdjustCards() {
      var elem = '';
      for (var i = -1; ++i < 10;) {
        elem += '<li class="st2adjustCards"></li>';
      }
      $('.st2top10-cards').append(elem);
    };

    var _Top10accordion = function _Top10accordion() {
      var clickFlg = true;
      $('.st2card').on('click', function () {
        var target = $(this).data('target');

        $('.st2card').not(this).removeClass('-active');
        $('.st2top10-detail').not('#' + target).hide(0);

        if (clickFlg) {
          clickFlg = false;
          $(this).toggleClass('-active');
          $('#' + target).toggleClass('-active');
          $('#' + target).slideToggle(300, function () { }).promise().done(function () {
            clickFlg = true;
          });
        } else {
          return false;
        }
      });
    };

    var _findHash = function _findHash() {
      var hashParameter = $(location).attr('hash');
      
      if (hashParameter === '#other') {
        $('.st2guide-steps.js-id-1 ul li').eq(7).addClass('-active');
        $('.st2guide-steps.js-id-1-8').addClass('-open');
        var scrollPoint = $('.js-id-1-8').offset().top;
        scrollPoint = scrollPoint - 45;
        setTimeout(function () {
          $('html,body').animate({ scrollTop: scrollPoint }, 650, 'easeOutQuad');
        }, 100);
      }
    };

    return {
      init: _init
    };
  }();

  __AU_SUPPORT__.Top.init();
})(jQuery);
