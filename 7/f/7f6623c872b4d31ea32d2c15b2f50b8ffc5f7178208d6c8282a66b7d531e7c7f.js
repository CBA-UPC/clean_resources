@media only screen and (min-width: 601px) and(min-height: 675px) {
    #cnc_gallery_top_placeholder {
        min-height: 250px;
        height: 250px
    }
}

@media only screen and (min-width: 601px) and(max-height: 674px) {
    #cnc_gallery_side_placeholder {
        width: 336px;
        height: 300px
    }

    .cnc-gallery-ad.cnc-gallery-ad--sky {
        margin-top: 40px
    }
}

#cnc_branding_creative_wrapper {
    position: relative;
    z-index: 0;
    top: 0;
    left: 0;
    width: 100%
}

#cnc_branding_creative_wrapper.new-gallery {
    padding-top: 40px
}

#cnc_branding_creative_wrapper.old_gallery .cnc-ads--leaderboard {
    background-color: rgba(232, 232, 232, .3)
}

#cnc_branding_creative_wrapper.cnc-branding.new-gallery {
    padding-top: 40px
}

#cnc_branding_creative_wrapper.cnc-branding.new-gallery .cnc-ads--leaderboard:before {
    top: 50px !important
}

#cnc_branding_creative_wrapper.cnc-branding.new-gallery .cnc-ads--leaderboard iframe:first-child {
    top: 40px
}

#cnc_branding_creative_wrapper.cnc-branding .cnc-ads--leaderboard {
    background-color: transparent
}

#cnc_branding_creative_wrapper.cnc-branding .cnc-ads--leaderboard:before {
    position: fixed !important;
    top: 10px;
    right: 10px !important;
    -webkit-transform: none !important;
    transform: none !important;
    background-color: #ffffff;
    -webkit-box-shadow: 0 0 4px rgba(0, 0, 0, .5);
    box-shadow: 0 0 4px rgba(0, 0, 0, .5);
    line-height: 12px;
    border-radius: 3px;
    border: 1px solid #d6d6d6
}

#cnc_branding_creative_wrapper.cnc-branding .cnc-ads--leaderboard iframe:first-child {
    position: fixed;
    top: 0;
    left: 50%;
    -webkit-transform: translate(-50%);
    transform: translate(-50%)
}

#cnc_branding_creative_wrapper.cnc-branding.old_gallery {
    position: relative;
    z-index: 0;
    top: 64px;
    left: 0;
    width: 100%
}

#cnc_branding_creative_wrapper.cnc-branding.old_gallery .cnc-ads--leaderboard {
    background-color: rgba(232, 232, 232, .3)
}

#cnc_branding_creative_wrapper.cnc-branding.old_gallery .cnc-ads--leaderboard:before {
    position: fixed !important;
    top: 74px;
    right: 10px !important;
    -webkit-transform: none !important;
    transform: none !important
}

#cnc_branding_creative_wrapper.cnc-branding.old_gallery .cnc-ads--leaderboard iframe:first-child {
    position: fixed;
    top: 64px;
    left: 50%;
    -webkit-transform: translate(-50%);
    transform: translate(-50%)
}

#cnc_branding_creative_wrapper.label-top-20 .cnc-ads--leaderboard:before {
    top: 20px
}

#cnc_branding_creative_wrapper.label-top-50 .cnc-ads--leaderboard:before {
    top: 50px
}

#cnc_branding_creative_wrapper.label-top-80 .cnc-ads--leaderboard:before {
    top: 80px
}

#cnc_branding_creative_wrapper.label-top-110 .cnc-ads--leaderboard:before {
    top: 110px
}

#cnc_branding_creative_wrapper.label-top-140 .cnc-ads--leaderboard:before {
    top: 140px
}

#cnc_branding_creative_wrapper.label-top-170 .cnc-ads--leaderboard:before {
    top: 170px
}

.branding-wrapper {
    z-index: 1;
    position: relative;
    margin: 0 auto;
    width: 100%;
    max-width: 1080px
}

.cnc-ad-overlay--vignette {
    z-index: 2000000;
    background-color: #373737;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0
}

.cnc-ad-overlay--vignette__label-ads-wrapper {
    padding: 18px;
    z-index: 2100000;
    position: fixed;
    bottom: 0;
    right: 0;
    pointer-events: none
}

.cnc-ad-overlay--vignette__label-ads {
    display: block;
    padding: 3px 5px;
    background-color: #000;
    -webkit-box-shadow: 0 0 10px rgba(255, 255, 255, .75);
    box-shadow: 0 0 10px rgba(255, 255, 255, .75);
    font-size: 16px;
    border: none;
    color: rgba(255, 255, 255, .85);
    font-weight: 400;
    font-family: sans-serif;
    pointer-events: none
}

.cnc-ad-overlay--vignette__close-wrapper {
    padding: 20px;
    z-index: 2100000;
    position: fixed;
    top: 0;
    right: 0
}

.cnc-ad-overlay--vignette__close-button {
    z-index: 3100000;
    display: block;
    width: 42px;
    height: 42px;
    border-radius: 42px;
    line-height: 42px;
    margin: 0;
    font-size: 20px;
    padding: 0;
    color: rgba(255, 255, 255, .85);
    text-decoration: none;
    background-color: #000;
    -webkit-box-shadow: 0 0 15px rgba(255, 255, 255, .75);
    box-shadow: 0 0 15px rgba(255, 255, 255, .75);
    border: 1px solid rgba(255, 255, 255, .65)
}

.cnc-ad-overlay--vignette__close-button:active {
    opacity: .6
}

.cnc-ad-overlay--vignette__close-button__cross-line {
    stroke-width: 3px;
    stroke: #fff;
    stroke-linecap: round
}

.cnc-ad-format--vignette {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
}

.cnc-gallery-slider__ad--mobile > div.cnc-ads {
    margin-top: 25px !important
}

.cnc-ads {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    clear: both;
    display: block;
    margin-top: 25px;
    margin-bottom: 25px;
    padding-top: 0;
    padding-bottom: 0;
    position: relative;
    background-color: #ffffff
}

.cnc-ads:before {
    content: 'reklama';
    font-size: 10px;
    font-family: sans-serif;
    position: absolute;
    top: -14px;
    right: 0;
    line-height: 10px;
    padding: 2px 4px;
    background-color: inherit;
    color: #000;
    z-index: 1
}

.cnc-ads--out_of_page {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 6000000;
    height: 200px
}

.cnc-ads__within {
    margin: 0 auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    overflow: hidden;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    position: relative;
    min-height: 0 !important;
    min-width: 0 !important
}

.cnc-ads--leaderboard, .cnc-ads--leaderboard_1 {
    z-index: -1;
    margin: 0 auto;
    position: relative;
    min-height: 200px;
    max-height: 210px;
    padding: 0;
    width: 1080px
}

.cnc-ads--leaderboard:before, .cnc-ads--leaderboard_1:before {
    top: 0;
    right: -1px !important;
    -webkit-transform: rotate(-90deg);
    transform: rotate(-90deg);
    -webkit-transform-origin: top right;
    transform-origin: top right
}

.cnc-ads--leaderboard .cnc-ads__within, .cnc-ads--leaderboard_1 .cnc-ads__within {
    width: 1080px;
    height: 210px;
    min-height: 210px;
    max-height: 210px
}

.cnc-ads--rectangle, .cnc-ads--rectangle_1, .cnc-ads--rectangle_2 {
    height: 300px;
    width: 100%
}

.cnc-ads--rectangle .cnc-ads__within, .cnc-ads--rectangle_1 .cnc-ads__within, .cnc-ads--rectangle_2 .cnc-ads__within {
    width: 100%;
    height: 300px
}

.cnc-ads--commercial, .cnc-ads--commercial_1, .cnc-ads--commercial_2 {
    height: 150px
}

.cnc-ads--commercial .cnc-ads__within, .cnc-ads--commercial_1 .cnc-ads__within, .cnc-ads--commercial_2 .cnc-ads__within {
    width: 100%;
    height: 150px
}

.cnc-ads--button_1 {
    margin-top: 0;
    margin-bottom: 0;
    height: 130px
}

.cnc-ads--button_1 .cnc-ads__within {
    width: 100%;
    height: 130px
}

.cnc-ads--brand_targeting {
    margin-top: 0;
    margin-bottom: 0;
    height: 155px
}

.cnc-ads--brand_targeting .cnc-ads__within {
    width: 100%;
    height: 155px
}

.cnc-ads--pr_premium_1, .cnc-ads--pr_standard, .cnc-ads--pr_premium, .cnc-ads--pr_premium_2, .cnc-ads--pr_premium_3, .cnc-ads--pr_standard_1 {
    width: 100%;
    height: 220px;
    padding-top: 10px;
    padding-bottom: 10px
}

.cnc-ads--pr_premium_1 .cnc-ads__within, .cnc-ads--pr_standard .cnc-ads__within, .cnc-ads--pr_premium .cnc-ads__within, .cnc-ads--pr_premium_2 .cnc-ads__within, .cnc-ads--pr_premium_3 .cnc-ads__within, .cnc-ads--pr_standard_1 .cnc-ads__within {
    width: 100%;
    height: 200px
}

.cnc-ads--halfpage, .cnc-ads--halfpage_1, .cnc-ads--halfpage_2 {
    height: 600px
}

.cnc-ads--halfpage .cnc-ads__within, .cnc-ads--halfpage_1 .cnc-ads__within, .cnc-ads--halfpage_2 .cnc-ads__within {
    width: 300px;
    height: 600px
}

.cnc-ads--skyscraper, .cnc-ads--skyscraper_1, .cnc-ads--skyscraper_2 {
    height: 600px
}

.cnc-ads--skyscraper .cnc-ads__within, .cnc-ads--skyscraper_1 .cnc-ads__within, .cnc-ads--skyscraper_2 .cnc-ads__within {
    width: 160px;
    height: 600px
}

.cnc-ads--halfpage_1_gallery {
    height: 600px
}

.cnc-ads--halfpage_1_gallery .cnc-ads__within {
    width: 300px;
    height: 600px
}

.cnc-ads--small_leaderboard, .cnc-ads--small_leaderboard_1 {
    height: 150px
}

.cnc-ads--small_leaderboard .cnc-ads__within, .cnc-ads--small_leaderboard_1 .cnc-ads__within {
    width: 100%;
    height: 150px;
    background-color: transparent
}

.cnc-ads--under_article {
    min-height: 300px
}

.cnc-ads--under_article .cnc-ads__within {
    width: 100%;
    min-height: 300px
}

.cnc-ads--billboard_bottom, .cnc-ads--billboard_bottom_1 {
    height: 310px
}

.cnc-ads--billboard_bottom .cnc-ads__within, .cnc-ads--billboard_bottom_1 .cnc-ads__within {
    width: 100%;
    min-height: 310px
}

.cnc-ads--mobile_rectangle_2, .cnc-ads--mobile_rectangle_3, .cnc-ads--mobile_rectangle_4, .cnc-ads--mobile_rectangle_5, .cnc-ads--mobile_rectangle_6, .cnc-ads--mobile_rectangle_repeater {
    min-height: 300px;
    width: 100%
}

.cnc-ads--mobile_rectangle_2 .cnc-ads__within, .cnc-ads--mobile_rectangle_3 .cnc-ads__within, .cnc-ads--mobile_rectangle_4 .cnc-ads__within, .cnc-ads--mobile_rectangle_5 .cnc-ads__within, .cnc-ads--mobile_rectangle_6 .cnc-ads__within, .cnc-ads--mobile_rectangle_repeater .cnc-ads__within {
    width: 100%;
    height: 300px
}

.cnc-ads--smr-mobil-galerie {
    width: 100vw;
    height: 100vw;
}

.cnc-ads--rectangle_480_2, .cnc-ads--rectangle_480_repeater {
    height: 300px
}

.cnc-ads--rectangle_480_2 .cnc-ads__within, .cnc-ads--rectangle_480_repeater .cnc-ads__within {
    width: 100%;
    height: 300px
}

.cnc-ads--rectangle_480_1 {
    min-height: 300px;
    max-height: 400px;
    text-align: center
}

.cnc-ads--rectangle_480_1 .cnc-ads__within {
    width: 100%;
    min-height: 300px;
    max-height: 400px
}

.cnc-ads--rectangle_480_repeater, .cnc-ads--mobile_rectangle_repeater {
    margin-bottom: 25px
}

.cnc-ads--fullbanner_left_1, .cnc-ads--fullbanner_right_1 {
    height: 60px
}

.cnc-ads--fullbanner_left_1 .cnc-ads__within, .cnc-ads--fullbanner_right_1 .cnc-ads__within {
    width: 100%;
    height: 60px
}

.cnc-ads--leaderboard_2, .cnc-ads--leaderboard_3, .cnc-ads--leaderboard_4 {
    margin-top: 0;
    margin-bottom: 0;
    height: 90px
}

.cnc-ads--leaderboard_2 .cnc-ads__within, .cnc-ads--leaderboard_3 .cnc-ads__within, .cnc-ads--leaderboard_4 .cnc-ads__within {
    width: 728px;
    height: 90px
}

.cnc-ads--leaderboard_5 {
    margin-top: 0;
    margin-bottom: 0;
    height: 100px
}

.cnc-ads--leaderboard_5 .cnc-ads__within {
    width: 728px;
    height: 100px
}

.cnc-ads--opener {
    margin-top: 0;
    margin-bottom: 0
}

.cnc-ads--opener .cnc-ads__within {
    width: auto;
    height: auto
}

.cnc-ads--sazkabet300 {
    height: 200px
}

.cnc-ads--sazkabet300 .cnc-ads__within {
    width: 100%;
    height: 200px
}

.cnc-ads--sazkabet690 {
    height: 320px
}

.cnc-ads--sazkabet690 .cnc-ads__within {
    width: 100%;
    height: 320px
}

.cnc-ads--square_1, .cnc-ads--square_2, .cnc-ads--square_3, .cnc-ads--square_4 {
    height: 300px
}

.cnc-ads--square_1 .cnc-ads__within, .cnc-ads--square_2 .cnc-ads__within, .cnc-ads--square_3 .cnc-ads__within, .cnc-ads--square_4 .cnc-ads__within {
    width: 300px;
    height: 300px
}

.cnc-ads--superopener .cnc-ads__within {
    width: auto;
    height: auto
}

.cnc-ads--bigspartaid .cnc-ads__within {
    width: 1400px;
    height: 700px
}

.cnc-ads--rectangle_793x410_1 .cnc-ads__within {
    width: 793px;
    height: 410px
}

.cnc-ads--smallspartaid .cnc-ads__within {
    width: 700px;
    height: 350px
}

.cnc-ads--square_386x410_1 .cnc-ads__within, .cnc-ads--square_386x410_2 .cnc-ads__within {
    width: 386px;
    height: 410px
}

.cnc-ads--mobile_rectangle_2 {
    min-height: 300px;
    -webkit-transition: all 200ms;
    transition: all 200ms
}

.cnc-ads--mobile_rectangle_2--interscroller {
    height: 70vh;
    max-height: 500px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto
}

.cnc-ads--mobile_rectangle_2--interscroller .cnc-ads__within {
    height: 70vh;
    max-height: 500px;
    -webkit-transition: all 200ms;
    transition: all 200ms;
    overflow: hidden;
    clip: rect(0, auto, auto, 0);
    position: absolute
}

.cnc-ads--mobile_rectangle_2--interscroller .cnc-ads__within div[id^='google_ads_iframe_'] {
    width: 100%;
    height: inherit;
    -webkit-transition: none 0s ease 0s;
    transition: none 0s ease 0s;
    -webkit-transform: perspective(0);
    transform: perspective(0);
    position: fixed
}

.cnc-ads--mobile_rectangle_2--interscroller .cnc-ads__within iframe[id^='google_ads_iframe_'] {
    height: 100%;
    width: 100%
}

.cnc_gallery_ad_position .cnc-ads, #cnc_gallery_top_placeholder .cnc-ads, #cnc_gallery_side_placeholder .cnc-ads {
    background-color: rgba(232, 232, 232, .3)
}

.cnc_gallery_ad_position .cnc-ads:before, #cnc_gallery_top_placeholder .cnc-ads:before, #cnc_gallery_side_placeholder .cnc-ads:before {
    background-color: #ffffff
}

#cnc_out_of_page {
    z-index: 2050000
}

#pfx_wrapper {
    position: fixed;
    z-index: 10000
}

.cnc_category_ad_position, .cnc_article_ad_position {
    height: 314px;
    padding-top: 14px;
    clear: both
}

.cnc_category_ad_position .cnc-ads--rectangle_480_1, .cnc_category_ad_position .cnc-ads--rectangle_480_repeater, .cnc_category_ad_position .cnc-ads--mobile_rectangle_2, .cnc_category_ad_position .cnc-ads--mobile_rectangle_repeater, .cnc_article_ad_position .cnc-ads--rectangle_480_1, .cnc_article_ad_position .cnc-ads--rectangle_480_repeater, .cnc_article_ad_position .cnc-ads--mobile_rectangle_2, .cnc_article_ad_position .cnc-ads--mobile_rectangle_repeater {
    margin-top: 0;
    margin-bottom: 0
}

.cnc_debug_wrapper {
    font-size: 12px;
    font-family: sans-serif, tahoma, Arial;
    color: #fff;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0, 0, 0, .8);
    z-index: 999999999;
    text-align: left
}

.cnc_debug_wrapper > * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box
}

.cnc_debug_wrapper__button {
    border: none;
    border-radius: 3px;
    margin: 0;
    padding: 0 7px;
    line-height: 22px;
    font-size: 12px;
    background-color: #bfff86;
    color: #000;
    cursor: pointer
}

.cnc_debug_wrapper__container {
    position: relative;
    padding: 10px 10px 30px 10px;
    color: #fff;
    font-size: 12px;
    max-height: 50vh;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: stretch;
    -ms-flex-pack: stretch;
    justify-content: stretch
}

.cnc_debug_wrapper__container__form {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 300px;
    flex: 0 0 300px;
    width: 300px
}

.cnc_debug_wrapper__container__result {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    font-family: monospace;
    overflow: auto
}

.cnc_debug_wrapper__container__result__main {
    overflow: hidden;
    overflow-y: auto
}

.cnc_debug_wrapper__container__result__main__table {
    background-color: transparent;
    margin: 0;
    padding: 0;
    border-collapse: collapse;
    border-spacing: 0
}

.cnc_debug_wrapper__container__result__main__table th {
    vertical-align: top;
    white-space: nowrap
}

.cnc_debug_wrapper__container__result__main__table td {
    color: #bfff86
}

.cnc_debug_wrapper__container__result__main__table th, .cnc_debug_wrapper__container__result__main__table td {
    text-align: left;
    font-weight: 400;
    border-bottom: 1px solid rgba(255, 255, 255, .25);
    padding: 4px
}

.cnc_debug_wrapper__container__result__main__table th p, .cnc_debug_wrapper__container__result__main__table td p {
    margin: 0 0 4px 0;
    line-height: 1.3
}

.cnc_debug_wrapper__container__result__main__table tbody tr:hover td, .cnc_debug_wrapper__container__result__main__table tbody tr:hover th {
    background-color: transparent !important
}

.cnc_debug_wrapper__container__result__main__table tr:first-child th, .cnc_debug_wrapper__container__result__main__table tr:first-child td {
    border-top: 1px solid rgba(255, 255, 255, .25)
}

.cnc_debug_wrapper__container__result__log {
    padding: 15px 0
}

.cnc_debug_wrapper__container__result__log__row {
    padding: 3px;
    border-bottom: 1px solid rgba(255, 255, 255, .3);
    font-size: 10px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start
}

.cnc_debug_wrapper__container__result__log__row__timestamp {
    padding: 2px 4px;
    margin-right: 5px;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto
}

.cnc_debug_wrapper__container__result__log__row__message {
    padding: 2px 4px;
    margin-right: 5px;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    word-break: break-all
}

.cnc_debug_wrapper__container__result__log__row__message__string {
    color: #ffb676
}

.cnc_debug_wrapper__container__result__log__row__message__number {
    color: #76f4ff
}

.cnc_debug_wrapper__container__result__log__row__message__items span {
    margin-right: 5px
}

.cnc_debug_wrapper__toggle-button {
    width: auto;
    height: auto;
    background-color: #d30030;
    color: #ffffff;
    white-space: nowrap;
    line-height: 22px;
    cursor: pointer;
    border: none;
    border-radius: 3px 3px 0 0;
    position: absolute;
    top: 0;
    left: 10px;
    margin: -22px 0 0 0;
    padding: 0 6px;
    font-size: 12px;
    font-family: sans-serif, tahoma, Verdana, Arial;
    -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, .75);
    box-shadow: 0 0 10px rgba(0, 0, 0, .75)
}

.cnc_debug_wrapper__toggle-button:active {
    background-color: #de5470;
    color: #ffffff
}

@media only screen and (max-width: 600px) {
    .cnc_debug_wrapper {
        bottom: 0;
        right: 0;
        top: 0;
        left: auto
    }

    .cnc_debug_wrapper .cnc_debug_wrapper__container {
        height: 100%;
        overflow: auto;
        padding: 10px;
        max-height: none;
        width: 90vw;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column
    }

    .cnc_debug_wrapper .cnc_debug_wrapper__container__form {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 auto;
        flex: 0 0 auto;
        width: 100%
    }

    .cnc_debug_wrapper .cnc_debug_wrapper__container__result {
        -webkit-box-flex: 1;
        -ms-flex: 1 1 auto;
        flex: 1 1 auto
    }

    .cnc_debug_wrapper .cnc_debug_wrapper__toggle-button {
        top: auto;
        bottom: 0;
        -webkit-transform: rotate(-90deg) translateY(-30px);
        transform: rotate(-90deg) translateY(-30px);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0
    }
}

.cnc_debug_wrapper__item-wrapper {
    display: inline-block;
    padding: 5px;
    white-space: nowrap
}

.cnc_debug_wrapper__item-wrapper .cnc_debug_wrapper__label-checkbox {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.cnc_debug_wrapper__item-wrapper .cnc_debug_wrapper__label-textfield-title {
    display: block
}

.cnc_debug_wrapper__item-wrapper input[type='checkbox'] {
    height: auto;
    width: auto;
    margin-right: 5px
}

.cnc_debug_wrapper__item-wrapper input[type='text'], .cnc_debug_wrapper__item-wrapper input[type='number'] {
    margin: 0 4px 0 0;
    border-radius: 3px;
    color: #000;
    border: 1px solid #939393;
    background-color: #fff
}

.cnc_debug_wrapper--closed .cnc_debug_wrapper__container {
    display: none
}

.cnc_debug_wrapper--closed__toggle-button {
    position: fixed;
    bottom: 0;
    left: 50%;
    margin-left: -60px
}

.cnc_debug_wrapper--opened .cnc_debug_wrapper__container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.cnc-mark-ad-slots .cnc-ads__within:after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    position: absolute;
    background-color: #d30030;
    border: 5px solid #82001e;
    color: #fff;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: attr(id);
    min-width: 100px;
    min-height: 50px
}
