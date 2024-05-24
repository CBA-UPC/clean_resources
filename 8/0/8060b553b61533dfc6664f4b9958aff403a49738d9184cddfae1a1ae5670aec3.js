'use strict';
var version = '202103191120';
/**
 * 이 파일을 수정할경우 반드시 purge 실행.
 */

wiopera);
    return check;
};

(function () {
    if (!window.atob) {
        window.atob = function (b64text) { return Base64.decode(b64tex Base64.encode(utf8text); }

        var Base64 = {
            keyStr      : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="eturn output;
            }eturn output;
            }turn utftext;
            }eturn string;
            }
        }
    }
}());

/**
 * APP4U-1482 : 스마트팝업
 */
var APP4YOU_SMART_POPUP = {

    /**
     * slickSlider 실행
     *
     * @param sliderParam
     */
    runSlickSlider: function (sliderParam) {

        // EC$ 로딩이 완료되지 않았으면 재시도
        if (typeof EC$ == 'undefined') {

            console.log('EC$ Loading...');

            setTimeout(function () {
                APP4YOU_SMART_POPUP.runSlickSlider(sliderParam)
            }, 200);

            return;
        }

        (function ($) {

            $(document).ready(function () {
                try {

                    // slick 플러그인 로딩이 완료되지 않았으면 재시도
                    if (typeof $().smartPopupSlick == 'un) {
                            APP4YOU_SMART_POPUP.runSlickSlider(sliderParam)
                        }, 200);

                        return;
                    }

                    // 슬라이더 적용
                    $(sliderParam.targetObj).smartPopupSlick({
                        dots         : true,
                        autoplay     : sliderParam.autoplay,
                        autoplaySpeed: sliderParam.autoplaySpeed,
                        arrows       : sliderParam.arrows
                    });

                    // 슬라이더 아이콘 적용
                    if (sliderParam.slideButtonType === 'square') {
                        $(sliderParam.targetObj).find('.app-smart-popup-slider-dots').addClass('app-smart-popup-bar');
                    }

                    // APP4U-2976 : 슬라이드 설정이 완료되면 보이기
                    $(sliderParam.targetObj�시 슬라이드처리 동작하도록 추가.
                    $(sliderParam.targetObj).on('mouseleave', function(event){
                        $(this).smartPopupSlick('play');
                    });

                } catch (e) {
                    if (typeof(e) == 'object' && e.stack && window.console) {
                        console.error(e);
                    }
                }
            });

        }(EC$));
    },

    /**
     * APP4U-2852 : 팝업클릭수 갱신
     * 
     * @param param
     */
    updateClickCnt: function (param) {

        let sUrl = url + '/SmartPopup/browse/front';

        $.ajax({
            xhrFields    : {
                withCredentials: true
            },
            data         : {
                'params': param
            },
            type         : "GET",
            url          : sUrl,
            dataType     : 'jsonp',
            cache        : true
        });

        return true;
    }
};

var type = mobileAndTabletcheck() === true ? 'M' : 'P';
var scriptPath = document.createElement('a');

// ECQAUNIT-53220 : 도메인 분리
//scriptPath.href = (document.currentScript || document.querySelector('script[src*="scriptTags"]')).src;
scriptPath.href = app4youSmartpopupAppScripts.src;

var url = scriptPath.origin || scriptPath.protocol + '//' + scriptPath.hostname;
$(function () {
    var cssId = "smartPopup";
    var pageCode = $("meta[name='path_role']").attr('content');
    var pageUrl = $("meta[property='og:url']").attr('content');

    if (typeof pageCode === 'undefined' || typeof pageCode !== 'string') {
        pageCode = 'MAIN';
        if(typeof pageUrl !== 'undefined'){
            pageCode = getPageCode(pageUrl)
        }
    }
    if (!document.getElementById(cssId)) {
        var head = document.getElementsByTagName('head')[0];
        var link = document.createElement('link');
        link.id = cssId;
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = url + '/SmartPopup/assets/css/front.css?vs=' + version;
        link.media = 'all';
        head.appendChild(link);

        // APP4U-1482 : slick 슬라이더 추가
        var slickCssUrl = url + '/SmartPopup/assets/uipack/slick/1.8.1/css/smart-popup.slick.css?vs=' + version;
        $("head").append('<link rel="stylesheet" type="text/css" href="' + slickCssUrl + '"/>');

        var slickSliderUrl = url + '/SmartPopup/assets/uipack/slick/1.8.1/js/smart-popup.slick.js?vs=' + version;
        $("head").append('<script src="' + slickSliderUrl + '"/>');
    }

    var path = url + '/SmartPopup/tunnel/front/getPopupList';

    if (typeof JSON !== "object") {
        var script = document.createElement('script');
        script.src = url + '/SmartPopup/assets/js/common/json2.js';

        document.getElementsByTagName('body')[0].appendChild(script);
    }

    var params = window.btoa(JSON.stringify({
        'mall_id' : CAFE24API.MALL_ID,
        'shop_no' : CAFE24API.SHOP_NO,
        'type'    : type,
        'pageCode'    : pageCode,
        'language': SHOP.getLanguage()
    }));

    try {
        $.ajax({
            xhrFields    : {
                withCredentials: true
            },
            data         : {
                'params': params
            },
            type         : "GET",
            url          : path,
            dataType     : 'jsonp',
            jsonpCallback: 'makePopup',
            cache        : true
        });
    } catch (e) {
        // empty
    }

    document.body.addEventListener('click', function (event) {
        var element = event.target;
        var className = element.className;
        if (className === undefined || className === '') {
            return;
        }
        var classList = element.className.split(' ');
        if (classList.indexOf('smart-popup-close') >= 0) {
            var popup = element.parentNode.parentNode;
            if (popup.className.split(' ').indexOf('app-smart-popup') >= 0) {
                if (classList.indexOf('smart-popup-today') >= 0) {
                    setSmartPopupCookie('SmartPopup_' + CAFE24API.MALL_ID + '_' + element.getAttribute('data-popup-no'), 'done', 1);
                } else if (classList.indexOf('smart-popup-week') >= 0) {
                    setSmartPopupCookie('SmartPopup_' + CAFE24API.MALL_ID + '_' + element.getAttribute('data-popup-no'), 'done', 7);
                }

                popup.style.visibility = 'hidden';
            }
        }
    });
});

function setSmartPopupCookie(name, value, expiredays) {
    var todayDate = new Date();
    todayDate.setDate(todayDate.getDate() + expiredays);
    document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";"
}

function makePopup(response) {
    if (response.result === true) {
        var current = new Date();
        var zindex = 2147483647;
        var result = response.data.list;
        var config = response.data.config;
        var marginLeft = 10;
        var marginTop = 10;
        var maxHeight = 10;
        var innerWidth = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;

        var maxSize = 1000;
        var btnGroupHeight = 61;

        var body = document.getElementsByTagName('body')[0];
        var closeBtnProto = document.createElement('button');
        closeBtnProto.className = 'smart-popup-close';
        for (var idx = 0; idx < result.length; idx++) {
            var item = result[idx];
            if (document.cookie.indexOf('SmartPopup_' + CAFE24API.MALL_ID + '_' + item.popup_manage_no) >= 0) {
                continue;
            }

            /*if (item.use_during === 'T') {
                var start = new Date(item.start_datetime);
                var end = new Date(item.end_datetime);

                if (current < start || current > end) {
                    continue;
                }
            }*/
            var popup = document.createElement('div');
            popup.className = 'app-smart-popup';
            popup.style.zIndex = (zindex - idx).toString();

            // APP4U-1482 : 가장 큰 이미지 사이즈에 맞춤
            var orgWidth = item.image_max_size.width;
            var orgHeight = item.image_max_size.height;

            var ratio = 1.0;
            var width = orgWidth;

            if (config.use_overlap === 'F' && type === 'P') {

                if (width > maxSize) {
                    width = maxSize;
                    ratio = width / orgWidth;
                }
                var height = orgHeight * ratio;
                /*if (height > maxSize) {
                    height = maxSize;
                    ratio = height / orgHeight;
                    width = orgWidth * ratio;
                }*/

                if (marginLeft + width + 20 < innerWidth) {
                    popup.style.marginLeft = marginLeft.toString() + 'px';
                    popup.style.marginTop = marginTop.toString() + 'px';
                    marginLeft += width + 14;

                } else {
                    popup.style.marginLeft = '10px';
                    popup.style.marginTop = maxHeight + 'px';
                    marginLeft = 24 + width;
                    marginTop = maxHeight;
                }
                
                // ECQAUNIT-51128 : 팝업 이미지 겹쳐보이지 않게 처리 순서 변경
                if (maxHeight < marginTop + height + btnGroupHeight + 12) {
                    maxHeight = marginTop + height + btnGroupHeight + 12;
                }
            }

            var popupBody = document.createElement('div');

            // 슬라이드 사용인 경우
            if (item.is_slide == 'T') {

                let slideImageWidth = item.image_max_size.width;

                popupBody.className = 'app-smart-popup-slider';
                popupBody.id = 'app-smart-popup-slider-' + idx;

                if (type === 'P') {

                    // pc 인경우 위에서 계산된 가로길이를 사용
                    // ECQAUNIT-51186 : 슬라이더 크기도 이미지 최대 사이즈와 동일하게 제한 (pc 일경우 1000 px)
                    if (width > 1000) {
                        width = 1000;
                    }
                    slideImageWidth = width;
                } else {
                    // 모바일인 경우 화면크기를 넘지않게 표시
                    if (width > innerWidth) {
                        slideImageWidth = innerWidth - 20;
                    }
                }

                popupBody.style.width = slideImageWidth.toString() + 'px';

                // APP4U-2976 : 슬라이드 설정이 완료될때까지 표시하지 않음. (border 도 표시하지 않게 하기 위해)
                popup.style.display = 'none';
            }

            for (var imgIdx = 0; imgIdx < item.popup_image_list.length; imgIdx++) {

                // 이미지 영역
                var popupImageBody = document.createElement('div');
                popupImageBody.className = 'smart-popup-img';

                // 이미지 정보 취득
                var imgInfo = item.popup_image_list[imgIdx];

                var img = document.createElement('img');
                img.src = imgInfo.image_path;
                img.style.maxWidth = (type === 'P') ? '1000px' : '100%';

                if (imgInfo.use_link === 'T') {
                    var link = document.createElement('a');

                    // APP4U-2852 : URL 상대경로 허용
                    // link.href = url + '/SmartPopup/browse/front/?params=' + imgInfo.params;
                    link.href = imgInfo.link_url;
                    link.setAttribute("onclick","APP4YOU_SMART_POPUP.updateClickCnt('" + imgInfo.params + "');");

                    if (imgInfo.link_type === 'N') {
                        link.target = '_blank';
                    }
                    link.appendChild(img);
                    popupImageBody.appendChild(link);
                } else {
                    popupImageBody.appendChild(img);
                }

                popupBody.appendChild(popupImageBody);

                // 슬라이드 사용안함일경우 이미지 한개만 추가
                if (item.is_slide != 'T') {
                    break;
                }
            }

            var during = document.createElement('button');
            during.type = 'button';
            during.className = 'smart-popup-close';
            during.setAttribute('data-popup-no', item.popup_manage_no);
            during.innerText = item.cookie_msg;
            during.className += ' smart-popup-' + item.class_name;
            var btnGroup = document.createElement('div');
            btnGroup.className = 'smart-popup-btns';
            var closeBtn = closeBtnProto.cloneNode(true);
            closeBtn.innerText = item.close_btn;

            btnGroup.appendChild(during);
            btnGroup.appendChild(closeBtn.cloneNode(true));

            popup.appendChild(popupBody);
            popup.appendChild(btnGroup);
            body.appendChild(popup);

            // 슬라이더 사용인 경우
            if (item.is_slide == 'T') {

                var sliderParam = {
                    targetObj    : '#app-smart-popup-slider-' + idx,
                    scriptHost   : url,
                    autoplay     : true,
                    autoplaySpeed: item.slide_pause * 1000,
                    slideButtonType : item.slide_button_type,
                    arrows       : false
                };

                // slickSlider 실행
                APP4YOU_SMART_POPUP.runSlickSlider(sliderParam);
            }
        }

        postProcess();
    }
}

function postProcess() {
    var popupList = document.getElementsByClassName('app-smart-popup');

    for (var idx = 0; idx < popupList.length; idx++) {
        var element = popupList[idx];
    }
}

function getPageCode(url){
    if (url.indexOf('product/list.html') >=0 || (url.indexOf('display') === -1 && url.indexOf('category') >= 0)) {
        return 'PRODUCT_LIST';
    }
    if (url.indexOf('product/detail.html') >=0 || (url.indexOf('category') >=0 && url.indexOf('display') >= 0)) {
        return 'PRODUCT_DETAIL';
    }
    if (url.indexOf('order/basket.html') >=0 ) {
        return 'ORDER_BASKET';
    }
    if (url.indexOf('order/orderform.html') >=0 ) {
        return 'ORDER_ORDERFORM';
    }
    if (url.indexOf('order/order_result.html') >=0 ) {
        return 'ORDER_ORDERRESULT';
    }

    if (url.indexOf('board/index.html') >=0 ) {
        return 'BOARD_MAIN';
    }
    if (url.indexOf('board/product/list.html') >=0 ) {
        return 'BOARD_PRODUCT_LIST';
    }
    if (url.indexOf('myshop/index.html') >=0 ) {
        return 'MYSHOP_MAIN';
    }
    if (url.indexOf('product/project.html') >=0 ) {
        return 'PRODUCT_PROJECT';
    }

    return 'MAIN';
}