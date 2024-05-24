<!DOCTYPE html>
<html lang="fa">
    <head>
        <meta charset="utf-8" />
        <meta name="ROBOTS" content="NOINDEX, NOFOLLOW" />
        <title>Yektanet Product Retargeting in Iframe</title>
        <link
            rel="preload"
            href="https://cdn.yektanet.com/assets/fonts/faNum/woff2/IRANSansWeb(FaNum).woff2"
            as="font"
            crossorigin
        />
        <style>
            body,
            html {
                height: 100%;
                width: 100%;
            }
            .resp-img,
            body,
            html {
                width: 100%;
            }
            @font-face {
                font-family: IRANSans;
                src: url(https://cdn.yektanet.com/fonts/IRANSansWeb.woff2)
                        format('woff2'),
                    url(https://cdn.yektanet.com/fonts/IRANSansWeb.woff)
                        format('woff'),
                    url(https://cdn.yektanet.com/fonts/IRANSansWeb.ttf)
                        format('truetype'),
                    url(https://cdn.yektanet.com/fonts/IRANSansWeb.eot),
                    url(https://cdn.yektanet.com/fonts/IRANSansWeb.eot?#iefix)
                        format('embedded-opentype');
            }
            @font-face {
                font-family: FaNum;
                font-style: normal;
                font-weight: 700;
                src: url('https://cdn.yektanet.com/assets/fonts/faNum/eot/IRANSansWeb(FaNum)_Bold.eot');
                src: url('https://cdn.yektanet.com/assets/fonts/faNum/eot/IRANSansWeb(FaNum)_Bold.eot?#iefix')
                        format('embedded-opentype'),
                    url('https://cdn.yektanet.com/assets/fonts/faNum/woff2/IRANSansWeb(FaNum)_Bold.woff2')
                        format('woff2'),
                    url('https://cdn.yektanet.com/assets/fonts/faNum/woff/IRANSansWeb(FaNum)_Bold.woff')
                        format('woff'),
                    url('https://cdn.yektanet.com/assets/fonts/faNum/ttf/IRANSansWeb(FaNum)_Bold.ttf')
                        format('truetype');
            }
            @font-face {
                font-family: FaNum;
                font-style: normal;
                font-weight: 500;
                src: url('https://cdn.yektanet.com/assets/fonts/faNum/eot/IRANSans(FaNum)_Medium.eot');
                src: url('https://cdn.yektanet.com/assets/fonts/faNum/eot/IRANSans(FaNum)_Medium.eot?#iefix')
                        format('embedded-opentype'),
                    url('https://cdn.yektanet.com/assets/fonts/faNum/woff2/IRANSansWeb(FaNum)_Medium.woff2')
                        format('woff2'),
                    url('https://cdn.yektanet.com/assets/fonts/faNum/woff/IRANSansWeb(FaNum)_Medium.woff')
                        format('woff'),
                    url('https://cdn.yektanet.com/assets/fonts/faNum/ttf/IRANSansWeb(FaNum)_Medium.ttf')
                        format('truetype');
            }
            @font-face {
                font-family: FaNum;
                font-style: normal;
                font-weight: 300;
                src: url('https://cdn.yektanet.com/assets/fonts/faNum/eot/IRANSansWeb(FaNum)_Light.eot');
                src: url('https://cdn.yektanet.com/assets/fonts/faNum/eot/IRANSansWeb(FaNum)_Light.eot?#iefix')
                        format('embedded-opentype'),
                    url('https://cdn.yektanet.com/assets/fonts/faNum/woff2/IRANSansWeb(FaNum)_Light.woff2')
                        format('woff2'),
                    url('https://cdn.yektanet.com/assets/fonts/faNum/woff/IRANSansWeb(FaNum)_Light.woff')
                        format('woff'),
                    url('https://cdn.yektanet.com/assets/fonts/faNum/ttf/IRANSansWeb(FaNum)_Light.ttf')
                        format('truetype');
            }
            @font-face {
                font-family: FaNum;
                font-style: normal;
                font-weight: 200;
                src: url('https://cdn.yektanet.com/assets/fonts/faNum/eot/IRANSansWeb(FaNum)_UltraLight.eot');
                src: url('https://cdn.yektanet.com/assets/fonts/faNum/eot/IRANSansWeb(FaNum)_UltraLight.eot?#iefix')
                        format('embedded-opentype'),
                    url('https://cdn.yektanet.com/assets/fonts/faNum/woff2/IRANSansWeb(FaNum)_UltraLight.woff2')
                        format('woff2'),
                    url('https://cdn.yektanet.com/assets/fonts/faNum/woff/IRANSansWeb(FaNum)_UltraLight.woff')
                        format('woff'),
                    url('https://cdn.yektanet.com/assets/fonts/faNum/ttf/IRANSansWeb(FaNum)_UltraLight.ttf')
                        format('truetype');
            }
            @font-face {
                font-family: FaNum;
                font-style: normal;
                font-weight: 400;
                src: url('https://cdn.yektanet.com/assets/fonts/faNum/eot/IRANSansWeb(FaNum).eot');
                src: url('https://cdn.yektanet.com/assets/fonts/faNum/eot/IRANSansWeb(FaNum).eot?#iefix')
                        format('embedded-opentype'),
                    url('https://cdn.yektanet.com/assets/fonts/faNum/woff2/IRANSansWeb(FaNum).woff2')
                        format('woff2'),
                    url('https://cdn.yektanet.com/assets/fonts/faNum/woff/IRANSansWeb(FaNum).woff')
                        format('woff'),
                    url('https://cdn.yektanet.com/assets/fonts/faNum/ttf/IRANSansWeb(FaNum).ttf')
                        format('truetype');
            }
            body {
                margin: 0;
                padding: 0;
                font-family: FaNum, IRANSans, Arial, tahoma, sans-serif;
                direction: rtl;
            }
            a,
            a:focus,
            a:hover {
                color: inherit;
                text-decoration: none;
            }
            * {
                -webkit-box-sizing: border-box;
                box-sizing: border-box;
            }
            .ellipsis {
                -o-text-overflow: ellipsis;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
            }
            .resp-img {
                height: auto;
                vertical-align: middle;
            }
            .center {
                position: absolute;
                top: 50px;
                left: 50%;
                -webkit-transform: translateX(-50%);
                -ms-transform: translateX(-50%);
                transform: translateX(-50%);
            }
            .yektanet-slider {
                position: relative;
                width: 100%;
                height: 100%;
                background-color: #fff;
            }

            .yektanet-slider__heading {
                display: block;
                color: #fff;
                padding: 5px 10px;
                position: absolute;
                top: 8px;
                right: 1px;
                z-index: 10;
                font-size: 11px;
                font-weight: 700;
                border-top-left-radius: 99px;
                border-bottom-left-radius: 99px;
                max-width: 160px;
                background-color: #ef3f3e;
            }
            @media (max-width: 578px) {
                .yektanet-slider__heading {
                    display: none;
                }
            }
            .yektanet-slider__heading__span {
                display: block;
            }
            .yn-branding {
                position: absolute;
                z-index: 10;
                left: 0;
                top: 8px;
                background-color: #f3f3f3;
                border: 1px solid #ddd;
                border-top-right-radius: 99px;
                border-bottom-right-radius: 99px;
                height: 24px;
                padding: 5px 10px;
                width: 50px;
            }
            .yn-branding img {
                height: 60%;
                position: absolute;
            }
            .yektanet-slide-content {
                display: flex;
                height: 100%;
                position: relative;
                overflow: hidden;
                margin: 0;
                border: 1px solid #e9e9e9;
            }
            .yektanet-slide-content__slide-container {
                height: 100%;
                max-width: 450px;
                display: flex;
                margin-right: 110px;
                margin-left: 50px;
                align-items: center;
            }
            @media (max-width: 578px) {
                .yektanet-slide-content__slide-container {
                    margin-right: 20px;
                }
            }
            .yektanet-slide-content__slide {
                height: 100%;
                width: 100%;
                overflow: hidden;
                position: absolute;
                left: 50%;
                -webkit-transform: translateX(-50%);
                -ms-transform: translateX(-50%);
                transform: translateX(-50%);
                opacity: 1;
                -webkit-transition: opacity 0.5s ease-in-out,
                    -webkit-transform 0.5s ease-in-out, -webkit-box-shadow 0.5s;
                -o-transition: transform 0.5s ease-in-out,
                    opacity 0.5s ease-in-out, box-shadow 0.5s;
                transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out,
                    box-shadow 0.5s;
                transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out,
                    box-shadow 0.5s, -webkit-transform 0.5s ease-in-out,
                    -webkit-box-shadow 0.5s;
            }
            .yektanet-slide-content__slide.left-slide {
                -webkit-transform: translateX(-155%);
                -ms-transform: translateX(-155%);
                transform: translateX(-155%);
                opacity: 0;
            }
            .yektanet-slide-content__slide.right-slide {
                -webkit-transform: translateX(55%);
                -ms-transform: translateX(55%);
                transform: translateX(55%);
                opacity: 0;
            }
            .yektanet-slide-content__price_container {
                display: flex;
                align-items: center;
            }

            .yektanet-slide-content__slide-image {
                overflow: hidden;
                position: relative;
                height: 80px;
                width: 120px;
                min-width: 120px;
                box-shadow: 0 0px 8px -4px rgb(0 0 0 / 50%);
            }
            .yektanet-slide-content__slide-image img {
                height: 100%;
                width: auto;
                max-width: 100%;
                margin: 0 auto;
                display: block;
            }
            .yektanet-slide-content__slide-info {
                padding: 0 10px;
                font-size: 13px;
                position: relative;
                width: 360px;
                overflow: hidden;
                align-self: flex-start;
            }
            .yektanet-slide-content__slide-text {
                line-height: 22px;
                height: 22px;
                overflow: hidden;
                font-weight: bold;
                display: block;
                position: relative;
                top: 5px;
                text-overflow: ellipsis;
                white-space: nowrap;
                margin: 8px 0;
                font-size: 12px;
                font-family: IRANSans;
            }
            .yektanet-slide-content__slide-discount {
                display: none;
                background-color: #ef3f3e;
                color: #fff;
                font-weight: bold;
                line-height: 1;
                padding: 4px 8px;
                margin-right: 10px;
                border-radius: 10px;
            }
            .yektanet-slide-content__slide-price {
                display: none;
                font-size: 14px;
                color: #006f21;
                float: left;
            }
            .yektanet-slide-content__slide-oldprice {
                display: none;
                float: left;
                padding-left: 6px;
                text-decoration: line-through;
                color: grey;
            }
            .yektanet-slide-content__branding-btn {
                cursor: pointer;
                font-family: inherit;
                color: #fff;
                background-color: #ef3f3e;
                border: none;
                outline: 0;
                border-radius: 99px;
                position: absolute;
                left: 40px;
                bottom: calc(50% - 12px);
                -webkit-transform: translateY(-50%);
                -ms-transform: translateY(-50%);
                transform: translateY(50%);
                line-height: 16px;
                padding: 7px 10px;
                font-size: 16px;
                font-weight: bold;
                display: flex;
                align-items: center;
            }
            .yn_banner_action__arrow {
                display: inline;
                width: 15px;
                height: 15px;
                margin-right: 3px;
                transition: 0.3s;
            }
            @media (max-width: 578px) {
                .yektanet-slide-content__branding-btn {
                    display: none;
                }
            }
            .footer-logo__img {
                position: absolute;
                right: 5px;
                bottom: 5px;
                width: auto;
                max-width: 150px;
                height: 20px;
            }
            .unvisible {
                visibility: hidden !important;
            }
            .yektanet-slide__circles_container {
                position: absolute;
                padding: 8px 12px;
                bottom: 0px;
                left: 50%;
                -webkit-transform: translateX(-50%);
                -ms-transform: translateX(-50%);
                transform: translateX(-50%);
                display: flex;
            }
            .yektanet-slide__circle {
                cursor: pointer;
                display: block;
                width: 10px;
                height: 10px;
                margin: 0 2px;
                border-radius: 50%;
                background-color: #ccc;
                transition: 0.3s;
            }
            .yektanet-slide__circle:hover {
                background-color: #807e7e;
            }
            .yektanet-slide__circle.active {
                background-color: #424242;
            }
        </style>
    </head>
    <body>
        <section class="yektanet-slider">
            <div class="yektanet-slider__heading">
                <span class="ellipsis yektanet-slider__heading__span"></span>
            </div>
            <a
                href=""
                target="_blank"
                class="yn-branding__url"
                rel="nofollow noopener"
            >
                <div class="yn-branding">
                    <img
                        src="https://cdn.yektanet.com/assets/images/yektanet-logo-txt.png"
                        alt="yektanet logo"
                    />
                </div>
            </a>
            <div class="yektanet-slide-content">
                <div>
                    <div
                        class="yektanet-slide-content__slide right-slide out-right"
                    >
                        <a
                            href=""
                            class="yektanet-slide-content__slide-link"
                            target="_blank"
                        >
                            <div
                                class="yektanet-slide-content__slide-container"
                            >
                                <div
                                    class="yektanet-slide-content__slide-image"
                                >
                                    <img />
                                </div>
                                <div class="yektanet-slide-content__slide-info">
                                    <span
                                        class="yektanet-slide-content__slide-text"
                                        dir="auto"
                                    ></span>
                                    <div
                                        class="yektanet-slide-content__price_container"
                                    >
                                        <span
                                            class="yektanet-slide-content__slide-oldprice"
                                        >
                                        </span>
                                        <span
                                            class="yektanet-slide-content__slide-price"
                                        ></span>
                                        <span
                                            class="yektanet-slide-content__slide-discount"
                                        ></span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="yektanet-slide-content__slide">
                        <a
                            href=""
                            class="yektanet-slide-content__slide-link"
                            target="_blank"
                        >
                            <div
                                class="yektanet-slide-content__slide-container"
                            >
                                <div
                                    class="yektanet-slide-content__slide-image"
                                >
                                    <img />
                                </div>
                                <div class="yektanet-slide-content__slide-info">
                                    <span
                                        class="yektanet-slide-content__slide-text"
                                        dir="auto"
                                    ></span>
                                    <div
                                        class="yektanet-slide-content__price_container"
                                    >
                                        <span
                                            class="yektanet-slide-content__slide-oldprice"
                                        >
                                        </span>

                                        <span
                                            class="yektanet-slide-content__slide-price"
                                        ></span>
                                        <span
                                            class="yektanet-slide-content__slide-discount"
                                        ></span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div
                        class="yektanet-slide-content__slide left-slide out-left"
                    >
                        <a
                            href=""
                            class="yektanet-slide-content__slide-link"
                            target="_blank"
                        >
                            <div
                                class="yektanet-slide-content__slide-container"
                            >
                                <div
                                    class="yektanet-slide-content__slide-image"
                                >
                                    <img />
                                </div>
                                <div class="yektanet-slide-content__slide-info">
                                    <span
                                        class="yektanet-slide-content__slide-text"
                                        dir="auto"
                                    ></span>
                                    <div
                                        class="yektanet-slide-content__price_container"
                                    >
                                        <span
                                            class="yektanet-slide-content__slide-oldprice"
                                        >
                                        </span>

                                        <span
                                            class="yektanet-slide-content__slide-price"
                                        ></span>
                                        <span
                                            class="yektanet-slide-content__slide-discount"
                                        ></span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                <a
                    href=""
                    class="yektanet-slide-content__button-link"
                    target="_blank"
                >
                    <button class="yektanet-slide-content__branding-btn">
                        <span id="action-title"></span>
                        <img
                            class="yn_banner_action__arrow"
                            src="https://cdn.yektanet.com/assets/templates/images/arrow-left.png"
                        />
                    </button>
                </a>
            </div>
            <img class="footer-logo__img" />
            <div class="yektanet-slide__circles_container"></div>
        </section>
        <script src="https://cdn.yektanet.com/assets/js/product_retargeting_slider.min.js?v=1.11"></script>
    </body>
</html>
