var revico= (revico || {});
(function(revico){
var $ = null;
var _revico;
(function (_revico) {
    var config;
    (function (config) {
        var common;
        (function (common) {
            common.frontUrl = "https://show.revico.jp";
            common.apiUrl = "https://show.revico.jp";
            common.scriptUrls = ["https://show.revico.jp/lib/jquery/dist/jquery.min.js"];
            common.cssUrls = ["https://show.revico.jp/css/default.css"];
            common.cssUrlDotSlider = "https://show.revico.jp/css/dot_slider.css";
            common.cssUrlModal = "https://show.revico.jp/css/modal.css";
            common.apiUrlLayout = "https://show.revico.jp/api/rating/layout.json";
            common.apiUrlCookie = "https://show.revico.jp/api/visitorcookie/new_cookie.json";
            common.apiUrlCookieReflect = "https://show.revico.jp/api/visitorcookie/reflect";
            common.apiUrlConversionLogSaveAccess = "https://show.revico.jp/apigw/conversion_log/save_access";
            common.apiUrlConversionLogSaveStaffReviewClick = "https://show.revico.jp/apigw/conversion_log/save_staffreview_click";
            common.apiUrlPvsend = "https://show.revico.jp/api/rating/area_view";
            common.apiUrlRichShippet = "https://show.revico.jp/api/rating/rich_snippet.json";
            common.apiUrlAddHelpful = "https://show.revico.jp/api/rating/add_helpful";
            common.apiUrlAddLike = "https://show.revico.jp/api/rating/add_like";
            common.apiUrlApiToken = "https://show.revico.jp/apigw/apitoken";
            common.apiUrlPurchaseComplete = "https://show.revico.jp/api/purchase/complete";
            common.apiUrlConversionLogSaveConversion = "https://show.revico.jp/apigw/conversion_log/save_conversion";
            common.apiUrlProductMasterRegist = "https://show.revico.jp/api/productmaster/regist";
            common.apiUrlMailAddressSave = "https://mail.revico.jp/api/mail/mailaddresssave";
            common.apiUrlSendRequestReviewMail = "https://show.revico.jp/api/purchase/sendmail";
            common.apiUrlClickTracking = "https://show.revico.jp/api/reviewclick/add";
            common.apiUrlLineLinkRegist = "https://show.revico.jp/api/linelink/regist";
            common.frontUrlPutRevicoCookie = "https://show.revico.jp/putrevicocookie";
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
            common.noImagePath = "https://show.revico.jp/img/no_image.png";
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
            star.cssUrls = ["https://show.revico.jp/css/star.css"];
            star.apiUrlStar = "https://show.revico.jp/api/rating/star.json";
            star.layoutTypeStarSimple = 1;
        })(star = config.star || (config.star = {}));
        var picture;
        (function (picture) {
            picture.cssUrls = ["https://show.revico.jp/css/picture.css"];
            picture.apiUrlPicture = "https://show.revico.jp/api/rating/picture.json";
            picture.apiUrlReview = "https://show.revico.jp/api/rating/review.json";
        })(picture = config.picture || (config.picture = {}));
        var comment;
        (function (comment) {
            comment.cssUrls = ["https://show.revico.jp/css/comment.css"];
            comment.apiUrlComment = "https://show.revico.jp/api/rating/comment.json";
            comment.apiUrlFilter = "https://show.revico.jp/api/rating/comment_filter.json";
            comment.apiUrlTag = "https://show.revico.jp/api/reviewword/tag.json";
            comment.apiUrlProduct = "https://show.revico.jp/api/productmaster/product_detail.json";
            comment.reviewUrl = "https://show.revico.jp/Review/Index";
            comment.commentLimit = 5;
            comment.commentLimitSp = 5;
            comment.viewProductCommentReview = 'comment';
            comment.viewAllCommentReview = 'commentAll';
        })(comment = config.comment || (config.comment = {}));
        var tagmanager;
        (function (tagmanager) {
            tagmanager.apiUrlTagmanager = "https://show.revico.jp/apigw/tagmanager/tagitems";
        })(tagmanager = config.tagmanager || (config.tagmanager = {}));
        var revisitmodal;
        (function (revisitmodal) {
            revisitmodal.cssUrls = ["https://show.revico.jp/css/revisit-modal.css", "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"];
            revisitmodal.apiUrlRevisitModal = "https://show.revico.jp/api/revisit/revisit_modal.json?";
            revisitmodal.reviewUrl = "https://show.revico.jp/Review/Index";
            revisitmodal.modalIconClicked = "revico-revisit-modal--icon-clicked";
            revisitmodal.modalBodyOpen = "revico-revisit-modal--body-open";
            revisitmodal.modalIconDisplayableDateName = "revico-icon-displayable-date";
            revisitmodal.modalIconDefaultHiddenDays = 1;
        })(revisitmodal = config.revisitmodal || (config.revisitmodal = {}));
        var revisitbanner;
        (function (revisitbanner) {
            revisitbanner.cssUrls = ["https://show.revico.jp/css/revisit_banner.css", "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"];
            revisitbanner.apiUrlRevisitBanner = "https://show.revico.jp/api/revisit/revisit_banner.json?";
            revisitbanner.reviewUrl = "https://show.revico.jp/Review/Index";
        })(revisitbanner = config.revisitbanner || (config.revisitbanner = {}));
        var barcodereader;
        (function (barcodereader) {
            barcodereader.cssUrls = ["https://show.revico.jp/css/barcode_reader.css", "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"];
            barcodereader.scriptUrls = ["https://webrtc.github.io/adapter/adapter-latest.js", "https://cdnjs.cloudflare.com/ajax/libs/quagga/0.12.1/quagga.min.js"];
            barcodereader.apiUrlProduct = "https://show.revico.jp/api/productmaster/product_detail_jan.json";
            barcodereader.apiUrlTenantOption = "https://show.revico.jp/api/tenantoption/tenantoption.json";
            barcodereader.apiUrlBarcodeReaderHelp = "https://revico-develop-public.s3-ap-northeast-1.amazonaws.com/barcode_reader_help/barcode-reader_help.html";
            barcodereader.reviewUrl = "https://show.revico.jp/Review/Index";
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
            multicomment.cssUrls = ["https://show.revico.jp/css/multi_comment.css", "https://show.revico.jp/css/multi_comment_sp.css"];
            multicomment.filterTypeNameAccordion = "accordion";
        })(multicomment = config.multicomment || (config.multicomment = {}));
        var productautoregister;
        (function (productautoregister) {
            productautoregister.apiUrlProductAutoRegister = "https://show.revico.jp/api/productmaster/product_auto_register.json";
        })(productautoregister = config.productautoregister || (config.productautoregister = {}));
        var reviewranking;
        (function (reviewranking) {
            reviewranking.cssUrls = ["https://show.revico.jp/css/ranking.css", "https://show.revico.jp/css/ranking_sp.css"];
            reviewranking.apiUrlReviewRanking = "https://show.revico.jp/api/reviewranking/ranking.json";
        })(reviewranking = config.reviewranking || (config.reviewranking = {}));
        var reviewpost;
        (function (reviewpost) {
            reviewpost.cssUrls = ["https://show.revico.jp/css/review_post.css"];
            reviewpost.apiUrlReviewPost = "https://show.revico.jp/api/reviewposttag";
 lyECMember = 'OnlyECMember';
            })(postAllowType = reviewpost.postAllowType || (reviewpost.postAllowType = {}));
    rnalError = "InternalError";
            })(reviewformstatus = reviewpost.reviewformstatus || (reviewpost.reviewformstatus = {}));
    onError = "ValidationError";
            })(reviewpoststatus = reviewpost.reviewpoststatus || (reviewpost.reviewpoststatus = {}));
        })(reviewpost = config.reviewpost || (config.reviewpost = {}));
    })(config = _revico.config || (_revico.config = {}));
})(_revico || (_revico = {}));
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
                script.setAttribute("src", urlsdScript(urls, callback);
                };
                head.appendChild(script);
            }
            loader.loadScript = loadScript;
            function load(callback, appendCss, appendScript) {
                var _this = this;
                var css = _revico.config.common.cssUrls.concat(appendCss || []);
                var js = _revico.config.common.scriptUrls.concat(appendSoadScript(js, callback);
                });
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
        var object;obj[e];
                });
            }
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
      css('visibility', 'hidden');
            }
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
                    .then(function () {
                    defer.resolve();
                }).catch(function (e) { defer.resolve(e); });
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
            localStrage.storagw.localStorage.getItem(key);
            }
    Storage.setItem(key, value);
            }
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
var revico;
(function (revico) {
    var global;
    (function (global) {
        var star;
        (function (star) {
        })(star = global.star || (global.star = {}));
        var comment;
        (function (comment) {
        })(comment = global.comment || (global.comment = {}));
        var multicomment;
        (function (multicomment) {
        })(multicomment = global.multicomment || (global.multicomment = {}));
        var productAutoRegister;
        (function (productAutoRegister) {
        })(productAutoRegister = global.productAutoRegister || (global.produ   var flag;
        (function (flag) {
        })(flag = global.flag || (global.flag = {}));
    })(global = revico.global || (revico.global = {}));
})(revico || (revico = {}));
var _revico;
(function (_revico) {
    var VisitorCookie = (function () {
        function VisitorCookie() {
        }
        VisitorCookie.getInstance = function () {
            if (!this.instance) {
                this.instance = new this();
            }
            return this.instance;
        };
        VisitorCookie.prototype.generateCookieId = function (tenantId, apiTokenName, apiToken) {
            var _this = this;
            _revico.util.cookie.deleteIllegalVisitorCookie();
            _revico.util.localStrage.deleteIllegalVisitorCookie();
            var defer = $.Deferred();
            if (revico.global.flag.createdVisitorCookie) {
                defer.resolve();
                return defer.promise();
            }
            revico.global.flag.createdVisitorCookie = true;
            this.getCookieByIframe(tenantId)
                .then(function (publishCookieId) {
                if (publishCookieId) {
                    _revico.util.cookie.set(_revico.config.common.visitorCookieName, publishCookieId, _revico.config.common.visitorCookieExpiredays);
                    if (_revico.util.localStrage.storageAvailable('localStorage')) {
                        _revico.util.localStrage.set(_revico.config.common.visitorCookieName, publishCookieId);
                    }
                }
                else {
                    if (_revico.util.localStrage.storageAvailable('localStorage')) {
                        var localId = _revico.util.localStrage.get(_revico.config.common.visitorCookieName);
                        if (localId) {
                            _revico.util.cookie.set(_revico.config.common.visitorCookieName, localId, _revico.config.common.visitorCookieExpiredays);
                        }
                    }
                }
                if (!_this.hasVisitorCookie()) {
                    _this.getCookieId(tenantId).then(function (res) {
                        _revico.util.cookie.set(res.data.cookieName, res.data.publishCookieId, _revico.config.common.visitorCookieExpiredays);
                        if (_revico.util.localStrage.storageAvailable('localStorage')) {
                            _revico.util.localStrage.set(_revico.config.common.visitorCookieName, res.data.publishCookieId);
                        }
                        _this.setCookieByIframe(res.data.publishCookieId).then(function () {
                            _this.removeIframe();
                            defer.resolve();
                        });
                    });
                }
                else {
                    var cookieValue_1 = _revico.util.cookie.get(_revico.config.common.visitorCookieName);
                    _this.postCookieId(tenantId, cookieValue_1, apiokieByIframe(cookieValue_1);
              defer.resolve();
                    });
                }
            });
            return defer.promise();
        };revico.config.common.visitorCookieName);
        };
        VisitorCookie.prototype.getCookieId = function (tenantId) {
            var defer = $.Deferred();
            _revico.util.api.get(_revico.config.common.apiUrlCookie, { tenantId: tenantId })
                .then(function (res) {
                defer.resolve(res);
            });
            return defer.promise();
        };
        VisitorCookie.prototype.postCookieId = function (tenantId, publishCookieId, apiTokenName, apiToken) {
            var _this = this;
            var defer = $.Deferred();
            this.cleanReflectHistory();
            var reflectHistoryId = "".concat(tenantId, "_").concat(publishCookieId);
            if (this.hasReflectHistory(reflectHistoryId))
                return defer.resolve().promise();
            var param = {};
            param[apiTokenName] = apiToken;
            param.tenantId = tenantId;
            param.publishCookieId = publishCookieId;
            _revico.util.api.post(_revico.config.common
                defer.resolve(res);
            });
            return defer.promise();
        };
        VisitorCookie.prototype.hasReflectHistory = function (reflectHistoryId) {
            if (!_revico.util.localStrage.storageAvailable())
                return false;
            var histName = _revico.config.common.reflectHistoryName;
            var historyStr = _revico.util.localStrage.get(histName);
            if (!historyStr)
                return false;
            var historyArray = JSON.parse(function (x) { return x.id === reflectHistoryId; });
        };
        VisitorCookie.prototype.cleanReflectHistory = function () {
            if (!_revico.util.localStrage.storageAvailable())
                return;
            var histName = _revico.config.common.reflectHistoryName;
            var historyStr = _revico.util.localStrage.get(histName);
            if (!historyStr)
                return;
            var historyArray = JSON.parse(historyStr);
            var expired = Date.now() - 1000 * 60 * 60 * 24 * 7;
  rray.filter(function (h) { return h.ts > expired; });
            _revico.util.localStrage.set(histName, JSON.stringify(newHistoryArray));
        };
        VisitorCookie.prototype.addReflectHistory = function (reflectHistoryId) {
            if (!_revico.util.localStrage.storageAvailable())
                return;
            var histName = _revico.config.common.reflectHistoryName;
            var historyStr = _revico.util.localStrage.get(histName);
            var historyArray = historyStr ? JSON.parse(historyStr) : [];
            var current = {
                id: reflectHistoryId,
                ts: Date.now()
            };
            historyArray.push(current);
            _revico.util.localStrage.set(histName, JSON.stringify(historyArray));
        };
        VisitorCookie.prototype.getCookieByIframe = function (tenantId) {
            var defer = $.Deferred();
            var locationOrigin = location.origin;
            if (locationOrigin === undefined) {
                locationOrigin = location.protocol + "//" + location.hostname;
            }
            var url = "".concat(_revico.config.common.frontUrlPutRevicoCookie, "?tenantid=").concat(tenantId, "&origin=").concat(encodeURI(locationOrigin));
            var $frame = $("<iframe src=\"".concat(url, "\" id=\"revico-cookie-iframe\" width=\"0\" height=\"0\" style=\"display:none;\"></iframe>"));
            $('body').append($frame);
            $(window).on('message.revico-cookie-get', function (event) {
                if (event.originalEvent.origin !== _revico.config.common.frontUrl) {
                    return;
                }
                $(this).off('message.revico-cookie-get');
                defer.resolve(event.originalEvent.data);
            });
            $frame.on('load', function () {
                $frame[0].contentWindow.postMessage(_revico.config.common.revicoPutCookiePrefix, _revico.config.common.frontUrlPutRevicoCookie);
            });
            return defer.promise();
        };
        VisitorCookie.prototype.setCookieByIframe = function (publishCookieId) {
            var defer = $.Deferred();
            var $frame = $('#revico-cookie-iframe');
            $(window).on('message.revico-cookie-set', function (event) {
                if (event.originalEvent.origin !== _revico.config.common.frontUrl) {
                    return;
                }
                $(this).off('message.revico-cookie-set');
                defer.resolve(event.originalEvent.data);
            });
            $frame[0].contentWindow.postMessage(_revico.config.common.revicoPutCookiePrefix + publishCookieId, _revico.config.common.frontUrlPutRevicoCookie);
            return defer.promise();
           $('#revico-cookie-iframe').remove();
        };
        return VisitorCookie;
    }());
    _revico.VisitorCookie = VisitorCookie;
})(_revico || (_revico = {}));
var _revico;
(function (_revico) {
    var ReviewAreaPvSend = (function () {
        function ReviewAreaPvSend() {
        }
        ReviewAreaPvSend.getInstance = function () {
            if (!this.instance) {
                this.instance = new this();
            }
            return this.instance;
        };
        ReviewAreaPvSend.prototype.putAccessTracking = function (productCd, isStaffReview) {
            if (productCd) {
                if (isStaffReview) {
                    if (revico.global.flag.isSendStaffReviewHasView) {
                        return;
                    }
                    revico.global.flag.isSendStaffReviewHasView = true;
                    var gaAction = 'StaffReview_HasReview';
                    var gaCategory = 'StaffReview_HasReview';
                    _revico.util.ga.send(gaAction, gaCategory, productCd);
                }
                else {
                    if (revico.global.flag.isSendUserReviewHasView) {
                        return;
                    }
                    revico.global.flag.isSendUserReviewHasView = true;
                    var gaAction = 'HasReview';
                    var gaCategory = 'HasReview';
                    _revico.util.ga.send(gaAction, gaCategory, productCd);
                }
            }
            else {
                if (revico.global.flag.isSendAllReviewHasView) {
                    return;
                }
                revico.global.flag.isSendAllReviewHasView = true;
                var gaAction = 'HasReviewAll';
                var gaCategory = 'HasReviewAll';
                _revico.util.ga.send(gaAction, gaCategory, 'commentAll');
            }
        };
        ReviewAreaPvSend.prototype.putReviewAreaViewTracking = function ($target, tenantId, apiToken, apiName, reviewType, productCd, isStaffReview) {
            var _this = this;
            if (productCd) {
                if (isStaffReview) {
                    if (!revico.global.flag.isSendStaffReviewAreaView && _revico.util.dom.isWatch($target)) {
                        revico.global.flag.isSendStaffReviewAreaView = true;
                        this.postView(tenantId, apiToken, apiName, reviewType, productCd, isStaffReview);
                    }
                    $(window).scroll(function () {
                        if (!revico.global.flag.isSendStaffReviewAreaView && _revico.util.dom.isWatch($target)) {
                            revico.global.flag.isSendStaffReviewAreaView = true;
                            _this.postView(tenantId, apiToken, apiName, reviewType, productCd, isStaffReview);
                        }
                    });
                }
                else {
                    if (!revico.global.flag.isSendUserReviewAreaView && _revico.util.dom.isWatch($target)) {
                        revico.global.flag.isSendUserReviewAreaView = true;
                        this.postView(tenantId, apiToken, apiName, reviewType, productCd, isStaffReview);
                    }
                    $(window).scroll(function () {
                        if (!revico.global.flag.isSendUserReviewAreaView && _revico.util.dom.isWatch($target)) {
                            revico.global.flag.isSendUserReviewAreaView = true;
                            _this.postView(tenantId, apiToken, apiName, reviewType, productCd, isStaffReview);
                        }
                    });
                }
            }
            else {
                if (!revico.global.flag.isSendStaffReviewAreaView && _revico.util.dom.isWatch($target)) {
                    revico.global.flag.isSendStaffReviewAreaView = true;
                    this.postView(tenantId, apiToken, apiName, reviewType, productCd, isStaffReview);
                }
                $(window).scroll(function () {
                    if (!revico.global.flag.isSendStaffReviewAreaView && _revico.util.dom.isWatch($target)) {
                        revico.global.flag.isSendStaffReviewAreaView = true;
                        _this.postView(tenantId, apiToken, apiName, reviewType, productCd, isStaffReview);
                    }
                });
            }
        };
        ReviewAreaPvSend.prototype.postView = function (tenantId, apiToken, apiName, reviewType, productCd, isStaffReview) {
            var defer = $.Deferred();
            var gaAction = 'View';
            var gaCategory = 'View';
            if (isStaffReview) {
                gaAction = 'StaffReview_View';
                gaCategory = 'StaffReview_View';
            }
            if (reviewType === _revico.config.comment.viewAllCommentReview) {
                gaAction = 'ViewAll';
                gaCategory = 'ViewAll';
            }
            _revico.util.ga.send(gaAction, gaCategory, reviewType);
            var param = {};
            param.tenantId = tenantId;
            param.cookieId = _revico.util.cookie.get(_revico.config.common.visitorCookieName) || _revico.config.common.visitorCookieDefaultId;
            param.url = location.href;
            param.productCd = productCd;
            param[apiName] = apiToken;
            _revico.util.api.post(_revico.config.common.apiUrlPvsend, param)
                .then(function () {
                defer.resolve();
            });
            return defer.promise();
        };
        return ReviewAreaPvSend;
    }());
    _revico.ReviewAreaPvSend = ReviewAreaPvSend;
})(_revico || (_revico = {}));
var _revico;
(function (_revico)() {
        function ConversionLog() {
        }
        ConversionLog.getInstance = function () {
            if (!this.instance) {
                this.instance = new this();
            }
            return this.instance;
        };
        ConversionLog.prototype.putConversionLogAccess = function (tenantId, variationGroup, apiToken, apiName) {
            if (!revico.global.flag.isSendConversionLogAccess) {
                this.sendConversionLog(tenantId, variationGroup, "access", apiToken, apiName);
                revico.global.flag.isSendConversionLogAccess = true;
            }
        };
        ConversionLog.prototype.putConversionLogShowReview = function ($target, tenantId, variationGroup, apiToken, apiName) {
            var _this = this;
            if (!revico.global.flag.isSendConversionLogShowReview && _revico.util.dom.isWatch($target)) {
                this.sendConversionLog(tenantId, variationGroup, "showreview", apiToken, apiName);
                revico.global.flag.isSendConversionLogShowReview = true;
            }
            $(window).scroll(function () {
                if (!revico.global.flag.isSendConversionLogShowReview && _revico.util.dom.isWatch($target)) {
                    _this.sendConversionLog(tenantId, variationGroup, "showreview", apiToken, apiName);
                    revico.global.flag.isSendConversionLogShowReview = true;
                }
            });
        };
        ConversionLog.prototype.sendConversionLog = function (tenantId, variationGroup, logType, apiToken, apiName) {
            var _a;
            var postData = {
                tenantId: tenantId,
                variationGroup: variationGroup,
                publishCookieId: _revico.util.cookie.getVisitorCookie() || _revico.config.common.visitorCookieDefaultId,
                logType: logType
            };
            if (postData.publishCookieId === _revico.config.common.visitorCookieDefaultId) {
                return;
            }
            var defer = $.Deferred();
            $.ajax({
                url: _revico.config.common.apiUrlConversionLogSaveAccess,
                type: 'POST',
                data: JSON.stringify(postData),
                contentType: "application/json",
                headers: (_a = {
                        tenantId: tenantId
                    },
                    _a[apiName] = apiToken,
                    _a),
                timeout: _revico.config.common.apiDefaultTimeout
            }).done(function (data) {
                defer.resolve(data);
            }).fail(function (error) {
                defer.reject(error);
            });
            return defer.promise();
        };
        ConversionLog.prototype.sendStaffReviewConversionLog = function (tenantId, variationGroup, reviewId, staffId, logType, apiToken, apiName) {
            var _a;
            var postData = {
                tenantId: tenantId,
                variationGroup: variationGroup,
                publishCookieId: _revico.util.cookie.getVisitorCookie() || _revico.config.common.visitorCookieDefaultId,
                reviewId: reviewId,
                staffId: staffId,
                logType: logType,
            };
            if (postData.publishCookieId === _revico.config.common.visitorCookieDefaultId) {
                return;
            }
            var defer = $.Deferred();
            $.ajax({
                url: _revico.config.common.apiUrlConversionLogSaveStaffReviewClick,
                type: 'POST',
                data: JSON.stringify(postData),
                contentType: "application/json",
                headers: (_a = {
                        tenantId: tenantId
                    },
                    _a[apiName] = apiToken,
                    _a),
                timeout: _revico.config.common.apiDefaultTimeout
            }).done(function (data) {
                defer.resolve(data);
            }).fail(function (error) {
                defer.reject(error);
            });
            return defer.promise();
        };
        return ConversionLog;
    }());
    _revico.ConversionLog = ConversionLog;
})(_revico || (_revico = {}));
var _revico;
(function (_revic_addClass = "revico-merge-product-json";
        }
        RichSnippet.getInstance = function () {
            if (!this.instance) {
                this.instance = new this();
            }
            return this.instance;
        };
        RichSnippet.prototype.putRichSnippetTag = function (tenantId, productCd) {
            var _this = this;
            if (revico.global.flag.hasRichSnippet)
                return;
            revico.global.flag.hasRichSnippet = true;
            var param = {};
            param.tenantId = tenantId;
            param.productCd = productCd;
            _revico.util.api.get(_revico.config.common.apiUrlRichShippet, param)
                .then(function (res) {
                if (res && res.exists) {
                    var preJson = _this.findProductJson();
                    if (preJson) {
                        _this.mergeAndReplaceJson(preJson, res.data);
                    }
                    else {
                        _this.appendNewJson(res.data);
                    }
                }
            });
        };
        RichSnippet.prototype.findProductJson = function () {
            var res;
            var $scripts = $('script[type="application/ld+json"]');
            for (var i = 0; i < $scripts.length; i++) {
                var $e = $($scripts[i]);
                var text = $e.text();
                if (text) {
                    var json = JSON.parse(text);
                    if (json['@type'] && json['@type'].toLowerCase() === "product") {
                        $e.addClass(this._addClass);
                        res = json;
                        break;
                    }
                }
            }
            return res;
        };
        RichSnippet.prototype.mergeAndReplaceJson = function (preJson, currentJson) {
            var merged = $.extend(true, {}, currentJson, preJson);
            $('script.' + this._addClass).text(JSON.stringify(this.jsonEscape(merged))).removeClass(this._addClass);
        };
        RichSnippet.prototype.appendNewJson = function (data) {
            var head = document.getElementsByTagName('head')[0];
            var script = document.createElement("script");
            script.setAttribute("type", "application/ld+json");
            script.appendChild(document.createTextNode(JSON.stringify(this.jsonEscape(data))));
            head.appendChild(script);
        };
        RichSnippet.prototype.jsonEscape = function (obj) {
            obj.name = this.htmlEscape(obj.name);
            if (obj.review) {
                for (var i = 0; i < obj.review.length; i++) {
                    var review = obj.review[i];
                    review.author.name = this.htmlEscape(review.author.name);
                    review.description = this.htmlEscape(review.description);
                    review.name = this.htmlEscape(review.name);
                }
            }
            return obj;
        };
        RichSnippet.prototype.htmlEscape = function (str) {
            if (!str)
                return '';
            return str.replace(/[<>&"'`]/g, function (match) {
                var escape = {
                    '<': '&lt;',
                    '>': '&gt;',
                    '&': '&amp;',
                    '"': '&quot;',
                    "'": '&#39;',
                    '`': '&#x60;'
                };
                return escape[match];
            });
        };
        return RichSnippet;
    }());
    _revico.RichSnippet = RichSnippet;
})(_revico || (_revico = {}));
var _revico;
(function (_revico) {
    var tracking;
    (function (tracking) {
        var click;
        (function (click) {
            function sendData(token, tokenName, tenantId, reviewId, cookieId, point) {
                var param = {};
                param[tokenName] = token;
                param.tenantId = tenantId;
                param.reviewId = reviewId;
                param.publishCookieId = cookieId;
                param.clickPoint = point;
                return _revico.util.api.post(_revico.config.common.apiUrlClickTracking, param);
            }
            click.sendData = sendData;
            function bind($target, token, tokenName, tenantId, reviewId, cookieId, point) {
               tId, reviewId, cookieId, point);
                });
            }
            click.bind = bind;
        })(click = tracking.click || (tracking.click = {}));
    })(tracking = _revico.tracking || (_revico.tracking = {}));
})(_revico || (_revico = {}));
var _revico;
(function (_revico) {};
            this._layoutData = {};
        }
        FrontViewBase.prototype.boot = function () {
            var _this = this;
            this.preLoad(function () {
                if (_this._existsJquery) {
                    $ = jQuery.noConflict(true);
                }
                else {
                    $ = jQuery;
                }
                _this.preProcess()
                    .then(function () {
                    return _this.readInfo();
                })
                    .then(function () {
                    return _this.requestData();
                })
                    .then(function () {
                    return _this.processData();
                })
                    .then(function () {
                    return _this.showWidget();
                })
                    .then(function () {
                    return _this.bindEventreturn _this.bindCommonEvents();
                });
                ;
            });
        };
        FrontViewBase.prototype.preLoad = function (callback) {
            if (navigator.userAgent.indexOf('Trident') !== -1 && Object.getOwnPropertyNames(Array.prototype).indexOf('includes') === -1) {
                Object.defineProperty(Array.prototype, 'includes', {
                    value: function (searchElement, fromIndex) {
                        if (this == null) {
                            throw new TypeError('"this" is null or not defined');
                        }
                        var o = Object(this);
                        var len = o.length >>> 0;
                        if (len === 0) {
                            return false;
                        }
                        var n = fromIndex | 0;
                        var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
                        while (k < len) {
                            if (o[k] === searchElement) {
                                return true;
                            }
                            k++;
                        }
                        return false;
                    }
                });
            }
            this._existsJquery = (typeof jQuery !== 'undefined');
            _revico.util.loader.load(callback, this._individualCss, this._individualScript);
        };
        FrontViewBase.prototype.preProcess = function () {
            var _this = this;
            var d = $.Deferred();
            if (!this.checkDuplication()) {
                return d.reject().promise();
            }
            this.getRevicoProp();
            this.getApiToken(this._tenantId)
                .then(function () {
                return _revico.VisitorCookie.getInstance().generateCookieId(_this._tenantId, _this._apiTokenName, _thisn () {
                d.resolve();
            });
            return d.promise();
        };
        FrontViewBase.prototype.checkDuplication = function () {
            var res = true;
            this.getCurrentWidget().each(function () {
                if ($(this).hasClass("initailized")) {
                    res = false;
                    return false;
                }
                $(this).addClass("initailized");
            });
            return res;
        };
        FrontViewBase.prototype.getRevicoProp = function () {
            var $revico = this.getCurrentWidget();
            this._hiddenId = $revico.data("revico-hidden-id");
            this._productAttr = $revico.data("revico-product-attr");
            this._productPropAttr = $revico.data("revico-product-prop-attr");
            this._tenantId = $revico.data("revico-tenantid");
            this._layoutId = $revico.data("revico-layout");
            this._initialPageIndex = $revico.data("revico-initial-pageindex");
            this._morePageIndex = $revico.data("revico-more-pageindex");
            this._tenantMemberCdHiddenId = $revico.data("revico-tenant-member-cd");
            this._commentLeaderChars = $revico.data("comment-leader-chars");
            this._reviewerAttr = $revico.data("revico-reviewer-attr");
            this._evaluationItem = $revico.data("revico-product-evaluation");
            this._userId = $revico.data("revico-user-id");
            this._displayEvaluationGraph = $revico.filter('.revico-star-graph-design').data("display-evaluation-graph");
            this._pickUpReviewDisplayType = $revico.data("revico-pickup-review-display-type");
            this._reviewerTypeString = $revico.data("revico-reviewer-type");
        };
        FrontViewBase.prototype.getLayout = function (array) {
            var defer = $.Deferred();
            if (!array || array.length === 0) {
                defer.resolve();
                return defer.promise();
            }
            var param = {};
            param.tenantId = this._tenantId;
            param.tagCode = array;
            _revico.util.api.get(_revico.config.common.apiUrlLayout, param)
                .then(function (res) {
                defer.resolve(res);
            });
            return defer.promise();
        };
        FrontViewBase.prototype.addStyles = function (cssArray) {
            for (var i = 0; i < cssArray.length; i++) {
                var css = cssArray[i];
                if (!css)
                    continue;
                $("head").append($('<style>' + css + '</style>'));
            }
        };
        FrontViewBase.prototype.getApiToken = function (tenantId) {
            var _this = this;
            return _revico.ut        _this._apiToken = res.token;
            });
        };
        FrontViewBase.prototype.bindCommonEvents = function () {
            var bindReviCoLogoEvent = function ($logoDom) {
                if (!$logoDom || $logoDom.length === 0)
                    return;
                $logoDom.off('mouseover').on('mouseover', function (e) {
                    var revico_logo_width = jQuery(this).width();
                    var cursor_position_x = e.offsetX;
                    if (revico_logo_width - cursor_position_x < _revico.config.common.revicoLogoClickAreaWidth) {
                        jQuery(this).addClass('revico-logo-onmouse');
                    }
                });
        oveClass('revico-logo-onmouse');
                });
                $logoDom.off('click').on('click', function (e) {
                    var revico_logo_width = jQuery(this).width();
                    var cursor_position_x = e.offsetX;
                    if (revico_logo_width - cursor_position_x < _revico.config.common.revicoLogoClickAreaWidth) {
                        window.open(_revico.config.common.revicoLogoClickUrl, '_blank');
                    }
                });
            };
            if (!this._currentDom)
                return $.Deferred().resolve().promise();
            if (Array.isArray(this._currentDom)) {
                for (var _i = 0, _a = this._currentDom; _i < _a.length; _i++) {
                    var dom = _a[_i];
                    bindReviCoLogoEvent(dom.find('.revico-logo'));
                }
            }
            else {
                bindReviCoLogoEvent(this._currentDom.find('.revico-logo'));
            }
            return $.Deferred().resolve().promise();
        };
        return FrontViewBase;
    }());
    _revico.FrontViewBase = FrontViewBase;
})(_revico || (_revico =  (__.prototype = b.prototype, new __());
    };
})();
var _revico;
(function (_revico) {
    var TagMnager = (function (_super) {
        __extends(TagMnager, _super);
        function TagMnager() {
            var _this = _super.call(this) || this;
            _this._currentRequestData = {};
            return    }
            return this.instance;
         return $("#revico-review-tagmanager");
        };
        TagMnager.prototype.preLoad = function (callback) {
            if (navigator.userAgent.indexOf('Trident') !== -1 && Object.getOwnPropertyNames(Array.prototype).indexOf('includes') === -1) {
                Object.defineProperty(Array.prototype, 'includes', {
                    value: function (searchElement, fromIndex) {
                        if (this == null) {
                            throw new TypeError('"this" is null or not defined');
                        }
                        var o = Object(this);
                        var len = o.length >>> 0;
                        if (len === 0) {
                            return false;
                        }
                        var n = fromIndex | 0;
                        var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
                        while (k < len) {
                            if (o[k] === searchElement) {
                                return true;
                            }
                            k++;
                        }
                        return false;
                    }
                });
            }
            this._existsJquery = (typeof jQuery !== 'undefined');
            var js = _revico.config.common.scriptUrls.concat(this._individualScript || []);
            _revico.util.loader.loadScript(js, callback);
        };
        TagMnager.prototype.preProcess = function () {
            var d = $.Deferred();
            if (!this.checkDuplication()) {
                return d.reject().promise();
            }
            this.getRevicoProp();
            return d.resolve().promise();
        };
        TagMnager.prototype.readInfo = function () {
            var d = $.Deferred();
            var $revico = this.getCurrentWidget();
            this._tagCd = $revico.data("revico-tagmanager-code");
            return d.resolve().promise();
        };
        TagMnager.prototype.requestData = function () {
            var _this = this;
            var d = $.Deferred();
            this._currentRequestData.tenantId = this._tenantId;
            this._currentRequestData.tagCd = this._tagCd;
            var url = location.href.replace(/\?.*$/, "");
            var pattern = new RegExp("^.*".concat(location.host));
            url = url.replace(pattern, '');
            this._currentRequestData.url = url;
            $.when(this.getTagManagerDat data;
                d.resolve();
            });
            return d.promise();
        };
        TagMnager.prototype.processData = function () {
            return $.Deferred().resolve().promise();
        };
        TagMnager.prototype.showWidget = function () {
            this.appendScript();
            return $.Deferred().resolve().promise();
 return $.Deferred().resolve().promise();
        };
        TagMnager.prototype.getTagManagerData = function (param) {
            var defer = $.Deferred();
            $.ajax({
                url: _revico.config.tagmanager.apiUrlTagmanager,
                type: 'GET',
                data: param,
                headers: { "tenantId": param.tenantId },
                timeout: _revico.config.common.apiDefaultTimeout
            }).done(function (data) {
                      defer.reject(error);
            });
            return defer.promise();
        };
        TagMnager.prototype.appendScript = function () {
            var data = this._cachedData.tagManagerItems;
            var $body = $('body');
            for (var i = 0; i < data.length; i++) {
                var item = data[i];
                if (!item.script)
                    continue;
                $body.append(item.script);
            }
        };
        return TagMnager;
    }(_revico.FrontViewBase));
    _revico.TagMnager = TagMnager;
})(_revico || (_revico = {}));
_revico.TagMnager.getInstance().boot();
//# sourceMappingURL=tagmanager.js.map
})(revico);
