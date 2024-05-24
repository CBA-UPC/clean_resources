(window.webpackJsonp=window.webpackJsonp||[]).push([[57],[]]);/
/***Date : 2009-06-08 *****/
/***Description : 中文版国内机票2009改版 公共JS ****/
/*&Id&*/

//页面所有相关参数的命名空间
if ($isUndefined($$.module.fltDomestic)) { $$.module.fltDomestic = {}; }

//后台程序员调用的接口
var $interface = {};

//校验字符串是否为数值
String.prototype.isNumber = function () {
    return parseFloat(this) == this;
};

//身份证取性别和出生日期
String.prototype.parseChinaIdCard = function () {
    if (this.isChinaIDCard()) {
        var x, b;
        if (this.length == 15) {
            x = parseInt(this.charAt(14), 10) % 2 ? 'M' : 'F';
            b = this.replace(/^\d{6}(\d{2})(\d{2})(\d{2}).+$/, "19$1-$2-$3");
        } else {
            x = parseInt(this.charAt(16), 10) % 2 ? 'M' : 'F';
            b = this.replace(/^\d{6}(\d{4})(\d{2})(\d{2}).+$/, "$1-$2-$3");
        }
        return [x, b];
    }
    return null;
};

//校验字符串是否为手机号
String.prototype.isMobile = function () {
    var reg = $$.status.version == "zh-cn" ? /^1([3587]\d{9}|47\d{8})$/ : /^((852|853)(5|6|8|9)\d{7}|1[358]\d{9}|659\d{7}|601[1-9]\d{7}|8869\d{8})$/;
    return reg.test(this);
}


//由字符串格式转成日期格式
String.prototype.convertToDate = function () {
    var arr = this.match(/^((19|20)\d{2})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/);
    if (!arr) return false;
    for (var i = 1; i < 8; i++)
        arr[i] = parseInt(arr[i], 10);
    if (arr[3] < 1 || arr[3] > 12 || arr[4] < 1 || arr[4] > 31) return false;
    var _t_date = new Date(arr[1], arr[3] - 1, arr[4], arr[5], arr[6], arr[7]);
    return _t_date.getDate() == arr[4] ? _t_date : null;
};

//公共校验接口
String.prototype.isCommonValidate = function (fn) {
    return fn(this);
};


//灰色浮出层提示框
//floatntc模块
function posX(e) {
    var x = e.offsetLeft;
    if (e.offsetParent != null) x += posX(e.offsetParent);
    return x;
}
Ctrip.module.floatntc = function (obj) {
    obj.module.floatntc = new function () {
        this.enabled = true;
        this.tip = obj.getAttribute("mod_floatntc_tip");
        this.check = function () { return true; };
        this.isNull = function () {
            return obj.value.trim() == "" || obj.value == obj.module.floatntc.tip;
        };
        this.x = posX(obj);
        this.y = posY(obj);
    };

    function posX(e) {
        var x = e.offsetLeft;
        if (e.offsetParent != null) x += posX(e.offsetParent);
        return x;
    }

    function posY(e) {
        var y = e.offsetTop;
        if (e.offsetParent != null) y += posY(e.offsetParent);
        return y;
    }


    obj.$r("focus", function () {
        var fo = obj.module.floatntc;
        if (fo.enabled == true && fo.isNull()) {
            var gt = $("graytips");
            gt.style.display = "";
            gt.$("ul")[0].$("li")[0].innerHTML = fo.tip;
            gt.style.width = obj.offsetWidth + "px";

            gt.$setPos(obj, "lb", "lt");
            gt.$setIframe();
            gt.style.zIndex = 101;
        }
    }, 30);

    obj.$r("blur", function () {
        if (obj.module.floatntc.enabled == true) {
            var gt = $("graytips");
            gt.style.display = "none";
            gt.$clearIframe();
        }
    }, 91);
}

function openDetail() {
    $("details").style.display = $("hidedetail").style.display = "";
    $("opendetail").style.display = "none";
}

function hideDetail() {
    $("details").style.display = $("hidedetail").style.display = "none";
    $("opendetail").style.display = "";
}

$r("domready", function () {
    if ($("price_bar")) {
        function posY(e) {
            var y = e.offsetTop;
            if (e.offsetParent != null) y += posY(e.offsetParent);
            return y;
        }

        function magicScroll() {
            var st = ___.scrollTop || document.body.scrollTop;
            if ($$.browser.IE && $$.browser.IE6) {
                var ch = ___.clientHeight;
                var sh = ___.scrollHeight;
                if (parseInt(st) + parseInt(ch) >= parseInt(sh) - 20) {
                    obj.style.position = "absolute";
                    obj.style.bottom = "auto";
                    obj.style.top = (st + ch - obj.offsetHeight - (parseInt(obj.style.marginTop, 10) || 0) - (parseInt(obj.style.marginBottom, 10) || 0) - 80) + "px";
                } else if (parseInt(st) == 0) {
                    obj.style.position = "static";
                }
            } else {
                obj.className = st > ot ? "flt_ptfix" : "";
            }
        }

        var obj = $("price_bar");
        var obj_in = obj && obj.$("div")[0];
        var ot = posY($("base_main"));
        window.onscroll = magicScroll;
        magicScroll();
    }
});




//贴心提示
$r("domReady", function () {
    var faqFrame = $("faqFrame");
    if (!faqFrame)
        return;
    try {
        var faqWin = faqFrame.contentWindow;
        setTimeout(function () {
            var src = faqFrame.getAttribute("srcTag");
            faqWin.location.replace(src);
            var clock = setInterval(function () {
                if ($getCookie("hearttips") != null) {
                    faqFrame.style.width = $getCookie("hearttips", "width") + "px";
                    faqFrame.style.height = $getCookie("hearttips", "height") + "px";
                    faqFrame.style.marginBottom = "10px";
                    $$.cookie.domain = '.' + location.host.split(".").slice(-2).join('.');
                    document.cookie = "hearttips=; expires=" + new Date(0) + "; domain=" + $$.cookie.domain + "; path=/";
                    clearInterval(clock);
                }
            }, 500);
        }, 2000);
    } catch (e) { }
});

//iframe广告模块
$$.module.adFrame = {
    clock: null,
    list: [],
    interval: 800,
    timeout: 1500,
    count: 0
};
Ctrip.module.adFrame = function (obj) {
    var $ref = $$.module.adFrame;
    function frameAdInit() {
        var ad = $ref.list.shift();
        var src = ad.getAttribute("mod_adFrame_src") || "about:blank";
        var style = ad.getAttribute("mod_adFrame_style") || "";
        ad.innerHTML = "<iframe marginheight=\"0\" marginwidth=\"0\" frameborder=\"0\" scrolling=\"no\" style=\"" + style + "\"" + " src=\"" + src + "\"><\/iframe>";
        if ($ref.list.length)
            setTimeout(arguments.callee, $ref.interval);
        else
            $ref.clock = null;
    }
    $ref.list.push(obj);
    if (!$ref.clock) {
        if ($ref.count)
            frameAdInit();
        else
            $ref.clock = setTimeout(frameAdInit, $ref.timeout);
    }
    $ref.count++;
};


//linklist2模块，首页广告
Ctrip.module.linklist2 = function (obj) {
    //var s ='<dd></dd>';
    //var s='<a class="'+cls+'" href="{$link}" title="{$text}" target="{$target}">{$text}</a>';

    var a = obj.getAttribute('mod_linklist_id');
    if (!a || !(window.c_linklist2) || !(a = window.c_linklist2[a]) || a.constructor !== Array)
        return;
    for (var i = 0; i < a.length; i++) {
        var t = a[i].split('|', 2);
        var s = '<a href="{$link}" title="{$text}" target="{$target}">{$text}</a>';
        var dd = $c("dd");
        a[i] = s.replaceWith({
            text: $s2t(t[0]),
            link: t[1],
            target: a[i].target || '_blank'
        });
        dd.innerHTML = a[i];
        obj.parentNode.insertBefore(dd, obj.nextSibling);
    }
};


// 首页公告栏关闭按钮
$r('domready', function () {
    var tipsCloseButton = $("tips_close");
    if (tipsCloseButton) {
        tipsCloseButton.$r("click", function () {
            this.parentNode.parentNode.style.display = "none";
        });
    }
});




G"><button aria-label="门票·活动 按回车键打开菜单" class="lsn_top_nav_qdgwe"><span class="pc_home-menpiaohuodong lsn_top_nav_icon_ijnym"></span><span class="lsn_top_nav_font_4h1KU">门票·活动</span></button><div class="lsn_son_nav_wrap_TJFu2 lsn_son_show_9gw-I"></div></div><div class="lsn_first_nav_wrap_LZamG"><button aria-label="用车 按回车键打开菜单" class="lsn_top_nav_qdgwe"><span class="pc_home-yongche lsn_top_nav_icon_ijnym"></span><span class="lsn_top_nav_font_4h1KU">用车</span></button><div class="lsn_son_nav_wrap_TJFu2 lsn_son_show_9gw-I"><a href="//car.ctrip.com/zuche/landing?isList=0#ctm_ref=chp_var_txt" target="" class="lsn_son_nav_LbhRN"><span class="lsn_font_data_rSNIK">国内租车</span></a><a href="//car.ctrip.com/zuche/osdlanding#ctm_ref=chp_var_txt" target="" class="lsn_son_nav_LbhRN"><span class="lsn_font_data_rSNIK">境外租车</span></a><a href="//car.ctrip.com/airport-transfers/landing" target="" class="lsn_son_nav_LbhRN"><span class="lsn_font_data_rSNIK">接送机站</span></a><a href="//car.ctrip.com/chartered-online/index" target="" class="lsn_son_nav_LbhRN"><span class="lsn_font_data_rSNIK">按天包车</span></a></div></div><div class="lsn_first_nav_wrap_LZamG"><button aria-label="全球购 按回车键打开菜单" class="lsn_top_nav_qdgwe"><span class="pc_home-chujing lsn_top_nav_icon_ijnym"></span><span class="lsn_top_nav_font_4h1KU">全球购</span></button><div class="lsn_son_nav_wrap_TJFu2 lsn_son_show_9gw-I"><a href="//g.ctrip.com" target="" class="lsn_son_nav_LbhRN"><span class="lsn_font_data_rSNIK">名店购</span></a><a href="//pages.c-ctrip.com/shoppingchic/unionpay/default.html" target="" class="lsn_son_nav_LbhRN"><span class="lsn_font_data_rSNIK">银联特惠</span></a><a href="//forex.ctrip.com" target="" class="lsn_son_nav_LbhRN"><span class="lsn_font_data_rSNIK">外币兑换</span></a></div></div><div class="lsn_first_nav_wrap_LZamG"><button aria-label="礼品卡 按回车键打开菜单" class="lsn_top_nav_qdgwe"><span class="pc_home-lipinka lsn_top_nav_icon_ijnym"></span><span class="lsn_top_nav_font_4h1KU">礼品卡</span></button><div class="lsn_son_nav_wrap_TJFu2 lsn_son_show_9gw-I"><a href="//lipin.ctrip.com/lipinonline/" target="" class="lsn_son_nav_LbhRN"><span class="lsn_font_data_rSNIK">礼品卡首页</span></a><a href="//lipin.ctrip.com/lipinonline/static/intentional" target="" class="lsn_son_nav_LbhRN"><span class="lsn_font_data_rSNIK">企业采购</span></a><a href="//lipin.ctrip.com/lipinonline/static/wechat" target="" class="lsn_son_nav_LbhRN"><span class="lsn_font_data_rSNIK">心意送礼</span></a><a href="//lipin.ctrip.com/xcb" target="" class="lsn_son_nav_LbhRN"><span class="lsn_font_data_rSNIK">礼品卡福袋</span></a></div></div><div class="lsn_left_nav_border_ItHt7"></div><div class="lsn_first_nav_wrap_LZamG"><button aria-label="企业商旅 按回车键打开菜单" class="lsn_top_nav_qdgwe"><span class="pc_home-shanlv lsn_top_nav_icon_ijnym"></span><span class="lsn_top_nav_font_4h1KU lsn_top_nav_font_line_0iVuu">企业商旅</span></button><div class="lsn_son_nav_wrap_TJFu2 lsn_son_show_9gw-I"></div></div><div class="lsn_first_nav_wrap_LZamG"><button aria-label="携程金融 按回车键打开菜单" class="lsn_top_nav_qdgwe"><span class="pc_home-xiechengjinrong lsn_top_nav_icon_ijnym"></span><span class="lsn_top_nav_font_4h1KU lsn_top_nav_font_line_0iVuu">携程金融</span></button><div class="lsn_son_nav_wrap_TJFu2 lsn_son_show_9gw-I"></div></div></div></div><div style="position: absolute; height: 6px; transition: opacity 100ms; opacity: 0; display: none; right: 2px; bottom: 2px; left: 2px; border-radius: 3px;"><div style="position: relative; display: block; height: 100%; cursor: pointer; border-radius: inherit; background-color: rgba(0,0,0,.2);"></div></div><div style="position: absolute; width: 6px; transition: opacity 100ms; opacity: 0; display: none; right: 2px; bottom: 2px; top: 2px; border-radius: 3px;"><div style="position: relative; display: block; width: 100%; cursor: pointer; border-radius: inherit; background-color: rgba(0,0,0,.2);"></div></div></div></div></div></div><script id="__MFE_leftSideNavLayer_DATA__" type="application/json">{"host":"bbz-ctrip-index-ssr-function.faas.ctripcorp.com","leftServiceInfo":{"navData":[{"name":"酒店","enName":"hotel","icon":"pc_home-jiudian","href":"//www.ctrip.com","ubtCode":"PC_sitemap_htl_click","children":[{"name":"国内酒店","enName":"213303","href":"//www.ctrip.com","mapping":["ctrip.com/?newpchpheader=1","www.ctrip.com/?newpchpheader=1","ctrip.com","www.ctrip.com"],"ubtCode":"PC_sitemap_htl_demestic_click"},{"name":"海外酒店","enName":"213304","href":"//hotels.ctrip.com/international/?intl=1","ubtCode":"PC_sitemap_htl_oversea_click","mapping":["hotels.ctrip.com/international/?intl=1"]}]},{"name":"机票","enName":"pc_home-jipiao","icon":"pc_home-jipiao","href":"//flights.ctrip.com/online/channel/domestic","mapping":[],"ubtCode":"PC_sitemap_flt_click","children":[{"name":"国内/国际/中国港澳台","enName":"213306","href":"//flights.ctrip.com/online/channel/domestic","mapping":["flights.ctrip.com/online/channel/domestic?newpchpheader=1","flights.ctrip.com/online/channel/domestic"],"ubtCode":"PC_sitemap_flt_homepage_click"},{"name":"特价机票","enName":"213307","href":"//flights.ctrip.com/fuzzysearch/search","mapping":["flights.ctrip.com/fuzzysearch/search?newpchpheader=1","flights.ctrip.com/fuzzysearch/search"],"ubtCode":"PC_sitemap_flt_Specialoffer_click"},{"name":"航班动态","enName":"213308","href":"//flights.ctrip.com/actualtime/search?newpchpheader=1","mapping":["flights.ctrip.com/actualtime/search?newpchpheader=1","flights.ctrip.com/actualtime/search"],"ubtCode":"PC_sitemap_flt_information_click"},{"name":"值机选座","enName":"213309","href":"//m.ctrip.com/webapp/flight/postservice/iframes/index.html?type=bookseat&newpchpheader=1","mapping":["m.ctrip.com/webapp/flight/postservice/iframes/index.html?type=bookseat&newpchpheader=1","m.ctrip.com/webapp/flight/postservice/iframes/index.html?type=bookseat"],"ubtCode":"PC_sitemap_flt_checkin_click"},{"name":"退票改签","enName":"213310","href":"//my.ctrip.com/myinfo/flight","mapping":["my.ctrip.com/myinfo/flight","my.ctrip.com/myinfo/flight?newpchpheader=1"],"ubtCode":"PC_sitemap_flt_change_click"},{"name":"报销凭证","enName":"252173","href":"//flights.ctrip.com/webapp/nfesdelivery/delivery/tab.html?oid=0","mapping":["flights.ctrip.com/webapp/nfesdelivery/delivery/tab.html?oid=0&newpchpheader=1","flights.ctrip.com/webapp/nfesdelivery/delivery/tab.html?oid=0","flights.ctrip.com/webapp/nfesdelivery/delivery/tab.html"],"ubtCode":"PC_sitemap_flt_invoice_click"},{"name":"机场攻略","enName":"213311","href":"//flights.ctrip.com/booking/airport-guides.html","mapping":["flights.ctrip.com/booking/airport-guides.html?newpchpheader=1","flights.ctrip.com/booking/airport-guides.html"],"ubtCode":"PC_sitemap_flt_airportstrategy_click"},{"name":"定制包机","enName":"213312","href":"//flights.ctrip.com/itinerary/charter/book","mapping":["flights.ctrip.com/itinerary/charter/book?newpchpheader=1","flights.ctrip.com/itinerary/charter/book"],"ubtCode":"PC_sitemap_flt_charter_click"}]},{"name":"火车票","enName":"train","icon":"pc_home-huochepiao","href":"//trains.ctrip.com","mapping":[],"ubtCode":"PC_sitemap_trn_click","children":[{"name":"国内火车票","enName":"213313","href":"//trains.ctrip.com","ubtCode":"PC_sitemap_trn_demestic_click","mapping":["trains.ctrip.com/?newpchpheader=1","trains.ctrip.com"]},{"name":"国际/中国港澳台","enName":"213315","href":"//trains.ctrip.com/overseasTrains","ubtCode":"PC_sitemap_trn_oversea_click","mapping":["trains.ctrip.com/overseasTrains"]}]},{"name":"旅游","enName":"travel","icon":"pc_home-lvyou","ubtCode":"PC_sitemap_pkg_click","href":"//vacations.ctrip.com","children":[{"name":"旅游首页","enName":"213316","href":"//vacations.ctrip.com","mapping":["vacations.ctrip.com/?newheader=1","vacations.ctrip.com"],"ubtCode":"PC_sitemap_pkg_click"},{"name":"跟团游","enName":213319,"href":"//vacations.ctrip.com/grouptravel","ubtCode":"PC_sitemap_pkg_group_click","mapping":["vacations.ctrip.com/grouptravel","vacations.ctrip.com/grouptravel/?newheader=1"]},{"name":"私家团","enName":213321,"href":"//vacations.ctrip.com/privategroup","ubtCode":"PC_sitemap_pkg_private_click","mapping":["vacations.ctrip.com/privategroup?newheader=1","vacations.ctrip.com/privategroup"]},{"name":"自由行","enName":213320,"href":"//vacations.ctrip.com/freetravel","ubtCode":"PC_sitemap_pkg_free_click","mapping":["vacations.ctrip.com/freetravel?newpchpheader=1","vacations.ctrip.com/freetravel"]},{"name":"邮轮","enName":213322,"href":"//cruise.ctrip.com/newpackage","ubtCode":"PC_sitemap_pkg_cruiseship_click","mapping":["cruise.ctrip.com?newheader=1","cruise.ctrip.com/newpackage"]},{"name":"一日游","enName":213323,"href":"//huodong.ctrip.com/things-to-do/list?pshowcode=1daytrip&sourceFrom=vacation&newheader=1","ubtCode":"PC_sitemap_pkg_day_click","mapping":["huodong.ctrip.com/things-to-do/list?pshowcode=1daytrip&sourceFrom=vacation&newheader=1","huodong.ctrip.com/things-to-do/list?pshowcode=1daytrip&sourceFrom=vacation"]},{"name":"定制旅游","enName":213325,"href":"//vacations.ctrip.com/customtravel/index","ubtCode":"PC_sitemap_pkg_custommade_click","mapping":["vacations.ctrip.com/customtravel/index?isNewHeader=1","vacations.ctrip.com/customtravel/index"]},{"name":"周边游","enName":213317,"ubtCode":"PC_sitemap_pkg_weekend_click","href":"//vacations.ctrip.com/tangram/NTAwNzk=?ctm_ref=vactang_page_50079&apppgid=10650019968","mapping":["vacations.ctrip.com/tangram/NTAwNzk=?ctm_ref=vactang_page_50079&apppgid=10650019968","vacations.ctrip.com/tangram/NTAwNzk=?ctm_ref=vactang_page_50079&apppgid=10650019968&newheader=1"]},{"name":"高端游","enName":213329,"ubtCode":"PC_sitemap_pkg_highend_click","href":"//vacations.ctrip.com/tangram/hhtravel?ctm_ref=vactang_page_5872#ctm_ref=hh_ct_thp_nav","mapping":["vacations.ctrip.com/tangram/hhtravel?ctm_ref=vactang_page_5872"]},{"name":"主题游","enName":213324,"ubtCode":"PC_sitemap_pkg_subject_click","href":"//vacations.ctrip.com/themetravel","mapping":["vacations.ctrip.com/themetravel?newheader=1","vacations.ctrip.com/themetravel"]},{"name":"游学","enName":213326,"href":"//vacations.ctrip.com/youxue","ubtCode":"PC_sitemap_pkg_study_click","mapping":["vacations.ctrip.com/youxue","vacations.ctrip.com/youxue?newheader=1"]},{"name":"签证","enName":213327,"ubtCode":"PC_sitemap_pkg_visa_click","href":"//vacations.ctrip.com/visa","mapping":["vacations.ctrip.com/visa?newheader=1","vacations.ctrip.com/visa"]},{"name":"保险","enName":213330,"ubtCode":"PC_sitemap_pkg_insurance_click","href":"//vacations.ctripins.com/ins?isctripins=true","mapping":["vacations.ctripins.com/ins?isctripins=true"]},{"name":"企业会奖","enName":213328,"ubtCode":"PC_sitemap_pkg_bizmeet_click","href":"//mice.ctrip.com"},{"name":"目的地","enName":213331,"href":"//dst.ctrip.com","mapping":["dst.ctrip.com"],"ubtCode":"PC_sitemap_pkg_destination_click"}]},{"name":"攻略·景点","enName":"pc_home-gongluejingdian","icon":"pc_home-gongluejingdian","ubtCode":"PC_sitemap_strategy_click","href":"//you.ctrip.com","mapping":["you.ctrip.com"],"children":[]},{"name":"汽车·船票","enName":"bus","icon":"pc_home-qichechuanpiao","ubtCode":"PC_sitemap_carship_click","href":"//bus.ctrip.com","children":[{"name":"汽车票","enName":213334,"href":"//bus.ctrip.com","ubtCode":"PC_sitemap_carship_car_click","mapping":["bus.ctrip.com/?newpchpheader=1","bus.ctrip.com"]},{"name":"船票","enName":213336,"ubtCode":"PC_sitemap_carship_ship_click","href":"//ship.ctrip.com/ship","mapping":["ship.ctrip.com/ship?newpchpheader=1","ship.ctrip.com/ship"]}]},{"name":"门票·活动","enName":"piao","ubtCode":"PC_sitemap_ticketact_click","icon":"pc_home-menpiaohuodong","href":"//huodong.ctrip.com/things-to-do/web-home?newheader=1","mapping":["huodong.ctrip.com/things-to-do/web-home?newheader=1","huodong.ctrip.com/things-to-do/web-home"],"children":[]},{"name":"用车","enName":"car","icon":"pc_home-yongche","ubtCode":"PC_sitemap_car_click","href":"//car.ctrip.com/zuche/landing?isList=0#ctm_ref=chp_var_txt","mapping":[],"children":[{"name":"国内租车","enName":213339,"ubtCode":"PC_sitemap_car_rental_demestic_click","href":"//car.ctrip.com/zuche/landing?isList=0#ctm_ref=chp_var_txt","mapping":["car.ctrip.com/zuche/landing?isList=0"]},{"name":"境外租车","enName":213340,"ubtCode":"PC_sitemap_car_rental_oversea_click","href":"//car.ctrip.com/zuche/osdlanding#ctm_ref=chp_var_txt","mapping":["car.ctrip.com/zuche/osdlanding"]},{"name":"接送机站","enName":213341,"ubtCode":"PC_sitemap_car_transfer_click","href":"//car.ctrip.com/airport-transfers/landing","mapping":["car.ctrip.com/airport-transfers/landing?newpchpheader=1","car.ctrip.com/airport-transfers/landing"]},{"name":"按天包车","enName":213342,"ubtCode":"PC_sitemap_car_charter_click","href":"//car.ctrip.com/chartered-online/index","mapping":["car.ctrip.com/chartered-online/index?newpchpheader=1","car.ctrip.com/chartered-online/index"]}]},{"name":"全球购","enName":"quanqiugouwu","ubtCode":"PC_sitemap_global_click","icon":"pc_home-chujing","href":"//g.ctrip.com","children":[{"name":"名店购","enName":213344,"ubtCode":"PC_sitemap_global_shop_click","href":"//g.ctrip.com","mapping":["g.ctrip.com"]},{"name":"银联特惠","enName":213345,"ubtCode":"PC_sitemap_global_unionpay_click","href":"//pages.c-ctrip.com/shoppingchic/unionpay/default.html","mapping":["pages.c-ctrip.com/shoppingchic/unionpay/default.html"]},{"name":"外币兑换","enName":213346,"ubtCode":"PC_sitemap_global_foreigncurrency_click","href":"//forex.ctrip.com","mapping":["forex.ctrip.com"]}]},{"name":"礼品卡","enName":"lipinka","icon":"pc_home-lipinka","href":"//lipin.ctrip.com/lipinonline/","ubtCode":"PC_sitemap_giftcard_click","children":[{"name":"礼品卡首页","enName":213347,"ubtCode":"PC_sitemap_giftcard_click","href":"//lipin.ctrip.com/lipinonline/","mapping":["lipin.ctrip.com/lipinonline/?headerMode=new","lipin.ctrip.com/lipinonline/","lipin.ctrip.com"]},{"name":"企业采购","enName":213348,"ubtCode":"PC_sitemap_giftcard_purchase_click","href":"//lipin.ctrip.com/lipinonline/static/intentional","mapping":["lipin.ctrip.com/lipinonline/static/intentional","lipin.ctrip.com/lipinonline/static/intentional?headerMode=new"]},{"name":"心意送礼","enName":213349,"ubtCode":"PC_sitemap_giftcard_sendgift_click","href":"//lipin.ctrip.com/lipinonline/static/wechat","mapping":["lipin.ctrip.com/lipinonline/static/wechat?headerMode=new","lipin.ctrip.com/lipinonline/static/wechat"]},{"name":"礼品卡福袋","enName":213350,"ubtCode":"PC_sitemap_giftcard_fortunebag_click","href":"//lipin.ctrip.com/xcb","mapping":["lipin.ctrip.com/xcb","lipin.ctrip.com/xcb?headerMode=new"]}]}],"bottomData":[{"name":"企业商旅","enName":"pcasfsafsafsad","bottom":true,"target":true,"icon":"pc_home-shanlv","ubtCode":"PC_sitemap_biz_click","href":"//ct.ctrip.com/official?ctm_ref=xcct","children":[]},{"name":"携程金融","bottom":true,"enName":"pc_home-asdasd","ubtCode":"PC_sitemap_finance_click","icon":"pc_home-xiechengjinrong","href":"//jr.ctrip.com/#/?clientSource=CTRIP&version=2.0","mapping":[],"children":[]}]},"_propsData":{}}</script><style>
        #hp_container {
            padding-left: 164px;
        }
    </style></div></div>
    <div id="hp_container">
        <div id="hp_top_layer"><div id="topLayer" class="relativeTopLayer"><style>
                body,html{
                    margin: 0;
                    padding: 0;
                }
                #hp_top_layer {
                    padding: 0 18px;
                }
                #hp_container{
                    box-sizing: border-box;
                }
                .CTRIP_ASSIST  #hp_container {
                }
                #content{
                    margin: 0 auto;
                }
                #footerLayer {
                    margin-top: 40px;
                    background: #f8fafd;
                }
            .lsn_menu_wrap_zLutF .lsn_menu_son_nav_HoNwa{display:block;text-decoration:none;padding:10px 20px;cursor:pointer}.lsn_menu_wrap_zLutF .lsn_menu_son_nav_HoNwa:hover .lsn_font_data_rSNIK{color:#0086f6;font-weight:500;cursor:pointer}.lsn_menu_wrap_zLutF .lsn_menu_son_nav_HoNwa .lsn_font_data_rSNIK{font-family:Pingfang SC,Helvetica,Helvetica Neue,Microsoft YaHei,Arial,Heiti SC,sans-serif;font-size:14px;letter-spacing:0px;line-height:18px;font-weight:normal;white-space:nowrap}.lsn_menu_wrap_zLutF .lsn_menu_son_nav_HoNwa:last-child{padding-bottom:20px}.lsn_menu_wrap_zLutF .lsn_menu_son_nav_HoNwa:first-child{padding-top:20px}.lsn_left_nav_container_fixed_GPuER{padding-right:76px}.lsn_left_nav_container_CT1cL{color:#555;font-size:14px;font-family:Pingfang SC,Helvetica,Helvetica Neue,Microsoft YaHei,Arial,Heiti SC,sans-serif;height:100%;background:#fff;border-right:1px solid #DADFE6}.lsn_left_nav_container_CT1cL .lsn_small_left_nav_container_KMgI-{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;height:100%;width:164px}.lsn_left_nav_container_CT1cL .lsn_small_left_nav_container_fixed_lNeP4{background:#fff;border-right:1px solid #DADFE6;position:absolute;left:0;top:0;z-index:2}.lsn_left_nav_container_CT1cL .lsn_mini_left_nav_container_TASuN{width:76px}.lsn_left_nav_container_CT1cL .lsn_mini_left_nav_container_TASuN .lsn_button_icon_dvatN{margin:0 auto}.lsn_left_nav_container_CT1cL .lsn_mini_left_nav_container_TASuN .lsn_son_nav_wrap_TJFu2{transition:max-height 0s ease !important}.lsn_left_nav_container_CT1cL .lsn_top_button_wrap_boxshadown_EvVc7{position:relative}.lsn_left_nav_container_CT1cL .lsn_top_button_wrap_boxshadown_EvVc7:after{content:'';display:block;height:8px;width:100%;position:absolute;left:0;bottom:-8px;background:url("//webresource.c-ctrip.com/ares2/nfes/pc-home/*/default/image/blackbg.png") no-repeat;background-size:cover}.lsn_left_nav_container_CT1cL .lsn_top_button_wrap_t3-TA{height:60px;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding-left:14px;background:#FFF}.lsn_left_nav_container_CT1cL .lsn_top_button_wrap_t3-TA .lsn_button_icon_dvatN{cursor:pointer;padding:12px}.lsn_left_nav_container_CT1cL .lsn_top_button_wrap_t3-TA .lsn_button_icon_dvatN .lsn_ico_9C9TD{width:24px;font-size:24px}.lsn_left_nav_container_CT1cL .lsn_icon_center_uNT-6{padding-left:0}.lsn_nav_content_wrap_ci7QT{-ms-flex:1;flex:1;padding:8px 15px;box-sizing:border-box}.lsn_nav_content_wrap_ci7QT .lsn_left_nav_border_ItHt7{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;padding:9px 0}.lsn_nav_content_wrap_ci7QT .lsn_left_nav_border_ItHt7:after{content:'';display:block;width:100%;border-top:1px solid #dadfe6}.lsn_nav_content_wrap_ci7QT .lsn_first_nav_wrap_LZamG{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;margin-bottom:6px;min-height:38px;-ms-flex-pack:center;justify-content:center;box-sizing:border-box}.lsn_nav_content_wrap_ci7QT .lsn_first_nav_wrap_LZamG .lsn_top_nav_qdgwe{cursor:pointer;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;white-space:nowrap;padding:10px 13px;border-radius:20px;text-decoration:none;border:0;background:transparent;padding-right:0}.lsn_nav_content_wrap_ci7QT .lsn_first_nav_wrap_LZamG .lsn_top_nav_qdgwe:hover{background:#f2f8fe}.lsn_nav_content_wrap_ci7QT .lsn_first_nav_wrap_LZamG .lsn_top_nav_qdgwe .lsn_top_nav_icon_ijnym{width:20px;height:22px;border-radius:20px;text-align:center;font-size:20px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:#0086F6;margin-right:7px}.lsn_nav_content_wrap_ci7QT .lsn_first_nav_wrap_LZamG .lsn_top_nav_qdgwe .lsn_top_nav_font_tag_t5SfS{min-width:32px;max-width:72px;height:20px}.lsn_nav_content_wrap_ci7QT .lsn_first_nav_wrap_LZamG .lsn_top_nav_qdgwe .lsn_top_nav_font_4h1KU{font-family:PingFang SC;font-style:normal;font-size:16px;font-weight:500;line-height:22px;margin-right:4px;color:#333333}.lsn_nav_content_wrap_ci7QT .lsn_first_nav_wrap_LZamG .lsn_top_nav_qdgwe .lsn_top_nav_font_line_0iVuu{font-weight:normal}.lsn_nav_content_wrap_ci7QT .lsn_first_nav_wrap_LZamG .lsn_top_nav_show_none_content_pfZ8n{padding:10px 12px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}.lsn_nav_content_wrap_ci7QT .lsn_first_nav_wrap_LZamG .lsn_top_nav_show_none_content_pfZ8n .lsn_top_nav_icon_ijnym{margin:0}.lsn_nav_content_wrap_ci7QT .lsn_first_nav_wrap_LZamG .lsn_top_nav_show_none_content_pfZ8n .lsn_top_nav_font_4h1KU{display:none}.lsn_nav_content_wrap_ci7QT .lsn_first_nav_wrap_LZamG .lsn_son_nav_wrap_TJFu2{padding-left:32px;box-sizing:border-box;overflow-y:hidden;transition:max-height 0.3s ease;max-height:650px;visibility:visible;-webkit-transform:translateZ(0);transform:translateZ(0);padding-top:8px}.lsn_nav_content_wrap_ci7QT .lsn_first_nav_wrap_LZamG .lsn_son_nav_wrap_TJFu2 .lsn_son_nav_LbhRN{padding:6px 0;padding-left:10px;padding-bottom:4px;margin-bottom:2px;margin-right:2px;box-sizing:border-box;cursor:pointer;display:block;text-decoration:none}.lsn_nav_content_wrap_ci7QT .lsn_first_nav_wrap_LZamG .lsn_son_nav_wrap_TJFu2 .lsn_son_nav_LbhRN .lsn_font_data_rSNIK{font-style:normal;font-weight:normal;font-size:14px;line-height:16px;font-family:Pingfang SC,Helvetica,Helvetica Neue,Microsoft YaHei,Arial,Heiti SC,sans-serif;color:#666666;text-decoration:none}.lsn_nav_content_wrap_ci7QT .lsn_first_nav_wrap_LZamG .lsn_son_nav_wrap_TJFu2 .lsn_son_nav_LbhRN .lsn_font_data_rSNIK:hover{color:#0086f6;transition:all 0.2s ease}.lsn_nav_content_wrap_ci7QT .lsn_first_nav_wrap_LZamG .lsn_son_nav_wrap_TJFu2 .lsn_son_nav_active_E-1fy .lsn_font_data_rSNIK{font-weight:500;color:#0086f6}.lsn_nav_content_wrap_ci7QT .lsn_first_nav_active_v6VGn .lsn_top_nav_qdgwe{background:linear-gradient(90deg, #00a7fa 0%, #0076f5 100%)}.lsn_nav_content_wrap_ci7QT .lsn_first_nav_active_v6VGn .lsn_top_nav_qdgwe:hover{background:linear-gradient(90deg, #00a7fa 0%, #0076f5 100%)}.lsn_nav_content_wrap_ci7QT .lsn_first_nav_active_v6VGn .lsn_top_nav_qdgwe .lsn_top_nav_font_4h1KU{color:#fff}.lsn_nav_content_wrap_ci7QT .lsn_first_nav_active_v6VGn .lsn_top_nav_qdgwe .lsn_top_nav_icon_ijnym{color:#fff}.lsn_nav_content_wrap_ci7QT .lsn_son_hidden_vhA4D{display:none}.lsn_nav_content_wrap_ci7QT .lsn_son_show_9gw-I{max-height:0px !important;visibility:hidden !important;overflow:hidden;padding-top:0px !important}.lsn_disableClick_WFBYw{pointer-events:none;cursor:default}

.popup-content{background:#fff}#popup-root{position:absolute;z-index:100000;top:0;left:0;color:#666;font-size:14px;font-family:Pingfang SC,Helvetica,Helvetica Neue,Microsoft YaHei,Arial,Heiti SC,sans-serif}#popup-root a{color:#666;text-decoration:none;font-style:normal;font-weight:normal;font-family:Pingfang SC,Helvetica,Helvetica Neue,Microsoft YaHei,Arial,Heiti SC,sans-serif}[role=tooltip].popup-content{box-shadow:0 2px 8px 0 rgba(0,0,0,0.1);border-radius:10px}.popup-overlay{background:rgba(0,0,0,0.5)}[data-popup=tooltip].popup-overlay{background:transparent}.popup-arrow{color:#fff;stroke-width:1px;box-shadow:0 0 2px -2px rgba(0,0,0,0.1);stroke:rgba(0,0,0,0.1);stroke-dasharray:30px;stroke-dashoffset:-54px;left:0;right:0;top:0;bottom:0}

.tl_header_nav_container_T0v0W{min-width:1080px;background-color:white;margin-left:auto;margin-right:auto;font-family:Pingfang SC, Helvetica, Helvetica Neue, Microsoft YaHei, Arial, Heiti SC, sans-serif}.tl_header_nav_container_T0v0W.tl_normal_header_oOjiU{max-width:1180px}.tl_header_nav_container_T0v0W.tl_simple_header_BRlgn{max-width:1180px;margin:auto}.tl_header_nav_container_T0v0W .tl_header_nav_fOCFQ{height:72px;box-sizing:border-box}.tl_header_nav_container_T0v0W .tl_header_nav_fOCFQ .tl_header_nav_small_wrap_gCHc7{height:100%;display:flex;align-items:center;justify-content:space-between;position:relative}.tl_header_nav_container_T0v0W .tl_header_nav_fOCFQ .tl_header_nav_small_wrap_gCHc7 .tl_logo_search_layout_jqiD8{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;flex:1}.tl_header_nav_container_T0v0W .tl_header_nav_fOCFQ .tl_header_nav_small_wrap_gCHc7 .tl_logo_search_layout_jqiD8 .tl_first_wrap_O-7cj{display:flex;align-items:center;height:40px;width:200px;z-index:10}.tl_header_nav_container_T0v0W .tl_header_nav_fOCFQ .tl_header_nav_small_wrap_gCHc7 .tl_logo_search_layout_jqiD8 .tl_first_wrap_O-7cj .tl_header_nav_small_logo_qV3BH{display:block;text-indent:-6999px;width:194px;height:32px}.tl_header_nav_container_T0v0W .tl_header_nav_fOCFQ .tl_header_nav_small_wrap_gCHc7 .tl_logo_search_layout_jqiD8 .tl_first_wrap_O-7cj .tl_header_logo_default_7J1Wu{background:url(https://webresource.c-ctrip.com/ares2/nfes/pc-home/1.0.65/default/image/logo.png) no-repeat;background-size:100% 100%}.tl_header_nav_container_T0v0W .tl_header_nav_fOCFQ .tl_header_nav_small_wrap_gCHc7 .tl_logo_search_layout_jqiD8 .tl_first_wrap_O-7cj .tl_header_logo_custom_HJwDU{background:url(https://webresource.c-ctrip.com/ares2/nfes/pc-home/1.2.14/default/image/ins_new.png) no-repeat;background-size:100% 100%}.tl_header_nav_container_T0v0W .tl_header_nav_fOCFQ .tl_header_nav_small_wrap_gCHc7 .tl_logo_search_layout_jqiD8 .tl_search_bar_wrap_-c5cq{display:flex;margin-left:24px;width:100%;max-width:320px;min-width:200px}.tl_header_nav_container_T0v0W .tl_header_nav_fOCFQ .tl_header_nav_small_wrap_gCHc7 .tl_btn_wrap_EyH-F{display:flex;align-items:center;margin-left:40px;right:0}.tl_header_nav_container_T0v0W .tl_header_nav_fOCFQ .tl_header_nav_small_wrap_gCHc7 .tl_btn_wrap_EyH-F a{text-decoration:none}.tl_header_nav_container_T0v0W .tl_header_nav_fOCFQ .tl_header_nav_small_wrap_gCHc7 .tl_btn_wrap_EyH-F button{border:none;outline:none;line-height:1;text-decoration:none}.tl_header_nav_container_T0v0W .tl_header_nav_fOCFQ .tl_header_nav_small_wrap_gCHc7 .tl_btn_wrap_EyH-F .tl_icon_btn_wrap_R8aGe{position:relative;display:flex;justify-content:flex-start;align-items:center;cursor:pointer;background-color:transparent;color:#333333}.tl_header_nav_container_T0v0W .tl_header_nav_fOCFQ .tl_header_nav_small_wrap_gCHc7 .tl_btn_wrap_EyH-F .tl_icon_btn_wrap_R8aGe.tl_btn_home_-XbZg{margin-right:20px}.tl_header_nav_container_T0v0W .tl_header_nav_fOCFQ .tl_header_nav_small_wrap_gCHc7 .tl_btn_wrap_EyH-F .tl_icon_btn_wrap_R8aGe.tl_btn_accessibility_lXwrx{margin-left:20px;overflow:visible}.tl_header_nav_container_T0v0W .tl_header_nav_fOCFQ .tl_header_nav_small_wrap_gCHc7 .tl_btn_wrap_EyH-F .tl_icon_btn_wrap_R8aGe:hover,.tl_header_nav_container_T0v0W .tl_header_nav_fOCFQ .tl_header_nav_small_wrap_gCHc7 .tl_btn_wrap_EyH-F .tl_icon_btn_wrap_R8aGe:focus{color:#0086f6}.tl_header_nav_container_T0v0W .tl_header_nav_fOCFQ .tl_header_nav_small_wrap_gCHc7 .tl_btn_wrap_EyH-F .tl_icon_btn_wrap_R8aGe:hover .tl_icon_btn_Ml4AL,.tl_header_nav_container_T0v0W .tl_header_nav_fOCFQ .tl_header_nav_small_wrap_gCHc7 .tl_btn_wrap_EyH-F .tl_icon_btn_wrap_R8aGe:hover .tl_icon_content_qbOk8,.tl_header_nav_container_T0v0W .tl_header_nav_fOCFQ .tl_header_nav_small_wrap_gCHc7 .tl_btn_wrap_EyH-F .tl_icon_btn_wrap_R8aGe:focus .tl_icon_btn_Ml4AL,.tl_header_nav_container_T0v0W .tl_header_nav_fOCFQ .tl_header_nav_small_wrap_gCHc7 .tl_btn_wrap_EyH-F .tl_icon_btn_wrap_R8aGe:focus .tl_icon_content_qbOk8{color:#0086f6}.tl_header_nav_container_T0v0W .tl_header_nav_fOCFQ .tl_header_nav_small_wrap_gCHc7 .tl_btn_wrap_EyH-F .tl_icon_btn_wrap_R8aGe .tl_icon_btn_Ml4AL{font-size:20px;color:#5678a8;vertical-align:middle}.tl_header_nav_container_T0v0W .tl_header_nav_fOCFQ .tl_header_nav_small_wrap_gCHc7 .tl_btn_wrap_EyH-F .tl_icon_btn_wrap_R8aGe .tl_icon_content_qbOk8{padding-left:4px;font-size:14px;line-height:18px;display:flex}.tl_header_nav_container_T0v0W .tl_header_nav_fOCFQ .tl_header_nav_small_wrap_gCHc7 .tl_btn_wrap_EyH-F .tl_header_jinlao_tips_XDmmg{position:absolute;top:calc(100% + 6px);left:calc(50% - 27px);z-index:9999;background:#333333;border-radius:16px 16px 16px 16px;box-shadow:0px 2px 8px 0px rgba(0,0,0,0.1);padding:6px 9px;display:inline-block;color:#ffffff;font-size:12px;white-space:nowrap}.tl_header_nav_container_T0v0W .tl_header_nav_fOCFQ .tl_header_nav_small_wrap_gCHc7 .tl_btn_wrap_EyH-F .tl_header_tips_HkrYK{position:absolute;top:calc(100% + 6px);left:calc(50% - 33px);z-index:9999;background:#333333;border-radius:16px 16px 16px 16px;box-shadow:0px 2px 8px 0px rgba(0,0,0,0.1);padding:6px 9px;display:inline-block;color:#ffffff;font-size:12px;white-space:nowrap}.tl_header_nav_container_T0v0W .tl_header_nav_fOCFQ .tl_header_nav_small_wrap_gCHc7 .tl_btn_wrap_EyH-F .tl_derive_5ZA9O{height:20px;width:1px;background-color:#dadfe6;margin-left:20px}#hp_top_layer{background-color:white}

.tl_nfes_home_header_account_oS-UF{list-style:none;margin:0;position:relative;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;color:#333333;font-size:14px;line-height:1;box-sizing:border-box}.tl_nfes_home_header_account_oS-UF .tl_home_header_item_JJ5DU{margin-left:20px}.tl_nfes_home_header_account_oS-UF .tl_home_header_item_JJ5DU.tl_first_item_d1lsj{margin-left:0px}.tl_nfes_home_header_account_oS-UF button{border:none;background-color:transparent;outline:none;color:#333333;line-height:1}.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn{position:relative}.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_IUsnp{display:flex;align-items:center;justify-content:flex-start;flex-direction:row;background:#f2f8fe;border-radius:16px 16px 16px 16px;padding:4px 8px 4px 4px;cursor:pointer}.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_IUsnp:hover,.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_IUsnp.tl_select_Jruuh,.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_IUsnp:focus{color:#0086f6}.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_IUsnp:hover .tl_nfes_home_header_login_avatar_SG4WR,.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_IUsnp:hover .tl_nfes_home_header_login_title_5neWJ,.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_IUsnp.tl_select_Jruuh .tl_nfes_home_header_login_avatar_SG4WR,.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_IUsnp.tl_select_Jruuh .tl_nfes_home_header_login_title_5neWJ,.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_IUsnp:focus .tl_nfes_home_header_login_avatar_SG4WR,.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_IUsnp:focus .tl_nfes_home_header_login_title_5neWJ{color:#0086f6}.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_IUsnp .tl_nfes_home_header_login_avatar_SG4WR{border-radius:50%;width:24px;height:auto;font-size:24px;color:#5678a8}.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_IUsnp .tl_nfes_home_header_login_title_5neWJ{margin-left:5px;margin-right:2px;display:flex}.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_IUsnp .tl_nfes_home_header_login_title_5neWJ .tl_nfes_home_header_login_title_name_fDEXu{white-space:nowrap;line-height:1.2}.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_IUsnp .tl_nfes_home_header_login_title_5neWJ .tl_nfes_home_header_login_title_name_fDEXu.tl_vip_1Tkgx{max-width:56px;overflow:hidden;text-overflow:ellipsis}.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_IUsnp .tl_nfes_home_header_login_title_5neWJ .tl_nfes_home_header_login_title_name_fDEXu.tl_non_vip_RJmOk{width:70px}.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_IUsnp .tl_nfes_home_header_login_title_5neWJ .tl_nfes_home_header_icon_LA97o{font-size:14px;align-items:center;margin-left:2px;display:flex}.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_IUsnp .tl_nfes_home_header_login_title_5neWJ .tl_nfes_home_header_icon_LA97o.tl_icon_dropdown_S6x2r{color:#333333}.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_IUsnp .tl_nfes_home_header_login_title_5neWJ .tl_nfes_home_header_icon_LA97o.tl_icon_hover_iGB9I{color:#0086f6}.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_register_eTWYU{cursor:pointer}.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_register_eTWYU:hover,.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_register_eTWYU:focus{color:#0086f6}.tl_nfes_home_header_account_oS-UF .tl_account_switch_tip_wrapper_8fIzu{position:absolute;z-index:9999;top:calc(100% + 8px);left:calc(50% - 120px)}.tl_nfes_home_header_account_oS-UF .tl_account_switch_tip_wrapper_8fIzu .tl_account_switch_tip_card_O-67C{width:240px}.tl_nfes_home_header_account_oS-UF .tl_account_switch_tip_wrapper_8fIzu .tl_account_switch_tip_card_O-67C .tl_account_switch_tip_lKv59 .tl_account_icon_wrapper_warn_-XLPV{position:absolute;width:36px;left:0;top:0;bottom:0;box-sizing:border-box}.tl_nfes_home_header_account_oS-UF .tl_account_switch_tip_wrapper_8fIzu .tl_account_switch_tip_card_O-67C .tl_account_switch_tip_lKv59 .tl_account_icon_wrapper_warn_-XLPV .tl_header_icon_warn_pfk2e{position:absolute;right:6px;top:18px;font-size:16px;color:#FF7700}.tl_nfes_home_header_account_oS-UF .tl_account_switch_tip_wrapper_8fIzu .tl_account_switch_tip_card_O-67C .tl_account_switch_tip_lKv59 .tl_account_icon_wrapper_warn_-XLPV .tl_header_icon_warn_pfk2e.tl_bg_RBG27{width:12px;height:12px;border-radius:50%;background:#fff;z-index:0;right:9px;top:20px}.tl_nfes_home_header_account_oS-UF .tl_account_switch_tip_wrapper_8fIzu .tl_account_switch_tip_card_O-67C .tl_account_switch_tip_lKv59 .tl_account_icon_wrapper_close_E-Sph{position:absolute;width:36px;right:0;top:0;bottom:0;display:flex;justify-content:center;padding-top:12px}.tl_nfes_home_header_account_oS-UF .tl_account_switch_tip_wrapper_8fIzu .tl_account_switch_tip_card_O-67C .tl_account_switch_tip_lKv59 .tl_account_icon_wrapper_close_E-Sph .tl_header_icon_close_T2QJh{font-size:12px;color:#ffffff;cursor:pointer;height:12px}.tl_nfes_home_header_account_oS-UF .tl_account_switch_tip_wrapper_8fIzu .tl_account_switch_tip_card_O-67C .tl_account_switch_tip_lKv59 .tl_account_tip_title_fVxbc{width:168px;margin-left:36px;margin-right:36px;padding-top:16px;padding-bottom:16px;font-size:14px;color:#FFFFFF;line-height:20px}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj{position:absolute;z-index:9999;top:calc(100% + 8px);left:calc(50% - 114px)}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP{display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;padding:20px 8px 11px 8px;box-sizing:border-box}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_basic_info_vtLmY{margin-bottom:18px;margin-right:19px;display:flex;flex-direction:row;justify-content:flex-start}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_basic_info_vtLmY .tl_user_avatar_9rIw1{padding-right:8px;display:flex;align-items:center}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_basic_info_vtLmY .tl_name_info_-XJhR{display:flex;flex-direction:column;justify-content:space-around;align-items:flex-start}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_basic_info_vtLmY .tl_name_info_-XJhR .tl_user_name_wrapper_zfBSz{display:inline-flex;cursor:pointer;color:#333333}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_basic_info_vtLmY .tl_name_info_-XJhR .tl_user_name_wrapper_zfBSz:hover,.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_basic_info_vtLmY .tl_name_info_-XJhR .tl_user_name_wrapper_zfBSz:focus{color:#0086f6}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_basic_info_vtLmY .tl_name_info_-XJhR .tl_user_name_wrapper_zfBSz .tl_user_name_kFprV{max-width:129px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;font-size:16px;line-height:24px;font-weight:bold}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_basic_info_vtLmY .tl_name_info_-XJhR .tl_user_name_wrapper_zfBSz .tl_icon_link_DuvU-{margin:auto;align-self:center}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_basic_info_vtLmY .tl_name_info_-XJhR .tl_vip_tag_faLjF{display:inline-flex;white-space:nowrap;margin-top:2px}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_basic_info_vtLmY .tl_name_info_-XJhR .tl_vip_tag_faLjF .tl_vip_level_Z03fL{display:inline-flex;align-items:center;border-radius:9px 9px 9px 9px;color:#333333;font-size:12px}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_basic_info_vtLmY .tl_name_info_-XJhR .tl_vip_tag_faLjF .tl_vip_level_Z03fL span{margin:auto 8px auto 4px}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_basic_info_vtLmY .tl_name_info_-XJhR .tl_vip_tag_faLjF .tl_vip_level_Z03fL.tl_goldenVIP_-SFga{background:#ffe9c4}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_basic_info_vtLmY .tl_name_info_-XJhR .tl_vip_tag_faLjF .tl_vip_level_Z03fL.tl_platinumVIP_fVTaA{background:#d8f5ff}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_basic_info_vtLmY .tl_name_info_-XJhR .tl_vip_tag_faLjF .tl_vip_level_Z03fL.tl_blackDiamondVIP_ifRgb{background:#fff7eb}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_basic_info_vtLmY .tl_name_info_-XJhR .tl_vip_tag_faLjF .tl_vip_level_Z03fL.tl_goldenDiamondVIP_O0uEF{background:#dde4fa}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_basic_info_vtLmY .tl_name_info_-XJhR .tl_vip_tag_faLjF .tl_vip_level_Z03fL.tl_diamondVIP_p7979{background:#e7e6ff}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_basic_info_vtLmY .tl_name_info_-XJhR .tl_vip_tag_faLjF .tl_vip_level_Z03fL.tl_ordinaryMember_jyuYJ{background:#e9f6ff}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_basic_info_vtLmY .tl_name_info_-XJhR .tl_vip_tag_faLjF .tl_vip_level_Z03fL.tl_silverVIP_FgXfg{background:#e9f6ff}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_basic_info_vtLmY .tl_name_info_-XJhR .tl_vip_tag_faLjF .tl_super_vip_oJkGL{margin-left:4px;background:linear-gradient(90deg, #f9ebe4 0%, #ffd3bb 100%);border-radius:9px 9px 9px 9px;padding:3px 7px 3px 8px;color:#333333;font-size:12px}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_vip_ads_-rMIg{width:100%;height:56px;margin-bottom:18px;background-size:cover;background-repeat:no-repeat;border-radius:8px 8px 8px 8px;display:flex;flex-direction:row;justify-content:flex-start}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_vip_ads_-rMIg .tl_left_vip_rights_mbn3N{color:#eeeeee;font-size:12px;padding:34px 12px 10px 8px;white-space:nowrap}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_vip_ads_-rMIg .tl_right_open_tUoRv{align-self:center;flex:1;display:flex;justify-content:center;padding-right:12px;white-space:nowrap}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_vip_ads_-rMIg .tl_right_open_tUoRv .tl_open_button_T3msR{background:linear-gradient(90deg, #f9ebe4 0%, #f2b390 100%);border-radius:12px 12px 12px 12px;color:#000000;font-size:12px;font-weight:500;cursor:pointer}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_vip_ads_-rMIg .tl_right_open_tUoRv .tl_open_button_T3msR span{margin:2px 8px;line-height:20px}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_info_list_0vRoq{width:212px;box-sizing:border-box;display:flex;flex-direction:column;justify-content:flex-start;align-items:center}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_info_list_0vRoq .tl_split_line_NQgo2{margin:0 12px;height:1px;width:calc(100% - 24px);background-color:#dadfe6}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_info_list_0vRoq .tl_split_line_NQgo2.tl_top_Gf7PT{margin-bottom:8px}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_info_list_0vRoq .tl_split_line_NQgo2.tl_bottom_F6xFi{margin:8px 0}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_info_list_0vRoq .tl_list_item_Kah3M{width:100%;box-sizing:border-box;display:inline-flex;padding:11px 12px;align-items:center;justify-content:flex-start;color:#333333;font-size:14px;font-weight:normal;line-height:18px}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_info_list_0vRoq .tl_list_item_Kah3M .tl_icon_C5ApI{color:#5678a8}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_info_list_0vRoq .tl_list_item_Kah3M .tl_title_sGgZK{margin:auto 0 auto 9px;white-space:nowrap}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_info_list_0vRoq .tl_list_item_Kah3M .tl_tag_y80ej{margin:auto 0 auto 8px;color:#0086f6;font-weight:500;text-overflow:ellipsis;overflow:hidden}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_info_list_0vRoq .tl_list_item_Kah3M.tl_logout_knRFU .tl_icon_C5ApI{color:#333333}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_info_list_0vRoq .tl_list_item_Kah3M:hover,.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_info_list_0vRoq .tl_list_item_Kah3M:focus{background:#f2f8fe;border-radius:20px 20px 20px 20px;color:#0086f6;cursor:pointer}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_info_list_0vRoq .tl_list_item_Kah3M:hover .tl_icon_C5ApI,.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_info_list_0vRoq .tl_list_item_Kah3M:focus .tl_icon_C5ApI{color:#0086f6}.tl_nfes_home_header_account_oS-UF .tl_space_vertical_line_Ng4Lz{height:20px;width:1px;background-color:#dadfe6}

.tl_pc_home_header_order_gcMhX{overflow:visible;position:relative;display:flex;flex-direction:row;justify-content:flex-start;align-items:center;cursor:pointer;padding:6px 0px}.tl_pc_home_header_order_gcMhX a{color:#333333}.tl_pc_home_header_order_gcMhX:hover,.tl_pc_home_header_order_gcMhX:focus{color:#0086f6}.tl_pc_home_header_order_gcMhX:hover .tl_order_title_kSApX,.tl_pc_home_header_order_gcMhX:focus .tl_order_title_kSApX{color:#0086f6}.tl_pc_home_header_order_gcMhX .tl_icon_order_QjjKh{color:#5678a8;font-size:20px;vertical-align:middle}.tl_pc_home_header_order_gcMhX .tl_icon_order_QjjKh.tl_hover_x8-Yd{color:#0086f6}.tl_pc_home_header_order_gcMhX .tl_order_title_kSApX{margin:auto;padding-left:4px;padding-right:2px;display:flex}.tl_pc_home_header_order_gcMhX .tl_order_title_kSApX:focus{color:#0086f6}.tl_pc_home_header_order_gcMhX .tl_icon_dropdown_lExig{font-size:14px;vertical-align:middle}.tl_pc_home_header_order_gcMhX .tl_order_center_xwPxa{position:absolute;z-index:9999;top:calc(100% + 8px);left:calc(50% - 80px)}.tl_pc_home_header_order_gcMhX .tl_order_center_xwPxa .tl_order_type_list_z-dcL{padding:11px 8px 9px 8px;display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start}.tl_pc_home_header_order_gcMhX .tl_order_center_xwPxa .tl_order_type_list_z-dcL .tl_type_list_item_JB0-U{width:100%;display:flex;cursor:pointer;padding:11px 12px;box-sizing:border-box}.tl_pc_home_header_order_gcMhX .tl_order_center_xwPxa .tl_order_type_list_z-dcL .tl_type_list_item_JB0-U:hover,.tl_pc_home_header_order_gcMhX .tl_order_center_xwPxa .tl_order_type_list_z-dcL .tl_type_list_item_JB0-U:focus{background-color:#f2f8fe;border-radius:20px 20px 20px 20px;color:#0086f6}.tl_pc_home_header_order_gcMhX .tl_order_center_xwPxa .tl_order_type_list_z-dcL .tl_type_list_item_JB0-U:hover .tl_icon_9iQ2G,.tl_pc_home_header_order_gcMhX .tl_order_center_xwPxa .tl_order_type_list_z-dcL .tl_type_list_item_JB0-U:focus .tl_icon_9iQ2G{color:#0086f6}.tl_pc_home_header_order_gcMhX .tl_order_center_xwPxa .tl_order_type_list_z-dcL .tl_type_list_item_JB0-U span{padding-left:8px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tl_pc_home_header_order_gcMhX .tl_order_center_xwPxa .tl_order_type_list_z-dcL .tl_type_list_item_JB0-U .tl_icon_9iQ2G{color:#89a0c2}.tl_pc_home_header_order_gcMhX .tl_order_center_xwPxa .tl_order_type_list_z-dcL .tl_split_line_JEUU6{height:1px;width:calc(100% - 24px);background-color:#dadfe6;margin:8px 12px}

.tl_header_dropdown_panel_L4Nvq{box-sizing:border-box;background:#ffffff;border:1px solid #e6f3fe;border-radius:10px;filter:drop-shadow(0 0 8px rgba(0,0,0,0.1))}.tl_header_dropdown_panel_L4Nvq .tl_arrow_ZoQ7U{content:' ';position:absolute;top:-8px;left:calc(50% - 10px);border-width:0 8px 8px;border-style:solid;width:0;height:0;border-style:solid;border-color:transparent transparent #e6f3fe}.tl_header_dropdown_panel_L4Nvq .tl_arrow_ZoQ7U:after{content:"";position:absolute;top:1px;left:-7px;border-width:0 7px 7px;border-style:solid;border-color:transparent transparent #fff}.tl_header_dropdown_panel_L4Nvq .tl_arrow_ZoQ7U.tl_black_vXF62{border-color:transparent transparent #000000e6}.tl_header_dropdown_panel_L4Nvq .tl_arrow_ZoQ7U.tl_black_vXF62:after{border-color:transparent transparent #000000e6}

.tl_header_icon_wrapper_GsnJ-{display:flex;position:relative;padding:6px 0;overflow:visible}.tl_header_icon_wrapper_GsnJ-:hover .tl_header_icon_CqpDm,.tl_header_icon_wrapper_GsnJ-:focus .tl_header_icon_CqpDm,.tl_header_icon_wrapper_GsnJ- button:focus .tl_header_icon_CqpDm{color:#0086f6}.tl_header_icon_wrapper_GsnJ- .tl_header_icon_CqpDm{color:#5678a8;font-size:20px;cursor:pointer}.tl_header_tips_9Ze9j{position:absolute;top:calc(100% + 6px);left:calc(50% - 33px);z-index:9999;background:#333333;border-radius:16px 16px 16px 16px;box-shadow:0px 2px 8px 0px rgba(0,0,0,0.1);padding:6px 9px;display:inline-block;color:#ffffff;font-size:12px;white-space:nowrap}.tl_notification_count_wrapper_Aa-WA{position:relative;cursor:pointer;display:flex}.tl_notification_count_wrapper_Aa-WA .tl_notification_count_gVIWt{position:absolute;left:50%;top:-8px;padding:2px 4px;border-radius:50px;background:#f5190a;display:inline-block;box-sizing:border-box;color:#ffffff;font-size:12px;text-align:center;vertical-align:middle}.tl_qrcode_panel_rfXW9{position:absolute;z-index:9999;top:calc(100% + 8px);left:calc(50% - 240px)}.tl_qrcode_panel_rfXW9 .tl_code_list_Efq9F{display:flex;flex-direction:row;justify-content:center;align-items:flex-start;padding:22px 23px 20px}.tl_qrcode_panel_rfXW9 .tl_code_list_Efq9F .tl_list_item_JOnTK{display:flex;flex-direction:column;justify-content:flex-start;align-items:center;font-size:14px}.tl_qrcode_panel_rfXW9 .tl_code_list_Efq9F .tl_list_item_JOnTK.tl_first_0XM03{margin-right:25px}.tl_qrcode_panel_rfXW9 .tl_code_list_Efq9F .tl_list_item_JOnTK .tl_item_title_obEiT{margin-top:2px;color:#333333;line-height:22px}.tl_qrcode_panel_rfXW9 .tl_code_list_Efq9F .tl_list_item_JOnTK .tl_link_title_Gbhw6{color:#333333;font-weight:bold;margin-top:8px;cursor:pointer;display:inline-flex}.tl_qrcode_panel_rfXW9 .tl_code_list_Efq9F .tl_list_item_JOnTK .tl_link_title_Gbhw6:hover,.tl_qrcode_panel_rfXW9 .tl_code_list_Efq9F .tl_list_item_JOnTK .tl_link_title_Gbhw6:focus{color:#0086f6}.tl_qrcode_panel_rfXW9 .tl_code_list_Efq9F .tl_list_item_JOnTK .tl_link_title_Gbhw6 .tl_icon_oynMq{font-size:14px}.tl_custom_service_panel_n5l1Y{position:absolute;z-index:9999;top:calc(100% + 8px);left:calc(50% - 119px)}.tl_custom_service_panel_n5l1Y .tl_panel_content_wPzc7{padding:24px 20px 16px;display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start}.tl_custom_service_panel_n5l1Y .tl_panel_content_wPzc7 .tl_service_center_link_LrDCv{padding-bottom:19px;font-size:14px;font-weight:bold;line-height:18px;display:flex;cursor:pointer;color:#333333}.tl_custom_service_panel_n5l1Y .tl_panel_content_wPzc7 .tl_service_center_link_LrDCv:hover,.tl_custom_service_panel_n5l1Y .tl_panel_content_wPzc7 .tl_service_center_link_LrDCv:focus{color:#0086f6}.tl_custom_service_panel_n5l1Y .tl_panel_content_wPzc7 .tl_service_center_link_LrDCv .tl_jump_icon_vlGT3{font-size:14px}.tl_custom_service_panel_n5l1Y .tl_panel_content_wPzc7 .tl_tel_list_dG17S{padding-top:16px;border-top:1px solid #dadfe6;font-size:12px;line-height:16px}.tl_custom_service_panel_n5l1Y .tl_panel_content_wPzc7 .tl_tel_list_dG17S li{margin-top:4px;list-style:none}.tl_custom_service_panel_n5l1Y .tl_panel_content_wPzc7 .tl_tel_list_dG17S li:first-of-type{margin-top:0}.tl_custom_service_panel_n5l1Y .tl_panel_content_wPzc7 .tl_tel_list_dG17S .tl_list_item_first_HWMIk{display:flex;flex-direction:row;justify-content:flex-start;align-items:flex-start}.tl_custom_service_panel_n5l1Y .tl_panel_content_wPzc7 .tl_tel_list_dG17S .tl_list_item_first_HWMIk .tl_tel_number_list_Hdkg4{display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start}.tl_custom_service_panel_n5l1Y .tl_panel_content_wPzc7 .tl_tel_list_dG17S .tl_list_item_other_hSzq2{display:flex;white-space:nowrap}

.tl_input_wrap_4wLqk{height:32px;width:100%;display:flex;align-items:center;background:#ffffff;border-radius:8px 8px 8px 8px;border:1px solid #9acefb}.tl_input_wrap_4wLqk .tl_input_8N-Vi{flex:1;background:none;outline:none;border:none !important;text-indent:15px;font-style:normal;font-weight:normal;color:#666666;font-size:14px;font-weight:normal;height:18px;letter-spacing:0px;line-height:18px;width:124px}.tl_input_wrap_4wLqk .tl_search_icon_N-uay{display:flex;justify-content:center;align-items:center;background:#0086f6;border-radius:0px 8px 8px 0px;height:100%;width:56px;margin-right:-1px;padding:1px 0;text-decoration:none}.tl_input_wrap_4wLqk .tl_search_icon_N-uay:before{content:"\f0a6c";text-align:center;display:flex;color:white;align-content:center;font-size:23px;border-radius:0px 8px 8px 0px}

.fl_footer_wrap_ow234{width:100%;padding-left:18px;padding-right:18px;background:#f8fafd;box-sizing:border-box;font-family:Pingfang SC, Helvetica, Helvetica Neue, Microsoft YaHei, Arial, Heiti SC, sans-serif}.fl_footer_wrap_ow234 dl,.fl_footer_wrap_ow234 dd{margin:0;padding:0}.fl_footer_wrap_ow234 .fl_layout_wrap_g-sIE{min-width:1080px;margin:0 auto;padding-top:40px;padding-bottom:52px;background:#f8fafd}.fl_footer_wrap_ow234 .fl_layout_wrap_g-sIE.fl_normal_footer_YgQc1{max-width:1180px}.fl_footer_wrap_ow234 .fl_layout_wrap_g-sIE.fl_simple_footer_-yGp1{width:100%}.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH{display:flex;flex-direction:row;justify-content:space-between;padding-left:12px;padding-right:9px}.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH .fl_footer_item_layout_gZ1W6{margin-left:20px;border-right:1px solid #dadfe6;display:flex;box-sizing:border-box}.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH .fl_footer_item_layout_gZ1W6.fl_no_derive_G1PJ2{border-right-width:0}.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH .fl_footer_item_layout_gZ1W6.fl_first_item_y9897{margin-left:0}.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH .fl_footer_item_vp3yx{float:left;display:inline-block;max-width:217px}.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH .fl_footer_item_vp3yx.fl_item_tel_list_3nBrm,.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH .fl_footer_item_vp3yx.fl_item_qrcode_Sf-pF{padding-top:42px;width:auto}.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH .fl_footer_item_vp3yx.fl_item_tel_list_3nBrm .fl_list_item_first_CsArf{display:flex;flex-direction:row;justify-content:flex-start;align-items:flex-start}.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH .fl_footer_item_vp3yx.fl_item_tel_list_3nBrm .fl_list_item_first_CsArf .fl_tel_number_list_Y0Y2g{display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start}.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH .fl_footer_item_vp3yx.fl_item_tel_list_3nBrm .fl_list_item_other_7QPIe{display:inline-block;white-space:nowrap;margin-top:12px}.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH .fl_footer_item_vp3yx.fl_item_qrcode_Sf-pF{margin-left:31px}.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH .fl_footer_item_vp3yx.fl_item_qrcode_Sf-pF .fl_qr_title_oIhLw{color:#333333;font-size:14px;line-height:22px;margin:4px 0px 0px;padding:0px 0px;text-align:center}.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH .fl_footer_item_vp3yx dt{color:#333333;font-size:20px;font-weight:500;line-height:24px;margin-bottom:6px}.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH .fl_footer_item_vp3yx dd{font-size:12px;line-height:16px;color:#666666}.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH .fl_footer_item_vp3yx .fl_ft_link_item_8Hler{position:relative;float:left;display:inline-block;width:96px;text-align:left;margin-right:8px;margin-top:12px}.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH .fl_footer_item_vp3yx .fl_ft_link_item_8Hler>a,.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH .fl_footer_item_vp3yx .fl_ft_link_item_8Hler .fl_news_item_dropdown_A8-JZ>a{color:#666666;text-decoration:none}.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH .fl_footer_item_vp3yx .fl_ft_link_item_8Hler>a:hover,.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH .fl_footer_item_vp3yx .fl_ft_link_item_8Hler .fl_news_item_dropdown_A8-JZ>a:hover{color:#0086f6}.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH .fl_footer_item_vp3yx .fl_ft_link_item_8Hler .fl_news_item_dropdown_A8-JZ .fl_news_item_a_5-UUz{display:flex}.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH .fl_footer_item_vp3yx .fl_ft_link_item_8Hler .fl_news_item_dropdown_A8-JZ .fl_news_item_a_5-UUz:hover{color:#0086f6}.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH .fl_footer_item_vp3yx .fl_ft_link_item_8Hler .fl_news_item_dropdown_A8-JZ .fl_news_item_a_5-UUz .fl_news_icon_VV9RE{font-size:12px}.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH .fl_footer_item_vp3yx .fl_ft_link_item_8Hler .fl_news_item_dropdown_A8-JZ .fl_dropdown_panel_S6G-k{position:absolute;z-index:9999;top:20px;right:0;background:#ffffff;border-radius:8px 8px 8px 8px;border:1px solid #e6f3fe;box-shadow:0px 2px 8px 0px rgba(0,0,0,0.1);display:flex;flex-direction:column;justify-content:flex-start;align-items:center;padding:16px 20px;width:194px;box-sizing:border-box}.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH .fl_footer_item_vp3yx .fl_ft_link_item_8Hler .fl_news_item_dropdown_A8-JZ .fl_dropdown_panel_S6G-k .fl_drop_news_item_rdWfz{width:100%;display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-bottom:8px}.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH .fl_footer_item_vp3yx .fl_ft_link_item_8Hler .fl_news_item_dropdown_A8-JZ .fl_dropdown_panel_S6G-k .fl_drop_news_item_rdWfz.fl_last_more_i1AIf{margin-bottom:0}.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH .fl_footer_item_vp3yx .fl_ft_link_item_8Hler .fl_news_item_dropdown_A8-JZ .fl_dropdown_panel_S6G-k .fl_drop_news_item_rdWfz.fl_last_more_i1AIf>a{color:#0086f6}.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH .fl_footer_item_vp3yx .fl_ft_link_item_8Hler .fl_news_item_dropdown_A8-JZ .fl_dropdown_panel_S6G-k .fl_drop_news_item_rdWfz>a{color:#666666;font-size:12px;line-height:16px}.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH .fl_footer_item_vp3yx .fl_ft_link_item_8Hler .fl_news_item_dropdown_A8-JZ .fl_dropdown_panel_S6G-k .fl_drop_news_item_rdWfz>a:hover{color:#0086f6}.fl_footer_wrap_ow234 .fl_footer_copyright_wrapper_xaEbt{margin-top:40px;text-align:center;color:#999;font-size:12px;line-height:1.5}.fl_footer_wrap_ow234 .fl_footer_copyright_wrapper_xaEbt a{color:#999;text-decoration:none}.fl_footer_wrap_ow234 .fl_footer_copyright_wrapper_xaEbt a:hover{color:#0086f6}.fl_footer_wrap_ow234 .fl_footer_copyright_wrapper_xaEbt *:focus{color:#666666}.fl_footer_wrap_ow234 .fl_footer_copyright_wrapper_xaEbt .fl_icon-gns_iPpG5,.fl_footer_wrap_ow234 .fl_footer_copyright_wrapper_xaEbt .fl_honour_wrap_E--kt a,.fl_footer_wrap_ow234 .fl_footer_copyright_wrapper_xaEbt .fl_honour_wrap_E--kt a,.fl_footer_wrap_ow234 .fl_footer_copyright_wrapper_xaEbt .fl_honour_wrap_E--kt span{background-color:#fff;background-repeat:no-repeat;background-position:0 0}.fl_footer_wrap_ow234 .fl_footer_copyright_wrapper_xaEbt .fl_gns_wrapper_wMJ0P{margin-top:8px}.fl_footer_wrap_ow234 .fl_footer_copyright_wrapper_xaEbt .fl_gns_wrapper_wMJ0P .fl_icon-gns_iPpG5{display:inline-block;width:20px;height:20px;margin-right:3px;background-position:0 -235px;vertical-align:middle}.fl_footer_wrap_ow234 .fl_footer_copyright_wrapper_xaEbt .fl_supervision-call_gsdM8{padding-top:10px}.fl_footer_wrap_ow234 .fl_footer_copyright_wrapper_xaEbt .fl_honour_wrap_E--kt{display:inline-block;padding-top:10px;text-align:left}.fl_footer_wrap_ow234 .fl_footer_copyright_wrapper_xaEbt .fl_honour_wrap_E--kt a,.fl_footer_wrap_ow234 .fl_footer_copyright_wrapper_xaEbt .fl_honour_wrap_E--kt span{float:left;margin:0 4px;width:88px;height:32px;border:1px solid #d1d1d1;border-radius:2px;font:12px/32px Simsun;color:#666;overflow:hidden;text-indent:-99em}.fl_footer_wrap_ow234 .fl_footer_copyright_wrapper_xaEbt .fl_honour_wrap_E--kt .fl_honour1_-yL9A{background-position:-88px -50px;text-indent:36px}.fl_footer_wrap_ow234 .fl_footer_copyright_wrapper_xaEbt .fl_honour_wrap_E--kt .fl_honour2_Emzmq{background-position:-88px -85px;text-indent:36px}.fl_footer_wrap_ow234 .fl_footer_copyright_wrapper_xaEbt .fl_honour_wrap_E--kt .fl_honour4_eaDL-{background-position:-88px -118px;text-indent:0;padding:2px 0 2px 37px;width:51px;height:28px;line-height:1.2}.fl_footer_wrap_ow234 .fl_footer_copyright_wrapper_xaEbt .fl_honour_wrap_E--kt .fl_honour5_o2v5s{width:95px;background-position:0 -387px}.fl_footer_wrap_ow234 .fl_footer_copyright_wrapper_xaEbt .fl_honour_wrap_E--kt .fl_honour6_ZTS5D{background-position:0 -118px}.fl_footer_wrap_ow234 .fl_footer_copyright_wrapper_xaEbt .fl_honour_wrap_E--kt .fl_honour10_6KzQ4{background-position:0 -429px;width:102px}.fl_footer_wrap_ow234 .fl_footer_copyright_wrapper_xaEbt .fl_honour_wrap_E--kt .fl_honour12_Lfzzx{background-position:0 -155px;width:114px}.fl_footer_wrap_ow234 .fl_footer_copyright_wrapper_xaEbt .fl_honour_wrap_E--kt .fl_honour11_30pvz{background-position:0 -480px;width:50px}.fl_footer_wrap_ow234 .fl_footer_copyright_wrapper_xaEbt .fl_honour_wrap_E--kt .fl_honour9_ds2vl{background-position:0 -350px;width:130px}.fl_footer_wrap_ow234 .fl_footer_copyright_wrapper_xaEbt .fl_honour_wrap_E--kt .fl_honour100_TQ2bR{background-size:contain;width:90px;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader( src='https://pages.c-ctrip.com/nfes/assist.png', sizingMethod='scale');-ms-filter:"progid:DXImageTransform.Microsoft.AlphaImageLoader( src='https://pages.c-ctrip.com/nfes/assist.png', sizingMethod='scale')"}

</style><div class="tl_header_nav_container_T0v0W tl_normal_header_oOjiU"><div class="tl_header_nav_fOCFQ"><div class="tl_header_nav_small_wrap_gCHc7"><div class="tl_logo_search_layout_jqiD8"><div class="tl_first_wrap_O-7cj"><a id="logo_mfe_top_nfes" data-ubt-key="PC_head_logo_click" title="携程旅行网" href="//www.ctrip.com" assist-speak-text="true" assist-speak-text-pspeak="true" class="tl_header_nav_small_logo_qV3BH tl_header_logo_default_7J1Wu">携程旅行网 </a></div><form id="hp_nfes_searchbar" class="tl_search_bar_wrap_-c5cq"><link rel="stylesheet" href="https://static.tripcdn.com/packages/gcc/online-globalsearch/*/allsearchbar.css" type="text/css"><input type="text" style="display: none;"><div class="cui_search tl_input_wrap_4wLqk"><div id="_allSearchResult" style="display: none;" class="cui_search_list"></div><input type="text" id="_allSearchKeyword" placeholder="搜旅任何旅行相关..." aria-label="搜旅任何旅行相关..." assist-speak-text="true" tabindex="0" assist-speak-text-pspeak="true" autocomplete="off" class="tl_input_8N-Vi"><a href="javascript:void(0)" data-ubt-key="PC_head_search_click" assist-speak-text="true" assist-speak-text-pspeak="true" title="搜索" id="search_button_global" class="pc_home-search  tl_search_icon_N-uay"></a></div><script async="" crossorigin="anonymous" src="https://static.tripcdn.com/packages/gcc/online-globalsearch/*/allsearchbar.js"></script><script async="" crossorigin="anonymous" src="https://webresource.c-ctrip.com/ResUnionOnline/R1/remarketing/js/remarketing.js"></script></form></div><div class="tl_btn_wrap_EyH-F"><ul id="hp_nfes_accountbar" class="tl_nfes_home_header_account_oS-UF"><li class="tl_home_header_item_JJ5DU tl_first_item_d1lsj"><div class="tl_nfes_home_header_login_wrapper_siwkn"><button aria-label="" class="tl_nfes_home_header_login_IUsnp"><i aria-hidden="true" class="pc_home-account tl_nfes_home_header_login_avatar_SG4WR"></i><div class="tl_nfes_home_header_login_title_5neWJ"><span>请登录</span></div></button></div></li><li class="tl_home_header_item_JJ5DU"><button class="tl_nfes_home_header_register_eTWYU">注册</button></li><li class="tl_home_header_item_JJ5DU"><div class="tl_pc_home_header_order_gcMhX"><i aria-hidden="true" class="pc_home-dingdan tl_icon_order_QjjKh"></i><button class="tl_order_title_kSApX">我的订单</button><i aria-hidden="true" class="pc_home-dropdown tl_icon_dropdown_lExig"></i></div></li><li class="tl_home_header_item_JJ5DU"><div class="tl_space_vertical_line_Ng4Lz"></div></li><li class="tl_home_header_item_JJ5DU"><div title="携程客服" class="tl_header_icon_wrapper_GsnJ-"><button aria-label="携程客服"><i aria-hidden="true" class="pc_home-customerService tl_header_icon_CqpDm"></i></button></div></li><li class="tl_home_header_item_JJ5DU"><div title="扫码下载携程App或关注微信公众号" class="tl_header_icon_wrapper_GsnJ-"><button aria-label="扫码下载携程App或关注微信公众号"><i aria-hidden="true" class="pc_home-phone tl_header_icon_CqpDm"></i></button></div></li></ul><div class="tl_derive_5ZA9O"></div><button aria-label="无障碍阅读开关" data-ubt-key="PC_head_accessible_click" class="tl_icon_btn_wrap_R8aGe tl_btn_accessibility_lXwrx"><i aria-hidden="true" class="pc_home-wuzhangai tl_icon_btn_Ml4AL"></i></button><button aria-label="关怀版" data-ubt-key="PC_head_jinlao_click" class="tl_icon_btn_wrap_R8aGe tl_btn_accessibility_lXwrx"><i aria-hidden="true" class="pc_home-jinglao tl_icon_btn_Ml4AL"></i></button></div></div></div></div><script id="__MFE_topLayer_DATA__" type="application/json">{"host":"bbz-ctrip-index-ssr-function.faas.ctripcorp.com","customServiceTelInfo":[{"locationName":"境内","telNumber":["95010","400-830-6666"]},{"locationName":"中国香港","telNumber":"+852-3008-3295"},{"locationName":"中国澳门","telNumber":"+86-21 3406-4888"},{"locationName":"中国台湾","telNumber":"+86-21 3406-4888"},{"locationName":"其他国家和地区","telNumber":"+86-21 3406-4888"}],"cdnResVersion":"1.0.58","headerSwitch":{},"_propsData":{}}</script><link type="text/css" rel="stylesheet" href="//webresource.c-ctrip.com/ares2/nfes/pc-home/*/default/icon/pc_home.css"></div></div>
        <div id="content">
            <ul id="base_wrapper">
                <li id="base_bd" class="layoutfix">
                    <div class="cui_bd">
                        <div id="searchHeader"></div>
                        <!-- 航空公司面包屑导航 -->
                        <div class="seo_step">
                            <a href="http://flights.ctrip.com">机票预订</a>&gt;
                            <span>
                            海南航空官网
                            </span>
                        </div>
                        <h1 class="title">海南航空</h1>
                        <div class="tab_box2">
                            <ul class="tab_box_title">
                                <li class="current"><a href = "">海南航空首页</a></li>
                                <li class=""><a href = "tejiajipiao.html">海南航空特价机票</a></li>
                                <li class=""><a href = "jianjie.html">海南航空简介</a></li>
                                <li class=""><a href = "dianhua.html">海南航空电话</a></li>
                                <li class=""><a href = "shikebiao.html">海南航空航班时刻表</a></li>
                            </ul>
                        </div>
                        <div class="seo_main">
                            <div class="seo_content">
                                <!-- 航空公司简介区域 -->
                                <div class="seo_intro">
                                    <h2>海南航空</h2>
                                    <div class="intro_box">
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;海南航空股份有限公司（以下简称海南航空）于1993年1月成立，起步于中国最大的经济特区海南省，是中国发展最快和最有活力的航空公司之一，致力于为旅客提供全方位无缝隙的航空服务。<br />                 <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&n
                                        <a href= "jianjie.html">查看全部简介&gt;&gt;</a>
                                    </div>
                                </div>
                                <!-- 航空公司特价机票信息显示区 -->
                                <!-- 航空公司特价机票 -->
                            </div>
                            <div class="seo_side">
<div class="mod_box">
        <h3 class="hd">航空公司打折机票</h3>
    <div class="bd">
        <div class="seo_list seo_list9">
            <a href=//3Uair.flights.ctrip.com/>四川航空</a>
            <a href=//8Lair.flights.ctrip.com/>祥鹏航空</a>
            <a href=//BKair.flights.ctrip.com/>奥凯航空</a>
            <a href=//CAair.flights.ctrip.com/>中国国航</a>
            <a href=//CNair.flights.ctrip.com/>大新华</a>
            <a href=//CZair.flights.ctrip.com/>南方航空</a>
            <a href=//EUair.flights.ctrip.com/>成都航空</a>
            <a href=//FMair.flights.ctrip.com/>上海航空</a>
            <a href=//G5air.flights.ctrip.com/>华夏航空</a>
            <a href=//GSair.flights.ctrip.com/>天津航空</a>
            <a href=//HOair.flights.ctrip.com/>吉祥航空</a>
            <a href=//HUair.flights.ctrip.com/>海南航空</a>
            <a href=//JDair.flights.ctrip.com/>首都航空</a>
            <a href=//JRair.flights.ctrip.com/>幸福航空</a>
            <a href=//KNair.flights.ctrip.com/>中国联航</a>
            <a href=//KYair.flights.ctrip.com/>昆明航空</a>
            <a href=//MFair.flights.ctrip.com/>厦门航空</a>
            <a href=//MUair.flights.ctrip.com/>东方航空</a>
            <a href=//NSair.flights.ctrip.com/>河北航空</a>
            <a href=//PNair.flights.ctrip.com/>西部航空</a>
            <a href=//SCair.flights.ctrip.com/>山东航空</a>
            <a href=//TVair.flights.ctrip.com/>西藏航空</a>
            <a href=//ZHair.flights.ctrip.com/>深圳航空</a>
            <a href=//9Cair.flights.ctrip.com/>春秋航空</a>
        </div>
    </div>
</div>

<div class="mod_box">
    <h3 class="hd">
        <a class="more" href="/booking/airport-guides.html">更多机场>></a>
        热门机场
    </h3>
    <div class="bd">
        <div class="seo_list seo_list5 list_font_black">
            <a href="http://flights.ctrip.com/booking/airport-pudong/">上海浦东机场</a>
            <a href="http://flights.ctrip.com/booking/airport-hongqiao/">上海虹桥机场</a>
            <a href="http://flights.ctrip.com/booking/airport-shoudu/">北京首都机场</a>
            <a href="http://flights.ctrip.com/booking/airport-daxing/">北京大兴国际机场</a>
            <a href="http://flights.ctrip.com/booking/airport-baiyun/">新白云国际机场</a>
            <a href="http://flights.ctrip.com/booking/airport-baoan/">宝安国际机场</a>
            <a href="http://flights.ctrip.com/booking/airport-xiaoshan/">萧山国际机场</a>
            <a href="http://flights.ctrip.com/booking/airport-tianhe/">天河国际机场</a>
            <a href="http://flights.ctrip.com/booking/airport-jiangbei/">江北国际机场</a>
            <a href="http://flights.ctrip.com/booking/airport-xianyang/">咸阳国际机场</a>
            <a href="http://flights.ctrip.com/booking/airport-shuangliu/">双流国际机场</a>
            <a href="http://flights.ctrip.com/booking/airport-jiaodong/">胶东国际机场</a>
            <a href="http://flights.ctrip.com/booking/airport-huanghua/">黄花国际机场</a>
            <a href="http://flights.ctrip.com/booking/airport-lukou/">禄口国际机场</a>
            <a href="http://flights.ctrip.com/booking/airport-gaoqi/">高崎国际机场</a>
            <a href="http://flights.ctrip.com/booking/airport-zhoushuizi/">周水子国际机场</a>
            <a href="http://flights.ctrip.com/booking/airport-binhai/">滨海国际机场</a>
            <a href="http://flights.ctrip.com/booking/airport-xinzheng/">新郑国际机场</a>
            <a href="http://flights.ctrip.com/booking/airport-fenghuang/">凤凰国际机场</a>
            <a href="http://flights.ctrip.com/booking/airport-changle/">长乐国际机场</a>
        </div>
    </div>
</div>

                        </div>
                    </div>
                </li>
                <input id="page_id" type="hidden" value="101067">
            </ul>
            <script type="text/javascript">
                var root = document.getElementById('static.resource.url').value;
                if (document.location.port == '8080') {
                    root = '//localhost:8005'
                }
                var version = document.getElementById('static.resource.version').value;
                importScript("assets/shim.js");
                importScript("assets/lib.js");
                importScript("assets/airlinesearchheader.js");
                importScript("assets/browserDetector.js");

                function importScript(url) {
                    var script = document.createElement("script");
                    script.src = root + "/" + url + "?v=" + version;
                    script.type = "text/javascript";
                    script.async = false;
                    document.body.appendChild(script);
                }
            </script>
        </div>
        <div id="hp_footer"><div id="footerLayer" class="relativeFooterLayer"><div class="fl_footer_wrap_ow234"><div class="fl_layout_wrap_g-sIE fl_normal_footer_YgQc1"><div class="fl_footer_link_list_OWItH"><div class="fl_footer_item_layout_gZ1W6 fl_first_item_y9897"><dl class="fl_footer_item_vp3yx"><dt>旅游资讯</dt><dd class="fl_ft_link_item_8Hler"><a href="http://hotels.ctrip.com/jiudian/" rel="nofollow" target="_blank">宾馆索引</a></dd><dd class="fl_ft_link_item_8Hler"><a href="http://you.ctrip.com/sitemap/" rel="nofollow" target="_blank">攻略索引</a></dd><dd class="fl_ft_link_item_8Hler"><a href="http://flights.ctrip.com/booking/hot-city-flights-sitemap.html" rel="nofollow" target="_blank">机票索引</a></dd><dd class="fl_ft_link_item_8Hler"><a href="http://pages.ctrip.com/public/sitemap/sitemap.htm" rel="nofollow" target="_blank">网站导航</a></dd><dd class="fl_ft_link_item_8Hler"><a href="http://pages.ctrip.com/public/sitemap/dj.html" rel="nofollow" target="_blank">旅游索引</a></dd><dd class="fl_ft_link_item_8Hler"><a href="http://trains.ctrip.com/sitemap.html" rel="nofollow" target="_blank">火车票索引</a></dd><dd class="fl_ft_link_item_8Hler"><a href="https://cruise.ctrip.com/newpackage/hot-all-sitemap.html" rel="nofollow" target="_blank">邮轮索引</a></dd><dd class="fl_ft_link_item_8Hler"><a href="https://ct.ctrip.com/official?ctm_ref=sme006" rel="nofollow" target="_blank">企业差旅索引</a></dd><dd class="fl_ft_link_item_8Hler"><a href="http://car.ctrip.com/sitemap/all" rel="nofollow" target="_blank">用车索引</a></dd></dl></div><div class="fl_footer_item_layout_gZ1W6"><dl class="fl_footer_item_vp3yx"><dt>加盟合作</dt><dd class="fl_ft_link_item_8Hler"><a href="http://u.ctrip.com/" rel="nofollow" target="_blank">分销联盟</a></dd><dd class="fl_ft_link_item_8Hler"><a href="http://pages.ctrip.com/public/link/ctrip_link.html" rel="nofollow" target="_blank">友情链接</a></dd><dd class="fl_ft_link_item_8Hler"><a href="https://lipin.ctrip.com/lipinonline/static/intentional" rel="nofollow" target="_blank">企业礼品卡采购</a></dd><dd class="fl_ft_link_item_8Hler"><a href="http://www.ctripins.com/index.html" rel="nofollow" target="_blank">保险代理</a></dd><dd class="fl_ft_link_item_8Hler"><a href="http://pages.ctrip.com/public/dlhz.htm" rel="nofollow" target="_blank">代理合作</a></dd><dd class="fl_ft_link_item_8Hler"><a href="http://ebooking.ctrip.com/ebkovsassembly/HotelApply?type=1&amp;channel=1&amp;lang=0" rel="nofollow" target="_blank">酒店加盟</a></dd><dd class="fl_ft_link_item_8Hler"><a href="http://dst.ctrip.com/" rel="nofollow" target="_blank">目的地及景区合作</a></dd><dd class="fl_ft_link_item_8Hler"><a href="http://pages.c-ctrip.com/cooperation/web/cooperation.html#ctm_ref=ctr_hp_btm_coop" rel="nofollow" target="_blank">更多加盟合作</a></dd></dl></div><div class="fl_footer_item_layout_gZ1W6 fl_no_derive_G1PJ2"><dl class="fl_footer_item_vp3yx"><dt>关于携程</dt><dd class="fl_ft_link_item_8Hler"><a href="http://pages.ctrip.com/public/ctripab/abctrip.htm" rel="nofollow" target="_blank">关于携程</a></dd><dd class="fl_ft_link_item_8Hler"><div class="fl_news_item_dropdown_A8-JZ"><div class="fl_news_item_a_5-UUz">携程热点<i aria-hidden="true" class="pc_home-dropdown fl_news_icon_VV9RE"></i></div></div></dd><dd class="fl_ft_link_item_8Hler"><a href="http://pages.ctrip.com/public/contact.htm" rel="nofollow" target="_blank">联系我们</a></dd><dd class="fl_ft_link_item_8Hler"><a href="https://careers.ctrip.com/" rel="nofollow" target="_blank">诚聘英才</a></dd><dd class="fl_ft_link_item_8Hler"><a href="http://pages.ctrip.com/commerce/promote/201201/other/qygm/index.html?tzm=shanghaigongshangju" rel="nofollow" target="_blank">企业公民</a></dd><dd class="fl_ft_link_item_8Hler"><a href="https://contents.ctrip.com/huodong/privacypolicypc/index?type=0" rel="nofollow" target="_blank">用户协议</a></dd><dd class="fl_ft_link_item_8Hler"><a href="https://contents.ctrip.com/huodong/privacypolicypc/index?type=1" rel="nofollow" target="_blank">隐私政策</a></dd><dd class="fl_ft_link_item_8Hler"><a href="http://pages.ctrip.com/public/diploma/company.htm" rel="nofollow" target="_blank">营业执照</a></dd><dd class="fl_ft_link_item_8Hler"><a href="http://sec.ctrip.com/" rel="nofollow" target="_blank">安全中心</a></dd><dd class="fl_ft_link_item_8Hler"><a href="https://we.ctrip.com/account/login" rel="nofollow" target="_blank">携程内容中心</a></dd><dd class="fl_ft_link_item_8Hler"><a href="https://pages.c-ctrip.com/public/encroachment.html" rel="nofollow" target="_blank">知识产权</a></dd><dd class="fl_ft_link_item_8Hler"><a href="https://group.trip.com/" rel="nofollow" target="_blank">Trip.com Group</a></dd></dl></div><div class="fl_footer_item_layout_gZ1W6 fl_no_derive_G1PJ2"><dl class="fl_footer_item_vp3yx fl_item_tel_list_3nBrm"></dl><dl class="fl_footer_item_vp3yx fl_item_qrcode_Sf-pF"><dd><div><img alt="" style="width: 120px; height: auto;" data-src="//pic.c-ctrip.com/platform/online/home/er_ctrip_app.jpg" src="https://webresource.c-ctrip.com/ares2/nfes/pc-home/1.0.41/default/image/placeholder.png"><p class="fl_qr_title_oIhLw">扫码下载携程App</p></div></dd></dl></div></div><div class="fl_footer_copyright_wrapper_xaEbt"><p><a rel="nofollow" href="http://pages.ctrip.com/public/copyright.htm" id="copyright">Copyright©</a>1999-2024,&nbsp;<a href="http://www.ctrip.com/">ctrip.com</a>. All rights reserved.&nbsp;|&nbsp;<a rel="nofollow" target="_blank" href="https://pages.c-ctrip.com/nfes/pchome/icp.pdf?t=20220325">ICP证：沪B2-20050130&nbsp;|&nbsp;</a><a rel="nofollow" target="_blank" href="http://beian.miit.gov.cn/">沪ICP备08023580号-3</a></p><p class="fl_gns_wrapper_wMJ0P"><a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010502002731"><i class="footerLayer-lazy fl_icon-gns_iPpG5"></i>沪公网备31010502002731号</a>丨<a href="https://pages.c-ctrip.com/nfes/pchome/InternetDrugCertificate.pdf" target="_blank">互联网药品信息服务资格证</a>丨<a href="https://pages.c-ctrip.com/nfes/yiliao.pdf?xx=11" target="_blank">（沪）网械平台备字[2022]第00001号</a> | <span>沪网食备1050001号</span> | <a href="http://m.ctrip.com/webapp/vacations/tour/supplier" rel="nofollow">旅游度假资质</a> | <a href="https://pages.c-ctrip.com/nfes/pchome/cert.html" rel="nofollow">平台信息</a></p><p class="fl_supervision-call_gsdM8"><span>违法和不良信息举报电话021-22500846丨全国旅游投诉热线12345丨</span><a href="http://pages.c-ctrip.com/commerce/promote/201611/other/zz/pc/index.html" target="_blank">上海市旅游网站落实诚信建设主体责任承诺书</a></p><div class="fl_honour_wrap_E--kt"><a href="http://scjgj.sh.gov.cn/" title="工商亮照标识" target="_blank" rel="nofollow" class="footerLayer-lazy fl_honour2_Emzmq">上海工商</a><a href="http://www.zx110.org/" target="_blank" rel="nofollow" title="征信网" class="footerLayer-lazy fl_honour4_eaDL-">网络社会征信网</a><a href="http://www.shjbzx.cn/" target="_blank" rel="nofollow" title="上海市互联网违法与违规信息举报中心" class="footerLayer-lazy fl_honour5_o2v5s">信息举报中心</a><a href="https://ss.knet.cn/verifyseal.dll?sn=e12061531010025926306977" target="_blank" rel="nofollow" title="可信网站" class="footerLayer-lazy fl_honour6_ZTS5D">可信网站</a></div><div class="fl_honour_wrap_E--kt"><a href="http://www.creditchina.gov.cn/" title="信用中国" target="_blank" rel="nofollow" class="footerLayer-lazy fl_honour10_6KzQ4">信用中国</a><a href="https://www.12377.cn/" title="网上有害信息举报专区" target="_blank" rel="nofollow" class="footerLayer-lazy fl_honour12_Lfzzx">网上有害信息举报专区</a><a href="https://im-synthesize.ctrip.com/complaints/rights/AppealCreate" title="消费维权联络点" target="_blank" rel="nofollow" class="footerLayer-lazy fl_honour11_30pvz">消费维权联络点</a><a href="https://fw.scjgj.sh.gov.cn/platform/survey/step1_phone" title="网购大家评" target="_blank" rel="nofollow" class="footerLayer-lazy fl_honour9_ds2vl">网购大家评</a><span title="适老化及无障碍标识" class="fl_honour100_TQ2bR">适老化及无障碍标识</span></div></div></div></div><script id="__MFE_footerLayer_DATA__" type="application/json">{"host":"bbz-ctrip-index-ssr-function.faas.ctripcorp.com","linkData":[{"title":"旅游资讯","listData":[{"jumpURL":"http://hotels.ctrip.com/jiudian/","name":"宾馆索引"},{"jumpURL":"http://you.ctrip.com/sitemap/","name":"攻略索引"},{"jumpURL":"http://flights.ctrip.com/booking/hot-city-flights-sitemap.html","name":"机票索引"},{"jumpURL":"http://pages.ctrip.com/public/sitemap/sitemap.htm","name":"网站导航"},{"jumpURL":"http://pages.ctrip.com/public/sitemap/dj.html","name":"旅游索引"},{"jumpURL":"http://trains.ctrip.com/sitemap.html","name":"火车票索引"},{"jumpURL":"https://cruise.ctrip.com/newpackage/hot-all-sitemap.html","name":"邮轮索引"},{"jumpURL":"https://ct.ctrip.com/official?ctm_ref=sme006","name":"企业差旅索引"},{"jumpURL":"http://car.ctrip.com/sitemap/all","name":"用车索引"}]},{"title":"加盟合作","listData":[{"jumpURL":"http://u.ctrip.com/","name":"分销联盟"},{"jumpURL":"http://pages.ctrip.com/public/link/ctrip_link.html","name":"友情链接"},{"jumpURL":"https://lipin.ctrip.com/lipinonline/static/intentional","name":"企业礼品卡采购"},{"jumpURL":"http://www.ctripins.com/index.html","name":"保险代理"},{"jumpURL":"http://pages.ctrip.com/public/dlhz.htm","name":"代理合作"},{"jumpURL":"http://ebooking.ctrip.com/ebkovsassembly/HotelApply?type=1&channel=1&lang=0","name":"酒店加盟"},{"jumpURL":"http://dst.ctrip.com/","name":"目的地及景区合作"},{"jumpURL":"http://pages.c-ctrip.com/cooperation/web/cooperation.html#ctm_ref=ctr_hp_btm_coop","name":"更多加盟合作"}]},{"title":"关于携程","listData":[{"jumpURL":"http://pages.ctrip.com/public/ctripab/abctrip.htm","name":"关于携程"},{"name":"携程热点","contentList":[{"contentTitle":"携程公布2018年全年财报 净利达55亿元","contentLink":"https://pages.c-ctrip.com/marketing/news.htm?file=2019030501"},{"contentTitle":"上海市委书记李强调研携程","contentLink":"https://pages.c-ctrip.com/marketing/news.htm?file=2019022201"},{"contentTitle":"携程全球首个目的地服务中心落地普吉岛","contentLink":"https://pages.c-ctrip.com/marketing/news.htm?file=2019020301"},{"contentTitle":"更多","contentLink":"http://pages.ctrip.com/marketing/newsindex.htm"}]},{"jumpURL":"http://pages.ctrip.com/public/contact.htm","name":"联系我们"},{"jumpURL":"https://careers.ctrip.com/","name":"诚聘英才"},{"jumpURL":"http://pages.ctrip.com/commerce/promote/201201/other/qygm/index.html?tzm=shanghaigongshangju","name":"企业公民"},{"jumpURL":"https://contents.ctrip.com/huodong/privacypolicypc/index?type=0","name":"用户协议"},{"jumpURL":"https://contents.ctrip.com/huodong/privacypolicypc/index?type=1","name":"隐私政策"},{"name":"营业执照","jumpURL":"http://pages.ctrip.com/public/diploma/company.htm"},{"name":"安全中心","jumpURL":"http://sec.ctrip.com/"},{"name":"携程内容中心","jumpURL":"https://we.ctrip.com/account/login"},{"name":"知识产权","jumpURL":"https://pages.c-ctrip.com/public/encroachment.html"},{"name":"Trip.com Group","jumpURL":"https://group.trip.com/"}]}],"customServiceTelInfo":[{"locationName":"境内","telNumber":["95010","400-830-6666"]},{"locationName":"中国香港","telNumber":"+852-3008-3295"},{"locationName":"中国澳门","telNumber":"+86-21 3406-4888"},{"locationName":"中国台湾","telNumber":"+86-21 3406-4888"},{"locationName":"其他国家和地区","telNumber":"+86-21 3406-4888"}],"certificateInfo":{"copyright":{"name":"Copyright©","url":"http://pages.ctrip.com/public/copyright.htm"},"ctrip":{"name":"ctrip.com","url":"http://www.ctrip.com/"},"icpCert":{"name":"ICP证：沪B2-20050130","url":"https://pages.c-ctrip.com/nfes/pchome/icp.pdf?t=20220325"},"icpFilings":{"name":"沪ICP备08023580号-3","url":"http://beian.miit.gov.cn/"},"policeFiling":{"name":"沪公网备31010502002731号","url":"http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010502002731"},"internetDrugCertificate":{"name":"互联网药品信息服务资格证","url":"https://pages.c-ctrip.com/nfes/pchome/InternetDrugCertificate.pdf"},"yiliao":{"name":"（沪）网械平台备字[2022]第00001号","url":"https://pages.c-ctrip.com/nfes/yiliao.pdf?xx=11"},"foodCert":{"name":"沪网食备1050001号"},"vacationCert":{"name":"旅游度假资质","url":"http://m.ctrip.com/webapp/vacations/tour/supplier"},"platformInfo":{"name":"平台信息","url":"https://pages.c-ctrip.com/nfes/pchome/cert.html"},"reportTel":{"name":"违法和不良信息举报电话021-22500846"},"complaintTel":{"name":"全国旅游投诉热线12345"},"commitment":{"name":"上海市旅游网站落实诚信建设主体责任承诺书","url":"http://pages.c-ctrip.com/commerce/promote/201611/other/zz/pc/index.html"},"businessSite":{"name":"上海工商","url":"http://scjgj.sh.gov.cn/"},"zhengxinNetwork":{"name":"网络社会征信网","url":"http://www.zx110.org/"},"infoReportingCenter":{"name":"信息举报中心","url":"http://www.shjbzx.cn/"},"trustedWebsite":{"name":"可信网站","url":"https://ss.knet.cn/verifyseal.dll?sn=e12061531010025926306977"},"creditChina":{"name":"信用中国","url":"http://www.creditchina.gov.cn/"},"onlineHarmInfoReportArea":{"name":"网上有害信息举报专区","url":"https://www.12377.cn/"},"consumerRightsProtectContact":{"name":"消费维权联络点","url":"https://im-synthesize.ctrip.com/complaints/rights/AppealCreate"},"onlineShoppingComments":{"name":"网购大家评","url":"https://fw.scjgj.sh.gov.cn/platform/survey/step1_phone"},"ariaSignage":{"name":"适老化及无障碍标识"}},"_propsData":{}}</script><script type="text/javascript" id="preact_js_common">
         document.body.classList.add('NEW-HEADER')
         window.Trip_Index_Event = (function(){
            var events = {}
            function On( Evt , handler){
                events[Evt] = []
                events[Evt].push({
                    handler: handler
                })
            }
            function Execute( evt, args){
                if (!events[evt]) {
                    return
                }else{
                    for (var i = 0, max = events[evt].length; i < max; i++) {
                        events[evt][i].handler(args)
                    }
                }

            }
            return {
                On: On,
                Execute: Execute
            }
        })()

        if (typeof window.ctrip_assit_onload_arr!="undefined"){
            window.ctrip_assit_onload_arr.push(preact_ctrip_assit_onload)
        }else {
            window.ctrip_assit_onload_arr=[]
            window.ctrip_assit_onload_arr.push(preact_ctrip_assit_onload)
        }

        if(typeof window.ctrip_assit_unonload_arr!="undefined"){
            window.ctrip_assit_unonload_arr.push(preact_ctrip_assit_unonload)
        }else {
            window.ctrip_assit_unonload_arr=[]
            window.ctrip_assit_unonload_arr.push(preact_ctrip_assit_unonload)
        }

        function preact_ctrip_assit_onload(){
            window.Trip_Index_Event.Execute("assitShow", true);
            var leftNav = document.getElementById('leftSideNavLayer');
            var rightContent = document.getElementById('hp_container');
            if(rightContent) {
                rightContent.style.top = '80px';
            } 
            if (leftNav) {
                leftNav.style.top = '80px';
            }
        }

        function preact_ctrip_assit_unonload () {
            window.Trip_Index_Event.Execute("assitShow", false);
            var leftNav = document.getElementById('leftSideNavLayer');
            var rightContent = document.getElementById('hp_container');
            if (leftNav) {
                leftNav.style.top = '0px';
            }
            if (rightContent) {
                rightContent.style.top = '0px';
            }
           

        }
    </script><script async="" src="//webresource.c-ctrip.com/NFES/mfe_compose/1705389262230/compose.preact.js"></script></div></div>
    </div>
</body>
</html>
