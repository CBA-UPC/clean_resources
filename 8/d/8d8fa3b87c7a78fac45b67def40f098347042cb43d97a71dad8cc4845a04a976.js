var _revico;
(function (_revico) {
    var util;
    (function (util) {
        var loader;
        (function (loader) {
            function loadCss(urls, callback) {
                if (urls.length === 0) {
                    callback();
                    return;
                }
                var head = document.getElementsByTagName('head')[0];
                var url = urls.shift();
                if (head.querySelectorAll('link[type="text/css"][rel="stylesheet"][href="' + url + '"]').length === 0) {
                    var link = document.createElement('link');
                    link.type = 'text/css';
                    link.rel = 'stylesheet';
                    link.href = url;
                    link.onload = function () {
                        loadCss(urls, callback);
                    };
                    head.appendChild(link);
                }
                else {
                    loadCss(urls, callback);
                }
            }
            loader.loadCss = loadCss;
            function loadScript(urls, callback) {
                if (urls.length === 0) {
                    callback();
                    return;
                }
                var head = document.getElementsByTagName('head')[0];
                var script = document.createElement("script");
                script.setAttribute("type", "text/javascript");
                script.setAttribute("src", urls.shift());
                script.onload = 
                head.appendChild(script);
            }
            loader.loadScript = loadScript;
            function load(callback, appendCss, appendScript) {
                var _this = this;
                var css = _revico.config.common.cssUrls.concat(appendCss || []);
                var js = _revico.config.common.scriptUrls.concat(appendScript || []);
                loadCss(css, ;
            }
            loader.load = load;
        })(loader = util.loader || (util.loader = {}));
        var api;
        (function (api) {
            function get(url, param, timeout) {
                var defer = $.Deferred();
                $.ajax({
                    url: url,
                    type: 'GET',
                    data: param,
                    timeout: timeout || _revico.config.common.apiDefaultTimeout,
                    traditional: true,
                    xhrFields: {
                        withCredentials: true
                    }
                }).done(function (data) {
                    defer.resolve(data);
                }).fail(function (error) {
                    defer.reject(error);
                });
                return defer.promise();
            }
            api.get = get;
            function post(url, param, timeout, noCredentials) {
                var defer = $.Deferred();
                $.ajax({
                    url: url,
                    type: 'POST',
                    data: param,
                    timeout: timeout || _revico.config.common.apiDefaultTimeout,
                    xhrFields: {
                        withCredentials: !noCredentials
                    }
                }).done(function (data) {
                    defer.resolve(data);
                }).fail(function (error) {
                    defer.reject(error);
                });
                return defer.promise();
            }
            api.post = post;
            function getApiToken(tenantId) {
                var defer = $.Deferred();
                $.ajax({
                    url: _revico.config.common.apiUrlApiToken,
                    type: 'GET',
                    headers: { tenantId: tenantId },
                    timeout: _revico.config.common.apiDefaultTimeout
                }).done(function (data) {
                    defer.resolve(data);
                }).fail(function (error) {
                    defer.reject(error);
                });
                return defer.promise();
            }
            api.getApiToken = getApiToken;
        })(api = util.api || (util.api = {}));
        var string;
        (function (string) {
            function htmlEscape(str) {
                if (!str)
                    return '';
                return str.replace(/[<>&"'`]/g, function (match) {
                    var escape = {
                        '<': '&lt;',
                        '>': '&gt;',
                        '&': '&amp;',
                        '"': '&quot;',
                        "'": '&#39;',
                        '`': '&#x60;',
                        '\r': '<br>',
                        '\n': '<br>',
                        '\r\n': '<br>'
                    };
                    return escape[match];
                });
            }
            string.htmlEscape = htmlEscape;
            function replaceNewLine(str) {
                if (!str)
                    return;
                return str.replace(/\r\n|\r|\n/g, function (match) {
                    var escape = {
                        '\r\n': '<br>',
                        '\r': '<br>',
                        '\n': '<br>'
                    };
                    return escape[match];
                });
            }
            string.replaceNewLine = replaceNewLine;
            function removeNewLine(str) {
                if (!str)
                    return;
                return str.replace(/\r\n|\r|\n/g, function (match) {
                    var escape = {
                        '\r\n': '',
                        '\r': '',
                        '\n': ''
                    };
                    return escape[match];
                });
            }
            string.removeNewLine = removeNewLine;
        })(string = util.string || (util.string = {}));
        var object;
        (function (object) {
            
            object.values = values;
        })(object = util.object || (util.object = {}));
        var loading;
        (function (loading) {
            function showLoading($container) {
                var $loader = $('' +
                    '<div class="revico-loading-container">' +
                    '  <div class="revico-loading">' +
                    '    <div class="ball-pulse">' +
                    '      <div></div>' +
                    '      <div></div>' +
                    '      <div></div>' +
                    '    </div>' +
                    '  </div>' +
                    '</div>').appendTo($container);
                return $loader;
            }
            loading.showLoading = showLoading;
            function remove($container, action) {
                $container.find('.revico-loading-container').fadeOut(300, function () {
                    $(this).remove();
                    if (action) {
                        action();
                    }
                });
            }
            loading.remove = remove;
            
            loading.hide = hide;
        })(loading = util.loading || (util.loading = {}));
        ;
        var cookie;
        (function (cookie) {
            function get(c_name) {
                if (document.cookie.length > 0) {
                    var c_start = document.cookie.indexOf(c_name + "=");
                    if (c_start != -1) {
                        c_start = c_start + c_name.length + 1;
                        var c_end = document.cookie.indexOf(";", c_start);
                        if (c_end == -1) {
                            c_end = document.cookie.length;
                        }
                        return unescape(document.cookie.substring(c_start, c_end));
                    }
                }
                return "";
            }
            cookie.get = get;
            function set(c_name, value, expiredays) {
                var exdate = new Date();
                exdate.setDate(exdate.getDate() + expiredays);
                document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : "; expires=" + exdate.toUTCString() + "; path=/; SameSite=None; Secure");
            }
            cookie.set = set;
            function check(c_name) {
                c_name = get(c_name);
                if (c_name != null && c_name != "") {
                    return true;
                }
                else {
                    return false;
                }
            }
            cookie.check = check;
            function getVisitorCookie() {
                return get(_revico.config.common.visitorCookieName);
            }
            cookie.getVisitorCookie = getVisitorCookie;
            function deleteIllegalVisitorCookie() {
                if (!util.cookie.get(_revico.config.common.visitorCookieName)) {
                    return;
                }
                if (util.cookie.get(_revico.config.common.visitorCookieName).match(/^[0-9a-f]{8}[-][0-9a-f]{4}[-][0-9a-f]{4}[-][0-9a-f]{4}[-][0-9a-f]{12}$/) === null) {
                    util.cookie.set(_revico.config.common.visitorCookieName, "", -1);
                }
            }
            cookie.deleteIllegalVisitorCookie = deleteIllegalVisitorCookie;
        })(cookie = util.cookie || (util.cookie = {}));
        var device;
        (function (device) {
            function useDevice() {
                if (window.innerWidth <= 768)
                    return 'sp';
                return 'pc';
            }
            device.useDevice = useDevice;
            function isPc() {
                return this.useDevice() === 'pc';
            }
            device.isPc = isPc;
        })(device = util.device || (util.device = {}));
        var calc;
        (function (calc) {
            function rate(rate) {
                var rates = (rate + "").split(".");
                var seisu = Number(rates[0]);
                var shosu = Number(rates[1] || "0");
                if (shosu >= 8) {
                    return seisu + 1;
                }
                else if (shosu < 3) {
                    return seisu;
                }
                else if (3 <= shosu && shosu < 8) {
                    return seisu + 0.5;
                }
            }
            calc.rate = rate;
        })(calc = util.calc || (util.calc = {}));
        var productmaster;
        (function (productmaster) {
            function regist($sctipt, token, tokenName, tenantId, isRegistTargetChecked) {
                if (isRegistTargetChecked === void 0) { isRegistTargetChecked = true; }
                var defer = $.Deferred();
                if (!$sctipt.text()) {
                    defer.resolve("not exists json");
                    return defer.promise();
                }
                var json = JSON.parse($sctipt.text());
                var list = [];
                if (!(json instanceof Array)) {
                    list.push(json);
                }
                else {
                    for (var i = 0; i < json.length; i++) {
                        list.push(json[i]);
                    }
                }
                var paramData = { "tenantId": tenantId, "productData": list, "isRegistTargetChecked": isRegistTargetChecked };
                paramData[tokenName] = token;
                util.api.post(_revico.config.common.apiUrlProductMasterRegist, paramData)
                    .then(.catch(;
                return defer.promise();
            }
            productmaster.regist = regist;
        })(productmaster = util.productmaster || (util.productmaster = {}));
        var localStrage;
        (function (localStrage) {
            function storageAvailable(type) {
                if (type === void 0) { type = 'localStorage'; }
                try {
                    var storage = window[type], x = '__storage_test__';
                    storage.setItem(x, x);
                    storage.removeItem(x);
                    return true;
                }
                catch (e) {
                    return e instanceof DOMException && (e.code === 22 ||
                        e.code === 1014 ||
                        e.name === 'QuotaExceededError' ||
                        e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
                        storage.length !== 0;
                }
            }
            localStrage.storageAvailable = storageAvailable;
            
            localStrage.get = get;
            
            localStrage.set = set;
            function deleteIllegalVisitorCookie() {
                if (util.localStrage.storageAvailable()) {
                    if (!util.localStrage.get(_revico.config.common.visitorCookieName)) {
                        return;
                    }
                    if (util.localStrage.get(_revico.config.common.visitorCookieName).match(/^[0-9a-f]{8}[-][0-9a-f]{4}[-][0-9a-f]{4}[-][0-9a-f]{4}[-][0-9a-f]{12}$/) === null) {
                        window.localStorage.removeItem(_revico.config.common.visitorCookieName);
                    }
                }
            }
            localStrage.deleteIllegalVisitorCookie = deleteIllegalVisitorCookie;
        })(localStrage = util.localStrage || (util.localStrage = {}));
        var sns;
        (function (sns) {
            function makeTwitterUrl(productUrl, reviewerName, reviewRating, reviewComment, productName) {
                productUrl = productUrl || "";
                var url = "https://twitter.com/intent/tweet?";
                var leader = "…";
                var text = "".concat(reviewerName, "\u3055\u3093\u306B\u3088\u308B\u300C").concat(productName, "\u300D\u306E\u30EC\u30D3\u30E5\u30FC\n");
                text += "\u8A55\u4FA1: ";
                text += "".concat(Array(parseInt(reviewRating) + 1).join('★'), "\n");
                var noCommentText = text;
                if (reviewComment.length < 30) {
                    text += "\u300C".concat(reviewComment, "\u300D");
                }
                else {
                    text += "\u300C".concat(reviewComment.substring(0, 29)).concat(leader, "\u300D\n");
                }
                var param = "";
                param += "url=" + encodeURIComponent(addRevico(productUrl));
                try {
                    param += "&text=" + encodeURIComponent(text);
                }
                catch (e) {
                    param += "&text=" + encodeURIComponent(noCommentText);
                }
                param += "&hashtags=ReviCo";
                return url + param;
            }
            sns.makeTwitterUrl = makeTwitterUrl;
            function makeFacebookUrl(productUrl) {
                productUrl = productUrl || "";
                var url = "https://www.facebook.com/sharer/sharer.php?";
                var param = "";
                param += "u=" + encodeURIComponent(addRevico(productUrl));
                return url + param;
            }
            sns.makeFacebookUrl = makeFacebookUrl;
            function makeLineUrl(productUrl, reviewerName, reviewRating, reviewComment, productName) {
                productUrl = productUrl || "";
                var url = "http://line.me/R/msg/text/?";
                var leader = "…";
                var text = "".concat(reviewerName, "\u3055\u3093\u306B\u3088\u308B\u300C").concat(productName, "\u300D\u306E\u30EC\u30D3\u30E5\u30FC\n");
                text += "\u8A55\u4FA1: ";
                text += "".concat(Array(parseInt(reviewRating) + 1).join('★'), "\n");
                var noCommentText = text;
                if (reviewComment.length < 30) {
                    text += "\u300C".concat(reviewComment, "\u300D");
                }
                else {
                    text += "\u300C".concat(reviewComment.substring(0, 29)).concat(leader, "\u300D\n");
                }
                text += "\u8A73\u7D30\u306F\u3053\u3061\u3089\u3067\u30C1\u30A7\u30C3\u30AF\uFF01\n";
                text += addRevico(productUrl) + "\n";
                noCommentText += "\u8A73\u7D30\u306F\u3053\u3061\u3089\u3067\u30C1\u30A7\u30C3\u30AF\uFF01\n";
                noCommentText += addRevico(productUrl) + "\n";
                try {
                    return url + encodeURIComponent(text);
                }
                catch (e) {
                    return url + encodeURIComponent(noCommentText);
                }
            }
            sns.makeLineUrl = makeLineUrl;
            function addRevico(url) {
                if (url.indexOf('?') >= 0) {
                    return url + '&revico';
                }
                return url + '?revico';
            }
        })(sns = util.sns || (util.sns = {}));
        var ga;
        (function (ga_1) {
            function send(action, category, label) {
                var revicoAction = _revico.config.common.gaSendPrefix + action;
                var revicoCategory = _revico.config.common.gaSendPrefix + category;
                if (window.gtag) {
                    var gtag = window.gtag;
                    gtag('event', revicoAction, {
                        'event_category': revicoCategory, 'event_label': label,
                        'non_interaction': true,
                    });
                }
                if (window.ga) {
                    var ga_2 = window.ga;
                    ga_2(function () {
                        var trackers = ga_2.getAll();
                        for (var i = 0; i < trackers.length; i++) {
                            var trackerName = trackers[i].get('name');
                            if (trackerName === 't0') {
                                ga_2('send', 'event', revicoCategory, revicoAction, label, { 'nonInteraction': 1 });
                            }
                            else {
                                ga_2(trackerName + '.send', 'event', revicoCategory, revicoAction, label, { 'nonInteraction': 1 });
                            }
                        }
                    });
                }
            }
            ga_1.send = send;
        })(ga = util.ga || (util.ga = {}));
        var dom;
        (function (dom) {
            function isWatch($target) {
                var t = $target.offset().top;
                var p = t - $(window).height();
                if ($(window).scrollTop() > p && t > 0) {
                    return true;
                }
                else {
                    return false;
                }
            }
            dom.isWatch = isWatch;
        })(dom = util.dom || (util.dom = {}));
    })(util = _revico.util || (_revico.util = {}));
})(_revico || (_revico = {}));
var _revico;
(function (_revico) {
    var config;
    (function (config) {
        var common;
        (function (common) {
            common.frontUrl = "${FrontUrl}";
            common.apiUrl = "${APIUrl}";
            common.scriptUrls = ["${FrontUrl}/lib/jquery/dist/jquery.min.js"];
            common.cssUrls = ["${FrontUrl}/css/default.css"];
            common.cssUrlDotSlider = "${FrontUrl}/css/dot_slider.css";
            common.cssUrlModal = "${FrontUrl}/css/modal.css";
            common.apiUrlLayout = "${APIUrl}/api/rating/layout.json";
            common.apiUrlCookie = "${APIUrl}/api/visitorcookie/new_cookie.json";
            common.apiUrlCookieReflect = "${APIUrl}/api/visitorcookie/reflect";
            common.apiUrlConversionLogSaveAccess = "${ApiUrlEx}/apigw/conversion_log/save_access";
            common.apiUrlConversionLogSaveStaffReviewClick = "${ApiUrlEx}/apigw/conversion_log/save_staffreview_click";
            common.apiUrlPvsend = "${APIUrl}/api/rating/area_view";
            common.apiUrlRichShippet = "${APIUrl}/api/rating/rich_snippet.json";
            common.apiUrlAddHelpful = "${APIUrl}/api/rating/add_helpful";
            common.apiUrlAddLike = "${APIUrl}/api/rating/add_like";
            common.apiUrlApiToken = "${ApiUrlEx}/apigw/apitoken";
            common.apiUrlPurchaseComplete = "${APIUrl}/api/purchase/complete";
            common.apiUrlConversionLogSaveConversion = "${ApiUrlEx}/apigw/conversion_log/save_conversion";
            common.apiUrlProductMasterRegist = "${APIUrl}/api/productmaster/regist";
            common.apiUrlMailAddressSave = "${MailUrl}/api/mail/mailaddresssave";
            common.apiUrlSendRequestReviewMail = "${APIUrl}/api/purchase/sendmail";
            common.apiUrlClickTracking = "${APIUrl}/api/reviewclick/add";
            common.apiUrlLineLinkRegist = "${APIUrl}/api/linelink/regist";
            common.frontUrlPutRevicoCookie = "${FrontUrl}/putrevicocookie";
            common.apiDefaultTimeout = 60 * 1000;
            common.visitorCookieName = "revico-visitor-id";
            common.visitorCookieExpiredays = 365 * 10;
            common.visitorCookieDefaultId = "00000000-0000-0000-0000-000000000000";
            common.commentAnchor = "#revico-comment";
            common.commentAnchorParamStar = "revico-star-rating";
            common.gaSendPrefix = "revico_";
            common.productMasterCreateJsonId = "#revico-productmaster-data";
            common.revicoLogoClickAreaWidth = 150;
            common.revicoLogoClickUrl = 'https://www.revico.net/?from=revico_logo';
            common.revicoPutCookiePrefix = "revico-putrevicocookie:";
            common.reflectHistoryName = "revico_reflect_hist";
            common.noImagePath = "${FrontUrl}/img/no_image.png";
        })(common = config.common || (config.common = {}));
        var click;
        (function (click) {
            click.image = "image";
            click.product = "product";
            click.more = "more";
            click.page = "page";
            click.search = "search";
            click.best_helpful = "best_helpful";
            click.worst_helpful = "worst_helpful";
            click.helpful = "helpful";
            click.sort_date = "sort_date";
            click.sort_helpful = "sort_helpful";
            click.sort_like = "sort_like";
            click.sort_rate = "sort_rate";
            click.write_review = "write_review";
            click.comment_more = "comment_more";
            click.twitter = "twitter";
            click.facebook = "facebook";
            click.line = "line";
            click.star_link = "star_link";
            click.graph_n_star = "graph_${star}_star";
        })(click = config.click || (config.click = {}));
        var star;
        (function (star) {
            star.cssUrls = ["${FrontUrl}/css/star.css"];
            star.apiUrlStar = "${APIUrl}/api/rating/star.json";
            star.layoutTypeStarSimple = 1;
        })(star = config.star || (config.star = {}));
        var picture;
        (function (picture) {
            picture.cssUrls = ["${FrontUrl}/css/picture.css"];
            picture.apiUrlPicture = "${APIUrl}/api/rating/picture.json";
            picture.apiUrlReview = "${APIUrl}/api/rating/review.json";
        })(picture = config.picture || (config.picture = {}));
        var comment;
        (function (comment) {
            comment.cssUrls = ["${FrontUrl}/css/comment.css"];
            comment.apiUrlComment = "${APIUrl}/api/rating/comment.json";
            comment.apiUrlFilter = "${APIUrl}/api/rating/comment_filter.json";
            comment.apiUrlTag = "${APIUrl}/api/reviewword/tag.json";
            comment.apiUrlProduct = "${APIUrl}/api/productmaster/product_detail.json";
            comment.reviewUrl = "${FrontUrl}/Review/Index";
            comment.commentLimit = 5;
            comment.commentLimitSp = 5;
            comment.viewProductCommentReview = 'comment';
            comment.viewAllCommentReview = 'commentAll';
        })(comment = config.comment || (config.comment = {}));
        var tagmanager;
        (function (tagmanager) {
            tagmanager.apiUrlTagmanager = "${ApiUrlEx}/apigw/tagmanager/tagitems";
        })(tagmanager = config.tagmanager || (config.tagmanager = {}));
        var revisitmodal;
        (function (revisitmodal) {
            revisitmodal.cssUrls = ["${FrontUrl}/css/revisit-modal.css", "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"];
            revisitmodal.apiUrlRevisitModal = "${APIUrl}/api/revisit/revisit_modal.json?";
            revisitmodal.reviewUrl = "${FrontUrl}/Review/Index";
            revisitmodal.modalIconClicked = "revico-revisit-modal--icon-clicked";
            revisitmodal.modalBodyOpen = "revico-revisit-modal--body-open";
            revisitmodal.modalIconDisplayableDateName = "revico-icon-displayable-date";
            revisitmodal.modalIconDefaultHiddenDays = 1;
        })(revisitmodal = config.revisitmodal || (config.revisitmodal = {}));
        var revisitbanner;
        (function (revisitbanner) {
            revisitbanner.cssUrls = ["${FrontUrl}/css/revisit_banner.css", "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"];
            revisitbanner.apiUrlRevisitBanner = "${APIUrl}/api/revisit/revisit_banner.json?";
            revisitbanner.reviewUrl = "${FrontUrl}/Review/Index";
        })(revisitbanner = config.revisitbanner || (config.revisitbanner = {}));
        var barcodereader;
        (function (barcodereader) {
            barcodereader.cssUrls = ["${FrontUrl}/css/barcode_reader.css", "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"];
            barcodereader.scriptUrls = ["https://webrtc.github.io/adapter/adapter-latest.js", "https://cdnjs.cloudflare.com/ajax/libs/quagga/0.12.1/quagga.min.js"];
            barcodereader.apiUrlProduct = "${APIUrl}/api/productmaster/product_detail_jan.json";
            barcodereader.apiUrlTenantOption = "${APIUrl}/api/tenantoption/tenantoption.json";
            barcodereader.apiUrlBarcodeReaderHelp = "https://revico-develop-public.s3-ap-northeast-1.amazonaws.com/barcode_reader_help/barcode-reader_help.html";
            barcodereader.reviewUrl = "${FrontUrl}/Review/Index";
            barcodereader.barcodeReaderOption = 5;
        })(barcodereader = config.barcodereader || (config.barcodereader = {}));
        var message;
        (function (message) {
            message.noReview = "レビューはありません。";
        })(message = config.message || (config.message = {}));
        (function (message) {
            message.noPicture = "投稿画像はありません。";
        })(message = config.message || (config.message = {}));
        var multicomment;
        (function (multicomment) {
            multicomment.cssUrls = ["${FrontUrl}/css/multi_comment.css", "${FrontUrl}/css/multi_comment_sp.css"];
            multicomment.filterTypeNameAccordion = "accordion";
        })(multicomment = config.multicomment || (config.multicomment = {}));
        var productautoregister;
        (function (productautoregister) {
            productautoregister.apiUrlProductAutoRegister = "${APIUrl}/api/productmaster/product_auto_register.json";
        })(productautoregister = config.productautoregister || (config.productautoregister = {}));
        var reviewranking;
        (function (reviewranking) {
            reviewranking.cssUrls = ["${FrontUrl}/css/ranking.css", "${FrontUrl}/css/ranking_sp.css"];
            reviewranking.apiUrlReviewRanking = "${APIUrl}/api/reviewranking/ranking.json";
        })(reviewranking = config.reviewranking || (config.reviewranking = {}));
        var reviewpost;
        (function (reviewpost) {
            reviewpost.cssUrls = ["${FrontUrl}/css/review_post.css"];
            reviewpost.apiUrlReviewPost = "${APIUrl}/api/reviewpostwType.onlyECMember = 'OnlyECMember';
            })(postAllowType = reviewpost.postAllowType || (reviewpost.postAllowType = {})tus.internalError = "InternalError";
            })(reviewformstatus = reviewpost.reviewformstatus || (reviewpost.reviewformstatus = {})validationError = "ValidationError";
            })(reviewpoststatus = reviewpost.reviewpoststatus || (reviewpost.reviewpoststatus = {}));
        })(reviewpost = config.reviewpost || (config.reviewpost = {}));
    })(config = _revico.config || (_revico.config = {}));
})(_revico || (_revico = {}));
var _revico;
(function (_revico) {
    window.addEventListener('message', function (event) {
        var data = event.data;
        if (!data || data.indexOf(_revico.config.common.revicoPutCookiePrefix) < 0) {
            return;
        }
        _revico.util.cookie.deleteIllegalVisitorCookie();
        _revico.util.localStrage.deleteIllegalVisitorCookie();
        var publishCookieId = data.replace(_revico.config.common.revicoPutCookiePrefix, '');
        if (publishCookieId) {
            _revico.util.cookie.set(_revico.config.common.visitorCookieName, publishCookieId, _revico.config.common.visitorCookieExpiredays);
            if (_revico.util.localStrage.storageAvailable('localStorage')) {
                _revico.util.localStrage.set(_revico.config.common.visitorCookieName, publishCookieId);
            }
        }
        else {
            if (_revico.util.localStrage.storageAvailable('localStorage')) {
                var id = _revico.util.localStrage.get(_revico.config.common.visitorCookieName);
                if (id) {
                    _revico.util.cookie.set(_revico.config.common.visitorCookieName, id, _revico.config.common.visitorCookieExpiredays);
                }
            }
            publishCookieId = _revico.util.cookie.get(_revico.config.common.visitorCookieName);
        }
        event.source.postMessage(publishCookieId, event.origin);
    }, false);
})(_revico || (_revico = {}));
//# sourceMappingURL=put_revico_cookie.js.map