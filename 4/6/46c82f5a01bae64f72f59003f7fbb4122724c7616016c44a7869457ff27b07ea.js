<style>
  :root {
    --widget-height: 550px;
    --widget-height-1366: 500px;
    --widget-height-galaxy-fold: 360px;
    --direction: normal; /* reverse */
    --transform-origin-top-left: 0% 0;
    --transform-origin-top-right: 100% 0%;
    --transform-origin-bottom-left: 0% 100%;
    --transform-origin-bottom-right: 100% 100%;
    --ripple-color-floating-bell: #1194FF;
  }

  #iz-news-hub-posts-main-container::-webkit-scrollbar {
    width: 0;
  }
  #iz-news-hub-main-container * {
    font-family: 'Arial', sans-serif;
    box-sizing: border-box;
    -webkit-font-smoothing: auto;
  }

  .iz-news-hub-sidebar-container, .iz-news-hub-stickybar-callout, .iz-news-hub-discovr-outer-wrapper {
    z-index: 2147483645;
  }

  .iz-news-hub-zoom-in {
    animation: iz-news-hub-zoom-in 0.5s ease 0s 1 normal both;
    -webkit-animation: iz-news-hub-zoom-in 0.5s ease 0s 1 normal both;
  }

  .iz-news-hub-bell {
    width: 38px;
    height: 38px;
    stroke: white;
    transform: rotate(0deg);
  }

  .iz-newsHub-bell-shell,
  .iz-news-hub-bell-clapper {
    fill: #1d85fc;
  }

  .iz-news-hub-bell .iz-news-hub-bell-group,
  .iz-news-hub-bell .iz-news-hub-bell-clapper{
    transform-origin: 50% 6px;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }

  .iz-news-hub-bell .iz-news-hub-bell-group {
    transform: rotate(-8deg);
    -webkit-animation: iz-news-hub-animateGroup 2.3s;
    animation: iz-news-hub-animateGroup 2.3s;
  }

  .iz-news-hub-bell .iz-news-hub-bell-clapper {
    transform: translateX(-6.5%);
    -webkit-animation: iz-news-hub-animateClapper 2.3s;
    animation: iz-news-hub-animateClapper 2.3s;
  }

  .iz-news-hub-sticky-red {
    width: 10px;
    height: 10px;
    border-radius: 100px;
    background: red;
    position: absolute;
    right: 8px;
    z-index: 10;
    top: -5px;
  }

  .iz-news-hub-sticky-red::before {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: inherit;
    border-radius: 100px;
    z-index: -1;
    animation: iz-news-hub-ripple 1.6s ease-out infinite;
    -webkit-animation: iz-news-hub-ripple 1.6s ease-out infinite;
  }

  .iz-news-hub-d-flex {
    display: flex;
  }

  .iz-news-hub-d-flex-row {
    flex-direction: row;
  }

  .iz-news-hub-d-flex-space-btwn {
    justify-content: space-between;
  }

  .iz-news-hub-d-flex-center {
    justify-content: center;
  }

  .iz-news-hub-d-flex-col {
    flex-direction: column;
  }

  .iz-news-hub-align-item-center {
    align-items: center;
  }

  .iz-news-hub-text-body {
    font: 400 14px/24px 'Arial', sans-serif;
    letter-spacing: normal;
  }

  .iz-news-hub-fs-13 {
    font-size: 13px;
    display: inline-block;
  }

  .iz-news-hub-black-color {
    color: #1A1F36;
  }

  .iz-news-hub-black-color-light {
    color: rgba(165, 172, 184, 1) !important;
  }

  .iz-news-hub-line-clamp {
    display: block;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    position: relative;
    line-height: 1.50;
    word-break: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0;
  }

  .iz-news-hub-line-clamp-4 {
    -webkit-line-clamp: 4;
  }

  .iz-news-hub-btn {
    position: relative;
    cursor: pointer;
    outline: none;
    border: none;
    -webkit-tap-highlight-color: transparent;
    display: inline-block;
    white-space: nowrap;
    text-decoration: none;
    vertical-align: baseline;
    text-align: center;
    margin: 0;
    min-width: 64px;
    line-height: 36px;
    padding: 0 16px;
    border-radius: 4px;
    overflow: visible;
    transition: background-color ease-in 0.1s;
  }

  #iz-news-hub-notification-container .iz-news-hub-btn-gray-at-hover:hover,
  .iz-news-hub-btn-gray-at-hover:hover {
    background-color: rgba(154, 160, 166, 0.2) !important;
  }

  .iz-news-hub-icon-btn {
    padding: 0;
    min-width: 0;
    width: 40px;
    height: 40px;
    flex-shrink: 0;
    line-height: 40px;
    border-radius: 50%;
  }

  .iz-news-hub-animated-background {
    animation-duration: 1.25s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: iz-news-hub-placeHolderShimmer;
    animation-timing-function: linear;
    background: #f6f6f6;
    background: linear-gradient(to right, #f6f6f6 8%, #f0f0f0 18%, #f6f6f6 33%);
    background-size: 800px 104px;
    position: relative;
  }

  .iz-share-icons-animation {
    animation: iz-news-hub-animate-slide 0.5s ease-in;
    -webkit-animation: iz-news-hub-animate-slide 0.5s ease-in;
  }

  .iz-news-hub-post-text-container .iz-news-hub-share-div {
    position: relative;
  }

  .iz-news-hub-post-text-container .iz-news-hub-share-before {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: rgba(239, 239, 239, 1) !important;
    padding: 0 !important;
    border: none !important;
    cursor: pointer;
    min-width: unset;
    outline: none;
  }

  .iz-news-hub-share-before:hover {
    background-color: rgba(239, 239, 239, 1) !important;
  }

  .iz-news-hub-post-text-container .iz-news-hub-share-before.share-before-desktop {
    visibility: hidden;
    transition-duration: 0s;
  }

  .iz-news-hub-share-div .iz-news-hub-share-icons {
    position: absolute;
    right: 36px;
    bottom: -9px;
    z-index: 1;
    background: rgba(243, 243, 243, 1);
    padding: 8px;
    border-radius: 4px;
    box-shadow: 0px 0px 24px 0px rgb(0 0 0 / 25%);
    height: 48px;
    display: none;
    flex-direction: row;
    justify-content: center;
  }

  .iz-news-hub-share-icons a {
    width: 32px;
    margin-inline-end: 10px;
  }

  .iz-news-hub-share-icons a:last-child {
    margin-inline-end: 0;
  }

  .iz-news-hub-social-link {
    position: relative;
  }

  .iz-news-hub-social-link .iz-news-hub-icon-tooltip {
    font-size: 14px;
    transition: all ease-in 0.1s;
    background-color: #000;
    opacity: 0.8;
    color: #fff;
    border-radius: 4px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    vertical-align: middle;
    padding: 7px 10px;
    line-height: 16px;
    position: absolute;
    top: -37px;
    display: none;
  }

  .iz-news-hub-hide-img {
    display: block;
  }

  .iz-news-hub-hide-icon {
    display: none;
  }

  .iz-news-hub-social-link .iz-news-hub-linkedin-icon-tooltip {
    right: -15px;
  }

  .iz-news-hub-social-link .iz-news-hub-mail-icon-tooltip {
    right: -2px;
  }

  .iz-news-hub-social-link .iz-news-hub-twitter-icon-tooltip {
    right: -50px;
  }

  .iz-news-hub-social-link .iz-news-hub-facebook-icon-tooltip {
    left: -27px;
  }

  .iz-news-hub-social-link .iz-news-hub-whatsapp-icon-tooltip {
    left: -27px;
  }

  .iz-news-hub-social-link .iz-news-hub-share-icon-tooltip {
    left: -10px;
  }
  [dir='rtl'] .iz-news-hub-social-link .iz-news-hub-share-icon-tooltip {
    left: -40px;
  }

  .iz-news-hub-copied-main {
    display: none;
    margin: auto;
    width: calc(100% - 90px);
  }

  .iz-news-hub-copied-div {
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 9;
    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: calc(100% - 15px);
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0.75px;
    line-height: 20px;
    color: #fff;
    background: #323232;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.32);
    border-radius: 4px;
    margin: 7.5px;
    padding: 12px 18px;
    direction: ltr;
  }

  .iz-news-hub-copyclose-button {
    color: #1D85FC;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.0357143em;
    background-color: transparent !important;
    border: none !important;
    cursor: pointer;
    padding: 0;
  }

  .iz-news-hub-main-icon {
    display: block;
    animation: iz-news-hub-hide-img 2s;
    -webkit-animation: iz-news-hub-hide-img 2s;
  }

  #iz-news-hub-main-container {
    position: relative;
  }

  #iz-news-hub-icon-container {
    display: flex;
    position: relative;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 100px !important;
    background-color: #1d85fc;
    cursor: pointer;
    z-index: 2147483647;
    box-shadow: rgb(50 50 93 / 25%) 0px 13px 27px -5px, rgb(0 0 0 / 30%) 0px 8px 16px -8px;
  }
  #iz-news-hub-floating-icon.iz-news-hub-subscribe #iz-news-hub-icon-container {
    width: 44px;
    height: 44px;
  }
  /* #iz-news-hub-floating-icon.iz-news-hub-unsubscribe #iz-news-hub-icon-container {
    width: 30px;
    height: 30px;
    opacity: 0.8;
    filter: contrast(0.5);
  } */
  /* #iz-news-hub-floating-icon.iz-news-hub-unsubscribe:hover #iz-news-hub-icon-container {
    transition: all 0.2s ease-in;
    width: 44px;
    height: 44px;
    opacity: 1;
    filter: contrast(1);
  } */
  /* .iz-news-hub-cross-visible #iz-news-hub-floating-icon.iz-news-hub-unsubscribe:hover #iz-news-hub-icon-container {
    width: 30px;
    height: 30px;
    opacity: 0.8;
    filter: contrast(0.5);
  } */
  /* #iz-news-hub-floating-icon.iz-news-hub-unsubscribe:hover .iz-news-hub-main-icon {
    width: 20px;
    height: 20px;
  } */
  /* Floating Bell: icon dimentions incase of unsubscribe START */
  /* #iz-news-hub-floating-icon.iz-news-hub-unsubscribe .iz-news-hub-main-icon {
    width: 16px;
    height: 16px;
  }
  #iz-news-hub-floating-icon.iz-news-hub-unsubscribe .iz-news-hub-bell {
    width: 45px;
    height: 45px;
  }
  #iz-news-hub-floating-icon.iz-news-hub-unsubscribe #iz-news-hub-cross-icon {
    width: 14px;
    height: 14px;
  } */
  /* Floating Bell: icon dimentions incase of unsubscribe END */
  .izooto-news-hub-swing-animation {
    -webkit-animation-name: iz-news-hub-swing;
    animation-name: iz-news-hub-swing;
    -webkit-animation-duration: 0.8s;
    animation-duration: 0.8s;
    animation-delay: 1.5s;
    -webkit-animation-fill-mode: none;
    animation-fill-mode: none;
  }

  #iz-news-hub-bell-icon-tooltip {
    display: none;
    font-size: 14px;
    transition: all ease-in 0.1s;
    position: absolute;
    top: 9px;
    right: 54px;
    background-color: #000;
    color: #fff;
    border-radius: 4px;
    white-space: nowrap;
    padding: 4px 10px;
    line-height: 18px;
  }
  /* #iz-news-hub-floating-icon.iz-news-hub-unsubscribe:hover #iz-news-hub-bell-icon-tooltip {
    display: none;
  } */
  #iz-news-hub-floating-icon:hover #iz-news-hub-bell-icon-tooltip {
    display: block;
  }
  /* .iz-news-hub-unsubscribe #iz-news-hub-bell-icon-tooltip {
    top: 2px;
  } */

  #iz-news-hub-discovr-outer-wrapper.iz-news-hub-floating-icon-container-bottom-left #iz-news-hub-bell-icon-tooltip,
  #iz-news-hub-discovr-outer-wrapper.iz-news-hub-floating-icon-container-top-left #iz-news-hub-bell-icon-tooltip {
    right: unset;
    left: 54px;
  }

  #iz-news-hub-floating-icon .iz-news-hub-main-icon,
  #iz-news-hub-sticky-sidebar-dummy-text .iz-news-hub-main-icon,
  #iz-news-hub-sticky-sidebar .iz-news-hub-main-icon {
    width: 20px;
    height: 20px;
    margin: 0;
  }

  #iz-news-hub-sticky-sidebar-dummy-text.iz-news-hub-sticky-sidebar-dummy-text-left {
    position: absolute;
    display: none;
  }

  #iz-news-hub-sticky-sidebar-dummy-text.iz-news-hub-sticky-sidebar-dummy-text-right {
    position: absolute;
    display: none;
    right: unset;
  }

  #iz-news-hub-floating-icon #iz-news-hub-cross-icon {
    width: 20px;
    height: 20px;
  }

  .iz-news-hub-sidebar-container {
    min-width: 164px;
    max-width: 100%;
    max-height: 41px;
    padding: 10px 16px;
    color: #ffffff;
    background-color: #1d85fc;
    border-radius: 4px 4px 0 0;
    direction: ltr;
    cursor: pointer;

    position: fixed;
    bottom: 50%;
    transform: rotate(-90deg);

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  #iz-news-hub-sticky-sidebar.iz-news-hub-sidebar-container-left {
    transform: rotate(-90deg);
    border-radius: 0 0 4px 4px;
  }

  .iz-news-hub-sidebar-container-left .iz-news-hub-sticky-red {
    bottom: -5px;
    top: auto;
    z-index: 2147483647;
  }

  .iz-news-hub-sidebar-container #iz-news-hub-sidebar-text {
    width: 100%;
    margin-inline-start: 15px;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 1px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    color: #fff;
  }

  #iz-news-hub-notification-container.iz-news-hub-notification-container {
    display: none;
    width: 320px;
    height: var(--widget-height);
    position: fixed;
    z-index: 2147483647;
    right: 0;
    top: 50%;
    transform: translate(0, -50%);
    background: #fff;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    box-shadow: 0px 4px 15px rgb(0 0 0 / 39%);
  }

  .iz-news-hub-animate-pop-in {
    transform: translateX(-100%);
    animation: iz-news-hub-animate-pop-in 0.5s 1 forwards;
    -webkit-animation: iz-news-hub-animate-pop-in 0.5s 1 forwards;
    animation-timing-function: ease;
  }

  .iz-news-hub-animate-pop-out {
    transform: translateX(100%);
    animation: iz-news-hub-animate-pop-out 0.5s 1 forwards;
    -webkit-animation: iz-news-hub-animate-pop-out 0.5s 1 forwards;
    animation-timing-function: ease;
  }

  .izootoSlideAnimation {
    -webkit-animation-duration: 0.8s;
    animation-duration: 0.8s;
    -webkit-animation-fill-mode: none;
    animation-fill-mode: none;
  }

  .izooto-slide-in-right-animation {
    -webkit-animation-name: izootoSlideInRight;
    animation-name: izootoSlideInRight;
  }

  .izooto-slide-out-right-animation {
    -webkit-animation-name: izootoSlideOutRight;
    animation-name: izootoSlideOutRight;
  }

  .izooto-slide-in-left-animation {
    -webkit-animation-name: izootoSlideInLeft;
    animation-name: izootoSlideInLeft;
  }

  .izooto-slide-out-left-animation {
    -webkit-animation-name: izootoSlideOutLeft;
    animation-name: izootoSlideOutLeft;
  }

  .iz-news-hub-icon-discoverability-text {
    width: 220px;
    font-family: 'Arial', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 18px;
    color: #1A1F36;
    padding-inline-start: 5px;
    padding-inline-end: 5px;
    
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    overflow: hidden;
  }
  #iz-news-hub-icon-discoverability {
    position: absolute;
    top: -5px;
    right: 35px;

    width: max-content;
    max-width: 350px;
    max-height: 54px;
    height: 54px;
    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    
    padding: 5px;
    padding-inline-start: 35px;
    background: #FFFFFF;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    border-radius: 4px;
    cursor: pointer;
    direction: ltr;
  }

  /* .iz-news-hub-unsubscribe ~ #iz-news-hub-icon-discoverability {
    top: -12px;
  } */

  #iz-news-hub-icon-sticky-discoverability {
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
  }
  
  .iz-news-hub-stickybar-callout {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    position: fixed;
    top: 44%;
    left: 0;
    direction: ltr;

    border-radius: 4px;
    border-start-start-radius: 0;
    border-end-start-radius: 0;
    padding-inline-end: 6px;

    background: #FFFFFF;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }
  .iz-news-hub-stickybar-callout-right {
    left: unset;
    right: 0;
  }
.iz-news-hub-stickybar-callout-left {
    left: 0;
    right: unset;
  }
  #iz-news-hub-stickybar-wrapper .iz-news-hub-stickybarCallout-slideIn-right,
  #iz-news-hub-stickybar-wrapper .iz-news-hub-stickybarCallout-slideOut-right {
    left: unset;
    right: 0;

    flex-direction: row-reverse;
    padding-inline-end: 0;
    padding-inline-start: 5px;
    border-start-start-radius: 4px;
    border-end-start-radius: 4px;
  }
  #iz-news-hub-stickybar-wrapper .iz-news-hub-stickybarCallout-slideIn-right #iz-news-hub-icon-sticky-discoverability,
  #iz-news-hub-stickybar-wrapper .iz-news-hub-stickybarCallout-slideOut-right #iz-news-hub-icon-sticky-discoverability {
    flex-direction: row-reverse;
    margin-inline-end: 10px;
  }
  #iz-news-hub-stickybar-wrapper .iz-news-hub-stickybar-callout-close {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    min-height: 52px;
    font-size: 40px;
    font-weight: normal;
    color: #fff;
    background: #1d85fc;
    padding: 0px 8px;
    cursor: pointer;
  }

  .iz-news-hub-slideInRight {
    -webkit-animation: iz-news-hub-slideInRight 1.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation: iz-news-hub-slideInRight 1.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }

  #iz-news-hub-notification-container.iz-news-hub-notification-container-left {
    right: unset;
    left: 0;
    border-radius: 0 10px 10px 0;
  }

  #iz-news-hub-notification-header {
    position: absolute;
    z-index: 9;
    width: 100%;
  }

  #iz-news-hub-title-container {
    box-sizing: border-box;
    padding: 18px;
    max-height: 56px;
    background: #1d85fc;
    justify-content: center;
    border-start-end-radius: 10px;
    border-start-start-radius: 10px;
  }
  .iz-news-hub-sidebar-container ~ #iz-news-hub-notification-header #iz-news-hub-title-container {
    border-start-end-radius: 0;
  }
  .iz-news-hub-floating-icon-container-bottom-right ~ #iz-news-hub-notification-container #iz-news-hub-title-container,
  .iz-news-hub-floating-icon-container-top-left ~ #iz-news-hub-notification-container #iz-news-hub-title-container,
  .iz-news-hub-floating-icon-container-bottom-left ~ #iz-news-hub-notification-container #iz-news-hub-title-container,
  .iz-news-hub-floating-icon-container-top-right ~ #iz-news-hub-notification-container #iz-news-hub-title-container {
    border-start-end-radius: 10px;
  }
  #iz-news-hub-notification-container.iz-news-hub-notification-container-left #iz-news-hub-title-container {
    border-top-left-radius: 0;
    border-top-right-radius: 10px;
  }

  #iz-news-hub-title-container svg {
    vertical-align: middle;
  }

  #iz-news-hub-notification-container .iz-news-hub-header-title-wrapper {
    width: calc(100% - 24px);
    text-align: center;
    display: flex;
    flex-direction: column;
  }

  #iz-news-hub-notification-container .iz-news-hub-header-title-wrapper .iz-news-hub-header-branding-text {
    font-size: 12px;
    line-height: 14px;
    color: rgba(255, 255, 255, 0.6);
    font-weight: 400;
    letter-spacing: 0.25px;
  }

  #iz-news-hub-notification-container .iz-news-hub-header-title-wrapper .iz-news-hub-header-branding-text .izooto-txt {
    border-bottom: 1px solid;
  }


  #iz-news-hub-notification-container .iz-news-hub-header-title-text {
    cursor: default;
    font-size: 18px;
    font-weight: 600;
    line-height: normal;
    color: #ffffff;
    width: 100%;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  #iz-news-hub-notification-container .iz-news-hub-close-news-hub-btn {
    display: flex;
    width: 28px;
    height: 28px;
    line-height: 28px;
    background-color: transparent;
    outline: none;
  }

  #iz-news-hub-notifications-body-container {
    width: 100%;
    height: 100%;
    padding-top: 66px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  
  .iz-news-hub-alerts-container {
    position: sticky;
    bottom: 0;
    top: 84%;
    z-index: 9;
    background: #fff;
    width: 100%;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  #iz-news-hub-notifications-body-container .iz-news-hub-noti-blocked-wrapper,
  #iz-news-hub-notifications-body-container .iz-news-hub-noti-default-wrapper {
    display: none;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    width: calc(100% - 10px);
    padding: 10px;
    margin: 5px;
    color: rgba(0, 0, 0, 0.7);
    border-radius: 4px;
  }

  #iz-news-hub-notifications-body-container .iz-news-hub-noti-blocked-wrapper {
    background-color: #FFECEB;
    border: 1px solid #FFE1DF;
  }

  #iz-news-hub-notifications-body-container .iz-news-hub-noti-default-wrapper {
    background-color: #f5f5f5;
    border: 1px solid rgba(0, 0, 0, 0.06);
  }

  #iz-news-hub-notifications-body-container .iz-news-hub-noti-blocked-wrapper svg {
    width: 20px;
    margin-inline-end: 10px;
  }

  #iz-news-hub-notifications-body-container .iz-news-hub-noti-blocked-wrapper .iz-news-hub-noti-blockd-txt {
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.15px;
  }

  #iz-news-hub-notifications-body-container .iz-news-hub-noti-blocked-wrapper .iz-news-hub-noti-blockd-txt .know-more-txt {
    border-bottom: 1px solid;
    position: relative;
    cursor: pointer;
  }

  #iz-news-hub-notifications-body-container .iz-news-hub-noti-blocked-wrapper .iz-news-hub-noti-blockd-txt .know-more-txt .know-more-txt-tooltip {
    display: none;
    position: absolute;
    width: 275px;
    left: auto;
    right: auto;
    bottom: 27px;
    padding: 10px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 10px 7px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    z-index: 9;
    background: #FFFFFF;
    border-radius: 4px;
  }

  #iz-news-hub-notifications-body-container .iz-news-hub-noti-blocked-wrapper .iz-news-hub-noti-blockd-txt .know-more-txt .know-more-txt-tooltip img {
    width: 100%;
    max-height: 175px;
  }

  #iz-news-hub-notifications-body-container .iz-news-hub-noti-blocked-wrapper .iz-news-hub-noti-blockd-txt .know-more-txt .know-more-txt-tooltip:after {
    content: "";
    position: absolute;
    left: 22%;
    bottom: -11px;
    width: 0;
    height: 0;
    border-inline-end: 1.25rem solid transparent;
    border-inline-start: 1.25rem solid transparent;
    border-top: 1.25rem solid #fff;
  }

  #iz-news-hub-notifications-body-container .iz-news-hub-noti-blocked-wrapper .iz-news-hub-noti-blockd-txt .know-more-txt:hover>.know-more-txt-tooltip {
    display: block;
  }

  #iz-news-hub-notifications-body-container .iz-news-hub-noti-default-wrapper #enable-turned-off-notis-cta {
    background-color: #057ADA;
    color: #fff;
    font-size: 13px;
    font-weight: normal;
    line-height: 36px;
    text-align: center;
    letter-spacing: 1px;
    text-transform: uppercase;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    width: 100%;
  }


  #iz-news-hub-posts-header {
    width: 100%;
    max-width: 390px;
    max-height: 30px;
    position: fixed;
    z-index: 1;
    padding: 10px 20.5px;
    background-color: #f3f3f3;
    box-sizing: border-box;
  }

  #iz-news-hub-posts-header span {
    font-weight: 500;
    color: rgba(0, 0, 0, 0.87);
  }

  #iz-news-hub-posts-main-container {
    width: 100%;
    height: calc(var(--widget-height) - 64px);
    overflow-y: auto;
    background: #fff;
    border-end-end-radius: 10px;
    border-end-start-radius: 10px;

    scrollbar-width: none;
  }
 
  #iz-news-hub-notifications-body-container.iz-news-hub-subscribe,
  #iz-news-hub-notifications-body-container.iz-news-hub-unsubscribe {
    height: calc(100% - 62px);
  }

  #iz-news-hub-no-notifications-container {
    height: 100%;
  }

  #iz-news-hub-no-notifications-container .title {
    margin-top: 13px;
    margin-bottom: 5px;
    font-size: 20px;
    font-weight: 700;
    color: #374163;
    line-height: 24px;
    direction: ltr;
  }

  #iz-news-hub-notification-container .iz-news-hub-notification-loader {
    width: 100%;
    padding: 10px 15px;
    background-color: #ffffff;
  }

  #iz-news-hub-notification-container .iz-news-hub-notification-loader.iz-news-hub-post-container:hover {
    background-color: transparent;
  }

  #iz-news-hub-notification-container .iz-news-hub-post-icon-wrapper-loader {
    width: 110px;
    min-width: 110px;
    height: 70px;
  }

  #iz-news-hub-notification-container .iz-news-hub-post-text-loader-container {
    width: 100%;
    padding-inline-start: 10px;
    padding-inline-end: 10px;
  }

  #iz-news-hub-notification-container .iz-news-hub-post-text-loader-container .iz-news-hub-post-heading-loader {
    width: 100%;
    height: 14px;
    margin-bottom: 5px;
    border-radius: 3px;
  }

  #iz-news-hub-notification-container .iz-news-hub-post-text-loader-container .iz-news-hub-post-datetime-loader {
    width: 169px;
    height: 14px;
  }

  #iz-news-hub-notification-container .iz-news-hub-post-container {
    width: 100%;
    padding: 15px 10px;
    cursor: pointer;
    background-color: #ffffff;
    border-bottom: 1px solid #e5e5e5;
    transition: background-color ease-in 0.1s;
    -webkit-tap-highlight-color: transparent;
  }

  #iz-news-hub-notification-container .iz-news-hub-post-container:hover {
    background-color: #f9f9f9;
  }

#iz-news-hub-ads-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: sticky;
    top: 0;
    z-index: 999;
    background-color: white;
  }

  .iz-news-hub-customer-icon-container {
    position: relative;
    min-width: 110px;
    height: 75px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-position: center;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    border-radius: 4px;
  }

  .iz-reverse-order .iz-news-hub-post-container .iz-news-hub-customer-icon-container {
    order: 1
  }

  .iz-reverse-order .iz-news-hub-share-div {
    order: -1
  }

  .iz-no-preview .iz-news-hub-share-div {
    display: none;
  }

  .iz-news-hub-customer-icon-container img {
    height: 100%;
    max-width: 110px;
    border-radius: 4px;
    z-index: 1;
  }

  .iz-news-hub-customer-icon-container .no-preview {
    display: none;
  }

  #iz-news-hub-notification-container .iz-news-hub-post-text-container {
    width: 100%;
    position: relative;
    padding-inline-start: 10px;
    padding-inline-end: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  #iz-news-hub-notification-container .iz-news-hub-post-text-container .iz-news-hub-notification-title {
    font-weight: 500;
    font-size: 13px;
    line-height: 18px;
  }

  #iz-news-hub-notification-container .iz-news-hub-post-text-container .iz-news-hub-notification-view-more {
    text-decoration: none;
    font-size: 14px;
    color: #1d85fc;
  }

  #iz-news-hub-notification-container .iz-news-hub-post-options-container {
    width: 30px;
    position: relative;
    align-items: flex-end;
  }

  #iz-news-hub-notification-container .iz-news-hub-notification-unread-indicator {
    width: 8px;
    height: 8px;
    position: absolute;
    right: 5px;
    top: 30%;
    border-radius: 50%;
    background-color: #1d85fc;
  }

  #iz-news-hub-notification-container .iz-news-hub-notification-share-btn {
    display: none;
    min-width: 28px;
    max-width: 28px;
    height: 28px;
    padding: 0;
    line-height: unset;
    background-color: transparent;
  }

  #iz-news-hub-notification-container .iz-news-hub-post-container:hover .iz-news-hub-notification-share-btn {
    display: flex;
  }

  #iz-news-hub-notification-container .iz-news-hub-notification-share-options-container {
    display: none;
    width: 166px;
    z-index: 3;
    position: absolute;
    right: 0;
    top: 0;
    background: #ffffff;
    box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.25);
    border-radius: 11px;
  }

  #iz-news-hub-notification-container .iz-news-hub-notification-share-options-container .options-text {
    font-size: 16px;
    padding: 6px 12px;
    background: #f2f2f2;
    border-radius: 11px 11px 0 0;
  }

  #iz-news-hub-notification-container .iz-news-hub-notification-share-options-container .iz-news-hub-post-share-options-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-flow: column wrap;
  }

  #iz-news-hub-notification-container .iz-news-hub-notification-share-options-container .iz-news-hub-post-share-options-list li {
    list-style: none;
  }

  #iz-news-hub-notification-container .iz-news-hub-notification-share-options-container .iz-news-hub-post-share-options-list li a {
    text-decoration: none;
    transition: background-color ease-in 0.1s;
    padding: 15px 12px;
  }

  #iz-news-hub-notification-container .iz-news-hub-notification-share-options-container .iz-news-hub-post-share-options-list li a svg {
    width: 24px;
    margin-inline-end: 15px;
  }

  .iz-newshub-no-branding {
    margin-bottom: 0 !important;
  }

  #iz-news-hub-notification-container .iz-news-hub-branding-text {
    color: rgba(255, 255, 255, 0.6);
    text-decoration: none;
    display: inline-block;
  }

  .iz-news-hub-end-text {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 40px 0;
    font-family: 'Arial', sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #818181;
    text-align: center;
    direction: ltr;
  }

  .pb-40 {
    padding-bottom: 40px !important;
  }

  .pb-74 {
    padding-bottom: 74px !important;
  }

  #iz-news-hub-end-text:hover {
    background: #fff !important;
    cursor: default;
  }

  #iz-news-hub-main-container .iz-news-hub-blur-image-container {
    position: absolute;
    width: 110px;
    height: 75px;
    top: 0;
    left: 0;
  }
  #iz-news-hub-sticky-sidebar .iz-news-hub-new-indicator {
    padding: 2px 4px;
    border-radius: 2px;
    background: rgba(255, 179, 0, 1);
    color: #FFF;
    text-align: center;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 0.4px;
    text-transform: uppercase;
    
    position: absolute;
    top: 10px;
    right: -27px;
    z-index: 2147483647;
    display: none;
  }

   /* For sinarplus.sinarharian.com only */
   .staging-homepage-2.global-block-template-1 #iz-news-hub-sticky-sidebar .iz-news-hub-new-indicator {
    top: 4px;
    right: -10px;
    line-height: normal;
    padding: 1px 3px;
  }
  /* end */
  #iz-news-hub-discovr-outer-wrapper .iz-news-hub-new-indicator {
    padding: 2px 4px;
    border-radius: 2px;
    background: rgba(255, 179, 0, 1);
    color: #FFF;
    text-align: center;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 0.4px;
    text-transform: uppercase;
    
    position: absolute;
    top: -8px;
    right: -20px;
    z-index: 2147483647;
    display: none;
  }
  #iz-news-hub-discovr-outer-wrapper .iz-news-hub-blur-image-container {
    position: absolute;
    width: 100%;
    height: 75px;
    top: 0;
    left: 0;
  }

  #iz-news-hub-main-container .iz-news-hub-blur-image-svg {
    width: 110px;
    height: 75px;
    border-radius: 4px;
  }
  
  /* for callout only start */
  .iz-news-hub-icon-discoverability-img-wrapper .iz-news-hub-blur-image-container .iz-news-hub-blur-image-svg {
    height: 45px!important;
  }
  /* for callout only end */

  #iz-news-hub-main-container .iz-news-hub-blur-image-svg image {
    width: 100%;
    height: 100%;
  }

  #iz-news-hub-discovr-outer-wrapper .iz-news-hub-blur-image-svg {
    width: 100%;
    height: 75px;
    border-radius: 4px;
  }


  .iz-news-hub-icon-discoverability-img-wrapper {
    display: flex;
    position: relative;
    width: 110px;
    height: 45px;
    justify-content: center;
  }

  #iz-news-hub-discovr-outer-wrapper .iz-news-hub-icon-discoverability-img-wrapper {
    position: relative;
    border-radius: 4px;
  }

  #iz-news-hub-main-container .iz-news-hub-icon-discoverability-img-wrapper img {
    z-index: 1;
    border-radius: 4px;
  }

  .iz-news-hub-discovr-outer-wrapper {
    position: fixed;
    display: flex;
    justify-content: flex-end;
  }

  #iz-news-hub-discovr-outer-wrapper.iz-news-hub-floating-icon-container-bottom-left {
    bottom: 80px;
    left: 21px;
  }

  #iz-news-hub-discovr-outer-wrapper.iz-news-hub-floating-icon-container-bottom-right {
    bottom: 80px;
    right: 21px;
  }

  .iz-news-hub-floating-icon-container-bottom-right #iz-news-hub-icon-discoverability,
  .iz-news-hub-floating-icon-container-top-right #iz-news-hub-icon-discoverability {
    padding-inline-start: 5px;
    padding-inline-end: 26px;
  }

  #iz-news-hub-discovr-outer-wrapper.iz-news-hub-floating-icon-container-top-left #iz-news-hub-bell-icon-tooltip,
  #iz-news-hub-discovr-outer-wrapper.iz-news-hub-floating-icon-container-top-right #iz-news-hub-bell-icon-tooltip {
    top: 4px;
    margin-top: 4px;
  }

  #iz-news-hub-discovr-outer-wrapper.iz-news-hub-floating-icon-container-top-right {
    top: 50px;
    right: 21px;
  }

  #iz-news-hub-discovr-outer-wrapper.iz-news-hub-floating-icon-container-top-left {
    top: 50px;
    left: 21px;
  }

  #iz-news-hub-discovr-outer-wrapper.iz-news-hub-floating-icon-container-top-left .iz-news-hub-icon-discoverability-img-wrapper,
  #iz-news-hub-discovr-outer-wrapper.iz-news-hub-floating-icon-container-bottom-left .iz-news-hub-icon-discoverability-img-wrapper {
    order: 1;
  }

  #iz-news-hub-discovr-outer-wrapper.iz-news-hub-floating-icon-container-bottom-left #iz-news-hub-icon-discoverability,
  #iz-news-hub-discovr-outer-wrapper.iz-news-hub-floating-icon-container-top-left #iz-news-hub-icon-discoverability {
    left: -6px;
    right: unset;

    padding-inline-start: 54px;
    border-start-start-radius: 50px;
    border-end-start-radius: 50px;
  }

  #iz-news-hub-discovr-outer-wrapper.iz-news-hub-floating-icon-container-bottom-right #iz-news-hub-icon-discoverability,
  #iz-news-hub-discovr-outer-wrapper.iz-news-hub-floating-icon-container-top-right #iz-news-hub-icon-discoverability {
    left: unset;
    right: -4px;

    padding-inline-end: 54px;
    border-start-end-radius: 50px;
    border-end-end-radius: 50px;
  }

  #iz-news-hub-discovr-outer-wrapper.iz-news-hub-floating-icon-container-top-right #iz-news-hub-icon-discoverability .iz-news-hub-icon-discoverability-text,
  #iz-news-hub-discovr-outer-wrapper.iz-news-hub-floating-icon-container-bottom-right #iz-news-hub-icon-discoverability .iz-news-hub-icon-discoverability-text {
    padding-inline-end: 0;
    padding-inline-start: 5px;
  }

  @keyframes iz-news-hub-zoom-in {
    0% {
      opacity: 0;
      transform: scale(0);
    }

    50% {
      transform: scale(1.1);
    }

    100% {
      transform: scale(1);
    }
  }

  @keyframes iz-news-hub-animateGroup {
    0% {
      transform: rotate(0deg);
    }

    35.084% {
      transform: rotate(-20deg);
    }

    48.2405% {
      transform: rotate(20deg);
    }

    57.0115% {
      transform: rotate(-20deg);
    }

    64.9054% {
      transform: rotate(20deg);
    }

    74.5535% {
      transform: rotate(-20deg);
    }

    100% {
      transform: rotate(0deg);
    }
  }

  @keyframes iz-news-hub-animateClapper {
    0% {
      transform: translateX(0%);
    }

    17.542% {
      transform: translateX(0%);
    }

    21.9275% {
      transform: translateX(-1%);
    }

    35.084% {
      transform: translateX(11%);
    }

    48.2405% {
      transform: translateX(-11%);
    }

    52.626% {
      transform: translateX(0%);
    }

    59.6428% {
      transform: translateX(10%);
    }

    68.4138% {
      transform: translateX(-11%);
    }

    78.939% {
      transform: translateX(11%);
    }

    85.9558% {
      transform: translateX(-11%);
    }

    100% {
      transform: translateX(0);
    }
  }

  @keyframes iz-news-hub-ripple {
    from {
      opacity: 1;
      transform: scale(0);
    }

    to {
      opacity: 0;
      transform: scale(3);
    }
  }

  @keyframes iz-news-hub-placeHolderShimmer {
    0% {
      background-position: -468px 0;
    }

    100% {
      background-position: 468px 0;
    }
  }

  @keyframes iz-news-hub-swing {
    20% {
      -webkit-transform: rotate(15deg);
      transform: rotate(15deg);
    }

    40% {
      -webkit-transform: rotate(-10deg);
      transform: rotate(-10deg);
    }

    60% {
      -webkit-transform: rotate(5deg);
      transform: rotate(5deg);
    }

    80% {
      -webkit-transform: rotate(-5deg);
      transform: rotate(-5deg);
    }

    to {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
  }

  @keyframes izootoSlideInRight {
    0% {
      -webkit-transform: translateX(320px) translateY(-50%);
      transform: translateX(320px) translateY(-50%);
    }
    100% {
      -webkit-transform: translateX(0) translateY(-50%);
      transform: translateX(0) translateY(-50%);
    }
  }

  @keyframes izootoSlideOutRight {
    0% {
      -webkit-transform: translateX(0) translateY(-50%);
      transform: translateX(0) translateY(-50%);
    }

    100% {
      -webkit-transform: translateX(320px) translateY(-50%);
      transform: translateX(320px) translateY(-50%);
    }
  }

  @keyframes izootoSlideInLeft {
    0% {
      -webkit-transform: translateX(-320px) translateY(-50%);
      transform: translateX(-320px) translateY(-50%);
    }

    100% {
      -webkit-transform: translateX(0) translateY(-50%);
      transform: translateX(0) translateY(-50%);
    }
  }

  @keyframes izootoSlideOutLeft {
    0% {
      -webkit-transform: translateX(0) translateY(-50%);
      transform: translateX(0) translateY(-50%);
    }

    100% {
      -webkit-transform: translateX(-320px) translateY(-50%);
      transform: translateX(-320px) translateY(-50%);
    }
  }
  
  @keyframes iz-news-hub-animate-slide {
    0% {
      opacity: 0;
      transform: translateY(0px);
    }

    50% {
      opacity: 0.5;
      transform: translateY(-30%);
    }

    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  @keyframes iz-news-hub-hide-img {
    0% {
      display: none;
    }
  }

  @keyframes iz-news-hub-animate-pop-in {
    0% {
      transform: translateX(0%);
    }

    100% {
      transform: translateX(52%);
    }
  }

  @keyframes iz-news-hub-animate-pop-out {
    100% {
      transform: translateX(52%);
    }
  }

  @keyframes iz-news-hub-slideInRight {
    0% {
      -webkit-transform: translateZ(0) translateX(-2px);
      transform: translateZ(0) translateX(-2px);
      opacity: 0;
    }

    25% {
      transform: translateZ(0) translateX(0);
    }

    100% {
      -webkit-transform: translateZ(0) translateX(2px);
      transform: translateZ(0) translateX(2px);
      opacity: 1;
    }
  }

  .iz-news-hub-slideOutRight {
    -webkit-animation: iz-news-hub-slideOutRight 1.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation: iz-news-hub-slideOutRight 1.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }

  @keyframes iz-news-hub-slideOutRight {
    0% {
      -webkit-transform: translateZ(0) translateX(2px);
      transform: translateZ(0) translateX(2px);
      opacity: 1;
    }

    45% {
      transform: translateZ(0) translateX(0);
      opacity: 0;
    }

    100% {
      -webkit-transform: translateZ(0) translateX(-2px);
      transform: translateZ(0) translateX(-2px);
      opacity: 0;
    }
  }

  .iz-news-hub-slideInLeft {
    -webkit-animation: iz-news-hub-slideInLeft 1.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation: iz-news-hub-slideInLeft 1.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }

  @keyframes iz-news-hub-slideInLeft {
    0% {
      -webkit-transform: translateZ(0) translateX(-2px);
      transform: translateZ(0) translateX(-2px);
      opacity: 0;
    }

    25% {
      transform: translateZ(0) translateX(0px);
    }

    100% {
      -webkit-transform: translateZ(0) translateX(2px);
      transform: translateZ(0) translateX(2px);
      opacity: 1;
    }
  }

  .iz-news-hub-slideOutLeft {
    -webkit-animation: iz-news-hub-slideOutLeft 1.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation: iz-news-hub-slideOutLeft 1.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }

  @keyframes iz-news-hub-slideOutLeft {
    0% {
      -webkit-transform: translateZ(0) translateX(2px);
      transform: translateZ(0) translateX(2px);
      opacity: 1;
    }

    45% {
      transform: translateZ(0) translateX(0px);
      opacity: 0;
    }

    100% {
      -webkit-transform: translateZ(0) translateX(-2px);
      transform: translateZ(0) translateX(-2px);
      opacity: 0;
    }
  }

  [dir='rtl'] .iz-nh-dir-ltr .iz-nh-noti-time-sharing-wrapper,
  .iz-news-hub-notification-createdAt,
  #iz-news-hub-no-notifications-container .message {
    direction: ltr;
  }

  [izdirection='rtl'] .iz-news-hub-share-icons {
    right: unset;
    left: 36px;
  }

  [dir='rtl'] .iz-reverse-order .iz-news-hub-notification-title {
    text-align: left;
  }

  [dir='rtl'] .iz-news-hub-icon-discoverability-text {
    padding-inline-start: 10px;
  }

  [dir='rtl'] #iz-news-hub-discovr-outer-wrapper.iz-news-hub-floating-icon-container-top-right #iz-news-hub-icon-discoverability .iz-news-hub-icon-discoverability-text,
  [dir='rtl'] #iz-news-hub-discovr-outer-wrapper.iz-news-hub-floating-icon-container-bottom-right #iz-news-hub-icon-discoverability .iz-news-hub-icon-discoverability-text{
    margin-left: 0;
    margin-right: 0;
  }
  
/* Sticky Bar & Callout Animation start */
/* LEFT POSITION START */
.iz-news-hub-stickybarCallout-slideIn-left {
  -webkit-animation: iz-news-hub-stickybarCallout-slideIn-left 1s 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
          animation: iz-news-hub-stickybarCallout-slideIn-left 1s 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
@keyframes iz-news-hub-stickybarCallout-slideIn-left {
  0% {
      -webkit-transform: translateX(-355px);
      transform: translateX(-355px);
      opacity: 0;
  }
    50% {
      opacity: 0.7
  }
    100% {
      -webkit-transform: translateX(0px);
      transform: translateX(0px);
      opacity: 1;
  }
}
.iz-news-hub-stickybarCallout-slideOut-left {
  -webkit-animation: iz-news-hub-stickybarCallout-slideOut-left 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
          animation: iz-news-hub-stickybarCallout-slideOut-left 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
@keyframes iz-news-hub-stickybarCallout-slideOut-left {
  0% {
    -webkit-transform: translateX(0px);
    transform: translateX(0px);
    opacity: 1;
  }
  50% {
    opacity: 0.7
  }
  100% {
    -webkit-transform: translateX(-355px);
    transform: translateX(-355px);
    opacity: 0;
  }
}
.iz-news-hub-stickybar-slideOut-left {
  -webkit-animation: iz-news-hub-stickybar-slideOut-left 1s 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
          animation: iz-news-hub-stickybar-slideOut-left 1s 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
@keyframes iz-news-hub-stickybar-slideOut-left {
  0% {
    -webkit-transform: rotate(-90deg) translateY(0);
    transform: rotate(-90deg) translateY(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: rotate(-90deg) translateY(-80px);
    transform: rotate(-90deg) translateY(-80px);
    opacity: 1;
  }
}
.iz-news-hub-stickybar-slideIn-left {
  -webkit-animation: iz-news-hub-stickybar-slideIn-left 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
          animation: iz-news-hub-stickybar-slideIn-left 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
@keyframes iz-news-hub-stickybar-slideIn-left {
  0% {
    -webkit-transform: rotate(-90deg) translateY(-80px);
    transform: rotate(-90deg) translateY(-80px);
    opacity: 1;
  }
  100% {
    -webkit-transform: rotate(-90deg) translateY(0);
    transform: rotate(-90deg) translateY(0);
    opacity: 1;
  }
}
/* LEFT POSITION END */
/* RIGHT POSITION START */
.iz-news-hub-stickybarCallout-slideIn-right {
  -webkit-animation: iz-news-hub-stickybarCallout-slideIn-right 1s 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
          animation: iz-news-hub-stickybarCallout-slideIn-right 1s 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
@keyframes iz-news-hub-stickybarCallout-slideIn-right {
  0% {
    -webkit-transform: translateX(355px);
    transform: translateX(355px);
    opacity: 0;
  }
  50% {
    opacity: 0.7
  }
  100% {
    -webkit-transform: translateX(0px);
    transform: translateX(0px);
    opacity: 1;
  }
}

.iz-news-hub-stickybarCallout-slideOut-right {
  -webkit-animation: iz-news-hub-stickybarCallout-slideOut-right 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
          animation: iz-news-hub-stickybarCallout-slideOut-right 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
@keyframes iz-news-hub-stickybarCallout-slideOut-right {
  0% {
    -webkit-transform: translateX(0px);
    transform: translateX(0px);
    opacity: 1;
  }
  50% {
    opacity: 0.7
  }
  100% {
    -webkit-transform: translateX(355px);
    transform: translateX(355px);
    opacity: 0;
  }
}

.iz-news-hub-stickybar-slideIn-right {
  -webkit-animation: iz-news-hub-stickybar-slideIn-right 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
          animation: iz-news-hub-stickybar-slideIn-right 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
@keyframes iz-news-hub-stickybar-slideIn-right {
  0% {
    -webkit-transform: rotate(-90deg) translateY(80px);
    transform: rotate(-90deg) translateY(80px);
    opacity: 1;
  }
  100% {
    -webkit-transform: rotate(-90deg) translateY(0);
    transform: rotate(-90deg) translateY(0);
    opacity: 1;
  }
}
.iz-news-hub-stickybar-slideOut-right {
  -webkit-animation: iz-news-xhub-stickybar-slideOut-right 1s 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
          animation: iz-news-hub-stickybar-slideOut-right 1s 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
@keyframes iz-news-hub-stickybar-slideOut-right {
  0% {
    -webkit-transform: rotate(-90deg) translateY(0);
    transform: rotate(-90deg) translateY(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: rotate(-90deg) translateY(80px);
    transform: rotate(-90deg) translateY(80px);
    opacity: 1;
  }
}
/* RIGHT POSITION END */
/* Sticky Bar & Callout Animation end */

  /* Floating Bell widget placement as per direction START */
  #iz-news-hub-notification-container.iz-news-hub-top-left {
    top: 95px;left: 36px;bottom: unset;right: unset;transform: translate(0, 0);border-radius: 10px;
  }
  #iz-news-hub-notification-container.iz-news-hub-top-right {
    top: 95px;right: 36px;bottom: unset;left: unset;transform: translate(0, 0);border-radius: 10px;
  }
  #iz-news-hub-notification-container.iz-news-hub-bottom-left {
    bottom: 135px;left: 36px;top: unset;right: unset;transform: translate(0, 0);border-radius: 10px;
  }
  #iz-news-hub-notification-container.iz-news-hub-bottom-right {
    bottom: 135px;right: 36px;top: unset;left: unset;transform: translate(0, 0);border-radius: 10px;
  }
  /* Floating Bell widget placement as per direction END */
  
  /* Widget animations in case of Floating Bell START */
  /* Top / Left */
	.iz-news-hub-scale-top-left {
    -webkit-animation: iz-news-hub-scale-topLeft 0.3s cubic-bezier(0.455, 0.030, 0.515, 0.955) var(--direction) forwards;
	        animation: iz-news-hub-scale-topLeft 0.3s cubic-bezier(0.455, 0.030, 0.515, 0.955) var(--direction) forwards;
  }
  @keyframes iz-news-hub-scale-topLeft {
    0% {
      -webkit-transform: scale(0);transform: scale(0);
      -webkit-transform-origin: var(--transform-origin-top-left);transform-origin: var(--transform-origin-top-left);
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(1);transform: scale(1);
      -webkit-transform-origin: var(--transform-origin-top-left);transform-origin: var(--transform-origin-top-left);
      opacity: 1;
    }
  }
 
  /* Top / Right */
  .iz-news-hub-scale-top-right {
    -webkit-animation: iz-news-hub-scale-topRight 0.3s cubic-bezier(0.455, 0.030, 0.515, 0.955) var(--direction) forwards;
	          animation: iz-news-hub-scale-topRight 0.3s cubic-bezier(0.455, 0.030, 0.515, 0.955) var(--direction) forwards;
  }
  @keyframes iz-news-hub-scale-topRight {
    0% {
      -webkit-transform: scale(0);transform: scale(0);
      -webkit-transform-origin: var(--transform-origin-top-right);transform-origin: var(--transform-origin-top-right);
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(1);transform: scale(1);
      -webkit-transform-origin: var(--transform-origin-top-right);transform-origin: var(--transform-origin-top-right);
      opacity: 1;
    }
  }

  /* Bottom / Left */
	.iz-news-hub-scale-bottom-left {
    -webkit-animation: iz-news-hub-scale-bottomLeft 0.3s cubic-bezier(0.455, 0.030, 0.515, 0.955) var(--direction) forwards;
	        animation: iz-news-hub-scale-bottomLeft 0.3s cubic-bezier(0.455, 0.030, 0.515, 0.955) var(--direction) forwards;
  }
  @keyframes iz-news-hub-scale-bottomLeft {
    0% {
      -webkit-transform: scale(0);transform: scale(0);
      -webkit-transform-origin: var(--transform-origin-bottom-left);transform-origin: var(--transform-origin-bottom-left);
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(1);transform: scale(1);
      -webkit-transform-origin: var(--transform-origin-bottom-left);transform-origin: var(--transform-origin-bottom-left);
      opacity: 1;
    }
  }

  /* Bottom / Right */
  .iz-news-hub-scale-bottom-right {
    -webkit-animation: iz-news-hub-scale-bottomRight 0.3s cubic-bezier(0.455, 0.030, 0.515, 0.955) var(--direction) forwards;
	          animation: iz-news-hub-scale-bottomRight 0.3s cubic-bezier(0.455, 0.030, 0.515, 0.955) var(--direction) forwards;
  }
  @keyframes iz-news-hub-scale-bottomRight {
    0% {
      -webkit-transform: scale(0);transform: scale(0);
      -webkit-transform-origin: var(--transform-origin-bottom-right);transform-origin: var(--transform-origin-bottom-right);
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(1);transform: scale(1);
      -webkit-transform-origin: var(--transform-origin-bottom-right);transform-origin: var(--transform-origin-bottom-right);
      opacity: 1;
    }
  }
  /* Widget animations in case of Floating Bell END */

  /* Ripple Effect Animation on bell */
  .iz-news-hub-ripple-bell {
    position: relative;
  }
  .iz-news-hub-ripple-bell:before, .iz-news-hub-ripple-bell:after, .iz-news-hub-ripple-bell span {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    border: 1px solid transparent;
    border-radius: 50%;
    opacity: 0.7;
  }
  .iz-news-hub-ripple-bell:before {
    animation: ripple-before 1.5s linear infinite;
  }
  .iz-news-hub-ripple-bell:after {
    animation: ripple-after 1.8s linear infinite;
  }
  .iz-news-hub-ripple-bell span {
    animation: ripple-span 2.1s linear infinite;
  }
  @keyframes ripple-before {
    0% {transform: scale(0);}
    20% {border-color: var(--ripple-color-floating-bell);transform: scale(1);}
    100% {border-color: transparent;transform: scale(1.5);}
  }
  @keyframes ripple-after {
    0% {transform: scale(0);}
    40% {border-color: var(--ripple-color-floating-bell);transform: scale(1);}
    100% {border-color: transparent;transform: scale(1.5);}
  }
  @keyframes ripple-span {
    0% {transform: scale(0);}
    60% {border-color: var(--ripple-color-floating-bell);transform: scale(1);}
    100% {border-color: transparent;transform: scale(1.5);}
  }
  /* Ripple Effect Animation on bell end */
  
  .iz-news-hub-blink-indicator {
    animation-name: iz-news-hub-blink-indicator;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
  }
  @keyframes iz-news-hub-blink-indicator {
    0% {
      background: linear-gradient(rgb(245 193 69), rgb(249, 180, 21));
      border-color: rgb(213, 150, 2);
    }
    100% {
      background: linear-gradient(rgb(246 161 0), rgb(245, 178, 20));
      border-color: rgb(247, 177, 15);
    }
  }

  @media screen and (max-width: 1366px) {
    #iz-news-hub-notification-container.iz-news-hub-notification-container {
      height: var(--widget-height-1366);
    }
    #iz-news-hub-notification-container .iz-news-hub-post-container {
      padding: 6px 10px;
    }
    #iz-news-hub-posts-main-container.large-ad{
      height: calc(var(--widget-height-1366) - 66px);
    }
    .iz-news-hub-line-clamp-4 {
      -webkit-line-clamp: 3;
    }
    #iz-news-hub-posts-main-container {
      height: calc(var(--widget-height-1366) - 64px);
    }
  }

  @media screen and (min-width: 481px) {
    .iz-news-hub-social-link:hover .iz-news-hub-icon-tooltip {
      display: block;
    }
  }

  @media screen and (max-width: 480px) {
    /* solution for only for vtvgujrati website START */
    .noJS #iz-news-hub-discovr-outer-wrapper.iz-news-hub-floating-icon-container-bottom-right,
    .active-mob-menu #iz-news-hub-discovr-outer-wrapper.iz-news-hub-floating-icon-container-bottom-right {
      bottom: 137px!important;
      right: 20px;
    }
    .noJS #iz-news-hub-discovr-outer-wrapper.iz-news-hub-floating-icon-container-bottom-right #iz-news-hub-icon-discoverability, .noJS #iz-news-hub-discovr-outer-wrapper.iz-news-hub-floating-icon-container-top-right #iz-news-hub-icon-discoverability {
      right: -14px;
    }

    .noJS #iz-news-hub-notification-container.iz-news-hub-bottom-right {
      bottom: 137px;
      right: 13px;
    }
    .noJS #iz-news-hub-notification-container.iz-news-hub-bottom-left {
      bottom: 137px;
      left: 13px;
    }
    /* solution for only for vtvgujrati website END */
    .iz-news-hub-animate-pop-out {
      animation: iz-news-hub-animate-pop-out 0.5s 1 forwards;
      -webkit-animation: iz-news-hub-animate-pop-out 0.5s 1 forwards;
    }
  
    @keyframes iz-news-hub-animate-pop-out {
      0% {transform: translateX(100%);}
      50% {transform: translateX(60%);}
      100% {transform: translateX(100%);}
    }

    #iz-news-hub-notification-header,
    #iz-news-hub-posts-header {
      max-width: unset;
    }

    #iz-news-hub-notification-container .iz-news-hub-notification-share-btn {
      display: flex;
    }

    #iz-news-hub-notification-container .iz-news-hub-notification-unread-indicator {
      top: 45%;
    }

    .iz-news-hub-post-text-container .iz-news-hub-share-before {
      background: transparent !important;
    }

    .iz-news-hub-end-text {
      align-items: start;
      padding-bottom: 40px;
    }

    #iz-news-hub-bell-icon-tooltip {
      right: 0;
    }
    #iz-news-hub-floating-icon:hover #iz-news-hub-bell-icon-tooltip {
      display: none;
    }

    #iz-news-hub-discovr-outer-wrapper.iz-news-hub-floating-icon-container-bottom-left #iz-news-hub-bell-icon-tooltip,
    #iz-news-hub-discovr-outer-wrapper.iz-news-hub-floating-icon-container-top-left #iz-news-hub-bell-icon-tooltip {
      right: unset;
      left: 0;
    }

    .iz-news-hub-icon-discoverability-text {
      width: 190px;
    }
  }

  @media screen and (max-width: 410px) {
    #iz-news-hub-discovr-outer-wrapper.iz-news-hub-floating-icon-container-bottom-right,
    #iz-news-hub-discovr-outer-wrapper.iz-news-hub-floating-icon-container-top-right {
      left: unset;
      right: 5px;
    }

    #iz-news-hub-discovr-outer-wrapper.iz-news-hub-floating-icon-container-bottom-left,
    #iz-news-hub-discovr-outer-wrapper.iz-news-hub-floating-icon-container-top-left {
      right: unset;
      left: 5px;
    }

    #iz-news-hub-main-container .iz-news-hub-icon-discoverability-img-wrapper img {
      min-width: 110px;
      max-width: 110px;
      height: 45px;
    }

    #iz-news-hub-icon-discoverability {
      width: 350px;
      max-width: unset;
      min-width: unset;
    }
  }
  
  @media screen and (max-width: 360px) {
    .iz-news-hub-discovr-outer-wrapper {
      right: 10px;
    }
    #iz-news-hub-icon-discoverability {
      width: 350px;
      max-width: unset;
      min-width: unset;
    }
    #iz-news-hub-discovr-outer-wrapper.iz-news-hub-floating-icon-container-top-left,
    #iz-news-hub-discovr-outer-wrapper.iz-news-hub-floating-icon-container-top-right {
      top: 70px;
    }
    #iz-news-hub-discovr-outer-wrapper .iz-news-hub-new-indicator {
      right: 32px;
    }
    /* Floating Bell widget placement as per direction START */
    #iz-news-hub-notification-container.iz-news-hub-top-left {
      top: 70px;left: 4px;bottom: unset;right: unset;transform: translate(0, 0);border-radius: 10px;
    }
    #iz-news-hub-notification-container.iz-news-hub-top-right {
      top: 70px;right: 4px;bottom: unset;left: unset;transform: translate(0, 0);border-radius: 10px;
    }
    #iz-news-hub-notification-container.iz-news-hub-bottom-left {
      bottom: 82px;left: 4px;top: unset;right: unset;transform: translate(0, 0);border-radius: 10px;
    }
    #iz-news-hub-notification-container.iz-news-hub-bottom-right {
      bottom: 82px;right: 4px;top: unset;left: unset;transform: translate(0, 0);border-radius: 10px;
    }
    /* Floating Bell widget placement as per direction END */
  }

  /* Media query for galaxy fold 1 devices */
  @media only screen and (max-width: 320px) and (min-width: 280px) {
    #iz-nh-ads {
      transform: scale(0.9);
    }
    #iz-news-hub-notification-container.iz-news-hub-notification-container {
      width: 278px;
    }
    #iz-news-hub-posts-main-container,
    #iz-news-hub-posts-main-container.large-ad {
      height: calc(var(--widget-height-1366) - 56px);
    }
    #iz-news-hub-notifications-body-container {
      padding-top: 56px;
    }
    #iz-news-hub-notification-container.iz-news-hub-bottom-right {
      right: 1px;
    }
    #iz-news-hub-notification-container.iz-news-hub-bottom-left {
      left: 1px;
    }
    .iz-news-hub-share-div .iz-news-hub-share-icons {
      right: 25px;
    }
    .iz-news-hub-share-icons a {
      margin-inline-end: 5px;
    }
  }

  @media only screen and (width: 717px) and (height: 512px) {
    #iz-news-hub-notification-container.iz-news-hub-notification-container {
      height: var(--widget-height-galaxy-fold);
    }
    #iz-news-hub-posts-main-container {
      height: calc(var(--widget-height-galaxy-fold) - 64px);
    }
  }
</style>
<div id="iz-news-hub-main-container" dir="auto" style="display: none;">
<div class="iz-news-hub-discovr-outer-wrapper" dir="auto" id="iz-news-hub-discovr-outer-wrapper">
<div class="iz-news-hub-floating-icon-container iz-news-hub-floating-icon-container-bottom-right iz-news-hub-subscribe" id="iz-news-hub-floating-icon">
<span id="iz-news-hub-bell-icon-tooltip" class="iz-news-hub-dynamic-title">News Hub</span>
<div id="iz-news-hub-icon-container" class="iz-news-hub-zoom-in">
<div id="iz-news-hub-new-indicator-floating" class="iz-news-hub-new-indicator iz-news-hub-blink-indicator">New</div>
<img src id="izooto-news-hub-swing-animation" class="iz-news-hub-main-icon" alt="Icon" />
<svg class="iz-news-hub-bell" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="50px" height="30px" viewBox="0 0 50 30" enable-background="new 0 0 50 30" xml:space="preserve">
<g class id="iz-news-hub-bell-group">
<path fill="none" id="iz-news-hub-bell-clapper" fill-rule="evenodd" stroke-width="1.5" clip-rule="evenodd" stroke="#currentColor" stroke-miterlimit="10" d="M28.7,25 c0,1.9-1.7,3.5-3.7,3.5s-3.7-1.6-3.7-3.5s1.7-3.5,3.7-3.5S28.7,23,28.7,25z" />
<path fill="none" class="iz-newsHub-bell-shell" id="shell" fill-rule="evenodd" clip-rule="evenodd" stroke="#currentColor" stroke-width="2" stroke-miterlimit="10" d="M35.9,21.8c-1.2-0.7-4.1-3-3.4-8.7c0.1-1,0.1-2.1,0-3.1h0c-0.3-4.1-3.9-7.2-8.1-6.9c-3.7,0.3-6.6,3.2-6.9,6.9h0 c-0.1,1-0.1,2.1,0,3.1c0.6,5.7-2.2,8-3.4,8.7c-0.4,0.2-0.6,0.6-0.6,1v1.8c0,0.2,0.2,0.4,0.4,0.4h22.2c0.2,0,0.4-0.2,0.4-0.4v-1.8 C36.5,22.4,36.3,22,35.9,21.8L35.9,21.8z" />
</g>
</svg>
<svg id="iz-news-hub-cross-icon" class="iz-news-hub-hide-icon" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.375 2.21125L14.7888 0.625L8.5 6.91375L2.21125 0.625L0.625 2.21125L6.91375 8.5L0.625 14.7888L2.21125 16.375L8.5 10.0863L14.7888 16.375L16.375 14.7888L10.0863 8.5L16.375 2.21125Z" fill="white" />
</svg>
</div>
</div>
<div id="iz-news-hub-icon-discoverability" class style="display: none;">
<div class="iz-news-hub-icon-discoverability-img-wrapper">
<img src alt="Icon" width="110" height="45">
</div>
<span class="iz-news-hub-icon-discoverability-text"></span>
</div>
</div>

<div id="iz-news-hub-stickybar-wrapper">

<div class="iz-news-hub-stickybar-callout" style="display: none;">
<span class="iz-news-hub-stickybar-callout-close">&times;</span>
<div id="iz-news-hub-icon-sticky-discoverability" class="iz-news-hub-sticky-sidebar-callout">
<span class="iz-news-hub-icon-discoverability-text"></span>
<div class="iz-news-hub-icon-discoverability-img-wrapper">
<img src alt="Icon" width="110">
</div>
</div>
</div>


<div id="iz-news-hub-sticky-sidebar" class="iz-news-hub-sidebar-container">
<div id="iz-news-hub-new-indicator-sidebar" class="iz-news-hub-new-indicator iz-news-hub-blink-indicator">New</div>
<svg xmlns="http://www.w3.org/2000/svg" id="iz-newshub-bell-svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<g clip-path="url(#clip0_2980_2781)">
<path d="M9.99999 20.0001C11.1416 20.0001 12.08 19.1302 12.1887 18.0171H7.81128C7.92003 19.1302 8.85835 20.0001 9.99999 20.0001Z" fill="white" />
<path d="M17.6529 13.5882C16.982 13.5882 16.4382 13.0444 16.4382 12.3735V8.35574C16.4382 5.50652 14.5872 3.08996 12.0222 2.24203C12.0292 2.17324 12.0329 2.10352 12.0329 2.03289C12.0329 0.911953 11.1209 0 9.99999 0C8.87905 0 7.96709 0.911953 7.96709 2.03289C7.96709 2.10352 7.97077 2.17324 7.9778 2.24203C5.41283 3.08996 3.56186 5.50652 3.56186 8.35574L3.56186 12.3735C3.56186 13.0444 3.01799 13.5882 2.34713 13.5882C1.44775 13.5882 0.718689 14.3173 0.718689 15.2167C0.718689 16.1161 1.44779 16.8452 2.34713 16.8452L17.6529 16.8452C18.5523 16.8452 19.2813 16.1161 19.2813 15.2167C19.2813 14.3173 18.5522 13.5882 17.6529 13.5882ZM9.99999 1.17187C10.4552 1.17187 10.8288 1.52703 10.8588 1.97477C10.5778 1.9373 10.2912 1.91762 9.99999 1.91762C9.70874 1.91762 9.42213 1.9373 9.14116 1.97477C9.17116 1.52703 9.54475 1.17187 9.99999 1.17187V1.17187Z" fill="white" />
</g>
<defs>
<clipPath id="clip0_2980_2781">
<rect width="20" height="20" fill="white" />
</clipPath>
</defs>
</svg>
<img src class="iz-news-hub-main-icon" alt="Icon" />
<span id="iz-news-hub-sidebar-text" class="iz-news-hub-dynamic-title">News Hub</span>
<div class="iz-news-hub-sticky-red" style="display: none;"></div>
</div>
</div>
<div class="iz-news-hub-notification-container" id="iz-news-hub-notification-container" style="display: none;">
<div class="iz-news-hub-sidebar-container iz-news-hub-d-flex iz-news-hub-d-flex-row iz-news-hub-align-item-center iz-news-hub-sticky-sidebar-dummy-text" id="iz-news-hub-sticky-sidebar-dummy-text" style="display: none;">
<svg xmlns="http://www.w3.org/2000/svg" id="iz-newshub-bell-svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<g clip-path="url(#clip0_2980_2781)">
<path d="M9.99999 20.0001C11.1416 20.0001 12.08 19.1302 12.1887 18.0171H7.81128C7.92003 19.1302 8.85835 20.0001 9.99999 20.0001Z" fill="white" />
<path d="M17.6529 13.5882C16.982 13.5882 16.4382 13.0444 16.4382 12.3735V8.35574C16.4382 5.50652 14.5872 3.08996 12.0222 2.24203C12.0292 2.17324 12.0329 2.10352 12.0329 2.03289C12.0329 0.911953 11.1209 0 9.99999 0C8.87905 0 7.96709 0.911953 7.96709 2.03289C7.96709 2.10352 7.97077 2.17324 7.9778 2.24203C5.41283 3.08996 3.56186 5.50652 3.56186 8.35574L3.56186 12.3735C3.56186 13.0444 3.01799 13.5882 2.34713 13.5882C1.44775 13.5882 0.718689 14.3173 0.718689 15.2167C0.718689 16.1161 1.44779 16.8452 2.34713 16.8452L17.6529 16.8452C18.5523 16.8452 19.2813 16.1161 19.2813 15.2167C19.2813 14.3173 18.5522 13.5882 17.6529 13.5882ZM9.99999 1.17187C10.4552 1.17187 10.8288 1.52703 10.8588 1.97477C10.5778 1.9373 10.2912 1.91762 9.99999 1.91762C9.70874 1.91762 9.42213 1.9373 9.14116 1.97477C9.17116 1.52703 9.54475 1.17187 9.99999 1.17187V1.17187Z" fill="white" />
</g>
<defs>
<clipPath id="clip0_2980_2781">
<rect width="20" height="20" fill="white" />
</clipPath>
</defs>
</svg>
<img src class="iz-news-hub-main-icon" />
<span id="iz-news-hub-sidebar-text" class="iz-news-hub-dynamic-title">News Hub</span>
</div>
<div id="iz-news-hub-notification-header">
<div id="iz-news-hub-title-container" class="iz-news-hub-d-flex iz-news-hub-d-flex-row iz-news-hub-align-item-center">
<div class="iz-news-hub-header-title-wrapper">
<span class="iz-news-hub-header-title-text iz-news-hub-dynamic-title">News Hub</span>
<span class="iz-news-hub-header-branding-text" dir="ltr">Powered by
<a href="https://www.izooto.com/campaign/getting-started-with-izooto?utm_source=referral&utm_medium=PoweredBy&utm_campaign={Website_Name}" target="_blank" class="iz-news-hub-branding-text"><span class="izooto-txt">iZooto</span>
</a>
</span>
</div>
<div>
<button type="button" class="iz-news-hub-close-news-hub-btn iz-news-hub-btn iz-news-hub-btn-gray-at-hover iz-news-hub-icon-btn iz-news-hub-d-flex iz-news-hub-d-flex-col iz-news-hub-d-flex-center iz-news-hub-align-item-center">
<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="#ffffff">
<path d="M0 0h24v24H0V0z" fill="none"></path>
<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z">
</path>
</svg>
</button>
</div>
</div>
</div>
<div id="iz-news-hub-notifications-body-container">
<div class="iz-news-hub-d-flex iz-news-hub-d-flex-col iz-news-hub-d-flex-center iz-news-hub-align-item-center" id="iz-news-hub-no-notifications-container" style="display: none">
<svg width="106" height="100" viewBox="0 0 106 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<g style="mix-blend-mode:multiply" opacity="0.19">
<path d="M46.9089 99.0712C67.4268 99.0712 84.0599 97.9195 84.0599 96.4987C84.0599 95.078 67.4268 93.9263 46.9089 93.9263C26.3909 93.9263 9.75781 95.078 9.75781 96.4987C9.75781 97.9195 26.3909 99.0712 46.9089 99.0712Z" fill="#1D62AF" />
</g>
<path d="M68.817 41.0689C72.0094 39.6797 72.9294 34.8539 70.872 30.2903C68.8145 25.7266 64.5587 23.1532 61.3663 24.5425C58.1739 25.9317 57.2538 30.7574 59.3113 35.3211C61.3687 39.8847 65.6246 42.4581 68.817 41.0689Z" fill="#BA2026" />
<path d="M15.2797 36.9512L14.0969 37.3968L9.65253 39.0216C2.50368 41.6335 -1.02194 49.2099 1.78018 55.9457C4.58805 62.6815 12.6556 66.0213 19.8045 63.4093L24.2431 61.7846L25.4432 61.3615L15.2797 36.9512Z" fill="#808080" />
<path d="M54.538 11.7905L53.6193 12.7721C47.4063 19.4294 40.1125 25.0283 32.0349 29.3409C26.0582 32.5258 19.8606 35.2931 13.4881 37.6224L8.98057 39.2641C6.48214 40.1312 4.29854 41.7012 2.70168 43.7787C1.10482 45.8561 0.165261 48.3492 0 50.9474L3.07774 49.8191C3.39388 49.7026 3.74334 49.709 4.05488 49.8369C4.36642 49.9647 4.6166 50.2045 4.75442 50.5074C4.81436 50.6586 4.84251 50.8201 4.83718 50.9823C4.83184 51.1445 4.79313 51.3039 4.72338 51.451C4.65362 51.5981 4.55427 51.7297 4.43131 51.8381C4.30836 51.9464 4.16434 52.0291 4.00795 52.0813L0.160778 53.4973C0.249585 54.0406 0.374259 54.5777 0.534011 55.1051L3.87588 53.8809C4.19343 53.7611 4.54569 53.7657 4.85988 53.8938C5.17407 54.0219 5.42616 54.2636 5.56405 54.5692C5.62399 54.7204 5.65214 54.8819 5.64681 55.0441C5.64147 55.2063 5.60276 55.3657 5.53301 55.5128C5.46325 55.6599 5.3639 55.7915 5.24094 55.8999C5.11798 56.0082 4.97397 56.0909 4.81758 56.1431L1.47571 57.3617C1.73904 57.8537 2.03441 58.3286 2.35998 58.7833L4.14002 58.1345C4.45756 58.0147 4.80983 58.0193 5.12402 58.1474C5.4382 58.2755 5.69029 58.5173 5.82818 58.8228C5.88812 58.974 5.91628 59.1355 5.91094 59.2977C5.90561 59.4599 5.86689 59.6193 5.79714 59.7664C5.72739 59.9135 5.62804 60.0451 5.50508 60.1535C5.38212 60.2618 5.2381 60.3446 5.08171 60.3967L4.09408 60.7521C6.07821 62.554 8.53264 63.7792 11.1838 64.2911C13.835 64.8031 16.5789 64.5818 19.1095 63.6518L23.6113 62.0045C30.0225 59.6626 36.592 57.7625 43.2721 56.318C52.4166 54.3653 61.8197 53.8587 71.1268 54.8174L72.5163 54.9584L54.538 11.7905Z" fill="#E8E8E8" />
<path d="M28.7734 61.6492L29.2558 65.4797C29.2778 65.6834 29.2291 65.8884 29.1176 66.0615C29.006 66.2345 28.8382 66.3655 28.6414 66.433L28.4863 66.4895L26.2642 62.5687L28.7734 61.6492Z" fill="#BA2026" />
<path d="M25.96 85.8L14.8721 66.2357L26.7524 61.8975L29.7842 69.8574C31.3986 74.0357 33.3995 78.0598 35.7616 81.8792C35.8603 82.0581 35.9179 82.2561 35.9304 82.4592C35.9429 82.6623 35.9099 82.8657 35.8339 83.0549C35.7578 83.2442 35.6405 83.4148 35.4901 83.5548C35.3397 83.6947 35.16 83.8006 34.9635 83.865L27.8836 86.4544C27.5364 86.5905 27.1509 86.5992 26.7977 86.4791C26.4445 86.3589 26.1471 86.1179 25.96 85.8Z" fill="#262626" />
<path d="M12.6557 66.2243L2.38888 41.5602C2.31887 41.4016 2.28274 41.2305 2.28271 41.0576C2.28269 40.8847 2.31879 40.7137 2.38876 40.555C2.45873 40.3964 2.56109 40.2535 2.6895 40.1353C2.81792 40.0171 2.96966 39.9261 3.13534 39.8678L18.7537 34.1587C19.0699 34.0425 19.4199 34.0531 19.7282 34.1882C20.0365 34.3233 20.2784 34.572 20.4017 34.8808L30.6742 59.5449C30.7415 59.7042 30.7754 59.8752 30.7738 60.0476C30.7722 60.2201 30.7352 60.3905 30.665 60.5485C30.5947 60.7066 30.4927 60.849 30.365 60.9674C30.2374 61.0858 30.0867 61.1776 29.922 61.2373L14.3094 66.9351C13.9938 67.0522 13.6442 67.0433 13.3352 66.9105C13.0262 66.7777 12.7823 66.5314 12.6557 66.2243Z" fill="#DE1F26" />
<path d="M71.5345 54.9133L53.9237 12.603C53.7963 12.2979 53.7327 11.9709 53.7365 11.6412C53.7403 11.3115 53.8116 10.986 53.946 10.6839C54.0805 10.3818 54.2754 10.1094 54.5191 9.88277C54.7629 9.65617 55.0505 9.48001 55.3649 9.36479L55.4683 9.33094C56.0765 9.10607 56.7501 9.12354 57.3455 9.37963C57.9408 9.63572 58.4108 10.1102 58.6551 10.7018L76.2717 53.0122C76.3981 53.3177 76.4609 53.6449 76.4563 53.9746C76.4517 54.3044 76.3798 54.6298 76.2448 54.9317C76.1099 55.2337 75.9147 55.5059 75.6708 55.7324C75.4269 55.9589 75.1392 56.135 74.8247 56.2504L74.7271 56.2842C74.1179 56.5063 73.4446 56.4876 72.8492 56.2319C72.2537 55.9762 71.7824 55.5035 71.5345 54.9133Z" fill="#E01F26" />
<g style="mix-blend-mode:multiply" opacity="0.17">
<path d="M35.7616 81.8792C33.3995 78.0598 31.3986 74.0357 29.7841 69.8574L28.5037 66.4726L28.6415 66.4218C28.8383 66.3542 29.0061 66.2233 29.1177 66.0502C29.2292 65.8771 29.2779 65.6721 29.2559 65.4684L28.7735 61.6379L29.922 61.2148C30.0804 61.1606 30.2263 61.0758 30.3509 60.9654C30.4755 60.855 30.5764 60.7212 30.6476 60.5719C30.7188 60.4226 30.7588 60.2608 30.7653 60.0961C30.7719 59.9313 30.7448 59.7669 30.6856 59.6126C34.8352 58.3452 39.0308 57.247 43.2722 56.3181C52.4167 54.3653 61.8199 53.8588 71.1269 54.8175L71.5174 54.857C71.787 55.4602 72.2834 55.9377 72.9029 56.19C73.5223 56.4423 74.217 56.4498 74.842 56.2109C75.1506 56.1084 75.4349 55.9455 75.6777 55.7322C75.9205 55.5188 76.1168 55.2593 76.2547 54.9693C76.3926 54.6793 76.4693 54.3649 76.4801 54.0451C76.4909 53.7252 76.4357 53.4065 76.3177 53.1081L70.6733 39.5688C72.2121 37.5097 72.4418 34.0402 71.0178 30.6272L1.78017 55.9457C1.94095 56.3237 2.11895 56.696 2.30844 57.074L1.46436 57.3843C1.72769 57.8764 2.02306 58.3512 2.34863 58.8059L3.19271 58.5013C3.69961 59.2116 4.27661 59.8711 4.91533 60.4701L4.08273 60.7748C6.2429 62.7594 8.97428 64.0401 11.9034 64.4417L12.6499 66.2356C12.7903 66.5475 13.0477 66.7943 13.3685 66.9246C13.6893 67.0549 14.0489 67.0586 14.3725 66.9352L15.1017 66.67L25.9599 85.8225C26.1462 86.1339 26.4387 86.3705 26.7855 86.4903C27.1324 86.6101 27.5112 86.6053 27.8548 86.4769L34.9348 83.8875C35.1369 83.827 35.3228 83.7228 35.4787 83.5826C35.6346 83.4424 35.7567 83.2697 35.8359 83.0772C35.9152 82.8847 35.9496 82.6772 35.9368 82.4699C35.9239 82.2627 35.8641 82.0608 35.7616 81.8792Z" fill="#231F20" />
</g>
<path d="M67.4233 19.1582L68.3937 18.4361L78.8328 10.6509L72.5452 9.3365L83.3346 0L69.1689 9.86115L74.9512 10.5945" fill="white" />
<path d="M81.4854 41.3796L82.5649 41.6955L94.0662 45.0803L92.5905 40.8888L105.654 43.9126L90.6726 39.0723L92.4699 42.7617" fill="white" />
</svg>
<span class="title">You have no new updates.</span>
<span class="message">Watch this space to get latest updates.</span>
</div>
<div id="iz-news-hub-posts-main-container" class="iz-news-hub-d-flex iz-news-hub-d-flex-col">
<div id="iz-news-hub-ads-container"></div>
<div id="posts-content-cotainer" dir="auto">
<div class="iz-news-hub-post-container iz-news-hub-notification-loader iz-news-hub-d-flex iz-news-hub-d-flex-row">
<div class="iz-news-hub-post-icon-wrapper-loader iz-news-hub-animated-background"></div>
<div class="iz-news-hub-post-text-loader-container iz-news-hub-d-flex iz-news-hub-d-flex-col">
<div class="iz-news-hub-post-heading-loader iz-news-hub-animated-background"></div>
<div class="iz-news-hub-post-datetime-loader iz-news-hub-animated-background"></div>
</div>
</div>
<div id="iz-news-hub-notification-" class="iz-news-hub-post-container iz-news-hub-notification iz-news-hub-d-flex iz-news-hub-d-flex-row">
<div class="iz-news-hub-customer-icon-container">
<img class="iz-news-hub-notification-bannerImage" src alt="Icon" />
<div class="iz-news-hub-blur-image-container">
<svg class="iz-news-hub-blur-image-svg">
<filter id="iz-news-hub-blur-image-filter">
<feGaussianBlur in="SourceGraphic" stdDeviation="10"></feGaussianBlur>
</filter>
<image filter="url(#iz-news-hub-blur-image-filter)" preserveAspectRatio="xMidYMid slice" />
</svg>
</div>
<svg width="110" class="no-preview" height="75" viewBox="0 0 110 75" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="110" height="75" rx="4" fill="#ECECEC" />
<path d="M36.3798 25.2727V34H35.1696L30.7335 27.5994H30.6525V34H29.3358V25.2727H30.5545L34.9949 31.6818H35.0758V25.2727H36.3798ZM40.9554 34.1321C40.3418 34.1321 39.8063 33.9915 39.3489 33.7102C38.8915 33.429 38.5364 33.0355 38.2836 32.5298C38.0307 32.0241 37.9043 31.4332 37.9043 30.7571C37.9043 30.0781 38.0307 29.4844 38.2836 28.9759C38.5364 28.4673 38.8915 28.0724 39.3489 27.7912C39.8063 27.5099 40.3418 27.3693 40.9554 27.3693C41.5691 27.3693 42.1046 27.5099 42.562 27.7912C43.0194 28.0724 43.3745 28.4673 43.6273 28.9759C43.8801 29.4844 44.0066 30.0781 44.0066 30.7571C44.0066 31.4332 43.8801 32.0241 43.6273 32.5298C43.3745 33.0355 43.0194 33.429 42.562 33.7102C42.1046 33.9915 41.5691 34.1321 40.9554 34.1321ZM40.9597 33.0625C41.3574 33.0625 41.687 32.9574 41.9483 32.7472C42.2097 32.5369 42.4029 32.2571 42.5279 31.9077C42.6557 31.5582 42.7196 31.1733 42.7196 30.7528C42.7196 30.3352 42.6557 29.9517 42.5279 29.6023C42.4029 29.25 42.2097 28.9673 41.9483 28.7543C41.687 28.5412 41.3574 28.4347 40.9597 28.4347C40.5591 28.4347 40.2267 28.5412 39.9625 28.7543C39.7012 28.9673 39.5066 29.25 39.3787 29.6023C39.2537 29.9517 39.1912 30.3352 39.1912 30.7528C39.1912 31.1733 39.2537 31.5582 39.3787 31.9077C39.5066 32.2571 39.7012 32.5369 39.9625 32.7472C40.2267 32.9574 40.5591 33.0625 40.9597 33.0625ZM48.6046 34V27.4545H49.8787V34H48.6046ZM49.248 26.4446C49.0265 26.4446 48.8361 26.3707 48.677 26.223C48.5208 26.0724 48.4426 25.8935 48.4426 25.6861C48.4426 25.4759 48.5208 25.2969 48.677 25.1491C48.8361 24.9986 49.0265 24.9233 49.248 24.9233C49.4696 24.9233 49.6586 24.9986 49.8148 25.1491C49.9739 25.2969 50.0534 25.4759 50.0534 25.6861C50.0534 25.8935 49.9739 26.0724 49.8148 26.223C49.6586 26.3707 49.4696 26.4446 49.248 26.4446ZM51.5929 34V27.4545H52.8159V28.5199H52.8968C53.0332 28.1591 53.2562 27.8778 53.5659 27.6761C53.8755 27.4716 54.2463 27.3693 54.6781 27.3693C55.1156 27.3693 55.4821 27.4716 55.7775 27.6761C56.0758 27.8807 56.296 28.1619 56.438 28.5199H56.5062C56.6625 28.1705 56.911 27.892 57.252 27.6847C57.5929 27.4744 57.9991 27.3693 58.4707 27.3693C59.0645 27.3693 59.5488 27.5554 59.9238 27.9276C60.3017 28.2997 60.4906 28.8608 60.4906 29.6108V34H59.2164V29.7301C59.2164 29.2869 59.0957 28.9659 58.8542 28.767C58.6127 28.5682 58.3244 28.4688 57.9892 28.4688C57.5744 28.4688 57.252 28.5966 57.0218 28.8523C56.7917 29.1051 56.6767 29.4304 56.6767 29.8281V34H55.4068V29.6491C55.4068 29.294 55.296 29.0085 55.0744 28.7926C54.8528 28.5767 54.5645 28.4688 54.2093 28.4688C53.9679 28.4688 53.7449 28.5327 53.5403 28.6605C53.3386 28.7855 53.1752 28.9602 53.0502 29.1847C52.9281 29.4091 52.867 29.669 52.867 29.9645V34H51.5929ZM64.1032 34.1449C63.6884 34.1449 63.3134 34.0682 62.9782 33.9148C62.6429 33.7585 62.3773 33.5327 62.1813 33.2372C61.9881 32.9418 61.8915 32.5795 61.8915 32.1506C61.8915 31.7812 61.9625 31.4773 62.1046 31.2386C62.2466 31 62.4384 30.8111 62.6799 30.6719C62.9213 30.5327 63.1912 30.4276 63.4895 30.3565C63.7878 30.2855 64.0918 30.2315 64.4015 30.1946C64.7935 30.1491 65.1117 30.1122 65.356 30.0838C65.6003 30.0526 65.7779 30.0028 65.8887 29.9347C65.9995 29.8665 66.0549 29.7557 66.0549 29.6023V29.5724C66.0549 29.2003 65.9498 28.9119 65.7395 28.7074C65.5321 28.5028 65.2225 28.4006 64.8105 28.4006C64.3816 28.4006 64.0435 28.4957 63.7963 28.6861C63.552 28.8736 63.383 29.0824 63.2892 29.3125L62.0918 29.0398C62.2338 28.642 62.4412 28.321 62.714 28.0767C62.9895 27.8295 63.3063 27.6506 63.6642 27.5398C64.0222 27.4261 64.3986 27.3693 64.7935 27.3693C65.0549 27.3693 65.3319 27.4006 65.6245 27.4631C65.9199 27.5227 66.1955 27.6335 66.4512 27.7955C66.7097 27.9574 66.9213 28.1889 67.0861 28.4901C67.2509 28.7884 67.3333 29.1761 67.3333 29.6534V34H66.089V33.1051H66.0378C65.9554 33.2699 65.8319 33.4318 65.6671 33.5909C65.5023 33.75 65.2907 33.8821 65.0321 33.9872C64.7736 34.0923 64.464 34.1449 64.1032 34.1449ZM64.3801 33.1222C64.7324 33.1222 65.0336 33.0526 65.2836 32.9134C65.5364 32.7741 65.7282 32.5923 65.8588 32.3679C65.9924 32.1406 66.0591 31.8977 66.0591 31.6392V30.7955C66.0137 30.8409 65.9256 30.8835 65.7949 30.9233C65.6671 30.9602 65.5208 30.9929 65.356 31.0213C65.1912 31.0469 65.0307 31.071 64.8745 31.0938C64.7182 31.1136 64.5875 31.1307 64.4824 31.1449C64.2353 31.1761 64.0094 31.2287 63.8049 31.3026C63.6032 31.3764 63.4412 31.483 63.3191 31.6222C63.1998 31.7585 63.1401 31.9403 63.1401 32.1676C63.1401 32.483 63.2566 32.7216 63.4895 32.8835C63.7225 33.0426 64.0194 33.1222 64.3801 33.1222ZM71.7747 36.5909C71.2548 36.5909 70.8074 36.5227 70.4324 36.3864C70.0602 36.25 69.7562 36.0696 69.5204 35.8452C69.2846 35.6207 69.1085 35.375 68.992 35.108L70.0872 34.6562C70.1639 34.7812 70.2662 34.9134 70.394 35.0526C70.5247 35.1946 70.7008 35.3153 70.9224 35.4148C71.1468 35.5142 71.4352 35.5639 71.7875 35.5639C72.2704 35.5639 72.6696 35.446 72.9849 35.2102C73.3002 34.9773 73.4579 34.6051 73.4579 34.0938V32.8068H73.377C73.3002 32.946 73.1895 33.1009 73.0446 33.2713C72.9025 33.4418 72.7065 33.5895 72.4565 33.7145C72.2065 33.8395 71.8812 33.902 71.4806 33.902C70.9636 33.902 70.4977 33.7812 70.0829 33.5398C69.671 33.2955 69.3443 32.9361 69.1028 32.4616C68.8642 31.9844 68.7449 31.3977 68.7449 30.7017C68.7449 30.0057 68.8627 29.4091 69.0985 28.9119C69.3372 28.4148 69.6639 28.0341 70.0787 27.7699C70.4934 27.5028 70.9636 27.3693 71.4892 27.3693C71.8954 27.3693 72.2235 27.4375 72.4735 27.5739C72.7235 27.7074 72.9181 27.8636 73.0574 28.0426C73.1994 28.2216 73.3088 28.3793 73.3855 28.5156H73.4792V27.4545H74.7278V34.1449C74.7278 34.7074 74.5971 35.169 74.3358 35.5298C74.0744 35.8906 73.7207 36.1577 73.2747 36.331C72.8315 36.5043 72.3315 36.5909 71.7747 36.5909ZM71.7619 32.8452C72.1284 32.8452 72.438 32.7599 72.6909 32.5895C72.9466 32.4162 73.1397 32.169 73.2704 31.848C73.4039 31.5241 73.4707 31.1364 73.4707 30.6847C73.4707 30.2443 73.4054 29.8565 73.2747 29.5213C73.144 29.1861 72.9522 28.9247 72.6994 28.7372C72.4466 28.5469 72.1341 28.4517 71.7619 28.4517C71.3784 28.4517 71.0588 28.5511 70.8031 28.75C70.5474 28.946 70.3542 29.2131 70.2235 29.5511C70.0957 29.8892 70.0318 30.267 70.0318 30.6847C70.0318 31.1136 70.0971 31.4901 70.2278 31.8139C70.3585 32.1378 70.5517 32.3906 70.8074 32.5724C71.0659 32.7543 71.3841 32.8452 71.7619 32.8452ZM79.2576 34.1321C78.6127 34.1321 78.0574 33.9943 77.5914 33.7188C77.1284 33.4403 76.7704 33.0497 76.5176 32.5469C76.2676 32.0412 76.1426 31.4489 76.1426 30.7699C76.1426 30.0994 76.2676 29.5085 76.5176 28.9972C76.7704 28.4858 77.1227 28.0866 77.5744 27.7997C78.0289 27.5128 78.5602 27.3693 79.1681 27.3693C79.5375 27.3693 79.8954 27.4304 80.242 27.5526C80.5886 27.6747 80.8997 27.8665 81.1752 28.1278C81.4508 28.3892 81.6681 28.7287 81.8272 29.1463C81.9863 29.5611 82.0659 30.0653 82.0659 30.6591V31.1108H76.8627V30.1562H80.8173C80.8173 29.821 80.7491 29.5241 80.6127 29.2656C80.4764 29.0043 80.2846 28.7983 80.0375 28.6477C79.7931 28.4972 79.5062 28.4219 79.1767 28.4219C78.8187 28.4219 78.5062 28.5099 78.2392 28.6861C77.975 28.8594 77.7704 29.0866 77.6255 29.3679C77.4835 29.6463 77.4125 29.9489 77.4125 30.2756V31.0213C77.4125 31.4588 77.4892 31.831 77.6426 32.1378C77.7988 32.4446 78.0162 32.679 78.2946 32.8409C78.573 33 78.8983 33.0795 79.2704 33.0795C79.5119 33.0795 79.7321 33.0455 79.9309 32.9773C80.1298 32.9062 80.3017 32.8011 80.4466 32.6619C80.5914 32.5227 80.7022 32.3509 80.7789 32.1463L81.9849 32.3636C81.8883 32.7187 81.715 33.0298 81.465 33.2969C81.2179 33.5611 80.9068 33.767 80.5318 33.9148C80.1596 34.0597 79.7349 34.1321 79.2576 34.1321ZM33.0661 49.1449C32.6513 49.1449 32.2763 49.0682 31.9411 48.9148C31.6058 48.7585 31.3402 48.5327 31.1442 48.2372C30.951 47.9418 30.8544 47.5795 30.8544 47.1506C30.8544 46.7812 30.9254 46.4773 31.0675 46.2386C31.2095 46 31.4013 45.8111 31.6428 45.6719C31.8842 45.5327 32.1541 45.4276 32.4524 45.3565C32.7507 45.2855 33.0547 45.2315 33.3643 45.1946C33.7564 45.1491 34.0746 45.1122 34.3189 45.0838C34.5632 45.0526 34.7408 45.0028 34.8516 44.9347C34.9624 44.8665 35.0178 44.7557 35.0178 44.6023V44.5724C35.0178 44.2003 34.9126 43.9119 34.7024 43.7074C34.495 43.5028 34.1854 43.4006 33.7734 43.4006C33.3445 43.4006 33.0064 43.4957 32.7592 43.6861C32.5149 43.8736 32.3459 44.0824 32.2521 44.3125L31.0547 44.0398C31.1967 43.642 31.4041 43.321 31.6768 43.0767C31.9524 42.8295 32.2692 42.6506 32.6271 42.5398C32.9851 42.4261 33.3615 42.3693 33.7564 42.3693C34.0178 42.3693 34.2947 42.4006 34.5874 42.4631C34.8828 42.5227 35.1584 42.6335 35.4141 42.7955C35.6726 42.9574 35.8842 43.1889 36.049 43.4901C36.2138 43.7884 36.2962 44.1761 36.2962 44.6534V49H35.0518V48.1051H35.0007C34.9183 48.2699 34.7947 48.4318 34.63 48.5909C34.4652 48.75 34.2536 48.8821 33.995 48.9872C33.7365 49.0923 33.4268 49.1449 33.0661 49.1449ZM33.343 48.1222C33.6953 48.1222 33.9964 48.0526 34.2464 47.9134C34.4993 47.7741 34.6911 47.5923 34.8217 47.3679C34.9553 47.1406 35.022 46.8977 35.022 46.6392V45.7955C34.9766 45.8409 34.8885 45.8835 34.7578 45.9233C34.63 45.9602 34.4837 45.9929 34.3189 46.0213C34.1541 46.0469 33.9936 46.071 33.8374 46.0938C33.6811 46.1136 33.5504 46.1307 33.4453 46.1449C33.1982 46.1761 32.9723 46.2287 32.7678 46.3026C32.5661 46.3764 32.4041 46.483 32.282 46.6222C32.1626 46.7585 32.103 46.9403 32.103 47.1676C32.103 47.483 32.2195 47.7216 32.4524 47.8835C32.6854 48.0426 32.9822 48.1222 33.343 48.1222ZM43.3583 42.4545L40.9847 49H39.6211L37.2433 42.4545H38.6112L40.2688 47.4915H40.337L41.9904 42.4545H43.3583ZM46.2731 49.1449C45.8583 49.1449 45.4833 49.0682 45.1481 48.9148C44.8129 48.7585 44.5472 48.5327 44.3512 48.2372C44.158 47.9418 44.0614 47.5795 44.0614 47.1506C44.0614 46.7812 44.1325 46.4773 44.2745 46.2386C44.4165 46 44.6083 45.8111 44.8498 45.6719C45.0913 45.5327 45.3612 45.4276 45.6594 45.3565C45.9577 45.2855 46.2617 45.2315 46.5714 45.1946C46.9634 45.1491 47.2816 45.1122 47.5259 45.0838C47.7702 45.0526 47.9478 45.0028 48.0586 44.9347C48.1694 44.8665 48.2248 44.7557 48.2248 44.6023V44.5724C48.2248 44.2003 48.1197 43.9119 47.9094 43.7074C47.7021 43.5028 47.3924 43.4006 46.9805 43.4006C46.5515 43.4006 46.2134 43.4957 45.9663 43.6861C45.7219 43.8736 45.5529 44.0824 45.4592 44.3125L44.2617 44.0398C44.4038 43.642 44.6112 43.321 44.8839 43.0767C45.1594 42.8295 45.4762 42.6506 45.8342 42.5398C46.1921 42.4261 46.5685 42.3693 46.9634 42.3693C47.2248 42.3693 47.5018 42.4006 47.7944 42.4631C48.0898 42.5227 48.3654 42.6335 48.6211 42.7955C48.8796 42.9574 49.0913 43.1889 49.256 43.4901C49.4208 43.7884 49.5032 44.1761 49.5032 44.6534V49H48.2589V48.1051H48.2077C48.1254 48.2699 48.0018 48.4318 47.837 48.5909C47.6722 48.75 47.4606 48.8821 47.2021 48.9872C46.9435 49.0923 46.6339 49.1449 46.2731 49.1449ZM46.5501 48.1222C46.9023 48.1222 47.2035 48.0526 47.4535 47.9134C47.7063 47.7741 47.8981 47.5923 48.0288 47.3679C48.1623 47.1406 48.229 46.8977 48.229 46.6392V45.7955C48.1836 45.8409 48.0955 45.8835 47.9648 45.9233C47.837 45.9602 47.6907 45.9929 47.5259 46.0213C47.3612 46.0469 47.2006 46.071 47.0444 46.0938C46.8881 46.1136 46.7575 46.1307 46.6523 46.1449C46.4052 46.1761 46.1793 46.2287 45.9748 46.3026C45.7731 46.3764 45.6112 46.483 45.489 46.6222C45.3697 46.7585 45.31 46.9403 45.31 47.1676C45.31 47.483 45.4265 47.7216 45.6594 47.8835C45.8924 48.0426 46.1893 48.1222 46.5501 48.1222ZM51.2003 49V42.4545H52.4744V49H51.2003ZM51.8438 41.4446C51.6222 41.4446 51.4318 41.3707 51.2727 41.223C51.1165 41.0724 51.0384 40.8935 51.0384 40.6861C51.0384 40.4759 51.1165 40.2969 51.2727 40.1491C51.4318 39.9986 51.6222 39.9233 51.8438 39.9233C52.0653 39.9233 52.2543 39.9986 52.4105 40.1491C52.5696 40.2969 52.6491 40.4759 52.6491 40.6861C52.6491 40.8935 52.5696 41.0724 52.4105 41.223C52.2543 41.3707 52.0653 41.4446 51.8438 41.4446ZM55.4627 40.2727V49H54.1886V40.2727H55.4627ZM59.0817 49.1449C58.6669 49.1449 58.2919 49.0682 57.9567 48.9148C57.6214 48.7585 57.3558 48.5327 57.1598 48.2372C56.9666 47.9418 56.87 47.5795 56.87 47.1506C56.87 46.7812 56.9411 46.4773 57.0831 46.2386C57.2251 46 57.4169 45.8111 57.6584 45.6719C57.8999 45.5327 58.1697 45.4276 58.468 45.3565C58.7663 45.2855 59.0703 45.2315 59.38 45.1946C59.772 45.1491 60.0902 45.1122 60.3345 45.0838C60.5788 45.0526 60.7564 45.0028 60.8672 44.9347C60.978 44.8665 61.0334 44.7557 61.0334 44.6023V44.5724C61.0334 44.2003 60.9283 43.9119 60.718 43.7074C60.5107 43.5028 60.201 43.4006 59.7891 43.4006C59.3601 43.4006 59.022 43.4957 58.7749 43.6861C58.5305 43.8736 58.3615 44.0824 58.2678 44.3125L57.0703 44.0398C57.2124 43.642 57.4197 43.321 57.6925 43.0767C57.968 42.8295 58.2848 42.6506 58.6428 42.5398C59.0007 42.4261 59.3771 42.3693 59.772 42.3693C60.0334 42.3693 60.3104 42.4006 60.603 42.4631C60.8984 42.5227 61.174 42.6335 61.4297 42.7955C61.6882 42.9574 61.8999 43.1889 62.0646 43.4901C62.2294 43.7884 62.3118 44.1761 62.3118 44.6534V49H61.0675V48.1051H61.0163C60.9339 48.2699 60.8104 48.4318 60.6456 48.5909C60.4808 48.75 60.2692 48.8821 60.0107 48.9872C59.7521 49.0923 59.4425 49.1449 59.0817 49.1449ZM59.3587 48.1222C59.7109 48.1222 60.0121 48.0526 60.2621 47.9134C60.5149 47.7741 60.7067 47.5923 60.8374 47.3679C60.9709 47.1406 61.0376 46.8977 61.0376 46.6392V45.7955C60.9922 45.8409 60.9041 45.8835 60.7734 45.9233C60.6456 45.9602 60.4993 45.9929 60.3345 46.0213C60.1697 46.0469 60.0092 46.071 59.853 46.0938C59.6967 46.1136 59.5661 46.1307 59.4609 46.1449C59.2138 46.1761 58.9879 46.2287 58.7834 46.3026C58.5817 46.3764 58.4197 46.483 58.2976 46.6222C58.1783 46.7585 58.1186 46.9403 58.1186 47.1676C58.1186 47.483 58.2351 47.7216 58.468 47.8835C58.701 48.0426 58.9979 48.1222 59.3587 48.1222ZM64.1112 49V40.2727H65.3853V43.5156H65.462C65.5359 43.3793 65.6424 43.2216 65.7816 43.0426C65.9208 42.8636 66.114 42.7074 66.3612 42.5739C66.6083 42.4375 66.935 42.3693 67.3413 42.3693C67.8697 42.3693 68.3413 42.5028 68.756 42.7699C69.1708 43.0369 69.4961 43.4219 69.7319 43.9247C69.9705 44.4276 70.0898 45.0327 70.0898 45.7401C70.0898 46.4474 69.9719 47.054 69.7362 47.5597C69.5004 48.0625 69.1765 48.4503 68.7646 48.723C68.3526 48.9929 67.8825 49.1278 67.354 49.1278C66.9563 49.1278 66.631 49.0611 66.3782 48.9276C66.1282 48.794 65.9322 48.6378 65.7901 48.4588C65.6481 48.2798 65.5387 48.1207 65.462 47.9815H65.3555V49H64.1112ZM65.3597 45.7273C65.3597 46.1875 65.4265 46.5909 65.56 46.9375C65.6935 47.2841 65.8867 47.5554 66.1396 47.7514C66.3924 47.9446 66.7021 48.0412 67.0685 48.0412C67.4492 48.0412 67.7674 47.9403 68.0231 47.7386C68.2788 47.5341 68.4719 47.2571 68.6026 46.9077C68.7362 46.5582 68.8029 46.1648 68.8029 45.7273C68.8029 45.2955 68.7376 44.9077 68.6069 44.5639C68.479 44.2202 68.2859 43.9489 68.0273 43.75C67.7717 43.5511 67.4521 43.4517 67.0685 43.4517C66.6992 43.4517 66.3867 43.5469 66.131 43.7372C65.8782 43.9276 65.6864 44.1932 65.5558 44.5341C65.4251 44.875 65.3597 45.2727 65.3597 45.7273ZM72.7947 40.2727V49H71.5206V40.2727H72.7947ZM77.3299 49.1321C76.685 49.1321 76.1296 48.9943 75.6637 48.7188C75.2006 48.4403 74.8427 48.0497 74.5898 47.5469C74.3398 47.0412 74.2148 46.4489 74.2148 45.7699C74.2148 45.0994 74.3398 44.5085 74.5898 43.9972C74.8427 43.4858 75.195 43.0866 75.6467 42.7997C76.1012 42.5128 76.6325 42.3693 77.2404 42.3693C77.6097 42.3693 77.9677 42.4304 78.3143 42.5526C78.6609 42.6747 78.9719 42.8665 79.2475 43.1278C79.5231 43.3892 79.7404 43.7287 79.8995 44.1463C80.0586 44.5611 80.1381 45.0653 80.1381 45.6591V46.1108H74.935V45.1562H78.8896C78.8896 44.821 78.8214 44.5241 78.685 44.2656C78.5487 44.0043 78.3569 43.7983 78.1097 43.6477C77.8654 43.4972 77.5785 43.4219 77.2489 43.4219C76.891 43.4219 76.5785 43.5099 76.3114 43.6861C76.0472 43.8594 75.8427 44.0866 75.6978 44.3679C75.5558 44.6463 75.4847 44.9489 75.4847 45.2756V46.0213C75.4847 46.4588 75.5614 46.831 75.7148 47.1378C75.8711 47.4446 76.0884 47.679 76.3668 47.8409C76.6452 48 76.9705 48.0795 77.3427 48.0795C77.5842 48.0795 77.8043 48.0455 78.0032 47.9773C78.2021 47.9062 78.3739 47.8011 78.5188 47.6619C78.6637 47.5227 78.7745 47.3509 78.8512 47.1463L80.0572 47.3636C79.9606 47.7187 79.7873 48.0298 79.5373 48.2969C79.2901 48.5611 78.979 48.767 78.604 48.9148C78.2319 49.0597 77.8072 49.1321 77.3299 49.1321Z" fill="#B8B8B8" />
</svg>
</div>
<div class="iz-news-hub-post-text-container">
<span class="iz-news-hub-notification-title iz-news-hub-text-body iz-news-hub-black-color iz-news-hub-line-clamp iz-news-hub-line-clamp-4">...title...</span>
<div class="iz-nh-noti-time-sharing-wrapper iz-news-hub-d-flex iz-news-hub-d-flex-space-btwn iz-news-hub-align-item-center">
<span class="iz-news-hub-notification-createdAt iz-news-hub-fs-13 iz-news-hub-black-color-light">Jun 13,
4:56 PM</span>
<div class="iz-news-hub-share-div">
<button class="iz-news-hub-share-before">
<svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 9.71999C9.49333 9.71999 9.04 9.91999 8.69333 10.2333L3.94 7.46666C3.97333 7.31333 4 7.15999 4 6.99999C4 6.83999 3.97333 6.68666 3.94 6.53333L8.64 3.79333C9 4.12666 9.47333 4.33333 10 4.33333C11.1067 4.33333 12 3.43999 12 2.33333C12 1.22666 11.1067 0.333328 10 0.333328C8.89333 0.333328 8 1.22666 8 2.33333C8 2.49333 8.02667 2.64666 8.06 2.79999L3.36 5.53999C3 5.20666 2.52667 4.99999 2 4.99999C0.893333 4.99999 0 5.89333 0 6.99999C0 8.10666 0.893333 8.99999 2 8.99999C2.52667 8.99999 3 8.79333 3.36 8.45999L8.10667 11.2333C8.07333 11.3733 8.05333 11.52 8.05333 11.6667C8.05333 12.74 8.92667 13.6133 10 13.6133C11.0733 13.6133 11.9467 12.74 11.9467 11.6667C11.9467 10.5933 11.0733 9.71999 10 9.71999Z" fill="black" fill-opacity="0.5" />
</svg>
</button>
<div class="iz-news-hub-share-icons">
<a href="javascript:;" class="iz-news-hub-social-share-link iz-news-hub-social-link">
<svg width="32" height="32" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="44" height="44" rx="22" fill="#A8A8A8" />
<path d="M13.9 22C13.9 20.29 15.29 18.9 17 18.9H21V17H17C14.24 17 12 19.24 12 22C12 24.76 14.24 27 17 27H21V25.1H17C15.29 25.1 13.9 23.71 13.9 22ZM18 23H26V21H18V23ZM27 17H23V18.9H27C28.71 18.9 30.1 20.29 30.1 22C30.1 23.71 28.71 25.1 27 25.1H23V27H27C29.76 27 32 24.76 32 22C32 19.24 29.76 17 27 17Z" fill="white" />
</svg>
<span class="iz-news-hub-icon-tooltip iz-news-hub-share-icon-tooltip">Copy Link</span>
</a>
<a href="javascript:void(0);" class="iz-news-hub-social-share-whatsapp iz-news-hub-social-link" target="_blank">
<svg width="32" height="32" viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.200195" width="44" height="44" rx="22" fill="#3FC350" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M30.1591 14.0081C28.0541 11.9006 25.2547 10.7395 22.2723 10.7383C16.1268 10.7383 11.1253 15.7397 11.1228 21.8868C11.122 23.8518 11.6353 25.7701 12.6111 27.4608L11.0293 33.2383L16.9398 31.6878C18.5684 32.5762 20.4019 33.0444 22.2678 33.0449H22.2724C28.4172 33.0449 33.4193 28.0431 33.4216 21.8957C33.4229 18.9165 32.2642 16.1154 30.1591 14.0081ZM22.2723 31.162H22.2684C20.6057 31.1613 18.9749 30.7144 17.5519 29.8703L17.2136 29.6694L13.7063 30.5895L14.6424 27.1698L14.422 26.8192C13.4944 25.3438 13.0045 23.6384 13.0053 21.8875C13.0072 16.7782 17.1645 12.6213 22.276 12.6213C24.7512 12.6222 27.078 13.5873 28.8276 15.3389C30.5771 17.0906 31.5401 19.4189 31.5393 21.895C31.5371 27.0048 27.3801 31.162 22.2723 31.162ZM27.3554 24.2215C27.0769 24.082 25.7072 23.4083 25.4517 23.3152C25.1966 23.2222 25.0106 23.1759 24.8251 23.4547C24.6393 23.7335 24.1055 24.3611 23.9429 24.5469C23.7803 24.7328 23.618 24.7562 23.3393 24.6166C23.0607 24.4772 22.1631 24.1829 21.099 23.2339C20.2709 22.4952 19.7118 21.5829 19.5492 21.3041C19.3869 21.0251 19.5478 20.8888 19.6714 20.7356C19.973 20.3611 20.275 19.9684 20.3678 19.7826C20.4608 19.5967 20.4142 19.434 20.3445 19.2946C20.275 19.1552 19.7178 17.784 19.4858 17.226C19.2594 16.683 19.03 16.7563 18.8588 16.7478C18.6965 16.7397 18.5107 16.7381 18.3249 16.7381C18.1392 16.7381 17.8374 16.8077 17.582 17.0867C17.3267 17.3656 16.6071 18.0395 16.6071 19.4108C16.6071 20.782 17.6053 22.1067 17.7446 22.2926C17.8838 22.4785 19.709 25.2924 22.5036 26.499C23.1682 26.7863 23.6871 26.9575 24.0918 27.0859C24.7592 27.298 25.3663 27.268 25.8464 27.1964C26.3817 27.1163 27.4945 26.5223 27.7269 25.8717C27.959 25.2209 27.959 24.6632 27.8892 24.5469C27.8197 24.4307 27.6339 24.3611 27.3554 24.2215Z" fill="white" />
</svg>
<span class="iz-news-hub-icon-tooltip iz-news-hub-whatsapp-icon-tooltip">Whatsapp</span>
</a>
<a href="javascript:void(0);" class="iz-news-hub-social-share-facebook iz-news-hub-social-link" target="_blank">
<svg width="32" height="32" viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.399902" width="44" height="44" rx="22" fill="#3C539A" />
<path d="M20.0958 23.248C20.0238 23.248 18.4398 23.248 17.7198 23.248C17.3358 23.248 17.2158 23.104 17.2158 22.744C17.2158 21.784 17.2158 20.8 17.2158 19.84C17.2158 19.456 17.3598 19.336 17.7198 19.336H20.0958C20.0958 19.264 20.0958 17.872 20.0958 17.224C20.0958 16.264 20.2638 15.352 20.7438 14.512C21.2478 13.648 21.9678 13.072 22.8798 12.736C23.4798 12.52 24.0798 12.424 24.7278 12.424H27.0798C27.4158 12.424 27.5598 12.568 27.5598 12.904V15.64C27.5598 15.976 27.4158 16.12 27.0798 16.12C26.4318 16.12 25.7838 16.12 25.1358 16.144C24.4878 16.144 24.1518 16.456 24.1518 17.128C24.1278 17.848 24.1518 18.544 24.1518 19.288H26.9358C27.3198 19.288 27.4638 19.432 27.4638 19.816V22.72C27.4638 23.104 27.3438 23.224 26.9358 23.224C26.0718 23.224 24.2238 23.224 24.1518 23.224V31.048C24.1518 31.456 24.0318 31.6 23.5998 31.6C22.5918 31.6 21.6078 31.6 20.5998 31.6C20.2398 31.6 20.0958 31.456 20.0958 31.096C20.0958 28.576 20.0958 23.32 20.0958 23.248Z" fill="white" />
</svg>
<span class="iz-news-hub-icon-tooltip iz-news-hub-facebook-icon-tooltip">Facebook</span>
</a>
<a href="javascript:void(0);" class="iz-news-hub-social-share-twitter iz-news-hub-social-link" target="_blank">
<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="15" cy="15" r="15" fill="black" /><path d="M18.9886 9H20.0109L10.0442 20.5H9.02197L18.9886 9Z" fill="white" /><path d="M8 9H11.0667L21.2889 20.5H18.2222L8 9Z" fill="white" /><path d="M10 10.5H11.5L18.8994 18.7164H17.3454L10 10.5Z" fill="black" /></svg>
<span class="iz-news-hub-icon-tooltip iz-news-hub-twitter-icon-tooltip">X (formely Twitter)</span>
</a>
<a href="javascript:void(0);" class="iz-news-hub-social-share-mail iz-news-hub-social-link" target="_blank">
<svg width="32" height="32" viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.799805" width="44" height="44" rx="22" fill="#F44336" />
<g clip-path="url(#clip0_291_1185)">
<path d="M26.351 22.9961L24.341 25.013C23.5259 25.831 22.0917 25.8486 21.2589 25.013L19.2488 22.9961L12.0293 30.2391C12.298 30.3633 12.5943 30.4375 12.9093 30.4375H32.6906C33.0056 30.4375 33.3018 30.3634 33.5704 30.2391L26.351 22.9961Z" fill="white" />
<path d="M32.6905 13.5625H12.9092C12.5942 13.5625 12.2979 13.6367 12.0293 13.7609L19.7438 21.5011C19.7444 21.5016 19.745 21.5017 19.7455 21.5022C19.746 21.5027 19.7461 21.5034 19.7461 21.5034L22.2545 24.0201C22.521 24.2866 23.0789 24.2866 23.3453 24.0201L25.8532 21.5038C25.8532 21.5038 25.8538 21.5027 25.8543 21.5022C25.8543 21.5022 25.8555 21.5016 25.856 21.5011L33.5703 13.7609C33.3017 13.6366 33.0055 13.5625 32.6905 13.5625Z" fill="white" />
<path d="M11.0241 14.7443C10.8851 15.0255 10.7998 15.3376 10.7998 15.6719V28.3281C10.7998 28.6624 10.885 28.9745 11.0241 29.2557L18.2561 22.0002L11.0241 14.7443Z" fill="white" />
<path d="M34.5757 14.7442L27.3438 22.0002L34.5757 29.2558C34.7147 28.9746 34.8 28.6625 34.8 28.3281V15.6719C34.8 15.3375 34.7147 15.0254 34.5757 14.7442Z" fill="white" />
</g>
<defs>
<clipPath id="clip0_291_1185">
<rect width="24" height="24" fill="white" transform="translate(10.7998 10)" />
</clipPath>
</defs>
</svg>
<span class="iz-news-hub-icon-tooltip iz-news-hub-mail-icon-tooltip">Mail</span>
</a>
<a href="javascript:void(0);" class="iz-news-hub-social-share-linkedin iz-news-hub-social-link" target="_blank">
<svg width="32" height="32" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="44" height="44" rx="22" fill="#0077B7" />
<path d="M31.5999 31.6V24.568C31.5999 21.112 30.8559 18.472 26.8239 18.472C24.8799 18.472 23.5839 19.528 23.0559 20.536H23.0079V18.784H19.1919V31.6H23.1759V25.24C23.1759 23.56 23.4879 21.952 25.5519 21.952C27.5919 21.952 27.6159 23.848 27.6159 25.336V31.576H31.5999V31.6Z" fill="white" />
<path d="M12.7119 18.784H16.6959V31.6H12.7119V18.784Z" fill="white" />
<path d="M14.7039 12.4C13.4319 12.4 12.3999 13.432 12.3999 14.704C12.3999 15.976 13.4319 17.032 14.7039 17.032C15.9759 17.032 17.0079 15.976 17.0079 14.704C17.0079 13.432 15.9759 12.4 14.7039 12.4Z" fill="white" />
</svg>
<span class="iz-news-hub-icon-tooltip iz-news-hub-linkedin-icon-tooltip">Linkedin</span>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
<div id="iz-news-hub-end-text" class="iz-news-hub-post-container iz-news-hub-notification iz-news-hub-d-flex iz-news-hub-d-flex-row iz-news-hub-d-flex-center iz-news-hub-align-item-center" style="display: none;">
<div class="iz-news-hub-end-text">🎉 You're all caught up!</div>
</div>
<div class="iz-news-hub-alerts-container">
<div class="iz-news-hub-noti-blocked-wrapper" dir="ltr">
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M9 13H11V15H9V13ZM9 5H11V11H9V5ZM9.99 0C4.47 0 0 4.48 0 10C0 15.52 4.47 20 9.99 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 9.99 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z" fill="black" fill-opacity="0.7" />
</svg>
<span class="iz-news-hub-noti-blockd-txt">Unblock notifications to start receiving real time updates. <span class="know-more-txt">Know More<div class="know-more-txt-tooltip"><img src></div></span></span>
</div>
<div class="iz-news-hub-noti-default-wrapper" dir="ltr"><button class="iz-news-hub-btn" id="enable-turned-off-notis-cta">Subscribe to notifications</button></div>
</div>
</div>
<div class="iz-news-hub-copied-main" id="iz-news-hub-copied-main">
<div class="iz-news-hub-copied-div">Link copied to clipboard. <button class="iz-news-hub-copyclose-button">CLOSE</button>
</div>
</div>
</div>
</div>
</div>