
<!DO    div {
            display: inline-block;
            overflow: hidden;
        }
        a.click-url {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: stretch;
            width: 100%;
            height: 100%;
            background-color: #fff;
            color: #000;
            text-decoration: none;
        }
        .icon-container {
            position: relative;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            height: 100%;
        }
        img.icon {
            width: 100%;
            border: 0;
        }
        img.logo {
            position: absolute;
            right: 6px;
            bottom: 2px;
            width: 10px;
            height: 8px;
        }
        .full-logo {
            position: absolute;
            right: 6px;
            bottom: -2px;
        }
        .full-logo-text {
            font-size: 10px;
        }
        .full-logo-img {
            width: 40px;
            height: 8px;
        }
        .text-container{
            flex-shrink: 0;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            height: 50px;
            padding: 0 5px;
        }
        .text-section {
            display: flex;
            flex-direction: column;
            overflow: hidden;
            padding-right: 5px;
            height: 42px;
        }
        .action-section {
            flex-shrink: 0;
            width: 40px;
        }
        .title {
            flex-shrink: 0;
            width: 100%;
            font-weight: bold;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            line-height: 20px;
            max-height: 40px;
        }
        .description {
            width: 100%;
            font-size: 12px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .click-btn {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background: #000;
        }
        .click-btn:after {
            content: '';
            display: inline-block;
            margin-top: 11px;
            margin-left: 9px;
            width: 6px;
            height: 6px;
            border-top: 3px solid #fff;
            border-right: 3px solid #fff;
            -moz-transform: rotate(45deg);
            -webkit-transform: rotate(45deg);
            transform: rotate(45deg);
        }
        .hide {
            display: none
        }

        @media (min-aspect-ratio: 8/5) {
            a.click-url {
                justify-content: flex-start;
                flex-direction: row;
            }
            .icon-container {
                flex-shrink: 0;
                align-items: start;
                width: 30%;
            }
            .text-container {
                flex-shrink: unset;
                width: 70%;
                height: 100%;
            }
            .text-section{
                justify-content: center;
                height: 100%;
            }
        }

        @media (min-aspect-ratio: 4/1) {
            .icon-container {
                align-items: unset;
                justify-content: start;
                width: auto;
            }
            img.icon {
                width: auto;
                height: 100%;
            }
            .text-container {
                width: 100%;
            }
        }

        /*specific case for 728 x 90*/
        @media (min-aspect-ratio: 8/1) {
            .title {
                font-size: 16px;
            }
            .description {
                font-size: 14px;
            }
        }

        /*specific case for 364 x 90*/
        @media (min-aspect-ratio: 4/1) and (max-aspect-ratio: 5/1) {
            .icon-container {
                max-width: 50%;
            }
            .action-section {
                display: none;
            }
        }

        @media (max-aspect-ratio: 1/2) {
            .icon-container {
                flex-shrink: 0;
                align-items: start;
                width: 100%;
                height: auto;
                min-height: 50%;
            }
            .text-container {
                flex-shrink: unset;
                flex-direction: column;
                justify-content: stretch;
                align-items: center;
                height: 50%;
                padding: 1px;
            }
            .text-section {
                width: 100%;
                height: auto;
                padding: 0 0 5px 0;
            }
            .description {
                white-space: normal;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 3;
                line-height: 20px;
                max-height: 60px;
            }
        }

        @media (height: 90px) {
            img.icon {
                height: 90px;
            }
        }

        @media (height: 60px) {
            img.icon {
                height: 60px;
            }
        }
    </style>
</head>
<body>
<a class="click-url" href="/v2/663/69b42fa7-c788-11ee-803f-6a793f5c2907/1/cl" target="_blank">
<div class="icon-container">
    <img class="icon" src="/v2/663/69b42fa7-c788-11ee-803f-6a793f5c2907/1/ic" alt="icon"/>
    <img id="logo" class="logo" alt="logo" src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 15.6 12.1' height='45.7' width='59' style='fill:%23888'%3e%3cpath d='M0 7h5v5H2.9V9.4H0Z'/%3e%3cpath d='M2.9 6H5V3.4l4 5.2h.5l3.8-5.2V12h2.3V.1h-2.7L9.2 5 5.5 0H3Z'/%3e%3c/svg%3e">
    <div id="full-logo" class="full-logo hide">
        <span class="full-logo-text">Ads by</span>
        <img class="full-logo-img" alt="logo" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='279.12' height='47.13' viewBox='0 0 73.85 12.47'%3E%3Cg style='stroke:none;fill-opacity:1'%3E%3Cpath style='fill:%2351c85d' d='M0 291.8h5.08v5.18H2.8v-2.83H0Z' transform='translate(0 -284.8)'/%3E%3Cpath style='fill:%233079c8' d='M2.88 290.88h2.2v-2.62l3.9 5.18h.51l3.8-5.2v8.74h2.31V284.9h-2.7l-3.7 5.12-3.7-5.12-2.62.03zm19.03-2.55a4.43 4.47 0 0 0-4.43 4.47 4.43 4.47 0 0 0 4.43 4.47 4.43 4.47 0 0 0 4.43-4.47 4.43 4.47 0 0 0-4.43-4.47zm0 1.86a2.32 2.58 0 0 1 2.33 2.58 2.32 2.58 0 0 1-2.33 2.58 2.32 2.58 0 0 1-2.32-2.58 2.32 2.58 0 0 1 2.32-2.58zm6.2 6.81v-8.57H30v1.3c1.04-1.08 1.93-1.4 2.95-1.4 1.91 0 3.48 1.92 3.48 3.5.06 0 0 5.16 0 5.16h-2.08v-4.93c0-.93-.84-1.82-2.02-1.83-1.5 0-2.16 1.52-2.16 1.83v4.92z' transform='translate(0 -284.8)'/%3E%3Cpath style='fill:%233079c8' d='M171.38 1076.8v16.59a16.73 16.66 0 0 0-10.49-3.7 16.73 16.66 0 0 0-16.73 16.67 16.73 16.66 0 0 0 16.73 16.66 16.73 16.66 0 0 0 10.5-3.7v3.2h7.99v-45.71zm-10.47 19.83a8.78 9.63 0 0 1 8.78 9.62 8.78 9.63 0 0 1-8.78 9.62 8.78 9.63 0 0 1-8.78-9.62 8.78 9.63 0 0 1 8.78-9.62z' transform='translate(0 -284.8) scale(.26458)'/%3E%3Cpath style='fill:%233079c8' d='M49.6 288.38h2.15v8.64H49.6zm2.41-2.28a1.3 1.3 0 0 1-1.3 1.3 1.3 1.3 0 0 1-1.3-1.3 1.3 1.3 0 0 1 1.3-1.3 1.3 1.3 0 0 1 1.3 1.3m8.66 2.35v.83a4.44 4.44 0 0 0-2.78-.97 4.42 4.42 0 1 0 0 8.81 4.44 4.44 0 0 0 2.78-.97v.84h2.12v-8.54zm-2.77 1.7c1.28 0 2.32 1.13 2.32 2.54 0 1.4-1.04 2.54-2.32 2.54-1.28 0-2.32-1.14-2.32-2.54 0-1.4 1.04-2.55 2.32-2.55zm13.84-5.29v4.39a4.43 4.4 0 0 0-2.78-.98 4.43 4.4 0 0 0-4.43 4.4 4.43 4.4 0 0 0 4.43 4.42 4.43 4.4 0 0 0 2.78-.98v.85h2.1v-12.1zm-2.78 5.24a2.32 2.55 0 0 1 2.33 2.55 2.32 2.55 0 0 1-2.33 2.55 2.32 2.55 0 0 1-2.32-2.55 2.32 2.55 0 0 1 2.32-2.55z' transform='translate(0 -284.8)'/%3E%3C/g%3E%3C/svg%3E" />
    </div>
</div>
<div class="text-container ">
<div class="text-section"><div class="title">Hottest videos!</div><div class="description">See more!</div></div>
<div class="action-section"><div class="click-btn"></div></div>
</div>
</a>
<script>
    const logo = document.getElementById('logo');
    const fullLogo = document.getElementById('full-logo');
    logo.onclick = function() {
        logo.classList.add('hide');
        fullLogo.classList.remove('hide');
        return false;
    }
    fullLogo.onclick = function() {
        fullLogo.classList.add('hide');
        logo.classList.remove('hide');
        return false;
    }
</script>
</body></html>