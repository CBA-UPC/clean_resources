class GlobalNavigation {
  
  _toConsumableArray  _classCallCheck
  initGlobalNav(t, e) {
    t = window;
    e = document;
    var self = this;
    var _createClass = (();
    var n = {
        とらのあな: "https://www.toranoana.jp/",
        インフォ: "https://news.toranoana.jp/",
        店舗: "https://www.toranoana.jp/shop/",
        Fantia: "https://fantia.jp/",
        とら婚: "https://toracon.jp/",
        サークルポータル: "https://creator.toranoana.jp/circle/index.html",
        とらコイン: "https://toracoin.toranoana.jp/",
        クリエイティア: "https://official.creatia.cc/",
        WEBオンリー: "https://news.toranoana.jp/web-only-events",
        よくあるご質問: "https://customer.toranoana.jp/",
        エンジニア採用: "https://on (t, e) {
        return Object.keys(t).forEach(function (n) {
          return e(n, t[n]);
        });
      },
      a = (function () {
        function a(t) {
          self._classCallCheck(this, a), (this.widthList = []), this.initializeDOM(t), this.addEventListeners();
        }
        return (
          _createClass(a, [
            {
              key: "initializeDOM",
              value: function (t) {
                var a = this;
                this.eWrapper = t;
                var r = t.getAttribute("data-active");
                (this.eBar = e.createElement("div")),
                  this.eBar.classList.add("globalnav-bar"),
                  (this.eContainer = e.createElement("ul")),
                  this.eContainer.classList.add("globalnav-primary"),
                  (this.eButton = e.createElement("span")),
                  this.eButton.classList.add("globalnav-button"),
                  (this.eDropdownWrapper = e.createElement("div")),
                  this.eDropdownWrapper.classList.add("globalnav-dropdown-wrapper"),
                  (this.eDropdown = e.createElement("ul")),
                  this.eDropdown.classList.add("globalnav-dropdown"),
                  this.eBar.appendChild(this.eContainer),
                  this.eBar.appendChild(this.eButton),
                  this.eDropdownWrapper.appendChild(this.eDropdown),
                  this.eWrapper.appendChild(this.eBar),
                  this.eWrapper.appendChild(this.eDropdownWrapper),
                  i(n, function (t, n) {
                    var i = e.createElement("a");
                    i.setAttribute("target", "_blank");
                    i.setAttribute("href", n), (i.innerHTML = t);
                    var o = e.createElement("li");
                    o.appendChild(i), r == t && o.classList.add("active"), a.eContainer.appendChild(o);
                  }),
                  i({ "if-close": "&#9660;", "if-open": "&#9650;" }, function (t, n) {
                    var i = e.createElement("span");
                    i.classList.add(t), (i.innerHTML = n), a.eButton.appendChild(i);
                  });
              },
            },
            {
              key: "addEventListeners",
              value: function () {
         function (t) {
                    t.stopPropagation(), n.eWrapper.classList.toggle("open");
                  },
                  !1
                ),
                  this.eDropdown.addEventListener(
                    "click",
                    function (t) {
                      t.stopPropagation();
                    },
                                   function (t) {
                      n.eWrapper.classList.remove("open");
                    },
                    !1
                  ),
                  t.addEventListener(
                    "resize",
                    function (t) {
                      n.checkCollapse();
                    },
                        "load",
                    function (t) {
                      n.checkCollapse();
                    },
                    !1
                  );
              },
            },
            {
              key: "checkCollapse",
              value: function () {
                var t = this;
                return this.isOverflow
                  ? (this.collapse(),
                    setTimeout(function () {
                      return t.checkCollapse();
                    }))
                     setTimeout(function () {
                      return t.checkCollapse();
                    }))
                  : void (this.eDropdownFirstChild ? this.eWrapper.classList.remove("no-collapse") : this.eWrapper.classList.add("no-collapse"));
              },
            },
            {
              key: "collapse",
              value: function () {
                var t = this.eContainerLastChild,
                  e = t.getBoundingClientRect().width;
                this.widthList.unshift(e), this.removeFromContainer(t), this.putIntoDropdown(t);
              },
            },
            {
              key: "uncollapse",
              value: function () {
                var t = this.eDropdownFirstChild;
                this.removeFromDropdown(t), this.putIntoContainer(t), this.widthList.shift();
              },
            },
            {
              key: "removeFromContainer",
              value: function (t) {
                this.eContainer.removeChild(t);
              },
            },
            {
              key: "removeFromDropdown",
              value: function (t) {
                this.eDropdown.removeChtoContainer",
              value: function (t) {
                this.eContainer.appendChild(t);
              },
            },
            {
              key: "putIntoDropdown",
              value: function (t) {
                this.eDropdown.insertBefore(t, this.eDropdo         return this.eContainerLastChild && this.containerWidth < this.containerChildrenWidthSum;
              },
            },
            {
              key: "hasInsertableMargin",
              get: function () {
                return this.eDropdownFirstChild && this.containerWidth > this.containerChildrenWidthSum + this.wi         get: function () {
                return this.eContainer.getBoundingClientRect().width;
              },
            },
            {
              key: "containerChildrenWidthSum",
         ildren)).reduce(function (t, e) {
                  return t + e.getBoundingClientRect().width;
                }, 0);
              },
            },
            {
              key: "eContainerChildren",
              get: function () {
                return this.eContainer.getElementsByTagName("li");
              },
            },
            {
              key: "eContainerLastChild",
              get: function () {
                return [].concat(self._toConsumableArray(this.eContainerChildren)).slice(-1             get: function () {
                return this.eDropdown.getElementsByTagName(wnFirstChild",
              get: function () {
                return this.eDropdownChildren[0];
              },
              })();

    [].concat(this._toConsumableArray(self.rootDOM)).forEach(function (t) {
      return new a(t);
    });
  }
}

/**
 * ヘッダー表示制御
 */
class Header {
  /**
   * グローバルに定義されているsettings
   * @param {object} settings
   * @param {string} settings.urlBrandCode
   * @param {string} settings.urlChannel
   * @param {string} settings.urlCategoryCode
   */
  constructor(settings) {
    this.DEFAULT_BRAND = "tora";
    this.DEFAULT_CHANNEL = "ec";
    this.globalNav = new GlobalNavigation("js-globalnav");
    // 現在のページ情報
    this.current = {
      path: location.pathname,
      brand: settings.urlBrandCode || this.DEFAULT_BRAND,
      channel: settings.urlChannel || this.DEFAULT_CHANNEL,
      category: settings.urlCategoryCode,
      search: location.search,
      loginCustomer: settings.loginCustomer,
    };
    this.searchCategory = "";
    // DOM操作対象のクラス名
    this.classes = {
      hotWordAreas: ".js-header-hotword",
      submitBtns: "[class^='js-header-search-submit']",
      inputAreas: "[class^='js-header-search-input']",
      selectAreas: ".js-header-search-select",
      inputError: "is-error",
      switchArea: {
        all: ".js-header-switch",
        adult: {
          allAgeBtns: ".js-header-switch-all-age",
          adultBtns: ".js-header-switch-adult",
        },
        gender: {
          toraBtn: ".js-header-switch-gender-tora",
          joshiBtn: ".js-header-switch-gender-joshi",
        },
      },
    };
    // 取得したDOMを格納
    this.doms = {
      hotWordAreas: null,
      submitBtns: null,
      inputAreas: null,
      selectAreas: null,
      switchArea: {
        all: null,
        adult: {
          allAgeBtns: null,
          adultBtns: null,
        },
        gender: {
          toraBtns: null,
          joshiBtns: null,
        },
      },
    };
    // 表示する急上昇キーワード個数
    this.HOT_WORD_COUNT = 2;
    // リンク先
    this.ALL_AGE_DOMAIN = settings.cartHost || "ecs.toranoana.jp";
    this.ADULT_DOMAIN = this.ALL_AGE_DOMAIN.replace("ecs.","ec.").replace("-shop.","-jp.");
    this.LINK = {
      TORA: "https://" + this.ALL_AGE_DOMAIN + "/tora/ec/",
      TORA_R: "https://" + this.ADULT_DOMAIN + "/tora_r/ec/",
      JOSHI: "https://" + this.ALL_AGE_DOMAIN + "/joshi/ec/",
      JOSHI_R: "https://" + this.ADULT_DOMAIN + "/joshi_r/ec/",
      TORA_D: "https://" + this.ALL_AGE_DOMAIN + "/tora_d/digi/",
      TORA_RD: "https://" + this.ADULT_DOMAIN + "/tora_rd/digi/",
      JOSHI_D: "https://" + this.ALL_AGE_DOMAIN + "/joshi_d/digi/",
      JOSHI_RD:� ["ec/app/order/confirm/", "ec/app/order/benefit/", "ec/app/order/shipping/", "ec/app/order/payment/"];
  }
  get isDigi() {
    return this.current.brand.includes("_d") || this.s.current.bras.current.brand === "tora" || this.current.brand === "tora_r" || this.currbrand === "joshi_r";
  }
  get isAdult() {
    return this.current.brand.includes("_r");
  }
  get isJoshi() {
    return this.current.brand.includes("joshi");
  }
  get currentPathArray() {
    return this.current.path.split("/").filter((e) => {
      return e !== "";
    });
  }
  get currentSubCategory() {
    return this.currentPathArray.length === 5 ? this.currentPathArray[4] : null;
  }
  get isIgnoreScrollPage() {
    let ignore = false;
    this.IGNORE_SCROLL_URLS.forEach((ignorePath) => {
      if (this.current.path.includes(ignorePath)) {
        ignore = true;
        return;
      }
    });

    return ignore;
  }
  get hasBrandInUrl() {
    const BRANDS = ["/tora/", "/tora_r/", "/joshi/", "/joshi_r/", "/tora_d/", "/tora_rd/", "/joshi_d/", "/joshi_rd/"];
    for(let brand of BRANDS) {
      if(this.current.path.includes(brand)) return true;
    }
    return false;
  }
  /**
   * DOMを取得して格納する
   * @returns {void}
   */
  setDoms() {
    this.doms.hotWordAreas = $(this.classes.hotWordAreas);
    this.doms.submitBtns = document.querySelectorAll(this.classes.submitBtns);
    this.doms.inputAreas = document.querySelectorAll(this.classes.inputAreas);
    this.doms.selectAreas = document.querySelectorAll(this.classes.selectAreas);
    this.doms.switchArea.all = document.querySelectorAll(".js-header-switch");
    this.doms.switchArea.adult.allAgeBtns = document.querySelectorAll(".js-header-switch-all-age");
    this.doms.switchArea.adult.adultBtns = document.querySelectorAll(".js-header-switch-adult");
    this.doms.switchArea.gender.toraBtns = document.querySelectorAll(".js-header-switch-gender-tora");
    this.doms.switchArea.gender.joshiBtns = document.querySelectorAll(".js-header-switch-gender-joshi");
  }
  /**
   * キーワード検索のASCII文字変換
   * @param {string} str
   * @returns {string}
   */
  encodeKeyword(str) {
    var encodedStr = str;
    var src = ["#", "?", "/", "&", ":", "\\", "@"];
    var rpl = ["%23", "%3F", "%2F", "%26", "%3A", "%5C", "%40"];
    for (var i = 0; i < src.length; i++) {
      encodedStr = encodedStr.replace(src[i], rpl[i], "g");
    }
    return encodedStr;
  }

  /**
   * キーワード検索
   * @param {string} keyword
   * @returns
   */
  mhSearchSubmit(keyword) {
    /**
     * 遷移先のURLを決定
     * @param {string} keyword
     * @returns
     */
    const makeUrl = (keyword) => {
      keyword = encodeURI(keyword);
      // toraブランド時には、settings.cartHostのドメインにてベースURLを生成
      // それ以外は、settings.urlBrandCode + settings.urlChannel にてベースURLを生成
      const baseUrlDomain = settings.cartHost || "ecs.toranoana.jp";
      const baseUrl = this.current.brand === this.DEFAUis.current.brand}/${this.current.channel}`;
      const path = "/app/catalog/list";
      const query = `?${this.searchCategory}`; // 検索カテゴリーのセレクト欄からvalueを取得
      const param = `&searchWord=${this.encodeKeyword(keyword)}`;
      return baseUrl + path + query + param;
    };

    // キーワード入力欄が空欄のとき
    if (isBlank(keyword)) {
      this.doms.inputAreas.forEach((elem) => elem.classList.add(this.classes.inputError));
      return;
    }

    location.href = makeUrl(keyword);
    return false;

    // キーワードが空のとき、またはスペースのみのときはtrueを返す
    function isBlank(keyword) {
      const onlyBlank = !keyword.match(/\S/g);
      return !keyword || onlyBlank;
    }
  }

  /**
   * 急上urns {void}
   */
  insertHotword(selfBrand) {
    var jsonURL = "https://cdn-contents.toranoana.jp/ec/json/topKeyword/topKeyword-" + selfBrand + ".js";
    var targetSelectors = this.doms.hotWordAreas;
    if (!targetSelectors.length) return; // 挿入先のDOMが存在しない場合は処理を終了

    var getjson = $.ajax({
      url: jsonURL,
      type: "GET",
      async: true,
      dataType: "jsonp",
      cache: false,
      jsonpCallback: "topKeywordCallback",
      timeout: 10000,
    });
    getjson.fail(() => {
      console.log("Cannot load keyword list.");
    });
    getjson.done((data) => {
      // ワードをparse
      var hotWord = data.hotWord;
      var popularWord = data.popularWord;
      hotWord = arrayShuffle(hotWord);
      popularWord = arrayShuffle(popularWord);

      let cookies = document.cookie.split(";");
      let language;
      for (let cookie of cookies) {
          var cookiesArray = cookie.split('=');
          if (cookiesArray[0].trim() == 'language') {
              language = cookiesArray[1];
          }
      }

      var hotWordHtml = '<span class="note">急上昇ワード:</span>';
      var popularWordHtml = '<span class="note">人気ワード:</span>';
      if (language === "1") {
        hotWordHtml = '<span class="note">急速上升關鍵字:</span>';
        popularWordHtml = '<span class="note">熱門關鍵字:</span>';
      } else if (language === "2") {
        hotWordHtml = '<span class="note">Trending Words:</span>';
        popularWordHtml = '<span class="note">Popular Words:</span>';
      }

      for (var i = 0; i < this.HOT_WORD_COUNT; i++) {
        hotWordHtml += '<a data-stt-ignore class="note" href="/' + this.current.brand + "/" + this.current.channel + "/app/catalog/list?searchDisplay=0&searchBackorderFlg=1&stock_status=%E2%97%8B,%E2%96%B3&catalogListSortType=2&searchWord=" + encodeURIComponent(hotWord[i]) + '" rel="nofollow">' + substrHotWord(hotWord[i]) + "</a>";
        popularWordHtml += '<a class="note" href="/' + this.current.brand + "/" + this.current.channel + "/app/catalog/list?searchDisplay=0&searchBackorderFlg=1&stock_status=%E2%97%8B,%E2%96%B3&catalogListSortType=2&searchWord=" + encodeURIComponent(popularWord[i]) + '" rel="nofollow">' + substrHotWord(popularWord[i]) + "</a>";
      }

      targetSelectors.each((i, elem) => $(elem).html(hotWordHtml + popularWordHtml));
    });

    /**
     * 文字列が長い場合に...で差し替え
     * @param {string} hotWord
   rd) {
      if (hotWord != null && hotWord.length > 10) {
        hotWord = hotWord.substr(0, 9) + "…";
      }
      return hotWord;
    }

    /**
     * 配列をランダムに並び替え
     * @param {Array} array
     * @returns {Array}
     */
    function arrayShuffle(array) {
      for (var i = array.length - 1; i > 0; i--) {
        var r = Math.floor(Math.random() * (i + 1));
        var tmp = array[i];
        array[i] = array[r];
        array[r] = tmp;
      }
      return array;
    }
  }

  checkQuery(selector, queryStr, regexp) {
    var queryArray = queryStr.split("&");
    var query = $.grep(queryArray, function (elem, idx) {
      return elem.match(regexp);
    });
    if (query.length === 1) {
      var param = query[0].split("=");
      if (param.length >= 2) {
        if (selector.find('option[data-code="' + param[1] + '"]').length) {
          const value = selector.find('*[data-code="' + param[1] + '"]').val();
          this.setCategorySelectAreas(value);
        }
      }
    }
  }

  /**
   * ブランド遷移ボタン(成年/全年齢)をアクティブ化
   * @returns {void}
   */
  activateAdultSwitch() {
    const targets = this.isAdult ? this.doms.switchArea.adult.adultBtns : this.doms.switchArea.adult.allAgeBtns;
    targets.forEach((elem) => elem.classList.add("is-active"));
  }

  /**
   * ブランド遷移ボタンを(男性/女性)アクティブ化
   * @returns {void}
   */
  activateGenderSwitch() {
    const targets = this.isJoshi ? this.doms.switchArea.gender.joshiBtns : this.doms.switchArea.gender.toraBtns;
    targets.forEach((elem) => elem.classList.add("is-active"));
  }

  /**
   * リンク設定：
   * - "全年齢向け"ボタン
   * - "成年向け"ボタン
   * @returns {void}
   */
  setLinkAdultSwitch() {
    let allAgeLink = "";
    let adultLink = "";
    // digiの時
    if (this.isDigi) {
      if (this.isJoshi) {
        // joshi_d, joshi_rdの時
        allAgeLink = this.LINK.JOSHI_D;
        adultLink = this.LINK.JOSHI_RD;
      } else {
        // tora_d, tora_rdの時
        allAgeLink = this.LINK.TORA_D;
        adultLink = this.LINK.TORA_RD;
      }

      this.doms.switchArea.adult.allAgeBtns.forEach((elem) => elem.setAttribute("href", allAgeLink));
      this.doms.switchArea.adult.adultBtns.forEach((elem) => elem.setAttribute("href", adultLink));
      return; // digiの時は早期return
    }

    // digiの時以外
    if (this.isJoshi) {
      // joshi, joshi_rの時
      allAgeLink = this.LINK.JOSHI;
      adultLink = this.LINK.JOSHI_R;
    } else {
      // tora, tora_rの時
      allAgeLink = this.LINK.TORA;
      adultLink = this.LINK.TORA_R;
    }

    this.doms.switchArea.adult.allAgeBtns.forEach((elem) => elem.setAttribute("href", allAgeLink));
    this.doms.switchArea.adult.adultBtns.forEach((elem) => elem.setAttribute("href", adultLink));
  }

  /**
   * リンク設定：
   * - "男性向け"ボタン
   * - "女性向け"ボタン
   * @returns {void}
   */
  setLinkGenderSwitch() {
    let toraLink = "";
    let joshiLink = "";
    // digiの時
    if (this.isDigi) {
      // tora_rd, joshi_rdの時
      if (this.isAdult) {
        toraLink = this.LINK.TORA_RD;
        joshiLink = this.LINK.JOSHI_RD;
      } else {
        // tora_d, joshi_dの時
        toraLink = this.LINK.TORA_D;
        joshiLink = this.LINK.JOSHI_D;
      }

      this.doms.switchArea.gender.toraBtns.forEach((elem) => elem.setAttribute("href", toraLink));
      this.doms.switchArea.gender.joshiBtns.forEach((elem) => elem.setAttribute("href", joshiLink));
      return;
    }

    if (this.isAdult) {
      // tora_r, joshi_rの時
      toraLink = this.LINK.TORA_R;
      joshiLink = this.LINK.JOSHI_R;
    } else {
      // tora, joshiの時
      toraLink = this.LINK.TORA;
      joshiLink = this.LINK.JOSHI;
    }

    this.doms.switchArea.gender.toraBtns.forEach((elem) => elem.setAttribute("href", toraLink));
    this.doms.switchArea.gender.joshiBtns.forEach((elem  }

  /**
   * キーワード検索ボタンにクリックイベント付与
   */
  addButtonEvent() {
    conslickedType = event.target.dataset.clickedType; // 検索キーワードの参照先となるボタンを特定
      const inputArea = document.querySelector(`.js-header-search-input-${clickedType}`);putArea.value);
    };

    this.doms.submitBtns.forEach((elem) => elem.addEventListener("click", clickHandler));
  }

  /**
   * キーワードinput領域にフォーカスイベントを付与
   * - エラーのクラスがついている場合は外す処理
   */
  addInputEvent() {
    const focusHandler = (event) => {
      event.target.classList.remove(this.classes.inputError);
    };

    this.doms.inputAreas.forEach((elem) => elem.addEventListener("focus", focusHandler));
  }

  // valueをカテゴリーセレクト欄にセット
  setCategorySelectAreas(value) {
    this.doms.selectAreas.forEach((elem) => {
      elem.value = value;
    });
    this.searchCategory = value;
  }

  /**
   * 検索カテゴリを変更時
   */
  addSelectEvent() {
    const changeHandler = (event) => {
      this.setCategorySelectAreas(event.target.value);
    };
    this.doms.selectAreas.forEach((elem) => elem.addEventListener("change", changeHandler));
  }

  /**
   * インプット領域でEnterを押下した際のイベントを付与
   */
  addKeyPressEvent() {
    this.doms.inputAreas.forEach((elem) => elem.addEventListener("keypress", keyDownHandler));

    /**
     * @param {KeyboardEvent} event
     */
    function keyDownHandler(event) {
      if (event.key === "Enter") {
        mhSearchSubmit($(this).val());
      }
    }
  }

  /**
   * SPでスクロールした際のヘッダー制御イベント
   */
  addScrollEvent() {
    let positionCurrent = 0;
    let headerMoveActive = false;
    const $header = $(".header-sp .js-header-top");
    const HEADER_HEIGHT = $header.height();
    const POSITION_HEADER_TOP = $header.offset().top;
    const THRESHOLD_IGNORE_SCROLLING = 10;
    // マイページのポップアップ表示を隠す
    const hideMyPagePopup = () => {
      $(".js-header-mypage-menu").fadeOut();
      $(".js-header-mypage-btn").removeClass("is-active");
    };
    // ヘッダーのCSSを設定
    const setHeaderPosition = (position, translateY) => {
      hideMyPagePopup();
      $header.css("position", position);
      if (!translateY) {
        $header.css("transform", "");
        return;
      }
      $header.css("transform", `translateY(${String(translateY)}px)`);
    };
    // init
    setTimeout(function () {
      headerMoveActive = true;
      positionCurrent = $(window).scrollTop();
    }, 2000);

    // 動作と位置、両方の情報を元に制御する
    // 基本：動作... 下にスクロール => 隠す, 上にスクロール => 表示
    // 位置：特定の位置に画面があるとき（ヘッダーが初期位置にある時）... 固定表示
    const scrollHandler = () => {
      if (!headerMoveActive) return;
      // 最新の位定
      const isLockPosition = positionUpdate < (POSITION_HEADER_TOP + HEADER_HEIGHT);
      // スクロール動作判定を無視するか
      const ignoreScrolling = Math.abs(positionUpdate - positionCurrent) <= THRESHOLD_IGNORE_SCROLLING;
      // 下にスクロール中
      const isScrollingBottom = positionUpdate > positionCurrent;
      // 上にスクロール中
      const isScrollingTop = positionUpdate < positionCurrent;

      // 位置判定: ヘッダーを上部�ion) {
        setHeaderPosition("static", 0);
        return;
      }

      // 動作判定
      // - 下にスクロール
      if (isScrollingBottom) {
        // ヘッダーを隠す
        setHeaderPosition("static", `-${HEADER_HEIGHT + POSITION_HEADER_TOP}`);
        // 上にスクロール
      } else if (isScrollingTop) {
        // - スクロール処理を無視
        if (ignoreScrolling) {
          positionCurrent = $(window).scrollTop();
          return;
        }
        setHeaderPosition("fixed", -POSITION_HEADER_TOP);
      }

      positionCurrent = $(window).scrollTop();
    };

    $(window).on("load resize", () => {
      const THRESHOLD_SP_SIZE = 460;
      const windowSize = $(window).width();
      const isSP = windowSize <= THRESHOLD_SP_SIZE;
      if (isSP) {
        window.addEventListener("scroll", scrollHandler);
      } else {
        initHeaderScrollPosition();
        window.removeEventListener("scroll", scrollHandler);
      }

      function initHeaderScrollPosition() {
        setHeaderPosition("static", 0);
      }
    });
  }

  /**
   * カテゴリー表示のアクティブ化
   */
  activateCategoryBtn() {
    let targetDoms, currentCategory; // 対象のDOMと現在のカテゴリー
    const isAdultHobby = this.current.category === "hob" && this.currentSubCategory === "adl";

    if (this.current.category) {
      currentCategory = this.current.category;
      if (isAdultHobby) currentCategory = "hob-adl"; // 大人のおもちゃだけ例外

      targetDoms = document.querySelectorAll(`a[data-header-category="${currentCategory}"]`);
      targetDoms.forEach((elem) => elem.classList.add("is-active"));
    }
  }

  /**
   * 検索カテゴリー欄の初期化
   */
  initCategorySelector() {
    const isCategoryTop = this.currentPathArray.length === 3 && !!this.current.category;
    const isMdv = isCategoryTop && this.current.category === "mdv";
    const hasSubCategory = this.currentPathArray.length === 5 && !!this.currentSubCategory;

    // 電子書籍の時はセレクト欄がないため、検索パ�lg=1";
      �終了
    if (!isCategoryTop && !hasSubCategory) {
      this.setCategorySelectAreas("searchDisplay=0&searchBackorderFlg=1");
      // デフォルトでは在庫のある商品のみ検索
      this.searchCategory = "searchDisplay=0&searchBackorderFlg=1&stock_status=○%2C△";
      return;
    }

    // DOMのvalueを参照
    let referer;
    if (isCategoryTop) {
      if (isMdv) {
        // 「映像/音楽/ゲーム」の時はカテゴリ欄を「メディア」に設定する
        referer = document.querySelector(`.js-header-search-select option[data-code="21"]`);
      } else {
        // カテゴリ名を元にセレクト欄を設定する
        referer = document.querySelector(`.mh-category-${this.current.category}`);
      }
    }
    // 「大人のおもちゃ」の時はセレクト欄を「アダルトグッズ」に設定する
    if (hasSubCategory) referer = document.querySelector(`.mh-category-${this.current.category}-${this.currentSubCategory}`);

    // valueをセレクト欄にセット
    if (referer) this.setCategorySelectAreas(referer.value);
  }

  /**
   * マイページボタン, 欲しいものリスト追加ボタンの初期化
   * - コンテンツページ以外の時のみコールバックではないのでこちらで制御��場合はコールバックでbeanの情報を受け取るためpageHeaderMenu.jsで制御
   */
  initM�ジ以外でのメニュー初期化
    var isContentsPage = isContentsUrl(getPathInfo(location.pathname));
    var loggedIn = this.current.loginCustomer; // ログインしているか
    // ログイン状態をヘッダーに設定
    setHeaderStatus(loggedIn);
    // メインコンテンツ以外のページにて、ログイン状態の時
    if (!isContentsPage && loggedIn) {
      showLoginContents();
    }

    function showLoginContents() {
      $(".js-login_hide").hide();
      $(".js-login_show").css("display", "inline-flex");
      $(".js-header-mypage-menu").hide();

      // イベント追加 マイページポップアップ表示
      $(".js-header-mypage-btn").click(function () {
        $(".js-header-mypage-menu").fadeToggle("");
        $(this).toggleClass("is-active");
      });
    }

    function setHeaderStatus(bool) {
      $('#header').attr('data-login', bool);
    }
  }

  init() {
    this.setDoms();
    this.initMyPageButtons();
    this.globalNav.initGlobalNav();
    // ブランド遷移ボタンにリンク付与
    if (!this.isAqua) {
      // アクアプラスはブランド切替ボタンなし
      this.setLinkAdultSwitch();
      this.setLinkGenderSwitch();
    }
    // ブランド遷移ボタンをアクティブ表示
    if (this.hasBrandInUrl) {
      this.activateAdultSwitch();
      this.activateGenderSwitch();
    }
    // カテゴリーボタンをアクティブ化
    this.activateCategoryBtn();
    // 検索カテゴリー領域を初期化
    this.initCategorySelector();

    if (this.current.search.length >= 2) {
      var queryRoot = this.current.search.split("?")[1];
      if (~queryRoot.indexOf("searchChildrenCategoryCode=")) {
        this.checkQuery($(".js-header-search-select"), queryRoot, /^(?=.*searchChildrenCategoryCode=).*$/);
      } else if (~queryRoot.indexOf("searchCategoryCode=")) {
        this.checkQuery($(".js-header-search-select"), queryRoot, /^(?=.*searchCategoryCode=).*$/);
      }
    }

    // キーワード検索イベント付与
    this.addButtonEvent();
    this.addInputEvent();
    this.addSelectEvent();
    this.addKeyPressEvent();

    // 注文確認系画面以外でSPヘッダースクロールイベントを付与
    if (!this.isIgnoreScrollPage) this.addScrollEvent();

    // 急上昇キーワードを追加
    if (this.isMainContents) this.insertHotword(this.current.brand);
  }
}

const header = new Header(settings);
$(function () {
  header.init();
});

// 本ファイル以外で使用している変数
var currentBrand = header.current.brand;

// 本ファイル以外で使用している関数
var mhSearchSubmit = (keyword) => header.mhSearchSubmit(keyword);

/*-- Get cart infomation --*/
// 本ファイル以外で使用している関数
var mhCartInfo = function () {
  var callback = function (data) {
    var quantity = data.miniCartItemQuantity;
    if (quantity >= 1) {
      $(".mh-incart").each(function (idx, elem) {
        $(elem).html("<span>" + parseInt(quantity) + "</span>");
      });
    } else if (quantity == 0) {
      $(".mh-incart").each(function (idx, elem) {
        Array.prototype.forEach.call(elem.children, function (child) {
          child.remove();
        });
      });
    }
    if ("true" === data.cartInDb) {
      if ($("div.mh-incart-db").length === 0) {
        $("div.mh-cart").find("a").find("div.mh-incart").after('<div class="mh-incart-db"><span>!</span></div>');
        $("div.headmenu.headmenu--right").find("a.headmenu__btn.headmenu__btn--cart").find("div.mh-incart").after('<div class="mh-incart-db"><span>!</span></div>');
      }
    }
  };
  var uri = "/cart/mini_cart/init/";
  var parameters = createBaseParametersForAjaxApi("cart", "mini_cart", "init");
  parameters.needHtml = true;
  parameters.partsId = "miniCart";
  var functions = createAjaxFunctions(null, null, callback);
  sendAjaxToApi({
    parameters: parameters,
    functions: functions,
    uri: uri,
    dataType: "json",
    async: true,
  });
};
