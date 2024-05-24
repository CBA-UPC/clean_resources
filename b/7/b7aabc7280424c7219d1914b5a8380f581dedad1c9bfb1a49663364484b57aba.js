<!DOCTYPE       }

        body {
            background-color: white;
        }

        @font-face {
            font-family: IRANSans;
            src: url(https://cdn.yektanet.com/fonts/IRANSansWeb.woff2) format('woff2'),
                url(https://cdn.yektanet.com/fonts/IRANSansWeb.woff) format('woff'),
                url(https://cdn.yektanet.com/fonts/IRANSansWeb.ttf) format('truetype'),
                url(https://cdn.yektanet.com/fonts/IRANSansWeb.eot),
                url(https://cdn.yektanet.com/fonts/IRANSansWeb.eot?#iefix) format('embedded-opentype');
        }

        @font-face {
            font-family: FaNum;
            font-style: normal;
            font-weight: 700;
            src: url('https://cdn.yektanet.com/assets/fonts/faNum/eot/IRANSansWeb(FaNum)_Bold.eot');
            src: url('https://cdn.yektanet.com/assets/fonts/faNum/eot/IRANSansWeb(FaNum)_Bold.eot?#iefix') format('embedded-opentype'),
                url('https://cdn.yektanet.com/assets/fonts/faNum/woff2/IRANSansWeb(FaNum)_Bold.woff2') format('woff2'),
                url('https://cdn.yektanet.com/assets/fonts/faNum/woff/IRANSansWeb(FaNum)_Bold.woff') format('woff'),
                url('https://cdn.yektanet.com/assets/fonts/faNum/ttf/IRANSansWeb(FaNum)_Bold.ttf') format('truetype');
        }

        @font-face {
            font-family: FaNum;
            font-style: normal;
            font-weight: 500;
            src: url('https://cdn.yektanet.com/assets/fonts/faNum/eot/IRANSans(FaNum)_Medium.eot');
            src: url('https://cdn.yektanet.com/assets/fonts/faNum/eot/IRANSans(FaNum)_Medium.eot?#iefix') format('embedded-opentype'),
                url('https://cdn.yektanet.com/assets/fonts/faNum/woff2/IRANSansWeb(FaNum)_Medium.woff2') format('woff2'),
                url('https://cdn.yektanet.com/assets/fonts/faNum/woff/IRANSansWeb(FaNum)_Medium.woff') format('woff'),
                url('https://cdn.yektanet.com/assets/fonts/faNum/ttf/IRANSansWeb(FaNum)_Medium.ttf') format('truetype');
        }

        @font-face {
            font-family: FaNum;
            font-style: normal;
            font-weight: 300;
            src: url('https://cdn.yektanet.com/assets/fonts/faNum/eot/IRANSansWeb(FaNum)_Light.eot');
            src: url('https://cdn.yektanet.com/assets/fonts/faNum/eot/IRANSansWeb(FaNum)_Light.eot?#iefix') format('embedded-opentype'),
                url('https://cdn.yektanet.com/assets/fonts/faNum/woff2/IRANSansWeb(FaNum)_Light.woff2') format('woff2'),
                url('https://cdn.yektanet.com/assets/fonts/faNum/woff/IRANSansWeb(FaNum)_Light.woff') format('woff'),
                url('https://cdn.yektanet.com/assets/fonts/faNum/ttf/IRANSansWeb(FaNum)_Light.ttf') format('truetype');
        }

        @font-face {
            font-family: FaNum;
            font-style: normal;
            font-weight: 200;
            src: url('https://cdn.yektanet.com/assets/fonts/faNum/eot/IRANSansWeb(FaNum)_UltraLight.eot');
            src: url('https://cdn.yektanet.com/assets/fonts/faNum/eot/IRANSansWeb(FaNum)_UltraLight.eot?#iefix') format('embedded-opentype'),
                url('https://cdn.yektanet.com/assets/fonts/faNum/woff2/IRANSansWeb(FaNum)_UltraLight.woff2') format('woff2'),
                url('https://cdn.yektanet.com/assets/fonts/faNum/woff/IRANSansWeb(FaNum)_UltraLight.woff') format('woff'),
                url('https://cdn.yektanet.com/assets/fonts/faNum/ttf/IRANSansWeb(FaNum)_UltraLight.ttf') format('truetype');
        }

        @font-face {
            font-family: FaNum;
            font-style: normal;
            font-weight: 400;
            src: url('https://cdn.yektanet.com/assets/fonts/faNum/eot/IRANSansWeb(FaNum).eot');
            src: url('https://cdn.yektanet.com/assets/fonts/faNum/eot/IRANSansWeb(FaNum).eot?#iefix') format('embedded-opentype'),
                url('https://cdn.yektanet.com/assets/fonts/faNum/woff2/IRANSansWeb(FaNum).woff2') format('woff2'),
                url('https://cdn.yektanet.com/assets/fonts/faNum/woff/IRANSansWeb(FaNum).woff') format('woff'),
                url('https://cdn.yektanet.com/assets/fonts/faNum/ttf/IRANSansWeb(FaNum).ttf') format('truetype');
        }

        body {
            margin: 0;
            padding: 0;
            font-family: FaNum, IRANSans, Arial, tahoma, sans-serif;
            font-size: 14px;
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

        .center-x {
            position: absolute;
            top: 0;
            left: 50%;
            -webkit-transform: translateX(-50%);
            -ms-transform: translateX(-50%);
            transform: translateX(-50%);
        }

        .yn_banner__section {
            position: relative;
            width: 100%;
            height: 100%;
            border: 1px solid #cccccc;
        }

        .yn_banner__content {
            display: flex;
            position: relative;
            width: 100%;
            height: 100%;
        }

        .yn_banner__content:hover .yn_banner__action-title {
            box-shadow: 0px 0px 8px 0 rgb(0 0 0 / 50%);
        }

        .yn_banner__watermark {
            position: absolute;
            top: 3px;
            right: 3px;
            width: 30px;
            height: 30px;
            z-index: 1;
        }

        .yn_banner__watermark_image {
            width: 100%;
        }

        .yn_banner__logo {
            position: absolute;
            top: 3px;
            left: 3px;
            width: 18px;
            height: 18px;
            z-index: 1;
            box-sizing: content-box;
            padding: 0px 15px 15px 0px;
        }

        .yn_banner__logo img {
            width: 100%;
        }

        .yn_banner__image_container {
            position: relative;
            height: 100%;
        }

        .yn_banner__image {
            width: auto;
            height: 100%;
            max-width: 100%;
        }

        .yn_banner__info {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 4px 10px 4px 5px;
            flex-grow: 1;
        }

        .yn_banner__text_container {
            width: 100%;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .yn_banner__title {
            font-weight: 500;
            font-size: 14px;
            line-height: 1.5;
            max-height: 44px;
            overflow: hidden;
        }

        .yn_banner__action-title {
            font-family: inherit;
            color: #ffffff;
            font-weight: bold;
            flex-shrink: 0;
            border-radius: 99px;
            padding: 5px 10px;
            margin-right: 5px;
            font-size: 12px;
            cursor: pointer;
            max-width: 150px;
            transition: 0.3s;
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

        .yn_banner__desc {
            display: none;
        }

        @media (max-height: 70px) {
            .yn_branding_url {
                display: none;
            }

            .yn_banner__image_container {
                margin-left: 6px;
            }

            .yn_banner__watermark {
                top: auto;
                bottom: 3px;
            }

            /* .yn_banner__info {
                margin-left: 5%;
            } */

            .yn_banner__watermark {
                display: none;
            }

            @media (max-width: 400px) {
                .yn_banner_action__arrow {
                    display: none;
                }

                /* .yn_banner__info {
                    margin-left: 2%;
                } */

                .yn_banner__image_container {
                    margin-left: 3px;
                    min-width: 80px;
                }
            }
        }

        @media (min-height: 70px) and (max-height: 150px) {
            .yn_banner__image_container {
                margin-left: 6px;
            }

            .yn_banner__watermark {
                top: auto;
                bottom: 3px;
            }

            .yn_banner__info {
                margin-left: 5%;
            }

            @media (max-width: 350px) {

                .yn_banner__image_container {
                    flex-basis: 120px;
                }

                .yn_branding_url {
                    display: none;
                }

                .yn_banner__info {
                    width: min-content;
                    flex-direction: column;
                    margin-left: 0;
                    padding: 4px;
                }

                .yn_banner__action-title {
                    align-self: flex-end;
                }

                .yn_banner__title {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .yn_banner_action__arrow {
                    display: none;
                }
            }

            @media (min-width: 351px) {
                .yn_banner__image_container {
                    margin-left: 20px;
                }

                .yn_banner__title {
                    font-size: 16px;
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    max-width: calc(98%);
                }

                .yn_banner__action-title {
                    font-size: 16px;
                    max-width: 160px;
                }

                .yn_banner_action__arrow {
                    width: 18px;
                    height: 18px;
                }

                .yn_banner__desc {
                    display: block;
                    font-size: 13px;
                }
            }
        }

        @media (min-height: 150px) and (max-height: 300px) {
            @media (max-width: 350px) {
                .yn_banner__image_container {
                    max-height: 200px;
                }

                .yn_banner__content {
                    flex-direction: column;
                }

                .yn_banner__info {
                    height: 50px;
                }

                .yn_banner_action__arrow {
                    display: none;
                }

                .yn_banner__title {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }

            @media (min-width: 351px) {
                .yn_banner__info {
                    flex-direction: column;
                    justify-content: space-around;
                    margin-top: 25px;
                    margin-bottom: 10px;
                }

                .yn_banner__title {
                    font-size: 22px;
                    text-align: center;
                    margin: 10px 5px 10px 5px;
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    max-width: calc(95%);
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .yn_banner__action-title {
                    align-self: center;
                    font-size: 20px;
                    padding: 8px 16px;
                    max-width: 300px;
                }

                .yn_banner__logo {
                    width: 25px;
                    height: 25px;
                }

                .yn_banner__watermark {
                    top: auto;
                    bottom: 5px;
                    right: 5px;
                    width: 40px;
                    height: 40px;
                }

                .yn_banner_action__arrow {
                    width: 20px;
                    height: 20px;
                }

                .yn_banner__desc {
                    display: block;
                    text-align: center;
                }

                .yn_banner__flex_end {
                    align-self: flex-end;
                }

                .yn_banner__text_start {
                    text-align: start;
                }

                .yn_banner__margin_left {
                    margin-left: 25px;
                }
            }
        }


        @media (min-height: 300px) {
            .yn_banner__content {
                flex-direction: column;
                justify-content: space-between;
                height: calc(100% - 100px);
                margin-top: 30px;
            }

            .yn_banner__info {
                flex-direction: column;
                justify-content: space-around;
                padding: 4px;
            }

            .yn_banner__image_container,
            .yn_banner__image {
                width: 100%;
                height: auto;
            }

            .yn_banner__watermark {
                top: auto;
                bottom: 8px;
                right: 50%;
                -webkit-transform: translateX(50%);
                -ms-transform: translateX(50%);
                transform: translateX(50%);
                width: 40px;
                height: 40px;
            }

            .yn_banner__title {
                text-align: center;
                font-size: 18px;
                max-height: 160px;
                margin-bottom: 10px;
            }


            .yn_banner__action-title {
                font-size: 14px;
                margin-right: 0;
                margin-bottom: 10px;
            }

            .yn_banner_action__arrow {
                display: none;
            }

            .yn_banner__desc {
                display: block;
                text-align: center;
            }
        }
    </style>
</head>

<body>
    <section class="yn_banner__section">
        <div class="yn_banner__logo">
            <a href="https://yektanet.com" target="_blank" class="yn_branding_url" rel="nofollow noopener">
                <img src="https://cdn.yektanet.com/assets/images/yn-icon.svg" alt="yektanet logo" />
            </a>
        </div>
        <div class="yn_banner__watermark">
            <img class="yn_banner__watermark_image" />
        </div>
        <a href="" id="yn_banner_link" target="_blank">
            <div class="yn_banner__content">
                <div class="yn_banner__image_container">
                    <img class="yn_banner__image" />
                </div>
                <div class="yn_banner__info">
                    <div class="yn_banner__text_container">
                        <div class="yn_banner__title"></div>
                        <div class="yn_banner__desc"></div>
                    </div>
                    <div class="yn_banner__action-title">
                        <span class="ellipsis"></span>
                        <img class="yn_banner_action__arrow"
                            src="https://cdn.yektanet.com/assets/templates/images/arrow-left.png" />
                    </div>
                </div>
            </div>
            </div>
        </a>
    </section>
    <script type="text/javascript">
        var now = new Date();
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.async = true;
        script.type = 'text/javascript';
        var script_address = 'https://cdn.yektanet.com/assets/js/create_template_bnr.min.js';
        script.src = script_address + '?v=' + now.getFullYear().toString() + '0' + now.getMonth() + '0' + now.getDate() + '0' + now.getHours();
        head.appendChild(script);
    </script>
</body>

</html>