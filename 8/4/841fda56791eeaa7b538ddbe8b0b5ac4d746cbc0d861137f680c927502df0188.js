/**
 *  set_tracking.js
 *  「マイページナビ」にトラッキングコード追加
 *  「会員登録」にトラッキングコード追加
 */
function navi_tracking_function() {
    var eventUrl = location.href;
    var isGeneral = (location.hostname.match(/\.com$/));
    // PC navi
    var eventCategoryPc = isGeneral ? 'pc_general_pf' : 'pc_adult_pf';
    var trackingNaviLinkPc = document.querySelector('.hd-my__box--01');
    if (trackingNaviLinkPc != null) {
        if (window.addEventListener){
            trackingNaviLinkPc.addEventListener('click', function (e) {
                if (e.target.className ==='hd-links__link') {
                    ga('mutual.send', 'event', eventCategoryPc, e.target.id, eventUrl);
                } else if (e.target.parentElement.className ==='hd-links__link') {
                    ga('mutual.send', 'event', eventCategoryPc, e.target.parentElement.id, eventUrl);
                }
            });
        } else if (window.attachEvent){
            trackingNaviLinkPc.attachEvent('onclick', function (e) {
                if (e.srcElement.className ==='hd-links__link') {
                    ga('mutual.send', 'event', eventCategoryPc, e.srcElement.id, eventUrl);
                } else if (e.srcElement.parentElement.className ==='hd-links__link') {
                    ga('mutual.send', 'event', eventCategoryPc, e.srcElement.parentElement.id, eventUrl);
                }
            });
        }
    }

    // PC navi register
    var trackingRegisterPc = document.querySelector('.hd-btn--regist');
    if (trackingRegisterPc != null) {
        if (window.addEventListener){
            trackingRegisterPc.addEventListener('click', function (e) {
                ga('mutual.send', 'event', eventCategoryPc, 'register_header', '1');
            });
        } else if (window.attachEvent){
            trackingRegisterPc.attachEvent('onclick', function (e) {
                ga('mutual.send', 'event', eventCategoryPc, 'register_header', '1');
            });
        }
    }

    // SP navi
    var eventCategorySp = isGeneral ? 'sp_general_pf' : 'sp_adult_pf';
    var trackingNaviLinkSp= document.querySelector('.acount-boughtlist');
    if (trackingNaviLinkSp != null) {
        if (window.addEventListener){
            trackingNaviLinkSp.addEventListener('click', function (e) {
                if (e.target.tagName ==='A') {
                    ga('mutual.send', 'event', eventCategorySp, e.target.id, eventUrl);
                } else if (e.target.parentElement.tagName ==='A') {
                    ga('mutual.send', 'event', eventCategorySp, e.target.parentElement.id, eventUrl);
                }
            });
        } else if (window.attachEvent){
            trackingNaviLinkSp.attachEvent('onclick', function (e) {
                if (e.srcElement.nodeName ==='A') {
                    ga('mutual.send', 'event', eventCategorySp, e.srcElement.id, eventUrl);
                } else if (e.srcElement.parentElement.nodeName ==='A') {
                    ga('mutual.send', 'event', eventCategorySp, e.srcElement.parentElement.id, eventUrl);
                }
            });
        }
    }
}
if (window.addEventListener){
    window.addEventListener('load', navi_tracking_function);
} else if (window.attachEvent){
    window.attachEvent('onload', navi_tracking_function);
}