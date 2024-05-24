// ADD GLOBAL CUSTOM EVENT
$.Event("resizeStart");
$.Event("resizeEnd");
$.Event("layoutChange");
$.Event("reachedEndOfContents");

/**
 * show, hide event 체크 소스
 * @author theRok
 * @since 2017-12-28
 */
var _oldhide = $.fn.hide;
$.fn.hide = function (speed, callback) {
    $(this).trigger("hide");
    return _oldhide.apply(this, arguments);
};

var _oldShow = $.fn.show;
$.fn.show = function (speed, callback) {
    $(this).trigger("show");
    return _oldShow.apply(this, arguments);
};

/**
 * Handlebars 텝플릿 컴파일 저장용 객체
 *
 * @type {{}}
 */
var Template = {};

// 24시간
var nowDatetime24Event = parseInt(new Date().getTime() / 1000);
var arrComicIdx24Event = [
    10014, 10076, 10146, 10102, 10167, 10170, 10320, 10285, 10396, 10404, 10371,
    10410, 10363, 10464, 10135, 10454, 10465, 10430, 10469, 10484, 10419, 10424,
    10486, 10494, 10498, 10537, 10531, 10540, 10517, 10523, 10528, 10526, 10516,
    10457, 10487, 10493, 10577, 10503, 10570, 10499, 10533, 10386, 10530, 10522,
    10529, 10489, 10575, 10514, 10581, 10534, 10515, 10555, 10578, 10559, 10580,
    10564, 10565, 10471, 10588, 10548, 10546,
];

/**
 * GLOBAL COMMON FUNCTIONS
 *
 * @type {{userAdultStatus: null, setLayoutType: Responsive.setLayoutType, queList: [], document: {height: null},
 *     setLoadingArea: Responsive.setLoadingArea, addKeyAction: (function(*=, *=, *): (string|undefined)),
 *     responsiveImgPath: null, timer: {resize: null, loading: null}, isOwnApp: null, loadJson: (function(*=, *=):
 *     Promise<unknown>), runKeyAction: Responsive.runKeyAction, SEG_1: null, layerOnLayer: Responsive.layerOnLayer,
 *     clearLoadingArea: Responsive.clearLoadingArea, SEG_2: null, SEG_3: null, isMobile: null, runQueList:
 *     Responsive.runQueList, getKeyCode: (function(*=): null), userSex: null, init: Responsive.init, isLoadingUrl:
 *     boolean, keyAction: [], getObject: (function(*=): (Window.jQuery|boolean)), removeKeyAction:
 *     Responsive.removeKeyAction, isResizing: boolean, toggleImage: Responsive.toggleImage, loading:
 *     Responsive.loading, templateCompile: Responsive.templateCompile, clearKeyAction: Responsive.clearKeyAction,
 *     needJoin: Responsive.needJoin, checkLoginLink: Responsive.checkLoginLink, width: {tablet: null, pc: null,
 *     window: null}, loadUrl: Responsive.loadUrl, userDevice: null, GNA: boolean, window: {width: number, height:
 *     number}, repositionLayer: Responsive.repositionLayer, setWindowSize: Responsive.setWindowSize, isSaving: null}}
 *
 * @author theRok
 * @since 2020.07.02
 */
var Responsive = {
    GNA: false,
    SEG_1: null,
    SEG_2: null,
    SEG_3: null,
    isOwnApp: null,
    isMobile: null,
    isLoadingUrl: false,
    userDevice: null,
    userAdultStatus: null,
    responsiveImgPath: null,
    width: {
        window: null,
        pc: null,
        tablet: null,
    },
    userSex: null,
    userIp: null,
    isSaving: null,
    timer: {
        resize: null,
        loading: null,
    },
    queList: [],
    keyAction: [],
    window: {
        width: 0,
        height: 0,
    },
    document: {
        height: null,
    },
    isResizing: false,
    observer: {
        contents: null,
    },
    clickCount: 3,
    runQueList: function () {
        if (!globalAjaxIsStart) {
            Responsive.queList = _.uniqBy(Responsive.queList, "func");
            if (Responsive.queList.length > 0) {
                _.each(Responsive.queList, function (o) {
                    if (_.has(o, 'func') && typeof o.func == "function") {
                        o.func(o.params);
                    }
                });
                Responsive.queList = [];
            }
        }
    },
    loadUrl: function (url, params, name, isPost) {
        if (!name) name = "#alert_layer";
        Layer.hide(name);
        if (url && Responsive.isLoadingUrl === false) {
            $.ajax({
                url: url,
                type: isPost ? "POST" : "GET",
                data: params,
                cache: true,
                beforeSend : function () {
                    try {
                        const isLoadingUrlCheckPathname = ['/alert/auth/login'];
                        if (isLoadingUrlCheckPathname.includes(new URL(`${window.location.origin}${url}`).pathname)) {
                            Responsive.isLoadingUrl = true;
                        }
                    } catch (error) {
                    }
                },
                success: function (response) {
                    if (response) {
                        $(name).html(response);
                        if (url.match(/info_coin_buy_all/)) {
                            //Layer.isShowBottom = true;
                        }
                        Layer.show(name);
                    }
                    Responsive.runQueList();
                },
                error: function (err) {
                    console.error(err);
                },
            }).done(function () {
                Responsive.isLoadingUrl = false;
            });
        }
    },
    filterReservedComic: function (lists) {
        var currentDate = moment();
        return _.remove(lists, function (item) {
            if (_.has(item, 'reserve') && item.reserve.check) {
                if (item.reserve.date.length) {
                    var reserveDate = moment(item.reserve.date);
                    return currentDate.diff(reserveDate) > 0;
                } else {
                    return false;
                }
            }
            return true;
        });
    },
    loadJson: function (url, name) {
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: url,
                cache: true,
                dataType: "JSON",
                success: function (response) {
                    resolve(response);
           reject(err);
                },
            });
        });
    },
    getObject: function (obj) {
        if (obj) {
            if (obj instanceof jQuery) {
                return obj;
            } else {
                return $(obj);
            }
        }
        return false;
    },
    setLayoutType: function () {
        Responsive.width.window = window.innerWidth;
        if (Responsive.width.window >= Responsive.width.pc) {
            if (currentLayout !== "pc") {
                currentLayout = "pc";
                $(document).trigger("layoutChange");
            }
        } else if (
            Responsive.width.window < Responsive.width.pc &&
            Responsive.width.window >= Responsive.width.tablet
        ) {
            if (currentLayout !== "tablet") {
                currentLayout = "tablet";
                $(document).trigger("layoutChange");
            }
        } else {
            if (currentLayout !== "mobile") {
                currentLayout = "mobile";
                $(document).trigger("layoutChange");
            }
        }
    },
    loading: function (obj, height) {
        var _this = Responsive.getObject(obj);
        _this.addClass("loading-area");
        if (height) {
            _this.data("loading-height", height);
        }
        Responsive.setLoadingArea();
    },
    setLoadingArea: function () {
        _.each(document.getElementsByClassName("loading-area"), function (o) {
            var _this = $(o),
                _height = _this.data("loading-height");

            if (!_height) _height = "h1";
            var _div = $("<div>", { class: "loadingArea " + _height }).html(
                '<img src="' +
                    Responsive.responsiveImgPath +
                    '/common/loading.gif" />'
            );
            _this.append(_div).removeClass("loading-area");
            _div.siblings().addClass('loading-hide');
       emoveClass('loading-hide');
    },
    layerOnLayer: function (layer1, layer2) {
        var layer1 = Responsive.getObject(layer1);
        var layer2 = Responsive.getObject(layer2);

        layer2.imagesLoaded(function () {
            layer2.addClass("frontAboveAll");
            $("#modal_bg").addClass("frontAboveAll");

            layer2.on("hide", function (event) {
                if ($(event.target).hasClass("alert_layer")) {
                    layer2.off("hide");
                    $(".frontAboveAll").removeClass("frontAboveAll");
                    if (isShown(layer1)) {
                        Layer.Modal.show(layer1);
                        preventScroll();
                    }
                }
            });

            Layer.show(layer2);
            $("#modal_bg")
                .unbind("click")
                .bind("click", function () {
                    Layer.hide(layer2);
                    $(".frontAboveAll").removeClass("frontAboveAll");
                    if (isShown(layer1)) {
                        Layer.Modal.show(layer1);
                        preventScroll();
                    }
                });
        });
    },
    templateCompile: function () {
        $(".handlebars-template").each(function () {
            var _this = $(this);
            if (_this.data("name")) {
                Template[_this.data("name")] = Handlebars.compile(_this.html());
                _this.remove();
            }
        });
    },
    needJoin: function (redirect) {
        if (!user_idx) {
            Login.join({
                redirect: redirect,
            });
        } else {
            location.href = redirect;
        }
    },
    repositionLayer: function () {
        var currentLayer = [];
        $(document).on("resizeStart", function () {
            if (currentLayer)
                $(".alert_layer").each(function () {
                    var _this = $(this);
                    if (isShown(_this) && Number(_this.css("opacity")) > 0) {
                        currentLayer.push(_this);
                        _this.stop(true, true).fadeTo(0, 0);
                    }
                });
        });

        $(document).on("resizeEnd", function () {
            _.each(currentLayer, function (o) {
                var layer = Responsive.getObject(o);
                if (layer.hasClass("only-pc") && currentLayout !== "pc") {
                    Layer.hide(layer);
                } else {
                    Layer.setPosition(o);
                }
            });
            currentLayer = [];
        });
    },
    checkLoginLink: function () {
        // 링크 시 로그인 체크
        $(document).on("click", "a", function (event) {
            var _this = $(this);
            var _href = _this.attr("href");
            var regExp = new RegExp(/^\/.+/);

            if (_href && (isUrl(_href) || regExp.test(_href))) {
                var url = new URL(_href, location.origin);
                var arrayPath = url.pathname.split("/");
                if (typeof arrayPath[1] != "undefined" && !user_idx) {
                    if (arrayPath[1] == "my") {
                        if (
                            typeof arrayPath[3] != "undefined" &&
                            arrayPath[3] == "giftbox"
                        ) {
                            // location.href = _href;
                        } else {
                            event.preventDefault();
                            Login.login({
                                redirect: _href,
                            });
                        }
                    }
                }
            }
        });

        $(document).on("click", ".join_check_link", function (event) {
            if (!user_idx) {
                event.preventDefault();
                Login.login($(this).data("url"));
            }
        });
    },
    toggleImage: function () {
        // 레이아웃 변경 시 이미지 변경 처리
        _.each(
            document.getElementsByClassName("toggle-background-image"),
            function (o) {
                var _this = Responsive.getObject(o);

                if (_this.data(currentLayout + "-image")) {
                    _this.css(
                        "background-image",
                        "url(" + _this.data(currentLayout + "-image") + ")"
                    );
                } else if (_this.data("default-image")) {
                    _this.css(
                        "background-image",
                        "url(" + _this.data("default-image") + ")"
                    );
                }
            }
        );
    },
    getKeyCode: function (keyName) {
        var keyCode = null;
        switch (_.toLower(keyName)) {
            case "enter":
                keyCode = 13;
                break;
            case "backspace":
                keyCode = 8;
                break;
            case "tab":
                keyCode = 9;
                break;
            case "shift":
                keyCode = 16;
                break;
            case "control":
                keyCode = 17;
                break;
            case "esc":
                keyCode = 27;
                break;
            case "space":
                keyCode = 32;
                break;
            case "left":
                keyCode = 37;
                break;
            case "right":
                keyCode = 39;
                break;
            case "up":
                keyCode = 38;
                break;
            case "down":
                keyCode = 30;
                break;
        }
        return keyCode;
    },
    addKeyAction: function (keyName, func, permanently) {
        var keyCode = Responsive.getKeyCode(keyName);
        if (keyCode) {
            if (typeof Responsive.keyAction[keyCode] == "undefined") {
                Responsive.keyAction[keyCode] = [];
                Responsive.keyAction[keyCode]["once"] = {};
                Responsive.keyAction[keyCode]["permanently"] = {};
            }

            if (typeof func == "function") {
                var groupName = permanently ? "permanently" : "once";
                var funcKey = $.sha256b64(_.toString(func));
                Responsive.keyAction[keyCode][groupName][funcKey] = func;

                return [keyName, groupName, $.sha256b64(_.toString(func))].join(
                    "|"
                );
            }
        }
    },
    runKeyAction: function (keyName) {
        var keyCode = _.isNumber(keyName)
            ? keyName
            : Responsive.getKeyCode(keyName);
        if (keyCode && typeof Responsive.keyAction[keyCodee]["once"], function (func) {
                if (func) func();
            });
            Responsive.keyAction[keyCode]["once"] = {};

            _.each(
                Responsive.keyAction[keyCode]["permanently"],
                function (func, key) {
                    if (func) func();
                }
            );
        }
    },
    removeKeyAction: function (funcKey) {
        var keyArray = funcKey.split("|");
        var keyCode = Responsive.getKeyCode(keyArray[0]);

        if (
            typeof Responsive.keyAction[keyCode][keyArray[1]][keyArray[2]] !=
            "undefined"
        ) {
            Responsive.keyAction[keyCode][keyArray[1]][keyArray[2]] = null;
        }
    },
    clearKeyAction: function (keyName) {
        var keyCode = Responsive.getKeyCode(keyName);
        if (keyCode) {
            Responsive.keyAction[keyCode] = [];
        }
    },
    setWindowSize: function () {
        Responsive.window.width = window.innerWidth
            ? parseInt(window.innerWidth)
            : parseInt($(window).width());
        Responsive.window.height = window.innerHeight
            ? parseInt(window.innerHeight)
            : parseInt($(window).height());
        Responsive.document.height = $(document).innerHeight();
    },
    init: function (params) {
        _.each(params, function (v, k) {
            Responsive[k] = v;
        });

        Responsive.setLayoutType();
        Responsive.repositionLayer();
        Responsive.toggleImage();

        // RESIZE EVENT
        $(window).on("resize", function () {
            if ($(document).innerHeight() !== Responsive.document.height) {
                if (Responsive.isResizing === false) {
                    $(document).trigger("resizeStart");
                    Responsive.isResizing = true;
                }
                Responsive.document.height = $(document).innerHeight();
            }
            clearTimeout(Responsive.timer.resize);
            Responsive.timer.resize = setTimeout(function () {
                Responsive.setWindowSize();
                Responsive.isResizing = false;
                $(document).trigger("resizeEnd");
            }, 300);
            Responsive.setLayoutType();
        });

        $(document).ajaxSend(function (event, jqxhr, settings) {
            var url = new URL(settings.url, location.origin);
            if (url.hostname.match("toptoon.com")) {
                if (!url.pathname.match(/^\/log\//)) {
                    globalAjaxIsStart = true;
                    Responsive.setLoadingArea();
                }
            }
        });

        $(document).ajaxStart(function () {});

        $(document).ajaxStop(function (event) {
            if (globalAjaxIsStart) {
                globalAjaxIsStart = false;

                clearInterval(Responsive.timer.loading);
                Responsive.runQueList();
            }
            Responsive.clearLoadingArea();
        });

        var csrf_token = getCookie("ci_cookie");
        $.ajaxPrefilter(function (options, originalOptions, jqXHR) {
            if (options.type.toLowerCase() === "post") {
                // initialize `data` to empty string if it does not exist
                options.data = options.data || "";

                // add leading ampersand if `data` is non-empty
                options.data += options.data ? "&" : "";

                // add _token entry
                options.data += "ci_token=" + csrf_token;
            }
    l, data, callback) {
                $.post(url, data, callback, "json");
            },
        });

        // 숫자만 입력 처리
        $(document).on("focus", "input", function () {
            var _this = $(this);
            if (_this.hasClass("number-only")) {
                _this.on("keydown", function (event) {
                    var allowedKeyCodes = [
                        8, 9, 13, 37, 38, 39, 40, 46, 48, 49, 50, 51, 52, 53,
                        54, 55, 56, 57, 96, 97, 98, 99, 100, 101, 102, 103, 104,
                        105,
                    ];
                    if (_.indexOf(allowedKeyCodes, event.keyCode) < 0) {
                        event.preventDefault();
                    }
                    _this.value = _this[0].value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
                    // 숫자 이외 제거
                    if (_this.prop('maxlength') > 0 && (_this.prop('maxlength') < _this.val().length)) {
                        _num = _this.val().slice(0, -1);
                        _this.val(_num);
                    }
                });
                _this.on("keyup", function (event) { // 키 누르고 있는 경우 방지
                    _this.value = _this[0].value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
                    // 숫자 이외 제거
                    if (_this.prop('maxlength') > 0 && (_this.prop('maxlength') < _this.val().length)) {
                        _num = _this.val().slice(0, -1);
                        _this.val(_num);
                    }
                });
            }
        });

        Responsive.checkLoginLink();

        Gender.init({
            current: Responsive.userSex,
        });

        /*DataSaving.init({
            current: Responsive.isSaving,
        });*/

        SlideMenu.init();

        localStorage.removeItem('clickCount');

        $(function () {
            Responsive.setWindowSize();
            Responsive.templateCompile();

            // GET LAYER 처리
            var tempUrl = new URL(location.href, location.origin);
            var tempParams = new URLSearchParams(tempUrl.search);
            if (tempParams.has("layer")) {
                var getUrl = new URL(
                    decodeURIComponent(tempParams.get("layer")),
                    location.origin
                );
                if (getUrl.href.match(/\/auth((\/login|\/join)|$)/)) {
                    if (!user_idx) Responsive.loadUrl(getUrl.href);
                } else {
                    Responsive.loadUrl(getUrl.href);
                }
                getUrl = null;
            }
            tempUrl = null;
            tempParams = null;

            // Observer
            if (document.querySelector("#footer")) {
                Responsive.observer.contents = new IntersectionObserver(
                    function (entries, observer) {
                        entries.forEach((entry) => {
                            if (entry.isIntersecting) {
                                $(window).trigger("reachedEndOfContents");
                            }
                        });
                    },
                    {
                        threshold: 0.4,
                    }
                );
                Responsive.observer.contents.observe(
                    document.querySelector("#footer")
                );
           sponsive.toggleImage();
        });

        $(window).on("keydown", function (event) {
            Responsive.runKeyAction(event.keyCode);
        });

        Handlebars.registerHelper("numberFormat", function (data) {
            if (data > 0) {
                return data.format();
            } else {
                return 0;
            }
        });

        Handlebars.registerHelper("dateFormat", function (dateString, format) {
            var date = moment(dateString);
            if (!format) {
                format = "YYYY-MM-DD HH:mm:ss";
            }
            return date.format(format);
        });

        Handlebars.registerHelper("isAdultType", function (type, options) {
            if (type === "adult") {
                return options.fn(this);
            } else {
                return options.inverse(this);
            }
        });
    },
};

/**
 * 상단 메인 메뉴와 서브 메뉴 제어
 *
 * @type {{sub: Navigator.sub, init: Navigator.init, subNavigation: null, pathNameArray: string[], main:
 *     Navigator.main, mainMenuName: null}}
 *
 * @author theRok
 * @since 2020.06.24
 */
var Navigator = {
    mainMenuName: null,
    subNavigation: null,
    pathNameArray: location.pathname.split("/"),
    class: {
        active: "active",
    },
    isNot: new RegExp("^[:]"),
    main: function () {
        $(".main-menus li, .sub-menus").each(function () {
            var _this = $(this);
            var skip = false;

            if (_this.hasClass("sub-menus") && _this.data("parent-name"))
                return true;

            if (_this.data("urls")) {
                var urls = _this.data("urls").split("|");
                _.each(urls, function (url) {
                    if (url === location.pathname) {
                        _this.addClass(Navigator.class.active);
                        Navigator.mainMenuName = _this.data("name");
                        skip = true;
                        return false;
                    }
                });
            }

            if (_this.data("seg-" + Navigator.pathNameArray.length)) {
                var tempSegs = _this
                    .data("seg-" + Navigator.pathNameArray.length)
                    .split("|");
                var isRemains = false;

                _.each(tempSegs, function (o) {
                    if (!Navigator.isNot.test(o)) {
                        isRemains = true;
                    }
                });

                if (isRemains) {
                    return true;
                }
            }

            _.each(Navigator.pathNameArray, function (path, i) {
                if (skip) return true;
                if (_this.data("seg-" + i)) {
                    var arraySeg = _this.data("seg-" + i).split("|");
                    _.each(arraySeg, function (o) {
                        if (Navigator.isNot.test(o)) {
                            var notSeg = o.replace(":", "");
                            arraySeg.splice(0, 1);
                            if (notSeg == path) {
                                if (
                                    Navigator.mainMenuName == _this.data("name")
                                )
                                    Navigator.mainMenuName = null;
                                _this.removeClass(Navigator.class.active);
                                skip = true;
                                return false;
                            }
                        }
                    });

                    if (skip == false) {
                        if (arraySeg.length > 0) {
                            if (_.indexOf(arraySeg, path) >= 0) {
                                _this.addClass(Navigator.class.active);
                                Navigator.mainMenuName = _this.data("name");
                            } else {
                                if (
                                    Navigator.mainMenuName == _this.data("name")
                                )
                                    Navigator.mainMenuName = null;
                                _this.removeClass(Navigator.class.active);
                                skip = true;
                                return false;
                            }
                        } else {
                            _this.addClass(Navigator.class.active);
                            Navigator.mainMenuName = _this.data("name");
                        }
                    }
                }
            });
        });
    },
    sub: function () {
        if (Navigator.mainMenuName) {
            $(".sub-menus").each(function () {
                var _this = $(this);
                if (
                    _this.data("parent-name") == Navigator.mainMenuName ||
                    _this.data("name") == Navigator.mainMenuName
                ) {
                    var skip = false;
                    if (_this.data("seg-" + Navigator.pathNameArray.length)) {
                        var tempSegs = _this
                            .ion (o) {
                            if (!Navigator.isNot.test(o)) {
                                isRemains = true;
                            }
                        });

                        if (isRemains) {
                            return true;
                        }
                    }

                    _.each(Navigator.pathNameArray, function (v, i) {
                        if (_this.data("seg-" + i)) {
                            var remainSegs = [];
                            var segs = _this.data("seg-" + i).split("|");
                            _.each(segs, function (seg) {
                                if (Navigator.isNot.test(seg)) {
                                    seg = seg.replace(/^:/, "");
                                    if (v == seg) {
                                        skip = true;
                                    }
                                } else {
                                    remainSegs.push(seg);
                                }
                            });

                            if (_.indexOf(remainSegs, v) < 0) {
                                skip = true;
                            }
                        }
                    });

                    if (!skip) {
                        _this
                            .addClass("current")
                            .show()
                            .siblings(".sub-menus")
                            .remove();
                        if (Navigator.subNavigation) {
                            _this.find("li").each(function () {
                                var _that = $(this);
                                if (
                                    _that.data("value") ==
                                    Navigator.subNavigation
                                ) {
                                    _that.addClass(Navigator.class.active);
                                }
                            });
                            return false;
                        } else {
                            if ($.inArray(_this.data('parent-name'), ['gallery','review','allday']) <= -1 && _this.data('name') != 'gallery') {
                                _this
                                    .find("li")
                                    .eq(0)
                                    .addClass(Navigator.class.active);
                            }
                        }
                    }
                }
            });
        } else {
            $(".sub-menus").remove();
        }
    },
    getCurrentSubMenu: function () {
        return $(".sub-menus.current").length > 0
            ? $(".sub-menus.current")
            : false;
    },
    getThirdMenu: function () {
        var second = Navigator.getCurrentSubMenu();
        var third = false;
        _.each(document.getElementsByClassName("third-menus"), function (o) {
            var _this = $(o);
            if (_this.data("parent-name") == second.data("parent-name")) {
                third = _this;
                return false;
            }
        });
        return third;
    },
    activeSubMenu: function (obj) {
        obj = Responsive.getObject(obj);
        obj.addClass(Navigator.class.active)
            .siblings()
            .removeClass(Navigator.class.active);
    },
    activeThirdMenu: function (obj) {
        obj = Responsive.getObject(obj);
        obj.find("input[type=radio]").prop("checked", true);
        obj.closest("li")
            .siblings("li")
            .find("input[type=radio]")
            .prop("checked", false);
    },
    init: function (params) {
        _.each(params, function (v, k) {
            Navigator[k] = v;
        });
        Navigator.main();
        Navigator.sub();
    },
};

/**
 * 우측 슬라이드 메뉴 제어 객체
 *
 * @type {{container: null, init: SlideMenu.init, hide: SlideMenu.hide, show: SlideMenu.show, modal: null}}
 *
 * @author theRok
 * @since 2020.06.24
 */
var SlideMenu = {
    container: null,
    modal: null,
    show: function () {
        SlideMenu.container.addClass("on");
        SlideMenu.modal
            .removeClass("white")
            .show()
            .one("click", function () {
                SlideMenu.hide();
            });

        preventScroll();

        // 회원 혜택 조회
        Benefit.getList('menu');
    },
    hide: function () {
        if (SlideMenu.container && isShown(SlideMenu.container)) {
            SlideMenu.container.removeClass("on");
            SlideMenu.modal.hide();
            if (SlideMenu.modal.hasClass("white")) {
                SlideMenu.modal.removeClass("white");
            }

            resumeScroll();
        }
    },
    active: function (pathName) {
        if (SlideMenu.container) {
            if (!pathName) pathName = location.pathname;
            SlideMenu.container.find("a").each(function () {
                var _this = $(this);
                var path = _this.data("href")
                    ? _this.data("href")
                    : _this.attr("href");
                var url = new URL(path, location.origin);
                if (url.pathname === pathName) {
                    _this
                        .parents(".slide-menus")
                        .find(".side-title")
                        .addClass("sm-on")
                        .end()
                        .siblings(".slide-menus")
                        .removeClass("sm-on");
                }
            });
        }
    },
    categorySelect: function (button) {
        var parent = Responsive.getObject(button).closest(".slide-menus");
        parent[0].scrollIntoView();
    },
    init: function (params) {
        if (params) {
            _.each(params, function (v, k) {
                SlideMenu[k] = v;
            });
        }

        $(function () {
            if (SlideMenu.container) {
                SlideMenu.active();
                SlideMenu.container.find("a").bind("click", SlideMenu.hide);
                SlideMenu.container
                    .find("button")
                    .bind("click", SlideMenu.hide);
            }
        });
    },
};

/**
 * 로그인, 로그아웃, 회원 가입 객체
 *
 * @type {{container: {method: {join: null, login: null}, menu: {method: null, sns: null}, layer: null}, joinPreProc:
 *     Login.joinPreProc, toggleValue: Login.toggleValue, select: Login.select, secondLayer: Login.secondLayer, saved:
 *     {pw: null, id: null}, isProc: boolean, snsLink: Login.snsLink, formReset: Login.formReset, episodeId: null,
 *     login: Login.login, autoLogin: number, joinProc: Login.joinProc, isRedirect: boolean, logout: Login.logout,
 *     smsConfirm: Login.smsConfirm, swaCheck: boolean, isInside: boolean, join: Login.join, loginProc:
 *     Login.loginProc, isDisabled: Login.isDisabled, authType: string, isSmsConfirmed: boolean, redirect: null,
 *     receive: number, init: Login.init, method: string, setSavedData: Login.setSavedData, nextLayer: null, findPw:
 *     Login.findPw, pId: null, recentSns: *, idSave: number, token: null, comicId: null, setAuthType:
 *     Login.setAuthType, pwSave: number, checkRequired: (function(): boolean), agreeToAll: Login.agreeToAll}}
 *
 * @author theRok
 * @since 2020.07.23
 */
var Login = {
    container: {
        layer: null,
        method: {
            login: null,
            join: null,
        },
        menu: {
            method: null,
            sns: null,
        },
    },
    method: "login",
    authType: "sms",
    recentSns: getCookie("snsBtn"),
    saved: {
        id: null,
        pw: null,
    },
    redirect: {
        login: null,
        join: null,
    },
    isRedirect: false,
    nextLayer: null,
    comicId: null,
    episodeId: null,
    idSave: 1,
    pwSave: 1,
    autoLogin: 1,
    joinAutoLogin: 0,
    receive: 1,
    token: null,
    isProc: false,
    isInside: false,
    isSmsConfirmed: false,
    swaCheck: false, // 쉘위애드
    pId: null,
    savedId: null,
    inProgress: false,
    login: function (params) {
        SlideMenu.hide();
        Layer.hideAll();

        if (!params) params = {};
        if (typeof params.redirect == "undefined")
            params.redirect = encodeURIComponent(location.href);
        if (Responsive.userDevice == 1) {
            params["no-token"] = "yes";
        }
        var string = "?" + $.param(params);
        Responsive.loadUrl("/alert/auth/login" + string);
    },
    logout: function () {
        SlideMenu.hide();
        if (typeof Storage !== void 0) {
            if (typeof localStorage.loginToken !== "undefined") {
                localStorage.loginTokenBackup = localStorage.loginToken;
            }
            localStorage.removeItem("loginToken");
            localStorage.removeItem('myRecentComic');
        }
        location.href = "/login/logout";
    },
    join: function (params) {
        SlideMenu.hide();
        Layer.hideAll();

        if (!params) params = {};
        if (typeof params.redirect == "undefined")
            params.redirect = encodeURIComponent(location.href);
        // if (typeof params['no-token'] == 'undefined') params['no-token'] = 'yes';
        var string = "?" + $.param(params);
        Responsive.loadUrl("/alert/auth/join" + string);
    },
    auth: function (params) {
        SlideMenu.hide();
        if (!params) params = {};
        if (typeof params.redirect == "undefined")
            params.redirect = encodeURIComponent(location.href);
        var string = "?" + $.param(params);
        Responsive.loadUrl("/alert/adult2" + string);
    },
    toggleValue: function (name) {
        if (typeof Login[name] != "undefined") {
            Login[name] = Login[name] >= 1 ? 0 : 1;
        }
    },
    select: function (obj) {
        obj = Responsive.getObject(obj);
        Login.method = obj.data("method");

        obj.closest("li").addClass("on").siblings("li").removeClass("on");
        _.each(Login.container.method, function (v, k) {
            if (k == Login.method) {
                v.show();
            } else {
                v.hide();
            }
        });

        Login.formReset();

        if (Login.method == "login") {
            Login.setSavedData();

            // 최근 사용 SNS 표시
            if (Login.recentSns) {
                Login.container.menu.sns
                    .find("a[data-value=" + Login.recentSns + "]")
                    .closest("li")
                    .addClass("on");
            }

            // 가입 창에서 이미 있는 아이디로 처리된 경우
            if (Login.savedId) {
                Login.container.method.login
                    .find("[name=userId]")
                    .val(Login.savedId);
            }
        } else {
            Login.setAuthType(Login.authType);
        }
    },
    agreeToAll: function (btn) {
        btn = Responsive.getObject(btn);
        var parent = btn.closest("ul");
        var isTrue = btn.is(":checked");
        parent.find("input[type=checkbox]").each(function () {
            var _this(btn) {
        btn = Responsive.getObject(btn);
        var parent = btn.closest("ul");
        var isTrue = true;
        parent.find("input[type=checkbox]:not(#all-agree)").each(function () {
            if (!$(this).is(":checked")) {
                isTrue = false;
            }
        });
        $(".join-check > li > #all-agree").prop("checked", isTrue).change();
    },
    snsLink: function (button) {
        button = Responsive.getObject(button);
        let nonSupportBrowserKey = ['gg','fb'];
        if ($.inArray(button.data("value"), nonSupportBrowserKey) > -1) {
            if (isGoogleOAuthSupportBrowser(button.data("value"))) {
                location.href = button.data("href");
            } else {
                let snsKrName = button.data("value") == 'gg' ? '구글 SNS' : '페이스북' ;
                alert(
                    snsKrName + " 로그인을 지원하지 않는 브라우저/앱입니다.\n다른 브라우저를 이용해주세요."
                );
            }
        } else {
            location.href = button.data("href");
        }
    },
    loginProcSuccessRedirect: function (response) {
        var redirect;
        if (
            response.hasOwnProperty("loginToken") &&
            typeof window.setLoginToken !== "undefined" &&
            response.loginToken
        ) {
            setLoginToken(response.loginToken);
        }

        if (getCookie("mailblock") == 1) {
            setCookie('mailblock', 2, 'today');
            location.href = "/?layer=/alert/adultAuthExpireBlock";
        } else if (getCookie("halfblock") == 1) {
            location.href = "/?layer=/alert/adultAuthExpireBlock/halfBlock";
        } else if (Login.redirect.login.indexOf('ecloudPa') > -1 || Login.redirect.login.indexOf('pcpinkey') > -1) {
            location.href = "/";
        } else if (Login.redirect.login) {
            redirect = Login.redirect.login;
        } else if (Login.comicId && Login.episodeId) {
            redirect =
                "/comic/ep_list/" +
                Login.comicId +
                "?1#" +
                Login.episodeId;
        } else if (Login.comicId) {
            redirect = "/comic/ep_list/" + Login.comicId;
        } else {
            redirect = "/";
        }

        let isLandingUrl = false;
        let url = new URL(redirect, location.origin);
        if (
            String(url.pathname) === "/" &&
            response.landingUrl != null
        ) {
            isLandingUrl= true;
            redirect    = response.landingUrl;
            url         = new URL(redirect, location.origin);
        }

        if (url.pathname === location.pathname) {
            if (Responsive.isMobile) {
                window.scrollTo(0, 0);
            }
            location.reload(true);
        } else {
            Link.viewer(redirect, isLandingUrl);
        }
    },
    fingerprint_redirect: function (redirect_type, response, redirect) {
        if (redirect_type == 'login') {
            Login.loginProcSuccessRedirect(response);
        } else if (redirect_type == 'join') {
            if (Login.isRedirect) {
                Link.viewer(Login.redirect.join);
            } else if (Login.nextLayer.length) {
                Responsive.loadUrl(Login.nextLayer);
            } else {
                Link.viewer(redirect);
            }
        } else if (redirect_type == 'snsjoin') {
            $('.isms{
        if (redirect_type == 'login' || ($.i_type, ['join', 'snsjoin']) > -1 && Responsive.isMobile < 1)) {
            // fingerprint
            const fpPromise = import('https://fpjscdn.net/v3/' + response.isFingerprint)
            .then(FingerprintJS => FingerprintJS.load({
                endpoint: "https://fpjsapi.toptoon.com"
            }));
            fpPromise
                .then(fp => fp.get())
                .then(result => {
                    const fpv = result.visitorId;
                    const fpr = result.requestId;
                    if (fpv != '' && fpr != '') {
                        $.ajax({
                            url     : '/etc/setFingerprintMemberAndMemberBlock',
                            data    : {fpv, fpr},
                            dataType: 'JSON',
                            type    : 'POST',
                            cache   : false,
                            async   : false,
                            success : function (result) {
                     fpr', fpr);
                                }
                                Login.fingerprint_redirect(redirect_type, response, redirect);
                            },
                            error :  response, redirect);
                            }
                        });
                    } else {
                        Login.fingerprint_redirect(redirect_type, response, redirect);
                    }
                })
                .catch(e => {
                    Login.fingerprint_redirect(redirect_type, response, redirect);
                });
        } else {
            Login.fingerprint_redirect(redirect_type, response, redirect);
        }
    },
    loginProc: function (btn) {
        btn = Responsive.getObject(btn);
        if (!globalAjaxIsStart) {
            // VALIDATION
            var container = Login.container.method.login;
            var userId = $.trim(container.find("[name=userId]").val());
            var userPw = $.trim(container.find("[name=userPw]").val());

            if (userId.length <= 0) {
                alert("이메일 또는 휴대폰 아이디를 입력해주세요.");
                container.find("[name=userId]").focus();
                return false;
            }

            if (userPw.length < 6) {
                alert("비밀번호를 확인해주세요.");
                container.find("[name=userPw]").focus();
                return false;
            }

            if (Login.inProgress === true) return false;
            Login.inProgress = true;

            // AJAX CALL
            $.ajax({
                url: "/login/login_proc",
                type: "POST",
                dataType: "JSON",
                data: {
                    user_id: userId,
                    user_pw: userPw,
                    id_save: Login.idSave,
                    auto_login: Login.autoLogin,
                    tokn: Login.token,
                },
                success: function (response) {
                    // LOGIN SUCCESS
                    if (response.result) {
                        if (response.isFingerprint !== false) {
                            Login.fingerprint('login', response);
                        } else {
                            Login.loginProcSuccessRedirect(response);
                        }
                    } else if (
                        response.hasOwnProperty("alert") &&
                        response.alert.length
                    ) {
                        alert(response.alert);
                        location.replace("/");
                    } else if (response.message === "secret_member") {
                        location.href = "/payment/payment/payment_charge";
                    } else if (response.message === "fixed_adult") {
                        Layer.hide("#alert_layer2");
                        Responsive.loadUrl("/alert/fixed_adult");
                    } else if (response.message === "sms_event") {
                        location.href = "/sms";
                    } else if (response.message.match(/^\[LX557\]/) !== null) {
                        location.href = response.redirect;
                    } else if (response.message.match(/^\[LX559\]/) !== null) {
                        location.href = response.redirect;
                    } else if (response.message.match(/^\[LXERR\]/) !== null) {
                        if (typeof response.message !== 'undefined') {
                            alert(response.message);
                        }
                        if (typeof response.redirect !== 'undefined') {
                            location.href = response.redirect;
                        }
                    } else if (response.result === "PW_FALSE") {
                        alert(response.message);
                        Layer.hide("#alert_layer");
                        Login.findPw();
                    } else if (response.message.match(/^\[LX553\]/) !== null) {
                        Responsive.loadUrl("/alert/loginIncorrect");
                    } else {
                        Login.container.method.login
                            .find(".failure-message")
                            .html("<p>" + response.message + "</p>");
                        container.find("[name=userPw]").val('');
                    }
                    setTimeout(function(){
                        Login.inProgress = false;
                    }, 2000);
                },
            });
        }
    },
    formReset: function () {
        // 실패 문구 초기화
        $(".failure-message").html("");

        Login.container.method[Login.method]
            .find(".confirm-button")
            .addClass("disabled");
        Login.container.layer.find("banner").show();

        Login.isSmsConfirmed = false;
        Login.container.layer
            .find(".sms-confirm-buttonsabled");
        Login.container.method.join
            .find("[name=userPhone]")
            .prop("readonly", false);
        Login.container.method.join
            .find("[name=smsAuthNumber]")
            .prop("readonly", false);
        $(".join-form-area.sms-confirm")
            .hide()
            .siblings(".join-form-area")
            .show();
    },
    secondLayer: function () {
        $("#alert_layer").off("hide");
    },
    setSavedData: function () {
        if (Login.saved.id) {
            Login.container.method.login
                .find("[name=userId]")
                .val(Login.saved.id);
            Login.container.method.login
                .find("[name=userId]")
                .css("background-image", "none");
            Login.container.method.login
                .find("[name=userPw]")
                .val(Login.saved.pw);
            Login.container.method.login
                .find("[name=userPw]")
                .css("background-image", "none");
        }
    },
    setAuthType: function (type) {
        if (!Login.isSmsConfirmed) {
            Login.authType = type;
            if (type === "sms") {
                Login.container.method.join
                    .find("li[data-auth-type=sms]")
                    .addClass("means-on");
                Login.container.method.join
                    .find("li[data-auth-type=email]")
                    .removeClass("means-on");
                Login.container.method.join
                    .find("input[name=userPhone]")
                    .show()
                    .addClass("required");
                Login.container.method.join
                    .find("input[name=userEmail]")
                    .hide()
                    .removeClass("required");
            } else if (type === "email") {
                Login.container.method.join
                    .find("li[data-auth-type=sms]")
                    .removeClass("means-on");
                Login.container.method.join
                    .find("li[data-auth-type=email]")
                    .addClass("means-on");
                Login.container.method.join
                    .find("input[name=userPhone]")
                    .hide()
                    .removeClass("required");
                Login.container.method.join
                    .find("input[name=userEmail]")
                    .show()
                    .addClass("required");
            }
            Login.checkRequired();
        }
    },
    joinPreProc: function (btn) {
        btn = Responsive.getObject(btn);
        if (!globalAjaxIsStart && !Login.isSmsConfirmed) {
            // VALIDATION
            var container = Login.container.method.join;
            var userPhone = $.trim(container.find("[name=userPhone]").val());
            var userEmail = $.trim(container.find("[name=userEmail]").val());
            var userPw = $.trim(container.find("[name=userPw]").val());

            if (userPhone.length <= 0 && userEmail.length <= 0) {
                alert("이메일 또는 휴대폰 번호를 입력해주세요.");
                if (Login.authType === "sms") {
                    container.find("[name=userPhone]").focus();
                } else {
                    container.find("[name=userEmail]").focus();
                }
                return false;
            }

            var passwordValidation = Login.passwordValidate(userPw);
            if (!passwordValidation.result) {
                alert(passwordValidation.message);
                container.find("[name=userPw]").focus();
                return false;
            }

            if (!Login.checkRequired()) {
                alert("필수항목을 모두 동의하셔야 가입이 가능합니다.");
                return false;
            }

            if (Login.authType === "sms") {
                if (userPhone.length < 10 || userPhone.length > 11) {
                    alert("휴대폰 번호를 확인해 주세요.");
                    container.find("[name=userPhone]").focus();
                    return false;
                }
            }

            if (Login.authType === "email") {
                var expText =
                    /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
                if (expText.test(userEmail) !== true) {
                    alert("이메일 형식에 맞게 입력해 주세요.");
                    container.find("[name=userEmail]").focus();
                    return false;
                }
            }

            // JOIN PROCESS
            if (Login.authType === "sms") {
                let phomeMiddle = userPhone.length === 10 ? 3 : 4 ;
                var phoneString =
                    userPhone.substr(0, 3) +
                    "-" +
                    userPhone.substr(3, phomeMiddle) +
                    "-" +
                    userPhone.substr(-4);

                if (
                    !confirm(phoneString + " 번호로 인증번호를 보내시겠습니까?")
                ) {
                    return false;
                }

                if (Login.isInside) {
                    if (
                        !confirm(
                            "입력하신 휴대폰번호로 sms문자가 발송됩니다. 발송하시겠습니까?"
                        )
                    ) {
                        return false;
                    }
                }

                btn.addClass("disabled");

                // SEND SMS
                $.ajax({
                    url: "/login/auth_mobile_proc",
                    type: "POST",
                    dataType: "JSON",
                    data: {
                        user_id: userPhone,
                        sms_type: "join",
                    },
                    success: function (response) {
                        if (response.result) {
                            if (response.code !== "0000") {
                                alert("SMS 전송을 실패하였습니다.");
                            } else {
                                alert(response.message);
                                $(".join-form-area.sms-confirm")
                                    .show()
                                    .siblings(".join-form-area")
                                    .hide();
                                $(".join-form-area.sms-confirm")
                                    .find("[name=smsAuthNumber]")
                                    .focus();
                            }
                        } else {
                            Login.formReset();
                            alert(response.message);
                        }
                    },
                });
            } else {
                // naver email
                // if (userEmail.match(/@naver.com$/)) {
                //     Login.container.menu.sns.find('a[data-value=nv]').trigger('click');
                // } else {
                //     Login.joinProc();
                // }

                Login.joinProc();
            }
        }
    },
    smsConfirm: function (btn) {
        btn = Responsive.getObject(btn);

        if (
            !btn.hasClass("disabled") &&
            !globalAjaxIsStart &&
            !Login.isSmsConfirmed
        ) {
            btn.addClass("disabled");

            var container = Login.container.method.join;
            var userPhone = $.trim(container.find("[name=userPhone]").val());
            var authCode = $.trim(container.find("[name=smsAuthNumber]").val());

            $.ajax({
                url: "/login/auth_mobile_pw",
                type: "POST",
                dataType: "JSON",
                data: {
                    user_id: userPhone,
                    auth_code_check: authCode,
                },
                success: function (response) {
                    if (response.result) {
                        if (response.message === "SUCCESS") {
                            alert("인증에 성공하였습니다.");
                            container
                                .find("[name=userPhone]")
                                .prop("readonly", true);
                            container
                                .find("[name=smsAuthNumber]")
                                .prop("readonly", true);
                            btn.text("인증완료");

                            Login.isSmsConfirmed = true;

                            Login.joinProc();
                        } else {
                            alert(response.message);
                            btn.removeClass("disabled");
                        }
                    } else {
                        alert(response.message);
                        btn.removeClass("disabled");
                    }
                },
            });
        }
    },
    joinProc: function () {
        var container = Login.container.method.join;
        var userPhone = $.trim(container.find("[name=userPhone]").val());
        var userEmail = $.trim(container.find("[name=userEmail]").val());
        var userPw = $.trim(container.find("[name=userPw]").val());

        if (Login.authType === "sms" && !Login.isSmsConfirmed) {
            return false;
        }

        var data = {
            user_id: Login.authType === "sms" ? userPhone : userEmail,
            user_pw: userPw,
            auth_type: Login.authType,
            join_auto_login: Login.joinAutoLogin,
            receive: Login.receive,
        };

        $.ajax({
            url:
                Login.authType === "sms"
                    ? "/login/join_auth_proc"
                    : "/login/join_proc",
            type: "POST",
            dataType: "JSON",
            data: data,
            success: function (response) {
                if (response.result) {
                    if (
                        response.hasOwnProperty("loginToken") &&
                        typeof window.setLoginToken !== "undefined" &&
                        response.loginToken
                    ) {
                        setLoginToken(response.loginToken);
                    }

                    if (Login.swaCheck) {
                        var swa = {
                            init: function () {
                                var s = document.createElement("img");
                                s.src =
                                    "http://xavis.shallweadcorp.com:10600/track/toptoon/postback?ad_idx=" +
                                    getCookie("swaTid");
                                document
                                    .getElementsByTagName("body")[0]
                                    .appendChild(s);
                            },
                        };
                        swa.init();
                    }

                    // JOIN PROCESS SUCCESS
                    var redirect;
                    if (response.message === "cultureland") {
                        setCookie("fixed_adult_guide", "1", "1");
                        alert(
                            "회원가입 되었습니다. 무료코인 이벤트 중복참여를 방지하기 위하여 본인인증은 필수이며, 본인인증 취소시 이벤트혜택에 참여할 수 없습니다."
                        );
                        redirect = "/?layer=/alert/adult2";
                    } else if (Login.redirect.join.length) {
                        if (
                            Login.redirect.join.match(
                                /\/coupon\/culturelandUse/
                            ) != null
                        ) {
                            redirect = "/coupon/culturelandUse";
                        } else if (
                            Login.redirect.join.match(/\/coupon/) != null
                        ) {
                            redirect = "/coupon";
                        } else {
                            redirect = Login.redirect.join;
                        }
                    } else if (Login.comicId.length) {
                        redirect = "/comic/ep_list/" + Login.comicId;
                    } else {
                        redirect = "/";
                    }

                    // fingerprint
                    if (response.isFingerprint !== false) {
                        Login.fingerprint('join', response, redirect);
                    }
                } else {
                    alert(response.message);

                    if (
                        typeof response.saveId != "undefined" &&
                        response.saveId
                    ) {
                        Login.savedId = data.user_id;
                    }
                    Login.formReset();
                }
            },
            error: function (err) {
                console.error(err);
                alert("가입 처리에 실패하였습니다.");
                Login.formReset();
            },
        });
    },
    findInfo: function (method) {
        Layer.hide("#alert_layer");
        location.href = "/login/findInfo/" + method;
    },
    checkRequired: function () {
        var validation = true;
        Login.container.method[Login.method]
            .find(".required")
            .each(function () {
                var _this = $(this);
                if (_this.attr("type") == "checkbox" && !_this.is(":checked")) {
                    validation = false;
                } else if ($.trim(_this.val()).length <= 0) {
                    validation = false;
                }
            });

        if (validation) {
            Login.container.method[Login.method]
                .find(".confirm-button")
                .removeClass("disabled");
        } else {
            Login.container.method[Login.method]
                .find(".confirm-button")
                .addClass("disabled");
        }

        return validation;
    },
    isDisabled: function () {
        // input 값 변화 시 진행 가능한지 여부 확인
        Login.container.layer.find("input").each(function () {
            var _this = $(this);
            if (
                _this.attr("type") == "text" ||
                _this.attr("type") == "password"
            ) {
                _this.bind("keyup", function () {
                    Login.checkRequired();
                });
            } else if (_this.attr("type") == "checkbox") {
                _this.bind("change", function () {
                    Login.checkRequired();
                });
            }
        });
    },
    passwordValidate: function (string) {
        var result = {
            result: true,
            message: null,
        };

        var regex;

        if (string.length < 8) {
            result.result = false;
           egExp(/[0-9]+/);
        if (!regex.test(string)) {
            result.result = false;
            result.message = "비밀번호는 하나 이상의 숫자를 포함하여야 합니다.";

            return result;
        }

        regex = new RegExp(/[a-zA-Z]+/);
        if (!regex.test(string)) {
            result.result = false;
            result.message =
                "비밀번호는 하나 이상의 영문자를 포함하여야 합니다.";

            return result;
        }

        return result;
    },
    init: function (params) {
        _.each(params, function (v, k) {
            Login[k] = v;
        });

        Login.select(
            Login.container.menu.method.find(
                "a[data-method=" + Login.method + "]"
            )
        );

        // 로그인창 닫을 경우 처리
        $("#alert_layer").on("hide", function (event) {
            if ($(event.target).hasClass("alert_layer")) {
                Login.secondLayer();
            }
        });

        Login.isDisabled();

        // 아이디 입력에서 엔터 키 누를때
        $('input[name="userId"], input[name="userPhone"]').keyup(function (e) {
            if (e.which == 13) {
                Login.container.method[Login.method]
                    .find('input[name="userPw"]')
                    .focus();
            }
        });

        // 이메일 아이디 입력시 별도 처리
        $('input[name="userEmail"]').on("keyup blur", function (e) {
            if (e.which > 0 && e.which !== 13) {
                return false;
            }
            var email = $.trim($(this).val());
            // if (email.match(/@naver.com$/)) {
            //     Login.container.menu.sns.find('a[data-value=nv]').trigger('click');
            // }
        });

        // 비밀번호 입력에서 엔터 키 누를때
        $('input[name="userPw"]').keyup(function (e) {
            if (e.which == 13) {
                $(e.target).blur();
                Login.container.method[Login.method]
                    .find(".confirm-button")
                    .trigger("click");
            }
        });

        // 프로모션 수신동의
        $("#promotion-receive").change(function () {
            if ($(this).prop("checked")) {
                setCookie("J_A_R", 1, 1);
            } else {
                setCookie("J_A_R", 0, 1);
            }
        });

        // 입력창에서 키보드 팝업 시 입력창 노출 처리
        var layer = Login.container.layer.closest(".alert_layer");
        $(window).resize(function () {
            var input = Login.container.layer.find("input:focus");
            if (currentLayout == "mobile" && input.length) {
                layer.scrollTop(layer[0].scrollHeight);
            }
        });
    },
};

/**
 * 충전소 연결 객체
 * 충전소 이동, 미니결제창 띄우기
 *
 * @type {{init: PaymentLink.init, autopay: PaymentLink.autopay, autopayProc: PaymentLink.autopayProc, go:
 *     PaymentLink.go, settle: PaymentLink.settle, short: Paystring}}}
 *
 * @author theRok
 * @since 2020.06.24
 */
var PaymentLink = {
    isAutoPayProcStart : false,
    url: {
        page: "/payment/payment_charge",
        alert: "/alert/shortage_coin",
        autopay: "/payment/payment_charge/autopay",
    },
    go: function (params) {
        var string = params ? "?" + $.param(params) : "";
        top.location.href = this.url.page + string;
        // if (typeof user_idx === 'number') {
        //     var string = params ? "?" + $.param(params) : "";
        //     top.location.href = this.url.page + string;
        // }
        // else {
        //     Login.login({'no-token':'yes'});
        // }
    },
    short: function (params) {
        var string = params ? "?" + $.param(params) : "";
        actionWatcher.setAction({
            action: "shortageCoin",
            location: location.href,
        });
        Responsive.loadUrl(PaymentLink.url.alert + string);
    },
    autopay: function (params) {
        var string = params ? "?" + $.param(params) : "";
        Responsive.loadUrl(PaymentLink.url.autopay + string);
    },
    settle: function () {
        location.href = "/payment/freeCharge";
    },
    autopayProc: function (userCoin, changeStatus='') {
        userCoin = parseInt(userCoin);
        var msg =
            userCoin <= 0
                ? "더블혜택 코인PASS를 진행하시겠습니까?"
                : "회원님은 현재 " +
                  userCoin +
                  "코인을 보유중입니다. \r\n더블혜택 코인PASS를 진행하시겠습니까?";
        if (!PaymentLink.isAutoPayProcStart && confirm(msg)) {
            PaymentLi,
                type: "GET",
                dataType: "JSON",
    a : {
                    changeStatus : changeStatus
                },
                cache: false,
                success: function (response) {
                    if (response.result) {
                        alert("결제 되었습니다.");
                        if (typeof Payment != 'undefined' && Payment.isShortage) {
                            location.reload(true);
                        } else {
                            location.href="/weekly";
                        }
                    } else {
                        var msg =
                            "등록한 결제수단으로 더블혜택 코인PASS 결제가 실패되었습니다.\r\n자세한 내용은 고객센터로 문의해주시기 바랍니다.";
                        if (typeof response.err_message != "undefined") {
                            msg += "\r\n결제실패 : " + response.err_message;
                        }
                        if (response.message) {
                            alert(msg);
                        }
                        location.reload(true);
                    }
                },
                complete : function(data){
                    setTimeout(() => {
                        PaymentLink.isAutoPayProcStart = false;
                    }, 2000);
                }
            });
        }
    },
    init: function () {},
};

/**
 * 성별 선택 객체 - 슬라이드 메뉴에 들어가 있어 전역으로 사용해야 하므로 생성함
 *
 * @type {{init: Gender.init, current: null, update: Gender.update, setCurrent: Gender.setCurrent, inputName: string}}
 *
 * @author theRok
 * @since 2020.06.25
 */
var Gender = {
    current: null,
    inputName: "gender",
    update: function (v) {
        let _name = 'gender';
        let curGenderCount = getClickCount(_name);

        if(limitClickCount(_name, curGenderCount)) {
            if (v) {
                $.ajax({
                    url: "/my/updateGender",
                    data: {
                        gender: v,
                    },
                    type: "GET",
                    cache: true,
                    success: function (response) {
                        if (response == 1) {
                            show_toast("성별 변경이 완료되었습니다.");
                            Gender.current = v;
                            Gender.setCurrent();
                            setClickCount(_name);
                        }
                    },
                });
            } else {
                alert("회원님의 성별을 선택해주세요.");
            }
        }
    },
    setCurrent: function () {
        $("input[name=" + Gender.inputName + "]").each(function () {
            var _this = $(thisumber(Gender.current)) {
                _this.prop("checked", true).addClass("sfalse).removeClass("seton");
            }
        });
    },
    init: function (params) {
        if (params) {
            _.each(params, function (v, k) {
                Gender[k] = v;
            });
        }

        $(function () {
            Gender.setCurrent();
        });
    },
};

/**
 * 데이터 절약 모드 객체
 *
 * @type {{init: DataSaving.init, current: null, update: DataSaving.update, setCurrent: DataSaving.setCurrent,
 *     inputName: string, cookieName: string}}
 *
 * @author theRok
 * @since 2020.06.25
 */
var DataSaving = {
    wrapper: null,
    current: null,
    inputName: "dataSaving",
    cookieName: "mode_saving",
    update: function (v) {
        setCookie(DataSaving.cookieName, v, 365);
        DataSaving.current = v;
        DataSaving.setCurrent();
    },
    setCurrent: function () {
        $("input[name=" + DataSaving.inputName + "]").each(function () {
            var _this = $(this),
                _value = _this.val();

            if (String(_value) == String(DataSaving.current)) {
                _this.prop("checked", true);
            } else {
                _this.prop("checked", false);
            }
        });
    },
    toggleView: function () {
        if (!Responsive.isMobile) {
            DataSaving.wrapper.hide();
        } else {
            DataSaving.wrapper.show();
        }
    },
    init: function (params) {
        if (params) {
            _.each(params, function (v, k) {
            $(function () {
            DataSaving.wrapper = $(".menu-data").closest("li");
            DataSaving.setCurrent();
            DataSaving.toggleView();
        });
    },
};

/**
 * 유저 레벨 객체
 *
 * @type {{showInfo: UserLevel.showInfo}}
 *
 * @author theRok
 * @since 2020.06.29
 */
var UserLevel = {
    showInfo: function () {
        $.ajax({
            url: "/alert/levelDetail",
            type: "GET",
            cache: true,
            success: function (response) {
                $("#alert_layer2").html(response);

                if (isShown("#alert_layer")) {
                    Responsive.layerOnLayer("#alert_layer", "#alert_layer2");
                } else {
                    Layer.show("#alert_layer2");
                }
            },
        });
    },
};

/**
 * 레이어 제어 객체
 *
 * @type {{container: null, init: Layer.init, isUniq: boolean, setClass: Layer.setClass, show: Layer.show, resetClass:
 *     Layer.resetClass, setPosition: Layer.setPosition, isShowing: boolean, isHiding: boolean, hide: (function(*=,
 *     *=): (boolean|undefined)), isWhite: boolean, hideAll: Layer.hideAll, Modal: {hide: Layer.Modal.hide, obj: null,
 *     show: Layer.Modal.show}, class: null, addClass: Layer.addClass}}
 *
 * @author theRok
 * @since 2020.11.11
 */
var Layer = {
    container: null,
    class: null,
    isWhite: false,
    isUniq: false,
    isShowing: false,
    isHiding: false,
    isShowBottom: false,
    setClass: function (classes) {
        Layer.class = classes;
    },
    addClass: function () {
        Layer.container.addClass(Layer.class).data("temp-class", Layer.class);
        Layer.class = null;
    },
    resetClass: function (layer) {
        if (layer.data("temp-class")) {
            layer.removeClass(layer.data("temp-class"));
            layer.data("temp-class", null);
        }
    },
    show: function (layer, modal) {
        layer = Responsive.getObject(layer);
        if (
            Layer.isUniq === false &&
            Layer.isShowing === false &&
            Layer.isHiding === false
        ) {
            Layer.isShowing = true;

            SlideMenu.hide();
            layer.show().fadeTo(0, 0);
            $(document).trigger("showAlert");

            Layer.init(layer);

            // 성인 인증시 배경이 흰색으로 수정되어 고정되는 오류 수정 - theRok - 2017-04-27
            if ($(".adult").length <= 0 && Layer.Modal.obj.hasClass("white"))
                Layer.Modal.obj.removeClass("white");

            // 성인 인증 알럿 노출 시 배경 처리 - theRok - 2019.03.06
            if (layer.find(".adulter");
            }

            layer.imagesLoaded().always(function () {
                Layer.setPosition(layer);
                Layer.Modal.show(layer);
                Layer.isShowing = false;
            });
        }
    },
    hide: function (layer, obj) {
        if ($(layer).prop('id') == 'alert_layer_visible') return false;
        Layer.isHiding = true;

        layer = Responsive.getObject(layer);

        // 부모 div 에서 alert_layer 클래스를 찾음
        if (obj) {
            obj = Responsive.getObject(obj);
            if (obj.parents(".alert_layer").length > 0) {
                layer = obj.parents(".alert_layer");
            }
        }

        layer.removeClass("gray");
        layer.find(".alert_wrap").removeClass("border");

        Layer.isUniq = false;

        SlideMenu.hide();
        Layer.Modal.hide();

        if (layer.hasClass('close-reload') === true) {
            layer.remove();
            location.reload();
            return false;
        }

        if (isShown(layer) === false) {
            Layer.isHiding = false;
            return false;
        }

        Layer.resetClass(layer);
        layer.hide().off("hide").trigger("HideAlert");

        //방향 가이드 출력
        if ($(".comic_allow").length) {
            $(".comic_allow").show().fadeOut(700);
        }
        resumeScroll();
        Layer.isHiding = false;
    },
    hideAll: function () {
        _.each(
            document.getElementsByClassName("alert_layer"),
            function (layer) {
                if (isShown(layer)) {
                    Layer.hide(layer);
                }
            }
        );
    },
    setPosition: functi bottomLayerName = ['buyCoin-wrap', 'freepass-wrap', 'buycoinViewer-wrap'];

        layer = Responsive.getObject(layer);

        // @author jongseok.seo 모바일에서 특정 Class를 가진 레이어를 하단으로 배치
        if (Responsive.isMobile && Layer.isShowBottom == false) {
            bottomLaName, $(layer).prop('classList')) > -1) {
                    Layer.isShowBottom = true;
                    return false;
                }
            })
        }

        setTimeout(function () {
            preventScroll();

            width = layer.outerWidth();
            height = layer.outerHeight();

            if (Responsive.isMobile && Layer.isShowBottom) {
                layer.css({
                    left: Responsive.window.width / 2 - width / 2,
                    top: Responsive.window.height - height - 100, // bottom에서 100px 띄움
                });
                Layer.isShowBottom = false;
            }
            else {
                layer.css({
                    left: Responsive.window.width / 2 - width / 2,
                    top: Responsive.window.height / 2 - height / 2,
                });
            }

            layer.stop(true, true).fadeTo("fast", 1, "easeOutCubic");
        }, 500);
    },
    Modal: {
        obj: null,
        show: function (layer) {
            Layer.Modal.obj.show();

            layer = Responsive.getObject(layer);
            if (Layer.Modal.obj.hasClass("except") === false) {
                Layer.Modal.obj.unbind("click").bind("click", function () {
                    Layer.hide(layer);
                });

                //포인트파크 알림 레이어창 쿠키 설정용 (160714) - 레이어 미사용시 삭제 요망
                setCookie("pointpark_step", "0", 1);
                setCookie("pointpark_alert_flag", "0", 1);
            }
        },
        hide: function () {
            Layer.Modal.obj.hide().unbind("click");
        },
    },
    init: function (layer) {
        Layer.container = layer;
        Layer.addClass();
    },
};

var Episode = {
    isBuying: false,
    isViewing: false,
    buy: function (comicId, episodeId, redirect) {
        if (!redirect) {
            redirect = "/comic/ep_view/" + comicId + "/" + episodeId;
        }

        Layer.hideAll();

        if (Episode.isBuying === false) {
            Episode.isBuying = true;

            $.ajax({
                url: "/comic/buyEpisode/" + comicId + "/" + episodeId,
                type: "GET",
                dataType: "JSON",
                success: function (response) {
                    if (response.result) {
                        Link.viewer(redirect);
                    } else {
                        Episode.isBuying = false;

                        if (response.result === false) {
                            alert(response.message);
                        }

                        if (response.code === "needCoin") {
                            var url =
                                "/alert/shortage_coin/" +
                                comicId +
                                "/?redirect=" +
                                window.location.href;
                            $("#alert_layer").load(url, function () {
                                Layer.show("#alert_layer");
                            });
                        }
                    }
                },
            });
        }
    },
    view: function (obj) {
        obj = Responsive.getObject(obj);

        if (Episode.isViewing !== false) {
            return false;
        }

        Episode.isViewing = true;

        var comic_id = obj.data("comic-id");
        var episode_id = obj.data("episode-id");
        var silver_limit = obj.data("limit-sliver");
        var user_silver_limit = obj.data("user-sliver");
        var ep_content_type = obj.data("content-type");
        var act = obj.data("act");
        var voucher = $('.icon_nextbtn_gift').length > 0 ? $('.icon_nextbtn_gift').length : obj.find('.badge_ep.voucher').length;
        var seg_1 =
            obj.data("seg1") != "" && typeof obj.data("seg1") != "undefined"
                ? obj.data("seg1")
                : "comic";
        var binge =
            obj.data("binge") != "" && typeof obj.data("binge") != "undefined"
                ? true
                : false;
        var sign_on = obj.data("sign-on");
        let _name = 'next';
        let curGenderCount = getClickCount(_name);

        if (typeof user_idx != 'number' && sign_on == '1') {
            Episode.isViewing = false;
            Login.login();
            return false;
        }

        actionWatcher.setAction({
            action: "episodeView",
            comicId: comic_id,
            episodeId: episode_id,
        });

        //무제한쿠폰 사용자 제한
        if (ep_content_type == 4 || ep_content_type == 5) {
            if (silver_limit == 1 && user_silver_limit == 1) {
                Responsive.loadUrl("/alert/silver_limit_check");
                Episode.isViewing = false;
                return false;
            }
        }

        // 이어보기 일때는 스크롤이 맨아래로
        if (obj.attr("id") == "view_ep_continue")
            episode_id = episode_id + "/?continue=1";

        // 비회원 무료만화 카운트
        var freeComicCount = getFreeComicCount(comic_id);
        var json_parm = { freeComicCount: freeComicCount, voucher: voucher };
        var json_url = "/comic/location_check/" + comic_id + "/" + episode_id + "/" + act;
        if(limitClickCount(_name, curGenderCount)) {
            setClickCount(_name);
        $.ajax({
            type: "POST",
            url: json_url,
            data: json_parm,
            dataType: "JSON",
            async: true,
            cache: false,
            success: function (data) {
                Episode.isViewing = false;

                // confirm_url 형식 추가 : 컨펌창을 먼저 띄우고 이후에 url 호출 처리 - theRok - 2018-01-11
                if (
                    typeof data.confirm_url != "undefined" &&
                    data.confirm_url.length > 0
                ) {
                    if (confirm(data.confirm_msg)) {
                        Responsive.loadUrl(data.confirm_url);
                    } else {
                        top.location.href = data.cancel_url;
                    }
                } else if (data.result) {
                    // 비회원 무료만화 카운트
                    if (
                        typeof data.type != "undefined" &&
                        data.type == "freeComicCountView"
                    ) {
                        setFreeComicCount(comic_id);
                    }

                    view_flag = true;
                    var linkUrl = "";
                    linkUrl = "/" + (seg_1 == 'partnerviewer' ? 'comic' : seg_1) + "/ep_view/" + comic_id + "/" + episode_id + (act ? '/' + act : '');

                    if (binge) {
                        show_toast("다음회차로 이동합니다.");
                        // setTimeout(function () {
                        //     Link.viewer(linkUrl);
                        // }, 1000);
                    } else {
                        // Link.viewer(linkUrl);
                    }

                    let locationUrl = location.pathname;
                    let str_url = locationUrl.split('/');
                    let cur_episode_id = Number(str_url[4]);
                    if(
                        str_url[2] !== 'ep_list' &&                     // 리스트 아니고
                        act &&
                        data.type !== 'rent' &&                         // 소장이 아니고
                        cur_episode_id < episode_id &&                  // 다음화이고
                        !data.epilogue                                  // 에필로그가 아닐때
                    ) {
                        let alertLayerUrl = '/alert/comicFreeViewLayer';
                        // 찍먹 무료
                        if (data.type == 'dippingFreeComic') {
                            alertLayerUrl = '/alert/dippingFreeLayer';
                        }
                        // 플러스원
                        else if (data.type == 'plusone') {
                            alertLayerUrl = '/alert/plusoneLayer';
                        }

                        Responsive.loadUrl(alertLayerUrl, {
                            episode_id : episode_id,
                            comic_id : comic_id,
                            act : act,
                            timeDiff : _.has(data, 'timeDiff') ? data.timeDiff : ''
                        });
                    } else {
                        Link.viewer(linkUrl);
                    }
                }
                // 비회원 무료만화 카운트
                else if (
                    typeof data.type != "undefined" &&
                    data.type == "freeComicCountJoin"
                ) {
                    //alert layer
                    Responsive.loadUrl(data.alert_url);
                }
                // p_id 유입처리 추가 - theRok - 2017-12-29
                else if (
                    typeof data.type != "undefined" &&
                    data.type == "p_id_join"
                ) {
                    $("#alert_layer").load(data.alert_url, function () {
                        Layer.show("#alert_layer");
                        preventScroll();
                        if (
                            typeof data.join_msg != "undefined" &&
                            data.join_msg.length > 0
                        )
                            alert(data.join_msg);
                        $(document).on("hide", function (event) {
                            if ($(event.target).prop("id") == "alert_layer") {
                                if (confirm("무료작품을 더 보시겠습니까?")) {
                                    location.href = "/ranking";
                                }
                                $(document).unbind("hide");
                            }
                        });
                    });
                }
                // redirect 형식 추가 - theRok - 2018-01-16
                else if (data.redirect_url) {
                    if (typeof data.alert_msg != "undefined") {
                        alert(data.alert_msg);
                    }
                    Link.viewer(data.redirect_url);
                // 소장, 대여 확인
                } else if (data.alert_url) {
                    if (typeof data.alert_msg != "undefined") {
                        alert(data.alert_msg);
                    }

                    if (user_idx <= 0 && Responsive.isMobile && binge) {
                        Viewer.stopAutoScroll();
                        Viewer.scrollToEnd();
                    }

                    if (typeof data.alert_url == "object") {
                        $("#alert_layer").load(
                            data.alert_url[0],
                            {
                                binge: binge,
                                alert_url: decodeURIComponent(
                                    data.alert_url[1]
                                ),
                            },
                            function () {
                                Layer.show("#alert_layer");
                                $("#alert_layer")
                                    .find("#btnAlertLayer")
                                    .bind("click", function () {
                                        $("#alert_layer").load(
                                            data.alert_url[1],
                                            { binge: binge },
                                            function () {
                                                Layer.show("#alert_layer");
                                            }
                                        );
                                    });
                            }
                        );
                    } else {
                        //alert layer
                        if (data.alert_url.match(/shortage_coin/)) {
                            PaymentLink.short({ binge: binge });
                        }
                        /*else if (data.alert_url.match(/info_coin_buy_all/) && $.inArray(data.view_mode, ['waitfree']) < 0) {
                            const urlParsor = data.alert_url.split('/');
                            const urlLastVr = urlParsor.pop();
                            if ($.inArray(urlLastVr, ['rent','rent_all']) < 0) {
                                Episode.buy(urlParsor[3], urlLastVr, '/comic/ep_view/' + urlParsor[3] + '/' + urlLastVr);
                            }
                        }*/
                        else {
                            Responsive.loadUrl(data.alert_url, {
                                binge: binge,
                                voucher: voucher,
                            });
                        }
                    }
                } else if (data.alert_url2) {
                    //하단에서 상단으로 팝업되는 레이어때문에 분리
                    //alert layer
                    $("#alert_layer2").load(data.alert_url2, function () {
                        Layer.show("#alert_layer2");
                        $("#alert_layer2").css(
                            "top",
                            $(window).scrollTop() + $(window).height() + "px"
                        );
                        //				var sum_y = $(window).scrollTop()+115;
                        //				$('#alert_layer2').animate({"top" : sum_y}, 500, 'swing');
                    });
                }
                // only_alert_url 형식 추가 : alert만 띄우고 더이상 진행하지 않음 - theRok - 2018-01-29
                else if (typeof data.only_alert_url != "undefined") {
                    if (typeof data.alert_msg != "undefined") {
                        alert(data.alert_msg);
                    }
                    //alert layer
                    $("#alert_layer").load(data.only_alert_url, function () {
                        Layer.show("#alert_layer");
                    });
                    return false;
                } else {
                    //실패
                    alert(data.message);
                }
            },
        });
    }
    },
};

var Link = {
    viewer: function (url, isLandingUrl = false) {
        var targetUrl = new URL(url, location.origin);
        if (!isLandingUrl && url.indexOf("#") > -1) {
            url = url.substring(0, url.indexOf('#'));
        }
        if (
            Responsive.SEG_2 === "ep_view" &&
            targetUrl.pathname.match(/\/ep_view\//)
        ) {
            location.replace(url);
        } else {
            location.href = url;
        }
    },
};

// 내가 보던 내역
let Saw = {
    container: $('.sawlist-container'),
    wrapper  : $('.sawlist-container').find('.swiper-wrapper'),
    swiper   : null,
    setList : function () {
        const adultType     = Responsive.adultType === 'adult' ? 'a' : 'n';
        let myRecentData    = localStorage.getItem('myRecentComic') !== null ? JSON.parse(localStorage.getItem('myRecentComic')) : [];
        myRecentData        = myRecentData[aduyRecentData.forEach((v, k) => {
  k].ranking = k+1;

                // 조건 예외처리
                if(
                    typeof v.remainEpisodesInfo === 'undefined' ||
                    Number(v.newEpisode) === 0 ||
                    Number(v.newEpisode) < 0 ||
                    (v.remainEpisodesInfo && isNaN(v.remainEpisodesInfo.episodeName) === true)
                ) {
                    delete myRecentData[k];
                }
            });

            // 비어있는 배열 처리
            myRecentData = myRecentData.filter(el => el).slice(0, 10);
        }

        Handlebars.registerHelper('ifCond', function (v1,v2,options) {
            if (v1 > v2){
                return options.fn(this);
            }
            return options.inverse(this);
        });

        $('#sawlistContents').append(Template.sawList({
            list : myRecentData
        }));
    },
    setSwiper : function () {
        if ($('.sawlist-container').find('.swiper-wrapper').length > 0) {
            Saw.swiper = new Swiper($('.sawlist-container').find('.swiper-container'), {
                autoHeight    : true,
                spaceBetween  : 25,
                slidesPerView : 5,
                slidesPerGroup: 5,
                lazy         : {
                    loadPrevNext: true
                },
                b {
                        slidesPerView : 3.3,
                        spaceBetween  : 10,
                        slidesPerGroup: 1
                    },
                    768 : {
                        slidesPerView : 5,
                        spaceBetween  : 25,
                        slidesPerGroup: 5
                    },
                    1024: {
                        slidesPerView : 5,
                        spaceBetween  : 25,
                        slidesPerGroup: 5
                    }
                }
            });

            $('.sawlist-container').imagesLoaded()
                .done(function () {
                    Saw.swiper.update();
                });
        }
    },
    init     : function () {
        Saw.setList();
        Saw.setSwiper();
    },
    set: function (type) {
        $.ajax({
            url: "/main/getMyRecentComicData",
            cache: true,
            type    : 'GET',
            dataType: 'JSON',
            success: function (res) {
                if(res.data.length > 0) {
                    let lsRecentData = Saw.getData(res.data);
                    localStorage.setItem('myRecentComic', JSON.stringify(lsRecentData));

                    if(type=== 'sync') {
                        let adultStatus = Responsive.adultType === 'non_adult' ? 'n' : 'a';

                        $('#sawlistContents').html("");
                        $('#sawlistContents').append(Template.sawList({
                            list : lsRecentData[adultStatus]
                        }));

                        setCookie('syncBtn', true, 1);

                        Saw.setSwiper();

                        $('.btn_syn').remove();

                        show_toast('동기화가 완료되었습니다.');
                    }
                } else {
                    localStorage.removeItem('myRecentComic');
                }
            },
        });
    },
    getData: function (res) {
        let lsRecentData = {};

        lsRecentData['a'] = _.filter(res, function (o) { return o.meta.adult == 1 });
        lsRecentData['n'] = _.filter(res, function (o) { return o.meta.adult == 0 });

        lsRecentData['a'].forEach((element, key) => {
            element.newEpisode = element.meta.episodeTotalCount - element.remainEpisodesInfo.episodeName;
            if(
                typeof element.remainEpisodesInfo === 'undefined' ||
                Number(element.newEpisode) == 0 ||
                Number(element.newEpisode) < 0 ||
                (element.remainEpisodesInfo && isNaN(element.remainEpisodesInfo.episodeName) === true)
            )
            {
                delete lsRecentData['a'][key];
            }
        });

        lsRecentData['n'].forEach((element, key) => {
            element.newEpisode = element.meta.episodeTotalCount - element.remainEpisodesInfo.episodeName;
            if(
                typeof element.remainEpisodesInfo === 'undefined' ||
                Number(element.newEpisode) == 0 ||
                Number(element.newEpisode) < 0 ||
                (element.remainEpisodesInfo && isNaN(element.remainEpisodesInfo.episodeName) === true)
            )
            {
                delete lsRecentData['n'][key];
            }
        });

        lsRecentData['a'] = lsRecentData['a'].filter(el => el).slice(0,10);
        lsRecentData['n'] = lsRecentData['n'].filter(el => el).slice(0,10);

        return lsRecentData;
    }
};

//jquery 배열 검색
function get_json_array(obj, key, val) {
    var objects = [];
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == "object") {
            objects = objects.concat(get_json_array(obj[i], key, val));
        } else if (
            i == key &&
            obj[key].toUpperCase().indexOf(val.toUpperCase()) >= 0
        ) {
            objects.push(obj);
        }
    }
    return objects;
}

function getCookie(cookieName) {
    var cookieValue = null;
    if (document.cookie) {
        var array = document.cookie.split(escape(cookieName) + "=");
        if (array.length >= 2) {
            var arraySub = array[1].split(";");
            cookieValue = unescape(arraySub[0]);
        }
    }
    return cookieValue;
}

function setCookie(name, value, expiredays) {
    if (!name) return false;

    let todayDate = new Date();
    let regex = /[^\d]/g;
    if (expiredays == "today") {
  ;
        todayDate.setMinutes(59);
        todayDate.setSeconds(59);
    } else if (expiredays == "hour") {
        let expirehours = 1;
        todayDate.setDate(todayDate.getDate());
        todayDate.setHours(todayDate.getHours() + expirehours);
        todayDate.setMinutes(todayDate.getMinutes());
        todayDate.setSeconds(todayDate.getSeconds());
    } else if (expiredays == "3hour") {
        ys == "8hour") {
        let expirehours = 8;
        todayDate.setDate(todayDate.getDate());
        todayDate.setHours(todayDate.getHours() + expirehours);
        todayDate.setMinutes(todayDate.getMinutes());
        todayDate.setSeconds(todayDate.getSeconds());
    } else if (
        typeof expiredays === "string" &&
        expiredays.indexOf("minute") > -1
    ) {
        let minute = parseInt(expiredays.replace("minute", ""));
        todayDate.setDate(todayDate.getDate());
        todayDate.setHours(todayDate.getHours());
        todayDate.setMinutes(todayDate.getMinutes() + minute);
        todayDate.setSeconds(todayDate.getSeconds());
    } else if (
        typeof expiredays === "string" &&
        expiredays.indexOf("seconds") > -1
    ) {
        todayDate.setTime(todayDate.getTime()+(Number(expiredays.replace(regex, ""))*1000));
    } else {
        todayDate.setDate(todayDate.getDate() + expiredays);
    }
    document.cookie =
        name +
        "=" +
        escape(value) +
        "; domain=.toptoon.com; path=/; expires=" +
        todayDate.toGMTString() +
        ";";
}

function delete_cookie(name) {
    document.cookie =
        name +
        "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=.toptoon.com;path=/;";
}

//연재 예정 만화 얼럿
function comic_alert_view(obj) {
    var comic_idx = $(obj).attr("data-comic-idx");
    var list_division = $(obj).attr("data-division");
    $("#alert_layer").load(
        "/alert/comic_alert/" + comic_idx + "/" + list_division,
        function () {
            Layer.show("#alert_layer");
            $("#alert_layer").css("top", $("body").scrollTop() + 115 + "px");
        }
    );
}

function strip_tags(input, allowed) {
    allowed = (
        ((allowed || "") + "").toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []
    ).join(""); // making sure the allowed arg is a string containing only tags in lowercase (<a><b><c>)
    var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,
        commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
    return input
        .replace(commentsAndPhpTags, "")
        .replace(tags, function ($0, $1) {
            return allowed.indexOf("<" + $1.toLowerCase() + ">") > -1 ? $0 : "";
        });
}

// 숫자 타입에서 쓸 수 있도록 format() 함수 추가 - theRok - 2016-12-13
Number.prototype.format = function () {
    if (this == 0) return 0;

    var reg = /(^[+-]?\d+)(\d{3})/;
    var n = this + "";

    while (reg.test(n)) n = n.replace(reg, "$1" + "," + "$2");

    return n;
};

// 문자열 타입에서 쓸 수 있도록 format() 함수 추가 - theRok - 2016-12-13
String.prototype.format = function () {
    var num = parseFloat(this);
    if (isNaN(num)) return "0";

    return num.format();
};

//GET URL 반환 - theRok - 2017-02-22
function get_geturl(k, v, tmp_url) {
    var url = tmp_url
        ? new URL(tmp_url, location.origin)
        : new URL(location.href, location.origin);
    if (k && v) {
        url.searchParams.set(k, v);
    }
    return url.search + url.hash;
}

// hash 값 반환 - theRok - 2017-02-27
function get_hash() {
    var url = new URL(location.href, location.origin);
    return url.hash.replace("#", "");
}

/**
 * @Date : 2017-03-14
 * @작성자 : theRok
 * @프로그램 설명 : 토스트 메시지
 */
var toast_timer;
var show_toast = function (msg, autofade, callback) {
    if ($("#toast").length <= 0) {
        $("body").append($("<div>", { id: "toast" }));
    }
    $('#toast').css('word-break', 'break-all');
    $("#toast").html(msg).show();
    clearTimeout(toast_timer);
    if (autofade != false) {
        toast_timer = setTimeout(function () {
            $("#toast").fadeOut("fast", function () {
                if (typeof callback == "function") callback();
            });
        }, 1500);
    }
};

var toast_timer_layer;
var show_toast_layer = function (msg, autofade, callback) {
    $("#layer_toast").text(msg).show();
    clearTimeout(toast_timer_layer);
    if (autofade != false) {
        toast_timer_layer = setTimeout(function () {
            $("#layer_toast").fadeOut("fast", function () {
                if (typeof callback == "function") callback();
            });
        }, 1500);
    }
};

/**
 * webview APP 전송용
 */
var sendDeviceMessage = function (type, ivalue, keyName, urlString) {
    var contact = new Object();
    contact.type = type;
    contact.ivalue = ivalue;
    contact.keyName = keyName;
    contact.urlString = urlString;

    var filter = [];
    filter[0] = "type";
    filter[1] = "ivalue";
    filter[2] = "keyName";
    filter[3] = "urlString";

    var iframe = document.createElement("iframe");
    iframe.setAttribute(
        "src",
        "wvcall:" + JSON.stringify(contact, filter, "\t")
    );

    document.documentElement.appendChild(iframe);
    iframe.parentNode.removeChild(iframe);
    iframe = null;
};

/**
 * @Date : 2017-09-15
 * @작성자 : theRok
 * @프로그램 설명 : 본인인증 후 에러 발생 접수에 따라 추가해봄
 */
if (typeof auth_redirect != "function") {
    function auth_redirect(auth_redirect) {
        if (auth_redirect) {
            location.href = auth_redirect;
            return false;
        }

        var comic_id = $("#comic_id").v�카오톡플러스 친구 이벤트
         */
        var event_type = $("#event_type").val();

        /* 카카오톡 플러스 친구 이벤트 */
        if (event_type == "kakaotalkplus") {
            var redirect = $("#auth_redirect").val();

            $.ajax({
                type: "POST",
                url: redirect,
                data: { coupon_type: event_type },
                dataType: "json",
                success: function (data) {
                    if (data.result) {
                        $.postJSON("/coupon/exchange", function (data) {
                            if (data.result) {
                                alert(data.coin);
                                if (data.return_url)
                                    location.replace(data.return_url);
                                else location.href = "/";
                                return false;
                            } else {
                                alert(data.msg);
                                location.href = "/";
                            }
                        });
                    } else {
                        alert(data.msg);
                        location.href = "/";
                    }
                },
            });

            return false;
        } else {
            var redirect;

            if ($("#auth_redirect").val() == "") {
                redirect = "/?adult_check=1              if ($("#auth_redirect").val().match(/\?/)) {
                    redi               } else {
                    redirect = $("#auth_redirect").val() + "?adult_check=1";
                }
            }

            if (episode_id != "" && comic_id != "") {
                Layer.hide("#alert_layer");
                var json_parm = null;
                var json_url =
                    "/comic/location_check/" + comic_id + "/" + episode_id;
                $.postJSON(json_url, json_parm, function (data, status) {
                    if (data.result) {
                        location.href =
                            "/comic/ep_view/" + comic_id + "/" + episode_id;
                        return false;
                    } else if (data.alert_url) {
                        $("#alert_layer").load(data.alert_url, function () {
                            Layer.show("#alert_layer");
                        });
                    } else {
                      });
                return false;
            } else if (episode_id == "" && comic_id != "") {
                location.href = "/comic/ep_list/" + comic_id;
                return false;
            } else {
                location.href = redirect;
                return false;
            }
        }
    }
}

// 로그인 alert
$(document).on("click touchend", "#login, .login_btn", function () {
    Login.login();
});

// 회원가입 alert
$(document).on("click touchend", "#join, .join_btn", function () {
    Login.join();
});

function payCompleteRedirect(uri = null) {
    delete_cookie("coinInfo");
    var lastLocation = (uri == null) ? getCookie("lastLocation") : uri ;

    if (lastLocation) {
        lastLocation = decodeURIComponent(lastLocation);

        // 충전소 경우 연재로
        if (lastLocation.indexOf('/payment/payment_charge') > 0) {
            lastLocation = "/weekly";
        }
    }
    else {
        lastLocation = "/";
    }

    setCookie("lastLocation", null, -1);

    const uHostOrigin = location.hostname == "pay.toptoon.com" ? 'https://toptoon.com' : location.origin ;
    const redirectUrl = new URL(lastLocation, uHostOrigin);
    lastLocation = redirectUrl.href;

    if (window.opener != null && !window.opener.closed) {
        window.opener.location.replace(lastLocation);
        setTimeout(function(){self.close();},500);
    }
    else {
        window.top.location.replace(lastLocation);
    }
}

function preventDefault(e){
    e.preventDefault();
}

var preventScroll = function () {
    $("html").css({"overflow":"hidden"});
    $("body").css({"overflow":"hidden", "position":"relative", "touch-action": "none", "-webkit-overflow-scrolling": "touch"});
};

var resumeScroll = function () {
    var body = $("body")[0];
    $("html")[0].style.removeProperty("overflow");
    body.style.removeProperty("overflow");
    body.style.removeProperty("position");
    body.style.removeProperty("touch-action");
    body.style.removeProperty("-webkit-overflow-scrolling");
    document.body.removeEventListener('touchmove', preventDefault);
};

var scrollToTop = function (position, delay) {
    if (!position) position = 0;
    if (!delay) delay = 0;
    $("html, body").animate(uonalLinks.findIndex(function (item) {
            return item === url;
        }) >= 0
    );
};

$(document).on("click", ".login_check_link", function (e) {
    e.preventDefault();

    $(".slide_overlay").fadeOut("fast");
    $(".new_service_menu").removeClass("open");

    if (user_idx > 0) {
        var link_url = $(this).data("url");
        if (link_url == "free_charge") {
            show_ejoin();
        } else {
            location.href = link_url;
        }
    } else {
        var link_url = $(this).data("url");
        restoreToken(link_url, function (result) {
            if (!result) {
                if (isExceptionalLinks(link_url) === true) {
                    location.href = link_url;
                } else {
                    Login.login({
                        redirect: link_url,
                    });
                }
            }
        });
    }
});

// 비회원 무료만화 카운트
var getFreeComicCount = function (comic_id) {
    var freeComic = getLocalStorage("freeComicCount");
    if (freeComic !== null) {
        var freeComicCount = JSON.parse(freeComic);
        var _thisFreeComic = _.find(freeComicCount, function (o) {
            return o.comicId == comic_id;
        });
        if (_thisFreeComic != undefined) {
            return _thisFreeComic.count;
        } else {
            return 0;
        }
    } else {
        return 0;
    }
};

var setFreeComicCount = function (comic_id) {
    var freeComicArr = [];
    var freeComicObj = {};
    var freeComic = getLocalStorage("freeComicCount");
    if (freeComic !== null) {
        freeComicArr = JSON.parse(freeComic);
        var duplicateKey = _.indexOf(_.map(freeComicArr, "comicId"), comic_id);
        if (duplicateKey >= 0) {
            freeComicObj.comicId = comic_id;
            freeComicObj.count = freeComicArr[duplicateKey].count + 1;
            freeComicArr.splice(duplicateKey, 1);
            freeComicArr.push(freeComicObj);
        } else {
            freeComicObj.comicId = comic_id;
            freeComicObj.count = 1;
            freeComicArr.push(freeComicObj);
        }
    } else {
        freeComicObj.comicId = comic_id;
        freeComicObj.count = 1;
        freeComicArr.push(freeComicObj);
    }
    setLocalStorage("freeComicCount", JSON.stringify(freeComicArr));
};
// 비회원 무료만화 카운트

function getLocalStorage(key) {
    return localStorage.getItem(key);
}

function setLocalStorage(key, value) {
    return localStorage.setItem(key, value);
}

/**
 * 최근 본 내역 만화 local저장
 * @param {*} comic_id
 * @param {*} episode_idx
 */
function set_comic_log(comic_id, episode_idx, comic_idx, coin, comicMeta, episodeName) {
    if (comic_id && episode_idx) {
        var data_name = "ep_data",
            $data = localStorage.getItem(data_name),
            $new_data = [],
            $tmp = {},
            now_time = new Date().getTime(),
            cut_time = now_time - 1000 * 60 * 60 * 24 * 30 * 3,
            max_cnt = 2000;

        // 새정보 추가
        $tmp["c"]       = comic_id;
        $tmp["ci"]      = comic_idx;
        $tmp["i"]       = episode_idx;
        $tmp["d"]       = now_time;
        $tmp["coin"]    = coin;
        $tmp['est']     = comicMeta['recentViewedEpisodeInfo']['shortTitle'];

        $new_data.push($tmp);

        // 기존 정보 추가
        if ($data !== null) {
            $data = JSON.parse($data);
            $.each($data, function (i, n) {
                //if (n.d >= cut_time && n.c != comic_id)
                //if (n.c != comic_id) {
                if (n.i != episode_idx) {
                    $new_data.push(n);
                    --max_cnt;
                }

                if (max_cnt <= 0) return false;
            });
        }
        $new_data = JSON.stringify($new_data);
        localStorage.setItem(data_name, $new_data);
    }

    // 메인 내가보던 코믹 메타 저장
    if (comic_idx && _.has(comicMeta, 'idx')) {
        const lsRecentKey       = 'myRecentComic';
        const lsRecentAdult     = comicMeta['meta']['adult'] == 1 ? 'a' : 'n';
        const lsRecentLimit     = 10;
        let lsRecentData        = localStorage.getItem(lsRecentKey) !== null ? JSON.parse(localStorage.getItem(lsRecentKey)) : {};
        let currentRecentData   = lsRecentData[lsRecentAdult];
        if (typeofo) => {
                if(o.idx == comic_idx) {
                     if(currentRecentData.length > 0 && Number(episodeName) > Number(o.remainEpisodesInfo.episodeName) || isNaN(o.remainEpisodesInfo.episodeName) === true) {
                        comicMeta.remainEpisodesInfo.episodeName = Number(episodeName);
                    } else {
                        comicMeta.remainEpisodesInfo.episodeName = Number(o.remainEpisodesInfo.episodeName);
                    }
                    return true;
                } else {
                    return false;
                }
            });

            if (currentRecentData.unshift(comicMeta) > lsRecentLimit) {
                currentRecentData = _.slice(currentRecentData, 0, lsRecentLimit);
            }
        } else {
            currentRecentData = [];
            currentRecentData.unshift(comicMeta);
        }

        lsRecentData[lsRecentAdult] = currentRecentData;
        localStorage.setItem(lsRecentKey, JSON.stringify(lsRecentData));
    }
}

/**
 * 최근 본 내역 삭제
 * @param {array,string} comic_id
 */
function delete_comic_log(comic_id) {
    if (comic_id) {
        var data_name = "ep_data",
            $data = localStorage.getItem(data_name),
            $new_data = [],
            max_cnt = 2000;

        // 정보 추가
        if ($data !== null) {
            $data = JSON.parse($data);
            $.each($data, function (i, n) {
                if (Array.isArray(comic_id)) {
                    if ($.inArray(n.c, comic_id) <= -1) {
                        $new_data.push(n);
                        --max_cnt;
                    }
                } else {
                    if (n.c != comic_id) {
                        $new_data.push(n);
                        --max_cnt;
                    }
                }

                if (max_cnt <= 0) return false;
            });
        }
        if ($new_data.length > 0) {
            $new_data = JSON.stringify($new_data);
            localStorage.setItem(data_name, $new_data);
        } else {
            localStorage.removeItem(data_name);
        }

        // 메인 내가보던 코믹 메타 삭제
        const lsRecentKey   = 'myRecentComic';
        let lsRecentData    = localStorage.getItem(lsRecentKey) !== null ? JSON.parse(localStorage.getItem(lsRecentKey)) : [];
        if (Object.keys(lsRecentData).length > 0) {
            for (const [key] of Object.entries(lsRecentData)) {
                comic_id.forEach(comicId => {
                    _.remove(lsRecentData[key], (o) => {
                        return o.id == comicId;
                    });
                });
                if (lsRecentData[key].length == 0) {
                    delete lsRecentData[key];
                }
            }
            if (Object.keys(lsRecentData).length > 0) {
             }
}

/**
 * 클릭 이벤트 집계시 여러번 집계 되는걸 방지하기 위해
 * 한번 클릭 시 더이상 집계되지 않도록 처리하나 해당 클릭 DOM외 다른 부분을 클릭하면 다시 작동하도록 처리
 * @author theRok
 * @date 2018-01-25
 */
$(document).on("click touched", function (event) {
    var target = $(event.target);
    if (
        $(".logClick.disabled").length > 0 &&
        target.closest(".logClick.disabled").length <= 0
    ) {
        $(".logClick.disabled").removeClass("disabled");
    }
});
/**
 * 클릭 이벤트 집계
 * @author theRok
 * @date 2018-01-24
 */
$(document).on("click touchend", ".logClick:not(.disabled)", function (event) {
    var target = $(event.target),
        _this = target.closest(".logClick"),
        except_class = null,
        ajax_urs("disabled");

    // 집계 예외 대상 : 닫기 버튼 같은 것의 처리
    if (typeof _this.data("exceptClass") != "undefined") {
        except_class = _this.data("exceptClass");
    }

    if (
        except_class == null ||
        target.closest("." + except_class).length <= 0
    ) {
        var send_data = {};
        // 링크값
        send_data.link = _this.prop("href");
        if (typeof _this.data("href") != "undefined")
            send_data.link = _this.data("href");

        // type
        if (typeof _this.data("type") != "undefined")
            send_data.type = _this.data("type");

        // log-name
        if (typeof _this.data("log-name") != "undefined")
            send_data.name = _this.data("log-name");
        // 현재 브라우져의 주소
        send_data.location = location.href;

        // relation_idx
        if (typeof _this.data("relation-idx") != "undefined")
            send_data.relation_idx = _this.data("relation-idx");

        // cookie-name
        // 해당 값이 설정되어 있으면 해당 쿠키 값을 etc_data에 저장
        if (typeof _this.data("cookie-name") != "undefined") {
            var tmp_name = _this.data("cookie-name").split("|"),
                tmp = {};
            $.each(tmp_name, function (i, n) {
                if (getCookie(n)) {
                    tmp[n] = getCookie(n);
                }
            });
            if (Object.keys(tmp).length > 0) {
                send_data.etc_data = JSON.stringify(tmp);
            }
        }

        if (typeof send_data.link != "undefined" && send_data.link.length > 0) {
            $.ajax({
                type: "POST",
                url: ajax_url,
                data: { data: send_data },
                async: true,
                success: function (response) {
                    if (send_data.name == 'SHORTS') {
                        _this.removeClass("disabled");
                    }
                },
            });
        }
    }
});

/**
 * 포인트 파크 클릭 위치 쿠키 생성
 * @author theRok
 * @date 2018-04-09
 */
$(document).on("click touchend", ".btnPointpark", function (event) {
    var target = $(event.target),
        _this = target.closest(".btnPointpark"),
        _type = _this.data("type") ? _this.data("type") : 1;

    event.stopPropagation();
    event.preventDefault();
    setCookie("pointpark_step", _type, 1);
    setTimeout(function () {
        if (_this.attr("target") == "_blank") {
            window.open = _this.attr("href");
        } else {
            location.href = _this.attr("href");
        }
    }, 200);
});

/**
 * @Date : 2018-04-11
 * @작성자 : theRok
 * @프로그램 설명 : 작가명 html 생성
 */
function author_html($data) {
    $author_names = [];
    if (Object.keys($data).length > 0) {
        $.each($data, function (i, n) {
            $author_names.push(n.name);
        });
    }
    return $author_names.join("&");
}

// 결제 배너 클릭 미니결제창 show
$(document).on("click", ".shortageCoinLayer", function (e) {
    e.preventDefault();

    var params = {
        comicId: $(this).data("comic_id"),
        episodeId: $(this).data("episode_id"),
        pb: $(this).data("pb"),
    };

    if (typeof actionWatcher == "object") {
        actionWatcher.setAction({
            action: "clickPaymentBanner",
            comicId: params.comicId,
            episodeId: params.episodeId,
            location: location.pathname,
        });
    }

    Layer.hide("#alert_layer");

    PaymentLink.short(params);
    return false;
});

// 결제페이지 이동
$(document).on("click", ".gotoCharge", function (e) {
    e.preventDefault();

    $.ajax({
        url: "/alert/extraCoinNoticeAlert",
        type: "GET",
        cache: true,
        success: function (response) {
            $("#alert_layer").html(response);
            Layer.show("#alert_layer");
        },
    });
    return false;
});

// comic_card 클릭검증 task_35069
$(document).on("click", "a.jsComicObj, li.jsComicObj > a", function () {
    let aTagDisabled = $(this).hasClass("disabled");
    let linkUrl = $(this).attr("href");

    if (linkUrl && !aTagDisabled && $.inArray(Responsive.SEG_1, ['login', 'my']) < 0) {
        location.href = linkUrl;
    }
    return false;
});

function viewCountToString(viewCount) {
    if (viewCount <= 5000) viewCount = "5,000";
    else if (viewCount > 5000 && viewCount <= 10000) viewCount = "5,000+";
    else if (viewCount > 10000 && viewCount <= 50000) viewCount = "10,000+";
    else if (viewCount > 50000 && viewCount <= 100000) viewCount = "50,000+";
    else if (viewCount > 100000 && viewCount <= 500000) viewCount = "100,000+";
    else if (viewCount > 500000 && viewCount <= 1000000) viewCount = "500,000+";
    else if (viewCount > 1000000 && viewCount <= 2000000)
        viewCount = "1,000,000+";
    else if (viewCount > 2000000 && viewCount <= 3000000)
        viewCount = "2,000,000+";
    else if (viewCount > 3000000 && viewCount <= 4000000)
        viewCount = "3,000,000+";
    else if (viewCount > 4000000 && viewCount <= 5000000)
        viewCount = "4,000,000+";
    else if (viewCount > 5000000 && viewCount <= 6000000)
        viewCount = "5,000,000+";
    else if (viewCount > 6000000 && viewCount <= 7000000)
        viewCount = "6,000,000+";
    else if (viewCount > 7000000 && viewCount <= 8000000)
        viewCount = "7,000,000+";
    else if (viewCount > 8000000 && viewCount <= 9000000)
        viewCount = "8,000,000+";
    else if (viewCount > 9000000 && viewCount <= 10000000)
        viewCount = "9,000,000+";
    else if (viewCount > 10000000 && viewCount <= 20000000)
        viewCount = "10,000,000+";
    else if (viewCount > 20000000 && viewCount <= 30000000)
        viewCount = "20,000,000+";
    else if (viewCount > 30000000 && viewCount <= 40000000)
        viewCount = "30,000,000+";
    else if (viewCount > 40000000 && viewCount <= 50000000)
        viewCount = "40,000,000+";
    else if (viewCount > 50000000 && viewCount <= 60000000)
        vie viewCount = "80,000,000+";
    else if (viewCount > 90000000 && viewCount <= 100000000)
        viewCount = "90,000,000+";
    else if (viewCount > 100000000) viewCount = "100,000,000+";

    return viewCount;
}

function shortViewCountToString(viewCount) {
    viewCount = String(viewCount);
    // 만 ~ 십만이하
    if (viewCount >= 10000 && viewCount < 100000) {
        viewCount =
            viewCount.substr(0, 1) + "." + viewCount.substr(1, 1) + "만";
    }
    // 십만 ~ 백만이하
    else if (viewCount >= 100000 && viewCount < 1000000) {
        viewCount = viewCount.substr(0, 2) + "만";
    }
    // 백만 ~ 천만이하
    else if (viewCount >= 1000000 && viewCount < 10000000) {
        viewCount = viewCount.substr(0, 3) + "만";
    }
    // 천만 ~ 억이하
    else if (viewCount >= 10000000 && viewCount < 100000000) {
        viewCount = viewCount.substr(0, 4).format() + "만";
    }
    // 억 ~
    else if (viewCount >= 100000000) {
        viewCount = viewCount.substr(0, 1) + "억";
    } else {
        viewCount = "5천";
    }

    return viewCount;
}

// 이어보기
if (getCookie("isLogin")) {
    if (typeof localStorage == "object") {
        var scrollData = localStorage.getItem("savedScroll");
        if (scrollData) {
            try {
                scrollData = JSON.parse(scrollData);
                if (
                    typeof scrollData.comicId != "undefined" &&
                    typeof scrollData.episodeId != "undefined"
                ) {
                    $("#btnViewResume")
                        .bind("click", function () {
                            location.href =
                                "/comic/ep_view/" +
                                scrollData.comicId +
                                "/" +
                                scrollData.episodeId;
                        })
                        .show();
                }
            } catch (e) {
                console.log(e);
                localStorage.removeItem("savedScroll");
            }
        }
    }
    setCookie("isLogin", null, -1);
}

// 내가보던 - 로컬스토리지
if (getCookie("setMyRecent")) {
    Saw.set();
    setCookie("setMyRecent", null, -1);
}

$(function () {
    if (typeof localStorage == "object") {
        var scrollData = localStorage.getItem("savedScroll");
        if (scrollData && user_idx > 0) {
            try {
                scrollData = JSON.parse(scrollData);
                if (
                    scrollData.userIdx == user_idx &&
                    typeof scrollData.comicId != "undefined" &&
                    typeof scrollData.episodeId != "undefined"
                ) {
                    $("#btnViewResume")
                        .bind("click", function () {
                            location.href =
                                "/comic/ep_view/" +
                                scrollData.comicId +
                                "/" +
                                scrollData.episodeId;
                        })
                        .show();
                }
            } catch (e) {
                console.log(e);
                localStorage.removeItem("savedScroll");
            }
        }
    }
    /**
     * 19 switch action
     */
    $('.btn_select_mode > .switch_19mode').on("click", function() {
        document.location.href='/my/change_adult_status_for_topview?show_adult=' + $(this).attr('data-adult') + '&redirect=' + location.pathname + location.hash;
    });
    /**
     * Checking Session
     * @author jongseok.seo@toptoon.com
     */
    document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
            if (!getCookie("rm_session")) {
                document.location.href = '/?layer=/alert/auth/login';
            }
        }
    })
});

function extraCoinAlert() {
    if (typeof closeSlideMenu === "function") closeSlideMenu();
    if ($(".mymenu_layer").length > 0) $(".mymenu_layer").hide();

    $.ajax({
        url: "/alert/extraCoinAlert",
        cache: true,
        success: function (response) {
            $("#alert_layer").html(response);
            Layer.show("#alert_layer");
        },
    });
}

function getOverlayHtml(code) {
    let html = '';
    switch (code) {
        case 'freeticket':
            html = '<div class="freePass"><img src="/assets/img/responsive/common/badge/img_f_p.png" class="img_f_p"></div>';
            break;
        case 'freeticketSecret':
            html = '<div class="secretGift"><img src="/assets/img/responsive/common/badge/img_s_f_p.png" class="img_s_f_p"></div>';
            break;
    }
    return html;
}

function getBadgeHtml(code, etc, position) {
    var html = "";
    switch (code) {
        case "up":
            html = '<span class="iconbadge_new ico_up"></span>';
            break;
        case "top10":
            html = '<span class="iconbadge_new weektop10"></span>';
            break;
        case "top10Badge":
            html = '<span class="iconbadge_new ico_top10new"></span>';
            break;
        case "24hr":
            html = '<span class="iconbadge_new dayFree"></span>';
            break;
        case "24hrbadge":
            html = '<span class="iconbadge_new dayFreeBadge"></span>';
            break;
        case "recommend":
            html = '<span class="iconbadge_new ico_reco"></span>';
            break;
        case "complete":
            html = '<span class="iconbadge_new ico_end"></span>';
            break;
        case "adult":
            html = '<span class="icon_19_red"></span>';
            break;
        case "cancelled":
            if (_.indexOf(["ep_list", "ep_view"], Responsive.SEG_2) < 0) {
                html = '<span class="iconbadge_new ico_zzz"></span>';
            }
            break;
        case "delayed":
            html = '<span class="iconbadge_new ico_delay"></span>';
            break;
        case "exclusive":
            html = '<span class="iconbadge_new ico_exclusive"></span>';
            break;
        case "freeticket":
            html =
                '<span class="iconbadge_new ico_ticket jsFreeticket"></span>';
            break;
        case "new":
            html = '<span class="iconbadge_new bdg_new"></span>'; // 231010 신작 뱃지 변경
            break;
        case "new2":
            html = '<span class="iconbadge_new ico_new2"></span>';
            break;
        case "prev_new":
            html = '<span class="iconbadge_new ico_new"></span>'; // 이전 뱃지
            break;
        case "plusone":
            html = '<span class="iconbadge_new plusone1"></span>';
            break;
        case "sale":
            if (_.indexOf(["freetoon"], Responsive.SEG_2) < 0) {
                html = '<span class="iconbadge_new ico_discount"></span>';
            }
            break;
        case "free":
            if (_.indexOf(["freetoon"], Responsive.SEG_2) < 0) {
                html = '<span class="iconbadge_new ico_allfree"></span>';
            }
            /*
            if (position == "ribbon") {
                html = '<span class="iconbadge_new ico_free2"></span>';
            } else {
                html = '<span class="iconbadge_new ico_free"></span>';
            }
            */
            break;
        case "sectionFree":
            html = '<span class="iconbadge_new sectionfree"></span>';
            break;
        case "waitFree":
            html = '<span class="iconbadge_new ico_waitfree"></span>';
            break;
        case "recently":
            html = '<span class="iconbadge_new ico_isaw' + etc + '"></span>';
            break;
        case "recentlyMy":
            html =
                '<span class="iconbadge_new ico_myrecent' + etc + '"></span>';
            break;
        case "latestComplete":
            html = '<span class="iconbadge_new ico_latestend"></span>';
            break;
        case "novel":
            // html = '<span class="iconbadge_new ico_novel"></span>';
            break;
    }
    return html;
}

function validURL(str) {
    var pattern = new RegExp(
        "^(https?:\\/\\/)?" + // protocol
            "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
            "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
            "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
            "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
            "(\\#[-a-z\\d_]*)?$",
        "i"
    ); // fragment locator
    return !!pattern.test(str);
}

function setArrList(type, titleTagList, ribbonTagList, badgeTagList) {
    if(typeof type == 'boolean' && type == true) {
        titleTagList = ["up", "prev_new","cancelled"];
        ribbonTagList = ['exclusive'];
        badgeTagList = [
            "top10",
            "latestComplete",
            "waitFree",
            "plusone",
            "sale",
            "free",
            "novel"
        ];
    }

    return {
        titleTagList : titleTagList,
        ribbonTagList : ribbonTagList,
        badgeTagList : badgeTagList
    };
}

// COMIC DATA PROCESS
var upBadgeAgo24HoursDatetime = moment().subtract(24, 'h').format('YYYY-MM-DD HH:mm:ss');
var upBadgeDatetime = moment().format('YYYY-MM-DD HH:mm:ss');
function initComicData(o, type) {
    var ribbonHtml = [];
    var badgeHtml = [];
    var titleHtml = [];

    let titleTagList = ["up", "cancelled"];
    let ribbonTagList = ['exclusive'];
    let badgeTagList = [
        "top10",
        "new",
        "latestComplete",
        "waitFree",
        "plusone",
        "sale",
        "free",
        "novel"
    ];

    const setArrLists = setArrList(type, titleTagList, ribbonTagList, badgeTagList);
    if (typeof arrSaleComicIdx == "undefined") var arrSaleComicIdx = [];

    _.each(setArrLists.ribbonTagList, function (tag) {
         {
            ribbonHtml.push(getBadgeHtml(tag));
        }
    });
    o.ribbonHtml = ribbonHtml.join("");

    _.each(setArrLists.badgeTagList, function (tag) {
        if (typeof o.ribbon[tag] != "undefined" && o.ribbon[tag]) {
            badgeHtml.push(getBadgeHtml(tag));
        }

        _.each(o.badge, function (v) {
            if (v.label == tag) {
                badgeHtml.push(getBadgeHtml(tag));date.publishedAt.length && o.nextUpdate.publishedAt >= upBadgeAgo24HoursDatetime && o.nextUpdate.publishedAt <= upBadgeDatetime) {
            o.lastUpdated.episodeTitle = o.nextUpdate.episodeTitle;
            titleHtml.push(getBadgeHtml('up'));
        } else if (_.has(o, 'lastUpdated') && o.lastUpdated.publishedAt.length && o.lastUpdated.publishedAt >= upBadgeAgo24HoursDatetime && o.lastUpdated.publishedAt <= upBadgeDatetime) {
            titleHtml.push(getBadgeHtml('up'));
        }
    }
    o.titleHtml = titleHtml.join("");

    // o.adultTag = Responsive.adultType == 'adult' ? getBadgeHtml('adult') : '';
    o.adultTag = o.ribbon.adult ? getBadgeHtml("adult") : "";

    o.episodeTitle = _.replace(o.lastUpdated.episodeTitle, "제", "");

    // 비성인 17금 이미지
    if (Responsive.adultType == "non_adult" && o.meta.adult == "1") {
        if (o.thumbnailNonAdult.portrait != "") {
            o.thumbnail.portrait = o.thumbnailNonAdult.portrait;
            o.thumbnail.landscape = o.thumbnailNonAdult.landscape;
        }
    }

    o.rating = Responsive.defaultRa;
    if (o.meta.editorRating > 0) o.rating = o.meta.editorRating;

    o.weeklyString = "";
    o.weekyArray = [];
    if (o.comicWeekly) {
        var temp = [];
        _.each(o.comicWeekly, function (obj) {
            var string = numToWeekStr(Number(obj.comic_weekly));
            if (string) {
                temp.push(string);
                o.weekyArray.push(string);
            }
        });
        if (temp.length) {
            o.weeklyString = temp.join(", ") + "요일";
        }
    }

    o.viewCount = o.meta.viewCount;

    o.latestUpdatePublishedAt = o.lastUpdated.publishedAt;

    o.meta.viewCountString = viewCountToString(o.meta.viewCount);

    o.meta.shortViewCountToString = shortViewCountToString(o.meta.viewCount);

    // 남은 회차수 계산
    rn false;
    }
}

function showLogin() {
    Login.login(location.href);
}

function isGoogleOAuthSupportBrowser(sns) {
    var userAgent = navigator.userAgent;
    var googleOAuthUnsupportedBrowsers = ["nate_app", "KAKAOTALK", "DaumApps", "NAVER"];
    var isValidated = true;

    _.each(googleOAuthUnsupportedBrowsers, function (value) {
        if (userAgent.searc            "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
            "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
            "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
            "(\\#[-a-z\\d_]*)?$",
        "i"
    ); // fragment locator
    return !!pattern.test(str);
}

function popupCenter(url, title, w, h) {
    // Fixes dual-screen position                         Most browsers      Firefox
    var dualScreenLeft =
        window.screenLeft != undefined ? window.screenLeft : window.screenX;
    var dualScreenTop =
        window.screenTop != undefined ? window.screenTop : window.screenY;

    var width = window.innerWidth
        ? window.innerWidth
        : document.documentElement.clientWidth
        ? document.documentElement.clientWidth
        : screen.width;
    var height = window.innerHeight
        ? window.innerHeight
        : document.documentElement.clientHeight
        ? document.documentElement.clientHeight
      enLeft;
    var top = (height - h) / 2 + dualScreenTop;
    var newWindow = window.open(
        url,
        title,
        "scrollbars=yes, width=" +
            w +
            ", height=" +
            h +
            ", top=" +
            top +
            ", left=" +
            left
    );

    // Puts focus on the newWindow
    if (newWindow && window.focus) newWindow.focus();

    return newWindow;
}

function numToWeekStr(num, tail) {
    var _return = false;
    if (_.isNumber(num) && num > 0 && num <= 7) {
        switch (num) {
            case 1:
                _return = "월";
                break;
            case 2:
                _return = "화";
                break;
            case 3:
                _return = "수";
                break;
            case 4:
                _return = "목";
                break;
            case 5:
                _return = "금";
                break;
            case 6:
                _return = "토";
                break;
            case 7:
                _return = "일";
                break;
        }
        if (tail) _return += "요일";
    }
    return _return;
}

function uuidv4() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function (c) {
            var r = (Math.random() * 16) | 0,
                v = c == "x" ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        }
    );
}

function XSSclean(str, level) {
    if (level == undefined || level == 0) {
        str = str.replace(/\<|\>|\"|\'|\%|\;|\(|\)|\&|\+|\-/g,"");
    } else if (level != undefined && level == 1) {
        str = str.replace(/\</g, "&lt;");
        str = str.replace(/\>/g, "&gt;");
    }
    return str;
}

/**
 * get 방식에 param 가져오기
 * @param string name
 * @returns
 */
 function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

/**
 * 현재 날짜 가져오기
 *
 * @returns
 */
function curDate () {
    var timestamp = new Date();

     let v__month = timestamp.getMonth() + 1;
     let v____day = timestamp.getDate();
     let v___hour = timestamp.getHours();
     let v_minute = timestamp.getMinutes();
     let v_second = timestamp.getSeconds();

     v__month = v__month >= 10 ? v__month : '0' + v__month;
     v____day = v____day >= 10 ? v____day : '0' + v____day;
     v___hour = v___hour >= 10 ? v___hour : '0' + v___hour;
     v_minute = v_minute >= 10 ? v_minute : '0' + v_minute;
     v_second = v_second >= 10 ? v_second : '0' + v_second;

     return timestamp.getFullYear() + '-' + v__month + '-' + v____day.toString() + ' ' + v___hour + ':' + v_minute + ':' + v_second;
 }

// 버튼 클릭 카운트
function getClickCount(name) {
    var clickData = getLocalStorage('clickCount');
    if (clickData !== null) {
        var clickCount = JSON.parse(clickData);
        var _thisClickCount = _.find(clickCount, function  (o) {
            return o.name == name;
        });
        if (_thisClickCount != undefined) {
            return _thisClickCount.count;
        } else {
            return 0;
        }
    } else {
        return 0;
    }
}

function setClickCount(name) {
    var clickCountArr = [];
    var clickCountObj = {};
    var clickCount = getLocalStorage('clickCount');
    if (clickCount !== null) {
        clickCountArr = JSON.parse(clickCount);
        var duplicateKey = _.indexOf(_.map(clickCountArr, 'name'), name);
        if (duplicateKey >= 0) {
            clickCountObj.name   = name;
            clickCountObj.count      = clickCountArr[duplicateKey].count + 1;
            clickCountArr.splice(duplicateKey, 1);
            clickCountArr.push(clickCountObj);
        } else {
            clickCountObj.name   = name;
            clickCountObj.count      = 1;
            clickCountArr.push(clickCountObj);
        }
    } else {
        clickCountObj.name   = name;
        clickCountObj.count      = 1;
        clickCountArr.push(clickCountObj);
    }
    setLocalStorage('clickCount', JSON.stringify(clickCountArr));
}
// 버튼 클릭 카운트

// 버튼 클릭 제한
function limitClickCount(name, curCount) {
    if(curCount >= Responsive.clickCount) {
        if($('input[name=gender]:checked').attr('id') == 'man') {   // 사이드 메뉴 체크박스 예�          $('#man').prop('checked', true);
        }

        alert('중복 클릭이 제한되었습니다. 다시 시도해 주시기 바랍니다.');
        location.reload();
        return false;
    } else {
        return true;
    }
}

/**
 * 회원별 받은 혜택
 */
const Benefit = {
    totalPrice : 0,
    toggle : function () {
        if (Benefit.totalPrice <= 0) {
     $('.benefit').toggle('slow');
        setInterval(() => {
            $('.jsBenefitDetailArrow').removeClass('active').addClass(isShown('.benefit') ? 'active' : '');
        }, 100);
    },
    getList : function (type, date) {
        if(user_idx > 0) {
            $.ajax({
                url     : '/my/getMyMonthBenefit',
                type    : 'POST',
                dataType: 'JSON',
                cache   : false,
                data : { date : typeof date == 'undefined' ? '3Month' : date },
                success : function (res) {
                    if (type == 'my' || type == 'layer' || type == 'payment' || type == 'minipayment' ) {
                        let html = ``;
                        _.each(_.orderBy(res.list, ['order'], ['asc']), (val, key) => {
                            const graphWidth = val.amount > 0 ? (val.amount / res.totalAmount) * 100 : 0;
                            html += `<div class="graph_area">`;
                            html += `   <span class="stit">${val.title}</span>`;
                            html += `   <div class="graph">`;
                            html += `       <div class="bar" style="width:${graphWidth}%"></div>`;
                            html += `   </div>`;
                            html += `   <span class="value"><strong class="point">${val.amount.toLocaleString()}</strong>원</span>`;
                            html += `</div>`;
                        });
                        $('.jsBenefitDetailListDiv').html(html);
                    }

                    // 총 혜택금액 표시
                    Benefit.totalPrice = res.totalAmount.toLocaleString();
                    if(res.totalAmount > 0) {
                        const priceHtml = `<p class="money"><strong>${Benefit.totalPrice}</strong>원</p>`;
                        if (type == 'menu') {
                            $('.jsBenefitSlidePrice').html(priceHtml);
                        } else {
                            $('.total_bnf .money strong').text(Benefit.totalPrice);
                            $('.my_bnf_wp .price').html(priceHtml);
                        }

                        if (type == 'payment' || type == 'minipayment') {
                            $('.jsBenefitDetailToggle').show();
                        }
                    } else {
                        const priceHtml = `<p class="txt">아직 받은 혜택이 없어요😭</p>`;
                        if (type == 'menu') {
                            $('.jsBenefitSlidePrice').html(priceHtml);
                        } else {
                            $('.total_bnf .money strong').text(0);
                            $('.my_bnf_wp .price').html(priceHtml);
                        }
                    }
                },
                error   : function (err) {
                    console.error(err);
                }
            })
        }
    },
    clickMonth : function (date, txt) {
        $('.slt_tit').text(txt);
        $('.slt_list').hide();
        Benefit.getList('my', date);
    }
}

// 최근 접속 url
function recentUrl(url) {
    let defaultLength = 2;
    let urlArr = localStorage.getItem('recentUrl') !== null ? JSON.parse(localStorage.getItem('recentUrl')) : [];

    _.remove(urlArr, (o) => {
        return o == url;
    });

    urlArr.unshift(url);

    if(urlArr.length > defaultLength) urlArr = _.slice(urlArr, 0, defaultLength);

    localStorage.setItem('recentUrl', JSON.stringify(urlArr));
}

console.log(
    "%c🔥TOPTOON🔥에 오신것을 환영합니다",
    [
        "color : #666",
        "font-family : sans-serif",
        "font-size : 24px",
        "font-weight : bold",
    ].join(";")
);

console.log(
    "%c\n이곳은 탑툰 개발자를 위한 공간입니다😊\n이용에 불편함이 있으시다면 ✉️toptoon@toptoon.com로 제보해주세요\n",
    ["color : black", "font-family : sans-serif", "font-size : 14px"].join(";")
);
