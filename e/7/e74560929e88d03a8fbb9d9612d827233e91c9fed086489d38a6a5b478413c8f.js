# The lists below are known to create issues in uBO.

# Reek's Anti-Adblock Killer
https://raw.github.com/reek/anti-adblock-killer/master/anti-adblock-killer-filters.txt
https://raw.githubusercontent.com/reek/anti-adblock-killer/master/anti-adblock-killer-filters.txt

# ABP anti-circumvention filter lists
https://easylist-downloads.adblockplus.org/abp-filters-anti-cv.txt
https://easylist-msie.adblockplus.org/abp-filters-anti-cv.txt
https://raw.githubusercontent.com/abp-filters/abp-filters-anti-cv/master/english.txt
https://easylist-msie.adblockplus.org/antiadblockfilters.txt

# https://github.com/uBlockOrigin/uBlock-issues/issues/971
https://hosts-file.net/.%5Cad_servers.txt remove
http://hosts-file.net/.%5Cad_servers.txt remove

# https://github.com/uBlockOrigin/uAssets/issues/8738
https://raw.githubusercontent.com/k2jp/abp-japanese-filters/master/abpjf.txt

# https://github.com/uBlockOrigin/uAssets/issues/13566
# https://twitter.com/gorhill/status/1352651716265713665
https://www.joinhoney.com/whitelist/honey-smart-shopping.txt

# whitelisting lists
https://slickdeals.net/attachment/extension/allowlist.txt
https://easylist-downloads.adblockplus.org/exceptionrules.txt
https://letyshops.com/adblock.txt
https://work.ink/adblock-whitelist.txt
https://www.aadvantageeshopping.com/adBlockWhitelist.php
https://multiup.org/list_adblock.txt
https://downloads.zohocdn.com/ulaa-browser/release/adb/stable/ulaa-filters.txt

# https://www.reddit.com/r/uBlockOrigin/comments/143k8lm/
https://www.topcashback.co.uk/misc/AdBlockWhiteList.aspx
https://www.topcashback.co.uk/Misc/AdBlockWhiteList.aspx
https://www.topcashback.com/Misc/AdBlockWhiteList.aspx

# https://github.com/collinbarrett/FilterLists/issues/3794
https://www.rakuten.ca/static/cashback-shopping-whitelist
https://www.rakuten.ca/static/cashback-shopping-whitelist?title=Rakuten%20Cash%20Back%20Shopping
# redirect to the new list
https://www.ebates.com/whitelist/ebates-cash-back-shopping.txt
https://www.rakuten.com/whitelist/ebates-cash-back-shopping.txt

# obsolete lists
https://cdn.rawgit.com/NanoAdblocker/NanoFilters/master/NanoFilters/NanoAnnoyance.txt
https://cdn.rawgit.com/NanoAdblocker/NanoFilters/master/NanoFilters/NanoBase.txt
https://cdn.rawgit.com/NanoAdblocker/NanoFilters/master/NanoFilters/NanoWhitelist.txt
https://gitcdn.xyz/repo/NanoAdblocker/NanoFilters/master/NanoFilters/NanoBase.txt
https://gitcdn.xyz/repo/NanoAdblocker/NanoFilters/master/NanoMirror/NanoDefender.txt
https://raw.githubusercontent.com/NanoAdblocker/NanoFilters/master/NanoFilters/NanoAnnoyance.txt
https://raw.githubusercontent.com/NanoAdblocker/NanoFilters/master/NanoFilters/NanoWhitelist.txt
https://raw.githubusercontent.com/NanoAdblocker/NanoFilters/master/NanoFiltersSource/NanoAnnoyance.txt
https://raw.githubusercontent.com/NanoAdblocker/NanoFilters/master/NanoFiltersSource/NanoBase.txt
https://raw.githubusercontent.com/NanoAdblocker/NanoFilters/master/NanoFiltersSource/NanoWhitelist.txt
https://raw.githubusercontent.com/jspenguin2017/uBlockProtector/master/uBlockProtectorList.txt
https://cdn.rawgit.com/NanoAdblocker/NanoFilters/master/NanoMirror/NanoDefender.txt
https://cdn.rawgit.com/NanoMeow/MDLMirror/master/hosts.txt

# outdated prebake list
https://raw.githubusercontent.com/liamja/Prebake/master/obtrusive.txt

# interfere negatively; generic exceptions to ad servers
https://raw.githubusercontent.com/bogachenko/fuckfuckadblock/master/fuckfuckadblock.txt
https://cdn.statically.io/gh/bogachenko/fuckfuckadblock/master/fuckfuckadblock.txt
https://raw.githack.com/bogachenko/fuckfuckadblock/master/fuckfuckadblock.txt
https://cdn.jsdelivr.net/gh/bogachenko/fuckfuckadblock/fuckfuckadblock.txt
https://cdn.jsdelivr.net/gh/bogachenko/fuckfuckadblock@master/fuckfuckadblock.txt
https://fuckfuckadblock.pages.dev/fuckfuckadblock.txt
https://fuckfuckadblock.pages.dev/fuckfuckadblock.txt?_=3
https://raw.githack.com/bogachenko/fuckfuckadblock/master/fuckfuckadblock.txt?_=3
https://cdn.statically.io/gh/bogachenko/fuckfuckadblock/master/fuckfuckadblock.txt?_=3
https://raw.githubusercontent.com/bogachenko/fuckfuckadblock/master/fuckfuckadblock.txt?_=3

! https://github.com/uBlockOrigin/uAssets/discussions/20627
https://raw.githubusercontent.com/Apious/Ads_Filter_Contents/1st/Ads_Block_Contents.txt
https://raw.githubusercontent.com/Apious/Ads_Filter_DNS/1st/Ads_Block_DNS.txt sup a {
  font-size: unset;
  margin-top: unset;
  margin-left: unset;
  white-space: unset;
  text-align: unset;
  padding-left: unset;
}

.accesoriesContainer div.hotspot-container .hotspot-popup a:focus {
  background-color: transparent;
}
.accesoriesContainer div.hotspot-container .hotspot-popup a:after {
  margin-top: 5px;
}
.accesoriesContainer div.hotspot-container .hotspot-popup div {
  padding: 0;
}
.accesoriesContainer .hotspot:hover {
  cursor: pointer;
}
.accesoriesContainer h1 {
  font-size: 68px;
  text-align: center;
}
.accesoriesContainer .adapatability-section {
  width: 100%;
  float: right;
  position: relative;
  z-index: 1;
}
.accesoriesContainer .adapatability-section.sagelineargradient {
  background: linear-gradient(48.47deg, #d1e4d1 33.41%, #a1d19b 97.26%);
}
.accesoriesContainer .adapatability-section.peachlineargradient {
  background: linear-gradient(230.05deg, #f7beaa 19.87%, #fddcc6 84.85%);
}
.accesoriesContainer .adapatability-section.purplelineargradient {
  background: linear-gradient(230.05deg, #cad1f6 22.02%, #e1e4ef 84.85%);
}
.accesoriesContainer .adapatability-section.whitelineargradient {
  background: linear-gradient(88.9deg, #ffffff 6.97%, #dedede 109.17%);
}
.accesoriesContainer .adapatability-section.whitelineargradient .vertical-text{
  color: #a2a2a2;
}
.accesoriesContainer .adapatability-section.icebluelineargradient {
  background: linear-gradient(210.19deg, #D7EDFA -9.4%, #EBF5FB 109.31%);
}
.accesoriesContainer .adapatability-section .hide-popup {
  display: none !important;
}
.accesoriesContainer .adapatability-section .accessories-panel .order-one {
  padding-left: 4%;
  padding-top: 6%;
  opacity: 0;
}
.accesoriesContainer .adapatability-section .accessories-panel .order-one span {
  margin-left: 0;
  display: initial;
}
@media only screen and (max-width: 1083px) {
  .accesoriesContainer .adapatability-section .accessories-panel .order-one {
    padding-left: 2%;
  }
}
@media only screen and (max-width: 767px) {
  .accesoriesContainer .adapatability-section .accessories-panel .order-one {
    width: 100%;
    padding-right: 24%;
  }
}
@media only screen and (max-width: 539px) {
  .accesoriesContainer .adapatability-section .accessories-panel .order-one {
    width: 100%;
    padding-right: 2%;
  }
}
.accesoriesContainer
  .adapatability-section
  .accessories-panel
  .order-one.is-scrollDown {
  animation: animate-backInUpandfadeIn 2s ease-in-out forwards;
  /*@media (prefers-reduced-motion: reduce) {
        animation: none;
        opacity: 1;
    }*/
}
.accesoriesContainer
  .adapatability-section
  .accessories-panel
  .order-one.is-scrollTop {
  animation: animate-backInUpandfadeIn 2s ease-in-out forwards;
  /*@media (prefers-reduced-motion: reduce) {
        animation: none;
        opacity: 1;
    }*/
}
.accesoriesContainer .adapatability-section .accessories-panel .order-one h2 {
  font-weight: 600;
  line-height: 78px;
  padding: 0;
  letter-spacing: -.01em;
}
@media only screen and (max-width: 1399px) {
  .accesoriesContainer .adapatability-section .accessories-panel .order-one h2 {
    font-size: 46px;
    line-height: 56px;
  }
}
@media only screen and (max-width: 1083px) {
  .accesoriesContainer .adapatability-section .accessories-panel .order-one h2 {
    font-size: 34px;
    line-height: 40px;
  }
}
@media only screen and (min-width: 1084px) {
  .accesoriesContainer .adapatability-section .accessories-panel .order-one h2 {
    display: flex;
    flex-direction: column;
  }
}
.accesoriesContainer
  .adapatability-section
  .accessories-panel
  .order-one
  .c-paragraph-2 {
  padding: 0;
}

.accesoriesContainer .adapatability-section .accessories-panel .order-one .c-paragraph-2 a {
  text-decoration: underline;
  padding: 0;
  margin: 0;
}

.accesoriesContainer .adapatability-section .accessories-panel .order-one p {
  font-size: 15px;
  line-height: 20px;
  font-weight: 400;
  width: 70%;
  margin-left: 10%;
  margin-top: 40px;
  color: #2f2f2f;

  margin-bottom: 0;
}
@media only screen and (max-width: 1399px) {
  .accesoriesContainer .adapatability-section .accessories-panel .order-one p {
    width: 310px;
    margin-top: 30px;
  }
}
@media only screen and (max-width: 767px) {
  .accesoriesContainer .adapatability-section .accessories-panel .order-one p {
    width: 100% !important;
    margin-top: 20px;
  }
}
@media only screen and (max-width: 539px) {
  .accesoriesContainer .adapatability-section .accessories-panel .order-one p {
    margin-left: 0%;
    margin-top: 20px;
    width: 100% !important;
  }
}
.accesoriesContainer .adapatability-section .accessories-panel .order-one a {
  background: none;
  color: inherit;
  font-size: 16px;
  /* padding: 0 5px 0 0px; Removing since MWF has a right padding in place to account for the new span tag */
  margin-top: 16px;
  margin-left: 10%;
  /*&:after {
                        margin-top: 5px;
                    }*/
}

.accesoriesContainer .adapatability-section .accessories-panel .order-one sup a {
  margin-left: 5px;
}

@media only screen and (max-width: 539px) {
  .accesoriesContainer .adapatability-section .accessories-panel .order-one a {
    margin-left: 0%;
  }
}
.accesoriesContainer .adapatability-section .accessories-panel .right-panels {
  margin-top: 10%;
  position: relative;
}
@media only screen and (max-width: 539px) {
  .accesoriesContainer .adapatability-section .accessories-panel .right-panels {
    margin-top: auto;
  }
}
@media only screen and (max-width: 767px) {
  .accesoriesContainer .adapatability-section .accessories-panel .right-panels {
    margin-top: 0% !important;
  }
}
@media only screen and (max-width: 1083px) {
  .accesoriesContainer .adapatability-section .accessories-panel .right-panels {
    margin-top: 16%;
  }
}
.accesoriesContainer
  .adapatability-section
  .accessories-panel
  .right-panels
  picture
  img
  + div.hotspot-container {
  position: absolute;
}
.accesoriesContainer
  .adapatability-section
  .accessories-panel
  .right-panels
  picture
  + div.hotspot-container
  .hotspot.close-popup {
  transform: rotate(0deg);
  transition-duration: 0.5s;
  border: 1px solid #0067b8;
  display: inline-block;
  background: #fff;
  padding: 14px;
}
.accesoriesContainer
  .adapatability-section
  .accessories-panel
  .right-panels
  picture
  + div.hotspot-container
  .hotspot {
  position: relative;
  display: inline-block;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.8);
  transform: rotate(45deg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 17px 17px;
  z-index: 22;
  transition-duration: 0.5s;
  border: none;
}
.accesoriesContainer
  .adapatability-section
  .accessories-panel
  .right-panels[data-lvp-popup-align="left"]
  .hotspot-container
  .hotspot-popup {
  left: -557%;
}
@media only screen and (max-width: 539px) {
  .accesoriesContainer
    .adapatability-section
    .accessories-panel
    .right-panels[data-lvp-popup-align="left"]
    .hotspot-container.f-x-left.f-y-top
    .hotspot-popup {
    left: -40% !important;
  }
}
@media only screen and (max-width: 539px) {
  .accesoriesContainer
    .adapatability-section
    .accessories-panel
    .right-panels[data-lvp-popup-align="left"]
    .hotspot-container.f-x-left.f-y-middle
    .hotspot-popup {
    left: -40% !important;
  }
}
@media only screen and (max-width: 539px) {
  .accesoriesContainer
    .adapatability-section
    .accessories-panel
    .right-panels[data-lvp-popup-align="left"]
    .hotspot-container.f-x-left.f-y-bottom
    .hotspot-popup {
    left: -40% !important;
  }
}
@media only screen and (max-width: 539px) {
  .accesoriesContainer
    .adapatability-section
    .accessories-panel
    .right-panels[data-lvp-popup-align="left"]
    .hotspot-container.f-x-center.f-y-top
    .hotspot-popup {
    left: -250% !important;
  }
}
@media only screen and (max-width: 539px) {
  .accesoriesContainer
    .adapatability-section
    .accessories-panel
    .right-panels[data-lvp-popup-align="left"]
    .hotspot-container.f-x-center.f-y-middle
    .hotspot-popup {
    left: -250% !important;
  }
}
@media only screen and (max-width: 539px) {
  .accesoriesContainer
    .adapatability-section
    .accessories-panel
    .right-panels[data-lvp-popup-align="left"]
    .hotspot-container.f-x-center.f-y-bottom
    .hotspot-popup {
    left: -250% !important;
  }
}
@media only screen and (max-width: 539px) {
  .accesoriesContainer
    .adapatability-section
    .accessories-panel
    .right-panels[data-lvp-popup-align="left"]
    .hotspot-container.f-x-right.f-y-top
    .hotspot-popup {
    left: -500% !important;
  }
}
@media only screen and (max-width: 539px) {
  .accesoriesContainer
    .adapatability-section
    .accessories-panel
    .right-panels[data-lvp-popup-align="left"]
    .hotspot-container.f-x-right.f-y-middle
    .hotspot-popup {
    left: -500% !important;
  }
}
@media only screen and (max-width: 539px) {
  .accesoriesContainer
    .adapatability-section
    .accessories-panel
    .right-panels[data-lvp-popup-align="left"]
    .hotspot-container.f-x-right.f-y-bottom
    .hotspot-popup {
    left: -500% !important;
  }
}
.accesoriesContainer
  .adapatability-section
  .accessories-panel
  .right-panels[data-lvp-popup-align="right"]
  .hotspot-popup {
  right: -168px;
}
@media only screen and (max-width: 1083px) {
  .accesoriesContainer
    .adapatability-section
    .accessories-panel
    .right-panels:nth-of-type(4)
    picture
    img
    + div.hotspot-container {
    z-index: 11;
  }
}
.accesoriesContainer .adapatability-section .accessories-panel .left-panels {
  text-align: center;
  position: relative;
  margin-top: -26%;
  z-index: -1;
}
@media only screen and (max-width: 1399px) {
  .accesoriesContainer .adapatability-section .accessories-panel .left-panels {
    margin-top: -18%;
  }
}
@media only screen and (max-width: 1083px) {
  .accesoriesContainer .adapatability-section .accessories-panel .left-panels {
    margin-top: -20%;
  }
}
@media only screen and (max-width: 767px) {
  .accesoriesContainer .adapatability-section .accessories-panel .left-panels {
    margin-top: 50%;
  }
}
@media only screen and (max-width: 539px) {
  .accesoriesContainer .adapatability-section .accessories-panel .left-panels {
    margin-top: 0%;
  }
}
.accesoriesContainer
  .adapatability-section
  .accessories-panel
  .left-panels
  picture
  img
  + div.hotspot-container {
  position: absolute;
}
.accesoriesContainer
  .adapatability-section
  .accessories-panel
  .left-panels
  picture
  + div.hotspot-container
  .hotspot {
  width: 48px;
  position: absolute;
  display: inline-block;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.8);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 17px 17px;
  z-index: 2;
  transition-duration: 0.5s;
  transform: rotate(45deg);
  border: none;
}
.accesoriesContainer
  .adapatability-section
  .accessories-panel
  .left-panels
  picture
  + div.hotspot-container
  .hotspot.close-popup {
  transform: rotate(0deg);
  transition-duration: 0.5s;
  border: 1px solid #0067b8;
  display: inline-block;
  background-color: #fff;
  padding: 14px;
}
@media only screen and (max-width: 539px) {
  .accesoriesContainer
    .adapatability-section
    .accessories-panel
    .left-panels[data-lvp-popup-align="right"]
    .hotspot-container.f-x-left.f-y-top
    .hotspot-popup {
    left: -40% !important;
  }
}
@media only screen and (max-width: 539px) {
  .accesoriesContainer
    .adapatability-section
    .accessories-panel
    .left-panels[data-lvp-popup-align="right"]
    .hotspot-container.f-x-left.f-y-middle
    .hotspot-popup {
    left: -40% !important;
  }
}
@media only screen and (max-width: 539px) {
  .accesoriesContainer
    .adapatability-section
    .accessories-panel
    .left-panels[data-lvp-popup-align="right"]
    .hotspot-container.f-x-left.f-y-bottom
    .hotspot-popup {
    left: -40% !important;
  }
}
@media only screen and (max-width: 539px) {
  .accesoriesContainer
    .adapatability-section
    .accessories-panel
    .left-panels[data-lvp-popup-align="right"]
    .hotspot-container.f-x-center.f-y-top
    .hotspot-popup {
    transform: translate(-40%);
  }
}
@media only screen and (max-width: 539px) {
  .accesoriesContainer
    .adapatability-section
    .accessories-panel
    .left-panels[data-lvp-popup-align="right"]
    .hotspot-container.f-x-center.f-y-middle
    .hotspot-popup {
    transform: translate(-40%);
  }
}
@media only screen and (max-width: 539px) {
  .accesoriesContainer
    .adapatability-section
    .accessories-panel
    .left-panels[data-lvp-popup-align="right"]
    .hotspot-container.f-x-center.f-y-bottom
    .hotspot-popup {
    transform: translate(-40%);
  }
}
@media only screen and (max-width: 539px) {
  .accesoriesContainer
    .adapatability-section
    .accessories-panel
    .left-panels[data-lvp-popup-align="right"]
    .hotspot-container.f-x-right.f-y-top
    .hotspot-popup {
    transform: translate(-92%);
  }
}
@media only screen and (max-width: 539px) {
  .accesoriesContainer
    .adapatability-section
    .accessories-panel
    .left-panels[data-lvp-popup-align="right"]
    .hotspot-container.f-x-right.f-y-middle
    .hotspot-popup {
    transform: translate(-92%);
  }
}
@media only screen and (max-width: 539px) {
  .accesoriesContainer
    .adapatability-section
    .accessories-panel
    .left-panels[data-lvp-popup-align="right"]
    .hotspot-container.f-x-right.f-y-bottom
    .hotspot-popup {
    transform: translate(-92%);
  }
}

/* .accesoriesContainer
  .adapatability-section
  .accessories-panel
  .accessories-products { */
  /*@media only screen and (max-width: 480px) {
                    .accessories-products-panel {
                        opacity: 1 !important;
                    }
                }*/
/* } */

@media only screen and (max-width: 767px) {
  .accesoriesContainer
    .adapatability-section
    .accessories-panel
    .accessories-products {
    float: right;
  }
}
.accesoriesContainer
  .adapatability-section
  .accessories-panel
  .accessories-products
  .accessories-products-panel {
  opacity: 0;
}
.accesoriesContainer
  .adapatability-section
  .accessories-panel
  .accessories-products
  .accessories-products-panel.zoom-200 {
  opacity: 1;
}
.accesoriesContainer
  .adapatability-section
  .accessories-panel
  .accessories-products
  .accessories-products-panel
  picture
  img {
  width: 100%;
}
.accesoriesContainer
  .adapatability-section
  .accessories-panel
  .accessories-products:nth-child(odd)
  .accessories-products-panel.zoom-200.is-scrollDown {
  animation: none;
}
.accesoriesContainer
  .adapatability-section
  .accessories-panel
  .accessories-products:nth-child(odd)
  .accessories-products-panel.zoom-200.is-scrollTop {
  animation: none;
}
.accesoriesContainer
  .adapatability-section
  .accessories-panel
  .accessories-products:nth-child(odd)
  .accessories-products-panel.is-scrollDown {
  animation: animate-backInRightandfadeIn 2s ease-in-out forwards;
  /*@media (prefers-reduced-motion: reduce) {
        animation: none;
        opacity: 1;
    }*/
}
.accesoriesContainer
  .adapatability-section
  .accessories-panel
  .accessories-products:nth-child(odd)
  .accessories-products-panel.is-scrollTop {
  animation: animate-backInRightandfadeIn 2s ease-in-out forwards;
  /*@media (prefers-reduced-motion: reduce) {
        animation: none;
        opacity: 1;
    }*/
}
.accesoriesContainer
  .adapatability-section
  .accessories-panel
  .accessories-products:nth-child(even)
  .accessories-products-panel.zoom-200.is-scrollDown {
  animation: none;
}
.accesoriesContainer
  .adapatability-section
  .accessories-panel
  .accessories-products:nth-child(even)
  .accessories-products-panel.zoom-200.is-scrollTop {
  animation: none;
}
.accesoriesContainer
  .adapatability-section
  .accessories-panel
  .accessories-products:nth-child(even)
  .accessories-products-panel.is-scrollDown {
  animation: animate-backInLeftandfadeIn 2s ease-in-out forwards;
  /*@media (prefers-reduced-motion: reduce) {
        animation: none;
        opacity: 1;
    }*/
}
.accesoriesContainer
  .adapatability-section
  .accessories-panel
  .accessories-products:nth-child(even)
  .accessories-products-panel.is-scrollTop {
  animation: animate-backInLeftandfadeIn 2s ease-in-out forwards;
  /*@media (prefers-reduced-motion: reduce) {
        animation: none;
        opacity: 1;
    }*/
}
.accesoriesContainer .adapatability-section .vertical-text {
  font-size: 251px;
  font-weight: 600;
  color: #ffffff;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  clear: both;
  text-align: center;
  opacity: 0.5;
  z-index: -2;
}
@media only screen and (max-width: 767px) {
  .accesoriesContainer .adapatability-section .vertical-text {
    font-size: 120px !important;
  }
}
@media only screen and (max-width: 1083px) {
  .accesoriesContainer .adapatability-section .vertical-text {
    font-size: 130px !important;
  }
}
@media only screen and (max-width: 1399px) {
  .accesoriesContainer .adapatability-section .vertical-text {
    font-size: 200px;
  }
}
@media only screen and (min-width: 1600px) {
  .accesoriesContainer .adapatability-section .vertical-text {
    font-size: 320px;
  }
}
.accesoriesContainer .adapatability-section .vertical-text.rotate-text {
  -moz-transform: translateX(-50%) translateY(-50%) rotate(-270deg);
  -webkit-transform: translateX(-50%) translateY(-50%) rotate(-270deg);
  transform: translateX(-50%) translateY(-50%) rotate(-270deg);
}

body.animation-off
  .accesoriesContainer
  .adapatability-section
  .accessories-panel
  .order-one {
  opacity: 1;
}
body.animation-off
  .accesoriesContainer
  .adapatability-section
  .accessories-panel
  .order-one.is-scrollDown {
  animation: none;
}
body.animation-off
  .accesoriesContainer
  .adapatability-section
  .accessories-panel
  .order-one.is-scrollTop {
  animation: none;
}

body.animation-off
  .accesoriesContainer
  .adapatability-section
  .accessories-panel
  .accessories-products
  .accessories-products-panel {
  opacity: 1;
}
body.animation-off
  .accesoriesContainer
  .adapatability-section
  .accessories-panel
  .accessories-products
  .accessories-products-panel.is-scrollDown {
  animation: none;
}
body.animation-off
  .accesoriesContainer
  .adapatability-section
  .accessories-panel
  .accessories-products
  .accessories-products-panel.is-scrollTop {
  animation: none;
}

[dir="rtl"]
  .accesoriesContainer
  .adapatability-section
  .accessories-panel
  .order-one {
  padding-right: 4%;
}
[dir="rtl"]
  .accesoriesContainer
  .adapatability-section
  .accessories-panel
  .order-one
  span {
  margin-right: 0;
}

@media only screen and (max-width: 1083px) {
  [dir="rtl"]
    .accesoriesContainer
    .adapatability-section
    .accessories-panel
    .order-one {
    padding-right: 2%;
  }
}

@media only screen and (max-width: 767px) {
  [dir="rtl"]
    .accesoriesContainer
    .adapatability-section
    .accessories-panel
    .order-one {
    padding-left: 24%;
  }
}
@media only screen and (max-width: 539px) {
  [dir="rtl"]
    .accesoriesContainer
    .adapatability-section
    .accessories-panel
    .order-one {
    padding-left: 2%;
  }
}
[dir="rtl"]
  .accesoriesContainer
  .adapatability-section
  .accessories-panel
  .order-one
  p {
  margin-right: 10%;
}
[dir="rtl"]
  .accesoriesContainer
  .adapatability-section
  .accessories-panel
  .order-one
  a {
  margin-right: 10%;
}

[dir="rtl"] .accesoriesContainer div.hotspot-container .hotspot-popup {
  left: -30px;
  top: 20px;
  text-align: right;
}
@media only screen and (min-width: 767px) and (max-width: 992px) {
  [dir="rtl"] .accesoriesContainer div.hotspot-container .hotspot-popup {
    left: auto;
    right: 0;
  }
}
@media only screen and (max-width: 325px) {
  [dir="rtl"] .accesoriesContainer div.hotspot-container .hotspot-popup {
    padding: 12px 13px;
    width: 250px;
  }
  [dir="rtl"] .accesoriesContainer div.hotspot-container .hotspot-popup h3 {
    font-size: 12px;
    line-height: 0px;
    margin-top: 18px;
  }
  [dir="rtl"]
    .accesoriesContainer
    div.hotspot-container
    .hotspot-popup
    div.c-paragraph-2 {
    padding: 0px;
  }
  [dir="rtl"] .accesoriesContainer div.hotspot-container .hotspot-popup p {
    font-size: 8px;
    line-height: 12px;
  }
  [dir="rtl"] .accesoriesContainer div.hotspot-container .hotspot-popup a {
    font-size: 8px;
    margin-top: 0px;
  }
  [dir="rtl"]
    .accesoriesContainer
    div.hotspot-container
    .hotspot-popup
    a:after {
    margin-top: 7px;
    font-size: 5px;
  }
}

[dir="rtl"] .accesoriesContainer .adapatability-section .accessories-panel .order-one sup a {
  margin-right: 5px;
}

[dir="rtl"] .accesoriesContainer .adapatability-section .accessories-panel .order-one p,
[dir="rtl"] .accesoriesContainer .adapatability-section .accessories-panel .order-one a {
  margin-right: 0;
  padding-right: 0;
  border: 0;
}
[dir="rtl"] .accesoriesContainer .adapatability-section .accessories-panel .order-one a:after {
    transform: rotate(180deg);
}
@media only screen and (max-width: 767px) {
[dir="rtl"] .accesoriesContainer .adapatability-section .accessories-panel .accessories-products {
  width: 100%;
}
}


/* overriding css for sup>a in the component desc. */

.accesoriesContainer .accessories-panel p sup a.ms-rte-link{
  color: #0067b8 !important;
  font-size: 12px !important; /* Since the font for the <p> is 15px - custom - we need to custom add 12 px font size for <sup><a> tags*/
}

/* RTL specific CSS */

@media only screen and (max-width: 539px) {
  [dir="rtl"]

  /* LEFT TOP */
  .accesoriesContainer .adapatability-section .accessories-panel .left-panels[data-lvp-popup-align="right"] .hotspot-container.f-x-left.f-y-top .hotspot-popup {
      left: -1rem !important;
  }
  .accesoriesContainer .adapatability-section .accessories-panel .left-panels[data-lvp-popup-align="left"] .hotspot-container.f-x-left.f-y-top .hotspot-popup {
      left: -1rem !important;
  }
  .accesoriesContainer .adapatability-section .accessories-panel .right-panels[data-lvp-popup-align="right"] .hotspot-container.f-x-left.f-y-top .hotspot-popup {
      right: -14rem !important;
  }
  .accesoriesContainer .adapatability-section .accessories-panel .right-panels[data-lvp-popup-align="left"] .hotspot-container.f-x-left.f-y-top .hotspot-popup {
      left: 1rem !important
  }

  /* LEFT MIDDLE */
  .accesoriesContainer .adapatability-section .accessories-panel .left-panels[data-lvp-popup-align="right"] .hotspot-container.f-x-left.f-y-middle .hotspot-popup {
      left: -1rem !important;
  }
  .accesoriesContainer .adapatability-section .accessories-panel .right-panels[data-lvp-popup-align="right"] .hotspot-container.f-x-left.f-y-middle .hotspot-popup {
      right: -14rem !important;
  }
  .accesoriesContainer .adapatability-section .accessories-panel .right-panels[data-lvp-popup-align="left"] .hotspot-container.f-x-left.f-y-middle .hotspot-popup {
      left: 1rem !important
  }

  /* LEFT BOTTOM */
  .accesoriesContainer .adapatability-section .accessories-panel .left-panels[data-lvp-popup-align="right"] .hotspot-container.f-x-left.f-y-bottom .hotspot-popup {
      left: -1rem !important;
  }
  .accesoriesContainer .adapatability-section .accessories-panel .left-panels[data-lvp-popup-align="left"] .hotspot-container.f-x-left.f-y-bottom .hotspot-popup {
      left: -1rem !important;
  }
  .accesoriesContainer .adapatability-section .accessories-panel .right-panels[data-lvp-popup-align="right"] .hotspot-container.f-x-left.f-y-bottom .hotspot-popup {
      right: -14rem !important;
  }
  .accesoriesContainer .adapatability-section .accessories-panel .right-panels[data-lvp-popup-align="left"] .hotspot-container.f-x-left.f-y-bottom .hotspot-popup {
      left: 1rem !important;
  }
}


@media only screen and (max-width: 539px) {
  [dir="rtl"]

  /* CENTER TOP */
  .accesoriesContainer .adapatability-section .accessories-panel .left-panels[data-lvp-popup-align="right"] .hotspot-container.f-x-center.f-y-top .hotspot-popup {
      left: 4rem !important;
  }
  .accesoriesContainer .adapatability-section .accessories-panel .right-panels[data-lvp-popup-align="right"] .hotspot-container.f-x-center.f-y-top .hotspot-popup {
      right: -14rem !important;
  }
  .accesoriesContainer .adapatability-section .accessories-panel .right-panels[data-lvp-popup-align="left"] .hotspot-container.f-x-center.f-y-top .hotspot-popup {
      left: 1rem !important
  }

  /* CENTER MIDDLE */
 
  .accesoriesContainer .adapatability-section .accessories-panel .left-panels[data-lvp-popup-align="left"] .hotspot-container.f-x-center.f-y-middle .hotspot-popup {
      left: -2rem !important;
  }
  .accesoriesContainer .adapatability-section .accessories-panel .right-panels[data-lvp-popup-align="right"] .hotspot-container.f-x-center.f-y-middle .hotspot-popup {
      right: -14rem !important;
  }

  /* CENTER BOTTOM */

  .accesoriesContainer .adapatability-section .accessories-panel .right-panels[data-lvp-popup-align="right"] .hotspot-container.f-x-center.f-y-bottom .hotspot-popup {
      right: -14rem !important;
  }
  .accesoriesContainer .adapatability-section .accessories-panel .right-panels[data-lvp-popup-align="left"] .hotspot-container.f-x-center.f-y-bottom .hotspot-popup {
      left: 1rem !important;
  }
}

@media only screen and (max-width: 539px) {
  [dir="rtl"]

  /* RIGHT TOP */
  .accesoriesContainer .adapatability-section .accessories-panel .left-panels[data-lvp-popup-align="right"] .hotspot-container.f-x-right.f-y-top .hotspot-popup {
      left: -2rem !important;
  }

  .accesoriesContainer .adapatability-section .accessories-panel .left-panels[data-lvp-popup-align="left"] .hotspot-container.f-x-right.f-y-top .hotspot-popup {
      right: 1rem !important;
  }

  .accesoriesContainer .adapatability-section .accessories-panel .right-panels[data-lvp-popup-align="right"] .hotspot-container.f-x-right.f-y-top .hotspot-popup {
      right: 1rem !important;
  }

  .accesoriesContainer .adapatability-section .accessories-panel .right-panels[data-lvp-popup-align="left"] .hotspot-container.f-x-right.f-y-top .hotspot-popup {
      right: 1rem !important;
  }

  /* RIGHT MIDDLE */
  .accesoriesContainer .adapatability-section .accessories-panel .left-panels[data-lvp-popup-align="left"] .hotspot-container.f-x-right.f-y-middle .hotspot-popup {
      right: 1rem !important;
  }
  .accesoriesContainer .adapatability-section .accessories-panel .right-panels[data-lvp-popup-align="right"] .hotspot-container.f-x-right.f-y-middle .hotspot-popup {
      left: -14rem !important;
  }
  .accesoriesContainer .adapatability-section .accessories-panel .right-panels[data-lvp-popup-align="left"] .hotspot-container.f-x-right.f-y-middle .hotspot-popup {
      right: 1rem !important;
  }

  /* RIGHT BOTTOM */
  .accesoriesContainer .adapatability-section .accessories-panel .left-panels[data-lvp-popup-align="right"] .hotspot-container.f-x-right.f-y-bottom .hotspot-popup {
      left: -3rem !important;
  }

  .accesoriesContainer .adapatability-section .accessories-panel .left-panels[data-lvp-popup-align="left"] .hotspot-container.f-x-right.f-y-bottom .hotspot-popup {
      right: 1rem !important;
  }

  .accesoriesContainer .adapatability-section .accessories-panel .right-panels[data-lvp-popup-align="right"] .hotspot-container.f-x-right.f-y-bottom .hotspot-popup {
      right: 1rem !important;
  }

  .accesoriesContainer .adapatability-section .accessories-panel .right-panels[data-lvp-popup-align="left"] .hotspot-container.f-x-right.f-y-bottom .hotspot-popup {
      right: 1rem !important;
  }
}


@media only screen and (min-width: 540px) and (max-width: 767px) {
  [dir="rtl"]

  /* LEFT TOP */
  .accesoriesContainer .adapatability-section .accessories-panel .left-panels[data-lvp-popup-align="right"] .hotspot-container.f-x-left.f-y-top .hotspot-popup {
      right: -17rem !important;
  }

  .accesoriesContainer .adapatability-section .accessories-panel .left-panels[data-lvp-popup-align="left"] .hotspot-container.f-x-left.f-y-top .hotspot-popup {
      left: -1rem !important;
  }

  .accesoriesContainer .adapatability-section .accessories-panel .right-panels[data-lvp-popup-align="right"] .hotspot-container.f-x-left.f-y-top .hotspot-popup {
      right: -17rem !important;
  }

  .accesoriesContainer .adapatability-section .accessories-panel .right-panels[data-lvp-popup-align="left"] .hotspot-container.f-x-left.f-y-top .hotspot-popup {
      left: 1rem !important;
  }

  /* LEFT MIDDLE */
  .accesoriesContainer .adapatability-section .accessories-panel .right-panels[data-lvp-popup-align="right"] .hotspot-container.f-x-left.f-y-middle .hotspot-popup {
      right: -17rem !important;
  }
  .accesoriesContainer .adapatability-section .accessories-panel .right-panels[data-lvp-popup-align="left"] .hotspot-container.f-x-left.f-y-middle .hotspot-popup {
      right: -17rem !important;
  }

  /* LEFT BOTTOM */
  .accesoriesContainer .adapatability-section .accessories-panel .right-panels[data-lvp-popup-align="right"] .hotspot-container.f-x-left.f-y-bottom .hotspot-popup {
      right: -17rem !important;
  }
  .accesoriesContainer .adapatability-section .accessories-panel .right-panels[data-lvp-popup-align="left"] .hotspot-container.f-x-left.f-y-bottom .hotspot-popup {
      left: 1rem !important;
  }
}

@media only screen and (min-width: 540px) and (max-width: 767px) {
  [dir="rtl"]

  /* CENTER TOP */
  .accesoriesContainer .adapatability-section .accessories-panel .left-panels[data-lvp-popup-align="left"] .hotspot-container.f-x-center.f-y-top .hotspot-popup {
      right: -8rem !important;
  }
  .accesoriesContainer .adapatability-section .accessories-panel .right-panels[data-lvp-popup-align="right"] .hotspot-container.f-x-center.f-y-top .hotspot-popup {
      right: -8rem !important;
  }
  .accesoriesContainer .adapatability-section .accessories-panel .right-panels[data-lvp-popup-align="left"] .hotspot-container.f-x-center.f-y-top .hotspot-popup {
      right: -8rem !important;
  }

  /* CENTER MIDDLE */
  .accesoriesContainer .adapatability-section .accessories-panel .right-panels[data-lvp-popup-align="right"] .hotspot-container.f-x-center.f-y-middle .hotspot-popup {
      right: -8rem !important;
  }
  .accesoriesContainer .adapatability-section .accessories-panel .right-panels[data-lvp-popup-align="left"] .hotspot-container.f-x-center.f-y-middle .hotspot-popup {
      left: -8rem !important;
  }

  /* CENTER BOTTOM */
  .accesoriesContainer .adapatability-section .accessories-panel .right-panels[data-lvp-popup-align="right"] .hotspot-container.f-x-center.f-y-bottom .hotspot-popup {
      right: -8rem !important;
  }
  .accesoriesContainer .adapatability-section .accessories-panel .right-panels[data-lvp-popup-align="left"] .hotspot-container.f-x-center.f-y-bottom .hotspot-popup {
      left: -8rem !important;
  }
}

@media only screen and (min-width: 540px) and (max-width: 767px) {
  [dir="rtl"]

  /* BOTTOM TOP */
  .accesoriesContainer .adapatability-section .accessories-panel .left-panels[data-lvp-popup-align="right"] .hotspot-container.f-x-bottom.f-y-top .hotspot-popup {
      right: 1rem !important;
  }
  .accesoriesContainer .adapatability-section .accessories-panel .left-panels[data-lvp-popup-align="left"] .hotspot-container.f-x-bottom.f-y-top .hotspot-popup {
      right: 1rem !important;
  }
  .accesoriesContainer .adapatability-section .accessories-panel .right-panels[data-lvp-popup-align="right"] .hotspot-container.f-x-bottom.f-y-top .hotspot-popup {
      right: 1rem !important;
  }
  /* BOTTTOM MIDDLE */
  .accesoriesContainer .adapatability-section .accessories-panel .left-panels[data-lvp-popup-align="right"] .hotspot-container.f-x-bottom.f-y-middle .hotspot-popup {
      left: -20rem !important;
  }
  .accesoriesContainer .adapatability-section .accessories-panel .left-panels[data-lvp-popup-align="left"] .hotspot-container.f-x-bottom.f-y-middle .hotspot-popup {
      left: -20rem !important;
  }
  .accesoriesContainer .adapatability-section .accessories-panel .right-panels[data-lvp-popup-align="right"] .hotspot-container.f-x-bottom.f-y-middle .hotspot-popup {
      left: -20rem !important;
  }
  /* BOTTTOM BOTTOM */
  .accesoriesContainer .adapatability-section .accessories-panel .left-panels[data-lvp-popup-align="right"] .hotspot-container.f-x-bottom.f-y-bottom .hotspot-popup {
      right: 1rem !important;
  }
  .accesoriesContainer .adapatability-section .accessories-panel .left-panels[data-lvp-popup-align="left"] .hotspot-container.f-x-bottom.f-y-bottom .hotspot-popup {
      right: 1rem !important;
  }
  .accesoriesContainer .adapatability-section .accessories-panel .right-panels[data-lvp-popup-align="right"] .hotspot-container.f-x-bottom.f-y-bottom .hotspot-popup {
      right: 1rem !important;
  }
}

@media only screen and (min-width: 768px) {
  [dir="rtl"]

  /* LEFT TOP */
  .accesoriesContainer .adapatability-section .accessories-panel .right-panels[data-lvp-popup-align="right"] .hotspot-container.f-x-left.f-y-top .hotspot-popup {
      right: -17rem !important;
  }

  .accesoriesContainer .adapatability-section .accessories-panel .right-panels[data-lvp-popup-align="left"] .hotspot-container.f-x-left.f-y-top .hotspot-popup {
      right: -17rem !important;
  }

  /* LEFT MIDDLE */
  .accesoriesContainer .adapatability-section .accessories-panel .right-panels[data-lvp-popup-align="right"] .hotspot-container.f-x-left.f-y-middle .hotspot-popup {
      right: 1rem !important;
  }

  /* LEFT BOTTOM */
  .accesoriesContainer .adapatability-section .accessories-panel .left-panels[data-lvp-popup-align="right"] .hotspot-container.f-x-left.f-y-bottom .hotspot-popup {
      right: -17rem !important;
  }

  .accesoriesContainer .adapatability-section .accessories-panel .left-panels[data-lvp-popup-align="left"] .hotspot-container.f-x-left.f-y-bottom .hotspot-popup {
      right: -17rem !important;
  }

  .accesoriesContainer .adapatability-section .accessories-panel .right-panels[data-lvp-popup-align="right"] .hotspot-container.f-x-left.f-y-bottom .hotspot-popup {
      right: -17rem !important;
  }
}

@media only screen and (min-width: 768px) {
  [dir="rtl"]

  /* CENTER TOP */
  .accesoriesContainer .adapatability-section .accessories-panel .left-panels[data-lvp-popup-align="right"] .hotspot-container.f-x-center.f-y-top .hotspot-popup {
      right: -17rem !important;
  }

  .accesoriesContainer .adapatability-section .accessories-panel .left-panels[data-lvp-popup-align="left"] .hotspot-container.f-x-center.f-y-top .hotspot-popup {
      right: -17rem !important;
  }

  .accesoriesContainer .adapatability-section .accessories-panel .right-panels[data-lvp-popup-align="right"] .hotspot-container.f-x-center.f-y-top .hotspot-popup {
      right: -17rem !important;
  }

  .accesoriesContainer .adapatability-section .accessories-panel .right-panels[data-lvp-popup-align="left"] .hotspot-container.f-x-center.f-y-top .hotspot-popup {
      right: -17rem !important;
  }

  /* CENTER MIDDLE */
  .accesoriesContainer .adapatability-section .accessories-panel .left-panels[data-lvp-popup-align="right"] .hotspot-container.f-x-center.f-y-middle .hotspot-popup {
      right: -8rem !important;
  }

  .accesoriesContainer .adapatability-section .accessories-panel .left-panels[data-lvp-popup-align="left"] .hotspot-container.f-x-center.f-y-middle .hotspot-popup {
      right: -8rem !important;
  }

  .accesoriesContainer .adapatability-section .accessories-panel .right-panels[data-lvp-popup-align="right"] .hotspot-container.f-x-center.f-y-middle .hotspot-popup {
      right: -8rem !important;
  }

  .accesoriesContainer .adapatability-section .accessories-panel .right-panels[data-lvp-popup-align="left"] .hotspot-container.f-x-center.f-y-middle .hotspot-popup {
      right: -10rem !important;
  }

  /* CENTER BOTTOM */
  .accesoriesContainer .adapatability-section .accessories-panel .left-panels[data-lvp-popup-align="right"] .hotspot-container.f-x-center.f-y-bottom .hotspot-popup {
      right: -17rem !important;
  }

  .accesoriesContainer .adapatability-section .accessories-panel .left-panels[data-lvp-popup-align="left"] .hotspot-container.f-x-center.f-y-bottom .hotspot-popup {
      right: -17rem !important;
  }

  .accesoriesContainer .adapatability-section .accessories-panel .right-panels[data-lvp-popup-align="right"] .hotspot-container.f-x-center.f-y-bottom .hotspot-popup {
      right: -17rem !important;
  }

  .accesoriesContainer .adapatability-section .accessories-panel .right-panels[data-lvp-popup-align="left"] .hotspot-container.f-x-center.f-y-bottom .hotspot-popup {
      right: -17rem !important;
  }
}

@media only screen and (min-width: 768px) {
  [dir="rtl"]

  /* RIGHT TOP */
  .accesoriesContainer .adapatability-section .accessories-panel .left-panels[data-lvp-popup-align="right"] .hotspot-container.f-x-bottom.f-y-top .hotspot-popup {
      right: 1rem !important;
  }

  .accesoriesContainer .adapatability-section .accessories-panel .left-panels[data-lvp-popup-align="left"] .hotspot-container.f-x-bottom.f-y-top .hotspot-popup {
      right: 1rem !important;
  }

  .accesoriesContainer .adapatability-section .accessories-panel .right-panels[data-lvp-popup-align="right"] .hotspot-container.f-x-bottom.f-y-top .hotspot-popup {
      right: 1rem !important;
  }

  /* RIGHT MIDDLE */

  .accesoriesContainer .adapatability-section .accessories-panel .right-panels[data-lvp-popup-align="right"] .hotspot-container.f-x-bottom.f-y-middle .hotspot-popup {
      right: 1rem !important;
  }

  /* RIGHT BOTTOM */
  .accesoriesContainer .adapatability-section .accessories-panel .left-panels[data-lvp-popup-align="right"] .hotspot-container.f-x-bottom.f-y-bottom .hotspot-popup {
      right: 1rem !important;
  }

  .accesoriesContainer .adapatability-section .accessories-panel .left-panels[data-lvp-popup-align="left"] .hotspot-container.f-x-bottom.f-y-bottom .hotspot-popup {
      right: 1rem !important;
  }

  .accesoriesContainer .adapatability-section .accessories-panel .right-panels[data-lvp-popup-align="right"] .hotspot-container.f-x-bottom.f-y-bottom .hotspot-popup {
      right: 1rem !important;
  }
}
/* Grid styles */
[dir="rtl"] [data-grid*="col-"] {
    float: right !important;
    min-height: 1px;
}

[data-grid~="container"],[data-grid*="col-"] {
    box-sizing: border-box;
    zoom:1;
}

[data-grid~="container"]::before,[data-grid~="container"]::after,[data-grid*="col-"]::before,[data-grid*="col-"]::after {
    content: " ";
    display: table;
}

[data-grid~="container"]::after,[data-grid*="col-"]::after {
    clear: both;
}

[data-grid*="col-"] {
    float: left;
    min-height: 1px;
}

[data-grid~="col-1"] {
    width: 8.33333%;
}

[data-grid~="col-2"] {
    width: 16.66667%;
}

[data-grid~="col-3"] {
    width: 25%;
}

[data-grid~="col-4"] {
    width: 33.33333%;
}

[data-grid~="col-5"] {
    width: 41.66667%;
}

[data-grid~="col-6"] {
    width: 50%;
}

[data-grid~="col-7"] {
    width: 58.33333%;
}

[data-grid~="col-8"] {
    width: 66.66667%;
}

[data-grid~="col-9"] {
    width: 75%;
}

[data-grid~="col-10"] {
    width: 83.33333%;
}

[data-grid~="col-11"] {
    width: 91.66667%;
}

[data-grid~="col-12"] {
    width: 100%;
}

[data-grid~="col-1-5"] {
    width: 20%;
}

[data-grid~="col-1-8"] {
    width: 12.5%;
}

@media screen and (max-width: 1778px) {
    [data-grid~="stack-5"] > [data-grid] {
        float: none;
        width: 100%;
        display: block;
        padding: inherit 0;
    }
}

@media screen and (max-width: 1399px) {
    [data-grid~="stack-4"] > [data-grid] {
        float: none;
        width: 100%;
        display: block;
        padding: inherit 0;
    }
}

@media screen and (max-width: 1083px) {
    [data-grid~="stack-3"] > [data-grid] {
        float: none;
        width: 100%;
        display: block;
        padding: inherit 0;
    }
}

@media screen and (max-width: 767px) {
    [data-grid~="stack-2"] > [data-grid] {
        float: none;
        width: 100%;
        display: block;
        padding: inherit 0;
    }
}

@media screen and (max-width: 539px) {
    [data-grid*="col-"] {
        float: none;
        width: 100%;
        display: block;
        padding: inherit 0;
    }
}

.accessories-panel .c-heading-1 {
    font-size: 62px;
  }
  .accessories-panel .c-heading-2 {
    font-size: 46px;
    line-height: 56px;
  }
  .accessories-panel .c-heading-3,
  .accessories-panel .c-subheading-1 {
    font-size: 34px;
    line-height: 40px;
  }
  .accessories-panel .c-heading-4,
  .accessories-panel .c-subheading-2 {
    font-size: 24px;
    line-height: 28px;
  }
  .accessories-panel .c-heading-5,
  .accessories-panel .c-subheading-3,
  .accessories-panel .c-paragraph-1 {
    font-size: 20px;
    line-height: 24px;
  }
  .accessories-panel .c-heading-6,
  .accessories-panel .c-subheading-4,
  .accessories-panel .c-paragraph-2 {
    font-size: 18px;
    line-height: 24px;
  }
  .accessories-panel .c-subheading-5,
  .accessories-panel .c-subheading-6,
  .accessories-panel .c-paragraph-3,
  .accessories-panel .c-paragraph-4 {
    font-size: 15px;
    line-height: 20px;
  }
  .accessories-panel .c-caption-1 {
    font-size: 13px;
    line-height: 16px;
  }
  .accessories-panel .c-caption-2 {
    font-size: 11px;
    line-height: 16px;
  }
  .accessories-panel .c-heading-1 {
    padding: 38px 0 6px;
    font-weight: 600;
    letter-spacing: -0.01em;
  }
  .accessories-panel .c-heading-2 {
    padding: 37px 0 3px;
    font-weight: 600;
    letter-spacing: -0.01em;
  }
  .accessories-panel .c-heading-3 {
    padding: 38px 0 2px;
    font-weight: 600;
  }
  .accessories-panel .c-heading-4 {
    padding: 36px 0 4px;
    font-weight: 600;
  }
  .accessories-panel .c-heading-5 {
    padding: 35px 0 5px;
    font-weight: 600;
  }
  .accessories-panel .c-heading-6 {
    padding: 37px 0 3px;
    font-weight: 600;
  }
  .accessories-panel .c-subheading-1 {
    padding: 12px 0 2px;
    font-weight: 600;
  }
  .accessories-panel .c-subheading-2 {
    padding: 4px 0 8px;
    font-weight: 600;
  }
  .accessories-panel .c-subheading-3 {
    padding: 8px 0 4px;
    font-weight: 600;
  }
  .accessories-panel .c-subheading-4 {
    padding: 9px 0 3px;
    font-weight: 600;
  }
  .accessories-panel .c-subheading-5,
  .accessories-panel .c-subheading-6 {
    padding: 8px 0 0;
    font-weight: 600;
  }
  .accessories-panel .c-paragraph-1 {
    padding: 24px 0 4px;
    font-weight: 200;
  }
  .accessories-panel .c-paragraph-2 {
    padding: 25px 0 3px;
    font-weight: 200;
  }
  .accessories-panel .c-paragraph-3 {
    padding: 24px 0 0;
    font-weight: 400;
  }
  .accessories-panel .c-paragraph-4 {
    padding: 12px 0 0;
    font-weight: 400;
  }
  .accessories-panel .c-caption-1 {
    padding: 3px 0 1px;
    font-weight: 400;
  }
  .accessories-panel .c-caption-2 {
    padding: 4px 0 4px;
    font-weight: 400;
  }
  @media (max-width: 767px) {
    .accessories-panel .c-heading-1 {
      font-size: 46px;
      line-height: 56px;
    }
    .accessories-panel .c-heading-2 {
      font-size: 34px;
      line-height: 40px;
    }
    .accessories-panel .c-heading-3,
    .accessories-panel .c-subheading-1 {
      font-size: 26px;
      line-height: 32px;
    }
    .accessories-panel .c-heading-4,
    .accessories-panel .c-subheading-2 {
      font-size: 20px;
      line-height: 24px;
    }
    .accessories-panel .c-heading-5,
    .accessories-panel .c-subheading-3,
    .accessories-panel .c-paragraph-1 {
      font-size: 18px;
      line-height: 24px;
    }
    .accessories-panel .c-heading-6,
    .accessories-panel .c-subheading-4,
    .accessories-panel .c-paragraph-2 {
      font-size: 16px;
      line-height: 20px;
    }
    .accessories-panel .c-caption-1 {
      font-size: 12px;
      line-height: 16px;
    }
    .accessories-panel .c-caption-2 {
      font-size: 10px;
      line-height: 12px;
    }
    .accessories-panel .c-heading-1 {
      padding: 37px 0 3px;
    }
    .accessories-panel .c-heading-2 {
      padding: 38px 0 2px;
    }
    .accessories-panel .c-heading-5 {
      padding: 37px 0 3px;
    }
    .accessories-panel .c-heading-6 {
      padding: 39px 0 1px;
    }
    .accessories-panel .c-subheading-1 {
      padding: 9px 0 3px;
    }
    .accessories-panel .c-subheading-2 {
      padding: 8px 0 4px;
    }
    .accessories-panel .c-subheading-3 {
      padding: 4px 0 4px;
    }
    .accessories-panel .c-subheading-4 {
      padding: 7px 0 5px;
    }
    .accessories-panel .c-paragraph-2 {
      padding: 27px 0 1px;
    }
    .accessories-panel .c-caption-2 {
      padding: 2px 0 2px;
    }
  }



a.c-call-to-action,
button.c-call-to-action {
  font-size: 15px;
  padding: 10px 20px 6px 22px;
  position: relative;
  border: 2px solid transparent;
  outline: 1px solid transparent;
  outline-offset: -3px;
  max-width: 100%;
  display: inline-block;
  overflow: hidden;
  color: #fff;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  letter-spacing: 0;
  line-height: 1.3;
  white-space: nowrap;
  transition: all 200ms ease-in-out;
  box-shadow: 0 4px 8px 0 transparent;
  background: #0067b8;
}
@media screen and (-ms-high-contrast: active) {
  a.c-call-to-action,
  button.c-call-to-action {
    border-color: window !important;
    outline-color: window;
  }
}
a.c-call-to-action:focus,
button.c-call-to-action:focus {
  border-color: #000;
  outline-color: rgba(255, 255, 255, 0.6);
}
@media screen and (-ms-high-contrast: active) {
  a.c-call-to-action:focus,
  button.c-call-to-action:focus {
    border-color: windowText !important;
  }
}
.theme-light a.c-call-to-action:focus,
.theme-dark .theme-light a.c-call-to-action:focus,
.theme-light button.c-call-to-action:focus,
.theme-dark .theme-light button.c-call-to-action:focus {
  border-color: #000;
  outline-color: rgba(255, 255, 255, 0.3);
}
.theme-dark a.c-call-to-action:focus,
.theme-light .theme-dark a.c-call-to-action:focus,
.theme-dark button.c-call-to-action:focus,
.theme-light .theme-dark button.c-call-to-action:focus {
  border-color: #fff;
  outline-color: rgba(0, 0, 0, 0.9);
}
a.c-call-to-action span,
button.c-call-to-action span {
  max-width: 100%;
  display: inline-block;
  position: relative;
  left: 0;
  text-overflow: clip;
  overflow: hidden;
  transition: all 200ms ease-in-out;
  vertical-align: top;
  line-height: unset !important;
}
a.c-call-to-action:after,
button.c-call-to-action:after {
  transition: all 200ms ease-in-out;
}
a.c-call-to-action.c-glyph.glyph-play:before,
button.c-call-to-action.c-glyph.glyph-play:before {
  line-height: 1;
  position: relative;
  top: 2px;
}
a.c-call-to-action:not(.glyph-play):after,
button.c-call-to-action:not(.glyph-play):after {
  font-size: 11px;
  margin-top: 3px;
  margin-left: 3px;
  display: inline-block;
  position: relative;
  right: 0;
  content: "";
  vertical-align: top;
  line-height: 1.6;
}
a.c-call-to-action:not(.glyph-play):focus:not(.x-hidden-focus) span,
a.c-call-to-action:not(.glyph-play):hover span,
button.c-call-to-action:not(.glyph-play):focus:not(.x-hidden-focus) span,
button.c-call-to-action:not(.glyph-play):hover span {
  left: -4px;
}
a.c-call-to-action:not(.glyph-play):focus:not(.x-hidden-focus):after,
a.c-call-to-action:not(.glyph-play):hover:after,
button.c-call-to-action:not(.glyph-play):focus:not(.x-hidden-focus):after,
button.c-call-to-action:not(.glyph-play):hover:after {
  right: -4px;
}

.accesoriesContainer .adapatability-section .accessories-panel .order-one a.c-call-to-action.c-glyph.f-lightweight:hover::after{
   padding-right: 4px; /* only for version 2.8 - LTR */
}

a.c-call-to-action:focus:not(.x-hidden-focus),
a.c-call-to-action:hover,
button.c-call-to-action:focus:not(.x-hidden-focus),
button.c-call-to-action:hover {
  background: #005da6;
}
a.c-call-to-action:focus:not(.x-hidden-focus) span,
a.c-call-to-action:hover span,
button.c-call-to-action:focus:not(.x-hidden-focus) span,
button.c-call-to-action:hover span {
  box-shadow: 0 3px 0 -1px currentColor;
}
a.c-call-to-action:active,
button.c-call-to-action:active {
  background: #005293;
  -ms-transform: scale(0.98);
  transform: scale(0.98);
}
a.c-call-to-action[aria-disabled="true"],
button.c-call-to-action[aria-disabled="true"] {
  cursor: not-allowed;
  border-color: transparent;
  background: #cce1f1;
  color: rgba(0, 0, 0, 0.2);
  pointer-events: none;
}
a.c-call-to-action[aria-disabled="true"]:focus:not(.x-hidden-focus) span,
a.c-call-to-action[aria-disabled="true"]:hover span,
button.c-call-to-action[aria-disabled="true"]:focus:not(.x-hidden-focus) span,
button.c-call-to-action[aria-disabled="true"]:hover span {
  left: 0;
}
a.c-call-to-action[aria-disabled="true"]:focus:not(.x-hidden-focus):after,
a.c-call-to-action[aria-disabled="true"]:hover:after,
button.c-call-to-action[aria-disabled="true"]:focus:not(.x-hidden-focus):after,
button.c-call-to-action[aria-disabled="true"]:hover:after {
  right: 0;
}
a.c-call-to-action.f-image,
button.c-call-to-action.f-image {
  height: 47px;
  background: transparent;
  padding: 0;
}
a.c-call-to-action.f-image img,
button.c-call-to-action.f-image img {
  height: 100%;
  width: auto;
}
a.c-call-to-action.f-image:focus,
button.c-call-to-action.f-image:focus {
  border-color: #0067ab;
}
a.c-call-to-action.f-image:hover,
button.c-call-to-action.f-image:hover {
  background: transparent;
}
a.c-call-to-action.f-image:hover img,
button.c-call-to-action.f-image:hover img {
  opacity: 0.7;
}
a.c-call-to-action.f-image:after,
button.c-call-to-action.f-image:after {
  content: none;
}
.theme-light a.c-call-to-action,
.theme-dark .theme-light a.c-call-to-action,
.theme-light button.c-call-to-action,
.theme-dark .theme-light button.c-call-to-action {
  color: #fff;
  background: #000;
}
.theme-light a.c-call-to-action:focus:not(.x-hidden-focus) span,
.theme-dark .theme-light a.c-call-to-action:focus:not(.x-hidden-focus) span,
.theme-light button.c-call-to-action:focus:not(.x-hidden-focus) span,
.theme-dark
  .theme-light
  button.c-call-to-action:focus:not(.x-hidden-focus)
  span {
  box-shadow: 0 3px 0 -1px currentColor;
}
.theme-light a.c-call-to-action:focus:not(.x-hidden-focus),
.theme-light a.c-call-to-action:hover,
.theme-dark .theme-light a.c-call-to-action:focus:not(.x-hidden-focus),
.theme-dark .theme-light a.c-call-to-action:hover,
.theme-light button.c-call-to-action:focus:not(.x-hidden-focus),
.theme-light button.c-call-to-action:hover,
.theme-dark .theme-light button.c-call-to-action:focus:not(.x-hidden-focus),
.theme-dark .theme-light button.c-call-to-action:hover {
  background: #1a1a1a;
}
.theme-light a.c-call-to-action:active,
.theme-dark .theme-light a.c-call-to-action:active,
.theme-light button.c-call-to-action:active,
.theme-dark .theme-light button.c-call-to-action:active {
  background: #333;
}
.theme-light a.c-call-to-action[aria-disabled="true"],
.theme-dark .theme-light a.c-call-to-action[aria-disabled="true"],
.theme-light button.c-call-to-action[aria-disabled="true"],
.theme-dark .theme-light button.c-call-to-action[aria-disabled="true"] {
  background: #ccc;
  border-color: transparent;
  color: rgba(0, 0, 0, 0.2);
}
.theme-light a.c-call-to-action.f-image,
.theme-dark .theme-light a.c-call-to-action.f-image,
.theme-light button.c-call-to-action.f-image,
.theme-dark .theme-light button.c-call-to-action.f-image {
  background: transparent;
}
.theme-light a.c-call-to-action.f-image:hover,
.theme-dark .theme-light a.c-call-to-action.f-image:hover,
.theme-light button.c-call-to-action.f-image:hover,
.theme-dark .theme-light button.c-call-to-action.f-image:hover {
  background: transparent;
}
.theme-dark a.c-call-to-action,
.theme-light .theme-dark a.c-call-to-action,
.theme-dark button.c-call-to-action,
.theme-light .theme-dark button.c-call-to-action {
  color: #000;
  background: #fff;
}
.theme-dark a.c-call-to-action:focus:not(.x-hidden-focus) span,
.theme-light .theme-dark a.c-call-to-action:focus:not(.x-hidden-focus) span,
.theme-dark button.c-call-to-action:focus:not(.x-hidden-focus) span,
.theme-light
  .theme-dark
  button.c-call-to-action:focus:not(.x-hidden-focus)
  span {
  box-shadow: 0 3px 0 -1px currentColor;
}
.theme-dark a.c-call-to-action:focus:not(.x-hidden-focus),
.theme-dark a.c-call-to-action:hover,
.theme-light .theme-dark a.c-call-to-action:focus:not(.x-hidden-focus),
.theme-light .theme-dark a.c-call-to-action:hover,
.theme-dark button.c-call-to-action:focus:not(.x-hidden-focus),
.theme-dark button.c-call-to-action:hover,
.theme-light .theme-dark button.c-call-to-action:focus:not(.x-hidden-focus),
.theme-light .theme-dark button.c-call-to-action:hover {
  background: #e6e6e6;
}
.theme-dark a.c-call-to-action:active,
.theme-light .theme-dark a.c-call-to-action:active,
.theme-dark button.c-call-to-action:active,
.theme-light .theme-dark button.c-call-to-action:active {
  background: #ccc;
}
.theme-dark a.c-call-to-action[aria-disabled="true"],
.theme-light .theme-dark a.c-call-to-action[aria-disabled="true"],
.theme-dark button.c-call-to-action[aria-disabled="true"],
.theme-light .theme-dark button.c-call-to-action[aria-disabled="true"] {
  background: #4d4d4d;
  border-color: transparent;
  color: rgba(255, 255, 255, 0.2);
}
.theme-dark a.c-call-to-action.f-image,
.theme-light .theme-dark a.c-call-to-action.f-image,
.theme-dark button.c-call-to-action.f-image,
.theme-light .theme-dark button.c-call-to-action.f-image {
  background: transparent;
}
.theme-dark a.c-call-to-action.f-image:hover,
.theme-light .theme-dark a.c-call-to-action.f-image:hover,
.theme-dark button.c-call-to-action.f-image:hover,
.theme-light .theme-dark button.c-call-to-action.f-image:hover {
  background: transparent;
}
a.c-call-to-action.f-secondary,
button.c-call-to-action.f-secondary {
  color: #000;
  background: #ccc;
}
a.c-call-to-action.f-secondary:focus:not(.x-hidden-focus) span,
button.c-call-to-action.f-secondary:focus:not(.x-hidden-focus) span {
  box-shadow: 0 3px 0 -1px currentColor;
}
a.c-call-to-action.f-secondary:focus:not(.x-hidden-focus),
a.c-call-to-action.f-secondary:hover,
button.c-call-to-action.f-secondary:focus:not(.x-hidden-focus),
button.c-call-to-action.f-secondary:hover {
  background: #b3b3b3;
}
a.c-call-to-action.f-secondary:active,
button.c-call-to-action.f-secondary:active {
  background: #999;
}
a.c-call-to-action.f-secondary[aria-disabled="true"],
button.c-call-to-action.f-secondary[aria-disabled="true"] {
  background: #ccc;
  border-color: transparent;
  color: rgba(0, 0, 0, 0.2);
}
.theme-light a.c-call-to-action.f-secondary,
.theme-dark .theme-light a.c-call-to-action.f-secondary,
.theme-light button.c-call-to-action.f-secondary,
.theme-dark .theme-light button.c-call-to-action.f-secondary {
  color: #000;
  background: rgba(255, 255, 255, 0);
  border-color: #000;
}
.theme-light a.c-call-to-action.f-secondary:focus:not(.x-hidden-focus) span,
.theme-dark
  .theme-light
  a.c-call-to-action.f-secondary:focus:not(.x-hidden-focus)
  span,
.theme-light
  button.c-call-to-action.f-secondary:focus:not(.x-hidden-focus)
  span,
.theme-dark
  .theme-light
  button.c-call-to-action.f-secondary:focus:not(.x-hidden-focus)
  span {
  box-shadow: 0 3px 0 -1px currentColor;
}
.theme-light a.c-call-to-action.f-secondary:focus:not(.x-hidden-focus),
.theme-light a.c-call-to-action.f-secondary:hover,
.theme-dark
  .theme-light
  a.c-call-to-action.f-secondary:focus:not(.x-hidden-focus),
.theme-dark .theme-light a.c-call-to-action.f-secondary:hover,
.theme-light button.c-call-to-action.f-secondary:focus:not(.x-hidden-focus),
.theme-light button.c-call-to-action.f-secondary:hover,
.theme-dark
  .theme-light
  button.c-call-to-action.f-secondary:focus:not(.x-hidden-focus),
.theme-dark .theme-light button.c-call-to-action.f-secondary:hover {
  background: #ccc;
}
.theme-light a.c-call-to-action.f-secondary:active,
.theme-dark .theme-light a.c-call-to-action.f-secondary:active,
.theme-light button.c-call-to-action.f-secondary:active,
.theme-dark .theme-light button.c-call-to-action.f-secondary:active {
  background: #b3b3b3;
}
.theme-light a.c-call-to-action.f-secondary[aria-disabled="true"],
.theme-dark .theme-light a.c-call-to-action.f-secondary[aria-disabled="true"],
.theme-light button.c-call-to-action.f-secondary[aria-disabled="true"],
.theme-dark
  .theme-light
  button.c-call-to-action.f-secondary[aria-disabled="true"] {
  background: #ccc;
  border-color: rgba(0, 0, 0, 0.2);
  color: rgba(0, 0, 0, 0.2);
}
.theme-dark a.c-call-to-action.f-secondary,
.theme-light .theme-dark a.c-call-to-action.f-secondary,
.theme-dark button.c-call-to-action.f-secondary,
.theme-light .theme-dark button.c-call-to-action.f-secondary {
  background: rgba(255, 255, 255, 0);
  color: #fff;
  border-color: #fff;
}
.theme-dark a.c-call-to-action.f-secondary:focus:not(.x-hidden-focus) span,
.theme-light
  .theme-dark
  a.c-call-to-action.f-secondary:focus:not(.x-hidden-focus)
  span,
.theme-dark button.c-call-to-action.f-secondary:focus:not(.x-hidden-focus) span,
.theme-light
  .theme-dark
  button.c-call-to-action.f-secondary:focus:not(.x-hidden-focus)
  span {
  box-shadow: 0 3px 0 -1px currentColor;
}
.theme-dark a.c-call-to-action.f-secondary:focus:not(.x-hidden-focus),
.theme-dark a.c-call-to-action.f-secondary:hover,
.theme-light
  .theme-dark
  a.c-call-to-action.f-secondary:focus:not(.x-hidden-focus),
.theme-light .theme-dark a.c-call-to-action.f-secondary:hover,
.theme-dark button.c-call-to-action.f-secondary:focus:not(.x-hidden-focus),
.theme-dark button.c-call-to-action.f-secondary:hover,
.theme-light
  .theme-dark
  button.c-call-to-action.f-secondary:focus:not(.x-hidden-focus),
.theme-light .theme-dark button.c-call-to-action.f-secondary:hover {
  background: #1a1a1a;
}
.theme-dark a.c-call-to-action.f-secondary:active,
.theme-light .theme-dark a.c-call-to-action.f-secondary:active,
.theme-dark button.c-call-to-action.f-secondary:active,
.theme-light .theme-dark button.c-call-to-action.f-secondary:active {
  background: #000;
}
.theme-dark a.c-call-to-action.f-secondary[aria-disabled="true"],
.theme-light .theme-dark a.c-call-to-action.f-secondary[aria-disabled="true"],
.theme-dark button.c-call-to-action.f-secondary[aria-disabled="true"],
.theme-light
  .theme-dark
  button.c-call-to-action.f-secondary[aria-disabled="true"] {
  background: #4d4d4d;
  border-color: rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 0.2);
}
a.c-call-to-action.f-lightweight,
button.c-call-to-action.f-lightweight {
  padding: 10px 3px 7px 0;
  position: relative;
  border: 2px solid transparent;
  outline: 1px solid transparent;
  outline-offset: -3px;
  margin-left: 0;
  color: #0067b8;
  background: transparent;
  transition: none;
  padding-right: 2px;
}
@media screen and (-ms-high-contrast: active) {
  a.c-call-to-action.f-lightweight,
  button.c-call-to-action.f-lightweight {
    border-color: window !important;
    outline-color: window;
  }
}
a.c-call-to-action.f-lightweight:focus,
button.c-call-to-action.f-lightweight:focus {
  border-color: #000;
  outline-color: rgba(255, 255, 255, 0.6);
}
@media screen and (-ms-high-contrast: active) {
  a.c-call-to-action.f-lightweight:focus,
  button.c-call-to-action.f-lightweight:focus {
    border-color: windowText !important;
  }
}
.theme-light a.c-call-to-action.f-lightweight:focus,
.theme-dark .theme-light a.c-call-to-action.f-lightweight:focus,
.theme-light button.c-call-to-action.f-lightweight:focus,
.theme-dark .theme-light button.c-call-to-action.f-lightweight:focus {
  border-color: #000;
  outline-color: rgba(255, 255, 255, 0.3);
}
.theme-dark a.c-call-to-action.f-lightweight:focus,
.theme-light .theme-dark a.c-call-to-action.f-lightweight:focus,
.theme-dark button.c-call-to-action.f-lightweight:focus,
.theme-light .theme-dark button.c-call-to-action.f-lightweight:focus {
  border-color: #fff;
  outline-color: rgba(0, 0, 0, 0.9);
}
a.c-call-to-action.f-lightweight:focus:not(.x-hidden-focus),
a.c-call-to-action.f-lightweight:hover,
a.c-call-to-action.f-lightweight:active,
button.c-call-to-action.f-lightweight:focus:not(.x-hidden-focus),
button.c-call-to-action.f-lightweight:hover,
button.c-call-to-action.f-lightweight:active {
  background: transparent;
  box-shadow: none !important;
}
a.c-call-to-action.f-lightweight:focus:not(.x-hidden-focus) span,
a.c-call-to-action.f-lightweight:hover span,
a.c-call-to-action.f-lightweight:active span,
button.c-call-to-action.f-lightweight:focus:not(.x-hidden-focus) span,
button.c-call-to-action.f-lightweight:hover span,
button.c-call-to-action.f-lightweight:active span {
  box-shadow: 0 2px currentColor;
  left: 0 !important;
}
a.c-call-to-action.f-lightweight:focus:not(.x-hidden-focus),
button.c-call-to-action.f-lightweight:focus:not(.x-hidden-focus) {
  color: #005da6;
  background: rgba(0, 103, 184, 0.1);
}
a.c-call-to-action.f-lightweight:focus:not(.x-hidden-focus) span,
button.c-call-to-action.f-lightweight:focus:not(.x-hidden-focus) span {
  box-shadow: 0 2px currentColor;
  text-decoration: none;
}
a.c-call-to-action.f-lightweight:hover,
button.c-call-to-action.f-lightweight:hover {
  color: #005da6;
}
a.c-call-to-action.f-lightweight:active,
button.c-call-to-action.f-lightweight:active {
  background: none;
  color: #005293;
  text-decoration: none;
  -ms-transform: none;
  transform: none;
}
a.c-call-to-action.f-lightweight[aria-disabled="true"],
button.c-call-to-action.f-lightweight[aria-disabled="true"] {
  cursor: not-allowed;
  color: #cce1f1;
}
a.c-call-to-action.f-lightweight.f-image,
button.c-call-to-action.f-lightweight.f-image {
  padding: 0;
}
@media screen and (-ms-high-contrast: active) {
  a.c-call-to-action.f-lightweight:focus:not(.x-hidden-focus),
  button.c-call-to-action.f-lightweight:focus:not(.x-hidden-focus) {
    border-color: window !important;
    outline: 2px solid windowText !important;
  }
}
.theme-light a.c-call-to-action.f-lightweight,
.theme-dark .theme-light a.c-call-to-action.f-lightweight,
.theme-light button.c-call-to-action.f-lightweight,
.theme-dark .theme-light button.c-call-to-action.f-lightweight {
  color: #000;
  border-color: transparent;
  background: transparent;
}
.theme-light a.c-call-to-action.f-lightweight:focus:not(.x-hidden-focus),
.theme-dark
  .theme-light
  a.c-call-to-action.f-lightweight:focus:not(.x-hidden-focus),
.theme-light button.c-call-to-action.f-lightweight:focus:not(.x-hidden-focus),
.theme-dark
  .theme-light
  button.c-call-to-action.f-lightweight:focus:not(.x-hidden-focus) {
  background: rgba(0, 0, 0, 0.1);
}
.theme-light a.c-call-to-action.f-lightweight:focus:not(.x-hidden-focus) span,
.theme-dark
  .theme-light
  a.c-call-to-action.f-lightweight:focus:not(.x-hidden-focus)
  span,
.theme-light
  button.c-call-to-action.f-lightweight:focus:not(.x-hidden-focus)
  span,
.theme-dark
  .theme-light
  button.c-call-to-action.f-lightweight:focus:not(.x-hidden-focus)
  span {
  box-shadow: 0 2px currentColor;
}
.theme-light a.c-call-to-action.f-lightweight:focus:not(.x-hidden-focus),
.theme-light a.c-call-to-action.f-lightweight:hover,
.theme-dark
  .theme-light
  a.c-call-to-action.f-lightweight:focus:not(.x-hidden-focus),
.theme-dark .theme-light a.c-call-to-action.f-lightweight:hover,
.theme-light button.c-call-to-action.f-lightweight:focus:not(.x-hidden-focus),
.theme-light button.c-call-to-action.f-lightweight:hover,
.theme-dark
  .theme-light
  button.c-call-to-action.f-lightweight:focus:not(.x-hidden-focus),
.theme-dark .theme-light button.c-call-to-action.f-lightweight:hover {
  color: rgba(0, 0, 0, 0.9);
}
.theme-light a.c-call-to-action.f-lightweight:hover,
.theme-dark .theme-light a.c-call-to-action.f-lightweight:hover,
.theme-light button.c-call-to-action.f-lightweight:hover,
.theme-dark .theme-light button.c-call-to-action.f-lightweight:hover {
  background: transparent;
}
.theme-light a.c-call-to-action.f-lightweight:active,
.theme-dark .theme-light a.c-call-to-action.f-lightweight:active,
.theme-light button.c-call-to-action.f-lightweight:active,
.theme-dark .theme-light button.c-call-to-action.f-lightweight:active {
  color: rgba(0, 0, 0, 0.8);
}
.theme-light a.c-call-to-action.f-lightweight[aria-disabled="true"],
.theme-dark .theme-light a.c-call-to-action.f-lightweight[aria-disabled="true"],
.theme-light button.c-call-to-action.f-lightweight[aria-disabled="true"],
.theme-dark
  .theme-light
  button.c-call-to-action.f-lightweight[aria-disabled="true"] {
  color: #999;
  background: transparent;
}
.theme-dark a.c-call-to-action.f-lightweight,
.theme-light .theme-dark a.c-call-to-action.f-lightweight,
.theme-dark button.c-call-to-action.f-lightweight,
.theme-light .theme-dark button.c-call-to-action.f-lightweight {
  color: #fff;
  background: transparent;
  border-color: transparent;
}
.theme-dark a.c-call-to-action.f-lightweight:focus:not(.x-hidden-focus),
.theme-light
  .theme-dark
  a.c-call-to-action.f-lightweight:focus:not(.x-hidden-focus),
.theme-dark button.c-call-to-action.f-lightweight:focus:not(.x-hidden-focus),
.theme-light
  .theme-dark
  button.c-call-to-action.f-lightweight:focus:not(.x-hidden-focus) {
  background: rgba(255, 255, 255, 0.1);
}
.theme-dark a.c-call-to-action.f-lightweight:focus:not(.x-hidden-focus) span,
.theme-light
  .theme-dark
  a.c-call-to-action.f-lightweight:focus:not(.x-hidden-focus)
  span,
.theme-dark
  button.c-call-to-action.f-lightweight:focus:not(.x-hidden-focus)
  span,
.theme-light
  .theme-dark
  button.c-call-to-action.f-lightweight:focus:not(.x-hidden-focus)
  span {
  box-shadow: 0 2px currentColor;
}
.theme-dark a.c-call-to-action.f-lightweight:focus:not(.x-hidden-focus),
.theme-dark a.c-call-to-action.f-lightweight:hover,
.theme-light
  .theme-dark
  a.c-call-to-action.f-lightweight:focus:not(.x-hidden-focus),
.theme-light .theme-dark a.c-call-to-action.f-lightweight:hover,
.theme-dark button.c-call-to-action.f-lightweight:focus:not(.x-hidden-focus),
.theme-dark button.c-call-to-action.f-lightweight:hover,
.theme-light
  .theme-dark
  button.c-call-to-action.f-lightweight:focus:not(.x-hidden-focus),
.theme-light .theme-dark button.c-call-to-action.f-lightweight:hover {
  color: #e6e6e6;
}
.theme-dark a.c-call-to-action.f-lightweight:hover,
.theme-light .theme-dark a.c-call-to-action.f-lightweight:hover,
.theme-dark button.c-call-to-action.f-lightweight:hover,
.theme-light .theme-dark button.c-call-to-action.f-lightweight:hover {
  background: transparent;
}
.theme-dark a.c-call-to-action.f-lightweight:active,
.theme-light .theme-dark a.c-call-to-action.f-lightweight:active,
.theme-dark button.c-call-to-action.f-lightweight:active,
.theme-light .theme-dark button.c-call-to-action.f-lightweight:active {
  color: #ccc;
}
.theme-dark a.c-call-to-action.f-lightweight[aria-disabled="true"],
.theme-light .theme-dark a.c-call-to-action.f-lightweight[aria-disabled="true"],
.theme-dark button.c-call-to-action.f-lightweight[aria-disabled="true"],
.theme-light
  .theme-dark
  button.c-call-to-action.f-lightweight[aria-disabled="true"] {
  background: transparent;
  color: #666;
}
a.c-call-to-action.f-lightweight:hover span,
button.c-call-to-action.f-lightweight:hover span {
  left: 0;
}
@media (-ms-high-contrast: active) {
  .-c-call-to-action:focus:not(.x-hidden-focus) span,
  .-c-call-to-action:hover span {
    left: 0;
  }
  .-c-call-to-action:focus:not(.x-hidden-focus):after,
  .-c-call-to-action:hover:after {
    right: 0;
  }
  a.c-call-to-action:hover > span,
  a.c-call-to-action.f-lightweight:hover > span {
    text-decoration: underline !important;
    color: buttontext !important;
    border-color: buttonText !important;
  }
  a.c-call-to-action:hover:after,
  a.c-call-to-action.f-lightweight:hover:after {
    color: buttonText !important;
  }
  a.c-call-to-action:focus:not(.x-hidden-focus),
  a.c-call-to-action.f-lightweight:focus:not(.x-hidden-focus) {
    border-color: buttonText !important;
    outline-color: buttonText !important;
  }
  a.c-call-to-action[aria-disabled="true"],
  a.c-call-to-action:disabled,
  a.c-call-to-action.f-lightweight[aria-disabled="true"],
  a.c-call-to-action.f-lightweight:disabled {
    color: grayText !important;
    border-color: grayText !important;
    outline-color: grayText !important;
  }
  a.c-call-to-action[aria-disabled="true"]:focus:not(.x-hidden-focus),
  a.c-call-to-action:disabled:focus:not(.x-hidden-focus),
  a.c-call-to-action.f-lightweight[aria-disabled="true"]:focus:not(.x-hidden-focus),
  a.c-call-to-action.f-lightweight:disabled:focus:not(.x-hidden-focus) {
    outline: none !important;
    outline-color: transparent !important;
  }
  a.c-call-to-action[aria-disabled="true"] > span,
  a.c-call-to-action:disabled > span,
  a.c-call-to-action.f-lightweight[aria-disabled="true"] > span,
  a.c-call-to-action.f-lightweight:disabled > span {
    text-decoration: none !important;
  }
  button.c-call-to-action,
  button.c-call-to-action.f-lightweight {
    border-color: windowtext !important;
  }
  button.c-call-to-action:focus:not(.x-hidden-focus),
  button.c-call-to-action.f-lightweight:focus:not(.x-hidden-focus) {
    border-color: buttonText !important;
    outline-color: buttonText !important;
    background: buttonFace !important;
    color: buttonText !important;
  }
  button.c-call-to-action:focus:not(.x-hidden-focus):before,
  button.c-call-to-action.f-lightweight:focus:not(.x-hidden-focus):before {
    border: 2px solid buttonText !important;
    top: 1px;
    bottom: 1px;
    left: 1px;
    right: 1px;
  }
  button.c-call-to-action:hover,
  button.c-call-to-action:active,
  button.c-call-to-action.f-lightweight:hover,
  button.c-call-to-action.f-lightweight:active {
    color: highlight !important;
    border-color: highlight !important;
  }
  button.c-call-to-action[aria-disabled="true"],
  button.c-call-to-action:disabled,
  button.c-call-to-action.f-lightweight[aria-disabled="true"],
  button.c-call-to-action.f-lightweight:disabled {
    color: grayText !important;
    border-color: grayText !important;
    text-decoration: none;
    outline: none !important;
  }
}

/* Adding this to override the hotspot css from MWF and match with ppe */

.hotspot {
  border-radius: 50%;
  width: 2.25rem;
  height: 2.25rem;
  padding: 0;
  transform: translate(-50%,-50%);
  position: absolute;
  top: unset;
  left: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  vertical-align: unset;
  box-shadow: 0 .125rem .25rem 0rgba(0,0,0,.13),0 0 .0625rem 0rgba(0,0,0,.11);
  border: 0 solid #000;
  outline-color: unset;
  outline-offset: unset;
}

.hotspot:focus::after {
  border-style: unset;
  border-width: unset;
  border-color: unset;
  content: unset;
  display: unset;
  position: unset;
  box-sizing: unset;
  border-radius: unset;
  width: unset;
  height: unset;
  top: unset;
  left: unset;
}

.hotspot::before{
  content: unset;
}

.accesoriesContainer div.hotspot-container .hotspot:after {
  content: "";
}

.accesoriesContainer
.adapatability-section
.accessories-panel
.left-panels
picture
+ div.hotspot-container
.hotspot, .accesoriesContainer
.adapatability-section
.accessories-panel
.right-panels
picture
+ div.hotspot-container
.hotspot{
  display: flex !important;
}

.hotspot-container .hotspot-popup a.c-call-to-action, 
.hotspot-container .hotspot-popup button.c-call-to-action{
  cursor: pointer;
  background: none !important;
}

/* Accessibility */

.accesoriesContainer * :focus, .accesoriesContainer * :focus-visible {
  outline: none;
  border: 2px solid #0067b8 !important;
}

.c-heading-div {
  font-size: 1rem;
}

/* Remove padding only from headings within hotspot popup */

.hotspot-popup .c-heading-1, 
.hotspot-popup .c-heading-2, 
.hotspot-popup .c-heading-3, 
.hotspot-popup .c-heading-4, 
.hotspot-popup .c-heading-5, 
.hotspot-popup .c-heading-6 {
  padding: 0;
}

[dir="rtl"] a.c-call-to-action:not(.glyph-play):after,
button.c-call-to-action:not(.glyph-play):after {
  transform: rotate(180deg);
  right: -4px;
}

[dir="rtl"] .accesoriesContainer .adapatability-section .accessories-panel .order-one a:hover:after{
  right: 0px;
}

.accesoriesContainer a.c-call-to-action.f-lightweight:focus:not(.x-hidden-focus), 
.accesoriesContainer button.c-call-to-action.f-lightweight:focus:not(.x-hidden-focus){
  border: 2px solid #000 !important;
  color: #000;
  background: transparent;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: #fff;
  color: #000;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -60px;
  opacity: 1;
}

