.bcpNotificationBarBodyCollapsingFix {
  padding-top: 0.1px;
  position: relative;
}

.bcpNotificationBar {
  width: 100%;
  z-index: 15000;
  color: #fff;
}

.bcpNotificationBarTop,
.bcpNotificationBarStickyTop {
  position: fixed;
  top: 0;
  left: 0;
}

.bcpNotificationBarBottom,
.bcpNotificationBarStickyBottom {
  position: fixed;
  bottom: 0;
  left: 0;
}

.bcpNotificationBarSlideTopAnimation {
  animation-name: slideTopAnimation;
  animation-timing-function: ease;
  animation-fill-mode: none;
  animation-duration: 0.5s;
}

.bcpNotificationBarSlideBottomAnimation {
  animation-name: slideBottomAnimation;
  animation-timing-function: ease;
  animation-fill-mode: none;
  animation-duration: 0.5s;
}

.bcpNotificationBarFadeAnimation {
  animation-name: fadeAnimation;
  animation-timing-function: ease;
  animation-fill-mode: none;
  animation-duration: 0.5s;
}

.bcpNotificationBarClose {
  position: absolute;
  width: 18px;
  height: 18px;
}

.bcpNotificationBarCloseIcon {
  background-image: url("images/CloseIconNotificationBar.png");
  background-repeat: no-repeat;
  background-size: 36px 18px;
  cursor: pointer;
}

.bcpNotificationBarCloseIcon:hover {
  background-position: -18px 0;
}

.bcpNotificationBarCloseTopRight {
  top: 0;
  right: 0;
}

.bcpNotificationBarCloseTopLeft {
  top: 0;
  left: 0;
}

.bcpNotificationBarCloseBottomRight {
  bottom: 0;
  right: 0;
}

.bcpNotificationBarCloseVerticalCenter {
  top: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
}

.bcpNotificationBarContent {
  box-sizing: border-box;
  display: inline-block;
  width: 100%;
  height: 100%;
  padding: 7px 30px;
}

@keyframes slideTopAnimation {
  0% {
    transform: translateY(-100%);
  }

  100% {
    transform: translateY(0);
  }
}

@keyframes slideBottomAnimation {
  0% {
    transform: translateY(100%);
  }

  100% {
    transform: translateY(0);
  }
}

@keyframes fadeAnimation {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
.bcpNotificationBarModern {
  display: block;
  z-index: 15000;
}
.bcpNotificationBarModernStickyTop,
.bcpNotificationBarModernTop {
  position: sticky;
  top: 0;
}

.bcpNotificationBarModernStickyBottom,
.bcpNotificationBarModernBottom {
  position: sticky;
  bottom: 0;
}
.bcpNotificationBarModernTop,
.bcpNotificationBarModernBottom {
  position: static;
}
.bcpNotificationModernSlideIn {
  height: 0;
  overflow: hidden;
}
.bcpNotificationBarModernSlideTopAnimation {
  animation: slide-in-top 0.5s forwards;
}
.bcpNotificationBarModernSlideBottomAnimation {
  animation: slide-in-bottom 0.5s forwards;
}
.bcpNotificationBarModernFadeAnimation {
  animation: fadeInNew 0.5s forwards;
}
.bcpNotificationModernFadeIn {
  opacity: 0;
  height: auto;
}

@keyframes fadeInNew {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes slide-in-top {
  0% {
    transform: translateY(-100%);
    height: 0;
  }
  100% {
    transform: translateY(0%);
    height: auto;
  }
}

@keyframes slide-in-bottom {
  0% {
    transform: translateY(100%);
    height: 0;
  }
  100% {
    transform: translateY(0%);
    height: auto;
  }
}
