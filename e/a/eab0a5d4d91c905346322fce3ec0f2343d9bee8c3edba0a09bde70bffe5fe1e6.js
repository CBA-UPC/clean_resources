/**
 * opta-widgets - v3.201.0
 * Copyright (c) 2024 Opta Sports
 * Licenses: http://widget.cloud.opta.net/v3/licences.txt
 */
(window.webpackChunkOptaWidgetsV3=window.webpackChunkOptaWidgetsV3||[]).push([["bin/subscriptions_6"],{"./src/bin/subscriptions_6.js":()=>{Opta.bin.subscriptions_6=function(i){"use strict";var n,s=Opta,t=s._,e=s.binary.readString,r=function(){return i.getInt16()},a={bin_ver:6,subscription_id:e(i),sdapi_key:e(i),eplayer_key:e(i),dfp_partner_id:e(i),dfp_region:e(i),omo_username:e(i),omo_password:e(i),fast_data:e(i),widgets:{},feeds:{}};return n=r(),a.domains=new Array(n),t.times(n,(function(n){a.domains[n]=e(i)})),a.no_domain=r(),n=r(),t.times(n,(function(){var n=r(),s=r(),o={};t.times(s,(function(){var n=r(),s=e(i),a=r();n&&(o[n]={}),s&&(o[s]={}),t.times(a,(function(){var a=r(),u=r();n&&(o[n][a]={}),s&&(o[s][a]={}),t.times(u,(function(){var t=e(i);n&&(o[n][a][t]=!0),s&&(o[s][a][t]=!0)}))}))})),a.widgets[n]=o})),n=r(),t.times(n,(function(){var n=e(i),s=r(),o={};t.times(s,(function(){var n=r(),s=e(i),a=r();o[n]={},o[s]={},t.times(a,(function(){var i=r();o[n][i]=!0,o[s][i]=!0}))})),a.feeds[n]=o})),a}}},i=>{var n;n="./src/bin/subscriptions_6.js",i(i.s=n)}]);
//# sourceURL=https://secure.widget.cloud.opta.net/v3/bin/subscriptions_6.js
//# sourceMappingURL=https://secure.widget.cloud.opta.net/v3/sourcemap/bin/subscriptions_6.js.maptransparent;
    background-size: contain;
}

.browser-support {
    align-items: center;
    background: #0988d1;
    color: #fff;
    display: flex;
    height: 100vh;
    padding: 0;
    margin: 0;
}

.browser-support .container {
    max-width: 600px;
}

.browser-support .brand-logo {
    height: 35px;
    left: 5rem;
    position: absolute;
    top: 2rem;
    width: 8rem;
}

@media screen and (max-width: 768px) {
    .browser-support .brand-logo {
        left: 50%;
        transform: translate(-50%);
    }
}

.browser-support .col-xs-12 {
    width: 100%;
}

.browser-support h1 {
    text-align: center;
    color: #fff;
}

.browser-support .txt-body {
    color: #fff;
}
</style>


</head>
<body class="browser-support">
    <script type="text/javascript">var dataLayer = [];</script>
    <noscript><iframe height='0' width='0' style='display:none;visibility:hidden' src='//www.googletagmanager.com/ns.html?id=GTM-N48RN3R' /></noscript>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <h1>Upgrade browser for the full experience</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12">
                <div class="brand-logo"></div>
<div class="row">
    <div class="col text-center">
        <p class="mb-4 txt-body">It looks like you may be using a web browser version that we don't support. Make sure
            you are using the most
            recent version of your browser, or try using one of these supported browsers, to get the full experience.
        </p>
    </div>
</div>
<div class="row">

    <div class="col browser browser-chrome text-center">
        <img class="browser-item browser-image mb-2" alt="compatible_chrome" width="50" height="50"
            src="https://scmedia.sportingbet.com/$-$/28b009d94a064054a4d529495ca47acc.png">
        <p class="browser-item browser-version mb-1 txt-body">Google Chrome
            49+</p>
        <a class="browser-item browser-link txt-link" href="https://www.google.com/chrome/"
            data-tracking-label-event="Google Chrome|Browser">Download</a>
    </div>

    <div class="col browser browser-firefox text-center">
        <img class="browser-item browser-image mb-2" alt="compatible_firefox" width="50" height="50"
            src="https://scmedia.sportingbet.com/$-$/dd1538195b79488fb28ae028ed7ac267.png">
        <p class="browser-item browser-version mb-1 txt-body">Firefox
            52+</p>
        <a class="browser-item browser-link txt-link" href="https://www.mozilla.org/en-US/firefox/new/"
            data-tracking-label-event="Firefox|Browser">Download</a>
    </div>

    <div class="col browser browser-safari text-center">
        <img class="browser-item browser-image mb-2" alt="compatible_safari" width="50" height="50"
            src="https://scmedia.sportingbet.com/$-$/dc326c0fdc3e43fba6c411e9035c7ab8.png">
        <p class="browser-item browser-version mb-1 txt-body">Safari
            10+</p>
        <a class="browser-item browser-link txt-link" href="https://support.apple.com/downloads/safari"
            data-tracking-label-event="Safari|Browser">Download</a>
    </div>

</div>

<div class="row">
    <div class="col text-center mt-4 txt-body">
        <p>Already using one of these browsers but still having issues? Visit our <a class="txt-link" href="#!"
                data-tracking-label-event="Help Center|Browser">Help Center</a></p>
    </div>
</div>
            </div>
        </div>
    </div>
    <script>
        (function() {
            var dataLayerName = 'dataLayer';
            var timeout = 500;

            function isDataLayerEnabled() {
                return dataLayerName && !!window[dataLayerName];
            }

            function isGoogleTagManagerEnabledAndLoaded() {
                return isDataLayerEnabled() && !!window['google_tag_manager'];
            }

            function updateDataLayer(data) {
                if (isDataLayerEnabled()) {
                    window[dataLayerName].push(data);
                }
            }

            function triggerEvent(eventName, data) {
                return new Promise(function (resolve) {
                    var eventObj;

                    updateDataLayer(data);

                    eventObj = { 'event': eventName };
                    if (isGoogleTagManagerEnabledAndLoaded()) {
                        eventObj['eventCallback'] = resolve.bind(null);
                        eventObj['eventTimeout'] = timeout;
                    }
                    updateDataLayer(eventObj);

                    // Resolve immediately when GTM is not present (other tag managers don't support event callback)
                    if (!isGoogleTagManagerEnabledAndLoaded()) {
                        resolve();
                    }
                });
            }

            function handleTrackedLinkClick(event) {
                var href, labelEvent;

                event.preventDefault();
                href = this.href;
                labelEvent = this.getAttribute("data-tracking-label-event");

                triggerEvent('Event.Tracking', {
                    'component.CategoryEvent': 'Error Pages',
                    'component.LabelEvent': labelEvent,
                    'component.ActionEvent': 'Click',
                    'component.PositionEvent': 'not applicable',
                    'component.LocationEvent': 'not applicable',
                    'component.EventDetails': 'not applicable',
                    'component.URLClicked': href || 'not applicable',
                })
                .then(() => {
                    if (href) {
                        document.location.href = href;
                    }
                });
            }

            function init() {
                var links, link, i;

                triggerEvent('pageView', {
                    'page.errorpage': 'BrowserNotsupported'
                });

                links = document.getElementsByTagName("a");
                for(i = 0; i < links.length; i++) {
                    link = links[i];
                    if (!link.getAttribute("data-tracking-label-event")) {
                        continue;
                    }
                    link.addEventListener('click', handleTrackedLinkClick);
                }
            }

            init();
        }())
    </script>
</body>
</html>
