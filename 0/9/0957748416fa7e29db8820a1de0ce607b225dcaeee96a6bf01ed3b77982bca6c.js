var APP4YOU_SMART_BANNER_SCRIPT_VERSION = '1606870800';
(function () {
    if (!window.atob || !window.btoa) {
        window.atob = function (b64text) {
            return Base64.decode(b64text);
        };
        window.btoa = 
        var Base64 = {
            keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            encode: 
            decode: 
            _utf8_encode: 
            _utf8_decode:         }
    }
}());

var SMART_BANNER_EXTEND = {
    slider: [],
    sliderIdx: 0,
    makeSmartBannerSlider: function (parentEl, callback) {
        if (0 < $("[data-slider='true']", parentEl).length) {
            $("[data-slider='true']", parentEl).each(function (idx, item) {
                var sliderEl = $(item).find("ul");
                if (0 >= sliderEl.length) {
                    return true;
                }
                var mode = typeof $(item).attr("data-mode") === 'undefined' ? "horizontal" : $(item).attr("data-mode");
                var easing = typeof $(item).attr("data-easing") === 'undefined' ? "" : $(item).attr("data-easing");

                var minSlides = typeof $(item).attr("data-minSlides") === 'undefined' ? 1 : Number($(item).attr("data-minSlides"));
                var maxSlides = typeof $(item).attr("data-maxSlides") === 'undefined' ? 1 : Number($(item).attr("data-maxSlides"));
                var moveSlides = typeof $(item).attr("data-moveSlides") === 'undefined' ? 1 : Number($(item).attr("data-moveSlides"));
                var pause = typeof $(item).attr("data-pause") === 'undefined' ? 7000 : Number($(item).attr("data-pause"));
                var speed = typeof $(item).attr("data-speed") === 'undefined' ? 500 : Number($(item).attr("data-speed"));
                var startSlide = typeof $(item).attr("data-startSlide") === 'undefined' ? 0 : Number($(item).attr("data-startSlide"));
                var randomStart = typeof $(item).attr("data-randomStart") === 'undefined' ? 0 : Number($(item).attr("data-randomStart"));
                var slideWidth = typeof $(item).attr("data-slideWidth") === 'undefined' ? 0 : Number($(item).attr("data-slideWidth"));
                var slideMargin = typeof $(item).attr("data-slideMargin") === 'undefined' ? 0 : Number($(item).attr("data-slideMargin"));

                var auto = typeof $(item).attr("data-auto") === 'undefined' ? true : ($(item).attr("data-auto") == 'true' ? true : false);
                var pager = typeof $(item).attr("data-pager") === 'undefined' ? true : ($(item).attr("data-pager") == 'true' ? true : false);
                var controls = typeof $(item).attr("data-controls") === 'undefined' ? true : ($(item).attr("data-controls") == 'true' ? true : false);
                var adaptiveHeight = typeof $(item).attr("data-adaptiveHeight") === 'undefined' ? false : ($(item).attr("data-adaptiveHeight") == 'true' ? true : false);
                var autoHover = typeof $(item).attr("data-autoHover") === 'undefined' ? false : ($(item).attr("data-autoHover") == 'true' ? true : false);
                var responsive = typeof $(item).attr("data-responsive") === 'undefined' ? true : ($(item).attr("data-responsive") == 'true' ? true : false);
                var touchEnabled = typeof $(item).attr("data-touchEnabled") === 'undefined' ? true : ($(item).attr("data-touchEnabled") == 'true' ? true : false);
                var infiniteLoop = typeof $(item).attr("data-infiniteLoop") === 'undefined' ? true : ($(item).attr("data-infiniteLoop") == 'true' ? true : false);
                var hideControlOnEnd = typeof $(item).attr("data-hideControlOnEnd") === 'undefined' ? false : ($(item).attr("data-hideControlOnEnd") == 'true' ? true : false);
                var autoControls = typeof $(item).attr("data-autoControls") === 'undefined' ? false : ($(item).attr("data-autoControls") == 'true' ? true : false);

                var nextSelector = typeof $(item).attr("data-nextSelector") === 'undefined' ? "" : $(item).attr("data-nextSelector");
                var prevSelector = typeof $(item).attr("data-prevSelector") === 'undefined' ? "" : $(item).attr("data-prevSelector");
                var nextText = typeof $(item).attr("data-nextText") === 'undefined' ? "" : $(item).attr("data-nextText");
                var prevText = typeof $(item).attr("data-prevText") === 'undefined' ? "" : $(item).attr("data-prevText");
                var pagerCustom = 0 < $($(item).attr("data-pagerCustom")).length ? $($(item).attr("data-pagerCustom")) : "";
                var pagerAutoMake = typeof $(item).attr("data-pagerAutoMake") === 'undefined' ? false : ($(item).attr("data-pagerAutoMake") == 'true' ? true : false);
                var pagerTitle = typeof $(item).attr("data-pagerTitle") === 'undefined' ? "" : $(item).attr("data-pagerTitle");

                var sliderLiSize = 0;
                if (sliderEl.find(" > li")[0]) {
                    sliderLiSize = sliderEl.find(" > li")[0].length;
                }

                if (1 < sliderLiSize && pagerAutoMake && pagerTitle) {
                    if (0 < sliderLiSize) {
                        sliderEl.find(" > li").each(function (idx, item) {
                            $(pagerCustom).append('<a data-slide-index="' + idx + '" href="#none" class="-box -smo">' + $(item).find(pagerTitle).text() + '</a>');
                        });
                        $(pagerCustom).addClass("-grid" + sliderLiSize);
                    }
                }
                // console.log(touchEnabled);

//[APP4U-838][START] [스마트배너] 슬라이드 객체 라이브러리명 변경
                var slider = sliderEl.smartBannerBxSlider({
                    mode: mode,
                    easing: easing,
                    minSlides: minSlides,
                    maxSlides: maxSlides,
                    moveSlides: moveSlides,
                    slideWidth: slideWidth,
                    slideMargin: slideMargin,
                    pause: pause,
                    speed: speed,
                    startSlide: startSlide,
                    randomStart: randomStart,
                    auto: auto,
                    nextSelector: nextSelector,
                    prevSelector: prevSelector,
                    nextText: nextText,
                    prevText: prevText,
                    pager: (minSlides >= sliderLiSize) ? false : pager,
                    controls: (minSlides >= sliderLiSize) ? false : controls,
                    adaptiveHeight: adaptiveHeight,
                    autoControls: autoControls,
                    autoHover: autoHover,
                    touchEnabled: touchEnabled,
                    preloadImages: "all",
                    responsive: responsive,
                    infiniteLoop: infiniteLoop,
                    hideControlOnEnd: hideControlOnEnd,
                    pagerCustom: pagerCustom,
                    oneToOneTouch: false,
                    preventDefaultSwipeX: true,
                    preventDefaultSwipeY: false,
                    onSliderLoad: function () {
                        $(this).css("visibility", "visible");
                        if (typeof callback == 'function') {
                            callback(slider);
                        }
                    },
                });
                $(item).find('.bx-pager-link').hover(function () {
                    // ignore
                }, function (event) {
                    slider.startAuto();
                });

                $(item)slider.startAuto();
                });
                // console.log("item : ", item);
                // SMART_BANNER_EXTEND.slider[idx] = slider;
//[APP4U-838][END] [스마트배너] 슬라이드 객체 라이브러리명 변경
            });
        }
    },
//[APP4U-838][START] [스마트배너] 슬라이드 객체 라이브러리명 변경
    makeBanners: function () {
        var smartBanners = $("div[app4you-smart-banner*='smart-banner-admin'][app4you-smart-banner-html]");
        var withoutSlideCnt = 0;
        $(smartBanners).each(function (i, el) {
            var divEl = $(el).find('div');
            if ($(el).find('.bx-viewport').length > 0) {
                if (window.console) {
                    console.warn('[smart-banner] Already exists bx slider function...');
                }
                if ($(divEl).find('.bxslider,.smart-banner-bxslider').length > 0) {
                    $(divEl).find('.bxslider,.smart-banner-bxslider').css("visibility", "visible");
                    if (divEl.width() === 0 && $(divEl).attr('data-banner-size-width')) {
                        divEl.css('width', $(divEl).attr('data-banner-size-width'));
                    }
                }
                // $(divEl).find('.bx-pager-link').click(function (event) {
                // SMART_BANNER_EXTEND.slider.stopAuto();
                // });
                $(divEl).find('.bx-pager-link').hover(function () {
                    // ignore
                }, function (event) {
                    // SMART_BANNER_EXTEND.slider[i-withoutSlideCnt].startAuto();
                });
                return true;
            }
            if ($(divEl).find('.bxslider,.smart-banner-bxslider').length == 0) {
                // withoutSlideCnt++;
                return true;
            }
            SMART_BANNER_EXTEND.makeSmartBannerSlider(el[0], function (slider) {
                $(divEl).find('.bxslider,.smart-banner-bxslider').css("visibility", "visible");
                if (divEl.width() === 0 && $(divEl).attr('data-banner-size-width')) {
                    divEl.css('width', $(divEl).attr('data-banner-size-width'));
                }
                // $(divEl).find('.bx-pager-link').click(function (event) {
                // slider.stopAuto();
                // });
        // ignore
                }, function (event) {
                    // slider.startAuto();
                });
            });
        });
    }
//[APP4U-838][END] [스마트배너] 슬라이드 객체 라이브러리명 변경
};

var APP4YOU_SMART_BANNER_V1 = {
    setDefaultSlideProps: function (divEl) {
        divEl.attr('data-slider', 'true');
        divEl.attr('data-type', 'full');
        divEl.attr('data-mode', 'fade');
        divEl.attr('data-minslides', '1');
        divEl.attr('data-maxslides', '10');
        divEl.attr('data-controls', 'true');
        divEl.attr('data-adaptiveheight', 'false');
        divEl.attr('data-autohover', 'true');
        divEl.attr('data-responsive', 'true');
        return divEl;
    },
    shuffleArray: function (srcArr) {
        var j, x, i;
        for (i = srcArr.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = srcArr[i];
            srcArr[i] = srcArr[j];
            srcArr[j] = x;
        }
        return srcArr;
    },
    makeBanners: function (banners) {
        var bannerModuleInfo;
        var bannerModules = {};
        $.each(banners, function (bannerIdx, bannerInfo) {
            if (!bannerModules.hasOwnProperty(bannerInfo.banner_code)) {
                bannerModules[bannerInfo.banner_code] = {
                    options: {
                        'is_slide': bannerInfo.is_slide,
                        'slide_pause': bannerInfo.slide_pause,
                        'slide_button_type': bannerInfo.slide_button_type
                    },
                    banners: []
                };
            }
            bannerModules[bannerInfo.banner_code].banners.push(bannerInfo);
        });
        $("div[module*='smart-banner-admin'],div[app4you-smart-banner*='smart-banner-admin']:not([app4you-smart-banner-html])").each(function (i, el) {
            if ($(el).find('.bx-viewport').length > 0) {
                console.warn('[smart-banner] already exists bx slider function...');
                return true;
            }
            var moduleName = $(el).attr('app4you-smart-banner');
            if (!moduleName) {
                moduleName = $(el).attr('module');
            }
            var bannerModuleEl = $(el);
            var divEl, ulEl, liEl, imgEl;
            var slidePause, slideButtonType, slideButtonTypeClass;
            var linkTarget;
            var slideOptions = {
                'none': 'smart-banner-wrapper none',
                'circle': 'smart-banner-wrapper circle',
                'square': 'smart-banner-wrapper square'
            };

            bannerModuleEl.addClass('xans-smart-banner-admin xans-' + moduleName);
            if (!bannerModules.hasOwnProperty(moduleName)) {
                $(bannerModuleEl).find('img').css('display', 'block');
                return true;
            }

            bannerModuleInfo = bannerModules[moduleName];
            if (!bannerModuleInfo.banners || bannerModuleInfo.banners.length == 0) {
                $(bannerModuleEl).find('img').css('display', 'block');
                return true;
            }

            bannerModuleEl.empty();
            if (bannerModuleInfo.options.is_slide == 'T' && bannerModuleInfo.banners.length > 1) {

                slidePause = bannerModuleInfo.options.slide_pause;
                slideButtonType = bannerModuleInfo.options.slide_button_type;
                slideButtonTypeClass = slideOptions[slideButtonType] || 'smart-banner-wrapper none';

                divEl = $('<div></div>');
                divEl.addClass(slideButtonTypeClass);

                divEl = APP4YOU_SMART_BANNER_V1.setDefaultSlideProps(divEl);
                divEl.attr('data-pager', 'true');
                divEl.attr('data-auto', 'true');
                divEl.attr('data-speed', 500);
                divEl.attr('data-pause', slidePause * 1000);
                divEl.attr('data-adaptiveHeight', 'true');
//[APP4U-838][START] [스마트배너] 슬라이드 객체 라이브러리명 변경
                ulEl = $('<ul style="width: auto; position: relative; visibility:hidden;" class="smart-banner-bxslider"></ul>');
//[APP4U-838][END] [스마트배너] 슬라이드 객체 라이브러리명 변경
                for (var bannerIndex = 0; bannerIndex < bannerModuleInfo.banners.length; bannerIndex++) {
                    var bannerInfo = bannerModuleInfo.banners[bannerIndex];
                    liEl = $('<li></li>');
                    if (bannerInfo.use_link == 'T' && bannerInfo.link_url) {
                        linkTarget = bannerInfo.link_type == 'N' ? '_blank' : '_self';
                        imgEl = $('<a href="' + bannerInfo.link_url + '" target=' + linkTarget + ' onclick="APP4YOU_SMART_BANNER.incrementBanner(' + bannerInfo.banner_list_no + ')" style="cursor:pointer"><img src="' + bannerInfo.image_path + '"/></a>');
                    } else {
                        imgEl = $('<a href="#" onclick="APP4YOU_SMART_BANNER.incrementBanner(' + bannerInfo.banner_list_no + ', event)" style="cursor:default"><img src="' + bannerInfo.image_path + '"/></a>');
                    }
                    liEl.html(imgEl);
                    ulEl.append(liEl);
                }
                divEl.html(ulEl);
                bannerModuleEl.html(divEl);
                SMART_BANNER_EXTEND.makeSmartBannerSlider(bannerModuleEl[0], function (slider) {
                    $(divEl).find('ul').css("visibility", "visible");
                    if (divEl.width() === 0) {
                        divEl.css('width', bannerInfo.banner_size_width);
                    }
                    $(divEl).find('.bx-pager-          });
                    $(divEl).find('.bx-pager-link').hover(function () {
                        // ignore
                    }, function (event) {
                        slider.startAuto();
                    });
                });
            } else {
                bannerModuleInfo.banners = APP4YOU_SMART_BANNER_V1.shuffleArray(bannerModuleInfo.banners);
                bannerInfo = bannerModuleInfo.banners[0];
                if (bannerInfo.use_link == 'T' && bannerInfo.link_url) {
                    linkTarget = bannerInfo.link_type == 'N' ? '_blank' : '_self';
                    imgEl = $('<a href="' + bannerInfo.link_url + '" target=' + linkTarget + ' onclick="APP4YOU_SMART_BANNER.incrementBanner("' + bannerInfo.banner_list_no + '")" style="cursor:pointer"><img src="' + bannerInfo.image_path + '" style="width:100%"/></a>');
                } else {
                    imgEl = $('<a href="#" onclick="APP4YOU_SMART_BANNER.incrementBanner(' + bannerInfo.banner_list_no + ', event)" style="cursor:default"><img src="' + bannerInfo.image_path + '" style="width:100%"/></a>');
                }
                bannerModuleEl.html(imgEl);
            }
        });
    }
};


var APP4YOU_SMART_BANNER = (function () {

    function requestJSONP(url, callback, params) {

        // Create script with url and callback (if specified)
        var ref = window.document.getElementsByTagName('script')[0];
        var script = window.document.createElement('script');      if (params) {
            fullUrl += '&' + params;
        }
        script.src = fullUrl;

        ref.parentNode.ins(script).remove();
        };
    }

    function makeQueryString(params) {
        var esc = encodeURIComponent;
        return Object.keys(params).map(function (k) {
            return esc(k) + '=' + esc(params[k]);
        }).join('&');
    }

    function createHiddenForm(params) {
        var hiddenForm;
        var hiddenFormEl = $(document).find('[name=hidden-form]');
        if (!hiddenFormEl[0]) {
            hiddenForm = document.createElement('form');
            hiddenForm.name = 'hidden-form';
        } else {
            hiddenForm = hiddenFormEl[0]
        }
        $(hiddenForm).empty();
        var key, hiddenInputEl;
        for (key in params) {
            hiddenInputEl = document.createElement("input");
            hiddenInputEl.type = "hidden";
            hiddenInputEl.name = key;
            hiddenInputEl.value = params[key];
            hiddenForm.appendChild(hiddenInputEl);
        }
        document.body.appendChild(hiddenForm);
        return hiddenForm;
    }

    function createHiddenFrame() {
        var hiddenFrameEl = $(document).find('[name=hidden-frame]');
        if (!hiddenFrameEl[0]) {
            var iframe = document.createElement("iframe");
            iframe.name = 'hidden-frame';
            iframe.style.width = "0";
            iframe.style.height = "0";
            iframe.style.display = "none";
            document.body.appendChild(iframe);
        }
    }

    function requestHttpRequest(url, method, params, callback) {
        if (method == 'GET') {
            requestJSONP(url, 'smartBannerApiCallback', makeQueryString(params));
        } else {
            createHiddenFrame();
            params.callback = 'smartBannerApiCallback';
            var hiddenForm = createHiddenForm(params);
            hiddenForm.target = 'hidden-frame';
            hiddenForm.method = 'POST';
            hiddenForm.action = url;
            hiddenForm.submit();
        }
    }

    function incrementBannerApi(params, callback) {
        var url = getHostName() + '/SmartBanner/tunnel/external/incrementClickCount';
        window.smartBannerApiCallback = function (jsonData) {
            callback(jsonData);
        };
        requestHttpRequest(url, 'POST', params, window.smartBannerApiCallback);
    }

    function incrementBanner(bannerListNo, event) {
        if (event) {
            event.preventDefault();
        }
        if (!bannerListNo) {
            return false;
        }
        var rawParams = {
            'mall_id': CAFE24API.MALL_ID,
            'shop_no': CAFE24API.SHOP_,
        };
        var verifyKey = window.btoa(JSON.stringify(rawParams));
        var params = {
            'verify_key': verifyKey
        };
        incrementBannerApi(params, function () {
            // ignore
        });
    }

    function getBannersApi(isReplaceHtml, callback) {
        var url = getHostName() + '/SmartBanner/tunnel/external/useBanners';
        var currentPage = window.location.protocol + "//" + window.location.host;
        var paths = window.location.pathname.split('/');
        if (paths && paths.length > 0) {
            currentPage += "/" + window.location.pathname.split('/')[1];
        }
        var rawParams = {
            'mall_id': CAFE24API.MALL_ID,
            'shop_no': CAFE24API.SHOP_NO,
            // 'is_replace
        };
        var verifyKey = window.btoa(JSON.stringify(rawParams));
        f,
  sSmartBannerScriptUrl);
        // return scriptTgaUrl.protocol +     // return EC_FRONBanner: function (banno, event);
        },
        getBanners: function (isReplaceHtml, callback) {
            return getBannersApi(isReplaceHtml, callback);
        },
        getHostName: function () {
            return getHostName();
        }
    }
}());

$(document).ready(function () {

    try {
        var version = typeof APP4YOU_SMART_BANNER_SCRIPT_VERSION === 'undefined' ? '' : APP4YOU_SMART_BANNER_SCRIPT_VERSION;
        var hostName = APP4YOU_SMART_BANNER.getHostName();
        var assetsPath = hostName + '/SmartBanner/assets';
        var bxCssUrl = assetsPath + '/css/jquery.bxslider.css';
        var bxSliderUrl = assetsPath + '/js/jquery-bxslider/jquery.bxslider-4.0.min.js';

// [APP4U-882][START][스마트배너] 최대 사이즈 제한 설정 및 에디봇 다지인 배너 HTML 생성
        if (version) {
            bxCssUrl += '?vs=' + version;
            bxSliderUrl += '?vs=' + version;
        }
// [APP4U-882][END][스마트배너] 최대 사이즈 제한 설정 및 에디봇 다지인 배너 HTML 생성

        $("head").append('<link rel="stylesheet" type="text/css" href="' + bxCssUrl + '"/>');
        // $("head").append('<script type="text/javascript" src="' + bxSliderUrl + '"></script>');
        $.getScript(bxSliderUrl, function () {
            SMART_BANNER_EXTEND.makeBanners();
            var oldBannerCodes = $("div[module*='smart-banner-admin'],div[app4you-smart-banner*='smart-banner-admin']:not([app4you-smart-banner-html])");
            if (!oldBannerCodes.length) {
                if (window.console) {
                    console.log('[smart-banner] Not Found old version Smart Banner');
                }
                return false;
            }

            if (!EC_FRONT_JS_CONFIG_MANAGE && !EC_FRONT_JS_CONFIG_MANAGE.sDefaultAppDomain) {
                // if (!EC_FRONT_JS_CONFIG_MANAGE && !EC_FRONT_JS_CONFIG_MANAGE.sSmartBannerAppDomain) {
                if (window.console) {
                    console.error('[smart-banner] Not Found Smart Banner Script URL');
                }
                return false;
            }

            Not Defined CAFE24API');
                }
                return false;
            }
            var isReplaceHtml = oldBannerCodes.not(":has(img)").length > 0;
            APP4YOU_SMART_BANNER.getBanners(isReplaceHtml, function (response) {
                APP4YOU_SMART_BANNER_V1.makeBanners(response.result);
            });
        });

    } catch (e) {
        if (typeof(e) == 'object' && e.stack && window.console) {
            console.error(e);
        }
    }
});
