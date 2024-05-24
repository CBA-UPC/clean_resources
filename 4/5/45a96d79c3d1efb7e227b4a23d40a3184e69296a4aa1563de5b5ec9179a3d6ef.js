/* Adform FlexGallery Component Styles */
.adf-FlexGallery {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.adf-FlexGallery .adf-Shape {
  width: 100%;
  height: 100%;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.adf-FlexGallery .adf-Controls.u-hCentered {
  -webkit-transform: translate3d(-50%, 0, 30000000px);
  -moz-transform: translate3d(-50%, 0, 30000000px);
  -ms-transform: translate3d(-50%, 0, 30000000px);
  -o-transform: translate3d(-50%, 0, 30000000px);
  transform: translate3d(-50%, 0, 30000000px);
}
.adf-FlexGallery .adf-Controls.u-vCentered {
  -webkit-transform: translate3d(0, -50%, 30000000px);
  -moz-transform: translate3d(0, -50%, 30000000px);
  -ms-transform: translate3d(0, -50%, 30000000px);
  -o-transform: translate3d(0, -50%, 30000000px);
  transform: translate3d(0, -50%, 30000000px);
}
.adf-FlexGallery .adf-Controls.u-centered {
  -webkit-transform: translate3d(-50%, -50%, 30000000px);
  -moz-transform: translate3d(-50%, -50%, 30000000px);
  -ms-transform: translate3d(-50%, -50%, 30000000px);
  -o-transform: translate3d(-50%, -50%, 30000000px);
  transform: translate3d(-50%, -50%, 30000000px);
}
.adf-FlexGallery .hidden {
  visibility: hidden;
}
.adf-FlexGallery-Panel {
  cursor: pointer;
}
.no-controls .adf-Controls {
  display: none;
}
.adf-FlexGallery-Bullets {
  position: absolute;
  z-index: 10000;
  bottom: 5px;
  width: 100%;
  text-align: center;
}
.adf-FlexGallery-Bullets > .active {
  background: #fff;
  opacity: 1;
}
.adf-FlexGallery-Bullet {
  display: inline-block;
  width: 12px;
  height: 12px;
  margin: 15px 5px;
  border-radius: 10px;
  background: #000;
  opacity: 0.7;
  cursor: pointer;
}
.adf-FlexGallery-Finger {
  position: absolute;
  height: 25%;
  min-height: 50px;
  opacity: 0;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 99999;
}
.adf-FlexGallery-Finger.animate {
  animation-name: pulse-horizontal;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  -webkit-animation-name: pulse-horizontal;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-timing-function: ease-in-out;
}
.vertical .adf-FlexGallery-Finger.animate {
  animation-name: pulse-vertical;
  -webkit-animation-name: pulse-vertical;
}
@-webkit-keyframes pulse-horizontal {
  70% {
    -webkit-transform: rotate(10deg);
    opacity: 0;
    left: 50%;
  }
  85% {
    opacity: 1;
  }
  100% {
    -webkit-transform: rotate(-10deg);
    opacity: 0;
    left: -50%;
  }
}
@keyframes pulse-horizontal {
  70% {
    transform: rotate(10deg);
    opacity: 0;
    left: 50%;
  }
  85% {
    opacity: 1;
  }
  100% {
    transform: rotate(-10deg);
    opacity: 0;
    left: -50%;
  }
}
@-webkit-keyframes pulse-vertical {
  70% {
    transform: rotate(-60deg);
    opacity: 0;
    top: 50%;
  }
  85% {
    opacity: 1;
  }
  100% {
    transform: rotate(-10deg);
    opacity: 0;
    top: -50%;
  }
}
@keyframes pulse-vertical {
  70% {
    transform: rotate(-60deg);
    opacity: 0;
    top: 50%;
  }
  85% {
    opacity: 1;
  }
  100% {
    transform: rotate(-10deg);
    opacity: 0;
    top: -50%;
  }
}
