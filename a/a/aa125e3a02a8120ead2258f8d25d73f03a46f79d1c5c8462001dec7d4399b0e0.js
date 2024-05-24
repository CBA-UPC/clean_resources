<HTML><HEAD>
<TITLE>Access Denied</TITLE>
</HEAD><BODY>
<H1>Access Denied</H1>
 
You don't have permission to access "http&#58;&#47;&#47;www&#46;sap&#46;com&#47;etc&#46;clientlibs&#47;sapdx&#47;front&#45;layer&#47;dist&#47;resources&#47;sapcom&#47;finders&#45;SearchStandard&#46;dd5effff7ffcfa7a9155&#46;css" on this server.<P>
Reference&#32;&#35;18&#46;24231102&#46;1706719695&#46;d3cc1e
</BODY>
</HTML>
g") no-repeat 50% 50%;
}

button.vjs-icon-theatre-normal:hover {
    opacity: 1;
}

.theatreMode .vjs-icon-theatre-normal {
    background: url("/etc/designs/sep1dx/images/theater-zoom.png") no-repeat 50% 50%;
}

.theatreMode .vjs-icon-theatre-normal:focus:not(:focus-visible) {
    background: url("/etc/designs/sep1dx/images/theater-zoom.png") no-repeat 50% 50%;
}

.video-js .vjs-control {
    cursor: pointer;
}

button.vjs-icon-rewind svg {
    margin-top: 2px;
}

.video-js.vjs-hls-quality-selector {
    display: block
}

.vjs-player-block {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    z-index: 1;
    height: 0;
}

.vjs-player-block .player-top-menu {
    display: flex;
    position: relative;
    margin: 10px 0 0 10px;
}

.multiStackCar3Col .vjs-layout-tiny .vjs-player-block .player-top-menu {
    margin: 5px 0 0 5px;
}

.video-js .holder-socialshare .socialShare a {
    display: block;
    opacity: .5;
    width: 45px;
    height: 40px;
    line-height: 40px;
    background: #000 url("//assets.dm.ux.sap.com/commonutils/images/jwplayer/icon-share.png") no-repeat 50% 50%;
}

.video-js .holder-socialshare .socialShare .social-opener-hovered {
    opacity: 1;
    background: #fff url("//assets.dm.ux.sap.com/commonutils/images/jwplayer/share_icon_selected.png") no-repeat 50% 50%;
}

/****************************/
.vjs-player-block .player-top-menu .holder-email .socialEmail a {
    display: block;
    opacity: .5;
    width: 45px;
    height: 40px;
    line-height: 40px;
    background: #000 url("//assets.dm.ux.sap.com/commonutils/images/jwplayer/mail_icon.png") no-repeat 50% 50%;
    cursor: pointer;
}

.player-overlay {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    transition: background-color .3s;
}

.modified-overlay {
    background-color: rgba(0, 0, 0, .7) !important;
    /*z-index: 2;*/
}

.socialShareEmailAnchor-hovered {
    opacity: 1 !important;
    background: #fff url("//assets.dm.ux.sap.com/commonutils/images/jwplayer/mail_icon_selected.png") no-repeat 50% 50% !important;
}

/*******************/
.socialTeleScope a {
    display: block;
    opacity: .5;
    width: 45px;
    height: 40px;
    line-height: 40px;
    background: #000 url("//assets.dm.ux.sap.com/commonutils/images/jwplayer/icon-white.png") no-repeat 50% 50% !important;
}

.socialTeleScope .socialRelatedBlockAnchor-hovered {
    opacity: 1;
    background: #fff url("//assets.dm.ux.sap.com/commonutils/images/jwplayer/icon-black.png") no-repeat 50% 50% !important;
}

/************************************************************/
.holder-socialshare,
.holder-email,
.holder-related {
    position: relative;
    width: 45px;
    height: 40px;
    background: #000;
}

.holder-related {
    position: static;
}

.holder-socialshare .socialShare a span,
.holder-email .socialEmail a span,
.socialTeleScope a span {
    display: none;
    font-size: 7px;
    color: #fff;
}

/*****************************************************/
.social-list {
    display: none;
    position: absolute;
    left: 0;
    top: 100%;
    min-width: 240px;
    background: #fff;
}

.vjs-layout-large .social-list {
    min-width: 175px;
}

.vjs-layout-medium .social-list {
    min-width: 200px;
}

.multiStackCar3Col .vjs-layout-tiny .social-list {
    min-width: 187px;
}

.social-list-hovered {
    display: block;
}

.social-list ul {
    font-size: 0;
    text-align: left;
}

.social-list ul li {
    display: inline-block;
    vertical-align: top;
    width: 100%;
    overflow: hidden;
    font-size: 13px;
    cursor: pointer;
}

.social-list ul a {
    display: flex;
    padding: 0 0 0 15px;
    text-decoration: none;
    color: #222;
}

.social-list ul a:hover {
    text-decoration: none;
    color: #222;
    background: #f4f4f4;
}

.social-list ul a i {
    display: inline-block;
    flex-shrink: 0;
    position: relative;
    vertical-align: top;
    width: 20px;
    height: 33px;
}

.vjs-layout-tiny .social-list i {
    height: 20px;
}

.vjs-layout-tiny .social-list a {
    padding: 2px 0 2px 3px;
}

.vjs-layout-tiny .social-list span {
    padding: 4px;
}

.social-list ul a i img {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
}

.social-list ul a span {
    display: inline-block;
    flex-grow: 1;
    vertical-align: top;
    padding: 11px 6px;
}

.social-list ul a textarea {
    width: 0;
    height: 0;
}

/*************************************/
.socialRelatedBlock {
    position: absolute;
    left: -9999px;
    width: 90%;
    background: #fff;
}

.socialRelatedBlock-hovered {
    left: 0;
}

.socialRelatedTable {
    float: left;
    width: 100%;
}

.socialRelatedItems {
    position: relative;
    width: 100%;
    padding: 0;
}

.socialRelatedItems ul {
    float: left;
    width: 100%;
    list-style: none;
}

.socialRelatedItems ul li {
    float: left;
    width: 30%;
}

.socialRelatedItems ul li:first-child {
    float: left;
    width: 40%;
    padding-bottom: 20px;
}

.socialRelatedItems .titleClass {
    padding: 10px 10px 6px 7px;
    font-family: BentonSansBold, Arial, Helvetica, sans-serif;
    font-size: 16px;
    line-height: 20px;
    color: #000;
}

.socialRelatedItems .desClass {
    padding: 0 7px;
    font-size: 13px;
    line-height: 18px;
    color: #000;
}

.socialRelatedBlock .playRing {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 30px;
    height: 30px;
    margin: auto;
    border: solid 3px #fff;
    border-radius: 50px;
}

.socialRelatedBlock .playIcon {
    position: absolute;
    left: 0;
    right: -3px;
    top: 0;
    bottom: 0;
    width: 0;
    height: 0;
    margin: auto;
    border-top: 7px solid transparent;
    border-bottom: 7px solid transparent;
    border-left: 12px solid #fff;
}

.socialRelatedBlock .vodImageBox {
    display: block;
    position: relative;
    margin: 5px;
    background-size: cover;
}

.socialRelatedBlock .vodImageBox a {
    display: block;
}

.socialRelatedBlock .vodImageBox img {
    width: 100%;
}

.socialRelatedBlock .vodImageBox span {
    position: absolute;
    left: 10px;
    bottom: 5px;
    z-index: 9;
    font-family: BentonSansMedium, Arial, Helvetica, sans-serif;
    font-size: 12px;
    color: #fff;
}

.socialRelatedBlock .vodImageBox small {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    opacity: .8;
    background: -moz-linear-gradient(top, rgba(0, 0, 0, 0) 16%, rgba(0, 0, 0, 0) 39%, rgba(0, 0, 0, .65) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0) 16%, rgba(0, 0, 0, 0) 39%, rgba(0, 0, 0, .65) 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 16%, rgba(0, 0, 0, 0) 39%, rgba(0, 0, 0, .65) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#00000000", endColorstr="#a6000000", GradientType=0); /* IE6-9 */
}

.socialRelatedBlock .leftArrow,
.socialRelatedBlock .rightArrow {
    display: none;
}

/************************************** vjs-layout *******************************************/
.vjs-layout-tiny .socialRelatedBlock,
.vjs-layout-x-small .socialRelatedBlock,
.vjs-layout-small .socialRelatedBlock {
    width: 94%;
}

.vjs-layout-tiny .vjs-player-block .player-top-menu,
.vjs-layout-x-small .vjs-player-block .player-top-menu,
.vjs-layout-small .vjs-player-block .player-top-menu {
    display: flex;
    position: relative;
    width: 100%;
}

/*********************************/
.vjs-layout-tiny .vjs-player-block .player-top-menu .holder-socialshare .socialShare a,
.vjs-layout-x-small .vjs-player-block .player-top-menu .holder-socialshare .socialShare a,
.vjs-layout-small .vjs-player-block .player-top-menu .holder-socialshare .socialShare a {
    width: 38px;
    height: 30px;
    line-height: 30px;
}

/****************************/
.vjs-layout-tiny .vjs-player-block .player-top-menu .holder-email .socialEmail a,
.vjs-layout-x-small .vjs-player-block .player-top-menu .holder-email .socialEmail a,
.vjs-layout-small .vjs-player-block .player-top-menu .holder-email .socialEmail a {
    width: 38px;
    height: 30px;
    line-height: 30px;
}

/*******************/
.vjs-layout-tiny .socialTeleScope a,
.vjs-layout-x-small .socialTeleScope a,
.vjs-layout-small .socialTeleScope a {
    width: 38px;
    height: 30px;
    line-height: 30px;
    background-size: 70%;
}

/*********************************/
.vjs-layout-tiny .holder-socialshare,
.vjs-layout-x-small .holder-socialshare,
.vjs-layout-small .holder-socialshare,
.vjs-layout-tiny .holder-email,
.vjs-layout-x-small .holder-email,
.vjs-layout-small .holder-email,
.vjs-layout-tiny .holder-related,
.vjs-layout-x-small .holder-related,
.vjs-layout-small .holder-related {
    width: 38px;
    height: 30px;
}

.vjs-layout-tiny .social-list,
.vjs-layout-x-small .social-list,
.vjs-layout-small .social-list {
    max-width: 100%;
}

.vjs-layout-tiny .social-list ul li,
.vjs-layout-x-small .social-list ul li,
.vjs-layout-small .social-list ul li {
    width: 50%;
}

.vjs-layout-tiny .social-list ul li {
    font-size: 12px;
}

/***************/
.vjs-layout-tiny .socialRelatedItems,
.vjs-layout-x-small .socialRelatedItems,
.vjs-layout-small .socialRelatedItems {
    display: block;
    vertical-align: top;
    width: 100%;
    padding: 0;
    overflow: hidden;
}

.vjs-layout-tiny .socialRelatedItems ul li,
.vjs-layout-x-small .socialRelatedItems ul li,
.vjs-layout-small .socialRelatedItems ul li {
    display: none;
    float: left;
    width: 100%;
}

.vjs-layout-tiny .socialRelatedItems ul li:first-child,
.vjs-layout-x-small .socialRelatedItems ul li:first-child,
.vjs-layout-small .socialRelatedItems ul li:first-child {
    display: block;
    float: left;
    width: 100%;
    padding-bottom: 0;
}

.vjs-layout-tiny .socialRelatedItems .titleClass,
.vjs-layout-x-small .socialRelatedItems .titleClass,
.vjs-layout-small .socialRelatedItems .titleClass {
    display: none;
    padding: 0 10px 2px 10px;
    font-size: 14px;
    line-height: 20px;
}

.vjs-layout-tiny .socialRelatedItems .desClass,
.vjs-layout-x-small .socialRelatedItems .desClass,
.vjs-layout-small .socialRelatedItems .desClass {
    display: none;
    padding: 0 10px;
    font-size: 12px;
    line-height: 14px;
}

.vjs-layout-tiny .socialRelatedItems .leftArrow,
.vjs-layout-x-small .socialRelatedItems .leftArrow,
.vjs-layout-small .socialRelatedItems .leftArrow {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 999;
    opacity: .6;
    width: 30px;
    height: 30px;
    margin: auto;
    background: rgba(0, 0, 0, .5) url("//assets.dm.ux.sap.com/commonutils/images/left-arrow-white.png") no-repeat 50% 50%;
}

.vjs-layout-tiny .socialRelatedItems .rightArrow,
.vjs-layout-x-small .socialRelatedItems .rightArrow,
.vjs-layout-small .socialRelatedItems .rightArrow {
    display: block;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 999;
    opacity: .6;
    width: 30px;
    height: 30px;
    margin: auto;
    background: rgba(0, 0, 0, .5) url("//assets.dm.ux.sap.com/commonutils/images/right-arrow-white.png") no-repeat 50% 50%;
}

.vjs-layout-tiny .socialRelatedItems .leftArrow:hover,
.vjs-layout-tiny .socialRelatedItems .rightArrow:hover,
.vjs-layout-x-small .socialRelatedItems .leftArrow:hover,
.vjs-layout-x-small .socialRelatedItems .rightArrow:hover,
.vjs-layout-small .socialRelatedItems .leftArrow:hover,
.vjs-layout-small .socialRelatedItems .rightArrow:hover {
    opacity: 1;
    cursor: pointer;
}

/****************************************************************************************************************/
@media only screen and (max-width: 500px) {
    .social-list {
        margin-right: 10px;
    }

    .vjs-player-block .player-top-menu {
        display: block;
        position: relative;
    }

    /*********************************/
    .vjs-player-block .player-top-menu .holder-socialshare .socialShare a {
        width: 38px;
        height: 30px;
        line-height: 30px;
    }

    /****************************/
    .vjs-player-block .player-top-menu .holder-email .socialEmail a {
        width: 38px;
        height: 30px;
        line-height: 30px;
    }

    /*******************/
    .socialTeleScope a {
        width: 38px;
        height: 30px;
        line-height: 30px;
    }

    /************************************************************/
    .holder-socialshare,
    .holder-email,
    .holder-related {
        width: 38px;
        height: 30px;
    }

    .social-list {
        min-width: 210px;
    }

    .vjs-layout-tiny .social-list {
        min-width: 196px;
    }

    .social-list ul li {
        width: 50%;
    }

    .social-list ul a {
        padding-left: 5px;
    }

    .social-list ul a span {
        padding: 5px;
    }

    /***************/
    .socialRelatedItems {
        display: block;
        float: left;
        vertical-align: top;
        width: 100%;
        padding: 0;
    }

    .socialRelatedItems ul li {
        display: none;
        float: left;
        width: 100%;
    }

    .socialRelatedItems ul li:first-child {
        display: block;
        float: left;
        width: 100%;
        padding-bottom: 0;
    }

    .socialRelatedItems .titleClass {
        display: none;
        padding: 0 10px 2px 10px;
        font-size: 14px;
        line-height: 20px;
    }

    .socialRelatedItems .desClass {
        display: none;
        padding: 0 10px;
        font-size: 12px;
        line-height: 14px;
    }

    .socialRelatedItems .leftArrow {
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        z-index: 999;
        opacity: .6;
        width: 30px;
        height: 30px;
        margin: auto;
        background: rgba(0, 0, 0, .5) url("//assets.dm.ux.sap.com/commonutils/images/left-arrow-white.png") no-repeat 50% 50%;
    }

    .socialRelatedItems .rightArrow {
        display: block;
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 999;
        opacity: .6;
        width: 30px;
        height: 30px;
        margin: auto;
        background: rgba(0, 0, 0, .5) url("//assets.dm.ux.sap.com/commonutils/images/right-arrow-white.png") no-repeat 50% 50%;
    }

    .socialRelatedItems .leftArrow:hover,
    .socialRelatedItems .rightArrow:hover {
        opacity: 1;
        cursor: pointer;
    }
}

/**********************************************************************/
.sessionShareContainer .social-list ul li {
    width: 33% !important;
}

.sessionShareContainer .social-list {
    width: 75px !important;
    max-width: 75px !important;
}

@media screen and (min-width: 1301px) and (max-width: 1420px) {
    .social-list ul li {
        margin-top: 0 !important;
        margin-bottom: 1px !important;
    }
}

.customendcta .customEndReplay {
    position: absolute;
    left: 10px;
    bottom: 7px;
    z-index: 2;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    -webkit-font-smoothing: antialiased;
    line-height: 40px;
    text-align: center;
    background: rgba(0, 0, 0, 1);
    cursor: pointer;
}

.customendcta .customEndReplay span.replayText {
    position: absolute;
    left: 45px;
    top: 0;
    font-family: BentonSansRegular, Arial, Helvetica, sans-serif;
    font-size: 14px;
    text-shadow: 0 1px 4px #000;
}

.customendcta .playerctaendback {
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 100%;
    background: #000;
}

.video-js .customcta {
    display: none;
    position: absolute;
    right: 5%;
    bottom: 30px;
    max-width: 250px;
    font-size: 13px;
    line-height: 18px;
    background: #008fd3;
}

.vjs-youtube .customcta {
    bottom: 55px;
}

.video-js:not(.vjs-fullscreen).vjs-layout-tiny .customcta,
.video-js:not(.vjs-fullscreen).vjs-layout-x-small .customcta {
    bottom: 35px;
}

.video-js:not(.vjs-fullscreen).vjs-youtube.vjs-layout-tiny .customcta,
.video-js:not(.vjs-fullscreen).vjs-youtube.vjs-layout-x-small .customcta {
    bottom: 48px;
}

.video-js:not(.vjs-fullscreen).vjs-youtube.vjs-layout-small .customcta {
    bottom: 60px;
}

@media (orientation: portrait) {
    .video-js:not(.vjs-fullscreen).vjs-youtube.vjs-android.vjs-layout-tiny .customcta,
    .video-js:not(.vjs-fullscreen).vjs-youtube.vjs-android.vjs-layout-x-small .customcta,
    .video-js:not(.vjs-fullscreen).vjs-youtube.vjs-android.vjs-layout-small .customcta {
        bottom: 65px;
    }
}

.video-js .customcta a {
    display: block;
    padding: 10px 15px;
    text-decoration: none;
    color: #fff;
}

.video-js:not(.vjs-fullscreen).vjs-layout-tiny .customcta a,
.video-js:not(.vjs-fullscreen).vjs-layout-x-small .customcta a {
    padding: 5px 10px;
}

.video-js .customendcta {
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
}

.video-js .customendcta .customEndData {
    display: table;
    position: relative;
    z-index: 1;
    vertical-align: middle;
    width: 100%;
    height: 100%;
    color: #fff;
}

.video-js .customendcta .customEndData .customEndDataWrapper {
    display: table-cell;
    vertical-align: middle;
    padding: 0 25px;
}

.video-js .customendcta .linkButton {
    width: auto;
    margin: 0;
    padding: 7px 14px;
}

.video-js .customendcta .customClose {
    float: right;
    width: 20px;
    height: 0;
    font-weight: normal;
    font-stretch: semi-expanded;
    font-size: 20px;
    line-height: 25px;
}

.vjs-menu-button-popup .vjs-menu .vjs-menu-content {
    z-index: 1;
    max-height: 16em;
}

.vjs-layout-tiny .vjs-menu-button-popup .vjs-menu .vjs-menu-content,
.vjs-layout-x-small .vjs-menu-button-popup .vjs-menu .vjs-menu-content,
.vjs-layout-small .vjs-menu-button-popup .vjs-menu .vjs-menu-content,
.vjs-layout-medium .vjs-menu-button-popup .vjs-menu .vjs-menu-content {
    max-height: 16em;
}

@media (max-width: 767px) {
    .vjs-layout-tiny .vjs-menu-button-popup .vjs-menu .vjs-menu-content,
    .vjs-layout-x-small .vjs-menu-button-popup .vjs-menu .vjs-menu-content,
    .vjs-layout-small .vjs-menu-button-popup .vjs-menu .vjs-menu-content {
        max-height: 8em;
    }
}

.vjs-menu li.vjs-menu-title {
    display: none;
}

.vjs-menu-button-popup .vjs-menu {
    z-index: 2;
}

/*start styles for preroll*/
.preroll-skip-button,
.postroll-skip-button,
.advertisement-box, .remaining-time {
    display: block;
    position: absolute;
    right: 0;
    top: 5px;
    z-index: 2;
    width: auto;
    padding: 10px;
    border: 1px solid rgba(255, 255, 255, .35);
    border-right: none;
    font-style: italic;
    font-size: 12px;
    line-height: 12px;
    color: #aaa;
    background-color: rgba(0, 0, 0, .5);
}

.advertisement-box {
    left: 0;
    right: auto;
    border-right: 1px solid rgba(255, 255, 255, .35);
    border-left: none;
    font-style: normal;
}

.preroll-skip-button.enabled,
.postroll-skip-button.enabled {
    color: #fff;
    cursor: pointer;
}

.preroll-skip-button.enabled:hover,
.postroll-skip-button.enabled:hover {
    background: #333;
    cursor: pointer;
}

.preroll-blocker,
.postroll-blocker {
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
}

/*end styles for preroll*/
.customEndReplay svg {
    fill: #fff;
}

.video-js:not(.vjs-fullscreen).vjs-layout-tiny .vjs-progress-control,
.video-js:not(.vjs-fullscreen).vjs-layout-x-small .vjs-progress-control {
    display: block;
    position: absolute;
    left: 50%;
    bottom: 100%;
    width: calc(100% - 9px);
    height: auto;
    transform: translateX(-50%);
    z-index: 1;
}

.video-js:not(.vjs-fullscreen).vjs-layout-tiny .vjs-progress-control .vjs-progress-holder,
.video-js:not(.vjs-fullscreen).vjs-layout-x-small .vjs-progress-control .vjs-progress-holder {
    height: 5px;
    margin: 0;
}

.video-js .vjs-play-progress:before {
    content: "";
    display: block;
    top: 50%;
    width: 9px;
    height: 9px;
    border-radius: 100%;
    background: #fff;
    transform: translateY(-50%);
}

.video-js .vjs-volume-panel {
    margin-right: auto;
}

.videoInline [class^="videoImageContainer"] {
    padding-top: 56.25%;
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
}

.vjs-poster {
    background-size: cover !important;
}

#popupvideocont iframe {
    display: block;
}

.videoPop .videoContainer {
    padding-top: 56.25%;
    background-color: #000;
}

.videoPop .videoContainer > * {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
}

.videoPop .videoContainer iframe {
    height: 100%;
}

#playerInPopup .vjs-big-play-button,
#playerInPopup .vjs-poster {
    visibility: hidden;
}

.video-js .vjs-control:focus:before,
.video-js .vjs-control:hover:before,
.video-js .vjs-control:focus,
.vjs-control .vjs-button {
    outline: none;
}

.video-js:not(.vjs-fullscreen).vjs-layout-tiny .vjs-remaining-time,
.video-js:not(.vjs-fullscreen).vjs-layout-x-small .vjs-remaining-time,
.video-js:not(.vjs-fullscreen).vjs-layout-small .vjs-remaining-time {
    display: block;
}

.customendcta .customEndReplay {
    width: 26px;
    height: 26px;
    line-height: 26px;
}

.multiStackCar3Col .customendcta .customEndReplay {
    width: 20px;
    height: 20px;
    line-height: 20px;
}

.customEndReplay .icon-replay {
    width: 17px;
    height: 26px;
}

.multiStackCar3Col .customEndReplay .icon-replay {
    width: 17px;
    height: 20px;
}

.customendcta .customEndReplay span.replayText {
    left: 32px;
    font-size: 12px;
}

.multiStackCar3Col .customendcta .customEndReplay span.replayText {
    left: 24px;
}

.liveComponent .container-iframe {
    position: relative;
    padding-top: 56.25%;
}

.liveComponent .embed-container {
    position: absolute !important;
    left: 0;
    top: 0;
    width: 100%;
    height: 100% !important;
    padding-bottom: 0 !important;
}

.liveComponent .poster-iframe {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
}

.liveComponent iframe {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
}

.video-js:not(.vjs-fullscreen).vjs-layout-tiny .vjs-volume-control,
.video-js:not(.vjs-fullscreen).vjs-layout-x-small .vjs-volume-control {
    display: block;
}

.theatre-mode-enabled .slick-track {
    position: static;
    left: auto !important;
    width: 100% !important;
}

.current-slide {
    width: 100% !important;
    max-width: none !important;
}

.theatre-mode-enabled .columnHero:not(.current-slide) {
    display: none;
}

.multiColStackCarContainer [class^="mainplayeroverlayimg"] {
    padding-top: 56.25%;
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
}

.videoList .vjs-ended .vjs-poster,
.videoList .vjs-poster {
    display: none;
}

.show-poster .vjs-ended .vjs-poster {
    display: block;
}

.show-poster .vjs-poster,
.videoPopOut .vjs-poster {
    display: none
}

.videoList .show-first-poster .video-js:not(.vjs-has-started) .vjs-poster {
    display: block
}

.Video.section {
    position: relative;
}

.customEndData {
    font-size: 16px;
}

.vjs-layout-tiny .customEndData {
    font-size: 12px;
}

@media screen and (max-width: 767px) {
    .customEndData {
        font-size: 12px;
    }
}

.preroll-skip-button,
.postroll-skip-button,
.advertisement-box,
.remaining-time {
    top: 60px;
}

.ytp-gradient-bottom,
.ytp-gradient-top,
.ytp-chrome-top,
.ytp-chrome-bottom {
    display: none;
}

#fade:hover .fade_close,
.inlineVideo .video_black_container:hover .close-btn,
.lvsOuter:hover .close-btn {
    display: inline !important;
}

.lvsOuter .icon-close:before {
    content: none;
}

.vjs-logo-live:after {
    content: "";
    display: block;
    position: absolute;
    right: 0;
    top: 0;
    width: 30px;
    height: 15px;
    margin: 0 0 20px 20px;
    background-image: url("//assets.dm.ux.sap.com/commonutils/images/live_icon.png");
    background-size: contain;
    background-repeat: no-repeat;
}

.vjs-hls-quality-selector.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-quality-selector {
    display: none;
}

.custom-copy-message {
    display: none;
    position: absolute;
    left: 20%;
    bottom: 50%;
    z-index: 999;
    width: auto;
    padding: 6px 10px;
    border-radius: 0;
    -moz-box-shadow: 0 7px 8px -5px rgba(0,0,0,0.75);
    -webkit-box-shadow: 0 7px 8px -5px rgba(0,0,0,0.75);
    box-shadow: 0 7px 8px -5px rgba(0,0,0,0.75);
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 13px;
    color: #f5f5f5;
    background-color: #008fd3;
}
