.col-md-da-320,
.col-da-320 {
  position: sticky;
  position: -webkit-sticky;
  top: 45px;
  align-self: flex-start;
}

body.cm_ld .adthrive-content {
  min-height: 0px !important;
}
body.adthrive-device-desktop:not(.cm_ld) .adthrive-ad.adthrive-content {
  padding: 20px;
}
body.adthrive-device-phone .adthrive-footer.adthrive-sticky {
  background-color: hsla(0, 0%, 100%, 0.8);
}
.adthrive-sticky.adthrive-footer {
  z-index: 900;
  background-color: unset;
  border: unset;
  width: unset;
  left: 50%;
  transform: translateX(-50%);
}
body.britannica-money .adthrive-ad.adthrive-sidebar-1 {
  margin-top: 60px;
}
body.quiz-page .adthrive-ad.adthrive-sidebar.adthrive-sidebar-2 {
  top: 7rem;
  position: sticky;
}
body.game .adthrive-ad.adthrive-sidebar.adthrive-sidebar-9 {
  top: 7rem;
  position: sticky;
}
body:not(.cm_ld):not(.game):not(.britannica-money)
  .adthrive-ad.adthrive-sidebar.adthrive-sidebar-9 {
  top: 3rem;
  position: sticky;
}
/* confirmed clicks code start */
body.adthrive-device-phone .adthrive-footer.adthrive-sticky {
  padding-top: 0px;
  overflow: visible !important;
  border-top: 0px !important;
}
body.adthrive-device-phone .adthrive-sticky.adthrive-footer > .adthrive-close {
  top: -25px !important;
  right: 0px !important;
  border-radius: 0px !important;
  line-height: 24px !important;
  font-size: 24px !important;
}
/* confirmed clicks code end */
@media (min-width: 768px) and (max-width: 1250px) {
  .col-md-da-320,
  .col-da-320 {
    position: sticky;
    position: -webkit-sticky;
    top: 100px;
    align-self: flex-start;
  }
}
