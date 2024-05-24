var baseUrl =  window.location.origin;
var defaultHiddenVal = '******';

document.addEventListener("DOMContentLoaded", function() {
    var lazyloadImages = document.querySelectorAll("img.lazy");    
    var lazyloadThrottleTimeout;
    
    setTimeout(() => {
        lazyload();
    }, 50);
    
    function lazyload () {
      if(lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }    
      
      lazyloadThrottleTimeout = setTimeout(function() {
          var scrollTop = window.pageYOffset;
          lazyloadImages.forEach(function(img) {
              if(img.offsetTop < (window.innerHeight + scrollTop)) {
                img.src = img.dataset.src;
                img.classList.remove('lazy');
              }
          });
          if(lazyloadImages.length == 0) { 
            document.removeEventListener("scroll", lazyload);
            window.removeEventListener("resize", lazyload);
            window.removeEventListener("orientationChange", lazyload);
          }
      }, 20);
    }
});
  

$(document).ready(function () {
    setActiveNav();

    if(typeof userBalance !== "undefined") {
        $('#user-balance').html(defaultHiddenVal);
        $('#user-point').html(defaultHiddenVal);
        $('#user-coupons').html(defaultHiddenVal);

        $('#user-balance-akun').html(defaultHiddenVal);
        $('#user-point-akun').html(defaultHiddenVal);
        $('#user-coupons-akun').html(defaultHiddenVal);
    }
    
    let url = window.location.href;
    let uriSegment = url.split('/');
    
    if (uriSegment[3] == "kategori" || uriSegment[3] == "tag") {
        setActiveCategory();
        setActiveTag();
    }

    $('.share').click(function (e) { 
        e.preventDefault();

        data = {
            'image' : $(this).attr('data-image'),
            'url' : $(this).attr('data-url'),
            'description' : $(this).attr('data-description'),
            'title' : $(this).attr('data-title'),
            'share_message' : $(this).attr('data-share-message'),
        }

        onClickShareButton(data)
    });
});

var setActiveNav = function () {
    let url = window.location.href;
    let uriSegment = url.split('/');

    // Add active nav class based on url
    $(".navbar-main .nav .nav__item.menu a").each(function () {
        currentSegment = uriSegment[3].split('?')[0];

        if(typeof currentSegment !== "undefined") {
            uriSegmentUrl = $(this).attr("href").split('/')[3];

            if (currentSegment == uriSegmentUrl) {
                $(this).parent().addClass("nav__item--active");
                $(this).find('.image-menu').addClass("active");
            }
        }

    })

    // Add the menu-open class into Home if user omit index.php from url
    if (url == '') {
        $("#nav ul li").eq(0).addClass("menu-open");
    }
};
$('.nav__item.menu').mouseenter(function () {
    $(this).find('.image-menu').addClass('active');
});

$('.nav__item.menu').mouseleave(function () {
    if ( ! $(this).hasClass('nav__item--active')) {
        $(this).find('.image-menu').removeClass('active');
    }
}).mouseleave();




var setActiveCategory = function () {
    let url = window.location.href;
    let uriSegment = url.split('/');
    let key = uriSegment[3] == 'blog' ? 5 : 4;

    // Add active nav class based on url
    $(".nav-category ul li").each(function () {
        currentSegment = uriSegment[key].split('?')[0];

        if(typeof currentSegment !== "undefined") {
            uriSegmentUrl = $(this).find('a').attr("href").split('/')[key];

            if (currentSegment == uriSegmentUrl) {
                $(this).addClass("nav__item--active");
            }
        }

    })

    // Add the menu-open class into Home if user omit index.php from url
    if (url == '') {
        $("#nav ul li").eq(0).addClass("menu-open");
    }
};

var setActiveTag = function () {
    let url = window.location.href;
    let uriSegment = url.split('/');
    let key = uriSegment[3] == 'blog' ? 5 : 4;

    // Add active nav class based on url
    $(".nav-tag li").each(function () {
        currentSegment = uriSegment[key].split('?')[0];

        if(typeof currentSegment !== "undefined") {
            uriSegmentUrl = $(this).find('a').attr("href").split('/')[key];

            if (currentSegment == uriSegmentUrl) {
                $(this).addClass("nav__item--active");
            }
        }

    })

    // Add the menu-open class into Home if user omit index.php from url
    if (url == '') {
        $("#nav ul li").eq(0).addClass("menu-open");
    }
};

function onClickShareButton(data) {
    setIconAttribute('twitter', data);
    setIconAttribute('whatsapp', data);
    setIconAttribute('facebook', data);

    $('#url_copy').val(data.url);
}

function onClickShareButtonDetail(data) {
    setIconAttributeDetail('twitter', data);
    setIconAttributeDetail('whatsapp', data);
    setIconAttributeDetail('facebook', data);

    $('#url_copy_detail').val(data.url);
}

function onClickShareButtonBlog(data) {
    setIconAttributeBlog('twitter', data);
    setIconAttributeBlog('whatsapp', data);
    setIconAttributeBlog('facebook', data);

    $('#url_copy_blog').val(data.url);
}

function setIconAttribute(icon, data) {
    if (icon == 'twitter') {
        url = 'https://twitter.com/share?text=' + encodeURI(data.title) + '%0a' + encodeURI(data.share_message) + '&url=' + data.url
    } else if (icon == 'whatsapp') {
        url = 'https://api.whatsapp.com/send?text=' + encodeURI(data.title) + '%0D%0A' + data.url + '%0D%0A %0D%0A' + encodeURI(data.share_message)
    } else {
        url = 'https://www.facebook.com/sharer/sharer.php?u=' + data.url + '&t=' + encodeURI(data.title) + '<br>' + encodeURI(data.share_message)
    }
    
    $('#' + icon + '-icon').attr('href', url);

    $('#modal-share').modal('toggle');
}

function loading() {
    $('#modal-loading').modal('toggle')
}

function loadingComplete() {
    setTimeout(() => {
        $('#modal-loading').modal('hide')
    }, 200);
}

$(document).on("keypress",".search-box__input", function(e){
    if(e.which == 13) {
        loading();
    }
});

$(document).on("click",".allobank-eye", function(e){
    e.preventDefault();

    if ($(this).hasClass('show')) {
        $(this).removeClass('show');

        $('#user-balance').html(defaultHiddenVal);
        $('#user-balance').addClass('t-hide');

        $('#user-point').html(defaultHiddenVal);
        $('#user-point').addClass('t-hide');

        $('#user-coupons').html(defaultHiddenVal);
        $('#user-coupons').addClass('t-hide');


        $('#user-balance-akun').html(defaultHiddenVal);
        $('#user-balance-akun').addClass('t-hide');

        $('#user-point-akun').html(defaultHiddenVal);
        $('#user-point-akun').addClass('t-hide');

        $('#user-coupons-akun').html(defaultHiddenVal);
        $('#user-coupons-akun').addClass('t-hide');
        

    } else {
        
        if (typeof userBalance !== "undefined") {
            $(this).addClass('show');

            if ($(this).attr('data') == 'balance') {
                $('#user-balance').removeClass('t-hide');
                loadUserInfo('#user-balance');

                $('#user-balance-akun').removeClass('t-hide');
                loadUserInfo('#user-balance-akun');
            }

            if ($(this).attr('data') == 'coupons') {
                $('#user-coupons').removeClass('t-hide');
                loadUserInfo('#user-coupons');

                $('#user-coupons-akun').removeClass('t-hide');
                loadUserInfo('#user-coupons-akun');
            }

            if ($(this).attr('data') == 'point') {
                $('#user-point').removeClass('t-hide');
                loadUserInfo('#user-point');

                $('#user-point-akun').removeClass('t-hide');
                loadUserInfo('#user-point-akun');
            }
        }
    }
});

function loadUserInfo(id) {
    $(id).html(loadingSvg());
    $(id).next('label').addClass('hidden');

    $.ajax({
        url: baseUrl + "/akun/balance",
        type: "GET",
        dataType: "json",
        success: function (response) {
            if (id == '#user-balance') { 
                $(id).html(response.data.balance);
            } else if (id == '#user-balance-akun') { 
                $(id).html(response.data.balance);
            }else if (id == '#user-point') { 
                $(id).html(response.data.points);
            }else if (id == '#user-point-akun') { 
                $(id).html(response.data.points);
            }
            else { 
                $(id).html(response.data.coupons);
            }
            
            $(id).next('label').removeClass('hidden');
        },
        error: function(jqXHR, textStatus, errorThrown) {
        }
    });
}

$(document).on("click","#close-search", function(e){
    e.preventDefault();
    let path = window.location.href.split('?')[0]

    window.location.href = path;
});

$(document).on("click",".copy-url", function(e){
    e.preventDefault();

    link_copied('copy_url');
});

$(document).on("click",".copy-url-detail", function(e){
    e.preventDefault();

    link_copied_detail('copy_url_detail');
});

$(document).on("click",".copy-url-blog", function(e){
    e.preventDefault();

    link_copied_blog('copy_url_blog');
});

$(document).on("click",".set-bookmark", function(e){
    loading();
    
    e.preventDefault();

    image         = $(this).find('img');
    eventId       = $(this).attr('data-id');
    removeDisplay = $(this).attr('remove-display');
    card          = $(this).parent().parent().parent();

    $.ajax({
        url: baseUrl + "/event/" + eventId + '/bookmark' ,
        type: "POST",
        data: {
            event_id: eventId
        },
        success: function (response) {
            if (removeDisplay) {
                card.remove();
                console.log(card.attr('class'));
            }
            
            console.log(image);

            imageSrc = image.attr('src');
            isActive = imageSrc.split("icon-save-active").length - 1;
            
            if (isActive > 0) {
                image.attr('src', imageSrc.replace('icon-save-active', 'icon-save'));
            } else {
                image.attr('src', imageSrc.replace('icon-save', 'icon-save-active'));
            }
            setTimeout(() => {
                loadingComplete();
            }, 150)
        },
        error: function(jqXHR, textStatus, errorThrown) {
            setTimeout(() => {
                loadingComplete();
            }, 150)
        }
    });
});

// LINK COPIED POPUP
function link_copied(e) {
    $("."+e).children(".show-notif").addClass("url_copied");

    copyToClipboard();
    
    setTimeout(function () {
        $(".show-notif").removeClass("url_copied");
    }, 1500);
    
    return false;
}

function link_copied_detail(e) {
    $("."+e).children(".show-notif-detail").addClass("url_copied_detail");

    copyToClipboardDetail();
    
    setTimeout(function () {
        $(".show-notif-detail").removeClass("url_copied_detail");
    }, 1500);
    
    return false;
}

function link_copied_blog(e) {
    $("."+e).children(".show-notif-blog").addClass("url_copied_blog");

    copyToClipboardBlog();
    
    setTimeout(function () {
        $(".show-notif-blog").removeClass("url_copied_blog");
    }, 1500);
    
    return false;
}


function copyToClipboard() {
    element = $('#url_copy');
    element.removeClass('hidden');
    element.select();
    document.execCommand("copy");
    console.log("ini copy link");
    element.addClass('hidden');
}

function copyToClipboardDetail() {
    element = $('#url_copy_detail');
    element.removeClass('hidden');
    element.select();
    document.execCommand("copy");
    console.log("ini copy link detail");
    element.addClass('hidden');
}

function copyToClipboardBlog(text) {
    element = $('#url_copy_blog');
    element.removeClass('hidden');
    element.select();
    document.execCommand("copy");
    console.log("ini copy link blog");
    element.addClass('hidden');
}

function loadingSvg() {
    return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: none; display: block; shape-rendering: auto;" width="30%" height="30%" viewBox="0 0 100 100" id="main-loader"  preserveAspectRatio="xMidYMid"> <g transform="rotate(0 50 50)"> <rect x="48" y="25.5" rx="2" ry="2.34" width="4" height="13" fill="#ee4023"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.875s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(45 50 50)"> <rect x="48" y="25.5" rx="2" ry="2.34" width="4" height="13" fill="#ee4023"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(90 50 50)"> <rect x="48" y="25.5" rx="2" ry="2.34" width="4" height="13" fill="#ee4023"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.625s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(135 50 50)"> <rect x="48" y="25.5" rx="2" ry="2.34" width="4" height="13" fill="#ee4023"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(180 50 50)"> <rect x="48" y="25.5" rx="2" ry="2.34" width="4" height="13" fill="#ee4023"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.375s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(225 50 50)"> <rect x="48" y="25.5" rx="2" ry="2.34" width="4" height="13" fill="#ee4023"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(270 50 50)"> <rect x="48" y="25.5" rx="2" ry="2.34" width="4" height="13" fill="#ee4023"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.125s" repeatCount="indefinite"></animate> </rect> </g><g transform="rotate(315 50 50)"> <rect x="48" y="25.5" rx="2" ry="2.34" width="4" height="13" fill="#ee4023"> <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animate> </rect> </g> </svg>';
}

$(document).ready(function(){

    // INITIALIZE DROPDOWN
    $(".dropdown-mobile").dropdown({
        overlay: true
    });
    
    // TOPIK PILIHAN SLIDER
    var scwdtb=$('#topik-pilihan').width();
    $('#rightscb').click(function() {
        event.preventDefault();
        $('#topik-pilihan').animate({
            scrollLeft: "+="+scwdtb+"px"
        }, 1000);
    });

    $('#leftscb').click(function() {
        event.preventDefault();
        $('#topik-pilihan').animate({
            scrollLeft: "-="+scwdtb+"px"
        }, 1000);
    });

    //show hide arrrow
    var scrollLeftPrev = 0;
    $('#topik-pilihan').scroll(function () {
        $('#leftscb').show().css("display", "flex");
        $('#rightscb').show().css("display", "flex");
        var $elem=$('#topik-pilihan');
        var newScrollLeft = $elem.scrollLeft(),
            width=$elem.outerWidth(),
            scrollWidth=$elem.get(0).scrollWidth;
        if (scrollWidth-newScrollLeft<=width) {
            $('#rightscb').hide();
            $('#leftscb').click(function() {
                $('#rightscb').show().css("display", "flex");
            });
        }
        if (newScrollLeft === 0) {
            $('#leftscb').hide();
            $('#rightscb').click(function() {
                $('#leftscb').show().css("display", "flex");
            });
        }
        scrollLeftPrev = newScrollLeft;
    });
    
}); (responseData.hasOwnProperty('dtkluctrackerid')) ) {
              ctx.config.trackerid = responseData.dtkluctrackerid;
            }
            if ((ctx.config.winPostDataRewriteDomain === true) && (typeof responseData === 'object') && (responseData !== null) && (responseData.hasOwnProperty('dtklucdomain')) ) {
              ctx.config.domain = responseData.dtklucdomain;
            }
            if ((ctx.config.winPostDataRewriteChannel === true) && (typeof responseData === 'object') && (responseData !== null) && (responseData.hasOwnProperty('dtklucchannel')) ) {
              ctx.config.channel = responseData.dtklucchannel;
            }
            if (ctx.vars.dataWinPostMsgIsOK === true) {
              ctx.log('messageAddListenerInit requestWinPostMsg got responseData',  responseData);
              setTimeout(function() {
                ctx.start1();
              }, 0);
            }
          }
        });
      }
      if (ctx.config.responseWinPostMsg === true) {
        window.addEventListener('message', function(event) {
          //ctx.log('messageAddListenerInit responseWinPostMsg window listener is working', null);
          var requestData = event.data;
          if ((typeof requestData === 'object') && (requestData !== null) && (requestData.hasOwnProperty('dtklucreq') === true) && (requestData.dtklucreq === 1)) {
            var responseData = ctx.config.responseWinPostData;
            responseData.dtklucuser = ctx.config.user;
            responseData.dtkluctrackerid = ctx.config.trackerid;
            responseData.dtklucdomain = ctx.config.domain;
            responseData.dtklucchannel = ctx.config.channel;
            var iframes = document.getElementsByTagName('iframe');
            ctx.log('messageAddListenerInit responseWinPostMsg iframes', iframes);
            $.each(iframes, function(idx, val) {
              try { 
                val.contentWindow.postMessage(responseData, ctx.config.responseWinPostTargetWindow);
                ctx.log('messageAddListenerInit responseWinPostMsg already sent', null);
              } catch (ex) {
                ctx.log('messageAddListenerInit responseWinPostMsg is failed!', null);
              }
            });
          }
        });
      }
    }
  };

  ctx.requestWinPostMsg = function() {
    if (ctx.config.requestWinPostMsg === true) {
      try {
        ctx.log('requestWinPostMsg is working', null);
        window.parent.postMessage(ctx.config.requestWinPostData, ctx.config.requestWinPostTargetWindow);
      } catch (ex) {
        ctx.log('requestWinPostMsg is failed!', null);
      }
      setTimeout(function() {
        if (ctx.vars.dataWinPostMsgIsOK === false) {
          ctx.log('requestWinPostMsg no-more waiting window.postMessage, get cookie now!', null);
          ctx.vars.haltedRequestWinPostMsg = true;
          ctx.start1();
        }
      }, ctx.config.waitingResponseWinPostMsg);
    }
  };

  ctx.getCounter = function() {
    if (ctx.config.enableGetCounter === true) {
      var getCounterUrl = null;
      var ajaxType = null;
      var ajaxContentType = null;
      var ajaxData = null;
      var playingData = '';
      if (ctx.vars.playIsSent === true) {
        playingData = '&event=playing';
      }
      var firstPlayData = '';
      if ((ctx.vars.firstStart === true) && (ctx.vars.playIsOccur === true) && (ctx.vars.playIsSent === false)) {
        ctx.vars.playIsSent = true;
        firstPlayData = '&event=play';
      }
      var firstStartData = '';
      if (ctx.vars.firstStart === false) {
        ctx.vars.firstStart = true;
        firstStartData = '&event=start';
      }
      if (ctx.config.readOnly === true) {
        ajaxType = 'GET';
        ajaxContentType = 'application/x-www-form-urlencoded';
        ajaxData = ctx.vars.getCounterData + firstStartData + firstPlayData + playingData;
        getCounterUrl = ctx.config.getCounterReadOnlyUrl;
      } else {
        ajaxType = 'POST';
        ajaxContentType = 'application/x-www-form-urlencoded';
        ajaxData = ctx.vars.getCounterData + firstStartData + firstPlayData + playingData;
        getCounterUrl = ctx.config.getCounterUrl;
      }
      ctx.log('getCounter is working', getCounterUrl);
      ctx.log('getCounter ajaxData', ajaxData);
      $.ajaxSetup( { async: ctx.config.ajaxSetupASync , cache: ctx.config.ajaxSetupCache } );
      $.ajax({
        type: ajaxType,
        url: getCounterUrl,
        data: ajaxData,
        contentType: ajaxContentType,
        success: function(successMsg) {
          ctx.log('getCounter success-event', successMsg);
          if (typeof ctx.config.successCallback === 'function') {
            ctx.config.successCallback(successMsg);
          }
        },
        error: function(errorMsg) {
          ctx.log('getCounter error-event', errorMsg);
          if (typeof ctx.config.errorCallback === 'function') {
            ctx.config.errorCallback(errorMsg);
          }
        }
      });
    }
  };
  
  ctx.stop = function() {
    if (ctx.vars.timeIntervalHandler !== null) {
      ctx.log('stop is working', null);
      clearInterval(ctx.vars.timeIntervalHandler);
      ctx.vars.timeIntervalHandler = null;
    }
  };

  ctx.pause = function() {
    ctx.log('pause is working', null);
    ctx.config.enableGetCounter = false;
  };

  ctx.resume = function() {
    ctx.log('resume is working', null);
    ctx.config.enableGetCounter = true;
  };

  ctx.play = function() {
    ctx.log('play is working', null);
    ctx.vars.playIsOccur = true;
  };

})(detikLiveUserCounter);

// for using it, please call these lines :
// detikLiveUserCounter.setConfig({ .. });
// detikLiveUserCounter.start();

    height: 18px;
    border: 2px solid #ccc;
    border-radius: 4px;
    flex-grow: 0;
    flex-shrink: 0;
    display: block;
    position: relative;
}
.payment-form__checkbox .icon-check {
    font-size: 18px;
    font-weight: bold;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: var(--main-color);
    opacity: 0;
    transition: all 0.2s ease;
}
.payment-form__radiobox {
    width: 18px;
    height: 18px;
    border: 2px solid #ccc;
    border-radius: 10px;
    flex-grow: 0;
    flex-shrink: 0;
    display: block;
    position: relative;
}
.payment-form__radiobox .checkbox-tick {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: var(--main-color);
    opacity: 0;
    transition: all 0.2s ease;
    width: 8px;
    height: 8px;
    border-radius: 30px;
}
.payment-form__info {
    background-color: #f7f7f7;
    border-radius: 4px;
    padding: 10px 12px;
    color: #333;
    display: flex;
    align-items: center;
    font-family: "Montserrat",sans-serif;
}
.payment-form__info--accent {
    color: var(--main-color);
    font-weight: bold;
}
.payment-form__info--accent:before {
    content: "";
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-right: 6px;
    background-image: url("data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M8.613 10.901a.617.617 0 0 1-.592.616c-.338 0-.592-.264-.592-.616V9.32c0-.352.254-.616.592-.616.339 0 .592.264.592.616V10.9ZM8.275 0c-.973 0-1.903.396-2.58 1.143a3.828 3.828 0 0 0-1.1 2.725v.352h-.042c-.93 0-1.819.351-2.496 1.055A3.842 3.842 0 0 0 1 7.912v4.352c0 .967.38 1.934 1.057 2.637C2.734 15.604 3.622 16 4.553 16h6.894c.93 0 1.861-.396 2.496-1.099A3.842 3.842 0 0 0 15 12.264V7.912c0-.967-.38-1.934-1.057-2.637a4.06 4.06 0 0 0-1.946-1.055v-.352c0-1.055-.423-1.978-1.1-2.725C10.22.44 9.29 0 8.275 0Zm3.172 14.77H4.595c-.634 0-1.226-.264-1.734-.704a2.784 2.784 0 0 1-.677-1.802V7.912c0-.66.212-1.275.677-1.758a2.421 2.421 0 0 1 1.734-.747h6.894c.635 0 1.227.263 1.692.747.508.483.72 1.099.72 1.758v4.352c0 .66-.255 1.275-.72 1.802-.423.483-1.1.703-1.734.703Zm-.592-10.55H5.737v-.352c0-.703.296-1.406.804-1.89a2.445 2.445 0 0 1 1.776-.747c.677 0 1.311.264 1.819.747a2.68 2.68 0 0 1 .761 1.89v.352h-.042Z' fill='%23257AE4'/%3E%3C/svg%3E");
}
.input {
    position: relative;
    font-weight: 400;
    font-style: normal;
    display: flex;
    flex-wrap: wrap;
    color: rgba(0,0,0,.87);
}
.input input[type=date] {
    height: 37px;
    font-size: 14px;
}
.input input[type=date]::-webkit-calendar-picker-indicator {
    padding-left: 0;
}
.input--disabled .label {
    background: #e5e5e5 !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 = i(e, e.EvEmitter))
  })(window, function (s, t) {
    function e() {}
    var i = (e.prototype = Object.create(t.prototype))
    ;(i.bindStartEvent = function (t) {
      this._bindStartEvent(t, !0)
    }),
      (i.unbindStartEvent = function (t) {
        this._bindStartEvent(t, !1)
      }),
      (i._bindStartEvent = function (t, e) {
        var i = (e = void 0 === e || e) ? "addEventListener" : "removeEventListener",
          n = "mousedown"
        s.PointerEvent ? (n = "pointerdown") : "ontouchstart" in s && (n = "touchstart"), t[i](n, this)
      }),
      (i.handleEvent = function (t) {
        var e = "on" + t.type
        this[e] && this[e](t)
      }),
      (i.getTouch = function (t) {
        for (var e = 0; e < t.length; e++) {
          var i = t[e]
          if (i.identifier == this.pointerIdentifier) return i
        }
      }),
      (i.onmousedown = function (t) {
        var e = t.button
        ;(e && 0 !== e && 1 !== e) || this._pointerDown(t, t)
      }),
      (i.ontouchstart = function (t) {
        this._pointerDown(t, t.changedTouches[0])
      }),
      (i.onpointerdown = function (t) {
        this._pointerDown(t, t)
      }),
      (i._pointerDown = function (t, e) {
        t.button || this.isPointerDown || ((this.isPointerDown = !0), (this.pointerIdentifier = void 0 !== e.pointerId ? e.pointerId : e.identifier), this.pointerDown(t, e))
      }),
      (i.pointerDown = function (t, e) {
        this._bindPostStartEvents(t), this.emitEvent("pointerDown", [t, e])
      })
    var n = { mousedown: ["mousemove", "mouseup"], touchstart: ["touchmove", "touchend", "touchcancel"], pointerdown: ["pointermove", "pointerup", "pointercancel"] }
    return (
      (i._bindPostStartEvents = function (t) {
        if (t) {
          var e = n[t.type]
          e.forEach(function (t) {
            s.addEventListener(t, this)
          }, this),
            (this._boundPointerEvents = e)
        }
      }),
      (i._unbindPostStartEvents = function () {
        this._boundPointerEvents &&
          (this._boundPointerEvents.forEach(function (t) {
            s.removeEventListener(t, this)
          }, this),
          delete this._boundPointerEvents)
      }),
      (i.onmousemove = function (t) {
        this._pointerMove(t, t)
      }),
      (i.onpointermove = function (t) {
        t.pointerId == this.pointerIdentifier && this._pointerMove(t, t)
      }),
      (i.ontouchmove = function (t) {
        var e = this.getTouch(t.changedTouches)
        e && this._pointerMove(t, e)
      }),
      (i._pointerMove = function (t, e) {
        this.pointerMove(t, e)
      }),
      (i.pointerMove = function (t, e) {
        this.emitEvent("pointerMove", [t, e])
      }),
      (i.onmouseup = function (t) {
        this._pointerUp(t, t)
      }),
      (i.onpointerup = function (t) {
        t.pointerId == this.pointerIdentifier && this._pointerUp(t, t)
      }),
      (i.ontouchend = function (t) {
        var e = this.getTouch(t.changedTouches)
        e && this._pointerUp(t, e)
      }),
      (i._pointerUp = function (t, e) {
        this._pointerDone(), this.pointerUp(t, e)
      }),
      (i.pointerUp = function (t, e) {
        this.emitEvent("pointerUp", [t, e])
      }),
      (i._pointerDone = function () {
        this._pointerReset(), this._unbindPostStartEvents(), this.pointerDone()
   absolute;
    bottom: calc(100% + 10px);
    left: 50%;
    transform: translateX(-50%);
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: #333;
    min-width: 270px;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
}
.donation__tooltip__box::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 8px 4px 0 4px;
    border-color: #fff rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);
}
.kalkulator-zakat .hasil-zakat {
    font-size: 12px;
}
.kalkulator-zakat .hasil-zakat .area-nominal {
    background: #f7f7f7;
    padding: 8px;
    position: relative;
    display: flex;
    justify-content: space-between;
    position: relative;
}
.kalkulator-zakat .hasil-zakat .area-nominal input {
    color: #257ae4;
    -webkit-appearance: none;
    font-size: 19px;
    border: none;
    font-weight: bold;
    z-index: 0;
    max-width: 220px;
    overflow: auto;
    background-color: #f7f7f7;
}
.kalkulator-zakat .hasil-zakat .area-nominal button {
    -webkit-appearance: none;
    background: rgba(0,0,0,0);
    border: 1px solid #257ae4;
    border-radius: 4px;
    color: #257ae4;
    padding: 2px 19px;
    cursor: pointer;
    font-size: 14px;
}
@media only screen and (max-width: 379px) {
    .kalkulator-zakat .hasil-zakat .area-nominal button {
        position: relative;
        right: 0;
        z-index: 2;
    }
}
.kalkulator-zakat .hasil-zakat .area-nominal .notif-salin-pop {
    font-size: 12px;
    padding: 4px 8px;
    background: #f89732;
    border-radius: 4px;
    position: absolute;
    top: -37px;
    right: -6px;
    color: #000;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    width: 100px;
    text-align: center;
}
.kalkulator-zakat .hasil-zakat .area-nominal .notif-salin-pop.show {
    opacity: 1;
}
.kalkulator-zakat .hasil-zakat .info-nominal-zakat {
    display: block;
    margin: 15px 0;
    font-size: 16px;
    line-height: 130%;
}
.kalkulator-zakat .hasil-zakat .info-nominal-zakat.f12 {
    font-size: 12px;
}
.kalkulator-zakat .hasil-zakat .info-nominal-zakat__grey {
    color: #737373;
}
.kalkulator-zakat .hasil-zakat .info-nominal-zakat__blue {
    color: #257ae4;
}
.kalkulator-zakat .hasil-zakat .info-nominal-zakat__red {
    color: #c31f47;
}
.kalkulator-zakat .hasil-zakat a {
    color: #257ae4;
}
.kalkulator-zakat .hasil-zakat a:hover {
    color: #c31f47;
}
.kalkulator-zakat .hasil-zakat .ternak-info {
    background: #d3e4fa;
    color: var(--main-color);
    font-size: 16px;
    font-weight: 600;
    padding: 10px;
    text-align: center;
    line-height: 150%;
}
.kalkulator-zakat .input-currency input {
    padding-left: 34px;
}
.kalkulator-zakat .rp {
    font-weight: 500;
    font-size: 13px;
    position: absolute;
    bottom: 7px;
    left: 9px;
}
.kalkulator-zakat .rp-tani {
    bottom: 24px;
}
.card {
    background: #f7f7f7;
    border-radius: 8px;
    padding: 26px 18px;
    font-size: 16px;
    display: grid;
    grid-template-rows: repeat(auto-fit, 1fr);
    gap: 16px;
    font-family: "Montserrat",sans-serif;
    justify-items: start;
}
.card-index {
    justify-items: center;
}
.card-index .area-button {
    display: flex;
    gap: 36px;
}
.card-index .area-button a {
    color: #000;
    text-decoration: none;
    text-align: center;
    width: 96px;
    font-weight: 600;
    position: relative;
    -webkit-transition: all ease-in-out 0.4s;
    -moz-transition: all ease-in-out 0.4s;
    -ms-transition: all ease-in-out 0.4s;
    -o-transition: all ease-in-out 0.4s;
    transition: all ease-in-out 0.4s;
}
.card-index .area-button a:hover {
    color: #257ae4;
    opacity: 0.8;
}
.card-index .area-button a span.label-new {
    position: absolute;
    color: #fff;
    background: #c31f47;
    padding: 4px 18px;
    border-radius: 10px;
    font-size: 12px;
    top: 0;
    right: -20px;
}
.card-index .area-button a img {
    height: 96px;
    width: 96px;
    margin-bottom: 10px;
}
.card__title {
    margin: 0;
    padding: 0;
}
.card__title--small {
    font-weight: normal;  
}
@media screen and (max-width: 350px) {
    .card__title--small {
        text-align: center;
    }
}

.card__text {
    line-height: 24px;
    margin: 0;
    padding: 0;
}
.card__text a {
    color: #257ae4;
    font-weight: 600;
    text-decoration: none;
}
.list-articles {
    font-family: var(--alt-font);
    font-style: normal;
    font-weight: 600;
}
.list-articles__section-title {
    font-size: 16px;
    line-height: 22px;
}
.list-articles__title {
    margin: 0;
    padding: 0;
    line-clamp: 3;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    font-size: 14px;
    line-height: 20px;
}
.list-articles__item {
    background: #fff;
    box-shadow: 0 0.4px 3px rgba(0,0,0,.15);
    border-radius: 5px;
    overflow: hidden;
    padding-bottom: 16px;
}
.list-articles__item a,
.list-articles__item a:active,
.list-articles__item a:hover,
.list-articles__item a:link,
.list-articles__item a:visited {
    color: inherit;
    text-decoration: none;
}
.list-articles__image {
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
}
.list-articles__donation {
    font-weight: bold;
    font-size: 12px;
    line-height: 22px;
    color: var(--alt-color);
}
.list-articles__donation div,
.list-articles__donation span {
    font-size: 12px;
    line-height: 24px;
    color: var(--grey);
    font-weight: 500;
}
.list-articles--scroll {
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    scroll-behavior: smooth;
}
.list-articles--scroll .list-articles__item {
    width: 158px;
    flex-shrink: 0;
}
.list-articles--scroll .list-articles__item+.list-articles__item {
    margin-left: 12px;
}
.about-us {
    font-family: var(--alt-font);
    color: #333;
}
.about-us a,
.about-us a:hover,
.about-us a:link,
.about-us a:visited {
    text-decoration: none;
    color: inherit;
}
.about-us__item {
    display: grid;
    grid-template-columns: 50px 1fr 7px;
    gap: 16px;
    align-items: center;
}
.about-us__image {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
    overflow: hidden;
    background: var(--white);
}
.about-us__text {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
}
.about-us__text--textgray {
    color: #979797;
}
.about-us__title {
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    color: #000;
}
.partnership {
    text-align: center;
    font-family: var(--alt-font);
}
.partnership__title {
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
    color: #9e8f68;
}
.partnership__title span {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 24px;
    color: #999;
    display: block;
}
.donatur {
    font-family: var(--alt-font);
}
.donatur__item {
    background: #fff;
    box-shadow: 0 0 4px rgba(0,0,0,.25);
    border-radius: 4px;
    padding: 10px 15px;
}
.donatur__item:nth-child(n+3) {
    display: none;
}
#donatur-toggle:checked~.donatur .donatur__item:nth-child(n+3) {
    display: flex;
}
.donatur__image {
    width: 47px;
    height: 47px;
    object-fit: cover;
    border-radius: 50%;
    overflow: hidden;
}
.donatur__name {
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
    color: var(--main-color);
}
.donatur__activity {
    font-family: Helvetica,sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    color: #ccc;
}
.donatur__donation {
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
    color: #666;
}
.donatur__donation span {
    font-weight: normal;
    font-size: 12px;
    line-height: 24px;
}
.donatur__msg {
    font-family: Helvetica,sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    color: #999;
}
#donatur-toggle {
    display: none;
}
#donatur-toggle:checked~.btn-container .btn span {
    transform: rotate(180deg);
}
.donasi__header {
    text-align: center;
    padding: 30px;
    font-weight: bold;
    font-size: 14px;
    font-family: var(--alt-font);
    background: #aaa;
    color: #fff;
    border-radius: 10px;
}
.box {
    position: relative;
}
.box__circle {
    width: 15px;
    height: 15px;
    background: var(--main-color);
    border-radius: 50%;
    position: absolute;
    left: -8px;
    top: 20px;
    z-index: 100;
}
.box .head-index-zakat {
    border-bottom: solid 1px #bebebe;
    padding-bottom: 20px;
}
.box .head-index-zakat .icon-calculator {
    width: 24px;
    height: 24px;
    margin-right: 12px;
}
.timeline {
    font-family: var(--alt-font);
    padding-left: 15px;
    overflow: hidden;
    position: relative;
}
.timeline__item {
    color: #000;
    position: relative;
    padding: 14px 12px 12px 19px;
    border-width: 1px;
    border-left-style: solid;
    border-image: linear-gradient(to bottom, #000, rgba(0, 0, 0, 0)) 1 100%;
    border-left: 1px solid #000;
}
.timeline__item--highlighted {
    background: #f4fffd;
}
.timeline__item p {
    font-family: var(--main-font);
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    color: #999;
}
.timeline__item p a {
    color: var(--main-color);
    font-weight: bold;
    text-decoration: none;
}
.timeline__item p img {
    object-fit: cover;
    width: 100%;
}
.timeline__item p iframe {
    width: 100%;
}
.timeline__item p iframe:before {
    padding-top: 56.25%;
}
.timeline__title {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    color: #000;
}
.timeline__title > * {
    margin: 0;
    padding: 0;
    font-style: inherit;
    font-weight: inherit;
    font-size: inherit;
    line-height: inherit;
    color: inherit;
}
.timeline__date {
    font-family: var(--main-font);
    font-size: 12px;
    line-height: 16px;
    color: #c5c5c5;
}
.timeline__text {
    font-family: var(--main-font);
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    color: #999;
}
.timeline__image img {
    object-fit: cover;
}
.timeline__back {
    background: var(--main-color);
    color: #fff;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    position: sticky;
    top: 0;
    z-index: 10;
}
.timeline__back a {
    text-decoration: none;
    color: inherit;
}
.timeline__image img {
    width: 100%;
}
.hide:before {
    content: "";
    height: 50px;
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 100%;
    background: linear-gradient(to top, white 25%, rgba(255, 255, 255, 0) 100%);
}
.gradientback {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background: linear-gradient(to top, white 25%, rgba(255, 255, 255, 0) 100%);
}
.cutarticle {
    max-height: 400px;
}
.modal {
    display: none;
    position: fixed;
    z-index: 60;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: #000;
    background-color: rgba(0,0,0,.4);
}
.modal-zakat {
    text-align: center;
    font-size: 14px;
}
.modal-zakat .text-arab {
    display: block;
    text-align: right;
    direction: rtl;
    font-family: "Droid Arabic Kufi","Droid Sans",sans-serif;
    margin: 20px 0;
    font-size: 18px;
    line-height: 200%;
}
.modal-zakat b {
    display: block;
}
.modal-zakat p {
    display: block;
}
.modal-content {
    background-color: #fefefe;
    margin: auto;
    padding: 34px 20px;
    border: 1px solid #888;
    width: 95%;
    max-width: 450px;
    position: relative;
    font-family: var(--alt-font);
}
.modal-content__item {
    display: grid;
    grid-template-columns: 31px 1fr;
    gap: 15px;
    align-items: center;
    color: #666;
    text-decoration: none;
    border-bottom: 1px solid #e4f4f1;
    padding: 4px 0;
    font-weight: 600;
    font-size: 14px;
    line-height: 140%;
}
.modal-content__item .icon-twitter {
    color: #55acee;
    font-size: 25px;
}
.modal-content__item .icon-embed,
.modal-content__item .icon-envelop {
    font-size: 25px;
    color: #000;
}
.modal-content__item+.modal-content__item {
    margin-top: 11px;
}
.modal-content__text {
    font-size: 14px;
    line-height: 130%;
    color: #000;
}
.modal-content__title {
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
    color: #000;
}
.modal-content__title--bold {
    font-size: 20px;
    font-weight: bold;
}
.modal-content__tnc {
    font-size: 16px;
    font-weight: 400;
    color: #000;
    max-height: 306px;
    overflow-y: scroll;
}
.modal-content__checkbox {
    width: 18px;
    height: 18px;
    border: 2px solid var(--main-color);
    border-radius: 4px;
    flex-grow: 0;
    flex-shrink: 0;
    display: block;
    position: relative;
}
.modal-content__checkbox .icon-check {
    font-size: 14px;
    font-weight: bold;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: var(--main-color);
    opacity: 0;
    transition: all 0.2s ease;
}
.modal-content #terms:checked~.modal-content__checkbox .icon-check {
    opacity: 1;
}
.modalbox-close,
.modalboxtnc-close,
.modalboxzakat-close {
    color: #aaa;
    font-size: 18px;
    font-weight: bold;
    position: absolute;
    top: 10px;
    right: 10px;
}
.modalbox-close:focus,
.modalbox-close:hover,
.modalboxtnc-close:focus,
.modalboxtnc-close:hover,
.modalboxzakat-close:focus,
.modalboxzakat-close:hover {
    color: #000;
    text-decoration: none;
    cursor: pointer;
}
.copy-clipboard {
    position: relative;
    align-items: stretch;
    display: flex;
}
.copy-clipboard .btn {
    height: 100%;
    min-width: 100px;
}
.copy-clipboard__title {
    font-weight: 500;
    font-size: 15px;
    line-height: 20px;
    color: #000;
    padding: 5px 10px;
    background: #fff;
    display: inline-block;
    position: absolute;
    left: 15px;
    bottom: 100%;
    transform: translateY(50%);
}
.copy-clipboard__input {
    border-radius: 8px;
    border: 1px solid #d1d1d1;
    padding: 15px 10px;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
}
.tooltip {
    position: relative;
    display: inline-block;
}
.tooltip .tooltiptext {
    visibility: hidden;
    width: 140px;
    background-color: #555;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px;
    position: absolute;
    z-index: 1;
    bottom: 110%;
    left: 50%;
    margin-left: -75px;
    opacity: 0;
    transition: opacity 0.3s;
    font-size: 12px;
}
.tooltip .tooltiptext::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #555 rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);
}
.tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
}
.alert-danger .modalbox-close {
    font-size: 12px;
    color: #fff;
}
.alert-danger .modal-content {
    background: var(--alertDanger);
    padding: 18px 20px;
    animation: wobble 0.5s ease;
}
.alert-danger .modal-content__text {
    color: #fff;
    margin-top: 5px;
}
.alert-success .modalbox-close {
    font-size: 12px;
    color: #fff;
}
.alert-success .modal-content {
    background: var(--alertSuccess);
    padding: 12px 28px 12px 15px;
    animation: pulse 0.1s ease-in-out;
    border: 0;
}
.alert-success .modal-content__text {
    color: #fff;
    margin-top: 5px;
}
@keyframes wobble {
    0% {
        transform: translateY(-100px);
        opacity: 0;
    }
    50% {
        transform: translateY(0px);
        opacity: 1;
    }
    60% {
        transform: translateX(8px);
        opacity: 1;
    }
    70% {
        transform: translateX(-8px);
        opacity: 1;
    }
    80% {
        transform: translateX(4px);
        opacity: 1;
    }
    90% {
        transform: translateX(-4px);
        opacity: 1;
    }
    100% {
        transform: translateX(0px);
        opacity: 1;
    }
}
@keyframes pulse {
    0% {
        transform: scale(1);
        opacity: 0;
    }
    50% {
        transform: scale(1.1);
        opacity: 1;
    }
    60% {
        transform: scale(1.2);
        opacity: 1;
    }
    70% {
        transform: scale(1.22);
        opacity: 1;
    }
    80% {
        transform: scale(1.2);
        opacity: 1;
    }
    90% {
        transform: scale(1.1);
        opacity: 1;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
}
.login__cta {
    border-bottom: 1px solid #f7f7f7;
    margin: 0 1em 0.75em;
}
.login__text {
    font-size: 13px;
    line-height: 24px;
    color: #666;
    font-weight: normal;
    padding: 10px 26px;
}
.login__user {
    display: flex;
    justify-content: space-between;
    margin: 0 1em 0.75em;
}
.login__user-profile {
    display: flex;
    text-align-last: left;
    align-items: center;
}
.login__user-img {
    width: 38px;
    height: 38px;
    position: relative;
    border-radius: 100%;
    overflow: hidden;
    background: #f0f0f0;
    flex-shrink: 0;
    flex-grow: 0;
}
.login__user-img img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.login__user-name {
    font-family: var(--alt-font);
    font-size: 14px;
    margin: 0;
    padding-left: 10px;
    font-weight: bold;
}
.login__user-link {
    font-size: 12px;
    font-family: var(--alt-font);
    color: var(--main-color);
    border: none;
}
:root {
    --main-color: #257ae4;
    --alt-color-light: #d3e4fa;
    --alt-color: #5195e9;
    --white: #fff;
    --grey: #999;
    --alt-grey: #f7f7f7;
    --alt-font: "Montserrat", -sHelvetica, sans-serif;
    --main-font: "Montserrat" , sans-serif;
    --pink-color: #ff88ff;
    --pink-color2: #f02da8;
    --alertDanger: #ee4023;
    --alertSuccess: #11AA3D;
}
/* UPDATE PENAMBAHAN SAMPLE BG */
body {
    background: url("../bg-ziswaf.webp") no-repeat #fefefe;
    background-attachment: fixed;
    background-position: center bottom;
    background-size: cover;
    font-family: "Montserrat",Helvetica,sans-serif;
    -webkit-font-smoothing: antialiased;
    min-height: 100vh;
}
.container {
    width: 100%;
    max-width: 480px;
    margin: auto;
    box-shadow: 1px -1px 11px -1px rgba(0,0,0,.35);
    -webkit-box-shadow: 1px -1px 11px -1px rgba(0,0,0,.35);
    -moz-box-shadow: 1px -1px 11px -1px rgba(0,0,0,.35);
    background: #fff;
}
.btn {
    text-decoration: none;
    padding: 10px 15px;
    color: #666;
    background-color: #e5e5e5;
    display: inline-block;
    border-radius: 4px;
    font-family: var(--alt-font);
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    text-align: center;
    border: 0;
}
.btn--blue {
    background: var(--main-color);
    color: #fff !important;
}
.btn--white-blue {
    background: #fff;
    color: var(--main-color) !important;
    border: 1px solid var(--main-color);
}
.btn--light-blue {
    background: #d3e4fa;
    color: var(--main-color);
}
.btn--blue-link {
    background: none;
    color: var(--main-color);
}
.btn--pink {
    background: var(--pink-color);
    color: var(--white);
}
.btn--dark-grey {
    background: var(--grey);
    color: var(--white);
}
.btn--small {
    padding: 3px 15px;
}
.btn--wider {
    padding: 8px 25px;
}
.btn:disabled {
    background: #666;
    color: #fff;
}
.box__title {
    font-family: "Montserrat",sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    color: var(--main-color);
    text-decoration: none;
}
.box__title > * {
    font-family: inherit;
    font-style: inherit;
    font-weight: inherit;
    font-size: inherit;
    line-height: inherit;
    color: inherit;
    text-decoration: none;
}
.box__title span {
    color: #8e8e8e;
    font-size: 14px;
}
.box__title--secondary {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    color: #000;
}
.box__title--ctarsa {
    color: #000;
}
.box__body {
    font-size: 16px;
    line-height: 24px;
    color: #000;
}
.box__body ul {
    padding: 0 1.2em;
    margin: 0;
}
.box__body--helvetica {
    font-family: var(--main-font);
}
.progress {
    height: 6px;
    overflow: hidden;
    background-color: #f0f0f0;
    border-radius: 8px;
    -webkit-box-shadow: inset 0 1px 2px rgba(0,0,0,.1);
    box-shadow: inset 0 1px 2px rgba(0,0,0,.1);
}
.progress .progress-bar {
    float: left;
    width: 0;
    height: 100%;
    font-size: 12px;
    line-height: 20px;
    color: #fff;
    text-align: center;
    background: linear-gradient(148.69deg, #257ae4 1.56%, #74edfd 109.88%);
    border-radius: 8px;
    -webkit-transition: width 0.6s ease;
    -o-transition: width 0.6s ease;
    transition: width 0.6s ease;
}
.progress .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
}
.list-content {
    color: #000;
    font-family: var(--alt-font);
}
.list-content__image {
    width: 100px;
    height: 100px;
    border-radius: 4px;
    object-fit: cover;
    overflow: hidden;
}
.list-content a,
.list-content a:active,
.list-content a:link,
.list-content a:visited {
    text-decoration: none;
    color: inherit;
}
.list-content__text {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
}
.list-content__text * {
    margin: 0;
    padding: 0;
}
.list-content__title {
    font-weight: inherit;
    font-size: inherit;
    line-height: inherit;
}
.list-content__sub {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 17px;
    color: var(--alt-color);
}
.list-content__body {
    font-size: 14px;
    line-height: 18px;
    color: #666;
    font-weight: 500;
}
.list-content__body span {
    font-size: 12px;
    line-height: 16px;
    color: #999;
    display: block;
    margin-top: 5px;
}
.list-events {
    font-family: var(--alt-font);
    color: #000;
}
.list-events a,
.list-events a:active,
.list-events a:link,
.list-events a:visited {
    text-decoration: none;
    color: inherit;
}
.list-events__title {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
}
.list-events__detail .list-events__title {
    height: 43px;
    overflow: hidden;
    font-size: 14px;
}
.list-events__title .subjudul {
    display: block;
    color: var(--alt-color);
    font-weight: normal;
    font-size: 12px;
    line-height: 17px;
}
.list-events__image {
    object-fit: cover;
    border-radius: 4px;
}
.list-events__thumb .list-events__image {
    border-radius: 0;
}
.list-events__date {
    font-family: var(--main-font);
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    color: #999;
}
.list-events__thumb {
    width: 130px;
    flex-shrink: 0;
    flex-grow: 0;
    padding-right: 10px;
}
.list-events__item--card {
    border: 1px solid #f0f0f0;
    border-radius: 10px;
    overflow: hidden;
}
.article-events {
    border-bottom: 1px solid #cfcfcf;
}
.article-events__breadcrumb {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #9e9e9e;
}
.article-events__breadcrumb a,
.article-events__breadcrumb a:active,
.article-events__breadcrumb a:link,
.article-events__breadcrumb a:visited {
    color: inherit;
    font-size: inherit;
    text-decoration: none;
}
.article-events__title {
    font-family: var(--alt-font);
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    margin: 0;
    padding: 0;
}
.article-events__image img {
    object-fit: cover;
}
.article-events__text * {
    max-width: 100%;
}
.article-events__caption {
    font-family: var(--main-font);
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    color: #909090;
    border-bottom: 1px solid #e5e5e5;
}
.article-events__text {
    font-family: var(--main-font);
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #000;
}
.article-events__share a {
    text-decoration: none;
    display: flex;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background: #f2f2f2;
    align-items: center;
    justify-content: center;
    font-size: 15px;
}
.article-events__share a .icon-twitter {
    color: #4fa0ff;
}
.article-events__share a .icon-facebook {
    color: #3c66b8;
}
.article-events__share a .icon-link {
    color: #828282;
}
.article-events__share a .icon-msg {
    color: #828282;
}
.quote {
    background: url("../images/bg-faq.jpg") center center no-repeat;
    background-size: cover;
    font-family: var(--alt-font);
}
.quote h1 {
    margin: 0;
    padding: 0;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    color: #fff;
    display: block;
    position: relative;
}
.quote h1:before {
    content: "";
    width: 24px;
    height: 16px;
    display: block;
    background: url("../images/quote.svg") center center no-repeat;
    position: absolute;
    top: -20px;
    left: -12px;
}
.quote h1:after {
    content: "";
    width: 24px;
    height: 16px;
    display: inline-block;
    background: url("../images/quote.svg") top left no-repeat;
    background-size: 12px 8px;
}
.quote span {
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    color: #fff;
}
.list-faq {
    list-style-type: none;
    margin: 0;
    padding: 0;
    font-family: var(--alt-font);
    font-style: normal;
    font-weight: 500;
    line-height: 25px;
    color: #000;
}
.list-faq__title {
    font-weight: 700;
    font-size: 18px;
}
.list-faq__text {
    font-size: 16px;
}
.list-faq li+li {
    margin-top: 22px;
}
.list-faq a {
    text-decoration: none;
    font-weight: 700;
    color: var(--main-color);
    transition: all 0.5s ease;
}
.list-faq a:hover {
    opacity: 0.6;
}
.payment-confirmed {
    font-family: var(--alt-font);
    border-bottom: 1px solid #e5e5e5;
}
.payment-confirmed--failed {
    background: url("../images/failed-cover.png") top center no-repeat;
    background-size: 100% 242px;
    border-bottom: 0;
}
.payment-confirmed * {
    max-width: 100%;
}
.payment-confirmed__cover {
    width: 218px;
}
.payment-confirmed__cover--failed {
    width: 100px;
    height: 100px;
    margin-top: 75px;
}
.payment-confirmed__title {
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    color: #000;
    margin: 0;
    padding: 0;
}
.payment-confirmed__title--failed {
    width: 232px;
    margin-top: 78px;
    font-weight: 500;
    text-align: center;
}
.payment-confirmed__msg {
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    color: #666;
    border-bottom: 1px solid #e5e5e5;
}
.payment-confirmed__donation {
    font-size: 12px;
    line-height: 22px;
    color: #666;
}
.payment-confirmed__amount {
    background: #e6f5f8;
    border-radius: 4px;
    font-size: 20px;
    line-height: 28px;
    font-weight: bold;
    color: #3ea6dd;
    padding: 10px 15px;
    text-align: center;
}
.upload-file input[type=file] {
    background: none;
    border: 0;
    padding: 0;
    display: none;
}
.upload-file__btn {
    font-weight: bold;
    font-size: 12px;
    line-height: 22px;
    background: #666;
    border-radius: 4px;
    padding: 6px 10px;
    color: #fff;
    flex-grow: 0;
    flex-shrink: 0;
}
.upload-file__label {
    display: flex;
    align-items: center;
}
.upload-file__label span {
    color: #b4b3b3;
    font-size: 12px;
    font-weight: normal;
    font-style: italic;
    margin-left: 8px;
    overflow: hidden;
}
.newsletter {
    font-size: 14px;
    line-height: 18px;
    color: #999;
}
.newsletter__form {
    padding: 7px 10px;
    background: #e5e5e5;
    border-radius: 8px;
}
.newsletter__form button {
    background: var(--alt-color-light);
    border-radius: 4px;
    padding: 8px 16px;
    color: var(--main-color);
    border: 0;
    flex-grow: 0;
    flex-shrink: 0;
}
.newsletter__form input {
    border: 0;
    font-size: 12px;
    color: #999;
    border-radius: 4px;
    padding: 8px 16px;
    flex-grow: 1;
}
.newsletter__form input:focus {
    outline: none;
}
.list-card-content {
    font-family: var(--alt-font);
}
.list-card-content a,
.list-card-content a:active,
.list-card-content a:link,
.list-card-content a:visited {
    text-decoration: none;
    color: inherit;
}
.list-card-content__image {
    object-fit: cover;
}
.list-card-content__item {
    background: #fff;
    box-shadow: 0 0 5px rgba(0,0,0,.15);
    border-radius: 6px;
    overflow: hidden;
}
.list-card-content__loc {
    font-weight: normal;
    font-size: 12px;
    line-height: 17px;
    color: #3ea6dd;
}
.list-card-content__loc img {
    width: 16px;
    height: 16px;
}
.list-card-content__title {
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
    color: #000;
}
.list-card-content__sub {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: #999;
}
.list-card-content__body {
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    color: #666;
}
.list-card-content__time {
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #666;
}
.list-card-content__time img {
    width: 16px;
    height: 16px;
}
.no-data {
    background: #e3f5fe;
    border-radius: 8px;
    height: 124px;
    font-family: var(--alt-font);
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: #666;
}
.volunteer-detail {
    font-family: var(--alt-font);
}
.volunteer-detail__image {
    border-radius: 8px;
}
.volunteer-detail__body {
    font-size: 14px;
    line-height: 18px;
    color: #000;
    font-family: var(--main-font);
}
.volunteer-detail__body h1,
.volunteer-detail__body h2,
.volunteer-detail__body h3,
.volunteer-detail__body h4,
.volunteer-detail__body h5,
.volunteer-detail__body h6 {
    color: var(--main-color);
    margin: 0;
}
.volunteer-detail__body h3 {
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    margin: auto;
}
.volunteer-detail__body ul {
    padding-left: 20px;
    margin: 10px 0;
}
.volunteer-detail__body ul li+li {
    margin-top: 8px;
}
.volunteer-detail__place {
    font-weight: normal;
    font-size: 12px;
    line-height: 17px;
    color: #3ea6dd;
    font-family: var(--main-font);
}
.volunteer-detail__place img {
    width: 16px;
    height: 16px;
}
.volunteer-detail__title {
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    color: var(--main-color);
    display: block;
    margin: 0;
}
.volunteer-detail__sub {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: #999;
    display: block;
    margin: 0;
}
.volunteer-detail__cal,
.volunteer-detail__time {
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #666;
}
.volunteer-detail__cal img,
.volunteer-detail__time img {
    flex-grow: 0;
    width: 25px;
}
.accordion > label {
    background: #d3e4fa;
    border-radius: 4px;
    padding: 8px 16px;
    font-size: 14px;
    line-height: 22px;
    color: var(--main-color);
}
.accordion > label .icon-chevron-thin-right {
    transition: all 0.5s ease;
}
.accordion > label.accordion__label--blue {
    background: var(--main-color);
    color: #fff;
}
.accordion__content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s ease;
}
.accordion > input {
    display: none;
}
.accordion > input:checked~.accordion__content {
    max-height: 800px;
}
.accordion > input:checked~label .icon-chevron-thin-right {
    transform: rotate(90deg);
}
.ty-page {
    font-family: var(--alt-font);
}
.ty-page__title {
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    color: var(--main-color);
    margin: 0;
    padding: 0;
}
.ty-page__text {
    font-size: 14px;
    line-height: 22px;
    color: #333;
    font-weight: 500;
}
.ty-page__text--blue {
    color: var(--main-color);
}
.ty-page__info {
    font-size: 12px;
    line-height: 24px;
    color: #666;
    font-weight: normal;
    border-top: 1px solid #e5e5e5;
    padding: 10px 26px;
}
.ty-page__info span {
    display: block;
    font-size: 16px;
}
.sticky-footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    max-width: 480px;
    left: 50%;
    transform: translateX(-50%);
    transition: opacity 0.5s ease;
    z-index: 1;
}
.sticky-footer--hide {
    opacity: 0;
    pointer-events: none;
}
.sticky-header {
    position: sticky;
    top: 0;
}
.sticky-header+* {
    margin-top: -96px;
}
.email-confirmation {
    color: #333;
}
.email-confirmation__title {
    font-family: var(--alt-font);
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
}
.email-confirmation__body {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
}
.email-confirmation__info {
    margin-top: 80px;
    border-top: 1px solid #e5e5e5;
    font-style: italic;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    color: #999;
    padding-top: 3px;
}
.email-confirmation__input {
    width: 265px;
    margin: 0 auto;
}
.email-confirmation__extra {
    color: #666;
}
.komunitas-detail {
    font-family: var(--alt-font);
}
.komunitas-detail__img {
    width: 184px;
    height: 138px;
    object-fit: contain;
}
.komunitas-detail__title {
    margin: 0;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    color: var(--main-color);
}
.komunitas-detail__date {
    font-size: 12px;
    line-height: 14px;
    color: #666;
}
.komunitas-detail__loc {
    font-style: italic;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #3ea6dd;
}
.komunitas-detail__body {
    color: var(--grey);
    font-size: 14px;
    line-height: 18px;
}
.komunitas-sosmed__link {
    border: 1px solid #d1d1d1;
    padding: 13px;
    border-radius: 8px;
    font-size: 14px;
    line-height: 18px;
    text-decoration: none;
    color: #000;
    display: flex;
    align-items: center;
}
@media screen and (max-width: 359px) {
    .komunitas-sosmed__link {
        font-size: 12px;
    }
}
.komunitas-sosmed__link [class^=icon-] {
    color: #fff;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
}
.komunitas-sosmed__link .icon-facebook {
    background: #395185;
    font-size: 20px;
    display: inline-flex;
    justify-content: center;
    align-items: flex-end;
}
.komunitas-sosmed__link .icon-instagram {
    background: #d6249f;
    background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285aeb 90%);
}
.komunitas-sosmed__link .icon-twitter {
    background: #1da1f2;
}
.form-title {
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #000;
    margin: 0;
}
.form-title--sub {
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    color: #666;
    margin: 0;
}
.halaman-error {
    text-decoration: none;
    color: var(--main-color);
    font-weight: 600;
    font-size: 12px;
    line-height: 22px;
}
.link {
    font-size: 14px;
    font-family: var(--alt-font);
    color: var(--main-color);
    border: none;
    text-decoration: none;
}
.link--uderline {
    text-decoration: underline;
}
.label-badge {
    color: #fff !important;
    font-family: var(--alt-font);
    background: #333;
    padding: 3px 5px;
    border-radius: 20px;
    font-size: 12px;
    display: inline-block;
    min-width: 70px;
    text-align: center;
}
.label-badge__header {
    display: block;
    padding: 15px;
    font-size: 14px;
    font-weight: bold;
    font-family: var(--alt-font);
    text-align: center;
    background: #333;
    border-radius: 10px;
}
.label-badge__header > * {
    font-size: 14px;
    color: #fff;
}
.label-badge--green {
    background: #11aa3d;
}
.label-badge--red {
    background: #ee4023;
}
.label-badge--orange {
    background: #fcb715;
}
.label-badge--softgreen {
    background: #1fd0e1;
}
.label-badge--blue {
    background: #257ae4;
}
.label-badge--btn {
    padding: 5px 10px 6px;
}
@media only screen and (max-width: 380px) {
    .label-badge {
        margin: 0 10px 10px 0;
    }
}
.table__card {
    border: 1px solid #f0f0f0;
    border-radius: 10px;
    overflow: hidden;
    padding: 10px;
    width: 100%;
    font-size: 12px;
    font-family: var(--alt-font);
}
.table__card tr td {
    padding: 5px;
}
.faq {
    font-family: var(--alt-font);
}
.faq__item {
    border-radius: 10px;
    border: 1px solid #7cafef;
    margin-bottom: 10px;
    font-size: 14px;
    color: #666;
    overflow: hidden;
}
.faq__item-wrap {
    height: 0;
    max-height: 0;
    transition: all 0.4s ease-in-out;
}
.faq__item--active .faq__item-wrap {
    max-height: 1000px;
    height: auto;
    transition: all 0.4s ease-in-out;
}
.faq__item-list {
    padding: 20px 0 20px 30px;
    margin: 0;
}
.faq__item-list li {
    margin-bottom: 10px;
}
.faq__item-list li a {
    color: inherit;
    text-decoration: none;
}
.faq__item-header {
    padding: 10px;
}
.faq__item--active .faq__item-header {
    color: #fff;
    background: #5195e9;
}
.faq__item--active .faq__item-header span {
    transform: rotate(180deg);
    transition: transform 0.4s ease-in-out;
}
.faq__item-row {
    padding: 10px 0;
    margin-bottom: 10px;
    border-bottom: 1px solid #ccc;
}
.faq__item-row a {
    display: block;
    color: #000;
    font-size: 14px;
    text-decoration: none;
}
.faq__item-row a:hover {
    transition: color 0.2s ease-in-out;
    color: #1da1f2;
}
.faq__item-row h1,
.faq__item-row h2,
.faq__item-row h3,
.faq__item-row h4 {
    font-size: 14px;
    margin: 0;
    padding: 0;
    margin-bottom: 10px;
}
.faq__item-row p {
    padding: 0;
    margin: 0;
}
.faq__text {
    padding: 10px 0;
    font-size: 14px;
    line-height: 1.6em;
    color: #333;
}
.faq__text h2 {
    font-size: 1.2em;
}
.faq__tab {
    text-align: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    margin: 0 -15px;
}
.faq__tab-item {
    text-decoration: none;
    color: #000;
    text-align: center;
    width: 25%;
    border-bottom: 1px solid #ccc;
    font-size: 12px;
    padding: 10px;
    flex-shrink: 0;
    font-weight: 600;
}
.faq__tab-item--active {
  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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/Z'/%3E%3C/defs%3E%3C/svg%3E%0A");background-repeat:no-repeat;background-position:center 4px;background-size:24px;padding:3px 0;transform:translate3d(-50%,-50%,0);color:#999;font-size:12px;display:flex;align-items:flex-end}.full-bleed-content{width:100vw;position:relative;z-index:0;left:calc(-50vw + 540px)}.nhl-list section:empty,.nhl-list article:empty{display:none}*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}[type=text],[type=email],[type=url],[type=password],[type=number],[type=date],[type=datetime-local],[type=month],[type=search],[type=tel],[type=time],[type=week],[multiple],textarea,select{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;border-color:#6b7280;border-width:1px;border-radius:0;padding:.5rem .75rem;font-size:1rem;line-height:1.5rem;--tw-shadow: 0 0 #0000}[type=text]:focus,[type=email]:focus,[type=url]:focus,[type=password]:focus,[type=number]:focus,[type=date]:focus,[type=datetime-local]:focus,[type=month]:focus,[type=search]:focus,[type=tel]:focus,[type=time]:focus,[type=week]:focus,[multiple]:focus,textarea:focus,select:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-inset: var(--tw-empty, );--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: #2563eb;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);border-color:#2563eb}input::-moz-placeholder,textarea::-moz-placeholder{color:#6b7280;opacity:1}input::placeholder,textarea::placeholder{color:#6b7280;opacity:1}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-date-and-time-value{min-height:1.5em}::-webkit-datetime-edit,::-webkit-datetime-edit-year-field,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-minute-field,::-webkit-datetime-edit-second-field,::-webkit-datetime-edit-millisecond-field,::-webkit-datetime-edit-meridiem-field{padding-top:0;padding-bottom:0}select{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");background-position:right .5rem center;background-repeat:no-repeat;background-size:1.5em 1.5em;padding-right:2.5rem;-webkit-print-color-adjust:exact;print-color-adjust:exact}[multiple]{background-image:initial;background-position:initial;background-repeat:unset;background-size:initial;padding-right:.75rem;-webkit-print-color-adjust:unset;print-color-adjust:unset}[type=checkbox],[type=radio]{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;-webkit-print-color-adjust:exact;print-color-adjust:exact;display:inline-block;vertical-align:middle;background-origin:border-box;-webkit-user-select:none;-moz-user-select:none;user-select:none;flex-shrink:0;height:1rem;width:1rem;color:#2563eb;background-color:#fff;border-color:#6b7280;border-width:1px;--tw-shadow: 0 0 #0000}[type=checkbox]{border-radius:0}[type=radio]{border-radius:100%}[type=checkbox]:focus,[type=radio]:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-inset: var(--tw-empty, );--tw-ring-offset-width: 2px;--tw-ring-offset-color: #fff;--tw-ring-color: #2563eb;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[type=checkbox]:checked,[type=radio]:checked{border-color:transparent;background-color:currentColor;background-size:100% 100%;background-position:center;background-repeat:no-repeat}[type=checkbox]:checked{background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e")}[type=radio]:checked{background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e")}[type=checkbox]:checked:hover,[type=checkbox]:checked:focus,[type=radio]:checked:hover,[type=radio]:checked:focus{border-color:transparent;background-color:currentColor}[type=checkbox]:indeterminate{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e");border-color:transparent;background-color:currentColor;background-size:100% 100%;background-position:center;background-repeat:no-repeat}[type=checkbox]:indeterminate:hover,[type=checkbox]:indeterminate:focus{border-color:transparent;background-color:currentColor}[type=file]{background:unset;border-color:inherit;border-width:0;border-radius:0;padding:0;font-size:unset;line-height:inherit}[type=file]:focus{outline:1px solid ButtonText;outline:1px auto -webkit-focus-ring-color}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.container{width:100%;margin-right:auto;margin-left:auto;padding-right:10px;padding-left:10px}@media (min-width: 1100px){.container{max-width:1100px}}.btn-live-primary-outline{border-color:#c00;border-width:1px}.btn-live-primary-outline:before{background-color:#c00;content:;top:8px;left:6px;border-radius:9999px;position:absolute;width:6px;height:6px}.btn-live-primary-outline:hover{background-color:#c00}.btn-live-primary-outline:hover:before{background-color:#000}.aspect-w-16{position:relative;padding-bottom:calc(var(--tw-aspect-h) / var(--tw-aspect-w) * 100%);--tw-aspect-w: 16}.aspect-w-16>*{position:absolute;height:100%;width:100%;inset:0}.aspect-h-9{--tw-aspect-h: 9}.aspect-w-4{position:relative;padding-bottom:calc(var(--tw-aspect-h) / var(--tw-aspect-w) * 100%);--tw-aspect-w: 4}.aspect-w-4>*{position:absolute;height:100%;width:100%;inset:0}.aspect-h-3{--tw-aspect-h: 3}.aspect-h-16{--tw-aspect-h: 16}.aspect-w-1{position:relative;padding-bottom:calc(var(--tw-aspect-h) / var(--tw-aspect-w) * 100%);--tw-aspect-w: 1}.aspect-w-1>*{position:absolute;height:100%;width:100%;inset:0}.aspect-h-1{--tw-aspect-h: 1}.aspect-w-3{position:relative;padding-bottom:calc(var(--tw-aspect-h) / var(--tw-aspect-w) * 100%);--tw-aspect-w: 3}.aspect-w-3>*{position:absolute;height:100%;width:100%;inset:0}.aspect-h-4{--tw-aspect-h: 4}.aspect-w-9{position:relative;padding-bottom:calc(var(--tw-aspect-h) / var(--tw-aspect-w) * 100%);--tw-aspect-w: 9}.aspect-w-9>*{position:absolute;height:100%;width:100%;inset:0}.aspect-h-5{--tw-aspect-h: 5}.aspect-h-7{--tw-aspect-h: 7}.visible{visibility:visible}.invisible{visibility:hidden}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.sticky{position:sticky}.top-1{top:.25rem}.right-1{right:.25rem}.left-0{left:0}.\!right-\[inherit\]{right:inherit!important}.\!bottom-\[50px\]{bottom:50px!important}.\!bottom-\[285px\]{bottom:285px!important}.bottom-\[50px\]{bottom:50px}.right-0{right:0}.right-3{right:.75rem}.top-3{top:.75rem}.top-\[calc\(50\%_-_24px\)\]{top:calc(50% - 24px)}.top-0{top:0}.top-\[calc\(50\%_-_20px\)\]{top:calc(50% - 20px)}.-top-\[35px\]{top:-35px}.left-1\/2{left:50%}.left-\[calc\(50\%_\+_162px\)\]{left:calc(50% + 162px)}.bottom-0{bottom:0}.-top-0\.5{top:-.125rem}.-top-0{top:-0px}.-bottom-5{bottom:-1.25rem}.left-4{left:1rem}.right-4{right:1rem}.-bottom-10{bottom:-2.5rem}.-top-1{top:-.25rem}.top-4{top:1rem}.left-5{left:1.25rem}.top-\[calc\(50\%_-_12px\)\]{top:calc(50% - 12px)}.-right-\[100px\]{right:-100px}.top-full{top:100%}.right-\[15px\]{right:15px}.top-\[10px\]{top:10px}.-right-\[42px\]{right:-42px}.-left-full{left:-100%}.-right-full{right:-100%}.left-\[60px\]{left:60px}.right-\[40px\]{right:40px}.top-\[140px\]{top:140px}.top-\[95px\]{top:95px}.left-\[5\%\]{left:5%}.-left-4{left:-1rem}.top-\[55\%\]{top:55%}.left-\[inherit\]{left:inherit}.\!top-\[35\%\]{top:35%!important}.-top-8{top:-2rem}.right-1\/2{right:50%}.top-\[88px\]{top:88px}.top-1\/2{top:50%}.-top-2{top:-.5rem}.-left-\[170px\]{left:-170px}.bottom-28{bottom:7rem}.top-5{top:1.25rem}.right-5{right:1.25rem}.bottom-\[70px\]{bottom:70px}.-top-\[26px\]{top:-26px}.right-\[73px\]{right:73px}.-top-4{top:-1rem}.top-20{top:5rem}.top-60{top:15rem}.top-\[135px\]{top:135px}.-bottom-3{bottom:-.75rem}.-top-\[18px\]{top:-18px}.-top-6{top:-1.5rem}.right-2\.5{right:.625rem}.top-2\.5{top:.625rem}.right-2{right:.5rem}.top-2{top:.5rem}.z-20{z-index:20}.z-50{z-index:50}.z-10{z-index:10}.z-30{z-index:30}.z-40{z-index:40}.z-0{z-index:0}.z-\[5\]{z-index:5}.z-\[15\]{z-index:15}.z-\[4px\]{z-index:4px}.order-last{order:9999}.col-span-3{grid-column:span 3 / span 3}.col-span-1{grid-column:span 1 / span 1}.col-span-2{grid-column:span 2 / span 2}.row-span-2{grid-row:span 2 / span 2}.float-right{float:right}.float-left{float:left}.clear-both{clear:both}.m-auto{margin:auto}.mx-auto{margin-left:auto;margin-right:auto}.my-5{margin-top:1.25rem;margin-bottom:1.25rem}.my-4{margin-top:1rem;margin-bottom:1rem}.mx-2{margin-left:.5rem;margin-right:.5rem}.my-3{margin-top:.75rem;margin-bottom:.75rem}.my-6{margin-top:1.5rem;margin-bottom:1.5rem}.my-8{margin-top:2rem;margin-bottom:2rem}.my-20{margin-top:5rem;margin-bottom:5rem}.my-2{margin-top:.5rem;margin-bottom:.5rem}.my-10{margin-top:2.5rem;margin-bottom:2.5rem}.mx-\[-16px\]{margin-left:-16px;margin-right:-16px}.mx-4{margin-left:1rem;margin-right:1rem}.-mx-4{margin-left:-1rem;margin-right:-1rem}.mb-8{margin-bottom:2rem}.mb-2{margin-bottom:.5rem}.mb-5{margin-bottom:1.25rem}.mb-4{margin-bottom:1rem}.mr-2{margin-right:.5rem}.ml-auto{margin-left:auto}.mt-4{margin-top:1rem}.mt-5{margin-top:1.25rem}.mt-0{margin-top:0}.mb-6{margin-bottom:1.5rem}.-mt-2{margin-top:-.5rem}.ml-4{margin-left:1rem}.mt-2{margin-top:.5rem}.mb-3{margin-bottom:.75rem}.mt-0\.5{margin-top:.125rem}.mt-1{margin-top:.25rem}.mr-\[4px\]{margin-right:4px}.mb-16{margin-bottom:4rem}.mb-1{margin-bottom:.25rem}.ml-\[68px\]{margin-left:68px}.mr-\[7px\]{margin-right:7px}.ml-\[20px\]{margin-left:20px}.mr-\[20px\]{margin-right:20px}.ml-\[10px\]{margin-left:10px}.mt-8{margin-top:2rem}.-mt-\[70px\]{margin-top:-70px}.mb-2\.5{margin-bottom:.625rem}.mb-0{margin-bottom:0}.ml-2{margin-left:.5rem}.mb-9{margin-bottom:2.25rem}.mb-10{margin-bottom:2.5rem}.mt-\[88px\]{margin-top:88px}.mt-\[10px\]{margin-top:10px}.mt-10{margin-top:2.5rem}.-ml-\[50vw\]{margin-left:-50vw}.-mr-\[50vw\]{margin-right:-50vw}.mt-12{margin-top:3rem}.mt-2\.5{margin-top:.625rem}.-mt-\[18px\]{margin-top:-18px}.-ml-\[18px\]{margin-left:-18px}.mt-3{margin-top:.75rem}.mt-6{margin-top:1.5rem}.mr-4{margin-right:1rem}.mb-7{margin-bottom:1.75rem}.ml-8{margin-left:2rem}.-ml-\[851px\]{margin-left:-851px}.-mr-\[851px\]{margin-right:-851px}.mb-1\.5{margin-bottom:.375rem}.mb-0\.5{margin-bottom:.125rem}.ml-7{margin-left:1.75rem}.block{display:block}.inline-block{display:inline-block}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.grid{display:grid}.hidden{display:none}.h-\[13px\]{height:13px}.h-\[26px\]{height:26px}.h-\[11px\]{height:11px}.h-\[18px\]{height:18px}.h-\[12px\]{height:12px}.h-\[14px\]{height:14px}.h-3{height:.75rem}.h-10{height:2.5rem}.h-2\.5{height:.625rem}.h-2{height:.5rem}.h-6{height:1.5rem}.h-\[3px\]{height:3px}.h-4{height:1rem}.h-9{height:2.25rem}.h-\[52px\]{height:52px}.h-auto{height:auto}.h-\[37px\]{height:37px}.h-full{height:100%}.h-8{height:2rem}.h-\[8px\]{height:8px}.h-\[22px\]{height:22px}.h-\[480px\]{height:480px}.h-\[500px\]{height:500px}.h-\[465px\]{height:465px}.h-\[2px\]{height:2px}.h-\[80px\]{height:80px}.h-\[24px\]{height:24px}.h-5{height:1.25rem}.h-\[30px\]{height:30px}.h-\[198px\]{height:198px}.h-\[43px\]{height:43px}.h-\[32px\]{height:32px}.h-11{height:2.75rem}.h-\[20px\]{height:20px}.h-20{height:5rem}.h-0{height:0px}.h-\[44px\]{height:44px}.h-\[35px\]{height:35px}.h-\[322px\]{height:322px}.h-\[470px\]{height:470px}.h-12{height:3rem}.h-\[15px\]{height:15px}.h-\[28px\]{height:28px}.h-\[660px\]{height:660px}.h-\[36px\]{height:36px}.h-\[100px\]{height:100px}.h-\[38px\]{height:38px}.h-\[370px\]{height:370px}.h-\[45px\]{height:45px}.h-\[243px\]{height:243px}.h-px{height:1px}.h-64{height:16rem}.h-\[25px\]{height:25px}.h-\[800px\]{height:800px}.h-\[54px\]{height:54px}.h-7{height:1.75rem}.h-\[250px\]{height:250px}.h-\[50px\]{height:50px}.h-\[90px\]{height:90px}.h-\[600px\]{height:600px}.h-\[55px\]{height:55px}.h-32{height:8rem}.h-\[42px\]{height:42px}.h-\[115px\]{height:115px}.h-\[88px\]{height:88px}.h-\[285px\]{height:285px}.max-h-full{max-height:100%}.max-h-\[80px\]{max-height:80px}.max-h-\[calc\(100vh_-_180px\)\]{max-height:calc(100vh - 180px)}.min-h-\[290px\]{min-height:290px}.min-h-\[300px\]{min-height:300px}.w-\[70px\]{width:70px}.w-\[30px\]{width:30px}.w-\[65px\]{width:65px}.w-full{width:100%}.w-9\/12{width:75%}.w-3\/12{width:25%}.w-3{width:.75rem}.w-\[328px\]{width:328px}.w-\[360px\]{width:360px}.w-2\.5{width:.625rem}.w-2{width:.5rem}.w-\[90px\]{width:90px}.w-4{width:1rem}.w-\[128px\]{width:128px}.w-\[18px\]{width:18px}.w-\[233px\]{width:233px}.w-\[30\%\]{width:30%}.w-\[45\%\]{width:45%}.w-\[25\%\]{width:25%}.w-6\/12{width:50%}.w-11\/12{width:91.666667%}.w-7\/12{width:58.333333%}.w-\[498px\]{width:498px}.w-\[8px\]{width:8px}.w-2\/12{width:16.666667%}.w-\[250px\]{width:250px}.w-\[280px\]{width:280px}.w-\[15\%\]{width:15%}.w-\[80px\]{width:80px}.w-10\/12{width:83.333333%}.w-4\/12{width:33.333333%}.w-\[214px\]{width:214px}.w-\[16px\]{width:16px}.w-40{width:10rem}.w-10{width:2.5rem}.w-\[116px\]{width:116px}.w-\[154px\]{width:154px}.w-20{width:5rem}.w-8\/12{width:66.666667%}.w-\[185px\]{width:185px}.w-\[60px\]{width:60px}.w-1\/6{width:16.666667%}.w-4\/6{width:66.666667%}.w-\[43px\]{width:43px}.w-auto{width:auto}.w-\[270px\]{width:270px}.w-\[35px\]{width:35px}.w-\[32px\]{width:32px}.w-\[19px\]{width:19px}.w-\[90\%\]{width:90%}.w-5\/12{width:41.666667%}.w-\[100px\]{width:100px}.w-\[calc\(100\%_\+_2rem\)\]{width:calc(100% + 2rem)}.w-\[335px\]{width:335px}.\!w-\[1100px\]{width:1100px!important}.w-leftcontent{width:calc(100% - (300px + 1.5rem))}.w-\[300px\]{width:300px}.w-screen{width:100vw}.w-\[756px\]{width:756px}.w-\[36px\]{width:36px}.w-3\/4{width:75%}.w-\[350px\]{width:350px}.w-\[180px\]{width:180px}.w-1\/2{width:50%}.w-\[480px\]{width:480px}.w-52{width:13rem}.w-80{width:20rem}.w-\[243px\]{width:243px}.w-44{width:11rem}.w-2\/5{width:40%}.w-0{width:0px}.w-\[25px\]{width:25px}.w-\[1420px\]{width:1420px}.w-\[72px\]{width:72px}.w-\[150px\]{width:150px}.w-\[155px\]{width:155px}.w-\[964px\]{width:964px}.w-7{width:1.75rem}.w-\[65\%\]{width:65%}.w-\[450px\]{width:450px}.w-\[970px\]{width:970px}.w-\[320px\]{width:320px}.w-\[960px\]{width:960px}.w-\[650px\]{width:650px}.w-\[710px\]{width:710px}.w-\[728px\]{width:728px}.w-\[160px\]{width:160px}.w-\[400px\]{width:400px}.w-\[70\%\]{width:70%}.w-\[120px\]{width:120px}.w-24{width:6rem}.w-5{width:1.25rem}.w-\[190px\]{width:190px}.w-16{width:4rem}.w-\[175px\]{width:175px}.w-9{width:2.25rem}.w-\[141px\]{width:141px}.w-\[189px\]{width:189px}.w-\[50px\]{width:50px}.w-\[153px\]{width:153px}.min-w-\[238px\]{min-width:238px}.min-w-\[564px\]{min-width:564px}.min-w-\[10rem\]{min-width:10rem}.min-w-0{min-width:0px}.max-w-\[700px\]{max-width:700px}.max-w-full{max-width:100%}.max-w-\[1100px\]{max-width:1100px}.max-w-\[150px\]{max-width:150px}.max-w-7xl{max-width:80rem}.max-w-screen-xl{max-width:1280px}.flex-none{flex:none}.flex-grow,.grow{flex-grow:1}.grow-0{flex-grow:0}.basis-1\/4{flex-basis:25%}.basis-1\/2{flex-basis:50%}.-translate-x-1\/2{--tw-translate-x: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-180{--tw-rotate: 180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes pulse{50%{opacity:.5}}.animate-pulse{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}@keyframes blink{0%,to{opacity:0}50%{opacity:100%}}.animate-blink{animation:blink 1s infinite}.cursor-pointer{cursor:pointer}.scroll-pt-\[88px\]{scroll-padding-top:88px}.list-disc{list-style-type:disc}.list-decimal{list-style-type:decimal}.columns-4{-moz-columns:4;columns:4}.columns-3{-moz-columns:3;columns:3}.grid-flow-col{grid-auto-flow:column}.grid-flow-dense{grid-auto-flow:dense}.grid-cols-6{grid-template-columns:repeat(6,minmax(0,1fr))}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.grid-cols-\[60px_60px_60px_60px\]{grid-template-columns:60px 60px 60px 60px}.grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}.grid-cols-\[770px_1fr\]{grid-template-columns:770px 1fr}.grid-rows-2{grid-template-rows:repeat(2,minmax(0,1fr))}.grid-rows-3{grid-template-rows:repeat(3,minmax(0,1fr))}.flex-row{flex-direction:row}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-start{align-items:flex-start}.items-end{align-items:flex-end}.items-center{align-items:center}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-4{gap:1rem}.gap-5{gap:1.25rem}.gap-2{gap:.5rem}.gap-6{gap:1.5rem}.gap-3{gap:.75rem}.gap-0\.5{gap:.125rem}.gap-0{gap:0px}.gap-1{gap:.25rem}.gap-7{gap:1.75rem}.gap-2\.5{gap:.625rem}.gap-\[10px\]{gap:10px}.gap-1\.5{gap:.375rem}.gap-10{gap:2.5rem}.gap-8{gap:2rem}.gap-x-6{-moz-column-gap:1.5rem;column-gap:1.5rem}.gap-y-5{row-gap:1.25rem}.space-y-3>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.75rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.75rem * var(--tw-space-y-reverse))}.space-y-5>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(1.25rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1.25rem * var(--tw-space-y-reverse))}.divide-x-2>:not([hidden])~:not([hidden]){--tw-divide-x-reverse: 0;border-right-width:calc(2px * var(--tw-divide-x-reverse));border-left-width:calc(2px * calc(1 - var(--tw-divide-x-reverse)))}.divide-x>:not([hidden])~:not([hidden]){--tw-divide-x-reverse: 0;border-right-width:calc(1px * var(--tw-divide-x-reverse));border-left-width:calc(1px * calc(1 - var(--tw-divide-x-reverse)))}.divide-gray-400>:not([hidden])~:not([hidden]){--tw-divide-opacity: 1;border-color:rgb(156 163 175 / var(--tw-divide-opacity))}.divide-cnn_dark>:not([hidden])~:not([hidden]){--tw-divide-opacity: 1;border-color:rgb(35 35 35 / var(--tw-divide-opacity))}.divide-cnn_light_grey>:not([hidden])~:not([hidden]){--tw-divide-opacity: 1;border-color:rgb(219 219 219 / var(--tw-divide-opacity))}.self-stretch{align-self:stretch}.self-baseline{align-self:baseline}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.overflow-y-auto{overflow-y:auto}.overflow-y-hidden{overflow-y:hidden}.overscroll-none{overscroll-behavior:none}.scroll-smooth{scroll-behavior:smooth}.text-ellipsis{text-overflow:ellipsis}.whitespace-nowrap{white-space:nowrap}.rounded-none{border-radius:0}.rounded-full{border-radius:9999px}.rounded-sm{border-radius:.125rem}.rounded{border-radius:.25rem}.rounded-md{border-radius:.375rem}.rounded-\[8px\]{border-radius:8px}.border{border-width:1px}.border-4{border-width:4px}.border-2{border-width:2px}.border-\[3px\]{border-width:3px}.border-8{border-width:8px}.border-0{border-width:0px}.border-b{border-bottom-width:1px}.border-t{border-top-width:1px}.border-t-2{border-top-width:2px}.border-l{border-left-width:1px}.border-r{border-right-width:1px}.border-b-2{border-bottom-width:2px}.border-l-\[3px\]{border-left-width:3px}.border-l-4{border-left-width:4px}.border-cnn_red{--tw-border-opacity: 1;border-color:rgb(204 0 0 / var(--tw-border-opacity))}.border-cnn_black{--tw-border-opacity: 1;border-color:rgb(51 51 51 / var(--tw-border-opacity))}.border-white{--tw-border-opacity: 1;border-color:rgb(255 255 255 / var(--tw-border-opacity))}.border-cnn_light_grey2{--tw-border-opacity: 1;border-color:rgb(227 232 235 / var(--tw-border-opacity))}.border-cnn_grey{--tw-border-opacity: 1;border-color:rgb(203 203 203 / var(--tw-border-opacity))}.border-cnn_light_grey{--tw-border-opacity: 1;border-color:rgb(219 219 219 / var(--tw-border-opacity))}.border-\[\#eceff1\]{--tw-border-opacity: 1;border-color:rgb(236 239 241 / var(--tw-border-opacity))}.border-transparent{border-color:transparent}.border-cnn_black_light3{--tw-border-opacity: 1;border-color:rgb(144 144 144 / var(--tw-border-opacity))}.border-cnn_light_grey3{--tw-border-opacity: 1;border-color:rgb(242 244 245 / var(--tw-border-opacity))}.border-b-cnn_black_light{--tw-border-opacity: 1;border-bottom-color:rgb(70 70 70 / var(--tw-border-opacity))}.border-t-cnn_dark{--tw-border-opacity: 1;border-top-color:rgb(35 35 35 / var(--tw-border-opacity))}.border-t-cnn_light_grey{--tw-border-opacity: 1;border-top-color:rgb(219 219 219 / var(--tw-border-opacity))}.border-l-cnn_grey{--tw-border-opacity: 1;border-left-color:rgb(203 203 203 / var(--tw-border-opacity))}.border-r-cnn_grey{--tw-border-opacity: 1;border-right-color:rgb(203 203 203 / var(--tw-border-opacity))}.border-b-cnn_light_grey{--tw-border-opacity: 1;border-bottom-color:rgb(219 219 219 / var(--tw-border-opacity))}.border-b-cnn_black_light3{--tw-border-opacity: 1;border-bottom-color:rgb(144 144 144 / var(--tw-border-opacity))}.border-t-cnn_black_light{--tw-border-opacity: 1;border-top-color:rgb(70 70 70 / var(--tw-border-opacity))}.border-r-cnn_black_light{--tw-border-opacity: 1;border-right-color:rgb(70 70 70 / var(--tw-border-opacity))}.bg-placeholder{--tw-bg-opacity: 1;background-color:rgb(227 232 235 / var(--tw-bg-opacity))}.bg-cnn_red{--tw-bg-opacity: 1;background-color:rgb(204 0 0 / var(--tw-bg-opacity))}.bg-cnn_black{--tw-bg-opacity: 1;background-color:rgb(51 51 51 / var(--tw-bg-opacity))}.bg-black\/70{background-color:#000000b3}.bg-black\/60{background-color:#0009}.bg-cnn_black_light3{--tw-bg-opacity: 1;background-color:rgb(144 144 144 / var(--tw-bg-opacity))}.bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.bg-cnn_light_grey3{--tw-bg-opacity: 1;background-color:rgb(242 244 245 / var(--tw-bg-opacity))}.bg-cnn_black_light2{--tw-bg-opacity: 1;background-color:rgb(39 39 39 / var(--tw-bg-opacity))}.bg-black{--tw-bg-opacity: 1;background-color:rgb(0 0 0 / var(--tw-bg-opacity))}.bg-cnn_light_grey2{--tw-bg-opacity: 1;background-color:rgb(227 232 235 / var(--tw-bg-opacity))}.bg-\[\#E6E6E6\]{--tw-bg-opacity: 1;background-color:rgb(230 230 230 / var(--tw-bg-opacity))}.bg-cnn_dark{--tw-bg-opacity: 1;background-color:rgb(35 35 35 / var(--tw-bg-opacity))}.bg-cnn_black_light{--tw-bg-opacity: 1;background-color:rgb(70 70 70 / var(--tw-bg-opacity))}.bg-cnn_red_dark{--tw-bg-opacity: 1;background-color:rgb(163 0 0 / var(--tw-bg-opacity))}.bg-cnn_orange{--tw-bg-opacity: 1;background-color:rgb(245 166 35 / var(--tw-bg-opacity))}.bg-\[\#eceff1\]{--tw-bg-opacity: 1;background-color:rgb(236 239 241 / var(--tw-bg-opacity))}.bg-cnn_grey{--tw-bg-opacity: 1;background-color:rgb(203 203 203 / var(--tw-bg-opacity))}.bg-facebook{--tw-bg-opacity: 1;background-color:rgb(57 87 154 / var(--tw-bg-opacity))}.bg-linkedin{--tw-bg-opacity: 1;background-color:rgb(27 120 178 / var(--tw-bg-opacity))}.bg-\[\#F2F4F5\]{--tw-bg-opacity: 1;background-color:rgb(242 244 245 / var(--tw-bg-opacity))}.bg-green{--tw-bg-opacity: 1;background-color:rgb(102 156 65 / var(--tw-bg-opacity))}.bg-twitter{--tw-bg-opacity: 1;background-color:rgb(26 169 228 / var(--tw-bg-opacity))}.bg-gray-200{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity))}.bg-black\/25{background-color:#00000040}.bg-\[\#eeeeee\]{--tw-bg-opacity: 1;background-color:rgb(238 238 238 / var(--tw-bg-opacity))}.bg-\[\#585858\]{--tw-bg-opacity: 1;background-color:rgb(88 88 88 / var(--tw-bg-opacity))}.bg-gradient-to-t{background-image:linear-gradient(to top,var(--tw-gradient-stops))}.bg-user-bg{background-image:url(https://cdn.cnnindonesia.com/cnnid/images/user.png?v=10.6.7)}.bg-instagram{background-image:radial-gradient(ellipse at left bottom,#febe20 15%,#b7348f 55%,#285aeb 100%)}.bg-\[url\(\'https\:\/\/cdn\.cnnindonesia\.com\/cnnid\/images\/404_wayang\.png\'\)\,_url\(\'https\:\/\/cdn\.cnnindonesia\.com\/cnnid\/images\/404_mic\.png\'\)\]{background-image:url(https://cdn.cnnindonesia.com/cnnid/images/404_wayang.png),url(https://cdn.cnnindonesia.com/cnnid/images/404_mic.png)}.bg-\[url\(https\:\/\/akcdn\.detik\.net\.id\/visual\/2016\/04\/27\/c2f691a0-1904-4f0a-9885-7d61232f1f91\.jpg\?w\=1840\&q\=80\)\]{background-image:url(https://akcdn.detik.net.id/visual/2016/04/27/c2f691a0-1904-4f0a-9885-7d61232f1f91.jpg?w=1840&q=80)}.bg-gradient-to-b{background-image:linear-gradient(to bottom,var(--tw-gradient-stops))}.bg-gradient-to-r{background-image:linear-gradient(to right,var(--tw-gradient-stops))}.bg-\[url\(\'https\:\/\/tpc\.googlesyndication\.com\/pagead\/imgad\?id\=CICAgKCLv-6XmwEQARgBMgiAZpnvZgutTw\'\)\]{background-image:url(https://tpc.googlesyndication.com/pagead/imgad?id=CICAgKCLv-6XmwEQARgBMgiAZpnvZgutTw)}.from-black{--tw-gradient-from: #000;--tw-gradient-to: rgb(0 0 0 / 0);--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)}.from-cnn_light_grey3{--tw-gradient-from: #f2f4f5;--tw-gradient-to: rgb(242 244 245 / 0);--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)}.to-transparent{--tw-gradient-to: transparent}.to-cnn_light_grey2{--tw-gradient-to: #E3E8EB}.to-cnn_black{--tw-gradient-to: #333}.bg-cover{background-size:cover}.bg-\[size\:auto\,_auto\,_auto\,_auto\]{background-size:auto,auto,auto,auto}.\!bg-cover{background-size:cover!important}.bg-\[position\:top_left\,_right_150px\]{background-position:top left,right 150px}.bg-center{background-position:center}.bg-no-repeat{background-repeat:no-repeat}.object-contain{-o-object-fit:contain;object-fit:contain}.object-cover{-o-object-fit:cover;object-fit:cover}.object-top{-o-object-position:top;object-position:top}.p-2{padding:.5rem}.p-3{padding:.75rem}.p-4{padding:1rem}.p-1\.5{padding:.375rem}.p-1{padding:.25rem}.p-\[20px\]{padding:20px}.p-\[64px\]{padding:64px}.p-10{padding:2.5rem}.p-5{padding:1.25rem}.p-2\.5{padding:.625rem}.p-\[5px\]{padding:5px}.py-3{padding-top:.75rem;padding-bottom:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-5{padding-top:1.25rem;padding-bottom:1.25rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.py-0\.5{padding-top:.125rem;padding-bottom:.125rem}.px-1\.5{padding-left:.375rem;padding-right:.375rem}.py-0{padding-top:0;padding-bottom:0}.px-1{padding-left:.25rem;padding-right:.25rem}.py-4{padding-top:1rem;padding-bottom:1rem}.px-5{padding-left:1.25rem;padding-right:1.25rem}.px-0{padding-left:0;padding-right:0}.px-\[10px\]{padding-left:10px;padding-right:10px}.py-1\.5{padding-top:.375rem;padding-bottom:.375rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.px-2\.5{padding-left:.625rem;padding-right:.625rem}.py-6{padding-top:1.5rem;padding-bottom:1.5rem}.py-10{padding-top:2.5rem;padding-bottom:2.5rem}.py-7{padding-top:1.75rem;padding-bottom:1.75rem}.py-8{padding-top:2rem;padding-bottom:2rem}.py-\[34px\]{padding-top:34px;padding-bottom:34px}.px-6{padding-left:1.5rem;padding-right:1.5rem}.pb-4{padding-bottom:1rem}.pl-3{padding-left:.75rem}.pt-5{padding-top:1.25rem}.pr-2{padding-right:.5rem}.pr-5{padding-right:1.25rem}.pl-4{padding-left:1rem}.pt-4{padding-top:1rem}.pb-3{padding-bottom:.75rem}.pr-8{padding-right:2rem}.pr-6{padding-right:1.5rem}.pb-2{padding-bottom:.5rem}.pl-\[20px\]{padding-left:20px}.pr-1{padding-right:.25rem}.pr-10{padding-right:2.5rem}.pl-6{padding-left:1.5rem}.pr-2\.5{padding-right:.625rem}.pt-1{padding-top:.25rem}.pb-2\.5{padding-bottom:.625rem}.pt-12{padding-top:3rem}.pb-5{padding-bottom:1.25rem}.pl-9{padding-left:2.25rem}.\!pb-\[220px\]{padding-bottom:220px!important}.pt-20{padding-top:5rem}.pt-2{padding-top:.5rem}.pr-9{padding-right:2.25rem}.pt-6{padding-top:1.5rem}.pt-\[30px\]{padding-top:30px}.pr-3{padding-right:.75rem}.pl-5{padding-left:1.25rem}.pb-28{padding-bottom:7rem}.pl-2\.5{padding-left:.625rem}.pl-2{padding-left:.5rem}.pb-8{padding-bottom:2rem}.pb-0{padding-bottom:0}.pt-0{padding-top:0}.pt-14{padding-top:3.5rem}.pt-3{padding-top:.75rem}.text-left{text-align:left}.text-center{text-align:center}.text-right{text-align:right}.font-roboto{font-family:Roboto,Arial,Helvetica,sans-serif}.font-saira{font-family:Saira,Arial,Helvetica,sans-serif}.font-cnnclock{font-family:CNN Clock Condensed,Arial,Helvetica,sans-serif}.font-merriweather{font-family:Merriweather,Times New Roman,serif}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xs{font-size:.75rem;line-height:1rem}.text-base{font-size:1rem;line-height:1.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-\[38px\]{font-size:38px}.text-\[13px\]{font-size:13px}.text-2xl{font-size:1.5rem;line-height:2rem}.text-\[22px\]{font-size:22px}.text-\[32px\]{font-size:32px}.text-\[26px\]{font-size:26px}.text-3xl{font-size:1.875rem;line-height:2.25rem}.text-\[10px\]{font-size:10px}.text-5xl{font-size:3rem;line-height:1}.text-\[100px\]{font-size:100px}.text-4xl{font-size:2.25rem;line-height:2.5rem}.text-\[15px\]{font-size:15px}.text-\[28px\]{font-size:28px}.text-\[23px\]{font-size:23px}.\!font-bold{font-weight:700!important}.font-medium{font-weight:500}.font-semibold{font-weight:600}.font-bold{font-weight:700}.font-normal{font-weight:400}.font-light{font-weight:300}.font-thin{font-weight:100}.uppercase{text-transform:uppercase}.italic{font-style:italic}.leading-5{line-height:1.25rem}.leading-none{line-height:1}.leading-normal{line-height:1.5}.leading-9{line-height:2.25rem}.leading-\[18px\]{line-height:18px}.leading-6{line-height:1.5rem}.leading-tight{line-height:1.25}.text-cnn_black_light{--tw-text-opacity: 1;color:rgb(70 70 70 / var(--tw-text-opacity))}.text-cnn_black_light3{--tw-text-opacity: 1;color:rgb(144 144 144 / var(--tw-text-opacity))}.text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.text-cnn_red{--tw-text-opacity: 1;color:rgb(204 0 0 / var(--tw-text-opacity))}.text-cnn_black{--tw-text-opacity: 1;color:rgb(51 51 51 / var(--tw-text-opacity))}.text-cnn_light_grey{--tw-text-opacity: 1;color:rgb(219 219 219 / var(--tw-text-opacity))}.text-cnn_grey{--tw-text-opacity: 1;color:rgb(203 203 203 / var(--tw-text-opacity))}.text-black{--tw-text-opacity: 1;color:rgb(0 0 0 / var(--tw-text-opacity))}.text-slate-400{--tw-text-opacity: 1;color:rgb(148 163 184 / var(--tw-text-opacity))}.text-cnn_black_light2{--tw-text-opacity: 1;color:rgb(39 39 39 / var(--tw-text-opacity))}.text-cnn_orange{--tw-text-opacity: 1;color:rgb(245 166 35 / var(--tw-text-opacity))}.text-\[\#646464\]{--tw-text-opacity: 1;color:rgb(100 100 100 / var(--tw-text-opacity))}.text-cnn_light_grey2{--tw-text-opacity: 1;color:rgb(227 232 235 / var(--tw-text-opacity))}.text-cnn_black_light\/80{color:#464646cc}.underline{text-decoration-line:underline}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.opacity-100{opacity:1}.opacity-0{opacity:0}.opacity-80{opacity:.8}.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-sm{--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / .05);--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-cnn_light_grey2{--tw-shadow-color: #E3E8EB;--tw-shadow: var(--tw-shadow-colored)}.shadow-black{--tw-shadow-color: #000;--tw-shadow: var(--tw-shadow-colored)}.outline-none{outline:2px solid transparent;outline-offset:2px}.drop-shadow-md{--tw-drop-shadow: drop-shadow(0 4px 3px rgb(0 0 0 / .07)) drop-shadow(0 2px 2px rgb(0 0 0 / .06));filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.invert{--tw-invert: invert(100%);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.backdrop-blur-md{--tw-backdrop-blur: blur(12px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.transition-\[max-height\]{transition-property:max-height;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-500{transition-duration:.5s}.duration-200{transition-duration:.2s}.ease-linear{transition-timing-function:linear}.line-clamp-2{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}.line-clamp-3{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3}.line-clamp-4{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:4}.line-clamp-8{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:8}.\@container{container-type:inline-size}.marker\:text-transparent *::marker{color:transparent}.marker\:text-cnn_red *::marker{color:#c00}.marker\:text-transparent::marker{color:transparent}.marker\:text-cnn_red::marker{color:#c00}.placeholder\:text-cnn_black_light3::-moz-placeholder{--tw-text-opacity: 1;color:rgb(144 144 144 / var(--tw-text-opacity))}.placeholder\:text-cnn_black_light3::placeholder{--tw-text-opacity: 1;color:rgb(144 144 144 / var(--tw-text-opacity))}.before\:absolute:before{content:var(--tw-content);position:absolute}.before\:bottom-0:before{content:var(--tw-content);bottom:0}.before\:left-0:before{content:var(--tw-content);left:0}.before\:left-4:before{content:var(--tw-content);left:1rem}.before\:left-3:before{content:var(--tw-content);left:.75rem}.before\:-left-5:before{content:var(--tw-content);left:-1.25rem}.before\:-top-\[3px\]:before{content:var(--tw-content);top:-3px}.before\:left-\[5px\]:before{content:var(--tw-content);left:5px}.before\:top-0\.5:before{content:var(--tw-content);top:.125rem}.before\:top-0:before{content:var(--tw-content);top:0}.before\:left-1\/2:before{content:var(--tw-content);left:50%}.before\:right-0:before{content:var(--tw-content);right:0}.before\:top-3:before{content:var(--tw-content);top:.75rem}.before\:-top-5:before{content:var(--tw-content);top:-1.25rem}.before\:top-5:before{content:var(--tw-content);top:1.25rem}.before\:z-10:before{content:var(--tw-content);z-index:10}.before\:-z-10:before{content:var(--tw-content);z-index:-10}.before\:-ml-4:before{content:var(--tw-content);margin-left:-1rem}.before\:block:before{content:var(--tw-content);display:block}.before\:h-\[3px\]:before{content:var(--tw-content);height:3px}.before\:h-2:before{content:var(--tw-content);height:.5rem}.before\:h-full:before{content:var(--tw-content);height:100%}.before\:h-12:before{content:var(--tw-content);height:3rem}.before\:h-\[65px\]:before{content:var(--tw-content);height:65px}.before\:h-1\/5:before{content:var(--tw-content);height:20%}.before\:h-0\.5:before{content:var(--tw-content);height:.125rem}.before\:h-0:before{content:var(--tw-content);height:0px}.before\:h-\[75px\]:before{content:var(--tw-content);height:75px}.before\:h-\[30\%\]:before{content:var(--tw-content);height:30%}.before\:h-2\.5:before{content:var(--tw-content);height:.625rem}.before\:w-\[32px\]:before{content:var(--tw-content);width:32px}.before\:w-2:before{content:var(--tw-content);width:.5rem}.before\:w-\[1px\]:before{content:var(--tw-content);width:1px}.before\:w-full:before{content:var(--tw-content);width:100%}.before\:w-10:before{content:var(--tw-content);width:2.5rem}.before\:w-\[200px\]:before{content:var(--tw-content);width:200px}.before\:w-2\.5:before{content:var(--tw-content);width:.625rem}.before\:rounded-\[50\%\]:before{content:var(--tw-content);border-radius:50%}.before\:rounded-full:before{content:var(--tw-content);border-radius:9999px}.before\:bg-cnn_red:before{content:var(--tw-content);--tw-bg-opacity: 1;background-color:rgb(204 0 0 / var(--tw-bg-opacity))}.before\:bg-white:before{content:var(--tw-content);--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.before\:bg-black:before{content:var(--tw-content);--tw-bg-opacity: 1;background-color:rgb(0 0 0 / var(--tw-bg-opacity))}.before\:bg-black\/60:before{content:var(--tw-content);background-color:#0009}.before\:bg-cnn_black_light2:before{content:var(--tw-content);--tw-bg-opacity: 1;background-color:rgb(39 39 39 / var(--tw-bg-opacity))}.before\:bg-cnn_light_grey2:before{content:var(--tw-content);--tw-bg-opacity: 1;background-color:rgb(227 232 235 / var(--tw-bg-opacity))}.before\:bg-gradient-to-r:before{content:var(--tw-content);background-image:linear-gradient(to right,var(--tw-gradient-stops))}.before\:bg-gradient-to-b:before{content:var(--tw-content);background-image:linear-gradient(to bottom,var(--tw-gradient-stops))}.before\:bg-gradient-to-t:before{content:var(--tw-content);background-image:linear-gradient(to top,var(--tw-gradient-stops))}.before\:from-black:before{content:var(--tw-content);--tw-gradient-from: #000;--tw-gradient-to: rgb(0 0 0 / 0);--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)}.before\:to-transparent:before{content:var(--tw-content);--tw-gradient-to: transparent}.before\:to-white:before{content:var(--tw-content);--tw-gradient-to: #fff}.before\:content-\[\'\'\]:before{--tw-content: "";content:var(--tw-content)}.after\:absolute:after{content:var(--tw-content);position:absolute}.after\:bottom-0:after{content:var(--tw-content);bottom:0}.after\:left-2:after{content:var(--tw-content);left:.5rem}.after\:top-0\.5:after{content:var(--tw-content);top:.125rem}.after\:left-0:after{content:var(--tw-content);left:0}.after\:top-0:after{content:var(--tw-content);top:0}.after\:bottom-4:after{content:var(--tw-content);bottom:1rem}.after\:right-0:after{content:var(--tw-content);right:0}.after\:top-4:after{content:var(--tw-content);top:1rem}.after\:-bottom-10:after{content:var(--tw-content);bottom:-2.5rem}.after\:-left-\[17px\]:after{content:var(--tw-content);left:-17px}.after\:-bottom-4:after{content:var(--tw-content);bottom:-1rem}.after\:left-\[3px\]:after{content:var(--tw-content);left:3px}.after\:top-1\.5:after{content:var(--tw-content);top:.375rem}.after\:-bottom-0:after{content:var(--tw-content);bottom:-0px}.after\:left-\[4px\]:after{content:var(--tw-content);left:4px}.after\:top-1:after{content:var(--tw-content);top:.25rem}.after\:z-10:after{content:var(--tw-content);z-index:10}.after\:mt-4:after{content:var(--tw-content);margin-top:1rem}.after\:block:after{content:var(--tw-content);display:block}.after\:h-\[3px\]:after{content:var(--tw-content);height:3px}.after\:h-\[11px\]:after{content:var(--tw-content);height:11px}.after\:h-\[20px\]:after{content:var(--tw-content);height:20px}.after\:h-1\/5:after{content:var(--tw-content);height:20%}.after\:\!w-\[calc\(100\%_-_16px\)\]:after{content:var(--tw-content);width:calc(100% - 16px)!important}.after\:w-0:after{content:var(--tw-content);width:0px}.after\:w-\[calc\(100\%_-_16px\)\]:after{content:var(--tw-content);width:calc(100% - 16px)}.after\:w-\[11px\]:after{content:var(--tw-content);width:11px}.after\:w-full:after{content:var(--tw-content);width:100%}.after\:w-10:after{content:var(--tw-content);width:2.5rem}.after\:w-0\.5:after{content:var(--tw-content);width:.125rem}.after\:w-\[1px\]:after{content:var(--tw-content);width:1px}.after\:animate-scale:after{content:var(--tw-content);animation:scaleCenter .2s linear}.after\:rounded-full:after{content:var(--tw-content);border-radius:9999px}.after\:bg-cnn_red:after{content:var(--tw-content);--tw-bg-opacity: 1;background-color:rgb(204 0 0 / var(--tw-bg-opacity))}.after\:bg-cnn_light_grey2:after{content:var(--tw-content);--tw-bg-opacity: 1;background-color:rgb(227 232 235 / var(--tw-bg-opacity))}.after\:bg-cnn_black_light3:after{content:var(--tw-content);--tw-bg-opacity: 1;background-color:rgb(144 144 144 / var(--tw-bg-opacity))}.after\:bg-gradient-to-t:after{content:var(--tw-content);background-image:linear-gradient(to top,var(--tw-gradient-stops))}.after\:bg-gradient-to-r:after{content:var(--tw-content);background-image:linear-gradient(to right,var(--tw-gradient-stops))}.after\:from-white:after{content:var(--tw-content);--tw-gradient-from: #fff;--tw-gradient-to: rgb(255 255 255 / 0);--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)}.after\:from-transparent:after{content:var(--tw-content);--tw-gradient-from: transparent;--tw-gradient-to: rgb(0 0 0 / 0);--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)}.after\:from-black:after{content:var(--tw-content);--tw-gradient-from: #000;--tw-gradient-to: rgb(0 0 0 / 0);--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)}.after\:to-black:after{content:var(--tw-content);--tw-gradient-to: #000}.after\:opacity-90:after{content:var(--tw-content);opacity:.9}.after\:transition-all:after{content:var(--tw-content);transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.after\:content-\[\'\'\]:after{--tw-content: "";content:var(--tw-content)}.last\:border-b-0:last-child{border-bottom-width:0px}.hover\:cursor-pointer:hover{cursor:pointer}.hover\:border-b-2:hover{border-bottom-width:2px}.hover\:border-cnn_red:hover{--tw-border-opacity: 1;border-color:rgb(204 0 0 / var(--tw-border-opacity))}.hover\:bg-white:hover{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.hover\:bg-cnn_red:hover{--tw-bg-opacity: 1;background-color:rgb(204 0 0 / var(--tw-bg-opacity))}.hover\:bg-cnn_black_light:hover{--tw-bg-opacity: 1;background-color:rgb(70 70 70 / var(--tw-bg-opacity))}.hover\:bg-cnn_black:hover{--tw-bg-opacity: 1;background-color:rgb(51 51 51 / var(--tw-bg-opacity))}.hover\:bg-cnn_red_dark:hover{--tw-bg-opacity: 1;background-color:rgb(163 0 0 / var(--tw-bg-opacity))}.hover\:bg-cnn_grey:hover{--tw-bg-opacity: 1;background-color:rgb(203 203 203 / var(--tw-bg-opacity))}.hover\:bg-facebook:hover{--tw-bg-opacity: 1;background-color:rgb(57 87 154 / var(--tw-bg-opacity))}.hover\:bg-black:hover{--tw-bg-opacity: 1;background-color:rgb(0 0 0 / var(--tw-bg-opacity))}.hover\:bg-linkedin:hover{--tw-bg-opacity: 1;background-color:rgb(27 120 178 / var(--tw-bg-opacity))}.hover\:bg-none:hover{background-image:none}.hover\:bg-instagram:hover{background-image:radial-gradient(ellipse at left bottom,#febe20 15%,#b7348f 55%,#285aeb 100%)}.hover\:text-cnn_red:hover{--tw-text-opacity: 1;color:rgb(204 0 0 / var(--tw-text-opacity))}.hover\:text-white:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.hover\:underline:hover{text-decoration-line:underline}.hover\:opacity-50:hover{opacity:.5}.hover\:after\:w-\[calc\(100\%_-_16px\)\]:hover:after{content:var(--tw-content);width:calc(100% - 16px)}@keyframes scaleCenter{0%{content:var(--tw-content);transform:scale(0)}to{content:var(--tw-content);transform:scale(1)}}.hover\:after\:animate-scale:hover:after{content:var(--tw-content);animation:scaleCenter .2s linear}.focus\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.group[open] .group-open\:rotate-180{--tw-rotate: 180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.group:hover .group-hover\:block{display:block}.group:hover .group-hover\:inline{display:inline}.group:hover .group-hover\:hidden{display:none}.group:hover .group-hover\:scale-110{--tw-scale-x: 1.1;--tw-scale-y: 1.1;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.group:hover .group-hover\:text-cnn_red{--tw-text-opacity: 1;color:rgb(204 0 0 / var(--tw-text-opacity))}.group:hover .group-hover\:text-cnn_orange{--tw-text-opacity: 1;color:rgb(245 166 35 / var(--tw-text-opacity))}@container (min-width: 20rem){.\@xs\:flex-col{flex-direction:column}}@container (min-width: 32rem){.\@lg\:aspect-w-16{position:relative;padding-bottom:calc(var(--tw-aspect-h) / var(--tw-aspect-w) * 100%);--tw-aspect-w: 16}.\@lg\:aspect-w-16>*{position:absolute;height:100%;width:100%;inset:0}.\@lg\:aspect-h-9{--tw-aspect-h: 9}.\@lg\:my-5{margin-top:1.25rem;margin-bottom:1.25rem}.\@lg\:mb-2{margin-bottom:.5rem}.\@lg\:mt-1{margin-top:.25rem}.\@lg\:ml-3{margin-left:.75rem}.\@lg\:mb-0{margin-bottom:0}.\@lg\:block{display:block}.\@lg\:grid{display:grid}.\@lg\:h-\[14px\]{height:14px}.\@lg\:h-3{height:.75rem}.\@lg\:h-5{height:1.25rem}.\@lg\:w-full{width:100%}.\@lg\:w-7\/12{width:58.333333%}.\@lg\:w-5\/12{width:41.666667%}.\@lg\:w-1\/2{width:50%}.\@lg\:grid-flow-dense{grid-auto-flow:dense}.\@lg\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.\@lg\:flex-row{flex-direction:row}.\@lg\:flex-col{flex-direction:column}.\@lg\:border-l{border-left-width:1px}.\@lg\:border-t-0{border-top-width:0px}.\@lg\:px-5{padding-left:1.25rem;padding-right:1.25rem}.\@lg\:pb-5{padding-bottom:1.25rem}.\@lg\:pt-40{padding-top:10rem}.\@lg\:pl-3{padding-left:.75rem}.\@lg\:pb-0{padding-bottom:0}.\@lg\:text-sm{font-size:.875rem;line-height:1.25rem}.\@lg\:text-xs{font-size:.75rem;line-height:1rem}.\@lg\:text-xl{font-size:1.25rem;line-height:1.75rem}.\@lg\:line-clamp-none{-webkit-line-clamp:unset}}@container (min-width: 42rem){.\@2xl\:mb-5{margin-bottom:1.25rem}.\@2xl\:h-\[350px\]{height:350px}.\@2xl\:max-w-none{max-width:none}}@container (min-width: 64rem){.\@5xl\:mb-0{margin-bottom:0}.\@5xl\:ml-0{margin-left:0}.\@5xl\:h-\[495px\]{height:495px}.\@5xl\:bg-\[\#E6E6E6\]{--tw-bg-opacity: 1;background-color:rgb(230 230 230 / var(--tw-bg-opacity))}.\@5xl\:p-4{padding:1rem}}.dark .dark\:border-b-cnn_black_light{--tw-border-opacity: 1;border-bottom-color:rgb(70 70 70 / var(--tw-border-opacity))}.dark .dark\:bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.dark .dark\:bg-cnn_red{--tw-bg-opacity: 1;background-color:rgb(204 0 0 / var(--tw-bg-opacity))}.dark .dark\:bg-cnn_black_light2{--tw-bg-opacity: 1;background-color:rgb(39 39 39 / var(--tw-bg-opacity))}.dark .dark\:bg-cnn_dark{--tw-bg-opacity: 1;background-color:rgb(35 35 35 / var(--tw-bg-opacity))}.dark .dark\:bg-gray-700{--tw-bg-opacity: 1;background-color:rgb(55 65 81 / var(--tw-bg-opacity))}.dark .dark\:bg-black{--tw-bg-opacity: 1;background-color:rgb(0 0 0 / var(--tw-bg-opacity))}.dark .dark\:text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.dark .dark\:text-cnn_red{--tw-text-opacity: 1;color:rgb(204 0 0 / var(--tw-text-opacity))}.dark .dark\:invert{--tw-invert: invert(100%);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.dark .dark\:hover\:bg-cnn_black:hover{--tw-bg-opacity: 1;background-color:rgb(51 51 51 / var(--tw-bg-opacity))}.dark .dark\:hover\:text-cnn_red:hover{--tw-text-opacity: 1;color:rgb(204 0 0 / var(--tw-text-opacity))}@media (min-width: 768px){.md\:grid-flow-col{grid-auto-flow:column}}.\[\&\>p\]\:mb-2>p{margin-bottom:.5rem}.\[\&\>p\]\:text-ellipsis>p{text-overflow:ellipsis}.\[\&\>p\]\:whitespace-nowrap>p{white-space:nowrap}.\[\&\>a\:hover\]\:text-white>a:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.\[\&\>a\]\:text-white>a{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.\[\&\>div\>article\>a\>span\>h2\]\:text-white>div>article>a>span>h2{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.\[\&\>a\>span\>\.label\]\:text-cnn_orange>a>span>.label{--tw-text-opacity: 1;color:rgb(245 166 35 / var(--tw-text-opacity))}.\[\&\>article\]\:w-full>article{width:100%}.\[\&\>article\]\:border-l-4>article{border-left-width:4px}.\[\&\>article\]\:border-b>article{border-bottom-width:1px}.\[\&\>article\]\:border-l-cnn_red>article{--tw-border-opacity: 1;border-left-color:rgb(204 0 0 / var(--tw-border-opacity))}.\[\&\>article\]\:border-b-cnn_light_grey2>article{--tw-border-opacity: 1;border-bottom-color:rgb(227 232 235 / var(--tw-border-opacity))}.\[\&\>article\]\:p-2>article{padding:.5rem}.\[\&\>article\:last-child\]\:ml-5>article:last-child{margin-left:1.25rem}.\[\&\>article\:last-child\]\:pl-5>article:last-child{padding-left:1.25rem}.\[\&\>article\>a\>span\>\.subjudul\]\:text-sm>article>a>span>.subjudul{font-size:.875rem;line-height:1.25rem}.\[\&\>li\>a\]\:text-sm>li>a{font-size:.875rem;line-height:1.25rem}.\[\&\>article\>a\>span\>h2\]\:text-sm>article>a>span>h2{font-size:.875rem;line-height:1.25rem}.\[\&\>article\>a\>span\>h2\]\:text-2xl>article>a>span>h2{font-size:1.5rem;line-height:2rem}.\[\&\>article\>a\>span\>h2\]\:font-normal>article>a>span>h2{font-weight:400}.\[\&\>article\>a\>span\>h2\]\:leading-6>article>a>span>h2{line-height:1.5rem}.\[\&\>article\>a\>span\>h2\]\:leading-none>article>a>span>h2{line-height:1}.\[\&\>article\>a\>span\>h2\]\:text-white>article>a>span>h2{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.\[\&\>article\>a\:hover\>span\>h2\]\:\!text-white>article>a:hover>span>h2{--tw-text-opacity: 1 !important;color:rgb(255 255 255 / var(--tw-text-opacity))!important}.\[\&\>article\>a\:hover\]\:text-white>article>a:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.\[\&\>article\>a\:hover\]\:underline>article>a:hover{text-decoration-line:underline}.\[\&\>article\>a\:hover\]\:decoration-white>article>a:hover{text-decoration-color:#fff}.\[\&\>img\]\:h-fit>img{height:-moz-fit-content;height:fit-content}.\[\&\:hover\>img\]\:rotate-180:hover>img{--tw-rotate: 180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.\[\&\>iframe\]\:absolute>iframe{position:absolute}.\[\&\>iframe\]\:top-0>iframe{top:0}.\[\&\>iframe\]\:bottom-0>iframe{bottom:0}.\[\&\>iframe\]\:left-0>iframe{left:0}.\[\&\>iframe\]\:right-0>iframe{right:0}.\[\&\>article\>a\]\:gap-2>article>a{gap:.5rem}.\[\&\>article\:first-child\]\:col-span-2>article:first-child{grid-column:span 2 / span 2}.\[\&\>article\:first-child\]\:row-span-4>article:first-child{grid-row:span 4 / span 4}.\[\&\>article\:first-child\]\:row-span-2>article:first-child{grid-row:span 2 / span 2}.\[\&\>article\:first-child\]\:ml-0>article:first-child{margin-left:0}.\[\&\>article\:first-child\]\:border-none>article:first-child{border-style:none}.\[\&\>article\:first-child\]\:pl-0>article:first-child{padding-left:0}.\[\&\>\.swiper-pagination-custom\]\:-order-1>.swiper-pagination-custom{order:-1}.\[\&\>\.swiper-pagination-custom\]\:mb-5>.swiper-pagination-custom{margin-bottom:1.25rem}.\[\&\>\.swiper-pagination-custom\]\:text-left>.swiper-pagination-custom{text-align:left}.\[\&\>\.swiper-pagination-custom\]\:text-white>.swiper-pagination-custom{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.\[\&\>a\>img\]\:inline-block>a>img{display:inline-block}@font-face{font-family:swiper-icons;src:url(data:application/font-woff;charset=utf-8;base64,\ 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);font-weight:400;font-style:normal}:root{--swiper-theme-color:#007aff}.swiper{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1}.swiper-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;box-sizing:content-box}.swiper-android .swiper-slide,.swiper-wrapper{transform:translateZ(0)}.swiper-pointer-events{touch-action:pan-y}.swiper-pointer-events.swiper-vertical{touch-action:pan-x}.swiper-slide{flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform}.swiper-slide-invisible-blank{visibility:hidden}.swiper-autoheight,.swiper-autoheight .swiper-slide{height:auto}.swiper-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-backface-hidden .swiper-slide{transform:translateZ(0);backface-visibility:hidden}.swiper-3d,.swiper-3d.swiper-css-mode .swiper-wrapper{perspective:1200px}.swiper-3d .swiper-cube-shadow,.swiper-3d .swiper-slide,.swiper-3d .swiper-slide-shadow,.swiper-3d .swiper-slide-shadow-bottom,.swiper-3d .swiper-slide-shadow-left,.swiper-3d .swiper-slide-shadow-right,.swiper-3d .swiper-slide-shadow-top,.swiper-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-3d .swiper-slide-shadow,.swiper-3d .swiper-slide-shadow-bottom,.swiper-3d .swiper-slide-shadow-left,.swiper-3d .swiper-slide-shadow-right,.swiper-3d .swiper-slide-shadow-top{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-3d .swiper-slide-shadow{background:rgba(0,0,0,.15)}.swiper-3d .swiper-slide-shadow-left{background-image:linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-3d .swiper-slide-shadow-right{background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-3d .swiper-slide-shadow-top{background-image:linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-3d .swiper-slide-shadow-bottom{background-image:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-css-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:start start}.swiper-horizontal.swiper-css-mode>.swiper-wrapper{scroll-snap-type:x mandatory}.swiper-vertical.swiper-css-mode>.swiper-wrapper{scroll-snap-type:y mandatory}.swiper-centered>.swiper-wrapper:before{content:"";flex-shrink:0;order:9999}.swiper-centered.swiper-horizontal>.swiper-wrapper>.swiper-slide:first-child{margin-inline-start:var(--swiper-centered-offset-before)}.swiper-centered.swiper-horizontal>.swiper-wrapper:before{height:100%;min-height:1px;width:var(--swiper-centered-offset-after)}.swiper-centered.swiper-vertical>.swiper-wrapper>.swiper-slide:first-child{margin-block-start:var(--swiper-centered-offset-before)}.swiper-centered.swiper-vertical>.swiper-wrapper:before{width:100%;min-width:1px;height:var(--swiper-centered-offset-after)}.swiper-centered>.swiper-wrapper>.swiper-slide{scroll-snap-align:center center;scroll-snap-stop:always}.swiper-pagination{position:absolute;text-align:center;transition:.3s opacity;transform:translateZ(0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-pagination-disabled>.swiper-pagination,.swiper-pagination.swiper-pagination-disabled{display:none!important}.swiper-horizontal>.swiper-pagination-bullets,.swiper-pagination-bullets.swiper-pagination-horizontal,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:10px;left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active,.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{transform:scale(.33)}.swiper-pagination-bullet{width:var(--swiper-pagination-bullet-width,var(--swiper-pagination-bullet-size,8px));height:var(--swiper-pagination-bullet-height,var(--swiper-pagination-bullet-size,8px));display:inline-block;border-radius:50%;background:var(--swiper-pagination-bullet-inactive-color,#000);opacity:var(--swiper-pagination-bullet-inactive-opacity, .2)}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet:only-child{display:none!important}.swiper-pagination-bullet-active{opacity:var(--swiper-pagination-bullet-opacity, 1);background:var(--swiper-pagination-color,var(--swiper-theme-color))}.swiper-pagination-vertical.swiper-pagination-bullets,.swiper-vertical>.swiper-pagination-bullets{right:10px;top:50%;transform:translate3d(0,-50%,0)}.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:var(--swiper-pagination-bullet-vertical-gap,6px) 0;display:block}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:.2s transform,.2s top}.swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 var(--swiper-pagination-bullet-horizontal-gap,4px)}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;transform:translate(-50%);white-space:nowrap}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s left}.swiper-horizontal.swiper-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s right}.swiper-pagination-progressbar{background:rgba(0,0,0,.25);position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-pagination-color,var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;transform:scale(0);transform-origin:left top}.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{transform-origin:right top}.swiper-horizontal>.swiper-pagination-progressbar,.swiper-pagination-progressbar.swiper-pagination-horizontal,.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite,.swiper-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:4px;left:0;top:0}.swiper-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-vertical,.swiper-vertical>.swiper-pagination-progressbar{width:4px;height:100%;left:0;top:0}.swiper-pagination-lock{display:none}.ads-slot-mrads{height:250px;width:300px}.swiper-button-prev.video-pilihan-swiper-prev,.swiper-button-next.video-pilihan-swiper-next{position:relative}.jadwal-program:where(.astro-LP3Y2VON){display:flex;font-size:14px}.jadwal-program:where(.astro-LP3Y2VON) ul:where(.astro-LP3Y2VON){list-style:none;margin:0;padding:0}.jadwal-program__broadcast:where(.astro-LP3Y2VON){width:140px;margin-top:30px;position:relative;background:#232323}.jadwal-program__broadcast:where(.astro-LP3Y2VON) ul:where(.astro-LP3Y2VON) li:where(.astro-LP3Y2VON){height:62px;background:#232323;color:#fff;padding:20px}.jadwal-program__broadcast:where(.astro-LP3Y2VON) ul:where(.astro-LP3Y2VON) li:where(.astro-LP3Y2VON).today{color:#c00}.jadwal-program__timeline:where(.astro-LP3Y2VON){background:#232323;width:100%;position:relative}.jadwal-program__timeline:where(.astro-LP3Y2VON):before{content:"";position:absolute;width:80px;border-left:20px solid #232323;top:30px;bottom:0;left:0;background:linear-gradient(90deg,#232323 0%,rgba(35,35,35,0) 100%);z-index:20;pointer-events:none}.jadwal-program__timeline:where(.astro-LP3Y2VON):after{content:"";position:absolute;width:80px;border-right:20px solid #232323;top:30px;bottom:0;right:0;background:linear-gradient(270deg,#232323 0%,rgba(35,35,35,0) 100%);z-index:20;pointer-events:none}.jadwal-program__time:where(.astro-LP3Y2VON) ul:where(.astro-LP3Y2VON){font-size:0}.jadwal-program__time:where(.astro-LP3Y2VON) ul:where(.astro-LP3Y2VON) li:where(.astro-LP3Y2VON){display:inline-block;background:#fff;font-size:14px;padding:0;height:30px}.jadwal-program__time:where(.astro-LP3Y2VON) ul:where(.astro-LP3Y2VON) li:where(.astro-LP3Y2VON):first-child{padding-left:20px}.jadwal-program__time-detail:where(.astro-LP3Y2VON){font-size:0;padding-top:6px}.jadwal-program__time-channel:where(.astro-LP3Y2VON){width:128px;display:inline-block;font-size:14px;border-left:1px solid #000;position:relative;height:20px}.jadwal-program__time-channel:where(.astro-LP3Y2VON) span:where(.astro-LP3Y2VON){position:absolute;top:-6px;background:#fff;left:-18px}.jadwal-program__name:where(.astro-LP3Y2VON) ul:where(.astro-LP3Y2VON) li:where(.astro-LP3Y2VON){position:relative;height:62px}.jadwal-program__name-detail:where(.astro-LP3Y2VON){display:inline-block;background:#464646;border:2px solid #232323;padding:8px;position:absolute;top:10px}.today:where(.astro-LP3Y2VON) .jadwal-program__name-detail:where(.astro-LP3Y2VON){background:#8B0304;border:2px solid #c00}.today:where(.astro-LP3Y2VON) .jadwal-program__name-detail:where(.astro-LP3Y2VON):hover{background:#fff;border:2px solid #c00}.today:where(.astro-LP3Y2VON) .jadwal-program__name-detail:where(.astro-LP3Y2VON):hover .jadwal-program__channel:where(.astro-LP3Y2VON){color:#c00}.today:where(.astro-LP3Y2VON) .jadwal-program__name-detail:where(.astro-LP3Y2VON):hover .jadwal-program__channel-time:where(.astro-LP3Y2VON){color:#464646}.jadwal-program__channel:where(.astro-LP3Y2VON){color:#fff;overflow:hidden;text-overflow:ellipsis}.jadwal-program__channel-time:where(.astro-LP3Y2VON){color:#cbcbcb}.jadwal-program:where(.astro-LP3Y2VON) .jam-limabelas:where(.astro-LP3Y2VON){width:128px}.jadwal-program:where(.astro-LP3Y2VON) .jam-setengah:where(.astro-LP3Y2VON){width:256px}.jadwal-program:where(.astro-LP3Y2VON) .jam-empatlima:where(.astro-LP3Y2VON){width:384px}.jadwal-program:where(.astro-LP3Y2VON) .jam-satu:where(.astro-LP3Y2VON){width:512px}.jadwal-program:where(.astro-LP3Y2VON) .jam-satu-limabelas:where(.astro-LP3Y2VON){width:640px}.jadwal-program:where(.astro-LP3Y2VON) .jam-satu-setengah:where(.astro-LP3Y2VON){width:768px}.jadwal-program:where(.astro-LP3Y2VON) .jam-satu-empatlima:where(.astro-LP3Y2VON){width:896px}.jadwal-program:where(.astro-LP3Y2VON) .jam-dua:where(.astro-LP3Y2VON){width:1024px}.jadwal-program:where(.astro-LP3Y2VON) .jam-dua-limabelas:where(.astro-LP3Y2VON){width:1152px}.jadwal-program:where(.astro-LP3Y2VON) .jam-dua-setengah:where(.astro-LP3Y2VON){width:1280px}.jadwal-program:where(.astro-LP3Y2VON) .jam-dua-empatlima:where(.astro-LP3Y2VON){width:1408px}.jadwal-program:where(.astro-LP3Y2VON) .jam-tiga:where(.astro-LP3Y2VON){width:1536px}.jadwal-program:where(.astro-LP3Y2VON) .jam-tiga-limabelas:where(.astro-LP3Y2VON){width:1664px}.jadwal-program:where(.astro-LP3Y2VON) .jam-tiga-setengah:where(.astro-LP3Y2VON){width:1792px}.jadwal-program:where(.astro-LP3Y2VON) .jam-tiga-empatlima:where(.astro-LP3Y2VON){width:1920px}.jadwal-program:where(.astro-LP3Y2VON) .jam-empat:where(.astro-LP3Y2VON){width:2048px}.jadwal-program:where(.astro-LP3Y2VON) .start-0-00:where(.astro-LP3Y2VON){left:20px}.jadwal-program:where(.astro-LP3Y2VON) .start-0-15:where(.astro-LP3Y2VON){left:148px}.jadwal-program:where(.astro-LP3Y2VON) .start-0-30:where(.astro-LP3Y2VON){left:276px}.jadwal-program:where(.astro-LP3Y2VON) .start-0-45:where(.astro-LP3Y2VON){left:404px}.jadwal-program:where(.astro-LP3Y2VON) .start-1-00:where(.astro-LP3Y2VON){left:532px}.jadwal-program:where(.astro-LP3Y2VON) .start-1-15:where(.astro-LP3Y2VON){left:660px}.jadwal-program:where(.astro-LP3Y2VON) .start-1-30:where(.astro-LP3Y2VON){left:788px}.jadwal-program:where(.astro-LP3Y2VON) .start-1-45:where(.astro-LP3Y2VON){left:916px}.jadwal-program:where(.astro-LP3Y2VON) .start-2-00:where(.astro-LP3Y2VON){left:1044px}.jadwal-program:where(.astro-LP3Y2VON) .start-2-15:where(.astro-LP3Y2VON){left:1172px}.jadwal-program:where(.astro-LP3Y2VON) .start-2-30:where(.astro-LP3Y2VON){left:1300px}.jadwal-program:where(.astro-LP3Y2VON) .start-2-45:where(.astro-LP3Y2VON){left:1428px}.jadwal-program:where(.astro-LP3Y2VON) .start-3-00:where(.astro-LP3Y2VON){left:1556px}.jadwal-program:where(.astro-LP3Y2VON) .start-3-15:where(.astro-LP3Y2VON){left:1684px}.jadwal-program:where(.astro-LP3Y2VON) .start-3-30:where(.astro-LP3Y2VON){left:1812px}.jadwal-program:where(.astro-LP3Y2VON) .start-3-45:where(.astro-LP3Y2VON){left:1940px}.jadwal-program:where(.astro-LP3Y2VON) .start-4-00:where(.astro-LP3Y2VON){left:2068px}.jadwal-program:where(.astro-LP3Y2VON) .start-4-15:where(.astro-LP3Y2VON){left:2196px}.jadwal-program:where(.astro-LP3Y2VON) .start-4-30:where(.astro-LP3Y2VON){left:2324px}.jadwal-program:where(.astro-LP3Y2VON) .start-4-45:where(.astro-LP3Y2VON){left:2452px}.jadwal-program:where(.astro-LP3Y2VON) .start-5-00:where(.astro-LP3Y2VON){left:2580px}.jadwal-program:where(.astro-LP3Y2VON) .start-5-15:where(.astro-LP3Y2VON){left:2708px}.jadwal-program:where(.astro-LP3Y2VON) .start-5-30:where(.astro-LP3Y2VON){left:2836px}.jadwal-program:where(.astro-LP3Y2VON) .start-5-45:where(.astro-LP3Y2VON){left:2964px}.jadwal-program:where(.astro-LP3Y2VON) .start-6-00:where(.astro-LP3Y2VON){left:3092px}.jadwal-program:where(.astro-LP3Y2VON) .start-6-15:where(.astro-LP3Y2VON){left:3220px}.jadwal-program:where(.astro-LP3Y2VON) .start-6-30:where(.astro-LP3Y2VON){left:3348px}.jadwal-program:where(.astro-LP3Y2VON) .start-6-45:where(.astro-LP3Y2VON){left:3476px}.jadwal-program:where(.astro-LP3Y2VON) .start-7-00:where(.astro-LP3Y2VON){left:3604px}.jadwal-program:where(.astro-LP3Y2VON) .start-7-15:where(.astro-LP3Y2VON){left:3732px}.jadwal-program:where(.astro-LP3Y2VON) .start-7-30:where(.astro-LP3Y2VON){left:3860px}.jadwal-program:where(.astro-LP3Y2VON) .start-7-45:where(.astro-LP3Y2VON){left:3988px}.jadwal-program:where(.astro-LP3Y2VON) .start-8-00:where(.astro-LP3Y2VON){left:4116px}.jadwal-program:where(.astro-LP3Y2VON) .start-8-15:where(.astro-LP3Y2VON){left:4244px}.jadwal-program:where(.astro-LP3Y2VON) .start-8-30:where(.astro-LP3Y2VON){left:4372px}.jadwal-program:where(.astro-LP3Y2VON) .start-8-45:where(.astro-LP3Y2VON){left:4500px}.jadwal-program:where(.astro-LP3Y2VON) .start-9-00:where(.astro-LP3Y2VON){left:4628px}.jadwal-program:where(.astro-LP3Y2VON) .start-9-15:where(.astro-LP3Y2VON){left:4756px}.jadwal-program:where(.astro-LP3Y2VON) .start-9-30:where(.astro-LP3Y2VON){left:4884px}.jadwal-program:where(.astro-LP3Y2VON) .start-9-45:where(.astro-LP3Y2VON){left:5012px}.jadwal-program:where(.astro-LP3Y2VON) .start-10-00:where(.astro-LP3Y2VON){left:5140px}.jadwal-program:where(.astro-LP3Y2VON) .start-10-15:where(.astro-LP3Y2VON){left:5268px}.jadwal-program:where(.astro-LP3Y2VON) .start-10-30:where(.astro-LP3Y2VON){left:5396px}.jadwal-program:where(.astro-LP3Y2VON) .start-10-45:where(.astro-LP3Y2VON){left:5524px}.jadwal-program:where(.astro-LP3Y2VON) .start-11-00:where(.astro-LP3Y2VON){left:5652px}.jadwal-program:where(.astro-LP3Y2VON) .start-11-15:where(.astro-LP3Y2VON){left:5780px}.jadwal-program:where(.astro-LP3Y2VON) .start-11-30:where(.astro-LP3Y2VON){left:5908px}.jadwal-program:where(.astro-LP3Y2VON) .start-11-45:where(.astro-LP3Y2VON){left:6036px}.jadwal-program:where(.astro-LP3Y2VON) .start-12-00:where(.astro-LP3Y2VON){left:6164px}.jadwal-program:where(.astro-LP3Y2VON) .start-12-15:where(.astro-LP3Y2VON){left:6292px}.jadwal-program:where(.astro-LP3Y2VON) .start-12-30:where(.astro-LP3Y2VON){left:6420px}.jadwal-program:where(.astro-LP3Y2VON) .start-12-45:where(.astro-LP3Y2VON){left:6548px}.jadwal-program:where(.astro-LP3Y2VON) .start-13-00:where(.astro-LP3Y2VON){left:6676px}.jadwal-program:where(.astro-LP3Y2VON) .start-13-15:where(.astro-LP3Y2VON){left:6804px}.jadwal-program:where(.astro-LP3Y2VON) .start-13-30:where(.astro-LP3Y2VON){left:6932px}.jadwal-program:where(.astro-LP3Y2VON) .start-13-45:where(.astro-LP3Y2VON){left:7060px}.jadwal-program:where(.astro-LP3Y2VON) .start-14-00:where(.astro-LP3Y2VON){left:7188px}.jadwal-program:where(.astro-LP3Y2VON) .start-14-15:where(.astro-LP3Y2VON){left:7316px}.jadwal-program:where(.astro-LP3Y2VON) .start-14-30:where(.astro-LP3Y2VON){left:7444px}.jadwal-program:where(.astro-LP3Y2VON) .start-14-45:where(.astro-LP3Y2VON){left:7572px}.jadwal-program:where(.astro-LP3Y2VON) .start-15-00:where(.astro-LP3Y2VON){left:7700px}.jadwal-program:where(.astro-LP3Y2VON) .start-15-15:where(.astro-LP3Y2VON){left:7828px}.jadwal-program:where(.astro-LP3Y2VON) .start-15-30:where(.astro-LP3Y2VON){left:7956px}.jadwal-program:where(.astro-LP3Y2VON) .start-15-45:where(.astro-LP3Y2VON){left:8084px}.jadwal-program:where(.astro-LP3Y2VON) .start-16-00:where(.astro-LP3Y2VON){left:8212px}.jadwal-program:where(.astro-LP3Y2VON) .start-16-15:where(.astro-LP3Y2VON){left:8340px}.jadwal-program:where(.astro-LP3Y2VON) .start-16-30:where(.astro-LP3Y2VON){left:8468px}.jadwal-program:where(.astro-LP3Y2VON) .start-16-45:where(.astro-LP3Y2VON){left:8596px}.jadwal-program:where(.astro-LP3Y2VON) .start-17-00:where(.astro-LP3Y2VON){left:8724px}.jadwal-program:where(.astro-LP3Y2VON) .start-17-15:where(.astro-LP3Y2VON){left:8852px}.jadwal-program:where(.astro-LP3Y2VON) .start-17-30:where(.astro-LP3Y2VON){left:8980px}.jadwal-program:where(.astro-LP3Y2VON) .start-17-45:where(.astro-LP3Y2VON){left:9108px}.jadwal-program:where(.astro-LP3Y2VON) .start-18-00:where(.astro-LP3Y2VON){left:9236px}.jadwal-program:where(.astro-LP3Y2VON) .start-18-15:where(.astro-LP3Y2VON){left:9364px}.jadwal-program:where(.astro-LP3Y2VON) .start-18-30:where(.astro-LP3Y2VON){left:9492px}.jadwal-program:where(.astro-LP3Y2VON) .start-18-45:where(.astro-LP3Y2VON){left:9620px}.jadwal-program:where(.astro-LP3Y2VON) .start-19-00:where(.astro-LP3Y2VON){left:9748px}.jadwal-program:where(.astro-LP3Y2VON) .start-19-15:where(.astro-LP3Y2VON){left:9876px}.jadwal-program:where(.astro-LP3Y2VON) .start-19-30:where(.astro-LP3Y2VON){left:10004px}.jadwal-program:where(.astro-LP3Y2VON) .start-19-45:where(.astro-LP3Y2VON){left:10132px}.jadwal-program:where(.astro-LP3Y2VON) .start-20-00:where(.astro-LP3Y2VON){left:10260px}.jadwal-program:where(.astro-LP3Y2VON) .start-20-15:where(.astro-LP3Y2VON){left:10388px}.jadwal-program:where(.astro-LP3Y2VON) .start-20-30:where(.astro-LP3Y2VON){left:10516px}.jadwal-program:where(.astro-LP3Y2VON) .start-20-45:where(.astro-LP3Y2VON){left:10644px}.jadwal-program:where(.astro-LP3Y2VON) .start-21-00:where(.astro-LP3Y2VON){left:10772px}.jadwal-program:where(.astro-LP3Y2VON) .start-21-15:where(.astro-LP3Y2VON){left:10900px}.jadwal-program:where(.astro-LP3Y2VON) .start-21-30:where(.astro-LP3Y2VON){left:11028px}.jadwal-program:where(.astro-LP3Y2VON) .start-21-45:where(.astro-LP3Y2VON){left:11156px}.jadwal-program:where(.astro-LP3Y2VON) .start-22-00:where(.astro-LP3Y2VON){left:11284px}.jadwal-program:where(.astro-LP3Y2VON) .start-22-15:where(.astro-LP3Y2VON){left:11412px}.jadwal-program:where(.astro-LP3Y2VON) .start-22-30:where(.astro-LP3Y2VON){left:11540px}.jadwal-program:where(.astro-LP3Y2VON) .start-22-45:where(.astro-LP3Y2VON){left:11668px}.jadwal-program:where(.astro-LP3Y2VON) .start-23-00:where(.astro-LP3Y2VON){left:11796px}.jadwal-program:where(.astro-LP3Y2VON) .start-23-15:where(.astro-LP3Y2VON){left:11924px}.jadwal-program:where(.astro-LP3Y2VON) .start-23-30:where(.astro-LP3Y2VON){left:12052px}.jadwal-program:where(.astro-LP3Y2VON) .start-23-45:where(.astro-LP3Y2VON){left:12180px}.h-scroll:where(.astro-LP3Y2VON){width:100%;white-space:nowrap;overflow-y:hidden;overflow-x:auto;-webkit-overflow-scrolling:touch;overflow-scrolling:touch}.h-scroll:where(.astro-LP3Y2VON)::-webkit-scrollbar{width:0px;background:transparent}.h-scroll:where(.astro-LP3Y2VON):hover{cursor:grab}.h-scroll:where(.astro-LP3Y2VON).active{cursor:grabbing;cursor:-webkit-grabbing}.h-scroll__wrap:where(.astro-LP3Y2VON){white-space:nowrap;width:0;height:auto}.jadwal-tv .active:before{background:#c00}.sisip_embed_sosmed{width:100%}.sisip_embed_sosmed iframe{max-width:100%;margin:auto}.pic_artikel_sisip_table,.linksisip{border-collapse:collapse;margin:0;padding:0;width:100%}.pic_artikel_sisip{margin:10px 0;font-size:12px;color:#5e7280}.pic_artikel_sisip td{border:none;padding:0}.pic_artikel_sisip .pic{position:relative;display:inline-block;text-align:left;max-width:100%;padding-bottom:10px}.pic_artikel_sisip .pic img{max-width:100%;overflow:hidden;margin-bottom:5px;display:block;margin-left:auto;margin-right:auto}.pic_artikel_sisip_table_align{margin-right:15px}.lihatjg{padding:10px;margin:0 0 20px;border:1px solid #dde3e6;font-family:CNNSansW04-Medium,Arial,sans-serif}.lihatjg strong,.lihatjg h5{display:inline-block;color:#ee4037;font-size:16px!important;font-weight:400;margin-bottom:0!important}.lihatjg a{display:inline-block}.lihatjg a:hover{color:#c00}.lihatjg-flex{display:flex;align-items:center;padding:10px 0}.lihatjg-foto{margin-right:10px;width:100px;height:75px}.lihatjg-foto img{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.lihatjg-subtitle{color:#909090;font-size:12px;text-transform:uppercase}.topik1{border-bottom:1px solid #dde3e6;border-top:1px solid #dde3e6;font-size:14px;margin:20px 0;padding:10px 0}.topik1 h5{font-size:16px!important;line-height:normal!important;color:#c00;font-family:CNNSansW04-Medium,Arial,sans-serif}.topik2{border:1px solid #dde3e6;float:left;margin:0 20px 15px 0;padding:0 15px 10px;width:280px;position:relative;z-index:5}.topik2 .title{padding:10px 0;position:relative;font-size:16px;color:#ee4037;font-family:CNNSansW04-Medium,Arial,sans-serif;font-weight:700}.topik2 .title:after{position:absolute;bottom:0;left:0;width:32px;height:3px;background-color:#c00}.topik2 .list_fokus,.topik2>ul{font-size:13px;margin:0!important;padding:0!important;list-style:none!important}.lvr_lke .topik2 .list_fokus li:before,.lvr_lke .topik2>ul li:before{left:0;top:inherit;position:relative}.lvr_lke .topik2 .list_fokus li:after,.lvr_lke .topik2>ul li:after{display:none}.topik2 .list_fokus li,.topik2>ul li{margin:0 0 15px;padding:0;display:flex;align-items:center}.topik2 .list_fokus li:before,.topik2>ul li:before{width:6px;height:6px;content:"";border-radius:50%;background:#909090;margin-right:10px;flex-shrink:0}.topik2 .list_fokus li a,.topik2>ul li a{display:block}.topik2 .list_fokus li a:hover,.topik2>ul li a:hover{color:#c00}.topik2 .list_fokus li:last-child a,.topik2>ul li:last-child a{border:none}.topik2 .list_fokus li h5,.topik2>ul li h5{font-size:14px!important;margin-bottom:0;line-height:normal!important}.quotesisip{border-left:1px solid #cc0000;margin:0 0 20px}.fokussisip{width:100%;margin:0 0 20px;border-top:1px solid #dde3e6;border-bottom:1px solid #dde3e6}.fokussisip td>.title{position:relative;text-align:center;font-size:16px;padding:15px 0;margin:0 0 20px;font-family:CNNSansW04-Medium,Arial,sans-serif}.fokussisip td>.title h3{font-size:16px!important}.fokussisip td>.title:after{content:"";position:absolute;bottom:0;border-bottom:1px solid #dde3e6;width:16%;height:1px;left:42%}.fokussisip .title_sub{margin:0 0 3px;color:#c00}.fokussisip .box_img{width:80px}.detail_tag{font-family:CNNSansW04-Medium,Arial,sans-serif}.detail_tag a{display:inline-block;padding:5px 10px;margin:10px 10px 0 0;font-size:13px;position:relative;border:1px solid #8d8d8d;color:#272727}.detail_tag a:hover{background-color:#c00;color:#fff;border:1px solid #cc0000}blockquote{padding:15px 0;margin-left:20px!important;margin-right:20px!important;font-size:15px;font-family:Merriwearther,Georgia,Arial,Helvetica}blockquote cite{color:#999;font-size:13px;display:block;margin-top:5px}blockquote cite:before{content:"— "}.detail-text fieldset.disclaimer{padding:10px;margin:20px 0;background:#eceff1;border:1px solid #dde3e6}.detail-text fieldset.disclaimer a{color:#c00;font-weight:700}.detail-text fieldset.disclaimer a:hover{text-decoration:underline}.detail-text ul,.detail-text ol{padding-left:24px;margin:16px 0}.detail-text ul li,.detail-text ol li{padding:6px 0}.detail-text ul{list-style:disc}.detail-text ol{list-style:decimal}.video_detail{background:#eceff1;padding:20px;text-align:center;width:100%}.video_detail .box_title{text-align:left!important;color:#000;font-weight:700;font-size:14px}.video_detail h2{text-align:left;font-size:16px!important;margin-bottom:10px;color:#c00}.video_detail h2 a{color:inherit}.tableSpec{max-width:100%;width:100%;color:#727374;font-size:13px;overflow:hidden}.tableSpec tr td{border:1px solid #f1f2f3;padding:7px 10px}.tableSpec tr td:first-child{background:#f7f8f9;font-weight:700;width:40%}.tableSpec tr td:nth-child(2){display:none}.tableSpec tr td.title{padding:5px 10px;font-size:16px;line-height:1.5;background:none;font-weight:400;color:#000}.tableSpec tr:hover td{background:#ffffe6}.tableSpec tr:hover td.title{background:none}.tableSpec tr:hover td.title--alt{background:#f7f8f9}.tableSpec__caption{font-weight:700;font-size:16px;line-height:24px;margin-bottom:10px;background:none}.tableSpec__caption tr td{border:0px;padding:0}.tableSpec__caption tr td:first-child,.tableSpec__caption tr:hover td{background:none}.tableSpec2{--theme-color: #cc0000;max-width:100%;width:100%;font-size:13px;overflow:hidden}.tableSpec2 tr td{border:0;border-bottom:1px solid #e6e6e6;padding:7px 10px 7px 0;font-weight:400;font-size:14px;line-height:20px;color:#000}.tableSpec2 tr td:first-child{width:40%}.tableSpec2 tr td.title{width:auto;color:#000;font-style:normal;font-weight:700;font-size:16px;line-height:24px;border:0;border-bottom:2px solid var(--theme-color);padding:15px 0}.tableSpec2 tr td.title--alt{color:var(--theme-color);font-weight:700;font-size:16px;padding:15px 0}.tableSpec2__caption{font-weight:700;font-size:16px;line-height:24px;margin-bottom:10px}.newstag{font-size:12px;font-style:italic;font-weight:700;margin:40px 0 20px}.newstag img{float:right;height:30px}.custom-table{width:100%;overflow:auto}.custom-table table{font-family:inherit;width:100%;border:0;margin:0;padding:0;border-spacing:0px 8px;border-collapse:separate}.custom-table table th{text-transform:uppercase;color:#58575a;width:12%;text-align:center;font-size:1.1em;padding:0 5px}.custom-table table th.total{color:#3b3b3d}.custom-table table th.country{width:50%;padding:0 0 0 20px;text-align:left}.custom-table table td{text-align:center;font-size:1.2em;color:#fff;text-transform:uppercase;padding:12px;background-color:#939394}.custom-table table td.align-left{text-align:left}.custom-table table td:first-child{width:10%;border-top-left-radius:6px;border-bottom-left-radius:6px}.custom-table table td:last-child{background-color:#e2e3e4;color:#58585a;border-top-right-radius:6px;border-bottom-right-radius:6px}.custom-table table tbody tr:nth-child(even) td{background-color:#676767}.custom-table table tbody tr:nth-child(even) td:last-child{background-color:#d3d4d6}.custom-table.blue table td{background-color:#d5e8f9;color:#58585a}.custom-table.blue table tbody tr:nth-child(even) td{background-color:#abd6fd}.custom-table.blue table td:last-child{background-color:#5aafff;color:#fff}.custom-table.blue table tbody tr:nth-child(even) td:last-child{background-color:#5aafff}.custom-table.green table td{background-color:#dbf1d6;color:#58585a}.custom-table.green table tbody tr:nth-child(even) td{background-color:#b7ecab}.custom-table.green table td:last-child{background-color:#5cd045;color:#fff}.custom-table.green table tbody tr:nth-child(even) td:last-child{background-color:#5cd045}.custom-table.orange table td{background-color:#ffe9c7;color:#58585a}.custom-table.orange table tbody tr:nth-child(even) td{background-color:#ffd492}.custom-table.orange table td:last-child{background-color:#fbb040;color:#fff}.custom-table.orange table tbody tr:nth-child(even) td:last-child{background-color:#fbb040}.custom-table.red table td{background-color:#f9d9d8;color:#58585a}.custom-table.red table tbody tr:nth-child(even) td{background-color:#f1bebc}.custom-table.red table tbody td:last-child{background-color:#ee4037;color:#fff}.custom-table.red table tbody tr:nth-child(even) td:last-child{background-color:#a58b8a}.custom-table.purple table td{background-color:#e4dbec;color:#58585a}.custom-table.purple table tbody tr:nth-child(even) td{background-color:#cbbddc}.custom-table.purple table tbody td:last-child{background-color:#8c53ca;color:#fff}.custom-table.purple table tbody tr:nth-child(even) td:last-child{background-color:#8c53ca}.custom-table.grey table td{background-color:#e0e0e0;color:#58585a}.custom-table.grey table tbody tr:nth-child(even) td{background-color:#cacaca}.custom-table.grey table tbody td:last-child{background-color:#5f5f5f;color:#fff}.custom-table.grey table tbody tr:nth-child(even) td:last-child{background-color:#5f5f5f}.custom-table.responsive{overflow:initial;border-collapse:collapse;margin:0;padding:0;width:100%;table-layout:fixed}.custom-table.responsive table tr{background-color:#f8f8f8}@media screen and (max-width: 600px){.custom-table table th{font-size:.6em;padding:0 5px;line-height:130%}.custom-table table th.country{padding:0 0 0 14px}.custom-table table td{font-size:.7em;padding:5px;line-height:20px}.custom-table.responsive table{border:0}.custom-table.responsive table caption{font-size:1.3em}.custom-table.responsive table thead{border:none;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.custom-table.responsive table tr{display:block;margin-bottom:20px}.custom-table.responsive table td{margin:0 0 1px;display:block;font-size:1em;text-align:right}.custom-table.responsive table tbody td:first-child{width:100%;border-bottom-left-radius:0;border-top-right-radius:6px}.custom-table.responsive table td:before{content:attr(data-label);float:left;font-weight:700;text-transform:uppercase}.custom-table.responsive table td:last-child{margin:0;border-top-right-radius:0;border-bottom-left-radius:6px}}@media screen and (max-width: 360px){.custom-table table td{font-size:.6em}}.swiper-pagination-custom-long{position:absolute;top:0;margin-top:0;height:1.5rem}.swiper-pagination-custom-long .swiper-pagination-bullet{height:3px;width:90px;border-radius:0;--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));opacity:1}.dark .swiper-pagination-custom-long .swiper-pagination-bullet{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.swiper-pagination-custom-long .swiper-pagination-bullet-active,.dark .swiper-pagination-custom-long .swiper-pagination-bullet-active{--tw-bg-opacity: 1;background-color:rgb(204 0 0 / var(--tw-bg-opacity))}.fokus-cb__header h2{font-size:1rem!important;line-height:1.5rem!important}.slide_fokus-swiper h2{font-size:1.125rem!important;line-height:1.75rem!important}.full-bleed{width:100vw;position:relative;right:50%;margin-left:-50vw;margin-right:-50vw;z-index:0}.bgimage{position:absolute;inset:0;z-index:-10;height:100%;width:100%}.ads-slot-skybanner{height:600px;width:100%}.ads-slot-inbetween{height:50px;width:710px;text-align:center}.inbetween_ads{clear:both;margin:0 0 20px;width:100%;text-align:-webkit-center}.table_wrap{display:block;width:100%;position:relative;overflow-x:auto;-webkit-overflow-scrolling:touch}.table_wrap table tr:nth-of-type(odd){background:#f7f7f7}.table_wrap table tr td{border:1px solid #000;padding:6px}.ads-slot-detailads{height:250px;width:400px;text-align:center}.detail_ads{clear:both;margin:10px 0;width:100%;text-align:-webkit-center}.ads-slot-parallax{height:600px;width:100%}.galery-foto-title{font-size:1rem!important;line-height:1.5rem!important}.galery-foto-slider-swiper h2{font-size:1.125rem!important;line-height:1.75rem!important}.detail-text strong{font-weight:600}.detail-text p{margin-bottom:1.25rem}.detail-text p:nth-of-type(1){display:inline}.detail-text p:nth-of-type(2){margin-top:1.25rem;margin-bottom:1.25rem}.detail-text h1,.detail-text h2,.detail-text h3,.detail-text h4,.detail-text h5,.detail-text h6{line-height:1.5;font-weight:700!important}.detail-text h2{font-size:26px}.detail-text h3{font-size:23px}.detail-text h4{font-size:1.25rem;line-height:1.75rem}.detail-text h5{font-size:1.125rem;line-height:1.75rem}.detail-text h6{font-size:1rem;line-height:1.5rem}.qs-datepicker-container{font-size:1rem;font-family:sans-serif;color:#000;position:absolute;width:15.625em;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;z-index:9001;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid grey;border-radius:.263921875em;overflow:hidden;background:#fff;-webkit-box-shadow:0 1.25em 1.25em -.9375em rgba(0,0,0,.3);box-shadow:0 1.25em 1.25em -.9375em #0000004d}.qs-datepicker-container *{-webkit-box-sizing:border-box;box-sizing:border-box}.qs-centered{position:fixed;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.qs-hidden{display:none}.qs-overlay{position:absolute;top:0;left:0;background:rgba(0,0,0,.75);color:#fff;width:100%;height:100%;padding:.5em;z-index:1;opacity:1;-webkit-transition:opacity .3s;transition:opacity .3s;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.qs-overlay.qs-hidden{opacity:0;z-index:-1}.qs-overlay .qs-overlay-year{background:rgba(0,0,0,0);border:none;border-bottom:1px solid #fff;border-radius:0;color:#fff;font-size:.875em;padding:.25em 0;width:80%;text-align:center;margin:0 auto;display:block}.qs-overlay .qs-overlay-year::-webkit-inner-spin-button{-webkit-appearance:none}.qs-overlay .qs-close{padding:.5em;cursor:pointer;position:absolute;top:0;right:0}.qs-overlay .qs-submit{border:1px solid #fff;border-radius:.263921875em;padding:.5em;margin:0 auto auto;cursor:pointer;background:hsla(0,0%,50.2%,.4)}.qs-overlay .qs-submit.qs-disabled{color:gray;border-color:gray;cursor:not-allowed}.qs-overlay .qs-overlay-month-container{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.qs-overlay .qs-overlay-month{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:calc(100% / 3);cursor:pointer;opacity:.5;-webkit-transition:opacity .15s;transition:opacity .15s}.qs-overlay .qs-overlay-month.active,.qs-overlay .qs-overlay-month:hover{opacity:1}.qs-controls{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:0;flex-shrink:0;background:#d3d3d3;-webkit-filter:blur(0);filter:blur(0);-webkit-transition:-webkit-filter .3s;transition:-webkit-filter .3s;transition:filter .3s;transition:filter .3s,-webkit-filter .3s}.qs-controls.qs-blur{-webkit-filter:blur(5px);filter:blur(5px)}.qs-arrow{height:1.5625em;width:1.5625em;position:relative;cursor:pointer;border-radius:.263921875em;-webkit-transition:background .15s;transition:background .15s}.qs-arrow:hover{background:rgba(0,0,0,.1)}.qs-arrow:hover.qs-left:after{border-right-color:#000}.qs-arrow:hover.qs-right:after{border-left-color:#000}.qs-arrow:after{content:"";border:.390625em solid rgba(0,0,0,0);position:absolute;top:50%;-webkit-transition:border .2s;transition:border .2s}.qs-arrow.qs-left:after{border-right-color:gray;right:50%;-webkit-transform:translate(25%,-50%);-ms-transform:translate(25%,-50%);transform:translate(25%,-50%)}.qs-arrow.qs-right:after{border-left-color:gray;left:50%;-webkit-transform:translate(-25%,-50%);-ms-transform:translate(-25%,-50%);transform:translate(-25%,-50%)}.qs-month-year{font-weight:700;-webkit-transition:border .2s;transition:border .2s;border-bottom:1px solid rgba(0,0,0,0)}.qs-month-year:not(.qs-disabled-year-overlay){cursor:pointer}.qs-month-year:not(.qs-disabled-year-overlay):hover{border-bottom:1px solid grey}.qs-month-year:active:focus,.qs-month-year:focus{outline:none}.qs-month{padding-right:.5ex}.qs-year{padding-left:.5ex}.qs-squares{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:.3125em;-webkit-filter:blur(0);filter:blur(0);-webkit-transition:-webkit-filter .3s;transition:-webkit-filter .3s;transition:filter .3s;transition:filter .3s,-webkit-filter .3s}.qs-squares.qs-blur{-webkit-filter:blur(5px);filter:blur(5px)}.qs-square{width:calc(100% / 7);height:1.5625em;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;cursor:pointer;-webkit-transition:background .1s;transition:background .1s;border-radius:.263921875em}.qs-square:not(.qs-empty):not(.qs-disabled):not(.qs-day):not(.qs-active):hover{background:orange}.qs-current{font-weight:700;text-decoration:underline}.qs-active,.qs-range-end,.qs-range-start{background:#add8e6}.qs-range-start:not(.qs-range-6){border-top-right-radius:0;border-bottom-right-radius:0}.qs-range-middle{background:#d4ebf2}.qs-range-middle:not(.qs-range-0):not(.qs-range-6){border-radius:0}.qs-range-middle.qs-range-0{border-top-right-radius:0;border-bottom-right-radius:0}.qs-range-end:not(.qs-range-0),.qs-range-middle.qs-range-6{border-top-left-radius:0;border-bottom-left-radius:0}.qs-disabled,.qs-outside-current-month{opacity:.2}.qs-disabled{cursor:not-allowed}.qs-day,.qs-empty{cursor:default}.qs-day{font-weight:700;color:gray}.qs-event{position:relative}.qs-event:after{content:"";position:absolute;width:.46875em;height:.46875em;border-radius:50%;background:#07f;bottom:0;right:0}.air-datepicker-cell.-year-.-other-decade-,.air-datepicker-cell.-day-.-other-month-{color:var(--adp-color-other-month)}.air-datepicker-cell.-year-.-other-decade-:hover,.air-datepicker-cell.-day-.-other-month-:hover{color:var(--adp-color-other-month-hover)}.-disabled-.-focus-.air-datepicker-cell.-year-.-other-decade-,.-disabled-.-focus-.air-datepicker-cell.-day-.-other-month-{color:var(--adp-color-other-month)}.-selected-.air-datepicker-cell.-year-.-other-decade-,.-selected-.air-datepicker-cell.-day-.-other-month-{color:#fff;background:var(--adp-background-color-selected-other-month)}.-selected-.-focus-.air-datepicker-cell.-year-.-other-decade-,.-selected-.-focus-.air-datepicker-cell.-day-.-other-month-{background:var(--adp-background-color-selected-other-month-focused)}.-in-range-.air-datepicker-cell.-year-.-other-decade-,.-in-range-.air-datepicker-cell.-day-.-other-month-{background-color:var(--adp-background-color-in-range);color:var(--adp-color)}.-in-range-.-focus-.air-datepicker-cell.-year-.-other-decade-,.-in-range-.-focus-.air-datepicker-cell.-day-.-other-month-{background-color:var(--adp-background-color-in-range-focused)}.air-datepicker-cell.-year-.-other-decade-:empty,.air-datepicker-cell.-day-.-other-month-:empty{background:none;border:none}.air-datepicker-cell{border-radius:var(--adp-cell-border-radius);box-sizing:border-box;cursor:pointer;display:flex;position:relative;align-items:center;justify-content:center;z-index:1}.air-datepicker-cell.-focus-{background:var(--adp-cell-background-color-hover)}.air-datepicker-cell.-current-{color:var(--adp-color-current-date)}.air-datepicker-cell.-current-.-focus-{color:var(--adp-color)}.air-datepicker-cell.-current-.-in-range-{color:var(--adp-color-current-date)}.air-datepicker-cell.-disabled-{cursor:default;color:var(--adp-color-disabled)}.air-datepicker-cell.-disabled-.-focus-{color:var(--adp-color-disabled)}.air-datepicker-cell.-disabled-.-in-range-{color:var(--adp-color-disabled-in-range)}.air-datepicker-cell.-disabled-.-current-.-focus-{color:var(--adp-color-disabled)}.air-datepicker-cell.-in-range-{background:var(--adp-cell-background-color-in-range);border-radius:0}.air-datepicker-cell.-in-range-:hover{background:var(--adp-cell-background-color-in-range-hover)}.air-datepicker-cell.-range-from-{border:1px solid var(--adp-cell-border-color-in-range);background-color:var(--adp-cell-background-color-in-range);border-radius:var(--adp-cell-border-radius) 0 0 var(--adp-cell-border-radius)}.air-datepicker-cell.-range-to-{border:1px solid var(--adp-cell-border-color-in-range);background-color:var(--adp-cell-background-color-in-range);border-radius:0 var(--adp-cell-border-radius) var(--adp-cell-border-radius) 0}.air-datepicker-cell.-range-to-.-range-from-{border-radius:var(--adp-cell-border-radius)}.air-datepicker-cell.-selected-{color:#fff;border:none;background:var(--adp-cell-background-color-selected)}.air-datepicker-cell.-selected-.-current-{color:#fff;background:var(--adp-cell-background-color-selected)}.air-datepicker-cell.-selected-.-focus-{background:var(--adp-cell-background-color-selected-hover)}.air-datepicker-body{transition:all var(--adp-transition-duration) var(--adp-transition-ease)}.air-datepicker-body.-hidden-{display:none}.air-datepicker-body--day-names{display:grid;grid-template-columns:repeat(7,var(--adp-day-cell-width));margin:8px 0 3px}.air-datepicker-body--day-name{color:var(--adp-day-name-color);display:flex;align-items:center;justify-content:center;flex:1;text-align:center;text-transform:uppercase;font-size:.8em}.air-datepicker-body--day-name.-clickable-{cursor:pointer}.air-datepicker-body--day-name.-clickable-:hover{color:var(--adp-day-name-color-hover)}.air-datepicker-body--cells{display:grid}.air-datepicker-body--cells.-days-{grid-template-columns:repeat(7,var(--adp-day-cell-width));grid-auto-rows:var(--adp-day-cell-height)}.air-datepicker-body--cells.-months-{grid-template-columns:repeat(3,1fr);grid-auto-rows:var(--adp-month-cell-height)}.air-datepicker-body--cells.-years-{grid-template-columns:repeat(4,1fr);grid-auto-rows:var(--adp-year-cell-height)}.air-datepicker-nav{display:flex;justify-content:space-between;border-bottom:1px solid var(--adp-border-color-inner);min-height:var(--adp-nav-height);padding:var(--adp-padding);box-sizing:content-box}.-only-timepicker- .air-datepicker-nav{display:none}.air-datepicker-nav--title,.air-datepicker-nav--action{display:flex;cursor:pointer;align-items:center;justify-content:center}.air-datepicker-nav--action{width:var(--adp-nav-action-size);border-radius:var(--adp-border-radius);-webkit-user-select:none;-moz-user-select:none;user-select:none}.air-datepicker-nav--action:hover{background:var(--adp-background-color-hover)}.air-datepicker-nav--action:active{background:var(--adp-background-color-active)}.air-datepicker-nav--action.-disabled-{visibility:hidden}.air-datepicker-nav--action svg{width:32px;height:32px}.air-datepicker-nav--action path{fill:none;stroke:var(--adp-nav-arrow-color);stroke-width:2px}.air-datepicker-nav--title{border-radius:var(--adp-border-radius);padding:0 8px}.air-datepicker-nav--title i{font-style:normal;color:var(--adp-nav-color-secondary);margin-left:.3em}.air-datepicker-nav--title:hover{background:var(--adp-background-color-hover)}.air-datepicker-nav--title:active{background:var(--adp-background-color-active)}.air-datepicker-nav--title.-disabled-{cursor:default;background:none}.air-datepicker-buttons{display:grid;grid-auto-columns:1fr;grid-auto-flow:column}.air-datepicker-button{display:inline-flex;color:var(--adp-btn-color);border-radius:var(--adp-btn-border-radius);cursor:pointer;height:var(--adp-btn-height);border:none;background:rgba(255,255,255,0)}.air-datepicker-button:hover{color:var(--adp-btn-color-hover);background:var(--adp-btn-background-color-hover)}.air-datepicker-button:focus{color:var(--adp-btn-color-hover);background:var(--adp-btn-background-color-hover);outline:none}.air-datepicker-button:active{background:var(--adp-btn-background-color-active)}.air-datepicker-button span{outline:none;display:flex;align-items:center;justify-content:center;width:100%;height:100%}.air-datepicker-time{display:grid;grid-template-columns:max-content 1fr;grid-column-gap:12px;align-items:center;position:relative;padding:0 var(--adp-time-padding-inner)}.-only-timepicker- .air-datepicker-time{border-top:none}.air-datepicker-time--current{display:flex;align-items:center;flex:1;font-size:14px;text-align:center}.air-datepicker-time--current-colon{margin:0 2px 3px;line-height:1}.air-datepicker-time--current-hours,.air-datepicker-time--current-minutes{line-height:1;font-size:19px;font-family:Century Gothic,CenturyGothic,AppleGothic,sans-serif;position:relative;z-index:1}.air-datepicker-time--current-hours:after,.air-datepicker-time--current-minutes:after{content:"";background:var(--adp-background-color-hover);border-radius:var(--adp-border-radius);position:absolute;inset:-3px -2px -2px;z-index:-1;opacity:0}.air-datepicker-time--current-hours.-focus-:after,.air-datepicker-time--current-minutes.-focus-:after{opacity:1}.air-datepicker-time--current-ampm{text-transform:uppercase;align-self:flex-end;color:var(--adp-time-day-period-color);margin-left:6px;font-size:11px;margin-bottom:1px}.air-datepicker-time--row{display:flex;align-items:center;font-size:11px;height:17px;background:linear-gradient(to right,var(--adp-time-track-color),var(--adp-time-track-color)) left 50%/100% var(--adp-time-track-height) no-repeat}.air-datepicker-time--row:first-child{margin-bottom:4px}.air-datepicker-time--row input[type=range]{background:none;cursor:pointer;flex:1;height:100%;width:100%;padding:0;margin:0;-webkit-appearance:none}.air-datepicker-time--row input[type=range]::-webkit-slider-thumb{-webkit-appearance:none}.air-datepicker-time--row input[type=range]::-ms-tooltip{display:none}.air-datepicker-time--row input[type=range]:hover::-webkit-slider-thumb{border-color:var(--adp-time-track-color-hover)}.air-datepicker-time--row input[type=range]:hover::-moz-range-thumb{border-color:var(--adp-time-track-color-hover)}.air-datepicker-time--row input[type=range]:hover::-ms-thumb{border-color:var(--adp-time-track-color-hover)}.air-datepicker-time--row input[type=range]:focus{outline:none}.air-datepicker-time--row input[type=range]:focus::-webkit-slider-thumb{background:var(--adp-cell-background-color-selected);border-color:var(--adp-cell-background-color-selected)}.air-datepicker-time--row input[type=range]:focus::-moz-range-thumb{background:var(--adp-cell-background-color-selected);border-color:var(--adp-cell-background-color-selected)}.air-datepicker-time--row input[type=range]:focus::-ms-thumb{background:var(--adp-cell-background-color-selected);border-color:var(--adp-cell-background-color-selected)}.air-datepicker-time--row input[type=range]::-webkit-slider-thumb{box-sizing:border-box;height:12px;width:12px;border-radius:3px;border:1px solid var(--adp-time-track-color);background:#fff;cursor:pointer;-webkit-transition:background var(--adp-transition-duration);transition:background var(--adp-transition-duration)}.air-datepicker-time--row input[type=range]::-moz-range-thumb{box-sizing:border-box;height:12px;width:12px;border-radius:3px;border:1px solid var(--adp-time-track-color);background:#fff;cursor:pointer;-moz-transition:background var(--adp-transition-duration);transition:background var(--adp-transition-duration)}.air-datepicker-time--row input[type=range]::-ms-thumb{box-sizing:border-box;height:12px;width:12px;border-radius:3px;border:1px solid var(--adp-time-track-color);background:#fff;cursor:pointer;-ms-transition:background var(--adp-transition-duration);transition:background var(--adp-transition-duration)}.air-datepicker-time--row input[type=range]::-webkit-slider-thumb{margin-top:calc(var(--adp-time-thumb-size)/2*-1)}.air-datepicker-time--row input[type=range]::-webkit-slider-runnable-track{border:none;height:var(--adp-time-track-height);cursor:pointer;color:#0000;background:rgba(0,0,0,0)}.air-datepicker-time--row input[type=range]::-moz-range-track{border:none;height:var(--adp-time-track-height);cursor:pointer;color:#0000;background:rgba(0,0,0,0)}.air-datepicker-time--row input[type=range]::-ms-track{border:none;height:var(--adp-time-track-height);cursor:pointer;color:#0000;background:rgba(0,0,0,0)}.air-datepicker-time--row input[type=range]::-ms-fill-lower{background:rgba(0,0,0,0)}.air-datepicker-time--row input[type=range]::-ms-fill-upper{background:rgba(0,0,0,0)}.air-datepicker{--adp-font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";--adp-font-size: 14px;--adp-width: 246px;--adp-z-index: 100;--adp-padding: 4px;--adp-grid-areas: "nav" "body" "timepicker" "buttons";--adp-transition-duration: .3s;--adp-transition-ease: ease-out;--adp-transition-offset: 8px;--adp-background-color: #fff;--adp-background-color-hover: #f0f0f0;--adp-background-color-active: #eaeaea;--adp-background-color-in-range: rgba(92, 196, 239, .1);--adp-background-color-in-range-focused: rgba(92, 196, 239, .2);--adp-background-color-selected-other-month-focused: #8ad5f4;--adp-background-color-selected-other-month: #a2ddf6;--adp-color: #4a4a4a;--adp-color-secondary: #9c9c9c;--adp-accent-color: #4eb5e6;--adp-color-current-date: var(--adp-accent-color);--adp-color-other-month: #dedede;--adp-color-disabled: #aeaeae;--adp-color-disabled-in-range: #939393;--adp-color-other-month-hover: #c5c5c5;--adp-border-color: #dbdbdb;--adp-border-color-inner: #efefef;--adp-border-radius: 4px;--adp-border-color-inline: #d7d7d7;--adp-nav-height: 32px;--adp-nav-arrow-color: var(--adp-color-secondary);--adp-nav-action-size: 32px;--adp-nav-color-secondary: var(--adp-color-secondary);--adp-day-name-color: #ff9a19;--adp-day-name-color-hover: #8ad5f4;--adp-day-cell-width: 1fr;--adp-day-cell-height: 32px;--adp-month-cell-height: 42px;--adp-year-cell-height: 56px;--adp-pointer-size: 10px;--adp-poiner-border-radius: 2px;--adp-pointer-offset: 14px;--adp-cell-border-radius: 4px;--adp-cell-background-color-hover: var(--adp-background-color-hover);--adp-cell-background-color-selected: #5cc4ef;--adp-cell-background-color-selected-hover: #45bced;--adp-cell-background-color-in-range: rgba(92, 196, 239, .1);--adp-cell-background-color-in-range-hover: rgba(92, 196, 239, .2);--adp-cell-border-color-in-range: var(--adp-cell-background-color-selected);--adp-btn-height: 32px;--adp-btn-color: var(--adp-accent-color);--adp-btn-color-hover: var(--adp-color);--adp-btn-border-radius: var(--adp-border-radius);--adp-btn-background-color-hover: var(--adp-background-color-hover);--adp-btn-background-color-active: var(--adp-background-color-active);--adp-time-track-height: 1px;--adp-time-track-color: #dedede;--adp-time-track-color-hover: #b1b1b1;--adp-time-thumb-size: 12px;--adp-time-padding-inner: 10px;--adp-time-day-period-color: var(--adp-color-secondary);--adp-mobile-font-size: 16px;--adp-mobile-nav-height: 40px;--adp-mobile-width: 320px;--adp-mobile-day-cell-height: 38px;--adp-mobile-month-cell-height: 48px;--adp-mobile-year-cell-height: 64px}.air-datepicker-overlay{--adp-overlay-background-color: rgba(0, 0, 0, .3);--adp-overlay-transition-duration: .3s;--adp-overlay-transition-ease: ease-out;--adp-overlay-z-index: 99}.air-datepicker{background:var(--adp-background-color);border:1px solid var(--adp-border-color);box-shadow:0 4px 12px #00000026;border-radius:var(--adp-border-radius);box-sizing:content-box;display:grid;grid-template-columns:1fr;grid-template-rows:repeat(4,max-content);grid-template-areas:var(--adp-grid-areas);font-family:var(--adp-font-family),sans-serif;font-size:var(--adp-font-size);color:var(--adp-color);width:var(--adp-width);position:absolute;transition:opacity var(--adp-transition-duration) var(--adp-transition-ease),transform var(--adp-transition-duration) var(--adp-transition-ease);z-index:var(--adp-z-index)}.air-datepicker:not(.-custom-position-){opacity:0}.air-datepicker.-from-top-{transform:translateY(calc(var(--adp-transition-offset) * -1))}.air-datepicker.-from-right-{transform:translate(var(--adp-transition-offset))}.air-datepicker.-from-bottom-{transform:translateY(var(--adp-transition-offset))}.air-datepicker.-from-left-{transform:translate(calc(var(--adp-transition-offset) * -1))}.air-datepicker.-active-:not(.-custom-position-){transform:translate(0);opacity:1}.air-datepicker.-active-.-custom-position-{transition:none}.air-datepicker.-inline-{border-color:var(--adp-border-color-inline);box-shadow:none;position:static;left:auto;right:auto;opacity:1;transform:none}.air-datepicker.-inline- .air-datepicker--pointer{display:none}.air-datepicker.-is-mobile-{--adp-font-size: var(--adp-mobile-font-size);--adp-day-cell-height: var(--adp-mobile-day-cell-height);--adp-month-cell-height: var(--adp-mobile-month-cell-height);--adp-year-cell-height: var(--adp-mobile-year-cell-height);--adp-nav-height: var(--adp-mobile-nav-height);--adp-nav-action-size: var(--adp-mobile-nav-height);position:fixed;width:var(--adp-mobile-width);border:none}.air-datepicker.-is-mobile- *{-webkit-tap-highlight-color:rgba(0,0,0,0)}.air-datepicker.-is-mobile- .air-datepicker--pointer{display:none}.air-datepicker.-is-mobile-:not(.-custom-position-){transform:translate(-50%,calc(-50% + var(--adp-transition-offset)))}.air-datepicker.-is-mobile-.-active-:not(.-custom-position-){transform:translate(-50%,-50%)}.air-datepicker.-custom-position-{transition:none}.air-datepicker-global-container{position:absolute;left:0;top:0}.air-datepicker--pointer{--pointer-half-size: calc(var(--adp-pointer-size) / 2);position:absolute;width:var(--adp-pointer-size);height:var(--adp-pointer-size);z-index:-1}.air-datepicker--pointer:after{content:"";position:absolute;background:#fff;border-top:1px solid var(--adp-border-color-inline);border-right:1px solid var(--adp-border-color-inline);border-top-right-radius:var(--adp-poiner-border-radius);width:var(--adp-pointer-size);height:var(--adp-pointer-size);box-sizing:border-box}.-top-left- .air-datepicker--pointer,.-top-center- .air-datepicker--pointer,.-top-right- .air-datepicker--pointer,[data-popper-placement^=top] .air-datepicker--pointer{top:calc(100% - var(--pointer-half-size) + 1px)}.-top-left- .air-datepicker--pointer:after,.-top-center- .air-datepicker--pointer:after,.-top-right- .air-datepicker--pointer:after,[data-popper-placement^=top] .air-datepicker--pointer:after{transform:rotate(135deg)}.-right-top- .air-datepicker--pointer,.-right-center- .air-datepicker--pointer,.-right-bottom- .air-datepicker--pointer,[data-popper-placement^=right] .air-datepicker--pointer{right:calc(100% - var(--pointer-half-size) + 1px)}.-right-top- .air-datepicker--pointer:after,.-right-center- .air-datepicker--pointer:after,.-right-bottom- .air-datepicker--pointer:after,[data-popper-placement^=right] .air-datepicker--pointer:after{transform:rotate(225deg)}.-bottom-left- .air-datepicker--pointer,.-bottom-center- .air-datepicker--pointer,.-bottom-right- .air-datepicker--pointer,[data-popper-placement^=bottom] .air-datepicker--pointer{bottom:calc(100% - var(--pointer-half-size) + 1px)}.-bottom-left- .air-datepicker--pointer:after,.-bottom-center- .air-datepicker--pointer:after,.-bottom-right- .air-datepicker--pointer:after,[data-popper-placement^=bottom] .air-datepicker--pointer:after{transform:rotate(315deg)}.-left-top- .air-datepicker--pointer,.-left-center- .air-datepicker--pointer,.-left-bottom- .air-datepicker--pointer,[data-popper-placement^=left] .air-datepicker--pointer{left:calc(100% - var(--pointer-half-size) + 1px)}.-left-top- .air-datepicker--pointer:after,.-left-center- .air-datepicker--pointer:after,.-left-bottom- .air-datepicker--pointer:after,[data-popper-placement^=left] .air-datepicker--pointer:after{transform:rotate(45deg)}.-top-left- .air-datepicker--pointer,.-bottom-left- .air-datepicker--pointer{left:var(--adp-pointer-offset)}.-top-right- .air-datepicker--pointer,.-bottom-right- .air-datepicker--pointer{right:var(--adp-pointer-offset)}.-top-center- .air-datepicker--pointer,.-bottom-center- .air-datepicker--pointer{left:calc(50% - var(--adp-pointer-size)/2)}.-left-top- .air-datepicker--pointer,.-right-top- .air-datepicker--pointer{top:var(--adp-pointer-offset)}.-left-bottom- .air-datepicker--pointer,.-right-bottom- .air-datepicker--pointer{bottom:var(--adp-pointer-offset)}.-left-center- .air-datepicker--pointer,.-right-center- .air-datepicker--pointer{top:calc(50% - var(--adp-pointer-size)/2)}.air-datepicker--navigation{grid-area:nav}.air-datepicker--content{box-sizing:content-box;padding:var(--adp-padding);grid-area:body}.-only-timepicker- .air-datepicker--content{display:none}.air-datepicker--time{grid-area:timepicker}.air-datepicker--buttons{grid-area:buttons}.air-datepicker--buttons,.air-datepicker--time{padding:var(--adp-padding);border-top:1px solid var(--adp-border-color-inner)}.air-datepicker-overlay{position:fixed;background:var(--adp-overlay-background-color);left:0;top:0;width:0;height:0;opacity:0;transition:opacity var(--adp-overlay-transition-duration) var(--adp-overlay-transition-ease),left 0s,height 0s,width 0s;transition-delay:0s,var(--adp-overlay-transition-duration),var(--adp-overlay-transition-duration),var(--adp-overlay-transition-duration);z-index:var(--adp-overlay-z-index)}.air-datepicker-overlay.-active-{opacity:1;width:100%;height:100%;transition:opacity var(--adp-overlay-transition-duration) var(--adp-overlay-transition-ease),height 0s,width 0s}.air-datepicker{--adp-accent-color: #c00;--adp-day-name-color: #000;--adp-day-name-color-hover: var(--adp-accent-color);--adp-cell-background-color-selected: var(--adp-accent-color);--adp-cell-background-color-selected-hover: var(--adp-accent-color);--adp-cell-background-color-hover: var(--adp-accent-color);--adp-background-color-active: var(--adp-accent-color);--adp-btn-color: #000;--adp-btn-color-hover: #fff;--adp-btn-background-color-hover: var(--adp-accent-color);--adp-btn-background-color-active: var(--adp-accent-color)}.air-datepicker-button{font-weight:700;transition-property:none}.air-datepicker-cell:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.air-datepicker-body--day-names{font-weight:700}.air-datepicker-cell.-current-{--tw-bg-opacity: 1;background-color:rgb(204 0 0 / var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.swiper-pagination-bullet-active{--tw-bg-opacity: 1;background-color:rgb(204 0 0 / var(--tw-bg-opacity))}.swiper-slide-visible{opacity:.3}.galery-foto-slider-thumb-swiper .swiper-slide-visible,.swiper-slide-thumb-active{opacity:1}.swiper-button-prev,.swiper-button-next{position:absolute;z-index:20}.swiper-button-disabled{opacity:.7}.swiper-pagination-custom{position:relative;bottom:0;margin-top:1.25rem}.swiper-pagination-bullet{height:.625rem;width:.625rem}.dark .swiper-pagination-bullet{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.swiper-pagination-bullet-active,.dark .swiper-pagination-bullet-active{--tw-bg-opacity: 1;background-color:rgb(204 0 0 / var(--tw-bg-opacity))}.red-bg .swiper-pagination-bullet{height:.625rem;width:.625rem;--tw-bg-opacity: 1;background-color:rgb(144 144 144 / var(--tw-bg-opacity))}.dark .red-bg .swiper-pagination-bullet,.red-bg .swiper-pagination-bullet-active{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.dark .red-bg .swiper-pagination-bullet-active{--tw-bg-opacity: 1;background-color:rgb(204 0 0 / var(--tw-bg-opacity))}.swiper-buttonprev,.swiper-buttonnext{position:absolute;z-index:20}.swiper-buttonnext{margin-right:110px}.swiper-buttonprev{margin-left:110px}@font-face{font-family:CNNsans;src:url(https://cdn.cnnindonesia.com/cnnid/fonts/CNNSansW04-Regular.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:CNNsans;src:url(https://cdn.cnnindonesia.com/cnnid/fonts/CNNSansW04-Bold.woff2) format("woff2");font-weight:700;font-style:normal;font-display:swap}@font-face{font-family:CNNsans;src:url(https://cdn.cnnindonesia.com/cnnid/fonts/CNNSansW04-Medium.woff2) format("woff2");font-weight:500;font-style:normal;font-display:swap}@font-face{font-family:CNN Clock Condensed;src:url(https://www.cnnindonesia.com/pemilu2024-assets/fonts/CNNClock-CondensedRegular.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:CNN Clock Condensed;src:url(https://www.cnnindonesia.com/pemilu2024-assets/fonts/CNNClock-CondensedMedium.woff2) format("woff2");font-weight:500;font-style:normal;font-display:swap}@font-face{font-family:CNN Clock Condensed;src:url(https://www.cnnindonesia.com/pemilu2024-assets/fonts/CNNClock-CondensedBold.woff2) format("woff2");font-weight:700;font-style:normal;font-display:swap}@font-face{font-family:CNN Clock Condensed;src:url(https://cdn.cnnindonesia.com/cnnid/fonts/CNNClock-CondensedRegular.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:CNN Clock Condensed;src:url(https://cdn.cnnindonesia.com/cnnid/fonts/CNNClock-CondensedMedium.woff2) format("woff2");font-weight:500;font-style:normal;font-display:swap}@font-face{font-family:CNN Clock Condensed;src:url(https://cdn.cnnindonesia.com/cnnid/fonts/CNNClock-CondensedBold.woff2) format("woff2");font-weight:700;font-style:normal;font-display:swap}@font-face{font-family:CNN Clock Condensed;src:url(https://cdn.cnnindonesia.com/cnnid/fonts/CNNClock-CondensedRegular.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:CNN Clock Condensed;src:url(https://cdn.cnnindonesia.com/cnnid/fonts/CNNClock-CondensedMedium.woff2) format("woff2");font-weight:500;font-style:normal;font-display:swap}@font-face{font-family:CNN Clock Condensed;src:url(https://cdn.cnnindonesia.com/cnnid/fonts/CNNClock-CondensedBold.woff2) format("woff2");font-weight:700;font-style:normal;font-display:swap}@font-face{font-family:CNN Clock Condensed;src:url(https://cdn.cnnindonesia.com/cnnid/fonts/CNNClock-CondensedRegular.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:CNN Clock Condensed;src:url(https://cdn.cnnindonesia.com/cnnid/fonts/CNNClock-CondensedMedium.woff2) format("woff2");font-weight:500;font-style:normal;font-display:swap}@font-face{font-family:CNN Clock Condensed;src:url(https://cdn.cnnindonesia.com/cnnid/fonts/CNNClock-CondensedBold.woff2) format("woff2");font-weight:700;font-style:normal;font-display:swap}@font-face{font-family:Merriweather;src:url(https://cdn.cnnindonesia.com/cnnid/fonts/merriweather/merriweather-v21-latin-regular.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:Merriweather;src:url(https://cdn.cnnindonesia.com/cnnid/fonts/merriweather/merriweather-v21-latin-700.woff2) format("woff2");font-weight:700;font-style:normal;font-display:swap}@font-face{font-family:Roboto;src:url(https://cdn.cnnindonesia.com/cnnid/fonts/roboto/roboto-v20-latin-regular.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:Roboto;src:url(https://cdn.cnnindonesia.com/cnnid/fonts/roboto/roboto-v20-latin-500.woff2) format("woff2");font-weight:500;font-style:normal;font-display:swap}@font-face{font-family:Merriweather;src:url(https://cdn.cnnindonesia.com/cnnid/fonts/merriweather/merriweather-v21-latin-regular.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:Merriweather;src:url(https://cdn.cnnindonesia.com/cnnid/fonts/merriweather/merriweather-v21-latin-700.woff2) format("woff2");font-weight:700;font-style:normal;font-display:swap}@font-face{font-family:Roboto;src:url(https://cdn.cnnindonesia.com/cnnid/fonts/roboto/roboto-v20-latin-regular.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:Roboto;src:url(https://cdn.cnnindonesia.com/cnnid/fonts/roboto/roboto-v20-latin-500.woff2) format("woff2");font-weight:500;font-style:normal;font-display:swap}.subjudul{font-family:Roboto,Arial,Helvetica,sans-serif}@font-face{font-family:CNNsans;src:url(https://cdn.cnnindonesia.com/cnnid/fonts/CNNSansW04-Regular.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:CNNsans;src:url(https://cdn.cnnindonesia.com/cnnid/fonts/CNNSansW04-Bold.woff2) format("woff2");font-weight:700;font-style:normal;font-display:swap}@font-face{font-family:CNNsans;src:url(https://cdn.cnnindonesia.com/cnnid/fonts/CNNSansW04-Medium.woff2) format("woff2");font-weight:500;font-style:normal;font-display:swap}html{font-family:CNNsans,sans-serif;font-weight:400;overflow-x:hidden}h1,h2,h3,h4,h5,h6{font-weight:500}*{transition:all .5s ease}