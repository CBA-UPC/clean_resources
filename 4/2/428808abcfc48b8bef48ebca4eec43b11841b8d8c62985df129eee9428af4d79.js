var __values = (this && this.__values) || 
Namespace('jp.mixi.adnetwork.anchor.visibilitycontroller')
    .define(function (ns) {
    'use strict';
    var changeAnchorVisibility = function (visibility) {
        document.querySelectorAll('.STATE_anchorAd').forEach(;
    };
    var controlAdVisibility = function (element, dataset) {
        // アンカー広告が出るとページの下部が隠れて一番下までスクロールできなくなる問題の対策
        document.getElementById('page').classList.add(dataset.pageAddClass);
        // フォームフォーカス時に広告を隠す
        var targetSelector = 'textarea, input[type="text"], select';
        $j(document).on('focusin', targetSelector, function () { changeAnchorVisibility('hidden'); });
        $j(document).on('focusout', targetSelector, function () { changeAncボタンで広告を隠す
        $j(document).on('click', dataset.anchorCloseButton, function () { changeAnchorVisibility('hidden'); });
    };
    ns.provide({
        registerElement: controlAdVisibility,
    });
});
Namespace('jp.mixi.adnetwork.google.dfp.widget')
    .use('jp.mixi.adnetwork.google.model.dfp loadDfpScript,prepareFluxSlot')
    .use('jp.mixi.adnetwork.google.model.dfp.slot.builder SlotBuilder')
    .define(function (ns) {
    'use strict';
    window.googletag = window.googletag || {};
    var googletag = window.googletag;
    googletag.cmd = googletag.cmd || [];
    var registerElement = function (element, dataset) {
        ns.loadDfpScript(element);
        if (dataset.isLazyLoad) {
            var wait = 500; // msec
            var $window = $j(window);
            var threshold = $j(element).offset().top - $window.height();
            var listener = _.throttle(function () {
                if (threshold <= $window.scrollTop()) {
                    displaySlot(element, dataset);
                    $window.off('scroll', listener);
                }
            }, wait);
            $window.on('scroll', listener);
            listener();
        }
        else if (dataset.isScrollLoad) {
            var $window = $j(window);
            var listener = _.once(function () {
                displaySlot(element, dataset);
                $window.off('scroll', listener);
            });
            $window.on('scroll', listener);
        }
        else {
            displaySlot(element, dataset);
        }
    };
    var displaySlot = function (element, dataset) {
        // reCAPTCHA のバッジと広告が重ならないようにする(主にログイン画面のアンカー広告用)
        if (dataset.avoidOverlappingRecaptchaBadge) {
            avoidOverlappingRecaptchaBadge(dataset);
        }
        // build adSlot
        var slotBuilder = new ns.SlotBuilder(element, dataset);
        var slotElementId = slotBuilder.getAdSlot();
        var slotPath = slotBuilder.getClientId();
        var slotSize = slotBuilder.getSize();
        googletag.cmd.push(function () {
            // 広告枠の再定義を許可する slot は defineSlot 前に destroySlots する。
            if (dataset.isRedefinable) {
                googletag.pubads().getSlots().forEach(function (slot) {
                    if (slot.getSlotElementId() === slotElementId) {
                        googletag.destroySlots([slot]);
                    }
                });
            }
            var slot = slotBuilder.build();
            // anchor広告は　slot作成後にelementIdが取得できる
            // isFluxHeaderBiddingEnabledのときはslotの定義がwindow.fluxtag.anchorRenderAdで行う必要があるため
            // slot自体が所得出来ない
            if (slot && slotBuilder.isAnchor) {
                slotElementId = slot.getSlotElementId();
            }
        });
        // display adSlot
        var isFluxHeaderBiddingEnabled = slotBuilder.isFluxHeaderBiddingEnabled;
        var isInterstitialUnit = dataset.isInterstitial ? true : false;
        if (isInterstitialUnit) {
            googletag.cmd.push(function () {
                var interstitialSlot = googletag.defineOutOfPageSlot(slotPath, googletag.enums.OutOfPageFormat.INTERSTITIAL);
                if (interstitialSlot) {
                    interstitialSlot.addService(googletag.pubads());
                    googletag.pubads().addEventListener('slotOnload', function (event) {
                        if (interstitialSlot === event.slot) {
                          gletag.display(interstitialSlot);
            });
        }
        else if (isFluxHeaderBiddingEnabled && slotBuilder.isAnchor) {
            ns.prepareFluxSlot(false);
            googletag.cmd.push(function () {
                window.fluxtag.anchorRenderAd(slotPath, slotBuilder.getGoogleTagAnchorType());
            });
        }
        else if (isFluxHeaderBiddingEnabled) {
            var amazonSlotName = dataset.amazonSlotName;
            var isApsEnabled = amazonSlotName ? true : false;
            ns.prepareFluxSlot(isApsEnabled);
            googletag.cmd.push(function () {
                var lines = [{
                        gamUnitCode: slotPath,
                        apsUnitCode: amazonSlotName,
                        sizes: slotSize,
                        divId: slotElementId,
                        isAps: isApsEnabled
                    }];
                var callback = function () {
                    var divIds = [slotElementId];
                    if (!!(pbjsFlux.setTargetingForGPTAsync) && fluxtag.isFn(pbjsFlux.setTargetingForGPTAsync)) {
                        pbjsFlux.que.push(function () {
                            pbjsFlux.setTargetingForGPTAsync(divIds);
                        });
                    }
                    window.apstag.setDisplayBids(divIds);
                    // TypeError: googletag.display is not a function 対�                return;
                    }
                    googletag.display(slotElementId);
                };
                window.fluxtag.renderAds(lines, callback);
            });
        }
        else {
            googletag.cmd.push(function () {
                googletag.display(slotElementId);
            });
        }
    };
    var changeAttributeForInterstitial = function () {
        var e_1, _a, e_2, _b;
        // インタースティシャルが有効になった場合に
        // デフォルトのままだと全てのリンクに広告が挟まってしまうため
        // ページのすべてのaタグを取得し、一旦、data-google-interstitial="false" を付ける
        // その後、インタースティシャルを有効にするクラス名（デフォルト：JS_interstitial）は
        // data-google-interstitial  を削除する
        var aTags = document.getElementsByTagName("a");
        try {
            for (var aTags_1 = __values(aTags), aTags_1_1 = aTags_1.next(); !aTags_1_1.done; aTags_1_1 = aTags_1.next()) {
                var element = aTags_1_1.value;
                element.setAttribute('data-google-interstitial', 'false');
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (aTags_1_1 && !aTags_1_1.done && (_a = aTags_1.return)) _a.call(aTags_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var classTags = document.getElementsByClassName('JS_interstitial');
        try {
            for (var classTags_1 = __values(classTags), classTags_1_1 = classTags_1.next(); !classTags_1_1.done; classTags_1_1 = classTags_1.next()) {
                var element = classTags_1_1.value;
                if (element.hasAttribute('data-google-interstitial')) {
                    element.removeAttribute('data-google-interstitial');
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (classTags_1_1 && !classTags_1_1.done && (_b = classTags_1.return)) _b.call(classTags_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    var avoidOverlappingRecaptchaBadge = function (dataset) {
        var recaptchaBadge = document.getElementsByClassName('grecaptcha-badge')[0];
        if (recaptchaBadge) {
            // バッジの位置をアンカー広告分上にずらす
            var bottomOffsetMargin = 54; // アンカー広告の閉じ, 10);
            var badgeBottom = recaptchaBadge.style.bottom;
            var badgeBottomSize = badgeBottom.split('px')[0];
            if (badgeBottomSize) {
                badgeBottomSize = parseInt(badgeBottomSize, 10) + bottomOffset;
                recaptchaBadge.style.bottom = badgeBottomSize + bottomOffsetMargin + 'px';
            }
        }
        else {
            // バッジ要素が存在しない場合は、読み込み中の可能性があるため onload で再チ�場合は onload が発火しないため何も起きない。
            window.addEventListener('load', function (event) {
                avoidOverlappingRecaptchaBadge(dataset);
            });
        }
    };
    ns.provide({
        registerElement: registerElement
    });
});
/*jshint browser:true, strict:true*/
/*global Namespace:false, _:false*/
Namespace('jp.mixi.adnetwork.google.model.dfp')
    .use('jp.mixi.adnetwork.script.loader getScriptLoader')
    .define(function (ns) {
    'use strict';
    var DFP_SCRIPT = '//securepubads.g.doubleclick.net/tag/js/gpt.js';
    var isLoaded = false;
    var isApsLoaded = false;
    var isFluxLoaded = false;
    var setIsLoaded = function (flag) {
        isLoaded = flag;
    };
    /**
     * DoubleClick for Publisers(DFP)の外部スクリプトの読み込みを行う。
     * @param {element} element scriptタグを挿入する要素。
     */
    var loadDfpScript = function (element) {
        if (isLoaded)
            return;
        if (!_.isElement(element)) {
            throw new Error('element is required');
        }
        var scriptLoader = ns.getScriptLoader();
        scriptLoader.load(DFP_SCRIPT, element);
        isLoaded = true;
    };
    var loadFluxScript = function () {
        if (isFluxLoadedument.getElementsByTagName('head')[0].appendChild(hbScriptTag);
        window.pbFlux = window.pbFlux || { que: [] };
        window.pbjsFlux = window.pbjsFlux || { que: [] };
        isFluxLoaded = true;
    };
    var loadApsScript = function () {
        if (isApsLoaded)
            return;
        // FIXME: ルール追加前からの問題
        // eslint-disable-next-line max-params, no-unused-expressions
        !function (a9, a, p, s, t, A, g) { if (a[a9])
            return; function q(c, r) { a[a9]._Q.push([c, r]); } a[a9] = { init: function () { q("i", arguments); }, fetchBids: function () { q("f", arguments); }, setDisplayBids: function () { }, targetingKeys: function () { return []; }, _Q: [] }; A = p.createElement(s); A.async = !0; A.src = t; g = p.getElementsByTagName(s)[0]; g.parentNode.insertBefore(A, g); }("apstag", window, document, "script", "//c.amazon-adsystem.com/aax2/apstag.js");
        apstag.init({
            pubID: '138f2e02-8341-4255-b4f3-872c3ced0f91',
            adServer: 'googletag'
     * ほぼfluxからもらったコードで構成されています
     * MEDIA-1827
     * MEDIA-1969
     * あたりを確認してください
     **/
    var prepareFluxSlot = function (isApsEnabled) {
        loadFluxScript();
        // provided code
        if (window.fluxtag)
            return;
        window.fluxtag = {
                     },
            failSafeTimeout: 3000,
            isFn: function (object) {
                var _t = 'Function';
                var toString = Object.prototype.toString;
                return toString.call(object) === '[object ' + _t + ']';
            },
            launchAdServer: function () {
                if (!fluxtag.readyBids.prebid || !fluxtag.readyBids.amazon) {
                    return;
                }
                fluxtag.requestAdServer();
            },
            requestAdServer: function () {
                if (!fluxtag.readyBids.google) {
                    fluxtag.readyBids.google = true;
                    googletag.cmd.push(function () {
                        if (!!(pbjs.setTargetingForGPTAsync) && fluxtag.isFn(pbjs.setTargetingForGPTAsync)) {
                            pbjs.que.push(function () {
                                pbjs.setTargetingForGPTAsync();
                            });
                        }
                        googletag.pubads().refresh();
                    });
                }
            },
            renderAds: function (lines, auctionEndCallback) {
                googletag.cmd.push(function () {
                    var refreshLines = [];
                    var params = (function () {
                        // GAMを呼び出したかを確認にするフラグ
                        var readyBids = {
                            amazon: false,
                            google: false,
                            prebid: false,
                        };
                        var apsSlots = [];
                        for (var i = 0; i < lines.length; i++) {
                            var divId = lines[i].divId;
                            var adUnitCode = lines[i].gamUnitCode;
                            var sizes = lines[i].sizes;
                            var isAps = lines[i].isAps || false;
                            refreshLines.push({
                                code: adUnitCode,
                                size: sizes,
                                id: divId
                            });
                            // TAM並走枠の場合
                            if (isAps) {
                                apsSlots.push({
                                    slotID: divId,
                                    slotName: lines[i].apsUnitCode,
                                    sizes: sizes
                                });
                            }
                        }
                        // APSの枠がない場合
                        if (apsSlots.length === 0) {
                            readyBids.amazon = true;
                        }
                        // Prebid、APSでオ�.prebid) {
                                return;
                            }
                            if (!readyBids.google) {
                                readyBids.google = true;
                                auctionEndCallback();
                            }
                        };
                        // APSオークション後に起動する関数
                        var apsCallback = function () {
                            readyBids.amazon = true;
                            adServerSend();
                        };
                        // Prebidオークション後に起動する関数
                        var prebidCallback = function () {
                            readyBids.prebid = true;
                            adServerSend();
                        };
                        // もしtimeout以内にPrebidが動作できなかった場合、最終的にGAMをコール
                        setTimeout(function () {
                            readyBids.amazon = true;
                            readyBids.prebid = true;
                            adServerSend();
                        }, window.fluxtag.failSafeTimeout);
                        return {
                            aps: {
                                slots: apsSlots,
                      bid: {
                                callback: prebidCallback,
                            }
                        };
                    })();
                    // Prebid呼び出しN
                    if (!!(window.pbFlux) && window.pbFlux.refresh && fluxtag.isFn(window.pbFlux.refresh)) {
                        pbjsFlux.que.push(function () {
                            pbFlux.refresh({
                                lines: refreshLines,
                                callback: params.prebid.callback,
                                timeout: 2000
                            });
                        });
                    }
                    else {
                        params.prebid.callback();
                    }
                    if (params.aps.slots.length > 0 && !!(window.apstag) && fluxtag.isFn(window.apstag.fetchBids)) {
                        // APS呼び出し
                        window.apstag.fetchBids({
                            slots: params.aps.slots,
                            timeout: 1500
                        }, function (bids) {
                            params.aps.callback();
                        });
                    }
                    else {
                        params.aps.callback();
                    }
                });
            },
            //fluxから提供されたコードにanchorTypeを追加
            anchorRenderAd: function (anchorUnitPath, anchorType) {
                var anchorDivId = anchorUnitPath;
                googletag.cmd.push(function () {
                    var params = (function () {
                        // GAMを呼び出したかを確認にするフラグ
                        var readyBids = {
                            google: false,
                            prebid: false
                        Send = function () {
                            if (!readyBids.prebid) {
                                return;
                            }
                            if (!readyBids.google) {
                                readyBids.google = true;
                                var anchorSlot = googletag
                                    .defineOutOfPageSlot(anchorUnitPath, anchorType);
                                // Uncaught TypeError: Cannot read properties of null (reading 'addService') 対策
                        anchorSlot.addService(googletag.pubads());
                                if (!!pbjsFlux.setTargetingForGPTAsync &&
                                    fluxtag.isFn(pbjsFlux.setTargetingForGPTAsync)) {
                                    pbjsFlux.que.push(function () {
                                        var targeting = pbjsFlux.getAdserverTargetingForAdUnitCode(anchorDivId);
                                        Object.keys(targeting).forEach(function (key) {
                                            anchorSlot.setTargeting(key, targeting[key]);
                                        });
                                    });
                                }
                                googletag.display(anchorSlot);
                            }
                        };
                        // Prebidオークション後に起動する関数
                        var prebidCallback = function () {
                            readyBids.prebid = true;
                            adServerSend();
                        };
                        // もしtimeout以内にPrebidが動作できなかった場合、最終的にGAMをコール
                        setTimeout(function () {
                            readyBids.prebid = true;
                            adServerSend();
                        }, window.fluxtag.failSafeTimeout);
                        return {
                            prebid: {
                                callback: prebidCallback,
                            }
                        };
                    })();
                    // Prebid呼び出しN
                    if (!!window.pbFlux &&
                        window.pbFlux.refresh &&
                        fluxtag.isFn(window.pbFlux.refresh)) {
                        pbjsFlux.que.push(function () {
                            pbFlux.refresh({
                                lines: [{
                                        code: anchorUnitPath,
                                        id: anchorDivId
                                    }],
                                callback: params.prebid.callback,
                                timeout: 2000
                            });
                        });
                    }
                    else {
                        params.prebid.callback();
                    }
                });
            }
        };
        if (isApsEnabled) {
            loadApsScript();
        }
    };
    ns.provide({
        loadDfpScript: loadDfpScript,
        prepareFluxSlot: prepareFluxSlot,
        // for test
        setIsLoaded: setIsLoaded
    });
});
Namespace('jp.mixi.adnetwork.google.model.dfp.slot.builder')
    .use('jp.co.mixi.lang.class defineClass')
    .use('jp.co.mixi.lang.string toQueryParams')
    . = '-';
    var adSlotIdCounter = {};
    var ANCHOR_TYPE_BOTTOM = "bottom";
    var ANCHOR_TYPE_TOP = "top";
    var ANCHOR_TYPE_LEFT = "left";
    var ANCHOR_TYPE_RIGHT = "right";
    var SlotBuilder = ns.defineClass({
        initialize: function (element, dataset, googletag) {
            this.element = element;
            this.dataset = dataset;
            this.googletag = (typeof googletag === 'undefined') ? window.googletag : googletag;
            this.isResponsible = !!parseInt(this.dataset.isResponsible, 10);
            this.isMultiSizeResponsible = !!parseInt(this.dataset.isMultiSizeResponsible, 10);
            this.useSequentialSlotId = !!parseInt(this.dataset.useSequentialSlotId, 10);
            this.isFluid = !!parseInt(this.dataset.isFluid, 10);
            this.anchorType = (typeof dataset.anchorType === 'undefined') ? '' : dataset.anchorType;
            this.isAnchor = this.anchorType ? true : false;
            this.isFluxHeaderBiddingEnabled = dataset.isFluxHeaderBiddingEnabled ? true : false;
        },
        collapseEmptyDiv: ataset.collapseEmptyDiv === 'undefined') ?
                true : !!parseInt(this.dataset.collapseEmptyDiv, 10);
        },
        getClientId: function () {
            return '/' + this.dataset.adClient + '/' + this.dataset.adChannel;
        },
        getAdSlot: function () {
            if (typeof this._adSlot !== 'undefined') {
                return this._adSlot;
            }
            //anchor広告はbuild().getSlotElementId()で取得する必要があります。
            if (this.isAnchor) {
                return '';
            }
            if (this.useSequentialSlotId) {
                if (typeof adSlotIdCounter[this.dataset.adSlot] === 'undefined') {
                    adSlotIdCounter[this.dataset.adSlot] = 0;
                }
                adSlotIdCounter[this.dataset.adSlot]++;
                this._adSlot = this.dataset.adSlot + AD_SLOT_ID_SEPARATOR + adSlotIdCounter[this.dataset.adSlot];
                this.element.id = this._adSlot; // override div-id
            }
            else {
                this._adSlot = this.dataset.adSlot;
            }
            return this._adSlot;
        },
        getMultiSizeArray: function (sizes) {
            var sizeArray = sizes.split(',');
            return _.map(sizeArray, function (value, index, array) {
                var wh = value.split('x').map(function (item) { return parseInt(item, 10); });
                if (wh[0] == 0) {
                    return 'fluid';
                }
                return wh;
            });
        },
        getSize: function () {
            if (this.dataset.imageSize) {
                return this.getMultiSizeArray(this.dataset.imageSize);
            }
            else {
                // すべてのtmplにimage_sizeをいれたので基本的には通りません
                return [0, 0];
            }
        },
        defaultAdSlot: function () {
            var clientId = this.getClientId();
            var size = this.getSize();
            return this.googletag.defineSlot(clientId, size, this.getAdSlot());
        },
        responsibleAdSlot: function () {
            var clientId = this.getClientId();
                var parsedAdMinHeight = parseInt(this.dataset.responsibleMinHeight, 10);
            var parsedAdMaxWidth = parseInt(this.dataset.responsibleMaxWidth, 10);
            var parsedAdMaxHeight = parseInt(this.dataset.responsibleMaxHeight, 10);
            var parsedAdThresholdWidth = parseInt(this.dataset.adThresholdWidth, 10);
            var parsedAdThresholdHeight = parseInt(this.dataset.adThresholdHeight, 10);
            var size = [
                [parsedAdMinWidth, parsedAdMinHeight],
                [parsedAdMaxWidth, parsedAdMaxHeight]
            ];
            var adSlot = this.googletag.defineSlot(clientId, size, this.getAdSlot());
            var mapping = this.googletag.sizeMapping()
                .addSize([parsedAdThresholdWidth, parsedAdThresholdHeight], [parsedAdMaxWidth, parsedAdMaxHeight])
                .addSize([0, 0], [parsedAdMinWidth, parsedAdMinHeight])
                .build();
            adSlot.defineSizeMapping(mapping);
            return adSlot;
        },
        multiSizeResponsibleAdSlot: function (dataset) {
            var clientId = this.getClientId();
            var sizes = this.getSize();
            var adSlot = this.googletag.defineSlot(clientId, sizes, this.getAdSlot());
            var adMinWidth = parseInt(this.dataset.responsibleMinWidth, 10);
            var minSizes = sizes.filter(function (size) {
                return adMinWidth === size[0];
            });
            var mapping = this.googletag.sizeMapping()
                .addSize([AD_THRESHOLD_WIDTH, 0], sizes)
                .addSize([0, 0], minSizes)
                .build();
            return adSlot.defineSizeMapping(mapping);
        },
        fluidAdSlot: function (dataset) {
            var clientId = this.getClientId();
            var size = 'fluid';
            return this.googletag.defineSlot(clientId, size, this.getAdSlot());
        },
        // google anchor ad
        // see https://developers.google.com/publisher-tag/samples/display-anchor-ad
        anchorAdSlot: function (dataset) {
            var googleAnchorType = this.getGoogleTagAnchorType();
            if (googleAnchorType) {
                return this.googletag.defineOutOfPageSlot(this.getClientId(), googleAnchorType);
            }
            return;
        },
        getGoogleTagAnchorType: function () {
            if (this.anchorType == ANCHOR_TYPE_BOTTOM) {
                return this.googletag.enums.OutOfPageFormat.BOTTOM_ANCHOR;
            }
            else if (this.anchorType == ANCHOR_TYPE_TOP) {
                return this.googletag.enums.OutOfPageFormat.TOP_ANCHOR;
            }
            else if (this.anchorType == ANCHOR_TYPE_LEFT) {
                return this.googletag.enums.OutOfPageFormat.LEFT_SIDE_RAIL;
            }
            else if (this.anchorType == ANCHOR_TYPE_RIGHT) {
                return this.googletag.enums.OutOfPageFormat.RIGHT_SIDE_RAIL;
            }
            return;
        },
        build: function () {
            var adSlot;
            if (this.isAnchor) {
              ��リプトのコードで定義するためreturnする dfp.js anchorRenderAdを参照
                if (this.isFluxHeaderBiddingEnabled) {
                    return;
                }
                adSlot = this.anchorAdSlot();
            }
            else if (this.isResponsible) {
                adSlot = this.responsibleAdSlot();
            }
            else if (this.isMultiSizeResponsible) {
                adSlot = this.multiSizeResponsibleAdSlot();
            }
   is.fluidAdSlot();
            }
            else {
                adSlot = this.defaultAdSlot();
            }
            adSlot.setCollapseEmptyDiv(this.collapseEmptyDiv());
            if (this.dataset.pageUrl) {
                adSlot.set('page_url', this.dataset.pageUrl);
            }
            if (this.dataset.adtest) {
                adSlot.set('adtest', this.dataset.adtest);
            }
            if (this.dataset.keyValue) {
                var pair = ns.toQueryParams(this.dataset.keyValue);
                // FIXME: ルール追加前からの問題
                // eslint-disable-next-line guard-for-in
                for (var key in pair) {
                    adSlot.setTargeting(key, pair[key]);
                }
            }
            adSlot.addService(this.googletag.pubads());
            this.enableServices();
            return adSlot;
        },
        enableServices: _.once(function () {
            this.googletag.enableServices();
        })
    });
    ns.provide({
        SlotBuilder: SlotBuilder
    });
});
/*jshint browser:true, strict:true*/
/*global Namespace:false, _:false*/
Namespace('jp.mixi.adnetwork.script.loader')
    .use('jp.co.mixi.net.uri isHttpUrl')
    .use('jp.co.mixi.lang.class defineClass')
    .define(function (ns) {
    'use strict';
    var loader;
    /**
     * 外部スクリプトの読み込みを扱うクラス。
     * scriptタグの動的生成による外部スクリプトの読み込み機能を提供します。
     */
    var ScriptLoader = ns.defineClass({
        initialize: function () {
            this.loadedScripts = [];
        },
        /**
         * 外部スクリプトの読み込みを実行する。
         * @param {string} src 読み込む外部スクリプトのURL。
         * @param {element} element scriptタグを挿入する要素。
         * @param {function} onComplete 動的生成したscriptタグの読み込みが終わった時(成功失敗問わず)に呼び出される
         */
        load: function (src, element, onComplete) {
            var scriptSrc = appendProtocolIfNeeded(src);
            if (!ns.isHttpUrl(scriptSrc))
                throw new Error('src is not url.');
            if (!_.isElement(element))
                throw new Error('element is required.');
            // すでに読み込み済みのスクリプトの場合は処理を抜ける
            if (this.loadedScripts.includes(scriptSrc)) {
                return;
            }
            // FIXME: ルール追加前からの問題
            // eslint-disable-next-line github/no-dynamic-script-tag
            var script = document.createElement('script');
            script.async = true;
            // FIXME: ルール追加前からの問題
            // eslint-disable-next-line github/no-dynamic-script-tag
            script.type = 'text/javascript';
            script.src = scriptSrc;
            if (_.isFunction(onComplete)) {
                // FIXME: ルール追加前からの問題
                // eslint-disable-next-line no-multi-assign
                script.onload = script.onerror = function () {
                    onComplete();
                    // FIXME: ルール追加前からの問題
                    // eslint-disable-next-line no-multi-assign
                    script.onload = script.onerror = script.onreadystatechange = null;
                };
                script.onreadystatechange = function () {
                    if (this.readyState === 'loaded' || this.readyState === 'complete') {
                        onComplete();
                        // FIXME: ルール追加前からの問題
                        // eslint-disable-next-line no-multi-assign
                        script.onload = script.onerror = script.onreadystatechange = null;
                    }
                };
            }
            element.appendChild(script);
            this.loadedScripts.push(scriptSrc);
        }
    });
    var appendProtocolIfNeeded = function (str) {
        if (/^(https?):/i.test(str)) {
            return str;
        }
        else {
            var protocol = (document.location.protocol === 'https:') ? 'https:' : 'http:';
            return protocol + str;
        }
    };
    ns.provide({
        getScriptLoader: function () {
            if (loader) {
                return loader;
            }
            loader = new ScriptLoader();
            return loader;
        }
    });
});
