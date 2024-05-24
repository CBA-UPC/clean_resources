function MiU() {}
MiU.prototype = {
	locationInfo:{},sLocation:'',rd:'rd=',beacon:'/oo/other/m.gif?',
	go: function() {
		this.setLocationInfo();
		if (!(document.referrer == null || document.referrer == '')) {
			this.setReferInfo();
		}
		for(var key in this.locationInfo) {
			this.sLocation += key + '=' + encodeURIComponent(this.locationInfo[key]) + '&';
		}
		var img = new Image();
		this.rd += Math.random();
		img.src = this.beacon + this.sLocation + this.rd;
	},
	setLocationInfo: function() {
		this.locationInfo['host'] = document.location.hostname;
		this.locationInfo['path'] = document.location.pathname;
		if (!(document.location.search.substr(1) == null || document.location.search.substr(1) == '')){this.locationInfo['query'] = document.location.search.substr(1);}
	},
	setReferInfo: function() {
		var protocol = document.referrer.substr(0, (document.referrer.indexOf('://') + 3));
		var refer = document.referrer.substr(protocol.length, document.referrer.length);
		var refers = refer.split('/');
		var referHost = refers[0];
		this.locationInfo['rhost'] = referHost;
		this.locationInfo['rpath'] = refer.substr(this.locationInfo['rhost'].length, refer.length);
		if(refer.indexOf('?') != -1){
			var work = refer.split('?');
			rquery = work[1];
			params = rquery.split('&');
			for(var i = 0; i<params.length; i++){
				var pair = params[i];
				param = pair.split('=');
				if(param[0] == 'q' || param[0] == 'as_q' || param[0] == 'p' || param[0] == 'MT') sSearchWord = param[1].replace('+',' ');
			}
		}
	}
}
�のアドバイスを行います。アドバイザー(IFA)は生涯を共に歩むパートナーとして大切なご資産を守り育てるお手伝いをします。">
    <meta property="og:image" content="https://fa.rakuten-sec.co.jp/shared/img/og-image.gif">
    <meta property="og:url" content="https://fa.rakuten-sec.co.jp/">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="楽天証券 資産運用コンサルティングサービス">
    <link rel="start" type="text/html" href="/">
    <link rel="shortcut icon" href="/favicon.ico">
    <link rel="stylesheet" type="text/css" href="/shared/css/sure-icon.css">
    <link rel="stylesheet" type="text/css" href="/shared/css/FontEmbed.production.min.css">
    <link rel="stylesheet" type="text/css" href="/shared/css/f1-header-footer.css">
    <link rel="stylesheet" type="text/css" href="/shared/css/f1-top.css">
    <script type="text/javascript" src="https://polyfill.io/v3/polyfill.min.js?features=Array.from%2CObject.assign" defer></script>
    <script type="text/javascript" src="/shared/js/vendor/micromodal.min.js" defer></script>
    <script type="text/javascript" src="/shared/js/vendor/swiper-bundle.min.js" defer></script>
    <script type="text/javascript" src="/shared/js/vendor/jquery-3.3.1.min.js" defer></script>
    <script type="text/javascript" src="/shared/js/vendor/jquery.matchHeight.js" defer></script>
    <script type="text/javascript" src="/shared/js/f1-global-nav.js" defer></script>
    <script type="text/javascript" src="/shared/js/f1-top.js" defer></script>

    <style>
    .f1-MV-swiper__img--04 {
      background-image: url("/images/index-img-swiper-04_pc.png")
    }
    
    @media screen and (max-width: 519px) {
      .f1-MV-swiper__img--04 {
        background-image:url("/images/index-img-swiper-04_sp.png")
      }
    }
    </style>
  </head>
  <body>
    <!--/ header -->
    <header class="f1-header" role="banner" id="VHEAD">
      <div class="f1-header__main">
        <div class="f1-header_main">
          <div class="f1-container">
            <button class="f1-header-button f1-header-button__menu js-trigger" type="button" data-type="icon" data-modal-target="main-menu" data-modal-trigger="open" data-ratid="ifa-header_menu" data-ratevent="click" data-ratparam="all"><span><i class="rex-icons-menu" aria-hidden="true"></i><span class="f1-header-button__text">メニュー</span></span></button>
            <div class="f1-header_main__wrap">
              <h1 class="f1-header_main__logo">
                <a href="https://fa.rakuten-sec.co.jp/" data-ratid="ifa-header_logo" data-ratevent="click" data-ratparam="all" class="f1-header_main__logo--link">
                  <picture>
                    <source srcset="/shared/images/logo_pc.png" media="(min-width: 960px)" />
                    <source srcset="/shared/images/logo_sp.png" media="(max-width: 959px)" />
                    <img decoding="async" src="/shared/images/logo_pc.png" alt="IFA（運用相談）楽天証券" />
                  </picture>
                </a>
              </h1>
            </div>
            <div class="f1-header_main__wrap">
              <ul>
                <li class="f1-header_main__pc">
                  <a class="f1-header-button" href="/faq/" data-ratid="ifa-global-nav-open-faq" data-ratevent="click" data-ratparam="all" data-type="icon">
                    <span><i class="rex-icon-help-outline" aria-hidden="true"></i><span class="f1-header-button__text">よくあるご質問</span></span>
                  </a>
                </li>
                <li>
                  <a class="f1-header-button" href="/corporation/" data-ratid="ifa-global-nav-open-corporation" data-ratevent="click" data-ratparam="all" data-type="search">
                    <span><i class="rex-icon-search-outline" aria-hidden="true"></i><span class="f1-header-button__text">IFAを探す</span></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="f1-header__gnav">
        <div class="f1-header_gnav is-hide is-close" id="main-menu" data-role="main-menu" aria-labelledby="menuTitle">
          <div data-modal-position="start"></div>
          <div class="f1-container">
            <div class="f1-header_gnav__head">
              <div class="f1-header_gnav__title" id="menuTitle" tabindex="-1">メニュー</div>
              <button class="f1-header-button js-trigger" type="button" data-type="icon" data-modal-target="main-menu" data-modal-trigger="close"><span><i class="rex-icons-close" aria-hidden="true"></i><span class="f1-header-button__text">閉じる</span></span></button>
            </div>
            <nav class="f1-header-gnav" role="navigation" aria-label="メインメニュー">
              <ul class="f1-header-gnav__list">
                <li class="f1-header-gnav__listSP">
                  <a class="f1-header-button" href="https://fa.rakuten-sec.co.jp/" data-type="mega-link" aria-current="true" data-ratid="ifa-global-nav-open-home" data-ratevent="click" data-ratparam="all">
                    <span><span class="f1-header-button__text">IFA（運用相談）ホーム</span></span>
                  </a>
                </li>
                <li data-level="1">
                  <button class="f1-header-button js-trigger" type="button" data-type="mega-down" aria-expanded="false" aria-controls="h-menu1" data-ratid="ifa-global-nav-open-about" data-ratevent="click" data-ratparam="all">
                    <span class="f1-header-button__down"><span class="f1-header-button__text">はじめての方へ</span><i class="rex-icons-chevron-down" aria-hidden="true"></i></span>
                  </button>
                  <div class="f1-header-gnav__wrap" id="h-menu1" aria-hidden="true">
                    <div class="f1-header-gnav__menu">
                      <div class="f1-header-gnav__menuWrap">
                        <ul class="f1-header-gnav__menuLinks">
                          <li><a class="f1-header-link -basic" href="/about/" data-ratid="ifa-global-nav-open-about" data-ratevent="click" data-ratparam="all"><span><span class="f1-header-button__text">はじめての方へ</span></span></a></li>
                          <li><a class="f1-header-link -basic" href="/about/#anc01" data-ratid="ifa-global-nav-open-about-anc01" data-ratevent="click" data-ratparam="all"><span><span class="f1-header-button__text">IFAとは</span></span></a></li>
                          <li><a class="f1-header-link -basic" href="/about/#anc02" data-ratid="ifa-global-nav-open-about-anc02" data-ratevent="click" data-ratparam="all"><span><span class="f1-header-button__text">IFAにはどんな相談が出来る？</span></span></a></li>
                          <li><a class="f1-header-link -basic" href="/about/#anc03" data-ratid="ifa-global-nav-open-about-anc03" data-ratevent="click" data-ratparam="all"><span><span class="f1-header-button__text">IFAに相談するメリット</span></span></a></li>
                          <li><a class="f1-header-link -basic" href="/about/#anc04" data-ratid="ifa-global-nav-open-about-anc04" data-ratevent="click" data-ratparam="all"><span><span class="f1-header-button__text">IFA口座の仕組み</span></span></a></li>
                          <li><a class="f1-header-link -basic" href="/about/#anc05" data-ratid="ifa-global-nav-open-about-anc05" data-ratevent="click" data-ratparam="all"><span><span class="f1-header-button__text">対面金融機関との違い</span></span></a></li>
                        </ul>
                      </div>
                    </div>
                    <button class="f1-header-close-button js-megaClose" type="button" aria-label="閉じる" data-type="close"><i class="rex-icon-close" aria-hidden="true"></i></button>
                  </div>
                </li>
                <li data-level="1" class="f1-header-gnav__listLONG">
                  <button class="f1-header-button js-trigger" type="button" data-type="mega-down" aria-expanded="false" aria-controls="h-menu2" data-ratid="ifa-global-nav-open-service" data-ratevent="click" data-ratparam="all">
                    <span class="f1-header-button__down"><span class="f1-header-button__text">楽天証券のIFAサービス</span><i class="rex-icons-chevron-down" aria-hidden="true"></i></span>
                  </button>
                  <div class="f1-header-gnav__wrap" id="h-menu2" aria-hidden="true">
                    <div class="f1-header-gnav__menu">
                      <div class="f1-header-gnav__menuWrap">
                        <ul class="f1-header-gnav__menuLinks">
                          <li><a class="f1-header-link -basic" href="/service/" data-ratid="ifa-global-nav-open-service" data-ratevent="click" data-ratparam="all"><span><span class="f1-header-button__text">楽天証券のIFAサービス</span></span></a></li>
                          <li><a class="f1-header-link -basic" href="/service/#anc01" data-ratid="ifa-global-nav-open-service-anc01" data-ratevent="click" data-ratparam="all"><span><span class="f1-header-button__text">IFA専用ラップ</span></span></a></li>
                          <li><a class="f1-header-link -basic" href="/service/#anc02" data-ratid="ifa-global-nav-open-service-anc02" data-ratevent="click" data-ratparam="all"><span><span class="f1-header-button__text">IFAコース専用取扱商品</span></span></a></li>
                          <li><a class="f1-header-link -basic" href="/service/#anc03" data-ratid="ifa-global-nav-open-service-anc03" data-ratevent="click" data-ratparam="all"><span><span class="f1-header-button__text">管理口座コース</span></span></a></li>
                          <li><a class="f1-header-link -basic" href="/service/#anc04" data-ratid="ifa-global-nav-open-service-anc04" data-ratevent="click" data-ratparam="all"><span><span class="f1-header-button__text">家族信託</span></span></a></li>
                          <li><a class="f1-header-link -basic" href="/service/#anc05" data-ratid="ifa-global-nav-open-service-anc05" data-ratevent="click"^ data-ratparam="all"><span><span class="f1-header-button__text">贈与手続サポート</span></span></a></li>
                          <li><a class="f1-header-link -basic" href="/service/#anc06" data-ratid="ifa-global-nav-open-service-anc06" data-ratevent="click" data-ratparam="all"><span><span class="f1-header-button__text">投信定期売却サービス</span></span></a></li>
                          <li><a class="f1-header-link -basic" href="/service/#anc07" data-ratid="ifa-global-nav-open-service-anc07" data-ratevent="click" data-ratparam="all"><span><span class="f1-header-button__text">キャッシュバック</span></span></a></li>
                          <li><a class="f1-header-link -basic" href="/commission/" data-ratid="ifa-global-nav-open-commission" data-ratevent="click" data-ratparam="all"><span><span class="f1-header-button__text">手数料・リスク等</span></span></a></li>
                        </ul>
                      </div>
                    </div>
                    <button class="f1-header-close-button js-megaClose" type="button" aria-label="閉じる" data-type="close"><i class="rex-icon-close" aria-hidden="true"></i></button>
                  </div>
                </li>
                <li data-level="1">
                  <a class="f1-header-button" href="/flow/" data-type="mega-link" data-ratid="ifa-global-nav-open-flow" data-ratevent="click" data-ratparam="all">
                    <span><span class="f1-header-button__text">ご利用の流れ</span></span>
                  </a>
                </li>
                <li data-level="1">
                  <a class="f1-header-button" href="/seminar/" data-type="mega-link" data-ratid="ifa-global-nav-open-seminar" data-ratevent="click" data-ratparam="all">
                    <span><span class="f1-header-button__text">セミナー情報</span></span>
                  </a>
                </li>
                <li data-level="1">
                  <a class="f1-header-button" href="/column/" data-type="mega-link" data-ratid="ifa-global-nav-open-column" data-ratevent="click" data-ratparam="all">
                    <span><span class="f1-header-button__text">コラム</span></span>
                  </a>
                </li>
                <li class="f1-header-gnav__listSP" data-level="1">
                  <a class="f1-header-button" href="/faq/" data-type="mega-link" data-ratid="ifa-global-nav-open-faq" data-ratevent="click" data-ratparam="all">
                    <span><span class="f1-header-button__text">よくあるご質問</span></span>
                  </a>
                </li>
                <li class="f1-header-gnav__listSP" data-level="1">
                  <a class="f1-header-button" href="/commission/" data-type="mega-link" data-ratid="ifa-global-nav-open-commission" data-ratevent="click" data-ratparam="all">
                    <span><span class="f1-header-button__text">契約IFA事業者一覧</span></span>
                  </a>
                </li>
                <li class="f1-header-gnav__listSP" data-level="1">
                  <a class="f1-header-button" href="/fiduciary/" data-type="mega-link" data-ratid="ifa-global-nav-open-fiduciary" data-ratevent="click" data-ratparam="all">
                    <span><span class="f1-header-button__text">お客様本位の業務運営方針</span></span>
                  </a>
                </li>
                <li class="f1-header-gnav__listSP" data-level="1">
                  <a class="f1-header-button" href="/sitemap/" data-type="mega-link" data-ratid="ifa-global-nav-open-sitemap" data-ratevent="click" data-ratparam="all">
                    <span><span class="f1-header-button__text">サイトマップ</span></span>
                  </a>
                </li>
                <li class="f1-header-gnav__listSP" data-level="1">
                  <button class="f1-header-button js-trigger" type="button" data-type="mega-down" aria-expanded="false" aria-controls="h-menu1" data-ratid="ifa-global-nav-open-rakuten-g" data-ratevent="click" data-ratparam="all">
                    <span class="f1-header-button__down"><span class="f1-header-button__text">楽天グループサービス</span><i class="rex-icons-chevron-down" aria-hidden="true"></i></span>
                  </button>
                  <div class="f1-header-gnav__wrap" id="h-menu1" aria-hidden="true">
                    <div class="f1-header-gnav__menu">
                      <div class="f1-header-gnav__menuWrap">
                        <ul class="f1-header-gnav__menuLinks">
                          <li data-active="no">
                            <a class="f1-header-link -basic" href="https://www.rakuten.co.jp/?scid=wi_scr_fin_ich_pc_header" data-ratevent="click" data-ratparam="all" data-ratid="EL|www.rakuten.co.jp/"><span><span class="f1-header-button__text">楽天市場</span><i class="rex-icons-new-window-outlined" aria-label="新しいタブまたはウィンドウで開く"></i></span></a>
                          </li>
                          <li data-active="no">
                            <a class="f1-header-link -basic" href="https://ac.ebis.ne.jp/tr_set.php?argument=ZMhPE4GP&ai=rgp_mno_002954" data-ratevent="click" data-ratparam="all" data-ratid="EL|ac.ebis.ne.jp/"><span><span class="f1-header-button__text">楽天モバイル</span><i class="rex-icons-new-window-outlined" aria-label="新しいタブまたはウィンドウで開く"></i></span></a>
                          </li>
                          <li data-active="no">
                            <a class="f1-header-link -basic" href="https://edy.rakuten.co.jp/?scid=wi_scr_fin_edy_pc_header" data-ratevent="click" data-ratparam="all" data-ratid="EL|edy.rakuten.co.jp/"><span><span class="f1-header-button__text">楽天Edy</span><i class="rex-icons-new-window-outlined" aria-label="新しいタブまたはウィンドウで開く"></i></span></a>
                          </li>
                          <li data-active="no">
                            <a class="f1-header-link -basic" href="https://pointcard.rakuten.co.jp/?scid=wi_scr_oneapp_pc" data-ratevent="click" data-ratparam="all" data-ratid="EL|pointcard.rakuten.co.jp/"><span><span class="f1-header-button__text">楽天ポイントカード</span><i class="rex-icons-new-window-outlined" aria-label="新しいタブまたはウィンドウで開く"></i></span></a>
                          </li>
                          <li data-active="no">
                            <a class="f1-header-link -basic" href="https://pay.rakuten.co.jp/detail/?scid=wi_scr_pc_header_rglink" data-ratevent="click" data-ratparam="all" data-ratid="EL|pay.rakuten.co.jp/detail/"><span><span class="f1-header-button__text">楽天ペイ</span><i class="rex-icons-new-window-outlined" aria-label="新しいタブまたはウィンドウで開く"></i></span></a>
                          </li>
                          <li data-active="no">
                            <a class="f1-header-link -basic" href="https://www.rakuten-insurance.co.jp/?scid=wi_scr_fintech_security_pc" data-ratevent="click" data-ratparam="all" data-ratid="EL|www.rakuten-insurance.co.jp/"><span><span class="f1-header-button__text">楽天保険の総合窓口</span><i class="rex-icons-new-window-outlined" aria-label="新しいタブまたはウィンドウで開く"></i></span></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <button class="f1-header-close-button js-megaClose" type="button" aria-label="閉じる" data-type="close"><i class="rex-icon-close" aria-hidden="true"></i></button>
                  </div>
                </li>
              </ul>
            </nav>
            <dl class="f1-header-external">
              <dt>豊富な取扱商品の楽天証券</dt>
              <dd>
                <ul class="f1-header-gnav__menuLinks">
                  <li>
                    <a class="f1-header-link" href="https://www.rakuten-sec.co.jp/" data-ratevent="click" data-ratparam="all"><span>
                      <i class="rex-icon-home-outline" aria-hidden="true"></i>
                      <span class="f1-header-link__text">楽天証券ホーム</span>
                      <i class="rex-icons-new-window-outlined" aria-label="新しいタブまたはウィンドウで開く"></i></span>
                    </a>
                  </li>
                </ul>
              </dd>
            </dl>
          </div>
          <div data-modal-position="end"></div>
        </div>
      </div>
      <div class="f1-header__sub">
        <div class="f1-header_sub">
          <div class="f1-container">
            <ul class="f1-header_sub__menu">
              <li>
                <a class="f1-header-link -basic" href="https://www.rakuten-sec.co.jp/" data-ratevent="click" data-ratparam="all" rel="noopener noreferrer"><span>楽天証券ホーム</span></a>
              </li>
              <li>
                <a class="f1-header-link -basic" href="/partner/" data-ratid="ifa-global-nav-open-career" data-ratevent="click" data-ratparam="all" rel="noopener noreferrer"><span>IFA支援サイト</span></a>
              </li>
            </ul>
            <ul class="f1-header_sub__menu">
              <li>
                <a class="f1-header-link -basic" href="https://ad2.trafficgate.net/t/r/8109/1441/99636_99636/" rel="nofollow" data-ratevent="click" data-ratparam="all"><span>カード</span></a>
              </li>
              <li>
                <a class="f1-header-link -basic" href="https://www.rakuten-sec.co.jp/web/link/internal.html?page=https://www.rakuten-bank.co.jp/" rel="nofollow" data-ratevent="click" data-ratparam="all" rel="noopener noreferrer"><span>銀行</span></a>
              </li>
              <li>
                <a class="f1-header-link -basic" href="https://www.rakuten-wallet.co.jp/?scid=wi_scr_pc_202201_oneapp" rel="nofollow" data-ratevent="click" data-ratparam="all"><span>ウォレット</span></a>
              </li>
              <li>
                <div class="f1-header_group">
                  <button class="f1-header-button js-trigger" type="button" aria-controls="group" aria-expanded="false" data-type="pull"><span><span>楽天グループ</span></span></button>
                  <div class="f1-header_group__menu" id="group">
                    <dl>
                      <dt>楽天グループサービス一覧</dt>
                      <dd>
                        <ul>
                          <li><a class="f1-header-link -basic" href="https://www.rakuten.co.jp/?scid=wi_scr_fin_ich_pc_header" data-ratevent="click" data-ratparam="all" data-ratid="EL|www.rakuten.co.jp/">楽天市場</a></li>
                          <li><a class="f1-header-link -basic" href="https://ac.ebis.ne.jp/tr_set.php?argument=ZMhPE4GP&ai=rgp_mno_002954" data-ratevent="click" data-ratparam="all" data-ratid="EL|ac.ebis.ne.jp/">楽天モバイル</a></li>
                          <li><a class="f1-header-link -basic" href="https://edy.rakuten.co.jp/?scid=wi_scr_fin_edy_pc_header" data-ratevent="click" data-ratparam="all" data-ratid="EL|edy.rakuten.co.jp/">楽天Edy</a></li>
                          <li><a class="f1-header-link -basic" href="https://pointcard.rakuten.co.jp/?scid=wi_scr_oneapp_pc" data-ratevent="click" data-ratparam="all" data-ratid="EL|pointcard.rakuten.co.jp/">楽天ポイントカード</a></li>
                          <li><a class="f1-header-link -basic" href="https://pay.rakuten.co.jp/detail/?scid=wi_scr_pc_header_rglink" data-ratevent="click" data-ratparam="all" data-ratid="EL|pay.rakuten.co.jp/detail/">楽天ペイ</a></li>
                          <li><a class="f1-header-link -basic" href="https://www.rakuten-insurance.co.jp/?scid=wi_scr_fintech_security_pc" data-ratevent="click" data-ratparam="all" data-ratid="EL|www.rakuten-insurance.co.jp/">楽天保険の総合窓口</a></li>
                        </ul>
                        <hr class="f1-header-hr">
                        <ul>
                          <li><a class="f1-header-link -basic" href="http://www.rakuten.co.jp/sitemap/" data-ratevent="click" data-ratparam="all">サービス一覧</a></li>
                        </ul>
                      </dd>
                    </dl>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
    <!--/ header -->

    <div class="f1-MV-swiper">
      <div class="f1-MV-swiper__inner">
        <!-- Slider main container -->
        <div class="MV-swiper">
          <!-- Additional required wrapper -->
          <div class="swiper-wrapper">
            <!-- Slides -->
            <div class="swiper-slide">
              <div class="f1-MV-swiper__img f1-MV-swiper__img--01">
                <div class="f1-MV-swiper__movie">
                  <div class="f1-top-movie" data-micromodal-trigger="modal-mv">
                    <img class="f1-top-movie__img" src="/images/index-img-movie-thum.png" alt="">
                    <img class="f1-top-movie__btn" src="/images/index-btn-play.png" alt="">
                    <span class="f1-top-movie__txt">動画を再生する</span>
                  </div>
                  <!-- <div class="f1-top-movie">
                    <img class="f1-top-movie__img f1-top-movie__img--comingsoon" src="/images/index-img-comingsoon.png" alt="">
                  </div> -->
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="f1-MV-swiper__img f1-MV-swiper__img--04">
                <div class="f1-MV-swiper__content">
                  <div class="f1-top-btn">
                    <a href="/feature/podcast/index.html" class="f1-top-btn__link" data-ratid="ifa-carousel-seminar" data-ratevent="click" data-ratparam="all">特設サイトはこちら</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="f1-MV-swiper__img f1-MV-swiper__img--02">
                <div class="f1-MV-swiper__content">
                  <div class="f1-top-btn">
                    <a href="/seminar/" class="f1-top-btn__link" data-ratid="ifa-carousel-seminar" data-ratevent="click" data-ratparam="all">セミナー情報一覧</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="f1-MV-swiper__img f1-MV-swiper__img--03">
                <div class="f1-MV-swiper__content">
                  <div class="f1-top-btn">
                    <a href="/column/" class="f1-top-btn__link" data-ratid="ifa-carousel-column" data-ratevent="click" data-ratparam="all">最新情報はこちら</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- If we need pagination -->
          <div class="f1-MV-swiper__pagination"></div>

          <!-- If we need navigation buttons -->
          <div class="f1-MV-swiper__btn f1-MV-swiper__btn--prev"><span></span></div>
          <div class="f1-MV-swiper__btn f1-MV-swiper__btn--next"><span></span></div>
        </div>
      </div>
    </div>

    <!-- ここからモーダルエリアです。 -->
    <div class="modal micromodal-slide" id="modal-mv" aria-hidden="true">
      <div class="modal__overlay" tabindex="-1" data-micromodal-close>
        <div class="modal-iframe">
          <div class="modal-iframe__wrap">
            <iframe id="movie0" width="560" height="315" src="https://www.youtube.com/embed/1lz-eJ4tOkc?enablejsapi=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <div class="modal-iframe__close" data-micromodal-close><i class="rex-icons-close" aria-hidden="true"></i></div>
          </div>
        </div>
      </div>
    </div>

    <section class="f1-section f1-section__first">
      <div class="f1-contents">
        <h1 class="f1-section-hdg">
          <div class="f1-section-hdg__sub">INTRODUCTION</div>
          <div class="f1-section-hdg__main">楽天証券<br>契約IFA事業者紹介</div>
        </h1>
      </div>
      <div class="f1-top-swiper">
        <div class="f1-top-swiper__inner">
          <!-- Slider main container -->
          <div class="top-swiper">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
              <!-- Slides -->
              <div class="swiper-slide">
                <div class="f1-top-contractor" data-micromodal-trigger="modal-slide01">
                  <img src="/images/index-thum-movie-igarashi.png" alt="" class="f1-top-contractor__img">
                </div>
                <p class="f1-top-contractor__text">株式会社バリューアドバイザーズ<br>五十嵐 修平様</p>
              </div>
              <div class="swiper-slide">
                <div class="f1-top-contractor" data-micromodal-trigger="modal-slide02">
                  <img src="/images/index-thum-movie-tanaka.png" alt="" class="f1-top-contractor__img">
                </div>
                <p class="f1-top-contractor__text">株式会社アイ・パートナーズフィナンシャル<br>田中 譲治様</p>
              </div>
              <div class="swiper-slide">
                <div class="f1-top-contractor" data-micromodal-trigger="modal-slide03">
                  <img src="/images/index-thum-movie-abe.png" alt="" class="f1-top-contractor__img">
                </div>
                <p class="f1-top-contractor__text">株式会社Fan<br>安部 瑞季様</p>
              </div>
              <div class="swiper-slide">
                <div class="f1-top-contractor" data-micromodal-trigger="modal-slide04">
                  <img src="/images/index-thum-movie-takatsuka.png" alt="" class="f1-top-contractor__img">
                </div>
                <p class="f1-top-contractor__text">株式会社フィナンシャルクリエイト<br>高塚 大弘様</p>
              </div>
              <div class="swiper-slide">
                <div class="f1-top-contractor" data-micromodal-trigger="modal-slide05">
                  <img src="/images/index-thum-movie-horie.png" alt="" class="f1-top-contractor__img">
                </div>
                <p class="f1-top-contractor__text">株式会社Japan Asset Management<br>堀江 智生様</p>
              </div>
              <div class="swiper-slide">
                <div class="f1-top-contractor" data-micromodal-trigger="modal-slide06">
                  <img src="/images/index-thum-movie-yoshida.png" alt="" class="f1-top-contractor__img">
                </div>
                <p class="f1-top-contractor__text">シグマ株式会社<br>吉田 篤様</p>
              </div>
            </div>
          </div>
          <div class="f1-top-swiper__parts">
            <!-- If we need pagination -->
            <div class="f1-top-swiper__pagination"></div>

            <!-- If we need navigation buttons -->
            <div class="f1-top-swiper__btn f1-top-swiper__btn--prev"><span></span></div>
            <div class="f1-top-swiper__btn f1-top-swiper__btn--next"><span></span></div>
          </div>
        </div>
      </div>
    </section>

    <!-- ここからモーダルエリアです。 -->
    <div class="modal micromodal-slide" id="modal-slide01" aria-hidden="true">
      <div class="modal__overlay" tabindex="-1" data-micromodal-close>
        <div class="modal-iframe">
          <div class="modal-iframe__wrap">
            <iframe id="movie1" width="560" height="315" src="https://www.youtube.com/embed/BTW9CqyiKek?enablejsapi=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <div class="modal-iframe__close" data-micromodal-close><i class="rex-icons-close" aria-hidden="true"></i></div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal micromodal-slide" id="modal-slide02" aria-hidden="true">
      <div class="modal__overlay" tabindex="-1" data-micromodal-close>
        <div class="modal-iframe">
          <div class="modal-iframe__wrap">
            <iframe id="movie2" width="560" height="315" src="https://www.youtube.com/embed/S6xXBCNl7ys?enablejsapi=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <div class="modal-iframe__close" data-micromodal-close><i class="rex-icons-close" aria-hidden="true"></i></div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal micromodal-slide" id="modal-slide03" aria-hidden="true">
      <div class="modal__overlay" tabindex="-1" data-micromodal-close>
        <div class="modal-iframe">
          <div class="modal-iframe__wrap">
            <iframe id="movie3" width="560" height="315" src=" https://www.youtube.com/embed/muma60HF27w?enablejsapi=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <div class="modal-iframe__close" data-micromodal-close><i class="rex-icons-close" aria-hidden="true"></i></div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal micromodal-slide" id="modal-slide04" aria-hidden="true">
      <div class="modal__overlay" tabindex="-1" data-micromodal-close>
        <div class="modal-iframe">
          <div class="modal-iframe__wrap">
            <iframe id="movie4" width="560" height="315" src="https://www.youtube.com/embed/odcXgCbC3Ys?enablejsapi=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <div class="modal-iframe__close" data-micromodal-close><i class="rex-icons-close" aria-hidden="true"></i></div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal micromodal-slide" id="modal-slide05" aria-hidden="true">
      <div class="modal__overlay" tabindex="-1" data-micromodal-close>
        <div class="modal-iframe">
          <div class="modal-iframe__wrap">
            <iframe id="movie5" width="560" height="315" src="https://www.youtube.com/embed/ZZXXYa0hXOI?enablejsapi=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <div class="modal-iframe__close" data-micromodal-close><i class="rex-icons-close" aria-hidden="true"></i></div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal micromodal-slide" id="modal-slide06" aria-hidden="true">
      <div class="modal__overlay" tabindex="-1" data-micromodal-close>
        <div class="modal-iframe">
          <div class="modal-iframe__wrap">
            <iframe id="movie5" width="560" height="315" src="https://www.youtube.com/embed/GXizGwiQVgA?enablejsapi=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <div class="modal-iframe__close" data-micromodal-close><i class="rex-icons-close" aria-hidden="true"></i></div>
          </div>
        </div>
      </div>
    </div>

    <div class="f1-section-nav">
      <div class="f1-contents">
        <ul class="f1-top-nav">
          <li>
            <a href="/about/" class="f1-top-navPannel" data-ratid="ifa-top-about" data-ratevent="click" data-ratparam="all">
              <p class="f1-top-navPannel__text">はじめての方へ</p>
              <img class="f1-top-navPannel__img" src="/images/index-img-about.png" alt="はじめての方へ" />
            </a>
          </li>
          <li>
            <a href="/flow/" class="f1-top-navPannel" data-ratid="ifa-top-flow" data-ratevent="click" data-ratparam="all">
              <p class="f1-top-navPannel__text">ご利用の流れ</p>
              <img class="f1-top-navPannel__img" src="/images/index-img-flow.png" alt="ご利用の流れ" />
            </a>
          </li>
          <li>
            <a href="/service/" class="f1-top-navPannel" data-ratid="ifa-top-service" data-ratevent="click" data-ratparam="all">
              <p class="f1-top-navPannel__text f1-top-navPannel__text--2line">楽天証券の<br>IFAサービス</p>
              <img class="f1-top-navPannel__img" src="/images/index-img-service.png" alt="楽天証券のIFAサービス" />
            </a>
          </li>
          <li>
            <a href="/fiduciary/" class="f1-top-navPannel" data-ratid="ifa-top-fiduciary" data-ratevent="click" data-ratparam="all">
              <p class="f1-top-navPannel__text f1-top-navPannel__text--2line">お客様本位の<br>業務運営方針</p>
              <img class="f1-top-navPannel__img" src="/images/index-img-fiduciary.png" alt="お客様本位の業務運営方針" />
            </a>
          </li>
        </ul>
      </div>
    </div>

    <section class="f1-section">
      <div class="f1-contents">
        <h2 class="f1-section-hdg">
          <div class="f1-section-hdg__sub">SEMINAR INFORMATION</div>
          <div class="f1-section-hdg__main">セミナー情報</div>
        </h2>

        <div id="data-json-seminar"></div>

        <div class="f1-btn-hollow01">
          <a href="/seminar/" class="f1-btn-hollow01__link" data-ratid="ifa-top-seminar" data-ratevent="click" data-ratparam="all">セミナー一覧</a>
        </div>
      </div>
    </section>

    <section class="f1-section f1-section-gray f1-section-news">
      <div class="f1-contents">
        <div class="f1-top-news__container">
          <div class="f1-top-news__container--left">
            <h2 class="f1-section-hdg">
              <div class="f1-section-hdg__sub">NEWS</div>
              <div class="f1-section-hdg__main">新着情報</div>
            </h2>
          </div>
          <div class="f1-top-news__container--right">
            <ul class="f1-info-list">
              <li class="f1-info-list__item">
                <a href="/seminar/" class="f1-info-list__link" data-ratid="ifa-top-news-seminar" data-ratevent="click" data-ratparam="all">
                  <p class="f1-info-list__date">2024/01/12<span class="f1-info-list__date--label f1-label--seminar">セミナー情報</span></p>
                  <p>セミナー情報を更新しました。</p>
                </a>
              </li>
              <li class="f1-info-list__item">
                <a href="/feature/podcast/index.html" class="f1-info-list__link" data-ratid="ifa-top-feature-podcast" data-ratevent="click" data-ratparam="all">
                  <p class="f1-info-list__date">2023/12/28</p>
                  <p>特集サイトを新設しました。</p>
                </a>
              </li>
              <li class="f1-info-list__item">
                <a href="/column/20231227-01/" class="f1-info-list__link" data-ratid="ifa-top-news-column-20231227-01" data-ratevent="click" data-ratparam="all">
                  <p class="f1-info-list__date">2023/12/27<span class="f1-info-list__date--label f1-label--column">コラム</span></p>
                  <p>「『積立投資』×『ポイ活』」を掲載しました。</p>
                </a>
              </li>

              <!-- <li class="f1-info-list__item">
                <a href="/column/20230728-01/" class="f1-info-list__link" data-ratid="ifa-top-news-column-20230728-01" data-ratevent="click" data-ratparam="all">
                  <p class="f1-info-list__date">2023/07/28<span class="f1-info-list__date--label f1-label--column">コラム</span></p>
                  <p>「富裕層にとって有効な新NISA活用法」を掲載しました。</p>
                </a>
              </li> -->
            </ul>
          </div>
        </div>
        <div class="f1-btn-hollow01">
          <a href="/news/" class="f1-btn-hollow01__link" data-ratid="ifa-top-news" data-ratevent="click" data-ratparam="all">新着情報一覧</a>
        </div>
      </div>
    </section>

    <section class="f1-section">
      <div class="f1-contents">
        <h2 class="f1-section-hdg">
          <div class="f1-section-hdg__sub">COLUMN</div>
          <div class="f1-section-hdg__main">注目コラム・動画</div>
        </h2>
        <div class="f1-top-column">
          <a href="/column/20231227-02/" class="f1-top-column__article" data-ratid="ifa-top-column-20231227-02" data-ratevent="click" data-ratparam="all">
            <img src="/column/20231227-02/images/thumbnail.png" alt="" class="f1-top-column__img">
            <div class="f1-top-column__body">
              <p class="f1-top-column__date">2023/11/08<span class="f1-top-column__icon--new">NEW</span></p>
              <p class="f1-top-column__txt">不動産の相続手続きとは？手続きの流れから必要な書類まで解説</p>
              <p class="f1-top-column__name">そうぞくドットコム<br>マガジン編集部</p>
            </div>
          </a>
          <a href="/column/20231108-01/" class="f1-top-column__article" data-ratid="ifa-top-column-20231108-01" data-ratevent="click" data-ratparam="all">
            <img src="/column/20231108-01/images/thumbnail.png" alt="" class="f1-top-column__img">
            <div class="f1-top-column__body">
              <p class="f1-top-column__date">2023/11/08</p>
              <p class="f1-top-column__txt">相続対策基礎講座！<br>〜あなたの『想い』をカタチに〜</p>
              <p class="f1-top-column__name">ＣＳアセット株式会社<br>土方 朋</p>
            </div>
          </a>
          <a href="/column/20231006-01/" class="f1-top-column__article" data-ratid="ifa-top-column-20231006-01" data-ratevent="click" data-ratparam="all">
            <img src="/column/20231006-01/images/thumbnail.png" alt="" class="f1-top-column__img">
            <div class="f1-top-column__body">
              <p class="f1-top-column__date">2023/10/06</p>
              <p class="f1-top-column__txt">【退職金の資産運用相談】投資初心者の方へポイントを解説します</p>
              <p class="f1-top-column__name">株式会社Fan<br>小須田 徹</p>
            </div>
          </a>
        </div>
        <div class="f1-btn-hollow01">
          <a href="/column/" class="f1-btn-hollow01__link" data-ratid="ifa-top-column" data-ratevent="click" data-ratparam="all">コラム一覧</a>
        </div>
      </div>
    </section>

    <section class="f1-section f1-section-gray">
      <div class="f1-contents">
        <div class="f1-top-diagnosis">
          <a href="https://okane-kenko.jp/partner/rakuten/?utm_source=rakuten_ifa&utm_medium=media&utm_campaign=banner" target="_blank" class="f1-top-diagnosis__link" data-ratid="ifa-bnr-okaneko-rakuten" data-ratevent="click" data-ratparam="all">
            <picture>
              <source srcset="/images/index-img-diagnosis.png" media="(min-width: 520px)" />
              <source srcset="/images/index-img-diagnosis_float.png" media="(max-width: 519px)" />
              <img decoding="async" src="/images/index-img-diagnosis.png" alt="お金の健康診断 for 楽天証券" class="f1-top-diagnosis__img" />
            </picture>
          </a>
        </div>
        <ul class="f1-list-notice-a">
          <li>IFAについて知りたい方は<a href="https://fa.rakuten-sec.co.jp/faq/" target="_blank">こちら</a>。</li>
          <li>当サービスは株式会社400Fが提供するものです。株式会社400Fについては<a href="https://okane-kenko.jp/partner/rakuten/" target="_blank" data-ratid="ifa-top-link-okaneko-rakuten" data-ratevent="click" data-ratparam="all">こちら</a>。なお、既に担当のIFAがいらっしゃる方は、担当IFAにご相談ください。</li>
          <li>当サービスの推奨環境はGoogle Chromeになります。</li>
        </ul>
      </div>
    </section>

    <section class="f1-section f1-section-partner">
      <div class="f1-contents">
        <h2 class="f1-section-hdg">
          <div class="f1-section-hdg__sub">PARTNER</div>
          <div class="f1-section-hdg__main">提携先</div>
        </h2>
        <div class="f1-top-partner">
          <div class="f1-top-partner__inner">
            <div class="f1-top-partner__banner">
              <a href="https://www.faa.or.jp/" target="_blank" class="f1-top-partner__link">
                <img src="/images/index-banner-faa.png" alt="一般社団法人ファイナンシャル・アドバイザー協会様">
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="f1-top-diagnosis__float">
      <a href="https://okane-kenko.jp/partner/rakuten/?utm_source=rakuten_ifa&utm_medium=media&utm_campaign=floating" target="_blank" data-ratid="ifa-floatingbnr-okaneko-rakuten" data-ratevent="click" data-ratparam="all" class="f1-top-diagnosis__link">
        <img decoding="async" src="/images/index-img-diagnosis_float.png" alt="お金の健康診断 for 楽天証券" class="f1-top-diagnosis__img" />
      </a>
    </div>

    <div class="f1-btn-scrolltop pagetop">
      <div class="f1-btn-scrolltop__link">
        <div class="f1-btn-scrolltop__icon rex-icon rex-icon-arrow-up"></div>
        <span class="f1-btn-scrolltop__text">上へ</span>
      </div>
    </div>

    <!--/ footer -->
    <footer class="f1-footer" role="contentinfo">
      <div class="f1-footer__inner -top">
        <div class="f1-container">
          <nav role="navigation" aria-label="サイトマップ">
            <div class="f1-footer_sitemap -col-3">
              <dl class="f1-footer_sitemap__Box">
                <dt class="f1-footer_sitemap__BoxHead f1-footer_sitemap__SP">
                  <button class="f1-footer-button js-trigger" type="button" aria-expanded="false" data-type="acc" aria-controls="sitemap1"><span><span class="f1-footer-button__text">はじめての方へ</span><i class="rex-icons-chevron-down" aria-hidden="true"></i></span></button>
                </dt>
                <dd class="f1-footer_sitemap__BoxBody" id="sitemap1">
                  <ul>
                    <li data-level="2"><a class="f1-footer-link -ftr" rel="noopener noreferrer" href="/about/" data-ratid="ifa-ftr-about" data-ratevent="click" data-ratparam="all"><span><span class="f1-footer-link__text">はじめての方へ</span></span></a></li>
                    <li data-level="2"><a class="f1-footer-link -ftr" rel="noopener noreferrer" href="/about/#anc01" data-ratid="ifa-ftr-about-anc01" data-ratevent="click" data-ratparam="all"><span><span class="f1-footer-link__text">IFAとは</span></span></a></li>
                    <li data-level="2"><a class="f1-footer-link -ftr" rel="noopener noreferrer" href="/about/#anc02" data-ratid="ifa-ftr-about-anc02" data-ratevent="click" data-ratparam="all"><span><span class="f1-footer-link__text">IFAにはどんな相談ができる？</span></span></a></li>
                    <li data-level="2"><a class="f1-footer-link -ftr" rel="noopener noreferrer" href="/about/#anc03" data-ratid="ifa-ftr-about-anc03" data-ratevent="click" data-ratparam="all"><span><span class="f1-footer-link__text">IFAに相談するメリット</span></span></a></li>
                    <li data-level="2"><a class="f1-footer-link -ftr" rel="noopener noreferrer" href="/about/#anc04" data-ratid="ifa-ftr-about-anc04" data-ratevent="click" data-ratparam="all"><span><span class="f1-footer-link__text">IFA口座の仕組み</span></span></a></li>
                    <li data-level="2"><a class="f1-footer-link -ftr" rel="noopener noreferrer" href="/about/#anc05" data-ratid="ifa-ftr-about-anc05" data-ratevent="click" data-ratparam="all"><span><span class="f1-footer-link__text">対面金融機関等との違い</span></span></a></li>
                  </ul>
                </dd>
                <dd class="f1-footer_sitemap__BoxLink f1-footer_sitemap__PC">
                  <a class="f1-footer-link -ftr" href="/about/" data-ratid="ifa-ftr-about" data-ratevent="click" data-ratparam="all">はじめての方へ</a>
                </dd>
              </dl>
              <dl class="f1-footer_sitemap__Box">
                <dt class="f1-footer_sitemap__BoxHead f1-footer_sitemap__SP">
                  <button class="f1-footer-button js-trigger" type="button" aria-expanded="false" data-type="acc" aria-controls="sitemap1"><span><span class="f1-footer-button__text">楽天証券のIFAサービス</span><i class="rex-icons-chevron-down" aria-hidden="true"></i></span></button></dt>
                <dd class="f1-footer_sitemap__BoxBody" id="sitemap2">
                  <ul>
                    <li data-level="2"><a class="f1-footer-link -ftr" rel="noopener noreferrer" href="/service/#anc01" data-ratid="ifa-ftr-service-anc01" data-ratevent="click" data-ratparam="all"><span><span class="f1-footer-link__text">IFA専用ラップ</span></span></a></li>
                    <li data-level="2"><a class="f1-footer-link -ftr" rel="noopener noreferrer" href="/service/#anc02" data-ratid="ifa-ftr-service-anc02" data-ratevent="click" data-ratparam="all"><span><span class="f1-footer-link__text">IFAコース専用取扱商品</span></span></a></li>
                    <li data-level="2"><a class="f1-footer-link -ftr" rel="noopener noreferrer" href="/service/#anc03" data-ratid="ifa-ftr-service-anc03" data-ratevent="click" data-ratparam="all"><span><span class="f1-footer-link__text">管理口座コース</span></span></a></li>
                    <li data-level="2"><a class="f1-footer-link -ftr" rel="noopener noreferrer" href="/service/#anc04" data-ratid="ifa-ftr-service-anc04" data-ratevent="click" data-ratparam="all"><span><span class="f1-footer-link__text">家族信託</span></span></a></li>
                    <li data-level="2"><a class="f1-footer-link -ftr" rel="noopener noreferrer" href="/service/#anc05" data-ratid="ifa-ftr-service-anc05" data-ratevent="click" data-ratparam="all"><span><span class="f1-footer-link__text">贈与手続サポート</span></span></a></li>
                    <li data-level="2"><a class="f1-footer-link -ftr" rel="noopener noreferrer" href="/service/#anc06" data-ratid="ifa-ftr-service-anc06" data-ratevent="click" data-ratparam="all"><span><span class="f1-footer-link__text">投信定期売却サービス</span></span></a></li>
                    <li data-level="2"><a class="f1-footer-link -ftr" rel="noopener noreferrer" href="/service/#anc07" data-ratid="ifa-ftr-service-anc07" data-ratevent="click" data-ratparam="all"><span><span class="f1-footer-link__text">キャッシュバック</span></span></a></li>
                  </ul>
                </dd>
                <dd class="f1-footer_sitemap__BoxLink f1-footer_sitemap__PC">
                  <a class="f1-footer-link -ftr" href="/service/" data-ratid="ifa-ftr-service" data-ratevent="click" data-ratparam="all">楽天証券のIFAサービス</a>
                </dd>
              </dl>
              <dl class="f1-footer_sitemap__Box">
                <dd class="f1-footer_sitemap__BoxLink">
                  <a class="f1-footer-link -ftr" href="/flow/" data-ratid="ifa-ftr-flow" data-ratevent="click" data-ratparam="all">ご利用の流れ</a>
                </dd>
              </dl>
              <dl class="f1-footer_sitemap__Box">
                <dd class="f1-footer_sitemap__BoxLink">
                  <a class="f1-footer-link -ftr" href="/corporation/" data-ratid="ifa-ftr-corporation" data-ratevent="click" data-ratparam="all">契約IFA事業者一覧</a>
                </dd>
              </dl>
              <dl class="f1-footer_sitemap__Box">
                <dd class="f1-footer_sitemap__BoxLink">
                  <a class="f1-footer-link -ftr" href="/commission/" data-ratid="ifa-ftr-commission" data-ratevent="click" data-ratparam="all">手数料・リスク等</a>
                </dd>
              </dl>
              <dl class="f1-footer_sitemap__Box">
                <dd class="f1-footer_sitemap__BoxLink">
                  <a class="f1-footer-link -ftr" href="/faq/" data-ratid="ifa-ftr-faq" data-ratevent="click" data-ratparam="all">よくあるご質問</a>
                </dd>
              </dl>
              <dl class="f1-footer_sitemap__Box">
                <dd class="f1-footer_sitemap__BoxLink">
                  <a class="f1-footer-link -ftr" href="/seminar/" data-ratid="ifa-ftr-seminar" data-ratevent="click" data-ratparam="all">セミナー情報</a>
                </dd>
              </dl>
              <dl class="f1-footer_sitemap__Box">
                <dd class="f1-footer_sitemap__BoxLink">
                  <a class="f1-footer-link -ftr" href="/column/" data-ratid="ifa-ftr-column" data-ratevent="click" data-ratparam="all">コラム</a>
                </dd>
              </dl>
              <dl class="f1-footer_sitemap__Box">
                <dd class="f1-footer_sitemap__BoxLink">
                  <a class="f1-footer-link -ftr" href="/news/" data-ratid="ifa-ftr-news" data-ratevent="click" data-ratparam="all">新着情報</a>
                </dd>
              </dl>
              <dl class="f1-footer_sitemap__Box">
                <dd class="f1-footer_sitemap__BoxLink">
                  <a class="f1-footer-link -ftr" href="/fiduciary/" data-ratid="ifa-ftr-fiduciary" data-ratevent="click" data-ratparam="all">お客様本位の業務運営方針</a>
                </dd>
              </dl>
              <dl class="f1-footer_sitemap__Box">
                <dd class="f1-footer_sitemap__BoxLink">
                  <a class="f1-footer-link -ftr" href="/sitemap/" data-ratid="ifa-ftr-sitemap" data-ratevent="click" data-ratparam="all">サイトマップ</a>
                </dd>
              </dl>
            </div>
          </nav>
          <div class="f1-footer_bottom">
            <ul class="f1-footer_companyinfo">
              <li><a class="f1-footer-link -ftr" href="https://www.rakuten-sec.co.jp/web/company/profile/"><span><span class="f1-footer-link__text">会社概要</span></span></a></li>
              <li><a class="f1-footer-link -ftr" href="https://www.rakuten-sec.co.jp/web/company/privacy.html"><span><span class="f1-footer-link__text">個人情報保護宣言</span></span></a></li>
              <li><a class="f1-footer-link -ftr" href="https://corp.rakuten.co.jp/copyright/" target="_blank"><span><span class="f1-footer-link__text">著作権について</span></span></a></li>
              <li><a class="f1-footer-link -ftr" href="https://www.rakuten-sec.co.jp/"><span><span class="f1-footer-link__text">楽天証券ホーム</span></span></a></li>
              <li><a class="f1-footer-link -ftr" href="/partner/" data-ratid="ifa-ftr-career" data-ratevent="click" data-ratparam="all"><span><span class="f1-footer-link__text">IFA支援サイト</span></span></a></li>
            </ul>
            <p class="f1-footer_copyright">&copy; Rakuten Securities, Inc. All Rights Reserved.</p>
          </div>
        </div>
      </div>
      <div class="f1-footer__inner -bottom">
        <div class="f1-container">
          <div class="f1-footer_group">
            <dl class="f1-footer_group__box">
              <dt>楽天グループ</dt>
              <dd><a class="f1-footer-link -basic" href="https://www.rakuten.co.jp/sitemap/" target="_blank"><span><span class="f1-footer__text">サービス一覧</span></span></a></dd>
              <dd><a class="f1-footer-link -basic" href="https://www.rakuten.co.jp/sitemap/inquiry.html" target="_blank"><span><span class="f1-footer__text">お問い合わせ一覧</span></span></a></dd>
              <dd><a class="f1-footer-link -basic" href="https://corp.rakuten.co.jp/sustainability/" target="_blank"><span><span class="f1-footer__text">サステナビリティ</span></span></a></dd>
            </dl>
          </div>
        </div>
      </div>
    </footer>
    <!--/ footer -->

    <!-- ============計測タグ============ -->
    <!-- SiteCatalyst code -->
<script type="text/javascript" src="https://www.rakuten-sec.co.jp/web/shared/js/sc/s_code.js"></script>
<!-- SiteCatalyst code -->
<script type="text/javascript"><!--
void(s.t())
//--></script>
<!-- End SiteCatalyst code -->

<!-- ============ワンタグ計測用============ -->
<script type="text/javascript">
  (function () {
    var tagjs = document.createElement("script");
    var s = document.getElementsByTagName("script")[0];
    tagjs.async = true;
    tagjs.src = "//s.yjtag.jp/tag.js#site=X843wUn";
    s.parentNode.insertBefore(tagjs, s);
  }());
</script>
<noscript>
  <iframe src="//b.yjtag.jp/iframe?c=X843wUn" width="1" height="1" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
</noscript>
<!-- ============/ワンタグ計測用============ -->

<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5J8CZTV');</script>
<!-- End Google Tag Manager -->

<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5J8CZTV"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
    <!-- ============/計測タグ============ -->

  </body>
</html>
