@font-face{font-display:swap;font-family:'font-thin';font-style:normal;font-weight:normal;src:url("../../fonts/ATTAleckSans_W_Th.woff2") format("woff2"),url("../../fonts/ATTAleckSans_W_Th.woff") format("woff")}@font-face{font-display:swap;font-family:'att_thin';font-style:normal;font-weight:normal;src:url("../../fonts/ATTAleckSans_W_Th.woff2") format("woff2"),url("../../fonts/ATTAleckSans_W_Th.woff") format("woff")}@font-face{font-display:swap;font-family:'font-light';font-style:normal;font-weight:normal;src:url("../../fonts/ATTAleckSans_W_Lt.woff2") format("woff2"),url("../../fonts/ATTAleckSans_W_Lt.woff") format("woff")}@font-face{font-display:swap;font-family:'att_light';font-style:normal;font-weight:normal;src:url("../../fonts/ATTAleckSans_W_Lt.woff2") format("woff2"),url("../../fonts/ATTAleckSans_W_Lt.woff") format("woff")}@font-face{font-display:swap;font-family:'font-regular';font-style:normal;font-weight:normal;src:url("../../fonts/ATTAleckSans_W_Rg.woff2") format("woff2"),url("../../fonts/ATTAleckSans_W_Rg.woff") format("woff")}@font-face{font-display:swap;font-family:'att';font-style:normal;font-weight:normal;src:url("../../fonts/ATTAleckSans_W_Rg.woff2") format("woff2"),url("../../fonts/ATTAleckSans_W_Rg.woff") format("woff")}@font-face{font-display:swap;font-family:'font-medium';font-style:normal;font-weight:normal;src:url("../../fonts/ATTAleckSans_W_Md.woff2") format("woff2"),url("../../fonts/ATTAleckSans_W_Md.woff") format("woff")}@font-face{font-display:swap;font-family:'att_medium';font-style:normal;font-weight:normal;src:url("../../fonts/ATTAleckSans_W_Md.woff2") format("woff2"),url("../../fonts/ATTAleckSans_W_Md.woff") format("woff")}@font-face{font-display:swap;font-family:'font-bold';font-style:normal;font-weight:normal;src:url("../../fonts/ATTAleckSans_W_Bd.woff2") format("woff2"),url("../../fonts/ATTAleckSans_W_Bd.woff") format("woff")}@font-face{font-display:swap;font-family:'att_bold';font-style:normal;font-weight:normal;src:url("../../fonts/ATTAleckSans_W_Bd.woff2") format("woff2"),url("../../fonts/ATTAleckSans_W_Bd.woff") format("woff")}@font-face{font-display:swap;font-family:'font-black';font-style:normal;font-weight:normal;src:url("../../fonts/ATTAleckSans_W_Blk.woff2") format("woff2"),url("../../fonts/ATTAleckSans_W_Blk.woff") format("woff")}@font-face{font-display:swap;font-family:'att_black';font-style:normal;font-weight:normal;src:url("../../fonts/ATTAleckSans_W_Blk.woff2") format("woff2"),url("../../fonts/ATTAleckSans_W_Blk.woff") format("woff")}[class*="font-"],[class*="att"]{font-style:normal;font-weight:normal}.att_thin,.font-thin{font-family:att_thin, font-thin, sans-serif}.att_thin_italic,.font-thin-italic{font-family:att_thin_italic, font-thin, sans-serif;font-style:italic}.att_light,.font-light{font-family:att_light, font-light, sans-serif}.att_light_italic,.font-light-italic{font-family:att_light_italic, font-light, sans-serif;font-style:italic}.att,.font-regular{font-family:att, font-regular, sans-serif}.att_italic,.font-italic{font-family:font-regular, att, sans-serif;font-style:italic}.att_medium,.font-medium{font-family:font-medium, att_medium, sans-serif}.att_medium_italic,.font-medium-italic{font-family:font-medium, att_medium_italic, sans-serif;font-style:italic}.att_bold,.font-bold{font-family:font-bold, att_bold, sans-serif}.att_bold_italic,.font-bold-italic{font-family:font-bold, att_bold_italic, sans-serif;font-style:italic}.att_black,.font-black{font-family:font-black, att_black, sans-serif}.att_black_italic,.font-black-italic{font-family:font-black, att_black_italic, sans-serif;font-style:italic}

ontrol3d {
            width: 50px;
            height: 50px;
            background-size: 35px;
            background-repeat: no-repeat;
            background-position: center center;
            border-radius: 4px;
            margin-left: 15px;
            background-color: #fff;
            color: white;
            text-align: center;
            vertical-align: middle;
            font-weight: bold;
            cursor: pointer;
            line-height: 40px;
            -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.22);
            -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.22);
            box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.22);
            user-select: none;
            pointer-events: all;
        }

        .cl-control3d:first-child {
            margin-left: 0;
        }

        model-viewer::part(default-ar-button) {
            position: absolute;
            top: 15px;
            right: calc(15px + 52px);
            background-image: url('3dviewer/icon-ar.svg');
            display: none;
        }

        button.hotspot {
            display: block;
            width: 20px;
            height: 20px;
            border-radius: 10px;
            border: none;
            background-color: #0b4b83;
            box-sizing: border-box;
        }

        button.hotspot .annotation {
            background-color: #888888;
            position: absolute;
            transform: translate(20px, -50%);
            border-radius: 10px;
            padding: 10px;
        }

        button.hotspot:not([data-visible]) {
            background-color: transparent;
            border: 3px solid #0b4b83;
        }

        button.hotspot:not([data-visible]) .annotation {
            opacity: 0;
        }

        /* This keeps child nodes hidden while the element loads */
        .cliplister-viewer :not(:defined)>* {
            display: none;
        }

        /* model-viewer{
            --ar-button-display: none;
        } */

        .cliplister-viewer .show-qr,
        .cliplister-viewer .activate-ar {
            min-width: 50px;
            line-height: 50px;
            width: auto;
            color: black;
            background-position: 7.5px;
        }

        .cliplister-viewer .show-qr {
            padding-left: 57.5px;
            padding-right: 15px;
        }

        @media only screen and (max-width:600px) {
            .hide-mobile {
                display: none !important;
            }

            .cl-control3d {
                border-radius: 25px;
            }
        }
    </style>

</head>

<body>
    <div id="cl-controls3d-wrapper" class="cl-controls3d-wrapper" style="display: none;">

        <div id="cl-controls3d" class="cl-controls3d" data-cl-binding="controls">
            <div class="cl-control3d hide-mobile show-qr"
                style="display: none; background-image: url('3dviewer/augmented-reality.svg')" id="showQR"
                data-cl-binding="show-qr"></div>
            <div class="cl-control3d activate-ar" style="background-image: url('3dviewer/augmented-reality.svg')"
                id="ar" data-cl-binding="activate-ar"></div>
        </div>
    </div>

</body>

</html>