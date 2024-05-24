<!DOCl class="lt-ie9"> <![endif]-->
<!--[if IE 9]>
<html class="ie9"> <![endif]-->
<!--[if gt IE 9]><!-->
<html lang="en"> <!--<![endif]-->
<head>
    <!-- OneTrust Cookies Consent Notice start for developers.ringcentral.com -->
<script type="text/javascript" src="https://cdn.cookielaw.org/consent/6eca8e57-5841-4212-ab31-8be9f0a4fe35/OtAutoBlock.js"></script>
<script src="https://cdn.cookielaw.org/consent/6eca8e57-5841-4212-ab31-8be9f0a4fe35/otSDKStub.js" data-language="en" type="text/javascript" charset="UTF-8" data-domain-script="6eca8e57-5841-4212-ab31-8be9f0a4fe35"></script>
<script type="text/javascript">
    function OptanonWrapper() { }
</script>
<!-- OneTrust Cookies Consent Notice end for developers.ringcentral.com -->

    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta http-equiv="X-UA-COMPATIBLE" content="IE=edge">
<meta name="keywords" content="">
<meta name="description" content="">
<title>Community - RingCentral for Developers</title>
<link href="/assets/images/favicon.ico?v=20240102-0636" type="image/vnd.microsoft.icon" rel="shortcut icon">

<script type="text/javascript">
    (function() {
        var didInit = false;
        function initMunchkin() {
            if(didInit === false) {
                didInit = true;
                Munchkin.init('075-DTB-715', {
                    asyncOnly: true,
                    disableClickDelay: true
                });
            }
        }
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = '//munchkin.marketo.net/munchkin.js';
        s.onreadystatechange = function() {
            if (this.readyState == 'complete' || this.readyState == 'loaded') {
                initMunchkin();
            }
        };
        s.onload = initMunchkin;
        document.getElementsByTagName('head')[0].appendChild(s);
    })();
</script>

    <link rel="stylesheet" type="text/css" href="/assets/vendor/medium-editor/dist/css/medium-editor.min.css?v=20240102-0636">
    <link rel="stylesheet" type="text/css" href="/assets/vendor/c3/c3.css?v=20240102-0636">
    <link rel="stylesheet" type="text/css" href="/assets/vendor/flatpickr/dist/flatpickr.css?v=20240102-0636">
    <link rel="stylesheet" type="text/css" href="/assets/vendor/highlight.js/styles/atom-one-light.css?v=20240102-0636">
    <link rel="stylesheet" type="text/css" href="/assets/vendor/overlay-scrollbars/css/OverlayScrollbars.min.css?v=20240102-0636">
    <link rel="stylesheet" type="text/css" href="/assets/css/main.css?v=20240102-0636">
    <script data-ot-ignore="" type="text/javascript" src="/assets/js/libs.js?v=20240102-0636"></script>

<script data-ot-ignore="" type="text/javascript" src="/assets/js/main.js?v=20240102-0636"></script>

    <script data-ot-ignore="" src="/assets/js/onetrust.js?v=20240102-0636"></script>

    
    <script data-ot-ignore="" type="text/javascript" src="/assets/js/community.js?v=20240102-0636"></script>
    <script data-ot-ignore="" type="application/ld+json">
        //Structured Data for RingCentral Organization
        {
          "@context": "http://www.schema.org",
          "@type": "Organization",
          "name": "RingCentral Connect Platform",
          "url": "https://developers.ringcentral.com/",
          "parentOrganization": "RingCentral",
          "sameAs": [
            "http://twitter.com/ringcentraldevs"
          ],
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "20 Davis Drive",
            "addressLocality": "Belmont",
            "addressRegion": "California",
            "postalCode": "94002",
            "addressCountry": "USA"
            },
          "contactPoint": [
            {
            "@type": "ContactPoint",
            "telephone": "+1(877) 857-9206",
            "contactType": "Sales"
            },
            {
            "@type": "ContactPoint",
            "telephone": "+1(888) 528-7464",
            "contactType": "Customer Support"
            }
            ]
        }
    </script>
</head>
<body class="page-community">
<noscript>
    <style>
        .index-use-cases {
            display: none;
        }
    </style>
    <div class="noscript">
        <img src="/assets/images/alert-icon.png?v=20240102-0636" class="v-middle">
        <span class="v-middle">RingCentral for Developers requires JavaScript to be enabled.</span>
    </div>
</noscript>
<script type="text/ng-template" id="dpw-popup.html">
    <div class="popup-container">
        <div class="popup-header" ng-if="showHeader!=&#39;false&#39;">
            <div class="popup-close-btn" ng-click="ctrl.close();" ng-show="showCloseBtn!=&#39;false&#39;">&#xD7;</div>
            <div ng-bind="title" class="popup-title"></div>
        </div>
        <div ng-transclude="" class="popup-main-section">

        </div>
    </div>
    <div class="popup-background"></div>
</script>

<script type="text/ng-template" id="dpw-flipper.html">
    <div class="flipper-container">
        <div class="flipper" ng-class="{flipping: isFlipped === &#39;true&#39;}">
            <div ng-transclude="">
                <!-- <div class="front"> </div> -->
                <!-- <div class="back"> </div> -->
                <!-- Height of .front and .back must be the same.  -->
            </div>
        </div>
    </div>
</script>
<script type="text/ng-template" id="dpw-sort-arrows.html">
    <div class="dpw-sort-arrows" ng-class="{&#39;dpw-sort-asc&#39;: dpwThSort===true, &#39;dpw-sort-desc&#39;: dpwThSort===false, &#39;dpw-sort-arrows-compact&#39;: ctrl.compact===true}">
        <div class="dpw-sort-arrow dpw-sort-arrow-up" ng-click="ctrl.sort(&#39;asc&#39;)"></div>
        <div class="dpw-sort-arrow dpw-sort-arrow-down" ng-click="ctrl.sort(&#39;desc&#39;)"></div>
    </div>
</script>
<script type="text/ng-template" id="dpw-error-switch.html">
    <div ng-class="{&#39;error-switch-sorry-emoji&#39;: !errorMessage }" class="error-switch-message paragraph" ng-show="errorSwitchStatus === &#39;on&#39;" ng-bind="errorMessage || defaultErrorMessage"></div>
    <div ng-hide="errorSwitchStatus === &#39;on&#39;" ng-transclude=""></div>
</script>

<script type="text/ng-template" id="dpw-page-path.html"></script>

<script type="text/ng-template" id="dpw-banner.html">
    <div ng-if="bannerCtrl.bannerConfig" class="banner">
        <div ng-class="bannerCtrl.bannerConfig.extraClass">
            <div class="banner-bg">
                <div class="banner-content">
                    <div class="banner-content-desc-container">
                        <h1 class="banner-content-hero-header" tabindex="0" ng-bind-html="bannerCtrl.pageTexts.heroHeader || bannerCtrl.heroHeaderDefaults"></h1>
                        <div class="banner-content-hero-description" ng-if="bannerCtrl.bannerConfig.showHeroDescription" tabindex="0" ng-bind-html="bannerCtrl.pageTexts.heroDescription || bannerCtrl.heroDescriptionDefaults"></div>
                        <div class="banner-content-extra-content">
                            <div class="dpw-banner-general-extra-content">
                                <dpw-free-sign-up-box ng-if="bannerCtrl.bannerConfig.withFreeSignUp" primary-text="bannerCtrl.pageTexts.heroCtaPrimaryText" secondary-text="bannerCtrl.pageTexts.heroCtaSecondaryText">
                                </dpw-free-sign-up-box>
                            </div>
                        </div>
                    </div>
                    <div class="banner-content-image">
                        <img ng-src="/assets/images/banners/{{ bannerCtrl.bannerConfig.image }}?v=20240102-0636" alt="{{bannerCtrl.pageTexts.heroHeader}}">
                    </div>
                </div>
            </div>
        </div>
    </div>
</script>


<script type="text/ng-template" id="dpw-announcement-hint.html">
    <a href="/support/announcements.html#/announcements" title="Announcements" class="announcement-hint blueText inline-block v-middle">
        <i class="announcement-hint-icon icon-announcement inline-block v-middle"></i>
        <span ng-if="hint.unreadItemsCount &gt; 0" class="announcement-hint-unread-badge" ng-bind="hint.unreadItemsCount"></span>
    </a>
</script>

<script type="text/ng-template" id="dpw-hMenus.html">
    <div class="horizontal-menu" ng-class="{&#39;x-hidden&#39;: menuItems.length == 0}">
        <ul class="center-section">
            <li ng-repeat="item in menuItems" class="horizontal-menu-item" ng-if="hMenusCtrl.isShowMenu(item)" ng-class="{&#39;h-menu-selected&#39;: item.isSelected}" ng-mouseenter="hMenusCtrl.setExpanded(true, item)" ng-mouseleave="hMenusCtrl.setExpanded(false, item)">
                <div ng-if="hMenusCtrl.isSep(item)" ng-bind="item" class="horizontal-menu-item-sep"></div>
                <a ng-if="!hMenusCtrl.isSep(item)" ng-click="hMenusCtrl.clickHandler(item, null, $event)" ng-bind="item.text" class="horizontal-menu-item-content horizontal-menu-item-link" ng-class="{&#39;h-menu-has-sub-menu&#39;: item.items}" ng-attr-taid="{{item.href||item.path}}" ng-href="{{hMenusCtrl.getHref(item)}}"></a>
                <ul class="horizontal-sub-menu" ng-class="{&#39;x-hidden&#39;: !item.isExpanded}" ng-if="item.items.length &gt; 0">
                    <li ng-repeat="subItem in item.items" class="horizontal-sub-menu-item">
                        <a ng-click="hMenusCtrl.clickHandler(subItem, item, $event)" ng-bind="subItem.text" class="horizontal-sub-menu-item-content horizontal-menu-item-link" ng-class="{&#39;h-menu-selected&#39;: subItem.isSelected}" ng-attr-taid="{{subItem.href||subItem.path}}" ng-href="{{hMenusCtrl.getHref(subItem)}}"></a>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</script>

<script type="text/ng-template" id="dpw-pagination.html">
    <div class="dpw-pagination" ng-show="paging.totalPages&gt;1">
        <span class="dpw-pagination-nav-item dpw-pagination-nav-item-first" ng-click="ctrl.first();" ng-class="{&#39;dpw-pagination-nav-item-disabled&#39;:ctrl.isFirst()}">&lt;&lt;&#xA0;</span>
        <span class="dpw-pagination-nav-item dpw-pagination-nav-item-prev" ng-click="ctrl.prev();" ng-class="{&#39;dpw-pagination-nav-item-disabled&#39;:ctrl.isFirst()}">&#xA0;&lt;&#xA0;</span>
        <span class="dpw-pagination-current-page">
            <span>Page&#xA0;</span>
            <span ng-bind="paging.page" class="dpw-pagination-current-page-num"></span>
            <span>&#xA0;of&#xA0;</span>
            <span ng-bind="paging.totalPages" class="dpw-pagination-total-page-num"></span>
        </span>
        <span class="dpw-pagination-nav-item dpw-pagination-nav-item-next" ng-click="ctrl.next();" ng-class="{&#39;dpw-pagination-nav-item-disabled&#39;:ctrl.isLast()}">&#xA0;&gt;&#xA0;</span>
        <span class="dpw-pagination-nav-item dpw-pagination-nav-last" ng-click="ctrl.last();" ng-class="{&#39;dpw-pagination-nav-item-disabled&#39;:ctrl.isLast()}">&#xA0;&gt;&gt;</span>
    </div>
</script>

<script type="text/ng-template" id="dpw-checkbox.html">
    <input type="checkbox" name="{{name}}" ng-model="model" ng-attr-id="{{forId}}" ng-disabled="isDisabled" ng-required="required">
    <label ng-attr-for="{{forId}}" ng-bind-html="text || &#39;&#xA0;&#39;" ng-click="ctrl.onClick($event)"></label>
</script>
<script type="text/ng-template" id="dpw-radio.html">
    <input type="radio" ng-model="model" ng-attr-id="{{forId}}" ng-disabled="isDisabled" ng-change="change()" name="{{name}}" ng-value="value" ng-required="required" ng-class="{&#39;dpwta-radio-checked&#39;: model === value, &#39;dpwta-radio-disabled&#39;: isDisabled }">
    <label ng-attr-for="{{forId}}" ng-bind-html="text || &#39;&#xA0;&#39;"></label>
</script>
<script type="text/ng-template" id="dpw-alert-box.html">
    <div class="dpw-alert-box">
        <div class="dpw-alert-box-icon"></div>
        <div ng-click="ctrl.close()" class="dpw-alert-box-close-btn">&#xD7;</div>
        <div ng-transclude="" class="dpw-alert-box-content"></div>
    </div>
</script>

<script type="text/ng-template" id="dpw-drop-down-list.html">
    <div class="dpw-drop-down-list" ng-class="{&#39;dpw-drop-down-list-disabled&#39;: isDisabled===&#39;true&#39;}">
        <span ng-bind="{{labelPattern}}" class="dpw-drop-down-list-text dpw-add-title noWrap"></span>
        <span ng-bind="labelRight" class="dpw-drop-down-list-text-right"></span>
        <select ng-options="{{optionPattern}}" class="dpw-drop-down-list-select" ng-model="model" ng-attr-name="{{name}}" ng-disabled="isDisabled===&#39;true&#39;"></select>
    </div>
</script>

<script type="text/ng-template" id="dpw-pagination-simple.html">
    <div class="pagination-simple">
        <a class="pagination-simple-older" ng-if="pagination.hasOld" ng-click="pagination.old()">&#xAB;&#xA0;Older posts
        </a>
        <a class="pagination-simple-newer" ng-if="pagination.hasNew" ng-click="pagination.new()">Newer posts&#xA0;&#xBB;
        </a>
    </div>
</script>

<script type="text/ng-template" id="dpw-chosen.html">
    <div class="dpw-chosen" ng-class="{&#39;dpw-chosen-disabled&#39;: isDisabled===&#39;true&#39;}">
        <select class="x-hidden" ng-disabled="isDisabled===&#39;true&#39;" tabindex="0" name="{{chosenName}}" ng-required="required" ng-model="model" multiple ng-options="item.id as item.name for item in optionsSource"></select>
    </div>
</script>
<script type="text/ng-template" id="dpw-appKey-secret.html">
    <div class="appkey-secret">
        <span ng-bind="key.secret" ng-show="key.isMasked===false" class="appkey-secret-text ellipsis"></span>
        <a ng-click="ctrl.click()" ng-if="key.isMasked!==false">Click to see</a>
    </div>
</script>
<script type="text/ng-template" id="dpw-first-login-agreement.html">
    <div class="first-time-login-agreement">
        <div class="title">
            Welcome RingCentral Connect Platform Developer!
        </div>
        <div class="description">
            In order to proceed and use the APIs published by RingCentral,
            please indicate once that you read our API Licensing agreement.
        </div>
        <div class="agreement">
            <div dpw-checkbox="" model="ctrl.agreementMark" for-id="first-login-agreement" text="I read the RingCentral API License" change="ctrl.onMarkChange()" class="agreement-checkbox"></div>
            <a href="https://www.ringcentral.com/legal/apilitos.html" target="_blank" class="agreement-link">agreement</a>
        </div>
        <div class="terms-and-conditions" ng-if="ctrl.brandTNCEnabled()">
            <div dpw-checkbox="" model="ctrl.termsAndConditionsMark" for-id="first-login-tnc" text="I read {{ ctrl.termsAndConditionsText }}" change="ctrl.onMarkChange()" class="agreement-checkbox"></div>
        </div>
        <div class="button-area">
            <div class="button button-with-border-blue disagree-button" ng-class="{&#39;button-disabled&#39;: !ctrl.agreed}" ng-click="ctrl.disagree()">
                <span>Disagree</span>
            </div>
            <div class="button button-orange agree-button" ng-class="{&#39;button-disabled&#39;: !ctrl.agreed}" ng-click="ctrl.agree()"><span>Agree</span>
            </div>
        </div>
    </div>
</script>

<script type="text/ng-template" id="dpw-back-to-top.html">
    <div class="back-to-top" ng-show="$ctrl.visible">
        <a href="#" ng-click="$ctrl.top($event)" class="back-to-top-link">Back to top</a>
    </div>
</script>

<script id="dpw-slider.html" type="text/ng-template">
    <div class="slider-wrapper">
        <a class="right arrow slider-icon" ng-show="currentPageIndex &lt; totalPages - 1" ng-click="switchToNextPage()"></a>
        <a class="left arrow slider-icon" ng-hide="currentPageIndex === 0" ng-click="switchToPreviousPage()"></a>

        <div class="slider">
            <div class="slider-scroller" ng-transclude="">
            </div>
        </div>
    </div>
</script>

<script id="dpw-carousel.html" type="text/ng-template">
    <div class="dpw-carousel">
        <div class="dpw-carousel-scroller" ng-style="styles.scroller">
            <div ng-repeat="src in resources track by $index" class="dpw-carousel-slide table-layout left" ng-style="styles.slide">
                <div class="table-layout-cell" ng-switch="srcType(src)">
                    <div ng-switch-when="video" dpw-youtube="" youtube-width="676" youtube-height="380" ng-style="styles.resource" youtube-url="{{src}}">
                    </div>
                    <img ng-switch-when="file" ngf-src="src.file" ng-style="styles.resource" src="/assets/images/loader_gray.gif?v=20240102-0636" alt="">
                    <img ng-switch-default="" ng-src="{{src}}?v=20240102-0636" ng-style="styles.resource" src="/assets/images/loader_gray.gif?v=20240102-0636" alt="">
                </div>
            </div>
        </div>
        <div class="dpw-carousel-indicator-wrapper" ng-hide="hideIndicators">
            <div class="dpw-carousel-indicator" ng-style="styles.indicator">
                <div class="dpw-carousel-indicator-dotty"></div>
                <div class="dpw-carousel-indicator-dot" ng-repeat="img in resources track by $index" ng-click="goToPage($index)">
                </div>
            </div>
        </div>
    </div>
</script>

<script id="dpw-collapsible-box.html" type="text/ng-template">
    <div class="dpw-collapsible-box" ng-class="{&#39;dpw-collapsible-box-collapsed&#39;: ctrl.isCollapsed}">
        <!--<div ng-click="ctrl.isCollapsed = !ctrl.isCollapsed"-->
        <!--class="dpw-collapsible-box-button">-->
        <!--<div class="dpw-collapsible-box-button-icon"></div>-->
        <!--</div>-->
        <div class="dpw-collapsible-box-title">
            <span ng-click="ctrl.isCollapsed = !ctrl.isCollapsed" class="pointer">
              <span class="dpw-collapsible-box-title-text v-middle" ng-bind="ctrl.title"></span>
              <span class="dpw-collapsible-box-see-more v-middle" ng-class="{&#39;dpw-collapsible-box-see-more-collapsed&#39;: ctrl.isCollapsed}"></span>
            </span>
        </div>
        <div class="dpw-collapsible-box-content" ng-transclude=""></div>
    </div>
</script>
<script id="dpw-collapsible-section.html" type="text/ng-template">
    <div class="collapsible-section hidden-overflow">
        <div class="section-title collapsible-section-container">
            <span ng-bind="ctrl.titleText"></span>

            <div class="collapsible-section-link" ng-click="ctrl.clickHandler()">
                <a class="collapsible-section-link-text">
                    <span ng-bind="&#39;Show &#39;" ng-if="ctrl.isCollapsed"></span>
                    <span ng-bind="&#39;Hide &#39;" ng-if="!ctrl.isCollapsed"></span>
                    <span ng-bind="ctrl.linkText"></span>
                </a>

                <div class="collapsible-section-link-arrow" ng-class="{&#39;collapsible-section-is-collapsed&#39;: ctrl.isCollapsed}"></div>
            </div>
        </div>
        <div class="separator" ng-if="ctrl.isCollapsed"></div>
    </div>
</script>

<script type="text/ng-template" id="dpw-popup-utils.html">
    <div class="dpw-popup-common console-ui">
        <div class="simple-popup">
            <div class="simple-popup-title" ng-bind="settings.title" data-test-automation-id="popup-title"></div>
            <div class="simple-popup-text" ng-bind-html="settings.content" data-test-automation-id="popup-content"></div>
            <div class="simple-popup-button-area">
                <div class="button simple-popup-button-area-btn" data-test-automation-id="popup-button-{{btn.label}}" ng-repeat="btn in settings.buttons track by $index" ng-class="btn.style" ng-click="btn.onClick($event)">
                    <span ng-bind="btn.label"></span>
                </div>
            </div>
        </div>
    </div>
</script>

<script type="text/ng-template" id="dpw-copy-popup.html">
    <div class="dpw-copy-popup-container">
        <div class="dpw-copy-popup-desc" ng-bind="ctrl.desc"></div>
        <div class="dpw-copy-popup-text-container">
            <input id="dpw-copy-popup-text" readonly ng-model="ctrl.text" class="fieldInputText">
        </div>
    </div>
</script>

<script type="text/ng-template" id="dpw-tooltip-info.html">

    <div class="dpw-tooltip-info" role="tooltip" tabindex="0" ng-mouseenter="ctrl.displayContent()" ng-mouseleave="ctrl.hideContent()" ng-class="[ctrl.large &amp;&amp; &#39;dpw-tooltip-info-large&#39;, ctrl.extraClass]" aria-label="{{ctrl.content}}">
        <div class="dpw-tooltip-info-control" ng-class="ctrl.isShowContent &amp;&amp; &#39;dpw-tooltip-info-control-on&#39;">
            <span class="dpw-tooltip-info-icon icon-i-info"></span>
        </div>

        <div class="dpw-tooltip-info-content-container" ng-show="ctrl.isShowContent" data-test-automation-id="dpw-tooltip-info-content">
            <div class="dpw-tooltip-info-content" tabindex="0" ng-transclude=""></div>
        </div>

    </div>

</script>

<script type="text/ng-template" id="dpw-tooltip-entry.html">
    <div class="tooltip-entry inline-block" ng-class="{
            &#39;tooltip-entry-hover&#39;: ctrl.isTriggeredByHover,
            &#39;dpw-tooltip-auto-width&#39;: ctrl.autoWidth,
            &#39;dpw-tooltip-entry-large&#39;: ctrl.large
        }">

        <div class="tooltip-entry-control" data-test-automation-id="tooltip-entry-control" ng-class="ctrl.showMessage &amp;&amp; &#39;tooltip-entry-control-on&#39;" ng-mouseleave="ctrl.mouseleave()" ng-mouseenter="ctrl.hoverEntry()" ng-click="ctrl.clickEntry()" ng-transclude=""></div>

        <div class="tooltip-entry-box-container" data-test-automation-id="tooltip-entry-box-container">
            <div class="tooltip-box" ng-show="ctrl.showMessage" ng-mouseenter="ctrl.mouseenter()" ng-mouseleave="ctrl.mouseleave()">
                <div class="tooltip-box-close-btn" ng-click="ctrl.showMessage=false">&#xD7;</div>
                <div class="tooltip-box-content" ng-bind="ctrl.message" ng-class="{&#39;noWrap&#39;: ctrl.noWrap}"></div>
            </div>
        </div>
    </div>
</script>

<script type="text/ng-template" id="dpw-tooltip-box.html">
    <div class="dpw-tooltip-box" ng-show="ctrl.isShowTooltip">
        <div class="dpw-tooltip-box-indicator"></div>
        <div class="dpw-tooltip-box-container">
            <div class="tooltip-box">
                <div class="tooltip-box-close-btn" ng-click="ctrl.isShowTooltip=false">&#xD7;</div>
                <div class="tooltip-box-content" ng-bind="ctrl.text"></div>
            </div>
        </div>
    </div>
</script>
<script type="text/ng-template" id="dpw-switcher.html">
    <div class="dpw-switcher" ng-class="[ctrl.style, ctrl.extraClass]">
        <div class="dpw-switcher-item" ng-repeat="item in ctrl.items" ng-class="{&#39;dpw-switcher-active&#39;: item.active, &#39;dpw-switcher-disabled&#39;: item.disabled}">
            <a href="#" ng-href="{{item.href || &#39;#&#39; }}" ng-click="item.onClick($event)">{{ item.label }}</a>
        </div>
    </div>
</script>
<script type="text/ng-template" id="dpw-alert.html">
    <div class="dpw-alert dpw-alert-{{$ctrl.level}}" ng-if="$ctrl.couldDisplay" ng-class="$ctrl.extraClass">
        <div class="dpw-alert-body">
            <button type="button" class="dpw-alert-close" ng-if="$ctrl.dismissible" ng-click="$ctrl.dismiss()">
                <span>&#xD7;</span>
            </button>
            <div ng-transclude=""></div>
        </div>
    </div>
</script>
<script type="text/ng-template" id="dpw-list-group.html">
    <dl class="dpw-list-group" ng-class="[&#39;dpw-list-group-highlight-&#39; + $ctrl.highlight, $ctrl.extraClass]">
        <dt class="dpw-list-group-header" ng-if="$ctrl.header" data-test-automation-id="dpw-list-group-header">
            {{ $ctrl.header }}
        </dt>
        <dd class="dpw-list-group-item" ng-repeat="item in $ctrl.items track by $index" data-test-automation-id="dpw-list-group-item" ng-class="[
                item.active ? &#39;dpw-list-group-item-active&#39; : &#39;&#39;,
                item.iconTail ? &#39;dpw-list-group-item-has-tail-icon&#39; : &#39;&#39;,
                item.extraClass ? item.extraClass : &#39;&#39;
            ]">
            <a class="dpw-list-group-item-link" ng-href="{{item.href}}" ng-if="item.href">
                <i class="dpw-list-group-item-icon v-middle {{item.icon}}" ng-if="item.icon"></i>
                <span class="dpw-list-group-item-label v-middle">{{ item.label }}</span>
                <span ng-if="item.iconTail" class="dpw-list-group-item-icon-tail">
                    <span ng-switch="!!item.iconTail.tooltip">
                        <span ng-switch-when="true">
                            <span dpw-tooltip-entry="" message="item.iconTail.tooltip" trigger="hover">
                                <i class="inline-block icon-icon_triangle_exclamation"></i>
                            </span>
                        </span>
                        <i ng-switch-when="false" class="inline-block icon-icon_triangle_exclamation"></i>
                    </span>
                </span>
            </a>
            <span class="dpw-list-group-item-plain" ng-if="!item.href">
                <i class="dpw-list-group-item-icon v-middle {{item.icon}}" ng-if="item.icon"></i>
                <span class="dpw-list-group-item-label v-middle">{{ item.label }}</span>
            </span>
        </dd>
    </dl>
</script>


<script id="dpw-keep-me-informed.html" type="text/ng-template">
    <div class="subscribe-form">
        <form dpw-jq-validate="" rule="subscribe">
            <div class="inputTextContainer inline-block">
                <input id="email" name="email" type="text" class="fieldInputText subscribe-form-email" maxlength="80" dpw-place-holder="" placeholder="Email" ng-model="email">
            </div>
            <div class="button fieldSubmit subscribe-form-submit-button" ng-click="ctrl.submit()">Submit</div>
        </form>
    </div>
</script>
<script id="dpw-keep-me-informed-index.html" type="text/ng-template">
    <div class="index-keep-me-informed">
        <div class="index-keep-in-touch-title">Keep in touch</div>
        <div class="layout-2-cols">
            <div class="index-keep-in-touch-section">
                If you&#x2019;re not ready to work with our RingCentral Connect Platform just yet but you&#x2019;d like to receive
                regular updates from us, send us your email address. We&#x2019;ll keep you informed.
            </div>
            <div class="subscribe-form">
                <form dpw-jq-validate="" rule="subscribe">
                    <div class="inputTextContainer inline-block">
                        <input id="email" name="email" type="text" maxlength="80" class="fieldInputText index-subscribe-form-email" dpw-place-holder="" placeholder="Email" ng-model="email">
                    </div>
                    <div class="button-orange inline-block fieldSubmit subscribe-form-submit-button" ng-click="ctrl.submit()">Keep me informed
                    </div>
                </form>
            </div>
        </div>
    </div>
</script>
<script id="dpw-try-and-service-buttons.html" type="text/ng-template">
    <div class="try-and-service-buttons" ng-if="$ctrl.isVisible" dpw-floating-element="" position="bottom" priority="10">
        <a class="try-and-service-buttons-tryForFree button-orange" href="/sign-up" ng-bind="$root.siteWideTexts.footerSignUpCta"></a>
        <a class="try-and-service-buttons-plan button" href="https://www.ringcentral.com/office/plansandpricing.html" target="_blank" ng-bind="$root.siteWideTexts.footerPricingCta"></a>
    </div>
</script>
<script type="text/ng-template" id="login-form.html">
    <div class="login-sections-wrapper hidden-overflow">
        <div class="login-rc-form-section">
            <form dpw-jq-validate="" submit-on-enter="" rule="login" class="loginForm">
                <div class="login-section-title login-rc-form-title">
                    Already have a RingCentral or Partner Account?
                    <dpw-tooltip-info>Partner accounts include AT&amp;T Office@Hand</dpw-tooltip-info>
                </div>
                <div class="login-rc-form-row">
                    <div dpw-drop-down-list="" model="loginCtrl.country" name="brand" options-source="loginCtrl.countryList" label-pattern="model.name" item-type="object" option-pattern="item.name for item in optionsSource"></div>
                </div>
                <div class="login-rc-form-row login-rc-form-phone">
                    <div class="inputTextContainer">
                        <input class="login-rc-form-input" placeholder="Phone Number" dpw-place-holder="" ng-model="loginCtrl.userInfo.user" type="text" name="user" maxlength="100">
                    </div>
                    <div class="inputTextContainer login-rc-form-extension">
                        <input class="login-rc-form-input login-rc-form-extension-input" dpw-place-holder="" placeholder="Extension (optional)" ng-model="loginCtrl.userInfo.extension" type="text" name="extension">
                    </div>
                </div>
                <div class="login-rc-form-row">
                    <div class="inputTextContainer">
                        <input class="login-rc-form-input" dpw-place-holder="" placeholder="Password" ng-model="loginCtrl.userInfo.password" type="password" name="password">
                    </div>
                </div>
                <div class="login-rc-form-row login-rc-form-password-actions">
                    <span class="login-rc-form-remember-me" dpw-checkbox="" text="Remember me" for-id="rememberMe" model="loginCtrl.userInfo.rememberMe"></span>
                    <a class="login-rc-form-forget-password" ng-href="{{loginCtrl.forgetPasswordUrl}}">Forgot
                        password?</a>
                </div>
                <div class="login-rc-form-submit-button button-orange fieldSubmit" ng-click="loginCtrl.submit()">Sign In
                </div>
                <div class="login-rc-form-sso-link" dpw-sso-login="" sso-entry-point="signup" sso-url-api-path="sso.getSsoUrl">Single Sign-On
                </div>
                <div class="login-rc-form-sso-link" dpw-three-leg-login="" ng-if="false" sso-entry-point="signup">
                    Three Legged Login
                </div>
            </form>
        </div>
        <div class="login-guest-section">
            <div class="login-section-title">Need an Account?</div>
            <p class="login-guest-paragraph">
                The RingCentral for Developers program is currently included for MVP&#x2122; Ultimate and MVP&#x2122; Premium
                customers. Free developer accounts are available for ISV and VAR developers.
            </p>
            <div>
                <a href="/sign-up" class="button button-middle login-guest-free-sign-up-button">
                    <span>Free Sign Up</span>
                </a>
            </div>
            <a target="_blank" ng-href="{{loginCtrl.plansAndPricingUrl}}" class="login-guest-link">Become a Customer</a>
            <a target="_blank" href="https://www.ringcentral.com/partner/isvreseller.html" class="login-guest-link">Join
                the Partner Program</a>
        </div>
    </div>
</script>

<script type="text/ng-template" id="dpw-sticker.html">
    <div class="dpw-sticker" ng-class="classes">
        <div class="dpw-sticker-content center-section" ng-transclude=""></div>
    </div>
</script>

<script type="text/ng-template" id="dpw-youtube.html">
    <iframe width="{{ youtubeCtrl.width || 560 }}" height="{{ youtubeCtrl.height || 315 }}" ng-src="{{youtubeCtrl.url | trustAsResourceUrl}}" frameborder="0" allowfullscreen></iframe>
</script>

<script type="text/ng-template" id="dpw-sso-login.html">
    <span ng-click="ssoCtrl.login($event)" ng-transclude=""></span>
</script>

<script type="text/ng-template" id="dpw-three-leg-login.html">
    <span ng-click="threeLegCtrl.login()" ng-transclude=""></span>
</script>


<script type="text/ng-template" id="application-reports-context.html">
    <div class="application-reports-context right">
        <div ng-repeat="status in ctrl.appStatusList" class="application-reports-context-item" data-test-automation-id="application-reports-env" ng-class="{&#39;current&#39;: !status.disabled &amp;&amp; ctrl.isCurrentContext(status.id), &#39;disabled&#39;: status.disabled}">
            <button ng-bind="status.id" ng-click="ctrl.switchContext(status)"></button>
        </div>
    </div>
</script>

<script type="text/ng-template" id="application-reports-main.html">
    <div class="application-query-summary">
        <div class="application-query-summary-duration">
            Duration: <br ng-if="ctrl.isSummaryMultiline()">
            <span class="application-query-summary-from">
                <span class="application-query-summary-from-date bold"></span>
                <span class="application-query-summary-from-time"></span>
            </span>
            -
            <span class="application-query-summary-to">
                <span class="application-query-summary-to-date bold"></span>
                <span class="application-query-summary-to-time"></span>
            </span>
            <span class="application-query-summary-timezone-indication">(UTC)</span>

            <dpw-tooltip-info extra-class="application-query-summary-duration-tooltip" content-width="300" data-test-automation-id="analytics-report-duration-tooltip" ng-if="ctrl.showSummaryDurationTooltip()">
                Daily aggregation does not include the current hour.
            </dpw-tooltip-info>

        </div>
        <div class="application-query-summary-data"></div>
    </div>

    <div class="application-reports-result">
        <div class="legend-wrap"></div>
        <div class="application-reports-chart"></div>
    </div>

    <div class="application-reports-message"></div>
</script>

<script type="text/ng-template" id="reports-custom-legend.html">
    <div class="reports-custom-legend">
        <div class="reports-custom-legend-item" title="{{item.message}}" ng-repeat="item in legendItems" ng-click="ctrl.onClickHandler(item)">

            <div ng-include="&#39;reports-custom-legend-item-content.html&#39;"></div>
        </div>
    </div>
</script>
<script type="text/ng-template" id="reports-custom-legend-item-content.html">
    <i class="reports-custom-legend-item-circle" ng-style="{&#39;border-color&#39;: item.color, &#39;background&#39;: item.checked ? item.color : &#39;none&#39;}"></i>
    <span ng-bind="item.label"></span>
</script>
<script type="text/ng-template" id="reports-stack-legend.html">
    <div class="reports-stack-legend" ng-style="{&#39;margin-left&#39;: ctrl.additionalMarginValue}">
        <div class="reports-stack-legend-item" ng-repeat="item in ctrl.legendTypes" data-checked="{{item.checked}}" ng-click="ctrl.onClickHandler(item.id)">
            <i ng-class="item.iconClass"></i>
        </div>
    </div>
</script>

<script type="text/ng-template" id="application-reports.html">
    <div class="application-reports">
    <div class="application-reports-context-list" ng-include="&#39;application-reports-context.html&#39;"></div>
    <div class="query-types application-reports-tab dpw-switcher-tabCard">
        <div ng-repeat="type in ctrl.queryTypes" data-test-automation-id="app-reports-query-type-tab" class="dpw-switcher-item" ng-class="{&#39;dpw-switcher-active&#39;: type.selected}">
            <a ng-click="ctrl.query($event, &#39;type&#39;, type.id)">
                {{type.label}}
            </a>
        </div>
    </div>
    <div class="application-reports-retrieve right">
        <span class="application-reports-retrieve-last-updated">
            Last updated: <span class="application-reports-retrieve-date"></span>
        </span>

        <dpw-tooltip-info content-width="210" class="application-reports-retrieve-tooltip" data-test-automation-id="app-reports-update-date-retrieve-tooltip">
            The data is updated every {{ctrl.getDataUpdateTooltip()}}.
        </dpw-tooltip-info>
        <button class="application-reports-retrieve-btn" ng-click="ctrl.retrieve()">
            <i class="icon-btn_refresh application-reports-retrieve-icon"></i>
        </button>
    </div>
    <div class="query-durations application-reports-tab dpw-switcher-tabLine">
        <div ng-repeat="duration in ctrl.queryDurations" data-test-automation-id="app-reports-duration-tab" class="dpw-switcher-item" ng-class="{&#39;dpw-switcher-active&#39;: duration.selected}">
            <a ng-click="ctrl.query($event, &#39;duration&#39;, duration.id)" ng-class="{&#39;disabled&#39;: ctrl.isDurationDisabled(duration.id)}">
                {{duration.label}}
            </a>
        </div>
    </div>
    <div ng-include="&#39;application-reports-main.html&#39;"></div>
</div>

</script>
<script type="text/ng-template" id="dpw-app-dashboard-reports.html">
    <div class="panel">
        <div class="panel-heading">
            <div class="dpw-app-dashboard-reports-context-list" ng-include="&#39;application-reports-context.html&#39;"></div>
            <div class="panel-title">Analytics - API Calls</div>
        </div>
        <div class="panel-body dpw-app-dashboard-reports">
            <div ng-include="&#39;application-reports-main.html&#39;"></div>
        </div>
    </div>
    <dpw-loading visible="ctrl.showReportLoading"></dpw-loading>
</script>



<script type="text/ng-template" id="dpw-swagger-ui-api-selector.html">
    <div class="api-explorer-version-selector">
        <div class="api-docs-version dpw-drop-down-list">
            <span class="dpw-drop-down-list-text" ng-bind="apiSelectorCtrl.currentLevel.label"></span>
            <select class="dpw-drop-down-list-select" ng-model="apiSelectorCtrl.currentLevel" ng-change="apiSelectorCtrl.switchApi()" ng-options="level.label for level in apiSelectorCtrl.accessLevels"></select>
        </div>
    </div>
</script>

<script type="text/ng-template" id="dpw-swagger-ui-api-authorizer.html">
    <div class="api-explorer-authorizer">
        <div ng-if="apiAuthorizeCtrl.isLogin" class="dpw-display-fields">
            <div class="dpw-display-field">
                <div class="dpw-display-field-label">Environment*</div>
                <div class="dpw-display-field-data">
                    <span dpw-radio="" for-id="{{apiAuthorizeCtrl.sandboxId}}" model="apiAuthorizeCtrl.environment" name="{{apiAuthorizeCtrl.envName}}" change="apiAuthorizeCtrl.changeEnv(&#39;sandbox&#39;)" value="&#39;sandbox&#39;" text="Sandbox">
                    </span>
                    <span dpw-radio="" for-id="{{apiAuthorizeCtrl.prodId}}" ng-if="apiAuthorizeCtrl.prodVisible" model="apiAuthorizeCtrl.environment" name="{{apiAuthorizeCtrl.envName}}" change="apiAuthorizeCtrl.changeEnv(&#39;production&#39;)" value="&#39;production&#39;" text="Production">
                    </span>
                </div>
            </div>
            <div class="dpw-display-field">
                <div class="dpw-display-field-label">Application*</div>
                <div class="dpw-display-field-data api-explorer-authorizer-chosen v-middle" dpw-chosen="" is-single="" model="apiAuthorizeCtrl.selectedApp" options-source="apiAuthorizeCtrl.applications" chosen-options="{width: &#39;220px&#39;,placeholder_text_single:&#39;Select an app&#39;}"></div>
                <button ng-if="!apiAuthorizeCtrl.isPopup" ng-click="apiAuthorizeCtrl.authorize($event)" class="api-explorer-authorizer-button v-middle" ng-class="{&#39;button-disabled&#39;:!apiAuthorizeCtrl.selectedApp}">Authorize
                </button>
            </div>

        </div>
        <div class="popup-container-panel-body-footer clearfix" ng-if="apiAuthorizeCtrl.isPopup">
            <div class="right">
                <button ng-click="apiAuthorizeCtrl.authorize($event)" ng-class="{&#39;button-disabled&#39;:!apiAuthorizeCtrl.selectedApp}" class="api-explorer-authorizer-button v-middle">Authorize
                </button>
            </div>
        </div>
        <div class="api-explorer-authorizer-msg" ng-if="!apiAuthorizeCtrl.isLogin">
            <a href="/login" class="button button-orange api-explorer-authorizer-login" target="_self">Login</a>
            before trying any API
        </div>
    </div>
</script>
<script type="text/ng-template" id="dpw-swagger-ui-api-authorizer-popup.html">
    <div class="api-explorer-authorizer-popup">
        <div class="popup-container-panel">
            <div class="popup-container-panel-header">
                <div class="right font-size-0">
                    <span class="v-middle"></span>
                    <span class="popup-container-panel-close-btn " ng-click="ctrl.close()">&#xD7;</span>
                </div>
                <div>Select ENV &amp; App</div>
            </div>
            <div class="api-explorer-authorizer-popup-banner ng-hide" ng-show="ctrl.isProd">
                You&#39;re using API explorer under production environment!
            </div>
            <div class="popup-container-panel-body" dpw-swagger-ui-api-authorizer="" sandbox-id="ctrl.sandboxId" prod-id="ctrl.prodboxId" env-name="ctrl.envName" is-popup="true">
            </div>
        </div>
    </div>
</script>
<script type="text/ng-template" id="dpw-swagger-ui-api-authorize-success-popup.html">
    <div class="api-explorer-authorizer-popup">
        <div class="popup-container-panel">
            <div class="popup-container-panel-header">
                <div class="right font-size-0">
                    <span class="v-middle"></span>
                    <span class="popup-container-panel-close-btn " ng-click="ctrl.close()">&#xD7;</span>
                </div>
                <div>Congratulations!</div>
            </div>
            <div class="popup-container-panel-body">
                <div class="api-explorer-authorizer">
                    <div class="api-authorizer-popup-msg">
                        You have been authorized successfully! You can now make API calls.
                    </div>

                    <div class="popup-container-panel-body-footer clearfix">
                        <div class="right">
                            <button ng-click="ctrl.close()" class="api-explorer-authorizer-button v-middle">OK
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</script>
<script type="text/ng-template" id="dpw-multiple-redirect-uris.html">
    <div class="dpw-multiple-redirect-uris-input-field" ng-repeat="item in ctrl.redirectUris track by $index">
        <div class="dpw-multiple-redirect-uris-input-box">
            <div class="inputTextContainer">
                <input type="text" name="redirectUri-{{$index}}" class="fieldInputText" spellcheck="false" autocomplete="off" ng-model="ctrl.redirectUris[$index].uri" ng-readonly="ctrl.isReadonly(item) || ctrl.isDisabled === &#39;true&#39;" placeholder="For example, https://mycompany.com/" dpw-place-holder="" ng-class="{&#39;warning&#39;: ctrl.showWarning(item)}">
                <i class="icon-icon-exclamation" ng-if="ctrl.showWarning(item)"></i>
            </div>
            <div class="dpw-multiple-redirect-uris-remove-redirect-uri-btn user-select-none" ng-click="ctrl.removeRedirectUri($index)" ng-if="ctrl.isDisabled !== &#39;true&#39; &amp;&amp; ctrl.redirectUris.length &gt; 1">&#xD7;
            </div>
        </div>
        <div class="dpw-multiple-redirect-uris-error-message" ng-hide="ctrl.isReadonly(item) || ctrl.isDisabled === &#39;true&#39;">
            <div ng-if="ctrl.isDuplicated(item)" ng-bind="ctrl.errorMessageConfig.SHOULD_NOT_BE_DUPLICATED"></div>
            <div ng-if="ctrl.isInvalid(item) &amp;&amp; !ctrl.isDuplicated(item)" ng-bind="ctrl.errorMessageConfig.SHOULD_NOT_CONTAIN_WILDCARD"></div>
            <div ng-if="ctrl.isInsecure(item) &amp;&amp; !ctrl.isInvalid(item) &amp;&amp; !ctrl.isDuplicated(item)">
                {{ctrl.errorMessageConfig.HTTP_PROTOCOL_NOT_ALLOWED}}
                {{ctrl.canUseLocalhostUris() ? ctrl.errorMessageConfig.HTTP_PROTOCOL_ALLOWED_EXCEPTION : &#39;&#39;}}
            </div>
            <div ng-if="ctrl.hasUnusableLocalhostUri(item) &amp;&amp; !ctrl.isInsecure(item) &amp;&amp; !ctrl.isInvalid(item) &amp;&amp; !ctrl.isDuplicated(item)" ng-bind="ctrl.errorMessageConfig.LOCALHOST_NOT_ALLOWED_FOR_BOT_APP_AND_MNA">
            </div>
            <div ng-if="!ctrl.isOrgAllowUrl(item, ctrl.application)
                &amp;&amp; !ctrl.hasUnusableLocalhostUri(item)
                &amp;&amp; !ctrl.isInsecure(item)
                &amp;&amp; !ctrl.isInvalid(item)
                &amp;&amp; !ctrl.isDuplicated(item)">The URL is invalid
            </div>
        </div>
    </div>
    <div class="dpw-multiple-redirect-uris-required-error-message" ng-if="!ctrl.isRestApiAppRedirectUrisValid(ctrl.redirectUris,ctrl.application)" ng-bind="ctrl.errorMessageConfig.REQUIRED">
    </div>
    <div class="dpw-multiple-redirect-uris-add-more-btn user-select-none" data-test-automation-id="add-redirect-uri-button" ng-click="ctrl.addRedirectUri()" ng-hide="ctrl.shouldHideAddMore()" ng-class="{&#39;disabled&#39;: ctrl.isUnavailableToAdd()}"><i class="icon-icon_circle_plus"></i>Add more
    </div>
</script>

<script type="text/ng-template" id="dpw-app-status-history-list.html">
    <div class="dpw-app-status-history-list">
        <div class="dpw-app-status-history-item" ng-repeat="appState in appStates track by $index">
            <div>
                <div class="dpw-app-status-history-item-description">
                    <span ng-bind="appState.creationTime | date : &#39;yyyy/M/d, hh:mm a&#39;"></span>&#xA0;
                    <span ng-bind="ctrl.getUserName(appState)" class="bold"></span>&#xA0;
                    <span ng-if="appState.isCreateApp">created app</span>
                    <span ng-if="!appState.isCreateApp">
                        changed status to&#xA0;
                        <span ng-bind="appState.statusDisplayName" class="bold" ng-class="ctrl.getColorClassByAppStatus(appState.status)"></span>
                    </span>
                </div>
            </div>
            <div ng-if="!appState.isCreateApp &amp;&amp; appState.comment">
                <div class="dpw-app-status-history-item-comment" ng-bind="appState.comment"></div>
            </div>
        </div>
    </div>
</script>

<script type="text/ng-template" id="dpw-dev-app-status-history.html">
    <div class="dpw-app-status-history">
        <div ng-include="&#39;dpw-app-status-history-list.html&#39;"></div>
        <div class="right" dpw-pagination="" paging="paging"></div>
    </div>
</script>

<script type="text/ng-template" id="dpw-admin-app-status-history.html">
    <div class="dpw-app-status-history dpw-app-status-history-popup-container">
        <div class="dpw-app-status-history-title popup-title">Graduation history of {{applicationName}}</div>
        <div ng-include="&#39;dpw-app-status-history-list.html&#39;"></div>
        <div class="separator" ng-if="paging.totalPages &gt; 1"></div>
        <div class="right" dpw-pagination="" paging="paging"></div>
    </div>
</script>

<script type="text/ng-template" id="dpw-app-gallery-tile.html">
    <a class="relative app-gallery-tile" dpw-add-space-all="" add-space-except-ie8="" ng-href="{{ctrl.getLink()}}" ng-click="ctrl.click($event)" ng-mouseenter="ctrl.onMouseEnter()" ng-mouseleave="ctrl.onMouseLeave()">

        <div class="table-layout app-gallery-tile-surface app-gallery-tile-front-surface">
            <div class="table-layout-row">
                <div class="app-gallery-title preWrap break-word" dpw-multiple-line-ellipsis="" ng-bind="ctrl.app.appGalleryName"></div>
                <div class="app-gallery-tile-front-publisher noWrap" dpw-add-title="">
                    By <span ng-bind="ctrl.app.publisher"></span>
                </div>
            </div>
            <div class="table-layout-row app-gallery-logo">
                <div class="table-layout-cell">
                    <img ng-src="{{ctrl.appLogo.url}}?v=20240102-0636" class="app-gallery-logo-img" ng-if="ctrl.isValidLogoUrl()">
                    <img ngf-src="ctrl.appLogo.file" class="app-gallery-logo-img" ng-if="ctrl.appLogo.file">

                    <div class="app-gallery-logo-img app-gallery-logo-img-placeholder app-gallery-image-placeholder" ng-if="ctrl.isLogoEmpty()"></div>
                </div>
            </div>
        </div>

        <div ng-show="ctrl.isActive" class="table-layout app-gallery-tile-surface app-gallery-tile-back-surface ng-hide">
            <div class="table-layout-row">
                <div class="table-layout-cell">
                    <div class="app-gallery-title preWrap break-word" dpw-multiple-line-ellipsis="" ng-bind="ctrl.app.appGalleryName"></div>
                    <div class="app-gallery-tile-back-publisher noWrap" dpw-add-title="">
                        By <span ng-bind="ctrl.app.publisher"></span>
                    </div>
                </div>
            </div>
            <div class="table-layout-row">
                <div class="table-layout-cell app-gallery-back-des">
                    <div dpw-add-title="" class="app-gallery-back-des-text" ng-bind="ctrl.app.shortDes"></div>
                </div>
            </div>
        </div>

    </a>
</script>

<script type="text/ng-template" id="dpw-app-profile-status-desc-not-published.html">
    <p>Provide the app profile on this page and submit to publish, so that people can find your app in
        RingCentral App Gallery. Before you submit for review, please make sure your app profile follows
        the descriptions provided in the tooltips below. For approved examples, please view our
        <dpw-app-gallery-link display-name="App Gallery" brand-id="profileCtrl.brandId" ng-if="profileCtrl.brandId">
        </dpw-app-gallery-link>
        .
    </p>
</script>

<script type="text/ng-template" id="dpw-app-profile-status-desc-in-review.html">
    <p>Your request to publish your app in
        <dpw-app-gallery-link brand-id="profileCtrl.brandId"></dpw-app-gallery-link>
        is under review.
        The review process might take 3 - 5 days. If you want to make any change
        to the app profile, please cancel the request first.
    </p>
</script>

<script type="text/ng-template" id="dpw-app-profile-status-desc-declined.html">
    <p>Your request to publish your app in
        <dpw-app-gallery-link brand-id="profileCtrl.brandId">
        </dpw-app-gallery-link>
        is declined.
        Please update the app profile according to the comments from Admin before you
        resubmit the request.
    </p>
</script>

<script type="text/ng-template" id="dpw-app-profile-status-desc-approved-published.html">
    <div class="app-profile-info-overview-publish-status">
        <dpw-protected-feature is-accessible="profileCtrl.canManipulateApp">
            <div class="v-middle inline-block app-profile-info-overview-publish-status-switcher" dpw-on-off-switcher="" switcher-model="profileCtrl.isOnAppGallery" on-switch-on="profileCtrl.publish2Gallery" on-switch-off="profileCtrl.cancelPublish" is-disabled="!profileCtrl.canManipulateApp"></div>
        </dpw-protected-feature>
        <span class="v-middle app-profile-info-overview-publish-status-text">Published</span>
    </div>
    <p>Your request to publish your app is approved.
        You can make your app visible/invisible in
        <dpw-app-gallery-link brand-id="profileCtrl.brandId"></dpw-app-gallery-link>
        by switching the button ON/OFF.
    </p>
    <p>If you want to make any changes to the app profile, please
        <a href="mailto:devsupport@ringcentral.com">contact support</a>.</p>
    <p>If you decide to no longer publish your app in
        <dpw-app-gallery-link brand-id="profileCtrl.brandId"></dpw-app-gallery-link>
        , you can unpublish
        the app.
    </p>
</script>


<script type="text/ng-template" id="dpw-app-profile-history.html">
    <div class="dpw-app-profile-history">
        <div class="app-profile-history-item" ng-repeat="item in ctrl.history2Display">
            <div class="app-profile-history-overview">
                <span class="v-middle" ng-bind="item.eventTime | date : &#39;yyyy/M/d hh:mm a&#39;"></span>&#xA0;
                <span class="v-middle app-profile-history-highlight" ng-bind="ctrl.getUserName(item)"></span>&#xA0;
                <span class="v-middle">changed status to</span>&#xA0;
                <span class="v-middle app-profile-history-highlight" ng-bind="item.status | appProfileStatusDisplayName : false" ng-class="ctrl.getColorClassByProfileStatus(item.status)"></span>
                <span class="v-middle" ng-if="ctrl.isRecordForRevision(item)">&#xA0;(Revision)</span>
                <span class="v-middle app-profile-history-toggle-comment-btn" ng-hide="ctrl.isForcedExpanded" ng-class="{&#39;icon-btn_sort_up&#39;: item.expanded, &#39;icon-btn_sort_down&#39;: !item.expanded}" ng-click="ctrl.toggleComment(item)"></span>
            </div>
            <div class="app-profile-history-comment" ng-show="item.comment &amp;&amp; item.expanded">
                <span ng-bind="item.comment" class="preWrap"></span>
            </div>
        </div>
        <div class="app-profile-history-no-record-hint" ng-if="ctrl.noHistoryRecord">
            No history
        </div>
    </div>
    <div class="dpw-app-profile-history-pagination" dpw-pagination="" paging="ctrl.paging" ng-if="!ctrl.isLastFromAdmin"></div>
</script>

<script type="text/ng-template" id="dpw-app-profile-history-see-all.html">
    <div class="dpw-app-profile-history-see-all popup-container-panel">
        <div class="popup-container-panel-header">
            <div class="right font-size-0">
                <span class="popup-container-panel-close-btn" ng-click="ctrl.close()">&#xD7;</span>
            </div>
            <div>All Histories</div>
        </div>
        <div class="popup-container-panel-body hidden-overflow">
            <div ng-if="ctrl.appProfileId &amp;&amp; ctrl.organizationId" class="app-profile-history-see-all-history-list" dpw-app-profile-history="" app-profile-id="ctrl.appProfileId" is-revision="ctrl.isRevision" is-forced-expanded="true" organization-id="ctrl.organizationId"></div>
            <div class="app-profile-history-no-record-hint" ng-if="!ctrl.appProfileId">
                No history
            </div>
            <div class="right button button-orange app-profile-history-see-all-close-btn" ng-click="ctrl.close()">
                <span>OK</span></div>
        </div>
    </div>
</script>


<script type="text/ng-template" id="dpw-app-profile-action-message-submit-to-publish.html">
    <p>By submitting to publish this app, you certify that you have the right to distribute all information
        and images.</p>
    <span class="icon-i-info-h left app-profile-action-popup-icon default-margin-right"></span>
    <p class="hidden-overflow">Please note that <strong>you will not be able to modify the app profile</strong>
        after you submit to publish. Please make sure you have provided all the information properly. If you want to
        modify app profile, you must cancel the request first.</p>
    <p>The review process might take 3 - 5 days.</p>
</script>
<script type="text/ng-template" id="dpw-app-profile-action-message-cancel-request.html">
    <p>This app is being reviewed. Are you sure you want to cancel the publish request?</p>
</script>
<script type="text/ng-template" id="dpw-app-profile-action-message-submit-for-review.html">
    <p>By submitting to publish this app, you certify that you have the right to distribute all information
        and images.</p>
    <span class="icon-i-info-h left app-profile-action-popup-icon default-margin-right"></span>
    <p class="hidden-overflow">Please note that <strong>you will not be able to modify the app profile</strong>
        after you submit for review. Please make sure you have provided all the information properly. If you want to
        modify app profile, you must cancel the request first.</p>
    <p>The review process might take 3 - 5 days.</p>
</script>
<script type="text/ng-template" id="dpw-app-profile-action-message-take-down.html">
    <p class="simple-popup-sub-title">Are you sure you want to unpublish the app?</p>
    <p>By unpublishing this app, the app will be changed to &quot;Draft&quot; and will be removed from
        <dpw-app-gallery-link brand-id="ctrl.brandId"></dpw-app-gallery-link>. To publish the app
        again, you will need to go through the review process again.
    </p>
</script>


<script type="text/ng-template" id="dpw-app-profile-action-popup.html">
    <div class="simple-popup dpw-app-profile-action-popup">
        <div class="simple-popup-title" ng-bind="ctrl.title"></div>
        <div class="simple-popup-sub-title align-left app-profile-action-popup-sub-title" ng-if="ctrl.isDirtyFormDetected">
            This will save the changes you just made and <span ng-bind="ctrl.actionDisplayName"></span>.
            Do you want to continue?
        </div>
        <div class="simple-popup-text align-left no-margin-bottom app-profile-action-popup-content" ng-include="ctrl.templateId"></div>
        <div class="simple-popup-button-area">
            <div ng-repeat="btn in ctrl.buttons" class="simple-popup-button-area-btn button app-profile-action-popup-button" ng-class="[btn.extraClass, btn.isDisabled() &amp;&amp; &#39;button-disabled&#39;]" ng-click="!btn.isDisabled() &amp;&amp; btn.onClick()"><span ng-bind="btn.text"></span></div>
        </div>
    </div>
</script>
<script type="text/ng-template" id="dpw-app-profile-submission-checklist-popup.html">
    <dpw-app-profile-submission-checklist selectable="true" on-update="ctrl.onSubmissionChecklistUpdate(isAllChecked)"></dpw-app-profile-submission-checklist>
</script>


<script type="text/ng-template" id="app-gallery-app-setting-info.html">
    <ng-form class="panel" name="